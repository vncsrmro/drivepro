"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Save,
    AlertCircle,
    CheckCircle2,
    DollarSign,
    Percent,
    Crown,
    Settings2
} from "lucide-react";
import { systemConfig } from "@/data/mockData";

export default function ConfiguracoesPage() {
    const [config, setConfig] = React.useState(systemConfig);
    const [saved, setSaved] = React.useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Configurações do Sistema
                </h1>
                <p className="text-white/60">
                    Configure taxas de comissão e preços dos planos
                </p>
            </div>

            {/* Success Message */}
            {saved && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-success/20 border border-success/30 rounded-xl flex items-center gap-3"
                >
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <p className="text-success">Configurações salvas com sucesso!</p>
                </motion.div>
            )}

            {/* Commission Rates */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-xl border border-white/10 p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Percent className="w-5 h-5 text-primary" />
                    Taxas de Comissão
                </h2>
                <p className="text-white/60 text-sm mb-6">
                    Defina a porcentagem de comissão cobrada por transação para cada plano.
                </p>

                <div className="space-y-4">
                    {/* Grátis */}
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-white/50" />
                            </div>
                            <div>
                                <p className="font-medium text-white">Plano Grátis</p>
                                <p className="text-sm text-white/50">Comissão padrão</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={config.taxaComissaoGratis}
                                onChange={(e) => setConfig({ ...config, taxaComissaoGratis: Number(e.target.value) })}
                                className="w-20 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <span className="text-white/50">%</span>
                        </div>
                    </div>

                    {/* Prata */}
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                <Crown className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <p className="font-medium text-white">Plano Prata</p>
                                <p className="text-sm text-white/50">Comissão reduzida</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={config.taxaComissaoPrata}
                                onChange={(e) => setConfig({ ...config, taxaComissaoPrata: Number(e.target.value) })}
                                className="w-20 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <span className="text-white/50">%</span>
                        </div>
                    </div>

                    {/* Ouro */}
                    <div className="flex items-center justify-between p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                                <Crown className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                                <p className="font-medium text-white">Plano Ouro (Elite)</p>
                                <p className="text-sm text-amber-400">Menor comissão</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={config.taxaComissaoOuro}
                                onChange={(e) => setConfig({ ...config, taxaComissaoOuro: Number(e.target.value) })}
                                className="w-20 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <span className="text-white/50">%</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Plan Prices */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 rounded-xl border border-white/10 p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-success" />
                    Preços dos Planos
                </h2>
                <p className="text-white/60 text-sm mb-6">
                    Defina o valor mensal das assinaturas premium.
                </p>

                <div className="space-y-4">
                    {/* Prata */}
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                <Crown className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <p className="font-medium text-white">Plano Prata</p>
                                <p className="text-sm text-white/50">Assinatura mensal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white/50">R$</span>
                            <input
                                type="number"
                                value={config.precoPlanoPrata}
                                onChange={(e) => setConfig({ ...config, precoPlanoPrata: Number(e.target.value) })}
                                className="w-24 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <span className="text-white/50">/mês</span>
                        </div>
                    </div>

                    {/* Ouro */}
                    <div className="flex items-center justify-between p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                                <Crown className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                                <p className="font-medium text-white">Plano Ouro (Elite)</p>
                                <p className="text-sm text-amber-400">Assinatura premium</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white/50">R$</span>
                            <input
                                type="number"
                                value={config.precoPlanoOuro}
                                onChange={(e) => setConfig({ ...config, precoPlanoOuro: Number(e.target.value) })}
                                className="w-24 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <span className="text-white/50">/mês</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Warning */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6"
            >
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-amber-400 mb-1">Atenção</p>
                        <p className="text-sm text-amber-400/80">
                            Alterações nas taxas afetarão apenas novas transações. Transações existentes
                            manterão os valores originais. Alterações nos preços dos planos serão aplicadas
                            na próxima renovação de cada assinatura.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Save Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleSave}
                className="w-full py-3 bg-success text-white rounded-xl font-semibold hover:bg-success/90 transition-colors flex items-center justify-center gap-2"
            >
                <Save className="w-5 h-5" />
                Salvar Configurações
            </motion.button>
        </div>
    );
}
