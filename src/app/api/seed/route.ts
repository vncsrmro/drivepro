import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { instrutores, alunoLogado, aulas, transacoes, systemConfig } from "@/data/mockData";

export async function GET() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        }
    );

    try {
        // 1. System Config
        const { error: configError } = await supabase
            .from("system_config")
            .delete()
            .neq("id", 0); // Clear existing

        await supabase.from("system_config").insert({
            commission_free: systemConfig.taxaComissaoGratis,
            commission_silver: systemConfig.taxaComissaoPrata,
            commission_gold: systemConfig.taxaComissaoOuro,
            price_silver: systemConfig.precoPlanoPrata,
            price_gold: systemConfig.precoPlanoOuro
        });

        const idMap: Record<string, string> = {}; // MockID -> RealUUID

        // 2. Instructors (Create Auth User + Profile/Instructor)
        for (const inst of instrutores) {
            const { data: user, error: authError } = await supabase.auth.admin.createUser({
                email: inst.email,
                password: "password123", // Default password
                email_confirm: true,
                user_metadata: {
                    full_name: inst.nome,
                    role: "instructor"
                }
            });

            if (authError || !user.user) {
                console.error(`Failed to create instructor ${inst.nome}:`, authError);
                continue;
            }

            const userId = user.user.id;
            idMap[inst.id] = userId;

            // Update Instructor Details
            await supabase.from("instructors").update({
                bio: inst.bio,
                phone: inst.telefone,
                city: inst.cidade,
                state: inst.estado,
                hourly_rate: inst.precoAula,
                plan: inst.plano,
                status: inst.status === "ativo" ? "active" : inst.status === "pendente" ? "pending" : "suspended",
                verified_docs: inst.documentosVerificados,
                enabled_categories: inst.categoriasHabilitadas,
                vehicle_data: inst.veiculo,
                rating: inst.nota,
                rating_count: inst.totalAvaliacoes,
                created_at: new Date(inst.criadoEm).toISOString()
            }).eq("id", userId);

            // Update Profile Avatar
            await supabase.from("profiles").update({
                avatar_url: inst.foto
            }).eq("id", userId);
        }

        // 3. Students
        // Create 'alunoLogado'
        const { data: studentUser, error: studentError } = await supabase.auth.admin.createUser({
            email: alunoLogado.email,
            password: "password123",
            email_confirm: true,
            user_metadata: {
                full_name: alunoLogado.nome,
                role: "student"
            }
        });

        if (studentUser.user) {
            const studentId = studentUser.user.id;
            idMap[alunoLogado.id] = studentId;

            await supabase.from("students").update({
                phone: alunoLogado.telefone,
                city: alunoLogado.cidade,
                state: alunoLogado.estado,
                target_category: alunoLogado.categoriaDesejada,
                package_credits: alunoLogado.pacoteAulas,
                lessons_completed: alunoLogado.aulasCompletadas,
                created_at: new Date(alunoLogado.criadoEm).toISOString()
            }).eq("id", studentId);

            await supabase.from("profiles").update({
                avatar_url: alunoLogado.foto
            }).eq("id", studentId);
        }

        // 4. Lessons
        for (const lesson of aulas) {
            const instructorUUID = idMap[lesson.instrutorId];
            const studentUUID = idMap[lesson.alunoId];

            if (instructorUUID && studentUUID) {
                const { data: lessonData } = await supabase.from("lessons").insert({
                    instructor_id: instructorUUID,
                    student_id: studentUUID,
                    date: lesson.data,
                    time: lesson.horario,
                    duration_minutes: lesson.duracao,
                    price: lesson.valor,
                    status: lesson.status === "agendada" ? "scheduled" :
                        lesson.status === "confirmada" ? "confirmed" :
                            lesson.status === "concluida" ? "completed" : "cancelled",
                    location: lesson.endereco,
                    student_rating: lesson.avaliacaoAluno,
                    student_comment: lesson.comentarioAluno
                }).select().single();

                if (lessonData) {
                    idMap[lesson.id] = lessonData.id;
                }
            }
        }

        // 5. Transactions
        for (const tx of transacoes) {
            const instructorUUID = idMap[tx.instrutorId];
            const lessonUUID = idMap[tx.aulaId];

            if (instructorUUID) {
                await supabase.from("transactions").insert({
                    instructor_id: instructorUUID,
                    lesson_id: lessonUUID, // Can be null if lesson not mapped or not exists
                    gross_amount: tx.valorBruto,
                    commission_rate: tx.taxaComissao,
                    commission_amount: tx.valorComissao,
                    net_amount: tx.valorLiquido,
                    status: tx.status === "liberado" ? "released" :
                        tx.status === "pendente" ? "pending" :
                            tx.status === "pago" ? "paid" : "cancelled",
                    created_at: new Date(tx.criadoEm).toISOString(),
                    released_at: tx.liberadoEm ? new Date(tx.liberadoEm).toISOString() : null
                });
            }
        }

        return NextResponse.json({ success: true, message: "Database seeded successfully!" });
    } catch (error) {
        console.error("Seeding error:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
