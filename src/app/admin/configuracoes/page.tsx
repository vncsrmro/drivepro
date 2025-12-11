"use client";

import React, { useEffect } from "react";
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
import { createClient } from "@/lib/supabase/client";

// Types matching system_settings table JSON structure
interface CommissionRates {
    gratis: number;
    prata: number;
    ouro: number;
}

interface PlanPrices {
    prata: number;
    ouro: number;
}

export default function ConfiguracoesPage() {
    const supabase = createClient();
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    // Initial state
    const [commissionRates, setCommissionRates] = React.useState<CommissionRates>({
        gratis: 20,
        prata: 15,
        ouro: 10
    });

    const [planPrices, setPlanPrices] = React.useState<PlanPrices>({
        prata: 99,
        ouro: 199
    });

    // Fetch settings on mount
    useEffect(() => {
        async function fetchSettings() {
            try {
                // Fetch commission rates
                const { data: ratesData, error: ratesError } = await supabase
                    .from('system_settings')
                    .select('value')
                    .eq('key', 'commission_rates')
                    .single();

                if (ratesData) {
                    setCommissionRates(ratesData.value as unknown as CommissionRates);
                }

                // Fetch plan prices
                const { data: pricesData, error: pricesError } = await supabase
                    .from('system_settings')
                    .select('value')
                    .eq('key', 'plan_prices')
                    .single();

                if (pricesData) {
                    setPlanPrices(pricesData.value as unknown as PlanPrices);
                }

            } catch (err) {
                console.error("Error fetching settings:", err);
                setError("Falha ao carregar configurações.");
            } finally {
                setLoading(false);
            }
        }

        fetchSettings();
    }, [supabase]);

    const handleSave = async () => {
        setSaving(true);
        setError(null);
        setSaved(false);

        try {
            // Update commission rates
            const { error: ratesError } = await supabase
                .from('system_settings')
                .upsert({
                    key: 'commission_rates',
                    value: commissionRates,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'key' });

            if (ratesError) throw ratesError;

            // Update plan prices
            const { error: pricesError } = await supabase
                .from('system_settings')
                .upsert({
                    key: 'plan_prices',
                    value: planPrices,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'key' });

            if (pricesError) throw pricesError;

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (err) {
            console.error("Error saving settings:", err);
            setError("Erro ao salvar configurações.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

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

            {/* Messages */}
            {saved && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center gap-3"
                >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <p className="text-emerald-400">Configurações salvas com sucesso!</p>
                </motion.div>
            )}

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center gap-3"
                >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{error}</p>
                </motion.div>
            )}

            {/* Commission Rates */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-xl border border-white/10 p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Percent className="w-5 h-5 text-blue-400" />
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
                                value={commissionRates.gratis}
                                onChange={(e) => setCommissionRates({ ...commissionRates, gratis: Number(e.target.value) })}
                                className="w-20 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                value={commissionRates.prata}
                                onChange={(e) => setCommissionRates({ ...commissionRates, prata: Number(e.target.value) })}
                                className="w-20 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                value={commissionRates.ouro}
                                onChange={(e) => setCommissionRates({ ...commissionRates, ouro: Number(e.target.value) })}
                                className="w-20 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    <DollarSign className="w-5 h-5 text-emerald-400" />
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
                                value={planPrices.prata}
                                onChange={(e) => setPlanPrices({ ...planPrices, prata: Number(e.target.value) })}
                                className="w-24 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                value={planPrices.ouro}
                                onChange={(e) => setPlanPrices({ ...planPrices, ouro: Number(e.target.value) })}
                                className="w-24 px-3 py-2 bg-white/10 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                disabled={saving}
                className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {saving ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        <Save className="w-5 h-5" />
                        Salvar Configurações
                    </>
                )}
            </motion.button>
        </div>
    );
}
