"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    Calendar,
    TrendingUp,
    DollarSign,
    Clock,
    CheckCircle2,
    Crown,
    Star,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
    getInstrutorById,
    getSaldoDisponivel,
    getGanhosBrutosMes,
    getProximasAulas,
    getTransacoesInstrutor
} from "@/data/mockData";

// Mock logged instructor ID
const INSTRUCTOR_ID = "1";

export default function InstructorDashboardPage() {
    const instructor = getInstrutorById(INSTRUCTOR_ID)!;
    const saldoDisponivel = getSaldoDisponivel(INSTRUCTOR_ID);
    const ganhosBrutosMes = getGanhosBrutosMes(INSTRUCTOR_ID);
    const proximasAulas = getProximasAulas(INSTRUCTOR_ID);
    const transacoes = getTransacoesInstrutor(INSTRUCTOR_ID);

    const isElite = instructor.plano === "ouro";

    const stats = [
        {
            label: "Saldo Disponível",
            value: `R$ ${saldoDisponivel.toFixed(2).replace(".", ",")}`,
            icon: Wallet,
            color: "text-success",
            bgColor: "bg-success/10",
            description: "Pronto para saque",
        },
        {
            label: "Próximas Aulas",
            value: proximasAulas.length.toString(),
            icon: Calendar,
            color: "text-primary",
            bgColor: "bg-primary/10",
            description: "Agendadas",
        },
        {
            label: "Ganhos Brutos (Mês)",
            value: `R$ ${ganhosBrutosMes.toFixed(2).replace(".", ",")}`,
            icon: TrendingUp,
            color: "text-amber-500",
            bgColor: "bg-amber-500/10",
            description: "Dezembro 2024",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-foreground mb-1">
                        Olá, {instructor.nome.split(" ")[0]}! 👋
                    </h1>
                    <p className="text-muted-foreground">
                        Aqui está o resumo da sua conta hoje.
                    </p>
                </div>
                {isElite ? (
                    <Badge variant="elite" className="flex items-center gap-1 px-4 py-2">
                        <Crown className="w-4 h-4" />
                        Plano Elite
                    </Badge>
                ) : (
                    <Link href="/instrutor/planos">
                        <Badge variant="outline" className="flex items-center gap-1 px-4 py-2 hover:bg-muted cursor-pointer">
                            <Crown className="w-4 h-4 text-amber-500" />
                            Upgrade para Elite
                        </Badge>
                    </Link>
                )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-xl border border-border p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className="text-xs text-muted-foreground">{stat.description}</span>
                            </div>
                            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Próximas Aulas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-foreground">Próximas Aulas</h2>
                        <Link href="/instrutor/agenda" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Ver todas <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {proximasAulas.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            <Calendar className="w-10 h-10 mx-auto mb-2 opacity-50" />
                            <p>Nenhuma aula agendada</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {proximasAulas.slice(0, 3).map((aula) => (
                                <div
                                    key={aula.id}
                                    className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
                                        <span className="text-xs font-medium">
                                            {new Date(aula.data).toLocaleDateString("pt-BR", { weekday: "short" })}
                                        </span>
                                        <span className="text-lg font-bold">
                                            {new Date(aula.data).getDate()}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-foreground">
                                            {aula.horario} - Aula de Direção
                                        </p>
                                        <p className="text-sm text-muted-foreground">{aula.endereco}</p>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={aula.status === "confirmada" ? "active" : "pending"}>
                                            {aula.status === "confirmada" ? "Confirmada" : "Aguardando"}
                                        </Badge>
                                        <p className="text-sm font-semibold text-success mt-1">
                                            R$ {aula.valor.toFixed(2).replace(".", ",")}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Últimas Transações */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-foreground">Últimas Transações</h2>
                        <Link href="/instrutor/financeiro" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Ver todas <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {transacoes.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            <DollarSign className="w-10 h-10 mx-auto mb-2 opacity-50" />
                            <p>Nenhuma transação</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {transacoes.slice(0, 4).map((tx) => (
                                <div
                                    key={tx.id}
                                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.status === "liberado" ? "bg-success/10" : "bg-amber-500/10"
                                                }`}
                                        >
                                            {tx.status === "liberado" ? (
                                                <CheckCircle2 className="w-5 h-5 text-success" />
                                            ) : (
                                                <Clock className="w-5 h-5 text-amber-500" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground text-sm">
                                                Aula de Direção
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(tx.criadoEm).toLocaleDateString("pt-BR")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-success">
                                            +R$ {tx.valorLiquido.toFixed(2).replace(".", ",")}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            -{tx.taxaComissao}% comissão
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                <Link
                    href="/instrutor/financeiro"
                    className="flex items-center gap-3 p-4 bg-success/10 rounded-xl hover:bg-success/20 transition-colors"
                >
                    <Wallet className="w-6 h-6 text-success" />
                    <span className="font-medium text-foreground">Solicitar Saque</span>
                </Link>
                <Link
                    href="/instrutor/planos"
                    className="flex items-center gap-3 p-4 bg-amber-500/10 rounded-xl hover:bg-amber-500/20 transition-colors"
                >
                    <Crown className="w-6 h-6 text-amber-500" />
                    <span className="font-medium text-foreground">Ver Planos</span>
                </Link>
                <Link
                    href="/instrutor/perfil"
                    className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
                >
                    <Star className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground">Meu Perfil</span>
                </Link>
                <Link
                    href="/instrutor/agenda"
                    className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-xl hover:bg-purple-500/20 transition-colors"
                >
                    <Calendar className="w-6 h-6 text-purple-500" />
                    <span className="font-medium text-foreground">Minha Agenda</span>
                </Link>
            </motion.div>
        </div>
    );
}
