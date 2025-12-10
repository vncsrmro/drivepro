"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown, Shield, Award, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { CNHCategory, TransmissionType } from "@/types/types";

const cnhCategories: CNHCategory[] = ["A", "B", "C", "D", "E"];

export function HeroSection() {
    const [cidade, setCidade] = React.useState("Americana, SP");
    const [categoria, setCategoria] = React.useState<CNHCategory>("B");
    const [transmissao, setTransmissao] = React.useState<TransmissionType | "">("");

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')`,
                    }}
                />
                {/* Navy Blue Overlay */}
                <div className="absolute inset-0 bg-primary/80" />
                {/* Gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6"
                >
                    <Shield className="w-4 h-4" />
                    Pagamento 100% seguro com garantia de custódia
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                    Encontre o Instrutor Ideal
                    <br />
                    <span className="text-success">Para Sua Habilitação</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
                >
                    Instrutores certificados, aulas personalizadas e pagamento seguro.
                    Realize seu sonho de tirar a CNH com confiança.
                </motion.p>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* City Input */}
                        <div className="relative">
                            <label className="block text-xs font-semibold text-muted-foreground mb-2 text-left">
                                Cidade
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    placeholder="Digite sua cidade"
                                    className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        {/* Category Select */}
                        <div>
                            <label className="block text-xs font-semibold text-muted-foreground mb-2 text-left">
                                Categoria CNH
                            </label>
                            <div className="relative">
                                <select
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value as CNHCategory)}
                                    className="w-full px-4 py-3 bg-secondary rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                >
                                    {cnhCategories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            Categoria {cat}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>

                        {/* Transmission Select */}
                        <div>
                            <label className="block text-xs font-semibold text-muted-foreground mb-2 text-left">
                                Transmissão
                            </label>
                            <div className="relative">
                                <select
                                    value={transmissao}
                                    onChange={(e) => setTransmissao(e.target.value as TransmissionType | "")}
                                    className="w-full px-4 py-3 bg-secondary rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                >
                                    <option value="">Todas</option>
                                    <option value="manual">Manual</option>
                                    <option value="automatico">Automático</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="flex items-end">
                            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                <Search className="w-5 h-5" />
                                Buscar
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 mt-10"
                >
                    <div className="flex items-center gap-2 text-white/80">
                        <Award className="w-5 h-5 text-success" />
                        <span className="text-sm">+500 Instrutores</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                        <Shield className="w-5 h-5 text-success" />
                        <span className="text-sm">Pagamento Seguro</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                        <Clock className="w-5 h-5 text-success" />
                        <span className="text-sm">Agende em 2 min</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
