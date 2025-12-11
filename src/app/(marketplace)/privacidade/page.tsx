"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";

export default function PrivacidadePage() {
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
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-200">Privacidade e Dados</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Política de Privacidade
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
                                    Informações que Coletamos
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg mb-4">Coletamos as seguintes informações:</p>
                                <ul className="list-disc pl-6 text-gray-400 space-y-2 leading-relaxed">
                                    <li>Dados de identificação (nome, CPF, email, telefone)</li>
                                    <li>Dados de localização para busca de instrutores</li>
                                    <li>Informações de pagamento (processadas por terceiros seguros)</li>
                                    <li>Histórico de aulas e avaliações</li>
                                    <li>Dados de navegação e uso da plataforma</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">2</span>
                                    Como Utilizamos seus Dados
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg mb-4">Utilizamos suas informações para:</p>
                                <ul className="list-disc pl-6 text-gray-400 space-y-2 leading-relaxed">
                                    <li>Facilitar a conexão entre alunos e instrutores</li>
                                    <li>Processar pagamentos de forma segura</li>
                                    <li>Melhorar nossos serviços e experiência do usuário</li>
                                    <li>Enviar comunicações relevantes sobre sua conta</li>
                                    <li>Cumprir obrigações legais e regulatórias</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">3</span>
                                    Compartilhamento de Dados
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Compartilhamos dados apenas com: instrutores (para realização das aulas),
                                    processadores de pagamento, e autoridades quando exigido por lei. Nunca
                                    vendemos seus dados para terceiros.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">4</span>
                                    Segurança dos Dados
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Implementamos medidas técnicas e organizacionais para proteger seus dados,
                                    incluindo criptografia, controles de acesso e monitoramento contínuo.
                                    Nossos sistemas são compatíveis com PCI DSS para transações financeiras.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">5</span>
                                    Seus Direitos (LGPD)
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg mb-4">De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
                                <ul className="list-disc pl-6 text-gray-400 space-y-2 leading-relaxed">
                                    <li>Acessar seus dados pessoais</li>
                                    <li>Corrigir dados incompletos ou desatualizados</li>
                                    <li>Solicitar a exclusão de seus dados</li>
                                    <li>Revogar consentimento a qualquer momento</li>
                                    <li>Solicitar portabilidade dos dados</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">6</span>
                                    Cookies
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Utilizamos cookies para melhorar sua experiência, lembrar preferências e
                                    analisar o uso da plataforma. Você pode configurar seu navegador para
                                    recusar cookies, mas isso pode afetar algumas funcionalidades.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">7</span>
                                    Retenção de Dados
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário
                                    para cumprir obrigações legais. Após encerramento da conta, os dados são
                                    mantidos por 5 anos conforme legislação fiscal brasileira.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">8</span>
                                    Alterações na Política
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Podemos atualizar esta política periodicamente. Notificaremos sobre
                                    alterações significativas por email ou através da plataforma.
                                </p>
                            </section>

                            <div className="pt-8 border-t border-white/10">
                                <h2 className="text-xl font-bold text-white mb-2">Contato do DPO</h2>
                                <p className="text-gray-400">
                                    Para exercer seus direitos ou esclarecer dúvidas sobre privacidade,
                                    entre em contato com nosso Encarregado de Proteção de Dados:
                                    <span className="text-blue-400 block mt-1">privacidade@direcaopro.com.br</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
