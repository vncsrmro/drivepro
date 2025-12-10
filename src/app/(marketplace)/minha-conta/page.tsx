"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    User,
    Calendar,
    MessageCircle,
    Trophy,
    Settings,
    LogOut,
    ChevronRight,
    Clock,
    MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MinhaJornada } from "@/components/hub/MinhaJornada";
import { alunoLogado, aulas, conversas } from "@/data/mockData";

export default function MinhaContaPage() {
    const minhasAulas = aulas.filter(a => a.alunoId === alunoLogado.id);
    const proximasAulas = minhasAulas
        .filter(a => new Date(a.data) >= new Date() && a.status !== "cancelada")
        .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

    const menuItems = [
        { href: "/minha-conta/aulas", icon: Calendar, label: "Minhas Aulas", count: proximasAulas.length },
        { href: "/minha-conta/mensagens", icon: MessageCircle, label: "Mensagens", count: 2 },
        { href: "/minha-conta/configuracoes", icon: Settings, label: "Configurações" },
    ];

    return (
        <div className="min-h-screen bg-secondary pt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-xl border border-border p-6 mb-6"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={alunoLogado.foto}
                            alt={alunoLogado.nome}
                            className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-foreground mb-1">
                                {alunoLogado.nome}
                            </h1>
                            <p className="text-muted-foreground">{alunoLogado.email}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <Badge variant="secondary">
                                    CNH {alunoLogado.categoriaDesejada}
                                </Badge>
                                <Badge variant="success">
                                    <Trophy className="w-3 h-3 mr-1" />
                                    3 aulas
                                </Badge>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Minha Jornada */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6"
                >
                    <MinhaJornada />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Menu */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 bg-card rounded-xl border border-border overflow-hidden"
                    >
                        <div className="p-4 border-b border-border">
                            <h2 className="font-semibold text-foreground">Menu</h2>
                        </div>
                        <nav>
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center justify-between p-4 hover:bg-muted transition-colors border-b border-border last:border-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-primary" />
                                            <span className="font-medium text-foreground">{item.label}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {item.count !== undefined && item.count > 0 && (
                                                <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                                                    {item.count}
                                                </span>
                                            )}
                                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                    </Link>
                                );
                            })}
                            <button className="w-full flex items-center gap-3 p-4 text-destructive hover:bg-destructive/10 transition-colors">
                                <LogOut className="w-5 h-5" />
                                <span className="font-medium">Sair da Conta</span>
                            </button>
                        </nav>
                    </motion.div>

                    {/* Próximas Aulas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-card rounded-xl border border-border p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-foreground">
                                Próximas Aulas
                            </h2>
                            <Link href="/minha-conta/aulas" className="text-sm text-primary hover:underline">
                                Ver todas
                            </Link>
                        </div>

                        {proximasAulas.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                <p>Nenhuma aula agendada</p>
                                <Link
                                    href="/instrutores"
                                    className="inline-block mt-4 text-primary hover:underline"
                                >
                                    Agendar agora
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {proximasAulas.slice(0, 3).map((aula) => (
                                    <div
                                        key={aula.id}
                                        className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg"
                                    >
                                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
                                            <span className="text-xs font-medium">
                                                {new Date(aula.data).toLocaleDateString("pt-BR", { weekday: "short" })}
                                            </span>
                                            <span className="text-xl font-bold">
                                                {new Date(aula.data).getDate()}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-foreground flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-primary" />
                                                {aula.horario}
                                            </p>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {aula.endereco}
                                            </p>
                                        </div>
                                        <Badge variant={aula.status === "confirmada" ? "active" : "pending"}>
                                            {aula.status === "confirmada" ? "Confirmada" : "Aguardando"}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
