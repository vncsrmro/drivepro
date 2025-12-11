"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calendar,
    DollarSign,
    Users,
    Star,
    TrendingUp,
    MessageSquare,
    Settings,
    Bell,
    ChevronRight,
    Clock
} from "lucide-react";

export default function InstrutorDashboard() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Painel do Instrutor</h1>
                        <p className="text-gray-400">Bem-vindo de volta, Carlos Silva</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors relative">
                            <Bell className="w-6 h-6 text-gray-400" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0a0f]"></span>
                        </button>
                        <div className="flex items-center gap-3 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
                                <Star className="w-4 h-4 text-white fill-current" />
                            </div>
                            <span className="font-bold text-amber-400">Elite</span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: "Receita Mensal", value: "R$ 4.250", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10", change: "+12%" },
                        { label: "Aulas Realizadas", value: "48", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", change: "+8%" },
                        { label: "Novos Alunos", value: "12", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10", change: "+25%" },
                        { label: "Avaliação", value: "4.9", icon: Star, color: "text-amber-400", bg: "bg-amber-500/10", change: "+0.2" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-default"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.bg} ${stat.color}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Actions & Menu */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Actions */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold mb-4">Acesso Rápido</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/instrutor/agenda" className="group">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all group-hover:-translate-y-1">
                                    <Calendar className="w-8 h-8 text-white mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Gerenciar Agenda</h3>
                                    <p className="text-blue-100/80 text-sm">Configure seus horários disponíveis e turnos extras.</p>
                                </div>
                            </Link>
                            <Link href="/minha-conta/financeiro" className="group">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group-hover:-translate-y-1">
                                    <DollarSign className="w-8 h-8 text-emerald-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Financeiro</h3>
                                    <p className="text-gray-400 text-sm">Ver extratos, saques e relatórios de ganhos.</p>
                                </div>
                            </Link>
                            <Link href="/minha-conta/mensagens" className="group">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group-hover:-translate-y-1">
                                    <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Mensagens</h3>
                                    <p className="text-gray-400 text-sm">Fale com seus alunos e suporte.</p>
                                </div>
                            </Link>
                            <Link href="/minha-conta/configuracoes" className="group">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group-hover:-translate-y-1">
                                    <Settings className="w-8 h-8 text-gray-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Configurações</h3>
                                    <p className="text-gray-400 text-sm">Edite seu perfil e preferências da conta.</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Next Classes */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                        <h2 className="text-xl font-bold mb-6">Próximas Aulas</h2>
                        <div className="space-y-4">
                            {[
                                { name: "João Pedro", time: "14:00", type: "Baliza", day: "12", month: "DEZ" },
                                { name: "Maria Santos", time: "16:00", type: "Direção", day: "12", month: "DEZ" },
                                { name: "Lucas Oliveira", time: "09:00", type: "Prática", day: "13", month: "DEZ" },
                            ].map((aula, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex flex-col items-center justify-center text-center border border-white/10">
                                        <span className="text-[10px] text-gray-400 uppercase">{aula.month}</span>
                                        <span className="text-lg font-bold">{aula.day}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold">{aula.name}</h4>
                                        <p className="text-sm text-gray-400 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {aula.time} - {aula.type}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-500" />
                                </div>
                            ))}
                            <Link href="/instrutor/agenda" className="block w-full py-3 mt-4 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-colors text-center">
                                Ver Agenda Completa
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
