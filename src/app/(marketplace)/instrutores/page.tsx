"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { InstructorList } from "@/components/hub/InstructorList";
import { getInstrutoresAtivos } from "@/data/mockData";
import { CNHCategory, TransmissionType } from "@/types/types";
import { cn } from "@/lib/utils";

const cnhCategories: CNHCategory[] = ["A", "B", "C", "D", "E"];

export default function InstrutoresPage() {
    const instrutores = getInstrutoresAtivos();
    const [cidade, setCidade] = React.useState("Americana, SP");
    const [categoria, setCategoria] = React.useState<CNHCategory | undefined>(undefined);
    const [transmissao, setTransmissao] = React.useState<TransmissionType | undefined>(undefined);
    const [showFilters, setShowFilters] = React.useState(false);

    const clearFilters = () => {
        setCategoria(undefined);
        setTransmissao(undefined);
    };

    const hasFilters = categoria || transmissao;

    return (
        <div className="min-h-screen bg-secondary pt-20">
            {/* Search Header */}
            <div className="bg-white border-b border-border sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        {/* City Search */}
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                placeholder="Digite sua cidade"
                                className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Desktop Filters */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Category Filter */}
                            <div className="relative">
                                <select
                                    value={categoria || ""}
                                    onChange={(e) => setCategoria(e.target.value as CNHCategory || undefined)}
                                    className="appearance-none px-4 py-3 pr-10 bg-secondary rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                >
                                    <option value="">Categoria CNH</option>
                                    {cnhCategories.map((cat) => (
                                        <option key={cat} value={cat}>CNH {cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                            </div>

                            {/* Transmission Filter */}
                            <div className="relative">
                                <select
                                    value={transmissao || ""}
                                    onChange={(e) => setTransmissao(e.target.value as TransmissionType || undefined)}
                                    className="appearance-none px-4 py-3 pr-10 bg-secondary rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                >
                                    <option value="">Transmissão</option>
                                    <option value="manual">Manual</option>
                                    <option value="automatico">Automático</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                            </div>

                            {hasFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden p-3 bg-secondary rounded-lg text-foreground"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>

                        {/* Search Button */}
                        <button className="px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors flex items-center gap-2">
                            <Search className="w-5 h-5" />
                            <span className="hidden sm:inline">Buscar</span>
                        </button>
                    </div>

                    {/* Mobile Filters */}
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden pt-4 space-y-3"
                        >
                            <div className="relative">
                                <select
                                    value={categoria || ""}
                                    onChange={(e) => setCategoria(e.target.value as CNHCategory || undefined)}
                                    className="w-full appearance-none px-4 py-3 pr-10 bg-secondary rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                >
                                    <option value="">Categoria CNH</option>
                                    {cnhCategories.map((cat) => (
                                        <option key={cat} value={cat}>CNH {cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={transmissao || ""}
                                    onChange={(e) => setTransmissao(e.target.value as TransmissionType || undefined)}
                                    className="w-full appearance-none px-4 py-3 pr-10 bg-secondary rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                >
                                    <option value="">Transmissão</option>
                                    <option value="manual">Manual</option>
                                    <option value="automatico">Automático</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                            </div>

                            {hasFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-primary font-medium"
                                >
                                    Limpar filtros
                                </button>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Instrutores em {cidade}
                        </h1>
                        <p className="text-muted-foreground">
                            {instrutores.length} instrutores disponíveis
                        </p>
                    </div>
                </div>

                <InstructorList
                    instructors={instrutores}
                    categoryFilter={categoria}
                    transmissionFilter={transmissao}
                />
            </div>
        </div>
    );
}
