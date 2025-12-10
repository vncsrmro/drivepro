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
    ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { planos } from "@/data/mockData";

export default function PlanosInstrutorPage() {
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
                        Planos para Instrutores
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto"
                    >
                        Quanto melhor seu plano, menor sua taxa de comissão. Escolha o ideal para você.
                    </motion.p>
                </div>
            </section>

            {/* Plans */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {planos.map((plano, index) => {
                            const isElite = plano.id === "ouro";
                            return (
                                <motion.div
                                    key={plano.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`bg-card rounded-xl border p-6 relative flex flex-col ${isElite ? "border-amber-300 shadow-lg shadow-amber-500/10" : "border-border"
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
                                        <div className="mt-4 py-2 px-4 bg-success/10 rounded-lg inline-block">
                                            <p className="text-success font-bold text-lg">
                                                {plano.taxaComissao}% de comissão
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 flex-1 mb-6">
                                        {plano.recursos.map((recurso) => (
                                            <li key={recurso} className="flex items-start gap-2">
                                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isElite ? "text-amber-500" : "text-success"}`} />
                                                <span className="text-sm text-foreground">{recurso}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/para-instrutores/cadastro"
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

                    {/* Comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card rounded-xl border border-border overflow-hidden"
                    >
                        <div className="p-6 border-b border-border">
                            <h2 className="text-lg font-semibold text-foreground">
                                Comparativo Completo
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-muted/50">
                                        <th className="text-left px-6 py-4 font-semibold text-foreground">Recurso</th>
                                        <th className="text-center px-6 py-4 font-semibold text-foreground">Grátis</th>
                                        <th className="text-center px-6 py-4 font-semibold text-foreground">Prata</th>
                                        <th className="text-center px-6 py-4 font-semibold text-amber-500">Ouro</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr>
                                        <td className="px-6 py-4 text-foreground flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-primary" />
                                            Taxa de Comissão
                                        </td>
                                        <td className="px-6 py-4 text-center font-semibold text-amber-600">20%</td>
                                        <td className="px-6 py-4 text-center font-semibold text-amber-500">15%</td>
                                        <td className="px-6 py-4 text-center font-semibold text-success">10%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-foreground flex items-center gap-2">
                                            <BarChart2 className="w-4 h-4 text-primary" />
                                            Aulas por Mês
                                        </td>
                                        <td className="px-6 py-4 text-center text-muted-foreground">Até 10</td>
                                        <td className="px-6 py-4 text-center text-foreground">Ilimitadas</td>
                                        <td className="px-6 py-4 text-center text-foreground">Ilimitadas</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-foreground flex items-center gap-2">
                                            <Star className="w-4 h-4 text-primary" />
                                            Destaque na Busca
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Check className="w-5 h-5 text-success mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-foreground flex items-center gap-2">
                                            <Crown className="w-4 h-4 text-amber-500" />
                                            Selo Elite
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Check className="w-5 h-5 text-success mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-foreground flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-primary" />
                                            Suporte Prioritário
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Check className="w-5 h-5 text-success mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Check className="w-5 h-5 text-success mx-auto" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Comece Gratuitamente
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Teste o plano Grátis e faça upgrade quando quiser.
                    </p>
                    <Link
                        href="/para-instrutores/cadastro"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                    >
                        Criar Minha Conta
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
