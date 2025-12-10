"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    DollarSign,
    Crown,
    Check,
    ArrowRight,
    Sparkles,
    Shield,
    Percent,
    Calculator
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { planos } from "@/data/mockData";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function PrecosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-success/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Badge variant="elite" className="mb-6 px-4 py-2">
                            <Percent className="w-4 h-4 mr-2" />
                            Preços Transparentes
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Sem surpresas.{" "}
                        <span className="bg-gradient-to-r from-success to-emerald-300 bg-clip-text text-transparent">
                            Tudo claro.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Você paga apenas o valor da aula + uma pequena taxa de serviço
                    </motion.p>
                </div>
            </section>

            {/* Student Pricing */}
            <section className="py-20 -mt-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-2">
                            <DollarSign className="w-4 h-4 mr-2 text-success" />
                            Para Alunos
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Taxa de serviço de apenas 5%
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="bg-card rounded-3xl border border-border/50 p-8 md:p-12 max-w-lg mx-auto shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-success/20 to-transparent rounded-bl-full" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />

                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-success to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-success/30">
                                <Calculator className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Exemplo de Cálculo</h3>
                            <p className="text-muted-foreground text-center mb-8">Aula de R$ 100,00</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between py-4 border-b border-border/50">
                                    <span className="text-muted-foreground">Valor da aula</span>
                                    <span className="font-bold text-foreground text-lg">R$ 100,00</span>
                                </div>
                                <div className="flex justify-between py-4 border-b border-border/50">
                                    <span className="text-muted-foreground flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-success" />
                                        Taxa de serviço (5%)
                                    </span>
                                    <span className="font-bold text-foreground text-lg">R$ 5,00</span>
                                </div>
                                <motion.div
                                    className="flex justify-between py-4 bg-gradient-to-r from-success/10 to-emerald-500/10 -mx-4 px-4 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span className="font-bold text-foreground text-lg">Total</span>
                                    <span className="font-bold text-success text-2xl">R$ 105,00</span>
                                </motion.div>
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/instrutores"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold shadow-lg shadow-success/30 hover:shadow-xl hover:shadow-success/40 transition-all"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Buscar Instrutores
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Instructor Pricing */}
            <section className="py-20 bg-gradient-to-b from-white to-secondary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Badge variant="elite" className="mb-4 px-4 py-2">
                            <Crown className="w-4 h-4 mr-2" />
                            Para Instrutores
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Escolha seu plano e reduza suas taxas
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Quanto melhor o plano, menor a comissão
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {planos.map((plano, index) => {
                            const isElite = plano.id === "ouro";
                            return (
                                <motion.div
                                    key={plano.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    className={`relative bg-card rounded-3xl border p-8 flex flex-col transition-all duration-300 ${isElite
                                            ? "border-amber-300/50 shadow-2xl shadow-amber-500/20"
                                            : "border-border/50 shadow-xl hover:shadow-2xl"
                                        }`}
                                >
                                    {isElite && (
                                        <>
                                            <div className="absolute -inset-px bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-3xl opacity-20 animate-pulse" />
                                            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                                <Badge variant="elite" className="flex items-center gap-1 shadow-lg px-4 py-2">
                                                    <Crown className="w-4 h-4" />
                                                    Mais Popular
                                                </Badge>
                                            </div>
                                        </>
                                    )}

                                    <div className="relative text-center mb-6 pt-4">
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{plano.nome}</h3>
                                        <div className="mt-4">
                                            <span className="text-5xl font-bold text-foreground">
                                                R$ {plano.preco.toFixed(0)}
                                            </span>
                                            {plano.preco > 0 && (
                                                <span className="text-muted-foreground">/mês</span>
                                            )}
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className={`mt-4 py-2 px-4 rounded-xl inline-block ${isElite ? "bg-gradient-to-r from-success/20 to-emerald-500/20" : "bg-success/10"
                                                }`}
                                        >
                                            <p className="text-success font-bold text-lg">
                                                {plano.taxaComissao}% comissão
                                            </p>
                                        </motion.div>
                                    </div>

                                    <ul className="space-y-3 flex-1 mb-6">
                                        {plano.recursos.slice(0, 4).map((recurso) => (
                                            <li key={recurso} className="flex items-start gap-3">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isElite ? "bg-gradient-to-r from-amber-400 to-yellow-500" : "bg-success"
                                                    }`}>
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-foreground text-sm">{recurso}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href="/para-instrutores/planos"
                                            className={`block w-full py-4 rounded-xl font-bold text-center transition-all shadow-lg ${isElite
                                                    ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 shadow-amber-500/30"
                                                    : "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/30"
                                                }`}
                                        >
                                            Ver Detalhes
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

                        <div className="relative p-12 md:p-16">
                            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Pronto para começar?
                            </h2>
                            <p className="text-white/80 mb-8 text-lg">
                                Seja você aluno ou instrutor, temos a solução ideal para você.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/instrutores"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold shadow-xl shadow-success/30 transition-all"
                                    >
                                        Sou Aluno
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/para-instrutores/cadastro"
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
