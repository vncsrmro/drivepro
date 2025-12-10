"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Car, Crown, MapPin } from "lucide-react";
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
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "relative bg-card rounded-xl border overflow-hidden cursor-pointer group",
                    isElite
                        ? "border-amber-300 shadow-lg shadow-amber-500/10"
                        : "border-border shadow-sm hover:shadow-md"
                )}
            >
                {/* Elite Badge */}
                {isElite && (
                    <div className="absolute top-3 right-3 z-10">
                        <Badge variant="elite" className="flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            Elite
                        </Badge>
                    </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={instructor.foto}
                        alt={instructor.nome}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
                        <MapPin className="w-4 h-4" />
                        {instructor.cidade}, {instructor.estado}
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Name & Rating */}
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {instructor.nome}
                        </h3>
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-medium text-foreground">{instructor.nota.toFixed(1)}</span>
                            <span className="text-muted-foreground text-sm">({instructor.totalAvaliacoes})</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex items-center gap-2 mb-3">
                        {instructor.categoriasHabilitadas.map((cat) => (
                            <span
                                key={cat}
                                className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded"
                            >
                                CNH {cat}
                            </span>
                        ))}
                    </div>

                    {/* Vehicle */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Car className="w-4 h-4" />
                        <span>
                            {instructor.veiculo.marca} {instructor.veiculo.modelo} ({instructor.veiculo.transmissao === "automatico" ? "Automático" : "Manual"})
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm text-muted-foreground">A partir de</span>
                        <span className="text-lg font-bold text-success">
                            R$ {instructor.precoAula.toFixed(2).replace(".", ",")}
                            <span className="text-sm font-normal text-muted-foreground">/aula</span>
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
