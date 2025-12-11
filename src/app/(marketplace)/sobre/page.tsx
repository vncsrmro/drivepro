"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Users,
    Target,
    Shield,
    Heart,
    Award,
    Car,
    Star,
    Sparkles,
    ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

const stats = [
    { value: "+500", label: "Instrutores", icon: Users, gradient: "from-blue-500 to-blue-600" },
    { value: "+10.000", label: "Aulas Realizadas", icon: Car, gradient: "from-emerald-500 to-green-600" },
    { value: "4.9/5", label: "Avaliação Média", icon: Star, gradient: "from-amber-500 to-orange-500" },
    { value: "100%", label: "Seguro", icon: Shield, gradient: "from-purple-500 to-purple-600" },
];

const values = [
    {
        icon: Shield,
        title: "Segurança",
        description: "Pagamentos protegidos, verificação de documentos e suporte dedicado.",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Target,
        title: "Qualidade",
        description: "Apenas instrutores certificados e bem avaliados na plataforma.",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: Heart,
        title: "Compromisso",
        description: "Dedicados a ajudar cada aluno a conquistar sua habilitação.",
        gradient: "from-rose-500 to-pink-500"
    }
];

export default function SobrePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-200">Nossa História</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    Sobre a{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Direção Pro
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Conectando alunos e instrutores para realizar o sonho da habilitação com segurança e tecnologia.
                </motion.p>
            </section>

            {/* Mission */}
            <section className="py-24 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg mb-6">
                                <Target className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-gray-300">Nossa Missão</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Democratizar o acesso a aulas de direção de qualidade
                            </h2>

                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                A Direção Pro nasceu com um objetivo claro: todo brasileiro
                                merece aprender a dirigir com segurança, confiança e com
                                profissionais qualificados, sem burocracia.
                            </p>

                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Nossa plataforma conecta alunos a instrutores certificados,
                                oferecendo transparência, segurança financeira (Escrow) e conveniência em todo
                                o processo de aprendizado.
                            </p>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/como-funciona"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                                >
                                    Saiba como funciona
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center h-48 hover:bg-white/[0.07] transition-colors"
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                                            <p className="text-sm text-gray-400">{stat.label}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg mb-6">
                            <Award className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-gray-300">Nossos Valores</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            O que nos guia
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 text-center group overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-black/50`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-[#1a1a24] border border-white/10 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden"
                    >
                        {/* Glow effects */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25">
                                <Car className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Faça parte dessa história
                            </h2>
                            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
                                Junte-se a milhares de pessoas que já estão realizando o sonho da habilitação
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold shadow-xl shadow-blue-600/20 transition-all"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        Encontrar Instrutor
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                                    >
                                        Quero ser Instrutor
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
