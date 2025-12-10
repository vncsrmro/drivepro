"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    Clock,
    MapPin,
    User,
    CheckCircle2,
    XCircle,
    MessageCircle,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getProximasAulas, aulas, getInstrutorById } from "@/data/mockData";
import { Lesson } from "@/types/types";

const INSTRUCTOR_ID = "1";

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function AgendaPage() {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    const instructor = getInstrutorById(INSTRUCTOR_ID)!;
    const todasAulas = aulas.filter(a => a.instrutorId === INSTRUCTOR_ID);

    // Get calendar days for the current month
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days: (Date | null)[] = [];

        // Add empty days for padding
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null);
        }

        // Add actual days
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const days = getDaysInMonth(currentDate);

    const getAulasForDate = (date: Date): Lesson[] => {
        const dateStr = date.toISOString().split("T")[0];
        return todasAulas.filter(a => a.data === dateStr);
    };

    const navigateMonth = (direction: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    };

    const selectedDateAulas = selectedDate ? getAulasForDate(selectedDate) : [];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    Minha Agenda
                </h1>
                <p className="text-muted-foreground">
                    Gerencie suas aulas e horários disponíveis
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-2 bg-card rounded-xl border border-border p-6"
                >
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={() => navigateMonth(-1)}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                        </button>
                        <h2 className="text-lg font-semibold text-foreground">
                            {meses[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h2>
                        <button
                            onClick={() => navigateMonth(1)}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                        </button>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {diasSemana.map(dia => (
                            <div key={dia} className="text-center text-sm font-medium text-muted-foreground py-2">
                                {dia}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {days.map((day, index) => {
                            if (!day) {
                                return <div key={`empty-${index}`} className="aspect-square" />;
                            }

                            const aulasNoDia = getAulasForDate(day);
                            const isToday = day.toDateString() === new Date().toDateString();
                            const isSelected = selectedDate?.toDateString() === day.toDateString();

                            return (
                                <button
                                    key={day.toISOString()}
                                    onClick={() => setSelectedDate(day)}
                                    className={`aspect-square rounded-lg flex flex-col items-center justify-center transition-all relative ${isSelected
                                            ? "bg-primary text-white"
                                            : isToday
                                                ? "bg-success/20 text-success font-bold"
                                                : "hover:bg-muted text-foreground"
                                        }`}
                                >
                                    <span className="text-sm">{day.getDate()}</span>
                                    {aulasNoDia.length > 0 && (
                                        <div className={`absolute bottom-1 flex gap-0.5`}>
                                            {aulasNoDia.slice(0, 3).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-primary"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Selected Day Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        {selectedDate
                            ? selectedDate.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })
                            : "Selecione uma data"}
                    </h3>

                    {selectedDate ? (
                        selectedDateAulas.length > 0 ? (
                            <div className="space-y-3">
                                {selectedDateAulas.map(aula => (
                                    <div
                                        key={aula.id}
                                        className="p-4 bg-muted/50 rounded-lg"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold text-foreground flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-primary" />
                                                {aula.horario}
                                            </span>
                                            <Badge
                                                variant={
                                                    aula.status === "confirmada" ? "active" :
                                                        aula.status === "concluida" ? "success" :
                                                            aula.status === "cancelada" ? "rejected" : "pending"
                                                }
                                            >
                                                {aula.status === "confirmada" && "Confirmada"}
                                                {aula.status === "agendada" && "Aguardando"}
                                                {aula.status === "concluida" && "Concluída"}
                                                {aula.status === "cancelada" && "Cancelada"}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                                            <MapPin className="w-3 h-3" />
                                            {aula.endereco || "Endereço a definir"}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-success font-semibold">
                                                R$ {aula.valor.toFixed(2).replace(".", ",")}
                                            </span>
                                            <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                                                <MessageCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-muted-foreground">
                                <Calendar className="w-10 h-10 mx-auto mb-2 opacity-50" />
                                <p>Nenhuma aula neste dia</p>
                            </div>
                        )
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <Calendar className="w-10 h-10 mx-auto mb-2 opacity-50" />
                            <p>Clique em uma data para ver os detalhes</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Upcoming Lessons Summary */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 bg-card rounded-xl border border-border p-6"
            >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                    Próximas Aulas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getProximasAulas(INSTRUCTOR_ID).slice(0, 6).map(aula => (
                        <div
                            key={aula.id}
                            className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
                                <span className="text-xs font-medium">
                                    {new Date(aula.data).toLocaleDateString("pt-BR", { weekday: "short" })}
                                </span>
                                <span className="text-lg font-bold">
                                    {new Date(aula.data).getDate()}
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-foreground">{aula.horario}</p>
                                <p className="text-sm text-muted-foreground">{aula.endereco}</p>
                            </div>
                            <Badge variant={aula.status === "confirmada" ? "active" : "pending"}>
                                {aula.status === "confirmada" ? "OK" : "..."}
                            </Badge>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
