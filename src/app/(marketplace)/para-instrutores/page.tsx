"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Crown,
    Users,
    TrendingUp,
    Shield,
    Award,
    DollarSign,
    Star,
    Check,
    ArrowRight,
    Car,
    Sparkles,
    Calendar,
    BarChart2,
    Zap
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

const benefits = [
    {
        icon: Users,
        title: "Mais Alunos",
        description: "Acesse milhares de alunos buscando instrutores na sua região todos os dias.",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: DollarSign,
        title: "Pagamento Garantido",
        description: "Receba de forma segura. O dinheiro só é liberado após a aula, mas com garantia de pagamento.",
        gradient: "from-success to-emerald-500"
    },
    {
        icon: Crown,
        title: "Destaque Elite",
        description: "Selo especial que coloca você no topo das buscas e aumenta suas conversões.",
        gradient: "from-amber-400 to-yellow-500"
    },
    {
        icon: Shield,
        title: "Proteção Total",
        description: "Seguro para aulas e proteção contra cancelamentos de última hora.",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: BarChart2,
        title: "Gerencie seu Negócio",
        description: "Dashboard completo com agenda, finanças e estatísticas em tempo real.",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        icon: Star,
        title: "Reputação",
        description: "Construa sua reputação com avaliações verificadas de alunos reais.",
        gradient: "from-orange-500 to-amber-500"
    }
];

const stats = [
    { value: "+500", label: "Instrutores Ativos", icon: Car },
    { value: "+10.000", label: "Aulas Realizadas", icon: Calendar },
    { value: "4.9/5", label: "Avaliação Média", icon: Star },
];

export default function ParaInstrutoresPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary pt-20">
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-[10%] w-80 h-80 bg-success/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <Badge variant="elite" className="mb-6 px-4 py-2">
                                <Crown className="w-4 h-4 mr-2" />
                                Torne-se um Instrutor Elite
                            </Badge>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Aumente sua{" "}
                                <span className="bg-gradient-to-r from-success to-emerald-300 bg-clip-text text-transparent">
                                    Renda
                                </span>{" "}
                                como Instrutor
                            </h1>

                            <p className="text-xl text-white/80 mb-8">
                                Conecte-se com alunos da sua região, gerencie sua agenda e receba pagamentos
                                de forma segura. Tudo em uma única plataforma.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores/cadastro"
                                        className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold shadow-xl shadow-success/30 hover:shadow-2xl hover:shadow-success/40 transition-all"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        Cadastrar Agora
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores/planos"
                                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white rounded-xl font-bold hover:bg-white/30 transition-all"
                                    >
                                        Ver Planos
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="absolute -inset-px bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />

                                <div className="relative space-y-6">
                                    {stats.map((stat, index) => {
                                        const Icon = stat.icon;
                                        return (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                                className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors"
                                            >
                                                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-2xl">{stat.value}</p>
                                                    <p className="text-white/70">{stat.label}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 -mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-2">
                            <Zap className="w-4 h-4 mr-2 text-primary" />
                            Vantagens Exclusivas
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Por que ser um Instrutor Direção Pro?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Oferecemos todas as ferramentas que você precisa para crescer como profissional
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
                                    className="relative bg-card rounded-2xl border border-border/50 p-6 shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
                                >
                                    {/* Gradient glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h3>
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
                            <div className="absolute top-10 left-10 w-40 h-40 bg-success/40 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-10 right-10 w-60 h-60 bg-amber-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
                        </div>

                        <div className="relative p-12 md:p-16 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                            >
                                <Crown className="w-16 h-16 text-amber-400 mx-auto mb-6" />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Pronto para Começar?
                            </h2>
                            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
                                Cadastre-se gratuitamente e comece a receber alunos ainda hoje
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/para-instrutores/cadastro"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold text-lg shadow-xl shadow-success/30 hover:shadow-2xl hover:shadow-success/40 transition-all"
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
