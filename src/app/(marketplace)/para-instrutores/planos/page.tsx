"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    Crown,
    Check,
    X,
    Star,
    Zap,
    Shield,
    BarChart2,
    ArrowRight,
    Sparkles,
    TrendingUp,
    Rocket,
    Diamond,
    Award,
    Users,
    CircleDollarSign,
    ChevronRight
} from "lucide-react";

export default function PlanosInstrutorPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const plans = [
        {
            id: "gratis",
            name: "Grátis",
            price: 0,
            commission: 20,
            icon: Zap,
            color: "from-slate-500 to-slate-600",
            bgGlow: "bg-slate-500/20",
            features: [
                { text: "Perfil básico no Hub", included: true },
                { text: "Até 10 aulas/mês", included: true },
                { text: "Suporte por email", included: true },
                { text: "Destaque na busca", included: false },
                { text: "Selo Elite", included: false },
                { text: "Estatísticas avançadas", included: false },
            ]
        },
        {
            id: "prata",
            name: "Prata",
            price: 99,
            commission: 15,
            icon: Star,
            color: "from-slate-400 to-slate-500",
            bgGlow: "bg-slate-400/30",
            features: [
                { text: "Perfil destacado", included: true },
                { text: "Aulas ilimitadas", included: true },
                { text: "Suporte prioritário", included: true },
                { text: "Estatísticas básicas", included: true },
                { text: "Selo verificado", included: true },
                { text: "Selo Elite", included: false },
            ]
        },
        {
            id: "ouro",
            name: "Ouro",
            price: 199,
            commission: 10,
            icon: Crown,
            color: "from-amber-400 to-yellow-500",
            bgGlow: "bg-amber-500/40",
            popular: true,
            features: [
                { text: "Selo Elite dourado", included: true },
                { text: "Destaque #1 na busca", included: true },
                { text: "Aulas ilimitadas", included: true },
                { text: "Estatísticas avançadas", included: true },
                { text: "Suporte VIP 24/7", included: true },
                { text: "Menor comissão (10%)", included: true },
            ]
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]" />

                {/* Floating orbs */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -50, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-1/3 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                <motion.div style={{ y: y1, opacity }} className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-5xl mx-auto px-4">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <Crown className="w-5 h-5 text-amber-400" />
                            <span className="text-amber-300 font-semibold">Planos para Instrutores Elite</span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        >
                            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                                Quanto maior seu plano,
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                                maior seu lucro
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12"
                        >
                            Reduza sua taxa de comissão e apareça no topo das buscas.
                            Mais alunos, mais aulas, mais dinheiro no bolso.
                        </motion.p>

                        {/* Scroll indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-white/40 text-sm">Role para ver os planos</span>
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
                    </div>
                </motion.div>
            </section>

            {/* Plans Section */}
            <section className="relative py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Escolha seu <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">plano ideal</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">
                            Comece gratuitamente e faça upgrade quando quiser
                        </p>
                    </motion.div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                                    className={`relative group ${plan.popular ? "lg:-mt-8 lg:mb-8" : ""}`}
                                >
                                    {/* Popular Badge */}
                                    {plan.popular && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                                        >
                                            <div className="px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-amber-900 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30">
                                                <Sparkles className="w-4 h-4" />
                                                Mais Popular
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Card */}
                                    <div className={`relative h-full rounded-3xl border ${plan.popular
                                            ? "border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-transparent"
                                            : "border-white/10 bg-white/5"
                                        } backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-white/20`}>

                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 ${plan.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                        {/* Content */}
                                        <div className="relative p-8 lg:p-10">
                                            {/* Icon & Name */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mt-1 ${plan.popular
                                                            ? "bg-emerald-500/20 text-emerald-400"
                                                            : "bg-white/10 text-white/70"
                                                        }`}>
                                                        <TrendingUp className="w-3 h-3" />
                                                        {plan.commission}% comissão
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="mb-8">
                                                <div className="flex items-end gap-1">
                                                    <span className="text-white/50 text-2xl">R$</span>
                                                    <span className="text-6xl font-bold text-white tracking-tight">{plan.price}</span>
                                                    {plan.price > 0 && <span className="text-white/50 text-lg mb-2">/mês</span>}
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <ul className="space-y-4 mb-10">
                                                {plan.features.map((feature, i) => (
                                                    <motion.li
                                                        key={feature.text}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 + i * 0.05 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        {feature.included ? (
                                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? "bg-emerald-500" : "bg-white/20"
                                                                }`}>
                                                                <Check className="w-4 h-4 text-white" />
                                                            </div>
                                                        ) : (
                                                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                                                <X className="w-4 h-4 text-white/30" />
                                                            </div>
                                                        )}
                                                        <span className={feature.included ? "text-white" : "text-white/30"}>
                                                            {feature.text}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* CTA Button */}
                                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                <Link
                                                    href="/para-instrutores/cadastro"
                                                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular
                                                            ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
                                                            : "bg-white/10 text-white hover:bg-white/20"
                                                        }`}
                                                >
                                                    Começar Agora
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="relative py-32 overflow-hidden">
                <motion.div style={{ y: y2 }} className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                </motion.div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="p-8 border-b border-white/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <BarChart2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Comparativo Detalhado</h3>
                                <p className="text-white/50">Veja todas as diferenças entre os planos</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-6 text-white/70 font-medium">Recurso</th>
                                        <th className="p-6 text-center text-white/70 font-medium">Grátis</th>
                                        <th className="p-6 text-center text-white/70 font-medium">Prata</th>
                                        <th className="p-6 text-center bg-amber-500/10">
                                            <span className="flex items-center justify-center gap-2 text-amber-400 font-bold">
                                                <Crown className="w-4 h-4" />
                                                Ouro
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { feature: "Taxa de Comissão", free: "20%", silver: "15%", gold: "10%", highlight: true },
                                        { feature: "Aulas por Mês", free: "Até 10", silver: "Ilimitadas", gold: "Ilimitadas" },
                                        { feature: "Destaque na Busca", free: false, silver: false, gold: true },
                                        { feature: "Selo Elite", free: false, silver: false, gold: true },
                                        { feature: "Estatísticas", free: "Básicas", silver: "Básicas", gold: "Avançadas" },
                                        { feature: "Suporte", free: "Email", silver: "Prioritário", gold: "VIP 24/7" },
                                    ].map((row, i) => (
                                        <motion.tr
                                            key={row.feature}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="hover:bg-white/5 transition-colors"
                                        >
                                            <td className="p-6 text-white font-medium">{row.feature}</td>
                                            <td className="p-6 text-center">
                                                {typeof row.free === "boolean" ? (
                                                    row.free ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />
                                                ) : (
                                                    <span className={row.highlight ? "text-red-400 font-bold" : "text-white/70"}>{row.free}</span>
                                                )}
                                            </td>
                                            <td className="p-6 text-center">
                                                {typeof row.silver === "boolean" ? (
                                                    row.silver ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />
                                                ) : (
                                                    <span className={row.highlight ? "text-amber-400 font-bold" : "text-white/70"}>{row.silver}</span>
                                                )}
                                            </td>
                                            <td className="p-6 text-center bg-amber-500/5">
                                                {typeof row.gold === "boolean" ? (
                                                    row.gold ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />
                                                ) : (
                                                    <span className={row.highlight ? "text-emerald-400 font-bold text-lg" : "text-white"}>{row.gold}</span>
                                                )}
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
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
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                            >
                                <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-8" />
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Comece hoje mesmo
                            </h2>
                            <p className="text-white/60 text-xl mb-10 max-w-lg mx-auto">
                                Teste grátis e faça upgrade quando quiser. Sem compromisso.
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/para-instrutores/cadastro"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                                >
                                    <Sparkles className="w-6 h-6" />
                                    Criar Conta Gratuita
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
