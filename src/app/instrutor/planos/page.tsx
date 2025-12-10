"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Crown, X, Zap, Shield, Star, BarChart2 } from "lucide-react";
import { planos, getInstrutorById } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

const INSTRUCTOR_ID = "1";

export default function PlanosPage() {
    const instructor = getInstrutorById(INSTRUCTOR_ID)!;
    const currentPlan = instructor.plano;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    Planos Premium
                </h1>
                <p className="text-muted-foreground">
                    Escolha o plano ideal para impulsionar suas aulas e reduzir suas taxas.
                </p>
            </div>

            {/* Current Plan Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/5 rounded-xl p-4 mb-8 flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <Crown className={cn(
                        "w-8 h-8",
                        currentPlan === "ouro" ? "text-amber-500" :
                            currentPlan === "prata" ? "text-gray-400" : "text-muted-foreground"
                    )} />
                    <div>
                        <p className="font-semibold text-foreground">
                            Seu plano atual: <span className="capitalize">{currentPlan}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Taxa de comissão: {planos.find(p => p.id === currentPlan)?.taxaComissao}%
                        </p>
                    </div>
                </div>
                {currentPlan === "ouro" && (
                    <Badge variant="elite">Elite</Badge>
                )}
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {planos.map((plano, index) => {
                    const isCurrentPlan = plano.id === currentPlan;
                    const isElite = plano.id === "ouro";

                    return (
                        <motion.div
                            key={plano.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative bg-card rounded-xl border p-6 flex flex-col",
                                isElite
                                    ? "border-amber-300 shadow-lg shadow-amber-500/10"
                                    : "border-border",
                                isCurrentPlan && "ring-2 ring-primary"
                            )}
                        >
                            {/* Elite Badge */}
                            {isElite && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge variant="elite" className="flex items-center gap-1 px-3 py-1">
                                        <Crown className="w-3 h-3" />
                                        Mais Popular
                                    </Badge>
                                </div>
                            )}

                            {/* Current Plan Badge */}
                            {isCurrentPlan && (
                                <div className="absolute top-4 right-4">
                                    <Badge variant="success" className="text-xs">
                                        Plano Atual
                                    </Badge>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {plano.nome}
                                </h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-foreground">
                                        R$ {plano.preco.toFixed(0)}
                                    </span>
                                    {plano.preco > 0 && (
                                        <span className="text-muted-foreground">/mês</span>
                                    )}
                                </div>
                                <p className="mt-2 text-lg font-semibold text-success">
                                    {plano.taxaComissao}% de comissão
                                </p>
                            </div>

                            <ul className="space-y-3 flex-1 mb-6">
                                {plano.recursos.map((recurso) => (
                                    <li key={recurso} className="flex items-start gap-2">
                                        <Check className={cn(
                                            "w-5 h-5 flex-shrink-0 mt-0.5",
                                            isElite ? "text-amber-500" : "text-success"
                                        )} />
                                        <span className="text-foreground text-sm">{recurso}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                disabled={isCurrentPlan}
                                className={cn(
                                    "w-full py-3 rounded-lg font-semibold transition-all",
                                    isCurrentPlan
                                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                                        : isElite
                                            ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 hover:from-amber-500 hover:to-yellow-600"
                                            : "bg-primary text-white hover:bg-primary/90"
                                )}
                            >
                                {isCurrentPlan ? "Plano Atual" : plano.preco === 0 ? "Plano Grátis" : "Assinar Agora"}
                            </button>
                        </motion.div>
                    );
                })}
            </div>

            {/* Comparison Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
            >
                <div className="p-6 border-b border-border">
                    <h2 className="text-lg font-semibold text-foreground">
                        Comparativo de Planos
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-muted/50">
                                <th className="text-left px-6 py-4 font-semibold text-foreground">
                                    Recurso
                                </th>
                                {planos.map((plano) => (
                                    <th key={plano.id} className="text-center px-6 py-4 font-semibold text-foreground capitalize">
                                        {plano.nome}
                                    </th>
                                ))}
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
    );
}
