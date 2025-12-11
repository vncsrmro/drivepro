"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Scale } from "lucide-react";

export default function TermosPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-md">
                        <Scale className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-200">Legal</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Termos de Uso
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400"
                >
                    Última atualização: Dezembro de 2024
                </motion.p>
            </section>

            {/* Content */}
            <section className="py-12 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12"
                    >
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">1</span>
                                    Aceitação dos Termos
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Ao acessar e utilizar a plataforma Direção Pro, você concorda em cumprir e estar
                                    vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes
                                    terms, não deve utilizar nossos serviços.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">2</span>
                                    Descrição do Serviço
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    A Direção Pro é uma plataforma que conecta alunos a instrutores de direção
                                    independentes. Não somos uma autoescola e não fornecemos diretamente os serviços
                                    de instrução. Atuamos como intermediários facilitando a conexão e transação entre
                                    as partes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">3</span>
                                    Cadastro e Conta
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Para utilizar nossos serviços, você deve criar uma conta fornecendo informações
                                    verdadeiras e atualizadas. Você é responsável por manter a confidencialidade de
                                    suas credenciais de acesso e por todas as atividades realizadas em sua conta.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">4</span>
                                    Pagamentos
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Os pagamentos são processados através de nossa plataforma segura. O valor pago
                                    pelo aluno fica em custódia (Escrow) até a conclusão da aula. Após a confirmação
                                    de realização, o valor é liberado ao instrutor, descontadas as taxas aplicáveis.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">5</span>
                                    Cancelamentos e Reembolsos
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Cancelamentos feitos com mais de 24 horas de antecedência são reembolsados
                                    integralmente. Cancelamentos com menos de 24 horas podem estar sujeitos a uma
                                    taxa de até 50% do valor da aula. Em casos de insatisfação comprovada, o aluno
                                    pode solicitar revisão em até 24 horas após a aula.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">6</span>
                                    Responsabilidades
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    A Direção Pro não se responsabiliza pela qualidade das aulas ministradas pelos
                                    instrutores, uma vez que são profissionais independentes. Entretanto, manteremos
                                    um sistema de avaliações e tomaremos medidas contra instrutores com histórico
                                    negativo recorrente.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">7</span>
                                    Propriedade Intelectual
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Todo o conteúdo da plataforma, incluindo marca, logo, textos e designs, são
                                    propriedade da Direção Pro. É proibida a reprodução sem autorização prévia.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">8</span>
                                    Alterações nos Termos
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As
                                    alterações entrarão em vigor imediatamente após a publicação. O uso continuado
                                    da plataforma constitui aceitação dos termos modificados.
                                </p>
                            </section>

                            <div className="pt-8 border-t border-white/10">
                                <h2 className="text-xl font-bold text-white mb-2">Contato</h2>
                                <p className="text-gray-400">
                                    Em caso de dúvidas sobre estes Termos de Uso, entre em contato através do
                                    email: <span className="text-blue-400">termos@direcaopro.com.br</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
