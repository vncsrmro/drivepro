"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    DollarSign,
    Crown,
    Percent,
    Check,
    Star,
    Users,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { planos } from "@/data/mockData";

export default function PrecosPage() {
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
                        Preços Transparentes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto"
                    >
                        Sem surpresas! Você paga apenas pelo valor da aula + uma pequena taxa de serviço.
                    </motion.p>
                </div>
            </section>

            {/* Pricing for Students */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Para Alunos
                        </h2>
                        <p className="text-muted-foreground">
                            Você paga uma taxa de serviço de apenas <strong className="text-success">5%</strong> sobre o valor da aula.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card rounded-xl border border-border p-8 max-w-md mx-auto text-center"
                    >
                        <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <DollarSign className="w-8 h-8 text-success" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Exemplo</h3>
                        <p className="text-muted-foreground mb-6">
                            Aula de R$ 100,00
                        </p>
                        <div className="space-y-3 text-left mb-6">
                            <div className="flex justify-between py-2 border-b border-border">
                                <span className="text-muted-foreground">Valor da aula</span>
                                <span className="font-medium text-foreground">R$ 100,00</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-border">
                                <span className="text-muted-foreground">Taxa de serviço (5%)</span>
                                <span className="font-medium text-foreground">R$ 5,00</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-semibold text-foreground">Total</span>
                                <span className="font-bold text-success text-lg">R$ 105,00</span>
                            </div>
                        </div>
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

            {/* Pricing for Instructors */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Para Instrutores
                        </h2>
                        <p className="text-muted-foreground">
                            Escolha o plano ideal e reduza suas taxas de comissão.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {planos.map((plano, index) => {
                            const isElite = plano.id === "ouro";
                            return (
                                <motion.div
                                    key={plano.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`bg-card rounded-xl border p-6 relative ${isElite ? "border-amber-300 shadow-lg" : "border-border"
                                        }`}
                                >
                                    {isElite && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <Badge variant="elite" className="flex items-center gap-1">
                                                <Crown className="w-3 h-3" />
                                                Mais Popular
                                            </Badge>
                                        </div>
                                    )}

                                    <div className="text-center mb-6 pt-4">
                                        <h3 className="text-xl font-bold text-foreground">{plano.nome}</h3>
                                        <div className="mt-4">
                                            <span className="text-4xl font-bold text-foreground">
                                                R$ {plano.preco.toFixed(0)}
                                            </span>
                                            {plano.preco > 0 && (
                                                <span className="text-muted-foreground">/mês</span>
                                            )}
                                        </div>
                                        <p className="mt-2 text-success font-semibold">
                                            {plano.taxaComissao}% de comissão
                                        </p>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {plano.recursos.map((recurso) => (
                                            <li key={recurso} className="flex items-start gap-2">
                                                <Check className={`w-5 h-5 flex-shrink-0 ${isElite ? "text-amber-500" : "text-success"}`} />
                                                <span className="text-sm text-foreground">{recurso}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/instrutor/planos"
                                        className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${isElite
                                                ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 hover:from-amber-500 hover:to-yellow-600"
                                                : "bg-primary text-white hover:bg-primary/90"
                                            }`}
                                    >
                                        Começar Agora
                                    </Link>
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
                            Seja você aluno ou instrutor, temos a solução ideal para você.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/instrutores"
                                className="px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                            >
                                Sou Aluno
                            </Link>
                            <Link
                                href="/para-instrutores/cadastro"
                                className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                            >
                                Sou Instrutor
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
