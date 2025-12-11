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
    Send,
    Headphones,
    ArrowRight
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
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-20">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px]" />
            </div>

            {/* Hero */}
            <section className="relative py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <Headphones className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">Suporte 24h</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Central de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Suporte</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Estamos aqui para ajudar você. Entre em contato conosco.
                    </motion.p>
                </div>
            </section>

            <section className="relative pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Options */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-1 space-y-5"
                        >
                            <h2 className="text-xl font-bold text-white mb-5">
                                Canais de Atendimento
                            </h2>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 hover:border-emerald-500/50 transition-colors group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">WhatsApp</p>
                                        <p className="text-sm text-gray-400">(11) 99999-9999</p>
                                    </div>
                                </div>
                                <p className="text-xs text-emerald-400/80 font-medium">⚡ Resposta em até 2h</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 hover:border-blue-500/50 transition-colors group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-sm text-gray-400">suporte@direcaopro.com.br</p>
                                    </div>
                                </div>
                                <p className="text-xs text-blue-400/80 font-medium">📧 Resposta em até 24h</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 hover:border-amber-500/50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Clock className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Horário</p>
                                        <p className="text-sm text-gray-400">Seg a Sex, 8h às 18h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <HelpCircle className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-sm mb-1">Dúvidas Frequentes</p>
                                        <p className="text-xs text-gray-400 mb-3">
                                            Muitas dúvidas já estão respondidas em nossa FAQ.
                                        </p>
                                        <Link href="/faq" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                                            Ver Perguntas Frequentes <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <FileText className="w-5 h-5 text-purple-400" />
                                </div>
                                Envie sua Mensagem
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.nome}
                                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                            required
                                            className="w-full px-4 py-3.5 bg-[#0a0a0f] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white placeholder-gray-500 transition-all"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3.5 bg-[#0a0a0f] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white placeholder-gray-500 transition-all"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Assunto
                                    </label>
                                    <select
                                        value={formData.assunto}
                                        onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                                        required
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white transition-all appearance-none"
                                    >
                                        <option value="" className="bg-[#0a0a0f]">Selecione um assunto</option>
                                        <option value="pagamento" className="bg-[#0a0a0f]">Pagamentos e Reembolsos</option>
                                        <option value="aula" className="bg-[#0a0a0f]">Problemas com Aula</option>
                                        <option value="conta" className="bg-[#0a0a0f]">Minha Conta</option>
                                        <option value="instrutor" className="bg-[#0a0a0f]">Sou Instrutor</option>
                                        <option value="sugestao" className="bg-[#0a0a0f]">Sugestão</option>
                                        <option value="outro" className="bg-[#0a0a0f]">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensagem
                                    </label>
                                    <textarea
                                        value={formData.mensagem}
                                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white placeholder-gray-500 resize-none transition-all"
                                        placeholder="Descreva sua dúvida ou problema..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                                >
                                    <Send className="w-5 h-5" />
                                    Enviar Mensagem
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
