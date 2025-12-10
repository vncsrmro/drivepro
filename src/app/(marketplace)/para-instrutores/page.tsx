"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    Crown,
    Users,
    TrendingUp,
    Shield,
    Award,
    DollarSign,
    Star,
    ArrowRight,
    Car,
    Sparkles,
    Calendar,
    BarChart2,
    Zap,
    Target,
    Rocket,
    Heart,
    CheckCircle2,
    Play,
    ChevronRight
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Milhares de Alunos",
        description: "Acesse uma base de alunos em constante crescimento na sua região. Mais visibilidade, mais oportunidades.",
        color: "from-blue-500 to-cyan-500",
        delay: 0
    },
    {
        icon: DollarSign,
        title: "Pagamento Garantido",
        description: "Sistema Escrow protege seu pagamento. Receba em até 24h após a aula ser concluída.",
        color: "from-emerald-500 to-teal-500",
        delay: 0.1
    },
    {
        icon: Crown,
        title: "Selo Elite",
        description: "Destaque-se da concorrência com o selo Elite. Apareça no topo e atraia mais alunos.",
        color: "from-amber-400 to-yellow-500",
        delay: 0.2
    },
    {
        icon: Shield,
        title: "Proteção Total",
        description: "Seguro para suas aulas e proteção contra cancelamentos de última hora.",
        color: "from-purple-500 to-pink-500",
        delay: 0.3
    },
    {
        icon: BarChart2,
        title: "Dashboard Completo",
        description: "Gerencie agenda, finanças e estatísticas em tempo real. Tudo em um só lugar.",
        color: "from-rose-500 to-red-500",
        delay: 0.4
    },
    {
        icon: Star,
        title: "Reputação Verificada",
        description: "Construa sua credibilidade com avaliações de alunos reais e verificadas.",
        color: "from-orange-500 to-amber-500",
        delay: 0.5
    }
];

const stats = [
    { value: "500+", label: "Instrutores Ativos", icon: Car },
    { value: "10.000+", label: "Aulas Realizadas", icon: Calendar },
    { value: "4.9", label: "Avaliação Média", suffix: "/5", icon: Star },
    { value: "R$ 2M+", label: "Pagos aos Instrutores", icon: DollarSign },
];

const testimonials = [
    {
        name: "Carlos Silva",
        role: "Instrutor Elite • 127 avaliações",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        quote: "Minha renda aumentou 40% desde que entrei na plataforma. O selo Elite faz toda a diferença!",
        rating: 5
    },
    {
        name: "Ana Beatriz",
        role: "Instrutora Elite • 89 avaliações",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        quote: "A gestão de agenda é incrível. Consigo organizar minha semana de forma muito mais eficiente.",
        rating: 5
    },
    {
        name: "Roberto Mendes",
        role: "Instrutor Prata • 64 avaliações",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        quote: "O pagamento é sempre garantido e rápido. Não tenho mais dor de cabeça com calote.",
        rating: 5
    }
];

export default function ParaInstrutoresPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* Floating elements */}
                <motion.div
                    animate={{
                        y: [0, -40, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[15%] w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 50, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-amber-500/15 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                <motion.div style={{ opacity }} className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-500/10 rounded-full blur-3xl" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full mb-8 backdrop-blur-sm"
                            >
                                <Rocket className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-300 font-medium text-sm">Torne-se um Instrutor Elite</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]"
                            >
                                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                                    Transforme seu
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                                    talento em renda
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-white/60 mb-10 max-w-lg"
                            >
                                Conecte-se com milhares de alunos, gerencie sua agenda e receba
                                pagamentos garantidos. O futuro do seu negócio começa aqui.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores/cadastro"
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-xl font-bold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        Começar Agora
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores/planos"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium hover:bg-white/15 transition-all"
                                    >
                                        Ver Planos
                                        <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-8 mt-12"
                            >
                                {[
                                    { value: "500+", label: "Instrutores" },
                                    { value: "4.9★", label: "Avaliação" },
                                    { value: "10%", label: "Taxa mínima" },
                                ].map((stat, i) => (
                                    <div key={stat.label} className="text-center">
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                        <p className="text-sm text-white/50">{stat.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right - Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                {/* Floating card background glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-3xl" />

                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        {stats.map((stat, index) => {
                                            const Icon = stat.icon;
                                            return (
                                                <motion.div
                                                    key={stat.label}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center mb-4">
                                                        <Icon className="w-6 h-6 text-emerald-400" />
                                                    </div>
                                                    <p className="text-3xl font-bold text-white mb-1">
                                                        {stat.value}
                                                        {stat.suffix && <span className="text-lg text-white/50">{stat.suffix}</span>}
                                                    </p>
                                                    <p className="text-sm text-white/50">{stat.label}</p>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-32">
                <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl translate-x-1/3" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                            <Zap className="w-4 h-4 text-amber-400" />
                            <span className="text-white/70 text-sm font-medium">Por que escolher a Direção Pro?</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">Tudo que você precisa para </span>
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">crescer</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Ferramentas profissionais para você focar no que faz de melhor: ensinar
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: feature.delay }}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-white/50 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative py-32 overflow-hidden">
                <motion.div style={{ y: y2 }} className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-500/5 to-amber-500/5 rounded-full blur-3xl" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                            <Heart className="w-4 h-4 text-rose-400" />
                            <span className="text-white/70 text-sm font-medium">Histórias de sucesso</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Instrutores que <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">transformaram</span> suas carreiras
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                                        />
                                        <div>
                                            <p className="font-bold text-white">{t.name}</p>
                                            <p className="text-sm text-white/50">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: t.rating }).map((_, j) => (
                                            <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-white/70 italic">&ldquo;{t.quote}&rdquo;</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20 overflow-hidden">
                            {/* Animated circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />

                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="relative"
                            >
                                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                                    <Crown className="w-10 h-10 text-white" />
                                </div>
                            </motion.div>

                            <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-6">
                                Pronto para fazer parte?
                            </h2>
                            <p className="relative text-white/60 text-xl mb-10 max-w-lg mx-auto">
                                Cadastre-se gratuitamente e comece a receber alunos ainda hoje
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                                <Link
                                    href="/para-instrutores/cadastro"
                                    className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                                >
                                    <Sparkles className="w-6 h-6" />
                                    Criar Minha Conta
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
