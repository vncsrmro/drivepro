"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Search,
    Calendar,
    CreditCard,
    Car,
    Shield,
    Star,
    CheckCircle2,
    ArrowRight,
    MessageCircle
} from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Encontre seu Instrutor",
        description: "Busque por localização, categoria da CNH e tipo de transmissão. Compare avaliações e preços para encontrar o instrutor ideal."
    },
    {
        icon: Calendar,
        title: "Agende sua Aula",
        description: "Escolha o melhor horário disponível na agenda do instrutor. Agende quantas aulas precisar, no seu ritmo."
    },
    {
        icon: CreditCard,
        title: "Pague com Segurança",
        description: "Seu pagamento fica em custódia (Escrow) e só é liberado ao instrutor após a conclusão da aula. 100% seguro."
    },
    {
        icon: Car,
        title: "Aprenda e Evolua",
        description: "Faça suas aulas práticas e acompanhe seu progresso na jornada. Avalie seu instrutor após cada aula."
    }
];

const benefits = [
    {
        icon: Shield,
        title: "Pagamento Protegido",
        description: "Seu dinheiro só é liberado após a aula ser concluída com sucesso."
    },
    {
        icon: Star,
        title: "Instrutores Verificados",
        description: "Todos os instrutores passam por verificação de documentos e CNH."
    },
    {
        icon: MessageCircle,
        title: "Suporte Dedicado",
        description: "Canal direto de comunicação com seu instrutor e nossa equipe."
    },
    {
        icon: CheckCircle2,
        title: "Garantia de Qualidade",
        description: "Insatisfeito com a aula? Reembolso garantido em até 24h."
    }
];

export default function ComoFuncionaPage() {
    return (
        <div className="min-h-screen bg-secondary pt-20">
            {/* Hero */}
            <section className="bg-primary py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        Como Funciona a Direção Pro
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto"
                    >
                        Conectamos você aos melhores instrutores de direção da sua região.
                        Simples, seguro e eficiente.
                    </motion.p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            4 Passos Simples
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Da busca até a habilitação, estamos com você em cada etapa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card rounded-xl border border-border p-6 text-center relative"
                                >
                                    {/* Step Number */}
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-success text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>

                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Por que escolher a Direção Pro?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-6 bg-secondary rounded-xl"
                                >
                                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-success" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
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
                            Pronto para começar?
                        </h2>
                        <p className="text-white/80 mb-6">
                            Encontre seu instrutor ideal e dê o primeiro passo rumo à sua habilitação.
                        </p>
                        <Link
                            href="/instrutores"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                        >
                            Buscar Instrutores
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
