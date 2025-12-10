"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calendar,
    Clock,
    MapPin,
    User,
    ChevronLeft,
    Filter
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { alunoLogado, aulas, instrutores } from "@/data/mockData";

export default function MinhasAulasPage() {
    const [filter, setFilter] = React.useState<"todas" | "proximas" | "concluidas">("todas");

    const minhasAulas = aulas.filter(a => a.alunoId === alunoLogado.id);

    const filteredAulas = React.useMemo(() => {
        const now = new Date();
        switch (filter) {
            case "proximas":
                return minhasAulas.filter(a => new Date(a.data) >= now && a.status !== "cancelada");
            case "concluidas":
                return minhasAulas.filter(a => a.status === "concluida");
            default:
                return minhasAulas;
        }
    }, [minhasAulas, filter]);

    const getInstrutor = (id: string) => instrutores.find(i => i.id === id);

    return (
        <div className="min-h-screen bg-secondary pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Link */}
                <Link
                    href="/minha-conta"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Voltar para Minha Conta
                </Link>

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-foreground">
                        Minhas Aulas
                    </h1>
                    <div className="flex items-center gap-2 bg-card rounded-lg border border-border p-1">
                        {["todas", "proximas", "concluidas"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f as typeof filter)}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === f
                                        ? "bg-primary text-white"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {f === "todas" ? "Todas" : f === "proximas" ? "Próximas" : "Concluídas"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lessons List */}
                {filteredAulas.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card rounded-xl border border-border p-12 text-center"
                    >
                        <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                        <p className="text-muted-foreground mb-4">
                            {filter === "proximas" ? "Nenhuma aula agendada" :
                                filter === "concluidas" ? "Nenhuma aula concluída ainda" :
                                    "Você ainda não tem aulas"}
                        </p>
                        <Link
                            href="/instrutores"
                            className="inline-block px-4 py-2 bg-success text-white rounded-lg font-medium hover:bg-success/90 transition-colors"
                        >
                            Agendar Primeira Aula
                        </Link>
                    </motion.div>
                ) : (
                    <div className="space-y-4">
                        {filteredAulas
                            .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
                            .map((aula, index) => {
                                const instrutor = getInstrutor(aula.instrutorId);
                                return (
                                    <motion.div
                                        key={aula.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-card rounded-xl border border-border p-4 md:p-6"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                                            {/* Date */}
                                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center text-primary flex-shrink-0">
                                                <span className="text-xs font-medium">
                                                    {new Date(aula.data).toLocaleDateString("pt-BR", { weekday: "short" })}
                                                </span>
                                                <span className="text-2xl font-bold">
                                                    {new Date(aula.data).getDate()}
                                                </span>
                                                <span className="text-xs">
                                                    {new Date(aula.data).toLocaleDateString("pt-BR", { month: "short" })}
                                                </span>
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    {instrutor && (
                                                        <div className="flex items-center gap-2">
                                                            <img
                                                                src={instrutor.foto}
                                                                alt={instrutor.nome}
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                            <span className="font-medium text-foreground">
                                                                {instrutor.nome}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {aula.horario}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {aula.endereco}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Status & Price */}
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-success">
                                                        R$ {aula.valor.toFixed(2).replace(".", ",")}
                                                    </p>
                                                    <Badge
                                                        variant={
                                                            aula.status === "confirmada" ? "active" :
                                                                aula.status === "concluida" ? "success" :
                                                                    aula.status === "cancelada" ? "rejected" : "pending"
                                                        }
                                                    >
                                                        {aula.status === "confirmada" && "Confirmada"}
                                                        {aula.status === "agendada" && "Aguardando"}
                                                        {aula.status === "concluida" && "Concluída"}
                                                        {aula.status === "cancelada" && "Cancelada"}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                    </div>
                )}
            </div>
        </div>
    );
}
