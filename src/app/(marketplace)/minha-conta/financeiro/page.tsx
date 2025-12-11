"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, DollarSign, Download, Calendar } from "lucide-react";

export default function FinanceiroPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto min-h-screen bg-[#0a0a0f] text-white">
            <h1 className="text-3xl font-bold mb-8">Meu Financeiro</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl">
                            <CreditCard className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-300">Métodos de Pagamento</h3>
                    </div>
                    <p className="text-2xl font-bold">**** 4242</p>
                    <p className="text-sm text-gray-400">Mastercard - Principal</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-500/20 rounded-xl">
                            <DollarSign className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-300">Total Investido</h3>
                    </div>
                    <p className="text-2xl font-bold">R$ 1.250,00</p>
                    <p className="text-sm text-gray-400">Últimos 30 dias</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-500/20 rounded-xl">
                            <Calendar className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-300">Próxima Fatura</h3>
                    </div>
                    <p className="text-2xl font-bold">R$ 0,00</p>
                    <p className="text-sm text-gray-400">Nenhuma fatura pendente</p>
                </motion.div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Histórico de Transações</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Data</th>
                            <th className="px-6 py-4">Descrição</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Valor</th>
                            <th className="px-6 py-4 text-center">Recibo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-gray-300">10 Dez 2025</td>
                            <td className="px-6 py-4 font-medium">Pacote 5 Aulas Práticas</td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">Pago</span>
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-white">R$ 450,00</td>
                            <td className="px-6 py-4 text-center">
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-gray-300">05 Dez 2025</td>
                            <td className="px-6 py-4 font-medium">Aula Avulsa - Baliza</td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">Pago</span>
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-white">R$ 90,00</td>
                            <td className="px-6 py-4 text-center">
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
