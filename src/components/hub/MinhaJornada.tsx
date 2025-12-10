"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Star,
    TrendingUp,
    MessageCircle,
    ThumbsUp,
    ChevronRight,
    Sparkles,
    Award
} from "lucide-react";
import { alunoLogado, aulas, avaliacoesInstrutorSobreAluno } from "@/data/mockData";

export function MinhaJornada() {
    const { nome } = alunoLogado;
    const totalAulas = aulas.filter(a => a.alunoId === alunoLogado.id && a.status === "concluida").length;

    // Get feedback from instructor
    const feedback = avaliacoesInstrutorSobreAluno[0];

    const nivelLabels = {
        iniciante: { label: "Iniciante", color: "text-amber-400", bg: "bg-amber-500/20" },
        em_evolucao: { label: "Em Evolução", color: "text-blue-400", bg: "bg-blue-500/20" },
        confiante: { label: "Confiante", color: "text-purple-400", bg: "bg-purple-500/20" },
        pronto: { label: "Pronto para Prova!", color: "text-success", bg: "bg-success/20" }
    };

    const nivel = feedback ? nivelLabels[feedback.nivelConfianca] : nivelLabels.iniciante;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />

            <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-5 h-5 text-amber-400" />
                            <h3 className="text-lg font-bold text-white">Meu Progresso</h3>
                        </div>
                        <p className="text-white/70 text-sm">
                            Olá, {nome.split(" ")[0]}! Veja seu desempenho.
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-1 text-white">
                            <Award className="w-5 h-5 text-amber-400" />
                            <span className="text-2xl font-bold">{totalAulas}</span>
                        </div>
                        <p className="text-white/60 text-xs">aulas realizadas</p>
                    </div>
                </div>

                {/* Confidence Level */}
                {feedback && (
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-white/80 text-sm">Nível de Confiança</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${nivel.bg} ${nivel.color}`}>
                                {nivel.label}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                    key={star}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 + star * 0.1 }}
                                >
                                    <Star
                                        className={`w-6 h-6 ${star <= feedback.notaGeral
                                                ? "text-amber-400 fill-amber-400"
                                                : "text-white/20"
                                            }`}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Instructor Feedback */}
                {feedback && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src={feedback.instrutorFoto}
                                alt={feedback.instrutorNome}
                                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                            />
                            <div>
                                <p className="text-white font-medium text-sm">{feedback.instrutorNome}</p>
                                <p className="text-white/50 text-xs">Última avaliação</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {/* Strengths */}
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    <ThumbsUp className="w-3 h-3 text-success" />
                                    <span className="text-xs text-success font-medium">Pontos Fortes</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {feedback.pontosFortres.map((ponto) => (
                                        <span
                                            key={ponto}
                                            className="px-2 py-0.5 bg-success/20 text-success text-xs rounded-full"
                                        >
                                            {ponto}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Areas to improve */}
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    <TrendingUp className="w-3 h-3 text-amber-400" />
                                    <span className="text-xs text-amber-400 font-medium">A Melhorar</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {feedback.pontosAMelhorar.map((ponto) => (
                                        <span
                                            key={ponto}
                                            className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full"
                                        >
                                            {ponto}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Recommendation */}
                {feedback && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`rounded-xl p-4 mb-4 ${feedback.aulasRecomendadas === 0
                                ? "bg-gradient-to-r from-success/30 to-emerald-500/30 border border-success/30"
                                : "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/20"
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${feedback.aulasRecomendadas === 0 ? "bg-success/30" : "bg-blue-500/30"
                                }`}>
                                {feedback.aulasRecomendadas === 0 ? (
                                    <Award className="w-5 h-5 text-success" />
                                ) : (
                                    <MessageCircle className="w-5 h-5 text-blue-400" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-white text-sm font-medium mb-1">
                                    {feedback.aulasRecomendadas === 0
                                        ? "🎉 Você está pronto para a prova!"
                                        : `Recomendação: +${feedback.aulasRecomendadas} aulas`}
                                </p>
                                <p className="text-white/70 text-xs">
                                    {feedback.recomendacao}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* CTA Button */}
                <Link href="/instrutores">
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(5, 150, 105, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-success/30 transition-all"
                    >
                        <Sparkles className="w-4 h-4" />
                        Agendar Próxima Aula
                        <ChevronRight className="w-4 h-4" />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
