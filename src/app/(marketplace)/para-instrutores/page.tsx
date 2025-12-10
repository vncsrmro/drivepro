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
    Car
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const benefits = [
    {
        icon: Users,
        title: "Mais Alunos",
        description: "Acesse milhares de alunos buscando instrutores na sua região todos os dias."
    },
    {
        icon: DollarSign,
        title: "Pagamento Garantido",
        description: "Receba de forma segura. O dinheiro só é liberado após a aula, mas com garantia de pagamento."
    },
    {
        icon: Crown,
        title: "Destaque Elite",
        description: "Selo especial que coloca você no topo das buscas e aumenta suas conversões."
    },
    {
        icon: Shield,
        title: "Proteção Total",
        description: "Seguro para aulas e proteção contra cancelamentos de última hora."
    },
    {
        icon: TrendingUp,
        title: "Gerencie seu Negócio",
        description: "Dashboard completo com agenda, finanças e estatísticas em tempo real."
    },
    {
        icon: Star,
        title: "Reputação",
        description: "Construa sua reputação com avaliações verificadas de alunos reais."
    }
];

const testimonials = [
    {
        name: "Carlos Silva",
        city: "São Paulo, SP",
        quote: "Aumentei minha renda em 40% desde que entrei na plataforma. O sistema de agendamento facilita muito!",
        rating: 5
    },
    {
        name: "Ana Paula Ferreira",
        city: "Campinas, SP",
        quote: "O selo Elite fez toda diferença. Minha agenda está sempre cheia agora.",
        rating: 5
    }
];

export default function ParaInstrutoresPage() {
    return (
        <div className="min-h-screen bg-secondary pt-20">
            {/* Hero */}
            <section className="bg-primary py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Badge variant="elite" className="mb-4">
                                <Crown className="w-3 h-3 mr-1" />
                                Torne-se um Instrutor Elite
                            </Badge>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Aumente sua Renda como Instrutor de Direção
                            </h1>
                            <p className="text-lg text-white/80 mb-8">
                                Conecte-se com alunos da sua região, gerencie sua agenda e receba pagamentos
                                de forma segura. Tudo em uma única plataforma.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/para-instrutores/cadastro"
                                    className="px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors text-center"
                                >
                                    Cadastrar Agora
                                </Link>
                                <Link
                                    href="/para-instrutores/planos"
                                    className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors text-center"
                                >
                                    Ver Planos
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden lg:block"
                        >
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Car className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">+500</p>
                                        <p className="text-white/70">Instrutores Ativos</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">+10.000</p>
                                        <p className="text-white/70">Aulas Realizadas</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">4.9/5</p>
                                        <p className="text-white/70">Avaliação Média</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Por que ser um Instrutor Direção Pro?
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Oferecemos todas as ferramentas que você precisa para crescer como profissional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card rounded-xl border border-border p-6"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            O que nossos instrutores dizem
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary rounded-xl p-6"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>
                                <p className="text-foreground mb-4">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">{t.name}</p>
                                        <p className="text-sm text-muted-foreground">{t.city}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Pronto para Começar?
                        </h2>
                        <p className="text-white/80 mb-6">
                            Cadastre-se gratuitamente e comece a receber alunos ainda hoje.
                        </p>
                        <Link
                            href="/para-instrutores/cadastro"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                        >
                            Criar Minha Conta
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
