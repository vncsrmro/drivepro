"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Search,
    Shield,
    Award,
    Star,
    CheckCircle2,
    ArrowRight,
    MapPin,
    Calendar,
    MousePointerClick,
    Users
} from "lucide-react";
import { InstructorList } from "@/components/hub/InstructorList";
import { MinhaJornada } from "@/components/hub/MinhaJornada";
import { getInstrutoresAtivos } from "@/data/mockData";
import Link from "next/link";

const features = [
    {
        icon: Search,
        title: "Busca Inteligente",
        description: "Encontre instrutores por categoria CNH, transmissão e localização com filtros avançados.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        icon: Shield,
        title: "Pagamento Protegido",
        description: "Seu dinheiro fica em custódia segura até que a aula seja concluída com sucesso.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        icon: Award,
        title: "Profissionais de Elite",
        description: "Instrutores verificados, com histórico comprovado e altas taxas de aprovação.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        icon: Calendar,
        title: "Agendamento Flexível",
        description: "Escolha o melhor horário para você e gerencie suas aulas pelo painel.",
        color: "text-amber-400",
        bg: "bg-amber-500/10"
    },
];

const stats = [
    { value: "5.000+", label: "Alunos Aprovados" },
    { value: "150+", label: "Instrutores Ativos" },
    { value: "4.9", label: "Nota Média" },
    { value: "98%", label: "Taxa de Aprovação" }
];

export default function HomePage() {
    const { scrollY } = useScroll();
    const activeInstructors = getInstrutoresAtivos().slice(0, 3);
    const [isLoggedIn] = React.useState(true); // Mock logged in state

    // Parallax effect for hero
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-blue-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-sm font-medium text-emerald-400">Nova plataforma disponível</span>
                            </motion.div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                                Domine a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                    Direção
                                </span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                                Conecte-se com os melhores instrutores particulares.
                                Aulas personalizadas para habilitados e iniciantes, com segurança e praticidade.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/instrutores"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <Search className="w-5 h-5" />
                                    Buscar Instrutores
                                </Link>
                                <Link
                                    href="/como-funciona"
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <MousePointerClick className="w-5 h-5" />
                                    Como Funciona
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0a0a0f] bg-gray-800 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`} />
                                    ))}
                                </div>
                                <p>Junte-se a <span className="text-white font-bold">5.000+</span> alunos aprovados</p>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y: y1 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                            <motion.div
                                className="relative bg-white/5 border border-white/10 rounded-3xl p-2 backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-500"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Driving Lesson"
                                    className="rounded-2xl shadow-2xl w-full h-auto"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-10 -left-10 bg-[#1a1a24] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Status</p>
                                        <p className="font-bold text-white">Instrutor Verificado</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Minha Jornada Section (Logged In) */}
            {isLoggedIn && (
                <section className="py-12 relative z-10 border-y border-white/5 bg-white/[0.02]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    Sua Jornada
                                </h2>
                                <p className="text-gray-400">Acompanhe seu progresso em tempo real</p>
                            </div>
                            <MinhaJornada />
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Features Grid */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold mb-6"
                        >
                            Tecnologia Que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Impulsiona Sua Evolução
                            </span>
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Instructors */}
            <section className="py-32 bg-gradient-to-b from-transparent to-[#050507]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Instrutores em Destaque</h2>
                            <p className="text-gray-400 max-w-xl">
                                Conheça os profissionais Elite com as melhores avaliações da plataforma.
                            </p>
                        </div>
                        <Link
                            href="/instrutores"
                            className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group"
                        >
                            Ver todos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <InstructorList instructors={activeInstructors} />
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-t border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a24] border border-white/10 rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden"
                    >
                        {/* Glow effects */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative z-10">
                            Pronto para começar?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
                            Junte-se a milhares de alunos que já conquistaram sua liberdade de dirigir com a Direção Pro.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="/instrutores"
                                className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors"
                            >
                                Encontrar Instrutor
                            </Link>
                            <Link
                                href="/para-instrutores"
                                className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors"
                            >
                                Sou Instrutor
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
