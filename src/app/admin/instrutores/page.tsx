"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Search,
    Crown,
    MapPin,
    Star,
    Filter,
    ChevronDown
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { instrutores } from "@/data/mockData";
import { Instructor, InstructorStatus, PlanType } from "@/types/types";

const statusLabels: Record<InstructorStatus, string> = {
    ativo: "Ativo",
    pendente: "Pendente",
    rejeitado: "Rejeitado",
    suspenso: "Suspenso",
};

const planLabels: Record<PlanType, string> = {
    gratis: "Grátis",
    prata: "Prata",
    ouro: "Ouro",
};

export default function InstrutoresPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [statusFilter, setStatusFilter] = React.useState<InstructorStatus | "">("");
    const [planFilter, setPlanFilter] = React.useState<PlanType | "">("");

    const filteredInstructors = React.useMemo(() => {
        return instrutores.filter((instructor) => {
            // Search filter
            if (searchQuery && !instructor.nome.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }
            // Status filter
            if (statusFilter && instructor.status !== statusFilter) {
                return false;
            }
            // Plan filter
            if (planFilter && instructor.plano !== planFilter) {
                return false;
            }
            return true;
        });
    }, [searchQuery, statusFilter, planFilter]);

    const columns = [
        {
            key: "nome",
            header: "Instrutor",
            render: (instructor: Instructor) => (
                <div className="flex items-center gap-3">
                    <img
                        src={instructor.foto}
                        alt={instructor.nome}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium text-white flex items-center gap-1">
                            {instructor.nome}
                            {instructor.plano === "ouro" && (
                                <Crown className="w-4 h-4 text-amber-400" />
                            )}
                        </p>
                        <p className="text-sm text-white/50 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {instructor.cidade}
                        </p>
                    </div>
                </div>
            ),
        },
        {
            key: "plano",
            header: "Plano",
            render: (instructor: Instructor) => (
                <Badge
                    variant={
                        instructor.plano === "ouro" ? "elite" :
                            instructor.plano === "prata" ? "secondary" : "outline"
                    }
                >
                    {planLabels[instructor.plano]}
                </Badge>
            ),
        },
        {
            key: "nota",
            header: "Avaliação",
            sortable: true,
            render: (instructor: Instructor) => (
                <div className="flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>{instructor.nota.toFixed(1)}</span>
                    <span className="text-white/50">({instructor.totalAvaliacoes})</span>
                </div>
            ),
        },
        {
            key: "aulasRealizadas",
            header: "Aulas",
            sortable: true,
            render: (instructor: Instructor) => (
                <span className="text-white">{instructor.aulasRealizadas}</span>
            ),
        },
        {
            key: "status",
            header: "Status",
            render: (instructor: Instructor) => (
                <Badge
                    variant={
                        instructor.status === "ativo" ? "active" :
                            instructor.status === "pendente" ? "pending" :
                                instructor.status === "rejeitado" ? "rejected" : "outline"
                    }
                >
                    {statusLabels[instructor.status]}
                </Badge>
            ),
        },
        {
            key: "criadoEm",
            header: "Cadastro",
            sortable: true,
            render: (instructor: Instructor) => (
                <span className="text-white/70">
                    {new Date(instructor.criadoEm).toLocaleDateString("pt-BR")}
                </span>
            ),
        },
    ];

    const stats = [
        { label: "Total", value: instrutores.length },
        { label: "Ativos", value: instrutores.filter(i => i.status === "ativo").length },
        { label: "Pendentes", value: instrutores.filter(i => i.status === "pendente").length },
        { label: "Elite", value: instrutores.filter(i => i.plano === "ouro").length },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Instrutores
                </h1>
                <p className="text-white/60">
                    Gerencie todos os instrutores da plataforma
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-white/60">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 rounded-xl border border-white/10 p-4 mb-6"
            >
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar por nome..."
                            className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as InstructorStatus | "")}
                            className="appearance-none px-4 py-2 pr-10 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                        >
                            <option value="">Todos os Status</option>
                            <option value="ativo">Ativo</option>
                            <option value="pendente">Pendente</option>
                            <option value="rejeitado">Rejeitado</option>
                            <option value="suspenso">Suspenso</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                    </div>

                    {/* Plan Filter */}
                    <div className="relative">
                        <select
                            value={planFilter}
                            onChange={(e) => setPlanFilter(e.target.value as PlanType | "")}
                            className="appearance-none px-4 py-2 pr-10 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                        >
                            <option value="">Todos os Planos</option>
                            <option value="gratis">Grátis</option>
                            <option value="prata">Prata</option>
                            <option value="ouro">Ouro (Elite)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                    </div>
                </div>
            </motion.div>

            {/* Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
            >
                <DataTable
                    data={filteredInstructors}
                    columns={columns}
                    keyExtractor={(instructor) => instructor.id}
                    emptyMessage="Nenhum instrutor encontrado"
                    className="[&_th]:text-white/70 [&_td]:text-white [&_tr:hover]:bg-white/5"
                />
            </motion.div>
        </div>
    );
}
