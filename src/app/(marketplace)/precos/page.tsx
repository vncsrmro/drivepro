"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    DollarSign,
    Crown,
    Check,
    ArrowRight,
    Sparkles,
    Shield,
    Percent,
    Calculator,
    Zap,
    TrendingUp,
    Star
} from "lucide-react";

const plans = [
    {
        id: "gratis",
        name: "Grátis",
        price: 0,
        commission: 20,
        icon: Zap,
        color: "from-slate-500 to-slate-600",
        features: ["Perfil básico no Hub", "Até 10 aulas/mês", "Suporte por email"]
    },
    {
        id: "prata",
        name: "Prata",
        price: 99,
        commission: 15,
        icon: Star,
        color: "from-slate-400 to-slate-500",
        features: ["Perfil destacado", "Aulas ilimitadas", "Suporte prioritário", "Selo verificado"]
    },
    {
        id: "ouro",
        name: "Ouro",
        price: 199,
        commission: 10,
        icon: Crown,
        color: "from-amber-400 to-yellow-500",
        popular: true,
        features: ["Selo Elite dourado", "Destaque #1 na busca", "Estatísticas avançadas", "Suporte VIP 24/7"]
    }
];

export default function PrecosPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.1),transparent_50%)]" />

                <motion.div
                    animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
                <motion.div style={{ opacity }} className="text-center max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full mb-8 backdrop-blur-sm"
                    >
                        <Percent className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 font-medium text-sm">Preços Transparentes</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                            Sem surpresas.
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                            Tudo claro.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto"
                    >
                        Você paga apenas o valor da aula + uma pequena taxa de serviço de 5%
                    </motion.p>
                </motion.div>
            </section>

            {/* Student Pricing */}
            <section className="relative py-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                            <DollarSign className="w-4 h-4 text-emerald-400" />
                            <span className="text-white/70 text-sm font-medium">Para Alunos</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="text-white">Taxa de serviço de apenas </span>
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">5%</span>
                        </h2>
                    </motion.div>

                    {/* Calculator Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="max-w-lg mx-auto"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />

                            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/30">
                                    <Calculator className="w-10 h-10 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white text-center mb-2">Exemplo de Cálculo</h3>
                                <p className="text-white/50 text-center mb-8">Aula de R$ 100,00</p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                                        <span className="text-white/70">Valor da aula</span>
                                        <span className="font-bold text-white text-xl">R$ 100,00</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                                        <span className="text-white/70 flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-emerald-400" />
                                            Taxa de serviço (5%)
                                        </span>
                                        <span className="font-bold text-white text-xl">R$ 5,00</span>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex justify-between items-center py-5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 -mx-4 px-6 rounded-xl"
                                    >
                                        <span className="font-bold text-white text-lg">Total a pagar</span>
                                        <span className="font-bold text-3xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">R$ 105,00</span>
                                    </motion.div>
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        href="/instrutores"
                                        className="w-full flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-xl font-bold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        Buscar Instrutores
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Instructor Pricing */}
            <section className="relative py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-300 text-sm font-medium">Para Instrutores</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Escolha seu plano e </span>
                            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">reduza suas taxas</span>
                        </h2>
                        <p className="text-white/50 text-lg">
                            Quanto melhor o plano, menor a comissão
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`relative ${plan.popular ? "md:-mt-8 md:mb-8" : ""}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                            <div className="px-5 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-amber-900 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30">
                                                <Sparkles className="w-4 h-4" />
                                                Mais Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className={`h-full rounded-2xl border ${plan.popular
                                            ? "border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-transparent"
                                            : "border-white/10 bg-white/5"
                                        } backdrop-blur-xl p-8`}>

                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mt-1 ${plan.popular
                                                        ? "bg-emerald-500/20 text-emerald-400"
                                                        : "bg-white/10 text-white/70"
                                                    }`}>
                                                    <TrendingUp className="w-3 h-3" />
                                                    {plan.commission}% comissão
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <span className="text-white/50 text-xl">R$</span>
                                            <span className="text-5xl font-bold text-white">{plan.price}</span>
                                            {plan.price > 0 && <span className="text-white/50">/mês</span>}
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-emerald-500" : "bg-white/20"
                                                        }`}>
                                                        <Check className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="text-white/80 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Link
                                                href="/para-instrutores/planos"
                                                className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular
                                                        ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-amber-500/30"
                                                        : "bg-white/10 text-white hover:bg-white/15"
                                                    }`}
                                            >
                                                Ver Detalhes
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-3xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-16">
                            <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Pronto para começar?
                            </h2>
                            <p className="text-white/60 text-xl mb-10">
                                Seja você aluno ou instrutor, temos a solução ideal para você
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-xl font-bold shadow-xl shadow-emerald-500/30 transition-all"
                                    >
                                        Sou Aluno
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores/cadastro"
                                        className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 backdrop-blur border border-white/10 text-white rounded-xl font-bold hover:bg-white/15 transition-all"
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
