"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Target,
    Shield,
    Heart,
    Award,
    Car
} from "lucide-react";

export default function SobrePage() {
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
                        Sobre a Direção Pro
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto"
                    >
                        Conectando alunos e instrutores para realizar o sonho da habilitação.
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Nossa Missão
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                A Direção Pro nasceu com um objetivo claro: democratizar o acesso
                                a aulas de direção de qualidade. Acreditamos que todo brasileiro
                                merece aprender a dirigir com segurança, confiança e com
                                profissionais qualificados.
                            </p>
                            <p className="text-muted-foreground">
                                Nossa plataforma conecta alunos a instrutores certificados,
                                oferecendo transparência, segurança e conveniência em todo
                                o processo de aprendizado.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-card rounded-xl border border-border p-8"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-8 h-8 text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">+500</p>
                                    <p className="text-sm text-muted-foreground">Instrutores</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Car className="w-8 h-8 text-success" />
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">+10.000</p>
                                    <p className="text-sm text-muted-foreground">Aulas Realizadas</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Award className="w-8 h-8 text-amber-500" />
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">4.9/5</p>
                                    <p className="text-sm text-muted-foreground">Avaliação Média</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Shield className="w-8 h-8 text-purple-500" />
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">100%</p>
                                    <p className="text-sm text-muted-foreground">Seguro</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Nossos Valores
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "Segurança",
                                description: "Pagamentos protegidos, verificação de documentos e suporte dedicado."
                            },
                            {
                                icon: Target,
                                title: "Qualidade",
                                description: "Apenas instrutores certificados e bem avaliados na plataforma."
                            },
                            {
                                icon: Heart,
                                title: "Compromisso",
                                description: "Dedicados a ajudar cada aluno a conquistar sua habilitação."
                            }
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-secondary rounded-xl p-6 text-center"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
