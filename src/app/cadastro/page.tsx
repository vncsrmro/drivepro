"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { User, Car, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export default function CadastroPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Como você quer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">começar?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Escolha o seu perfil para criar sua conta personalizada
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Aluno Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                                <BookOpen className="w-8 h-8" />
                            </div>

                            <h2 className="text-3xl font-bold mb-4">Sou Aluno</h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Quero encontrar os melhores instrutores, agendar aulas e tirar minha habilitação com tranquilidade.
                            </p>

                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                    <span>Encontre instrutores verificados</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                    <span>Agendamento online fácil</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                    <span>Pagamento seguro e facilitado</span>
                                </li>
                            </ul>

                            <Link
                                href="/signup?role=aluno"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25 w-full justify-center group-hover:shadow-blue-500/40"
                            >
                                Criar Conta de Aluno
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Instrutor Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                <Car className="w-8 h-8" />
                            </div>

                            <h2 className="text-3xl font-bold mb-4">Sou Instrutor</h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Quero aumentar minha renda, gerenciar minha agenda e conseguir mais alunos na minha região.
                            </p>

                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                    <span>Agenda inteligente e flexível</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                    <span>Receba pagamentos garantidos</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                    <span>Ferramentas de gestão completas</span>
                                </li>
                            </ul>

                            <Link
                                href="/para-instrutores/cadastro"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/25 w-full justify-center group-hover:shadow-purple-500/40"
                            >
                                Cadastro de Instrutor
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-400">
                        Já tem uma conta?{" "}
                        <Link href="/login" className="text-white font-semibold hover:underline">
                            Faça login aqui
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
