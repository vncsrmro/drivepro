"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calendar,
    MessageCircle,
    Trophy,
    Settings,
    LogOut,
    ChevronRight,
    Clock,
    MapPin,
    User,
    CreditCard,
    Shield
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MinhaJornada } from "@/components/hub/MinhaJornada";
import { alunoLogado, aulas } from "@/data/mockData";

export default function MinhaContaPage() {
    const minhasAulas = aulas.filter(a => a.alunoId === alunoLogado.id);
    const proximasAulas = minhasAulas
        .filter(a => new Date(a.data) >= new Date() && a.status !== "cancelada")
        .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

    const menuItems = [
        { href: "/minha-conta/aulas", icon: Calendar, label: "Minhas Aulas", count: proximasAulas.length },
        { href: "/minha-conta/mensagens", icon: MessageCircle, label: "Mensagens", count: 2 },
        { href: "/minha-conta/financeiro", icon: CreditCard, label: "Pagamentos" },
        { href: "/minha-conta/configuracoes", icon: Settings, label: "Configurações" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 mb-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <User className="w-32 h-32 text-white" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src={alunoLogado.foto}
                                    alt={alunoLogado.nome}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-[#0a0a0f]" />
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {alunoLogado.nome}
                            </h1>
                            <p className="text-gray-400 mb-4">{alunoLogado.email}</p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/20">
                                    CNH {alunoLogado.categoriaDesejada}
                                </div>
                                <div className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium border border-amber-500/20 flex items-center gap-1">
                                    <Trophy className="w-3 h-3" />
                                    3 aulas concluídas
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Journey & Menu */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Minha Jornada */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <MinhaJornada />
                        </motion.div>

                        {/* Próximas Aulas */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <Calendar className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">
                                        Próximas Aulas
                                    </h2>
                                </div>
                                <Link href="/minha-conta/aulas" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                    Ver todas
                                </Link>
                            </div>

                            {proximasAulas.length === 0 ? (
                                <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar className="w-8 h-8 text-white/20" />
                                    </div>
                                    <p className="text-gray-400 mb-6">Nenhuma aula agendada</p>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm"
                                    >
                                        Agendar agora
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {proximasAulas.slice(0, 3).map((aula) => (
                                        <div
                                            key={aula.id}
                                            className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group"
                                        >
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex flex-col items-center justify-center border border-white/10 group-hover:border-blue-500/30 transition-colors">
                                                <span className="text-xs font-medium text-blue-300 uppercase">
                                                    {new Date(aula.data).toLocaleDateString("pt-BR", { weekday: "short" })}
                                                </span>
                                                <span className="text-2xl font-bold text-white">
                                                    {new Date(aula.data).getDate()}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-white flex items-center gap-2 mb-1">
                                                    <Clock className="w-4 h-4 text-blue-400" />
                                                    {aula.horario}
                                                </p>
                                                <p className="text-sm text-gray-400 flex items-center gap-1 truncate">
                                                    <MapPin className="w-3 h-3" />
                                                    {aula.endereco}
                                                </p>
                                            </div>
                                            <div className={`px-3 py-1 rounded-lg text-xs font-bold border ${aula.status === "confirmada"
                                                    ? "bg-green-500/20 text-green-400 border-green-500/20"
                                                    : "bg-amber-500/20 text-amber-400 border-amber-500/20"
                                                }`}>
                                                {aula.status === "confirmada" ? "Confirmada" : "Aguardando"}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Column - Menu */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden sticky top-24"
                        >
                            <div className="p-6 border-b border-white/10">
                                <h2 className="font-bold text-white text-lg">Menu</h2>
                            </div>
                            <nav className="p-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors group mb-1"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                                </div>
                                                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {item.count !== undefined && item.count > 0 && (
                                                    <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded-lg">
                                                        {item.count}
                                                    </span>
                                                )}
                                                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                                            </div>
                                        </Link>
                                    );
                                })}

                                <div className="h-px bg-white/10 my-2 mx-4" />

                                <button className="w-full flex items-center gap-3 p-4 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors text-left mx-2 mb-2 w-[calc(100%-16px)]">
                                    <div className="p-2 bg-rose-500/10 rounded-lg">
                                        <LogOut className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium">Sair da Conta</span>
                                </button>
                            </nav>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
