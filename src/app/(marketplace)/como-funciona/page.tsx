"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Search,
    Calendar,
    CreditCard,
    Car,
    ArrowRight,
    CheckCircle2,
    Shield,
    Star,
    Sparkles,
    Users,
    Clock,
    BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const steps = [
    {
        icon: Search,
        title: "Busque",
        description: "Encontre instrutores certificados na sua região com filtros avançados",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Calendar,
        title: "Agende",
        description: "Escolha o melhor horário na agenda do instrutor em tempo real",
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: CreditCard,
        title: "Pague",
        description: "Pagamento seguro com proteção Escrow até a aula ser concluída",
        color: "from-success to-emerald-500"
    },
    {
        icon: Car,
        title: "Aprenda",
        description: "Faça suas aulas e evolua com feedback personalizado do instrutor",
        color: "from-amber-500 to-orange-500"
    }
];

const benefits = [
    {
        icon: Shield,
        title: "100% Seguro",
        description: "Seu pagamento fica protegido até a conclusão da aula"
    },
    {
        icon: BadgeCheck,
        title: "Instrutores Verificados",
        description: "Todos os instrutores passam por validação de documentos"
    },
    {
        icon: Clock,
        title: "Horários Flexíveis",
        description: "Agende suas aulas nos horários que funcionam para você"
    },
    {
        icon: Star,
        title: "Avaliações Reais",
        description: "Escolha baseado nas experiências de outros alunos"
    },
    {
        icon: Users,
        title: "Acompanhamento",
        description: "Receba feedback do instrutor sobre sua evolução"
    },
    {
        icon: Sparkles,
        title: "Sem Burocracia",
        description: "Não precisa de autoescola, você manda no seu aprendizado"
    }
];

export default function ComoFuncionaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
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
                            Simples e Rápido
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Como Funciona a{" "}
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
                        Em apenas 4 passos simples você agenda sua aula com o instrutor ideal
                    </motion.p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-24 -mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -12, scale: 1.03 }}
                                    className="relative group"
                                >
                                    {/* Connector line */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                                    )}

                                    <div className="relative bg-card rounded-3xl border border-border/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                                        {/* Step number */}
                                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center justify-center shadow-lg">
                                            {index + 1}
                                        </div>

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                                        >
                                            <Icon className="w-10 h-10 text-white" />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-gradient-to-b from-white to-secondary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-2">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-success" />
                            Benefícios
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Por que escolher a Direção Pro?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Somos a plataforma mais completa e segura para aulas de direção
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-card rounded-2xl border border-border/50 p-6 shadow-lg hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 transition-all">
                                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
                            <div className="absolute top-10 left-10 w-40 h-40 bg-success/40 rounded-full blur-3xl" />
                            <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl" />
                        </div>

                        <div className="relative p-12 md:p-16 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                            >
                                <Car className="w-16 h-16 text-white mx-auto mb-6" />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Pronto para começar?
                            </h2>
                            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
                                Encontre o instrutor perfeito e agende sua primeira aula agora mesmo
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold shadow-xl shadow-success/30 hover:shadow-2xl hover:shadow-success/40 transition-all"
                                    >
                                        <Search className="w-5 h-5" />
                                        Buscar Instrutores
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white rounded-xl font-bold hover:bg-white/30 transition-all"
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
