"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    MessageCircle,
    Mail,
    Phone,
    Clock,
    HelpCircle,
    FileText,
    Send
} from "lucide-react";

export default function SuportePage() {
    const [formData, setFormData] = React.useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensagem enviada! Responderemos em até 24h.");
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    };

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
                        Central de Suporte
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto"
                    >
                        Estamos aqui para ajudar você. Entre em contato conosco.
                    </motion.p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Options */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-1 space-y-4"
                        >
                            <h2 className="text-xl font-bold text-foreground mb-4">
                                Canais de Atendimento
                            </h2>

                            <div className="bg-card rounded-xl border border-border p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-success" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">WhatsApp</p>
                                        <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">Resposta em até 2h</p>
                            </div>

                            <div className="bg-card rounded-xl border border-border p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Email</p>
                                        <p className="text-sm text-muted-foreground">suporte@direcaopro.com.br</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">Resposta em até 24h</p>
                            </div>

                            <div className="bg-card rounded-xl border border-border p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Horário</p>
                                        <p className="text-sm text-muted-foreground">Seg a Sex, 8h às 18h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-muted rounded-xl">
                                <div className="flex items-start gap-2">
                                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground text-sm">Dúvidas Frequentes</p>
                                        <p className="text-xs text-muted-foreground mb-2">
                                            Muitas dúvidas já estão respondidas em nossa FAQ.
                                        </p>
                                        <Link href="/faq" className="text-sm text-primary hover:underline">
                                            Ver Perguntas Frequentes →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-2 bg-card rounded-xl border border-border p-6"
                        >
                            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                Envie sua Mensagem
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.nome}
                                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">
                                        Assunto
                                    </label>
                                    <select
                                        value={formData.assunto}
                                        onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    >
                                        <option value="">Selecione um assunto</option>
                                        <option value="pagamento">Pagamentos e Reembolsos</option>
                                        <option value="aula">Problemas com Aula</option>
                                        <option value="conta">Minha Conta</option>
                                        <option value="instrutor">Sou Instrutor</option>
                                        <option value="sugestao">Sugestão</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">
                                        Mensagem
                                    </label>
                                    <textarea
                                        value={formData.mensagem}
                                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                                        placeholder="Descreva sua dúvida ou problema..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                    Enviar Mensagem
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
