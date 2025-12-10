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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const stats = [
    { value: "+500", label: "Instrutores", icon: Users, gradient: "from-blue-500 to-blue-600" },
    { value: "+10.000", label: "Aulas Realizadas", icon: Car, gradient: "from-success to-emerald-500" },
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
        <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary pt-20">
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-[10%] w-80 h-80 bg-success/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Badge variant="elite" className="mb-6 px-4 py-2">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Nossa História
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Sobre a{" "}
                        <span className="bg-gradient-to-r from-success to-emerald-300 bg-clip-text text-transparent">
                            Direção Pro
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Conectando alunos e instrutores para realizar o sonho da habilitação
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 -mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <Badge variant="secondary" className="mb-4 px-4 py-2">
                                <Target className="w-4 h-4 mr-2 text-primary" />
                                Nossa Missão
                            </Badge>

                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Democratizar o acesso a aulas de direção de qualidade
                            </h2>

                            <p className="text-muted-foreground text-lg mb-6">
                                A Direção Pro nasceu com um objetivo claro: todo brasileiro
                                merece aprender a dirigir com segurança, confiança e com
                                profissionais qualificados.
                            </p>

                            <p className="text-muted-foreground text-lg mb-8">
                                Nossa plataforma conecta alunos a instrutores certificados,
                                oferecendo transparência, segurança e conveniência em todo
                                o processo de aprendizado.
                            </p>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/como-funciona"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold shadow-lg shadow-primary/30 transition-all"
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
                                            className="bg-card rounded-2xl border border-border/50 p-6 shadow-xl hover:shadow-2xl transition-all"
                                        >
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gradient-to-b from-white to-secondary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-2">
                            <Award className="w-4 h-4 mr-2 text-primary" />
                            Nossos Valores
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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
                                    className="relative bg-card rounded-3xl border border-border/50 p-8 shadow-xl hover:shadow-2xl transition-all group text-center overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-indigo-900" />
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-10 left-10 w-40 h-40 bg-success/40 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
                        </div>

                        <div className="relative p-12 md:p-16 text-center">
                            <Car className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Faça parte dessa história
                            </h2>
                            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
                                Junte-se a milhares de pessoas que já estão realizando o sonho da habilitação
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold shadow-xl shadow-success/30 transition-all"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        Encontrar Instrutor
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white rounded-xl font-bold hover:bg-white/30 transition-all"
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
