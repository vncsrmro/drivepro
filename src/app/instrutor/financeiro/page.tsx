"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    TrendingUp,
    Clock,
    CheckCircle2,
    Download,
    CreditCard,
    Building,
    X
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { DataTable } from "@/components/ui/DataTable";
import {
    getInstrutorById,
    getSaldoDisponivel,
    getGanhosBrutosMes,
    getTransacoesInstrutor,
    transacoes
} from "@/data/mockData";
import { Transaction } from "@/types/types";

const INSTRUCTOR_ID = "1";

export default function FinanceiroPage() {
    const instructor = getInstrutorById(INSTRUCTOR_ID)!;
    const saldoDisponivel = getSaldoDisponivel(INSTRUCTOR_ID);
    const ganhosBrutosMes = getGanhosBrutosMes(INSTRUCTOR_ID);
    const transacoesInstrutor = getTransacoesInstrutor(INSTRUCTOR_ID);

    const [showWithdrawModal, setShowWithdrawModal] = React.useState(false);
    const [bankData, setBankData] = React.useState({
        banco: "Nubank",
        agencia: "0001",
        conta: "12345678-9",
        tipoConta: "corrente",
        titular: instructor.nome,
        cpf: "123.456.789-00",
        chavePix: "joao@email.com",
    });

    const pendingAmount = transacoesInstrutor
        .filter(t => t.status === "pendente")
        .reduce((acc, t) => acc + t.valorLiquido, 0);

    const columns = [
        {
            key: "criadoEm",
            header: "Data",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="text-foreground">
                    {new Date(tx.criadoEm).toLocaleDateString("pt-BR")}
                </span>
            ),
        },
        {
            key: "valorBruto",
            header: "Valor Bruto",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="font-medium text-foreground">
                    R$ {tx.valorBruto.toFixed(2).replace(".", ",")}
                </span>
            ),
        },
        {
            key: "taxaComissao",
            header: "Comissão",
            render: (tx: Transaction) => (
                <span className="text-destructive">
                    -{tx.taxaComissao}% (R$ {tx.valorComissao.toFixed(2).replace(".", ",")})
                </span>
            ),
        },
        {
            key: "valorLiquido",
            header: "Recebido",
            sortable: true,
            render: (tx: Transaction) => (
                <span className="font-semibold text-success">
                    R$ {tx.valorLiquido.toFixed(2).replace(".", ",")}
                </span>
            ),
        },
        {
            key: "status",
            header: "Status",
            render: (tx: Transaction) => (
                <Badge
                    variant={
                        tx.status === "liberado" ? "active" :
                            tx.status === "pago" ? "success" :
                                tx.status === "pendente" ? "pending" : "destructive"
                    }
                >
                    {tx.status === "liberado" && "Liberado"}
                    {tx.status === "pago" && "Pago"}
                    {tx.status === "pendente" && "Em Custódia"}
                    {tx.status === "cancelado" && "Cancelado"}
                </Badge>
            ),
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    Financeiro
                </h1>
                <p className="text-muted-foreground">
                    Acompanhe seus ganhos, comissões e solicite repasses.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-success/10">
                            <Wallet className="w-6 h-6 text-success" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                        R$ {saldoDisponivel.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-sm text-muted-foreground">Saldo Disponível para Saque</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-amber-500/10">
                            <Clock className="w-6 h-6 text-amber-500" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                        R$ {pendingAmount.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-sm text-muted-foreground">Em Custódia (Escrow)</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                        R$ {ganhosBrutosMes.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-sm text-muted-foreground">Ganhos Brutos (Dezembro)</p>
                </motion.div>
            </div>

            {/* Withdraw Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-success to-emerald-600 rounded-xl p-6 mb-8"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="text-white">
                        <h3 className="text-lg font-semibold mb-1">Pronto para Sacar?</h3>
                        <p className="text-white/80">
                            Você tem R$ {saldoDisponivel.toFixed(2).replace(".", ",")} disponíveis para saque.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowWithdrawModal(true)}
                        disabled={saldoDisponivel === 0}
                        className="px-6 py-3 bg-white text-success rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Solicitar Repasse
                    </button>
                </div>
            </motion.div>

            {/* Transactions Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-xl border border-border"
            >
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">
                        Extrato de Transações
                    </h2>
                    <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <Download className="w-4 h-4" />
                        Exportar CSV
                    </button>
                </div>
                <DataTable
                    data={transacoesInstrutor}
                    columns={columns}
                    keyExtractor={(tx) => tx.id}
                    emptyMessage="Nenhuma transação encontrada"
                />

                {/* Transaction Example Explanation */}
                <div className="p-4 bg-muted/30 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                        <strong>Exemplo:</strong> Aula R$ 100,00 | Comissão (10%) - R$ 10,00 | Recebido R$ 90,00
                    </p>
                </div>
            </motion.div>

            {/* Withdraw Modal */}
            <Modal
                isOpen={showWithdrawModal}
                onClose={() => setShowWithdrawModal(false)}
                title="Solicitar Repasse"
                size="lg"
            >
                <div className="space-y-6">
                    {/* Amount */}
                    <div className="text-center p-4 bg-success/10 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">Valor do Repasse</p>
                        <p className="text-3xl font-bold text-success">
                            R$ {saldoDisponivel.toFixed(2).replace(".", ",")}
                        </p>
                    </div>

                    {/* Bank Account Form */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Building className="w-5 h-5 text-primary" />
                            Dados Bancários
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Banco
                                </label>
                                <input
                                    type="text"
                                    value={bankData.banco}
                                    onChange={(e) => setBankData({ ...bankData, banco: e.target.value })}
                                    className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Agência
                                </label>
                                <input
                                    type="text"
                                    value={bankData.agencia}
                                    onChange={(e) => setBankData({ ...bankData, agencia: e.target.value })}
                                    className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Conta
                                </label>
                                <input
                                    type="text"
                                    value={bankData.conta}
                                    onChange={(e) => setBankData({ ...bankData, conta: e.target.value })}
                                    className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Tipo
                                </label>
                                <select
                                    value={bankData.tipoConta}
                                    onChange={(e) => setBankData({ ...bankData, tipoConta: e.target.value })}
                                    className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="corrente">Corrente</option>
                                    <option value="poupanca">Poupança</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                                Chave PIX (opcional)
                            </label>
                            <input
                                type="text"
                                value={bankData.chavePix}
                                onChange={(e) => setBankData({ ...bankData, chavePix: e.target.value })}
                                className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowWithdrawModal(false)}
                            className="flex-1 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                alert("Repasse solicitado com sucesso!");
                                setShowWithdrawModal(false);
                            }}
                            className="flex-1 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                        >
                            Confirmar Repasse
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
