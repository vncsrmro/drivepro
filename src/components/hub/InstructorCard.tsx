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
                    "relative bg-card rounded-2xl border overflow-hidden cursor-pointer group",
                    isElite
                        ? "border-amber-300/50 shadow-xl shadow-amber-500/20"
                        : "border-border shadow-lg hover:shadow-xl"
                )}
            >
                {/* Animated gradient border for Elite */}
                {isElite && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 opacity-20 animate-pulse" />
                )}

                {/* Elite Badge */}
                {isElite && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="absolute top-3 right-3 z-10"
                    >
                        <Badge variant="elite" className="flex items-center gap-1 shadow-lg">
                            <Crown className="w-3 h-3" />
                            Elite
                        </Badge>
                    </motion.div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={instructor.foto}
                        alt={instructor.nome}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Premium gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm backdrop-blur-sm bg-black/30 px-2 py-1 rounded-full">
                        <MapPin className="w-3 h-3" />
                        {instructor.cidade}, {instructor.estado}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3">
                        <div className="bg-gradient-to-r from-success to-emerald-400 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                            R$ {instructor.precoAula.toFixed(0)}/aula
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 relative">
                    {/* Name & Rating */}
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                            {instructor.nome}
                        </h3>
                        <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-full">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-bold text-foreground">{instructor.nota.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex items-center gap-2 mb-3">
                        {instructor.categoriasHabilitadas.map((cat) => (
                            <span
                                key={cat}
                                className="px-2 py-1 bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-bold rounded-lg"
                            >
                                CNH {cat}
                            </span>
                        ))}
                    </div>

                    {/* Vehicle */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Car className="w-4 h-4" />
                        <span>
                            {instructor.veiculo.marca} {instructor.veiculo.modelo}
                            <span className="text-primary font-medium ml-1">
                                ({instructor.veiculo.transmissao === "automatico" ? "Automático" : "Manual"})
                            </span>
                        </span>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all",
                            isElite
                                ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-amber-500/30"
                                : "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/30"
                        )}
                    >
                        Ver Perfil
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </motion.div>
        </Link>
    );
}
