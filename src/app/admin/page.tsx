"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    DollarSign,
    TrendingUp,
    Users,
    Clock,
    FileCheck,
    Crown,
    ArrowUpRight,
    ArrowDownRight,
    Calendar,
    Activity,
    MoreHorizontal
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { adminKPIs, getInstrutoresPendentes, transacoes } from "@/data/mockData";

export default function AdminDashboardPage() {
    const instrutoresPendentes = getInstrutoresPendentes();
    const repassesPendentes = transacoes.filter(t => t.status === "liberado");

    const mainStats = [
        {
            label: "Faturamento Mensal",
            value: `R$ ${adminKPIs.faturamentoMensal.total.toFixed(2).replace(".", ",")}`,
            change: "+12.5%",
            trend: "up",
            icon: DollarSign,
            color: "from-emerald-500 to-teal-500",
            subValues: [
                { label: "Assinaturas", value: `R$ ${adminKPIs.faturamentoMensal.assinaturas.toFixed(0)}` },
                { label: "Comissões", value: `R$ ${adminKPIs.faturamentoMensal.comissoes.toFixed(0)}` },
            ]
        },
        {
            label: "Volume Transacionado",
            value: `R$ ${adminKPIs.gmv.toFixed(2).replace(".", ",")}`,
            change: "+8.2%",
            trend: "up",
            icon: TrendingUp,
            color: "from-blue-500 to-indigo-500",
            description: "Total movimentado na plataforma"
        },
        {
            label: "Instrutores Ativos",
            value: adminKPIs.instrutoresAtivos.toString(),
            change: "+5",
            trend: "up",
            icon: Users,
            color: "from-purple-500 to-pink-500",
            subValues: [
                { label: "Total", value: adminKPIs.totalInstrutores.toString() },
                { label: "Pendentes", value: adminKPIs.instrutoresPendentes.toString(), highlight: true },
            ]
        },
        {
            label: "Repasses Pendentes",
            value: `R$ ${adminKPIs.valorRepassesPendentes.toFixed(2).replace(".", ",")}`,
            change: "48h",
            trend: "neutral",
            icon: Clock,
            color: "from-amber-400 to-orange-500",
            description: "Aguardando processamento"
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-white/50 mt-1">
                        Visão geral do desempenho da plataforma
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-white/40 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                        Última atualização: Hoje, 14:30
                    </span>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        <DownloadIcon /> Exportar Dados
                    </button>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {mainStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#161e2e] rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
                        >
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-[0.03] group-hover:opacity-[0.08] rounded-bl-full transition-opacity`} />

                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg shadow-black/20`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                {stat.change && (
                                    <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg ${stat.trend === "up" ? "bg-emerald-500/10 text-emerald-400" :
                                            stat.trend === "down" ? "bg-red-500/10 text-red-400" : "bg-white/5 text-white/60"
                                        }`}>
                                        {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : stat.trend === "down" ? <ArrowDownRight className="w-3 h-3" /> : null}
                                        {stat.change}
                                    </div>
                                )}
                            </div>

                            <p className="text-sm font-medium text-white/50 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{stat.value}</h3>

                            {stat.subValues && (
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                    {stat.subValues.map((sub) => (
                                        <div key={sub.label}>
                                            <p className={`text-sm font-semibold ${sub.highlight ? "text-amber-400" : "text-white"}`}>
                                                {sub.value}
                                            </p>
                                            <p className="text-xs text-white/40">{sub.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {stat.description && (
                                <p className="text-xs text-white/40 pt-4 border-t border-white/5">
                                    {stat.description}
                                </p>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Validations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#161e2e] rounded-2xl border border-white/5 flex flex-col"
                >
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <FileCheck className="w-5 h-5 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Validações Pendentes</h3>
                                <p className="text-xs text-white/50">Instrutores aguardando aprovação</p>
                            </div>
                        </div>
                        <Link href="/admin/validacoes" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            Ver todas
                        </Link>
                    </div>

                    <div className="p-4 flex-1">
                        {instrutoresPendentes.length === 0 ? (
                            <div className="h-40 flex flex-col items-center justify-center text-white/30">
                                <FileCheck className="w-8 h-8 mb-2" />
                                <p className="text-sm">Nenhuma validação pendente</p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {instrutoresPendentes.map((instrutor) => (
                                    <div
                                        key={instrutor.id}
                                        className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                                    >
                                        <img
                                            src={instrutor.foto}
                                            alt={instrutor.nome}
                                            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-primary/50 transition-all"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-white truncate group-hover:text-primary transition-colors">{instrutor.nome}</p>
                                            <p className="text-xs text-white/50 truncate">{instrutor.cidade}, {instrutor.estado}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-xs text-white/40">Solicitado em</p>
                                                <p className="text-xs font-medium text-white">Hoje</p>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Financial Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#161e2e] rounded-2xl border border-white/5 flex flex-col"
                >
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <Activity className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Atividade Recente</h3>
                                <p className="text-xs text-white/50">Fluxo financeiro e repasses</p>
                            </div>
                        </div>
                        <button className="text-white/40 hover:text-white transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-4 flex-1">
                        {repassesPendentes.length === 0 ? (
                            <div className="h-40 flex flex-col items-center justify-center text-white/30">
                                <Activity className="w-8 h-8 mb-2" />
                                <p className="text-sm">Nenhuma atividade recente</p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {repassesPendentes.slice(0, 4).map((tx) => (
                                    <div
                                        key={tx.id}
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">Repasse Liberado</p>
                                                <p className="text-xs text-white/40">#{tx.id.slice(0, 8)}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-emerald-400">R$ {tx.valorLiquido.toFixed(2)}</p>
                                            <p className="text-xs text-white/40">
                                                {new Date(tx.liberadoEm || Date.now()).toLocaleDateString("pt-BR")}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between px-2">
                            <span className="text-xs font-medium text-white/40">Total Pendente</span>
                            <span className="text-lg font-bold text-white">R$ {adminKPIs.valorRepassesPendentes.toFixed(2)}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function DownloadIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    )
}
