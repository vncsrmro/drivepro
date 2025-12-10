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
    Calendar
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
            icon: DollarSign,
            color: "text-success",
            bgColor: "bg-success/20",
        },
        {
            label: "Receita Comissões",
            value: `R$ ${totalComissoes.toFixed(2).replace(".", ",")}`,
            icon: Percent,
            color: "text-primary",
            bgColor: "bg-primary/20",
        },
        {
            label: "Receita Assinaturas",
            value: `R$ ${receitaAssinaturas.toFixed(2).replace(".", ",")}`,
            icon: Crown,
            color: "text-amber-400",
            bgColor: "bg-amber-500/20",
        },
        {
            label: "GMV (Volume Bruto)",
            value: `R$ ${totalBruto.toFixed(2).replace(".", ",")}`,
            icon: TrendingUp,
            color: "text-purple-400",
            bgColor: "bg-purple-500/20",
        },
    ];

    const columns = [
        {
            key: "criadoEm",
            header: "Data",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="text-white">
                    {new Date(tx.criadoEm).toLocaleDateString("pt-BR")}
                </span>
            ),
        },
        {
            key: "instrutorId",
            header: "Instrutor",
            render: (tx: Transaction) => {
                const instrutor = instrutores.find(i => i.id === tx.instrutorId);
                return (
                    <span className="text-white">{instrutor?.nome || `#${tx.instrutorId}`}</span>
                );
            },
        },
        {
            key: "valorBruto",
            header: "Valor Bruto",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="text-white">
                    R$ {tx.valorBruto.toFixed(2).replace(".", ",")}
                </span>
            ),
        },
        {
            key: "valorComissao",
            header: "Comissão",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="text-success font-medium">
                    +R$ {tx.valorComissao.toFixed(2).replace(".", ",")}
                </span>
            ),
        },
        {
            key: "taxaComissao",
            header: "Taxa",
            render: (tx: Transaction) => (
                <span className="text-white/60">{tx.taxaComissao}%</span>
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
                >
                    {tx.status === "liberado" && "Liberado"}
                    {tx.status === "pago" && "Pago"}
                    {tx.status === "pendente" && "Em Custódia"}
                    {tx.status === "cancelado" && "Cancelado"}
                </Badge>
            ),
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">
                        Financeiro
                    </h1>
                    <p className="text-white/60">
                        Visão geral de receitas, comissões e GMV
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                    <Download className="w-4 h-4" />
                    Exportar Relatório
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
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
                            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Subscription Breakdown */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-xl border border-white/10 p-6 mb-8"
            >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-400" />
                    Detalhamento de Assinaturas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-white/60">Plano Prata</span>
                            <Badge variant="secondary">{instrutoresPrata} assinantes</Badge>
                        </div>
                        <p className="text-xl font-bold text-white">
                            R$ {(instrutoresPrata * 99).toFixed(2).replace(".", ",")}
                            <span className="text-sm font-normal text-white/50">/mês</span>
                        </p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-amber-400">Plano Ouro</span>
                            <Badge variant="elite">{instrutoresOuro} assinantes</Badge>
                        </div>
                        <p className="text-xl font-bold text-white">
                            R$ {(instrutoresOuro * 199).toFixed(2).replace(".", ",")}
                            <span className="text-sm font-normal text-white/50">/mês</span>
                        </p>
                    </div>
                    <div className="p-4 bg-success/10 rounded-lg border border-success/30">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-success">Total Assinaturas</span>
                        </div>
                        <p className="text-xl font-bold text-success">
                            R$ {receitaAssinaturas.toFixed(2).replace(".", ",")}
                            <span className="text-sm font-normal text-success/70">/mês</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Transactions Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
            >
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-lg font-semibold text-white">
                        Histórico de Transações
                    </h2>
                </div>
                <DataTable
                    data={transacoes}
                    columns={columns}
                    keyExtractor={(tx) => tx.id}
                    emptyMessage="Nenhuma transação encontrada"
                    className="[&_th]:text-white/70 [&_td]:text-white [&_tr:hover]:bg-white/5"
                />
            </motion.div>
        </div>
    );
}
