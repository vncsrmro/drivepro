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
    Activity,
    ArrowUpRight,
    Calendar
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
            subValues: [
                { label: "Assinaturas", value: `R$ ${adminKPIs.faturamentoMensal.assinaturas.toFixed(0)}` },
                { label: "Comissões", value: `R$ ${adminKPIs.faturamentoMensal.comissoes.toFixed(0)}` },
            ],
            icon: DollarSign,
            color: "text-success",
            bgColor: "bg-success/20",
        },
        {
            label: "GMV (Volume Bruto)",
            value: `R$ ${adminKPIs.gmv.toFixed(2).replace(".", ",")}`,
            description: "Total movimentado na plataforma",
            icon: TrendingUp,
            color: "text-primary",
            bgColor: "bg-primary/20",
        },
        {
            label: "Instrutores",
            value: adminKPIs.totalInstrutores.toString(),
            subValues: [
                { label: "Ativos", value: adminKPIs.instrutoresAtivos.toString() },
                { label: "Pendentes", value: adminKPIs.instrutoresPendentes.toString(), highlight: true },
            ],
            icon: Users,
            color: "text-purple-400",
            bgColor: "bg-purple-500/20",
        },
        {
            label: "Repasses Pendentes",
            value: adminKPIs.repassesPendentes.toString(),
            description: `R$ ${adminKPIs.valorRepassesPendentes.toFixed(2).replace(".", ",")} a processar`,
            icon: Clock,
            color: "text-amber-400",
            bgColor: "bg-amber-500/20",
        },
    ];

    const additionalStats = [
        { label: "Total de Alunos", value: adminKPIs.totalAlunos, icon: Users },
        { label: "Aulas no Mês", value: adminKPIs.aulasRealizadasMes, icon: Calendar },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Dashboard 360º
                </h1>
                <p className="text-white/60">
                    Visão completa do ecossistema Direção Pro
                </p>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {mainStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-sm text-white/60 mb-3">{stat.label}</p>

                            {stat.subValues && (
                                <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                    {stat.subValues.map((sub) => (
                                        <div key={sub.label}>
                                            <p className={`text-sm font-medium ${sub.highlight ? "text-amber-400" : "text-white"}`}>
                                                {sub.value}
                                            </p>
                                            <p className="text-xs text-white/50">{sub.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {stat.description && (
                                <p className="text-xs text-white/50 pt-3 border-t border-white/10">
                                    {stat.description}
                                </p>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Validations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <FileCheck className="w-5 h-5 text-amber-400" />
                            Validações Pendentes
                        </h2>
                        <Link href="/admin/validacoes" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Ver todas <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {instrutoresPendentes.length === 0 ? (
                        <div className="text-center py-8 text-white/50">
                            <FileCheck className="w-10 h-10 mx-auto mb-2 opacity-50" />
                            <p>Nenhuma validação pendente</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {instrutoresPendentes.map((instrutor) => (
                                <div
                                    key={instrutor.id}
                                    className="flex items-center gap-4 p-3 bg-white/5 rounded-lg"
                                >
                                    <img
                                        src={instrutor.foto}
                                        alt={instrutor.nome}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium text-white">{instrutor.nome}</p>
                                        <p className="text-sm text-white/50">{instrutor.cidade}, {instrutor.estado}</p>
                                    </div>
                                    <Badge variant="pending">Pendente</Badge>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Pending Withdrawals */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Clock className="w-5 h-5 text-amber-400" />
                            Repasses Pendentes
                        </h2>
                        <Link href="/admin/financeiro" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Ver todos <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {repassesPendentes.length === 0 ? (
                        <div className="text-center py-8 text-white/50">
                            <Clock className="w-10 h-10 mx-auto mb-2 opacity-50" />
                            <p>Nenhum repasse pendente</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {repassesPendentes.slice(0, 4).map((tx) => (
                                <div
                                    key={tx.id}
                                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                                >
                                    <div>
                                        <p className="font-medium text-white">
                                            Instrutor #{tx.instrutorId}
                                        </p>
                                        <p className="text-sm text-white/50">
                                            {new Date(tx.liberadoEm || tx.criadoEm).toLocaleDateString("pt-BR")}
                                        </p>
                                    </div>
                                    <p className="font-semibold text-success">
                                        R$ {tx.valorLiquido.toFixed(2).replace(".", ",")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {repassesPendentes.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <span className="text-white/60">Total a processar</span>
                                <span className="text-xl font-bold text-success">
                                    R$ {repassesPendentes.reduce((acc, t) => acc + t.valorLiquido, 0).toFixed(2).replace(".", ",")}
                                </span>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {additionalStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="bg-white/5 rounded-xl p-4 border border-white/10"
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-white/50" />
                                <div>
                                    <p className="text-xl font-bold text-white">{stat.value.toLocaleString()}</p>
                                    <p className="text-xs text-white/50">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Link
                    href="/admin/validacoes"
                    className="bg-amber-500/20 rounded-xl p-4 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <FileCheck className="w-5 h-5 text-amber-400" />
                        <div>
                            <p className="text-xl font-bold text-white">{adminKPIs.instrutoresPendentes}</p>
                            <p className="text-xs text-amber-400">KYC Pendentes</p>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/admin/instrutores"
                    className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <Crown className="w-5 h-5 text-purple-400" />
                        <div>
                            <p className="text-xl font-bold text-white">15</p>
                            <p className="text-xs text-purple-400">Instrutores Elite</p>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
