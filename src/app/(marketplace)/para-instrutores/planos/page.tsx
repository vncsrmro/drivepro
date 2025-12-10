"use client";

import React from "react";
import { motion } from "framer-motion";
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
    TrendingUp
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

export default function PlanosInstrutorPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary pt-20">
            {/* Hero with animated gradient */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-success/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Badge variant="elite" className="mb-6 px-4 py-2">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Planos para Instrutores
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Quanto melhor seu plano,{" "}
                        <span className="bg-gradient-to-r from-success to-emerald-300 bg-clip-text text-transparent">
                            menor sua taxa
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Escolha o plano ideal e maximize seus ganhos como instrutor
                    </motion.p>
                </div>
            </section>

            {/* Plans */}
            <section className="py-20 -mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    {/* Glow effect for Elite */}
                                    {isElite && (
                                        <>
                                            <div className="absolute -inset-px bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-3xl opacity-20 animate-pulse" />
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                                <Badge variant="elite" className="flex items-center gap-1 shadow-lg px-4 py-2">
                                                    <Crown className="w-4 h-4" />
                                                    Mais Popular
                                                </Badge>
                                            </div>
                                        </>
                                    )}

                                    <div className="relative text-center mb-8 pt-4">
                                        <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${isElite
                                                ? "bg-gradient-to-br from-amber-400 to-yellow-500"
                                                : index === 0
                                                    ? "bg-gradient-to-br from-gray-400 to-gray-500"
                                                    : "bg-gradient-to-br from-slate-400 to-slate-500"
                                            }`}>
                                            {isElite ? (
                                                <Crown className="w-10 h-10 text-amber-900" />
                                            ) : index === 0 ? (
                                                <Zap className="w-10 h-10 text-white" />
                                            ) : (
                                                <Star className="w-10 h-10 text-white" />
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-foreground mb-2">{plano.nome}</h3>

                                        <div className="mt-4">
                                            <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                                R$ {plano.preco.toFixed(0)}
                                            </span>
                                            {plano.preco > 0 && (
                                                <span className="text-muted-foreground">/mês</span>
                                            )}
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className={`mt-4 py-3 px-5 rounded-xl inline-block ${isElite ? "bg-gradient-to-r from-success/20 to-emerald-500/20" : "bg-success/10"
                                                }`}
                                        >
                                            <p className="text-success font-bold text-xl">
                                                {plano.taxaComissao}% comissão
                                            </p>
                                        </motion.div>
                                    </div>

                                    <ul className="space-y-4 flex-1 mb-8">
                                        {plano.recursos.map((recurso, i) => (
                                            <motion.li
                                                key={recurso}
                                                className="flex items-start gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isElite ? "bg-gradient-to-r from-amber-400 to-yellow-500" : "bg-success"
                                                    }`}>
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-foreground">{recurso}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href="/para-instrutores/cadastro"
                                            className={`block w-full py-4 rounded-xl font-bold text-center transition-all shadow-lg ${isElite
                                                    ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
                                                    : "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                                                }`}
                                        >
                                            Começar Agora
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-20 bg-card rounded-3xl border border-border/50 overflow-hidden shadow-2xl"
                    >
                        <div className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <BarChart2 className="w-6 h-6 text-primary" />
                                Comparativo Completo
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-muted/30">
                                        <th className="text-left px-8 py-5 font-bold text-foreground">Recurso</th>
                                        <th className="text-center px-6 py-5 font-bold text-foreground">Grátis</th>
                                        <th className="text-center px-6 py-5 font-bold text-foreground">Prata</th>
                                        <th className="text-center px-6 py-5 font-bold text-amber-500 bg-amber-500/5">
                                            <span className="flex items-center justify-center gap-2">
                                                <Crown className="w-5 h-5" />
                                                Ouro
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="px-8 py-5 text-foreground flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-primary" />
                                            </div>
                                            Taxa de Comissão
                                        </td>
                                        <td className="px-6 py-5 text-center font-bold text-red-500 text-lg">20%</td>
                                        <td className="px-6 py-5 text-center font-bold text-amber-500 text-lg">15%</td>
                                        <td className="px-6 py-5 text-center font-bold text-success text-xl bg-amber-500/5">10%</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="px-8 py-5 text-foreground flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <TrendingUp className="w-5 h-5 text-primary" />
                                            </div>
                                            Aulas por Mês
                                        </td>
                                        <td className="px-6 py-5 text-center text-muted-foreground">Até 10</td>
                                        <td className="px-6 py-5 text-center text-foreground font-medium">Ilimitadas</td>
                                        <td className="px-6 py-5 text-center text-foreground font-medium bg-amber-500/5">Ilimitadas</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="px-8 py-5 text-foreground flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Star className="w-5 h-5 text-primary" />
                                            </div>
                                            Destaque na Busca
                                        </td>
                                        <td className="px-6 py-5 text-center"><X className="w-6 h-6 text-muted-foreground/50 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><X className="w-6 h-6 text-muted-foreground/50 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center bg-amber-500/5"><Check className="w-6 h-6 text-success mx-auto" /></td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="px-8 py-5 text-foreground flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                                <Crown className="w-5 h-5 text-amber-500" />
                                            </div>
                                            Selo Elite
                                        </td>
                                        <td className="px-6 py-5 text-center"><X className="w-6 h-6 text-muted-foreground/50 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><X className="w-6 h-6 text-muted-foreground/50 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center bg-amber-500/5"><Check className="w-6 h-6 text-success mx-auto" /></td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="px-8 py-5 text-foreground flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Shield className="w-5 h-5 text-primary" />
                                            </div>
                                            Suporte Prioritário
                                        </td>
                                        <td className="px-6 py-5 text-center"><X className="w-6 h-6 text-muted-foreground/50 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><Check className="w-6 h-6 text-success mx-auto" /></td>
                                        <td className="px-6 py-5 text-center bg-amber-500/5"><Check className="w-6 h-6 text-success mx-auto" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                Comece Gratuitamente
                            </h2>
                            <p className="text-white/80 mb-8 text-lg">
                                Teste o plano Grátis e faça upgrade quando quiser. Sem compromisso.
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/para-instrutores/cadastro"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold text-lg shadow-xl shadow-success/30 hover:shadow-2xl hover:shadow-success/40 transition-all"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Criar Minha Conta
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
