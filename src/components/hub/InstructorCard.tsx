"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Car, Crown, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Instructor } from "@/types/types";

interface InstructorCardProps {
    instructor: Instructor;
    featured?: boolean;
}

export function InstructorCard({ instructor, featured }: InstructorCardProps) {
    const isElite = instructor.plano === "ouro";

    return (
        <Link href={`/instrutores/${instructor.id}`}>
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                    "relative bg-white/5 backdrop-blur-md rounded-3xl border overflow-hidden cursor-pointer group",
                    isElite
                        ? "border-amber-500/30 shadow-[0_0_30px_-5px_rgba(245,158,11,0.1)]"
                        : "border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors"
                )}
            >
                {/* Animated gradient border for Elite */}
                {isElite && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Elite Badge */}
                {isElite && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="absolute top-4 right-4 z-20"
                    >
                        <div className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                            <Crown className="w-3.5 h-3.5" />
                            ELITE
                        </div>
                    </motion.div>
                )}

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={instructor.foto}
                        alt={instructor.nome}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Premium gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent opacity-90" />

                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-sm backdrop-blur-md bg-black/40 border border-white/10 px-3 py-1.5 rounded-full">
                        <MapPin className="w-3.5 h-3.5" />
                        {instructor.cidade}, {instructor.estado}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/20">
                            R$ {instructor.precoAula.toFixed(0)}
                            <span className="text-[10px] font-normal opacity-80 ml-1">/aula</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                    {/* Name & Rating */}
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="font-bold text-white text-xl group-hover:text-blue-400 transition-colors">
                            {instructor.nome}
                        </h3>
                        <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-bold text-amber-500">{instructor.nota.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {instructor.categoriasHabilitadas.map((cat) => (
                            <span
                                key={cat}
                                className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold rounded-lg group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors"
                            >
                                CNH {cat}
                            </span>
                        ))}
                    </div>

                    {/* Vehicle */}
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                            <Car className="w-4 h-4" />
                        </div>
                        <span>
                            {instructor.veiculo.marca} {instructor.veiculo.modelo}
                            <span className="text-gray-500 ml-1.5 border-l border-white/10 pl-1.5">
                                {instructor.veiculo.transmissao === "automatico" ? "Automático" : "Manual"}
                            </span>
                        </span>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all relative overflow-hidden",
                            isElite
                                ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20"
                                : "bg-white text-black hover:bg-gray-100"
                        )}
                    >
                        <span className="relative z-10">Ver Perfil Completo</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </motion.div>
        </Link>
    );
}
