"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermosPage() {
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
                        Termos de Uso
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
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                        <p className="text-muted-foreground mb-6">
                            Ao acessar e utilizar a plataforma Direção Pro, você concorda em cumprir e estar
                            vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes
                            termos, não deve utilizar nossos serviços.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
                        <p className="text-muted-foreground mb-6">
                            A Direção Pro é uma plataforma que conecta alunos a instrutores de direção
                            independentes. Não somos uma autoescola e não fornecemos diretamente os serviços
                            de instrução. Atuamos como intermediários facilitando a conexão e transação entre
                            as partes.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">3. Cadastro e Conta</h2>
                        <p className="text-muted-foreground mb-6">
                            Para utilizar nossos serviços, você deve criar uma conta fornecendo informações
                            verdadeiras e atualizadas. Você é responsável por manter a confidencialidade de
                            suas credenciais de acesso e por todas as atividades realizadas em sua conta.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">4. Pagamentos</h2>
                        <p className="text-muted-foreground mb-6">
                            Os pagamentos são processados através de nossa plataforma segura. O valor pago
                            pelo aluno fica em custódia (Escrow) até a conclusão da aula. Após a confirmação
                            de realização, o valor é liberado ao instrutor, descontadas as taxas aplicáveis.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">5. Cancelamentos e Reembolsos</h2>
                        <p className="text-muted-foreground mb-6">
                            Cancelamentos feitos com mais de 24 horas de antecedência são reembolsados
                            integralmente. Cancelamentos com menos de 24 horas podem estar sujeitos a uma
                            taxa de até 50% do valor da aula. Em casos de insatisfação comprovada, o aluno
                            pode solicitar revisão em até 24 horas após a aula.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">6. Responsabilidades</h2>
                        <p className="text-muted-foreground mb-6">
                            A Direção Pro não se responsabiliza pela qualidade das aulas ministradas pelos
                            instrutores, uma vez que são profissionais independentes. Entretanto, manteremos
                            um sistema de avaliações e tomaremos medidas contra instrutores com histórico
                            negativo recorrente.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">7. Propriedade Intelectual</h2>
                        <p className="text-muted-foreground mb-6">
                            Todo o conteúdo da plataforma, incluindo marca, logo, textos e designs, são
                            propriedade da Direção Pro. É proibida a reprodução sem autorização prévia.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">8. Alterações nos Termos</h2>
                        <p className="text-muted-foreground mb-6">
                            Reservamo-nos o direito de modificar estes termos a qualquer momento. As
                            alterações entrarão em vigor imediatamente após a publicação. O uso continuado
                            da plataforma constitui aceitação dos termos modificados.
                        </p>

                        <h2 className="text-xl font-bold text-foreground mb-4">9. Contato</h2>
                        <p className="text-muted-foreground">
                            Em caso de dúvidas sobre estes Termos de Uso, entre em contato através do
                            email: termos@direcaopro.com.br
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
