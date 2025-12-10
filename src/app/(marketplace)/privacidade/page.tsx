"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacidadePage() {
    return (
        <div className="min-h-screen bg-secondary pt-20">
            {/* Hero */}
            <section className="bg-primary py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-2"
                    >
                        Política de Privacidade
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70"
                    >
                        Última atualização: Dezembro de 2024
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card rounded-xl border border-border p-8 prose prose-gray max-w-none"
                    >
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
                        <p className="text-muted-foreground mb-4">Coletamos as seguintes informações:</p>
                        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                            <li>Dados de identificação (nome, CPF, email, telefone)</li>
                            <li>Dados de localização para busca de instrutores</li>
                            <li>Informações de pagamento (processadas por terceiros seguros)</li>
                            <li>Histórico de aulas e avaliações</li>
                            <li>Dados de navegação e uso da plataforma</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground mb-4">2. Como Utilizamos seus Dados</h2>
                        <p className="text-muted-foreground mb-4">Utilizamos suas informações para:</p>
                        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                            <li>Facilitar a conexão entre alunos e instrutores</li>
                            <li>Processar pagamentos de forma segura</li>
                            <li>Melhorar nossos serviços e experiência do usuário</li>
                            <li>Enviar comunicações relevantes sobre sua conta</li>
                            <li>Cumprir obrigações legais e regulatórias</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground mb-4">3. Compartilhamento de Dados</h2>
                        <p className="text-muted-foreground mb-6">
                            Compartilhamos dados apenas com: instrutores (para realização das aulas),
                            processadores de pagamento, e autoridades quando exigido por lei. Nunca
                            vendemos seus dados para terceiros.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">4. Segurança dos Dados</h2>
                        <p className="text-muted-foreground mb-6">
                            Implementamos medidas técnicas e organizacionais para proteger seus dados,
                            incluindo criptografia, controles de acesso e monitoramento contínuo.
                            Nossos sistemas são compatíveis com PCI DSS para transações financeiras.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">5. Seus Direitos (LGPD)</h2>
                        <p className="text-muted-foreground mb-4">De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
                        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                            <li>Acessar seus dados pessoais</li>
                            <li>Corrigir dados incompletos ou desatualizados</li>
                            <li>Solicitar a exclusão de seus dados</li>
                            <li>Revogar consentimento a qualquer momento</li>
                            <li>Solicitar portabilidade dos dados</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground mb-4">6. Cookies</h2>
                        <p className="text-muted-foreground mb-6">
                            Utilizamos cookies para melhorar sua experiência, lembrar preferências e
                            analisar o uso da plataforma. Você pode configurar seu navegador para
                            recusar cookies, mas isso pode afetar algumas funcionalidades.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">7. Retenção de Dados</h2>
                        <p className="text-muted-foreground mb-6">
                            Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário
                            para cumprir obrigações legais. Após encerramento da conta, os dados são
                            mantidos por 5 anos conforme legislação fiscal brasileira.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">8. Alterações na Política</h2>
                        <p className="text-muted-foreground mb-6">
                            Podemos atualizar esta política periodicamente. Notificaremos sobre
                            alterações significativas por email ou através da plataforma.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">9. Contato do DPO</h2>
                        <p className="text-muted-foreground">
                            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade,
                            entre em contato com nosso Encarregado de Proteção de Dados:
                            privacidade@direcaopro.com.br
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
