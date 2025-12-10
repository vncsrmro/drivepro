"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    Search,
    Calendar,
    CreditCard,
    Car,
    ArrowRight,
    Shield,
    Star,
    Sparkles,
    Users,
    Clock,
    BadgeCheck,
    CheckCircle2,
    Zap
} from "lucide-react";

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Busque",
        description: "Encontre instrutores certificados na sua região com filtros por categoria, transmissão e preço.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Calendar,
        number: "02",
        title: "Agende",
        description: "Veja a disponibilidade em tempo real e escolha o melhor horário para você.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: CreditCard,
        number: "03",
        title: "Pague",
        description: "Pagamento seguro com Escrow. Seu dinheiro fica protegido até a aula ser concluída.",
        color: "from-emerald-500 to-teal-500"
    },
    {
        icon: Car,
        number: "04",
        title: "Aprenda",
        description: "Faça suas aulas e receba feedback personalizado do instrutor sobre sua evolução.",
        color: "from-amber-500 to-orange-500"
    }
];

const benefits = [
    {
        icon: Shield,
        title: "100% Seguro",
        description: "Pagamento protegido até a conclusão da aula"
    },
    {
        icon: BadgeCheck,
        title: "Verificação Completa",
        description: "Todos instrutores passam por validação de documentos"
    },
    {
        icon: Clock,
        title: "Horários Flexíveis",
        description: "Agende nos horários que funcionam para você"
    },
    {
        icon: Star,
        title: "Avaliações Reais",
        description: "Escolha baseado em experiências de outros alunos"
    },
    {
        icon: Users,
        title: "Acompanhamento",
        description: "Feedback do instrutor sobre sua evolução"
    },
    {
        icon: Sparkles,
        title: "Sem Burocracia",
        description: "Não precisa de autoescola"
    }
];

export default function ComoFuncionaPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_50%)]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

                <motion.div
                    animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
                <motion.div style={{ y: y1, opacity }} className="text-center max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm"
                    >
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-300 font-medium text-sm">Simples e Rápido</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                            Como funciona a
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Direção Pro
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12"
                    >
                        Em apenas 4 passos simples você agenda sua aula com o instrutor ideal
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-white/40 text-sm">Role para descobrir</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-white/60 rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Steps Section */}
            <section className="relative py-32">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
                                >
                                    {/* Icon/Number */}
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        className="relative flex-shrink-0"
                                    >
                                        <div className={`w-40 h-40 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}>
                                            <Icon className="w-20 h-20 text-white" />
                                        </div>
                                        <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">{step.number}</span>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className={`flex-1 text-center ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-xl text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="relative py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-white/70 text-sm font-medium">Benefícios</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Por que escolher a </span>
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Direção Pro?</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all">
                                        <Icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-white/50">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
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
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                            >
                                <Car className="w-16 h-16 text-white mx-auto mb-8" />
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Pronto para começar?
                            </h2>
                            <p className="text-white/60 text-xl mb-10 max-w-lg mx-auto">
                                Encontre o instrutor perfeito e agende sua primeira aula agora mesmo
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                                    >
                                        <Search className="w-5 h-5" />
                                        Buscar Instrutores
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores"
                                        className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur border border-white/10 text-white rounded-2xl font-bold hover:bg-white/15 transition-all"
                                    >
                                        Sou Instrutor
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
