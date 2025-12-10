"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    DollarSign,
    TrendingUp,
    Crown,
    Percent,
    Download,
    ArrowUpRight,
    ArrowDownRight,
    Filter,
    Search
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { adminKPIs, transacoes, instrutores } from "@/data/mockData";
import { Transaction } from "@/types/types";

export default function AdminFinanceiroPage() {
    const totalComissoes = transacoes.reduce((acc, t) => acc + t.valorComissao, 0);
    const totalBruto = transacoes.reduce((acc, t) => acc + t.valorBruto, 0);

    const instrutoresPrata = instrutores.filter(i => i.plano === "prata").length;
    const instrutoresOuro = instrutores.filter(i => i.plano === "ouro").length;

    const receitaAssinaturas = (instrutoresPrata * 99) + (instrutoresOuro * 199);

    const stats = [
        {
            label: "Faturamento Total",
            value: `R$ ${(totalComissoes + receitaAssinaturas).toFixed(2).replace(".", ",")}`,
            change: "+15.3%",
            trend: "up",
            icon: DollarSign,
            color: "from-emerald-500 to-teal-500",
        },
        {
            label: "Receita Comissões",
            value: `R$ ${totalComissoes.toFixed(2).replace(".", ",")}`,
            change: "+12.1%",
            trend: "up",
            icon: Percent,
            color: "from-blue-500 to-indigo-500",
        },
        {
            label: "Receita Assinaturas",
            value: `R$ ${receitaAssinaturas.toFixed(2).replace(".", ",")}`,
            change: "+5.4%",
            trend: "up",
            icon: Crown,
            color: "from-amber-400 to-orange-500",
        },
        {
            label: "Volume Bruto (GMV)",
            value: `R$ ${totalBruto.toFixed(2).replace(".", ",")}`,
            change: "+8.9%",
            trend: "up",
            icon: TrendingUp,
            color: "from-purple-500 to-pink-500",
        },
    ];

    const columns = [
        {
            key: "criadoEm",
            header: "Data",
            sortable: true,
            render: (tx: Transaction) => (
                <div className="flex flex-col">
                    <span className="text-white font-medium">
                        {new Date(tx.criadoEm).toLocaleDateString("pt-BR")}
                    </span>
                    <span className="text-xs text-white/40">
                        {new Date(tx.criadoEm).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            ),
        },
        {
            key: "instrutorId",
            header: "Instrutor",
            render: (tx: Transaction) => {
                const instrutor = instrutores.find(i => i.id === tx.instrutorId);
                return (
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                            {instrutor?.nome?.charAt(0) || "#"}
                        </div>
                        <div>
                            <span className="block text-white font-medium text-sm">{instrutor?.nome || `#${tx.instrutorId}`}</span>
                            <span className="block text-white/40 text-xs">ID: {tx.instrutorId}</span>
                        </div>
                    </div>
                );
            },
        },
        {
            key: "valorBruto",
            header: "Valor Bruto",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="text-white font-medium">
                    R$ {tx.valorBruto.toFixed(2).replace(".", ",")}
                </span>
            ),
        },
        {
            key: "valorComissao",
            header: "Comissão",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded-md text-xs">
                    + R$ {tx.valorComissao.toFixed(2).replace(".", ",")}
                </span>
            ),
        },
        {
            key: "taxaComissao",
            header: "Taxa",
            render: (tx: Transaction) => (
                <span className="text-white/60 text-sm">{tx.taxaComissao}%</span>
            ),
        },
        {
            key: "status",
            header: "Status",
            render: (tx: Transaction) => (
                <Badge
                    variant={
                        tx.status === "liberado" ? "active" :
                            tx.status === "pago" ? "success" :
                                tx.status === "pendente" ? "pending" : "destructive"
                    }
                    className="capitalize"
                >
                    {tx.status}
                </Badge>
            ),
        },
    ];

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Financeiro
                    </h1>
                    <p className="text-white/50 mt-1">
                        Gestão detalhada de todas as transações
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Filtros
                    </button>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4" /> Exportar Relatório
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#161e2e] rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-[0.03] group-hover:opacity-[0.08] rounded-bl-full transition-opacity`} />

                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg shadow-black/20`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg ${stat.trend === "up" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                                    }`}>
                                    <ArrowUpRight className="w-3 h-3" />
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-sm font-medium text-white/50 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
                        </motion.div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Subscription Breakdown */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="xl:col-span-1 bg-[#161e2e] rounded-2xl border border-white/5 overflow-hidden flex flex-col"
                >
                    <div className="p-6 border-b border-white/5">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Crown className="w-5 h-5 text-amber-500" />
                            Assinaturas Ativas
                        </h2>
                    </div>

                    <div className="p-6 flex-1 flex flex-col gap-4">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-amber-400 font-bold">Plano Ouro</h3>
                                    <p className="text-xs text-amber-400/60">Top Tier</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-lg">
                                    {instrutoresOuro} usuários
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-white mt-2">
                                R$ {(instrutoresOuro * 199).toFixed(2).replace(".", ",")}
                                <span className="text-sm text-white/40 font-normal">/mês</span>
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-white font-bold">Plano Prata</h3>
                                    <p className="text-xs text-white/40">Standard Tier</p>
                                </div>
                                <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded-lg">
                                    {instrutoresPrata} usuários
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-white mt-2">
                                R$ {(instrutoresPrata * 99).toFixed(2).replace(".", ",")}
                                <span className="text-sm text-white/40 font-normal">/mês</span>
                            </p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-white/60">Receita Recorrente (MRR)</span>
                                <span className="text-lg font-bold text-emerald-400">
                                    R$ {receitaAssinaturas.toFixed(2).replace(".", ",")}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Transactions Table */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="xl:col-span-2 bg-[#161e2e] rounded-2xl border border-white/5 overflow-hidden flex flex-col"
                >
                    <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h2 className="text-lg font-semibold text-white">Histórico de Transações</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                            <input
                                type="text"
                                placeholder="Buscar transação..."
                                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64 transition-all"
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <DataTable
                            data={transacoes}
                            columns={columns}
                            keyExtractor={(tx) => tx.id}
                            emptyMessage="Nenhuma transação encontrada"
                            className="border-0 rounded-none [&_table]:w-full [&_thead]:bg-white/5 [&_th]:text-white/50 [&_th]:font-medium [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wider [&_td]:py-4 [&_tr:hover]:bg-white/5 [&_tr]:border-white/5"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
