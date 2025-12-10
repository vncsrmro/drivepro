"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { InstructorList } from "@/components/hub/InstructorList";
import { MinhaJornada } from "@/components/hub/MinhaJornada";
import { getInstrutoresAtivos } from "@/data/mockData";
import {
    Search,
    Users,
    Shield,
    Award,
    Star,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

const features = [
    {
        icon: Search,
        title: "Busca Inteligente",
        description: "Encontre instrutores por categoria CNH, transmissão e localização.",
    },
    {
        icon: Shield,
        title: "Pagamento Seguro",
        description: "Sistema de custódia (Escrow) garante seu dinheiro até a aula ser concluída.",
    },
    {
        icon: Award,
        title: "Instrutores Verificados",
        description: "Todos os profissionais passam por validação de documentos.",
    },
    {
        icon: Users,
        title: "Chat Direto",
        description: "Converse com seu instrutor após agendar a aula.",
    },
];

const testimonials = [
    {
        name: "Maria Clara",
        location: "Americana, SP",
        rating: 5,
        text: "Consegui minha CNH em tempo recorde! O Carlos é um excelente instrutor.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Pedro Henrique",
        location: "Limeira, SP",
        rating: 5,
        text: "Tinha muito medo de dirigir, mas a Ana me ajudou a superar. Super recomendo!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Juliana Santos",
        location: "Piracicaba, SP",
        rating: 5,
        text: "Plataforma excelente! Agendei minhas aulas em minutos e o pagamento é muito seguro.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
];

export default function HomePage() {
    const instrutores = getInstrutoresAtivos();
    const [isLoggedIn] = React.useState(true); // Mock logged in state

    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Minha Jornada - Only visible when logged in */}
            {isLoggedIn && (
                <section className="py-8 bg-secondary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md mx-auto lg:max-w-lg">
                            <MinhaJornada />
                        </div>
                    </div>
                </section>
            )}

            {/* Features Section */}
            <section id="como-funciona" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Como Funciona
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Em poucos passos, você encontra o instrutor ideal e agenda suas aulas
                            com total segurança.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Instructors */}
            <section className="py-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">
                                Instrutores em Destaque
                            </h2>
                            <p className="text-muted-foreground">
                                Os melhores profissionais da sua região
                            </p>
                        </div>
                        <a
                            href="/instrutores"
                            className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                            Ver todos
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <InstructorList instructors={instrutores.slice(0, 3)} />

                    <a
                        href="/instrutores"
                        className="md:hidden flex items-center justify-center gap-2 mt-8 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                        Ver todos os instrutores
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            O Que Nossos Alunos Dizem
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Milhares de alunos já conquistaram sua CNH com a Direção Pro
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-6 rounded-xl border border-border"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>
                                <p className="text-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Pronto Para Começar?
                    </h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Cadastre-se gratuitamente e agende sua primeira aula hoje mesmo.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/instrutores"
                            className="px-8 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors inline-flex items-center gap-2"
                        >
                            <CheckCircle2 className="w-5 h-5" />
                            Encontrar Instrutor
                        </a>
                        <a
                            href="/instrutor"
                            className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                        >
                            Sou Instrutor
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
