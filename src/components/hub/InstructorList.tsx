"use client";

import React from "react";
import { Instructor, CNHCategory, TransmissionType } from "@/types/types";
import { InstructorCard } from "./InstructorCard";

interface InstructorListProps {
    instructors: Instructor[];
    categoryFilter?: CNHCategory;
    transmissionFilter?: TransmissionType;
}

export function InstructorList({
    instructors,
    categoryFilter,
    transmissionFilter,
}: InstructorListProps) {
    const filteredInstructors = React.useMemo(() => {
        return instructors.filter((instructor) => {
            // Only show active instructors
            if (instructor.status !== "ativo") return false;

            // Filter by category
            if (categoryFilter && !instructor.categoriasHabilitadas.includes(categoryFilter)) {
                return false;
            }

            // Filter by transmission
            if (transmissionFilter && instructor.veiculo.transmissao !== transmissionFilter) {
                return false;
            }

            return true;
        });
    }, [instructors, categoryFilter, transmissionFilter]);

    // Sort: Elite (ouro) first, then by rating
    const sortedInstructors = React.useMemo(() => {
        return [...filteredInstructors].sort((a, b) => {
            // Elite first
            if (a.plano === "ouro" && b.plano !== "ouro") return -1;
            if (b.plano === "ouro" && a.plano !== "ouro") return 1;
            // Then by rating
            return b.nota - a.nota;
        });
    }, [filteredInstructors]);

    if (sortedInstructors.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                    Nenhum instrutor encontrado com os filtros selecionados.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedInstructors.map((instructor) => (
                <InstructorCard
                    key={instructor.id}
                    instructor={instructor}
                    featured={instructor.plano === "ouro"}
                />
            ))}
        </div>
    );
}
