"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronDown, Search, SlidersHorizontal, X, Filter } from "lucide-react";
import { InstructorList } from "@/components/hub/InstructorList";
import { getInstructors } from "@/lib/supabase/queries-client";
import { CNHCategory, TransmissionType, Instructor } from "@/types/types";
import { cn } from "@/lib/utils";

const cnhCategories: CNHCategory[] = ["A", "B", "C", "D", "E"];

export default function InstrutoresPage() {
    const [instrutores, setInstrutores] = React.useState<Instructor[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [cidade, setCidade] = React.useState("Americana, SP");
    const [categoria, setCategoria] = React.useState<CNHCategory | undefined>(undefined);
    const [transmissao, setTransmissao] = React.useState<TransmissionType | undefined>(undefined);
    const [showFilters, setShowFilters] = React.useState(false);

    React.useEffect(() => {
        async function loadData() {
            setLoading(true);
            const data = await getInstructors();
            setInstrutores(data);
            setLoading(false);
        }
        loadData();
    }, []);

    const clearFilters = () => {
        setCategoria(undefined);
        setTransmissao(undefined);
    };

    const hasFilters = categoria || transmissao;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
            {/* Header with Search */}
            <div className="sticky top-20 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 pb-6 pt-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* City Search */}
                        <div className="relative w-full md:w-auto md:flex-1 max-w-xl">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                placeholder="Digite sua cidade"
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                            />
                        </div>

                        {/* Desktop Filters */}
                        <div className="hidden md:flex items-center gap-3">
                            <div className="relative">
                                <select
                                    value={categoria || ""}
                                    onChange={(e) => setCategoria(e.target.value as CNHCategory || undefined)}
                                    className="appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer min-w-[140px]"
                                >
                                    <option value="" className="bg-[#0a0a0f]">Categoria</option>
                                    {cnhCategories.map((cat) => (
                                        <option key={cat} value={cat} className="bg-[#0a0a0f]">CNH {cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={transmissao || ""}
                                    onChange={(e) => setTransmissao(e.target.value as TransmissionType || undefined)}
                                    className="appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer min-w-[160px]"
                                >
                                    <option value="" className="bg-[#0a0a0f]">Transmissão</option>
                                    <option value="manual" className="bg-[#0a0a0f]">Manual</option>
                                    <option value="automatico" className="bg-[#0a0a0f]">Automático</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            {hasFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="p-4 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}

                            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                                <Search className="w-5 h-5" />
                                <span className="hidden lg:inline">Buscar</span>
                            </button>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex md:hidden w-full gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex-1 p-4 bg-white/5 border border-white/10 rounded-2xl text-white flex items-center justify-center gap-2"
                            >
                                <SlidersHorizontal className="w-5 h-5" />
                                Filtros
                            </button>
                            <button className="flex-1 p-4 bg-blue-600 rounded-2xl text-white font-bold flex items-center justify-center gap-2">
                                <Search className="w-5 h-5" />
                                Buscar
                            </button>
                        </div>
                    </div>

                    {/* Mobile Filters Content */}
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
                                    className="w-full appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
                                >
                                    <option value="" className="bg-[#0a0a0f]">Todas Categorias</option>
                                    {cnhCategories.map((cat) => (
                                        <option key={cat} value={cat} className="bg-[#0a0a0f]">CNH {cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={transmissao || ""}
                                    onChange={(e) => setTransmissao(e.target.value as TransmissionType || undefined)}
                                    className="w-full appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
                                >
                                    <option value="" className="bg-[#0a0a0f]">Qualquer Transmissão</option>
                                    <option value="manual" className="bg-[#0a0a0f]">Manual</option>
                                    <option value="automatico" className="bg-[#0a0a0f]">Automático</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            {hasFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="w-full p-3 text-red-400 font-medium"
                                >
                                    Limpar filtros
                                </button>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Instrutores Disponíveis
                        </h1>
                        <p className="text-gray-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            {instrutores.length} profissionais encontrados em {cidade}
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col justify-center items-center py-32 opacity-50">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                        <p className="text-sm text-gray-500">Buscando os melhores instrutores...</p>
                    </div>
                ) : (
                    <InstructorList
                        instructors={instrutores}
                        categoryFilter={categoria}
                        transmissionFilter={transmissao}
                    />
                )}
            </div>
        </div>
    );
}
