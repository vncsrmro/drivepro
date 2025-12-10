"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, CheckCircle2, Gift } from "lucide-react";
import { alunoLogado } from "@/data/mockData";

export function MinhaJornada() {
    const { aulasCompletadas, pacoteAulas, nome } = alunoLogado;
    const percentage = (aulasCompletadas / pacoteAulas) * 100;

    // Milestones
    const milestones = [
        { lessons: 5, icon: Target, label: "Iniciante", reward: "Badge Ouro" },
        { lessons: 10, icon: CheckCircle2, label: "Intermediário", reward: "5% Desconto" },
        { lessons: 15, icon: Trophy, label: "Avançado", reward: "10% Desconto" },
        { lessons: 20, icon: Gift, label: "Conclusão", reward: "Certificado" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-white"
        >
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-lg font-semibold">Minha Jornada</h3>
                    <p className="text-white/80 text-sm">Olá, {nome.split(" ")[0]}! Continue evoluindo.</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-bold">{aulasCompletadas}/{pacoteAulas}</p>
                    <p className="text-white/80 text-sm">aulas</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-4 bg-white/20 rounded-full overflow-hidden mb-6">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-success to-emerald-400 rounded-full"
                />
                {/* Milestone markers */}
                {milestones.map((milestone) => (
                    <div
                        key={milestone.lessons}
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white"
                        style={{ left: `${(milestone.lessons / pacoteAulas) * 100}%` }}
                        title={milestone.label}
                    >
                        <div
                            className={`w-full h-full rounded-full ${aulasCompletadas >= milestone.lessons ? "bg-success" : "bg-white/30"
                                }`}
                        />
                    </div>
                ))}
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-4 gap-2">
                {milestones.map((milestone) => {
                    const Icon = milestone.icon;
                    const isAchieved = aulasCompletadas >= milestone.lessons;
                    const isCurrent =
                        aulasCompletadas < milestone.lessons &&
                        (milestones.findIndex((m) => m.lessons === milestone.lessons) === 0 ||
                            aulasCompletadas >= milestones[milestones.findIndex((m) => m.lessons === milestone.lessons) - 1].lessons);

                    return (
                        <div
                            key={milestone.lessons}
                            className={`text-center p-2 rounded-lg transition-all ${isAchieved
                                    ? "bg-success/20"
                                    : isCurrent
                                        ? "bg-white/20 ring-2 ring-white/50"
                                        : "bg-white/10 opacity-60"
                                }`}
                        >
                            <Icon
                                className={`w-5 h-5 mx-auto mb-1 ${isAchieved ? "text-success" : "text-white/70"
                                    }`}
                            />
                            <p className="text-xs font-medium">{milestone.lessons} aulas</p>
                            <p className="text-[10px] text-white/70">{milestone.reward}</p>
                        </div>
                    );
                })}
            </div>

            {/* CTA */}
            <button className="w-full mt-4 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors">
                Agendar Próxima Aula
            </button>
        </motion.div>
    );
}
