"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Shield, CreditCard, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { DaySchedule, TimeSlot, Instructor } from "@/types/types";
import { cn } from "@/lib/utils";

interface BookingFlowProps {
    instructor: Instructor;
    schedule: DaySchedule[];
    onBook: (date: string, time: string) => void;
    onCancel: () => void;
}

type Step = "schedule" | "confirm" | "payment" | "success";

export function BookingFlow({ instructor, schedule, onBook, onCancel }: BookingFlowProps) {
    const [step, setStep] = React.useState<Step>("schedule");
    const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
    const [currentWeekOffset, setCurrentWeekOffset] = React.useState(0);

    const selectedDaySchedule = schedule.find((d) => d.data === selectedDate);

    const handleSelectTime = (slot: TimeSlot) => {
        if (slot.disponivel) {
            setSelectedTime(slot.horario);
        }
    };

    const handleContinue = () => {
        if (step === "schedule" && selectedDate && selectedTime) {
            setStep("confirm");
        } else if (step === "confirm") {
            setStep("payment");
        } else if (step === "payment") {
            onBook(selectedDate!, selectedTime!);
            setStep("success");
        }
    };

    const handleBack = () => {
        if (step === "confirm") setStep("schedule");
        if (step === "payment") setStep("confirm");
    };

    return (
        <div className="max-w-lg mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
                {["schedule", "confirm", "payment", "success"].map((s, i) => (
                    <React.Fragment key={s}>
                        <div
                            className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                                step === s || ["schedule", "confirm", "payment", "success"].indexOf(step) > i
                                    ? "bg-success text-white"
                                    : "bg-muted text-muted-foreground"
                            )}
                        >
                            {["schedule", "confirm", "payment", "success"].indexOf(step) > i ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                i + 1
                            )}
                        </div>
                        {i < 3 && (
                            <div
                                className={cn(
                                    "flex-1 h-1 mx-2 rounded-full transition-all",
                                    ["schedule", "confirm", "payment", "success"].indexOf(step) > i
                                        ? "bg-success"
                                        : "bg-muted"
                                )}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {/* Step 1: Schedule */}
                {step === "schedule" && (
                    <motion.div
                        key="schedule"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h2 className="text-xl font-bold text-foreground mb-4">
                            <Calendar className="inline w-5 h-5 mr-2 text-primary" />
                            Escolha a Data e Horário
                        </h2>

                        {/* Date Selection */}
                        <div className="grid grid-cols-7 gap-2 mb-6">
                            {schedule.map((day) => (
                                <button
                                    key={day.data}
                                    onClick={() => {
                                        setSelectedDate(day.data);
                                        setSelectedTime(null);
                                    }}
                                    className={cn(
                                        "p-2 rounded-lg text-center transition-all",
                                        selectedDate === day.data
                                            ? "bg-primary text-white"
                                            : "bg-muted hover:bg-muted/80 text-foreground"
                                    )}
                                >
                                    <p className="text-xs font-medium">{day.diaSemana.slice(0, 3)}</p>
                                    <p className="text-lg font-bold">{new Date(day.data).getDate()}</p>
                                </button>
                            ))}
                        </div>

                        {/* Time Slots */}
                        {selectedDaySchedule && (
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                                    Horários disponíveis
                                </h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {selectedDaySchedule.slots.map((slot) => (
                                        <button
                                            key={slot.horario}
                                            onClick={() => handleSelectTime(slot)}
                                            disabled={!slot.disponivel}
                                            className={cn(
                                                "py-2 rounded-lg text-sm font-medium transition-all",
                                                !slot.disponivel
                                                    ? "bg-muted/50 text-muted-foreground cursor-not-allowed line-through"
                                                    : selectedTime === slot.horario
                                                        ? "bg-success text-white"
                                                        : "bg-muted hover:bg-success/10 text-foreground"
                                            )}
                                        >
                                            {slot.horario}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            onClick={handleContinue}
                            disabled={!selectedDate || !selectedTime}
                            className="w-full mt-6 py-3 bg-success text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-success/90 transition-colors"
                        >
                            Continuar
                        </button>
                    </motion.div>
                )}

                {/* Step 2: Confirm */}
                {step === "confirm" && (
                    <motion.div
                        key="confirm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h2 className="text-xl font-bold text-foreground mb-4">
                            Confirme sua Reserva
                        </h2>

                        <div className="bg-muted/50 rounded-lg p-4 space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                                <img
                                    src={instructor.foto}
                                    alt={instructor.nome}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-foreground">{instructor.nome}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {instructor.veiculo.marca} {instructor.veiculo.modelo}
                                    </p>
                                </div>
                            </div>
                            <hr className="border-border" />
                            <div className="flex items-center gap-2 text-foreground">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>
                                    {selectedDate &&
                                        new Date(selectedDate).toLocaleDateString("pt-BR", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long",
                                        })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>{selectedTime} - Duração: 1 hora</span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{instructor.cidade}, {instructor.estado}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg mb-6">
                            <span className="text-foreground font-medium">Total</span>
                            <span className="text-2xl font-bold text-success">
                                R$ {instructor.precoAula.toFixed(2).replace(".", ",")}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleBack}
                                className="flex-1 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                            >
                                Voltar
                            </button>
                            <button
                                onClick={handleContinue}
                                className="flex-1 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                            >
                                Pagar
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Step 3: Payment */}
                {step === "payment" && (
                    <motion.div
                        key="payment"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h2 className="text-xl font-bold text-foreground mb-4">
                            <CreditCard className="inline w-5 h-5 mr-2 text-primary" />
                            Pagamento
                        </h2>

                        {/* Escrow Message */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <Shield className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-emerald-800 mb-1">
                                        Pagamento Seguro (Escrow)
                                    </p>
                                    <p className="text-sm text-emerald-700">
                                        Seu dinheiro está seguro e só será liberado ao instrutor após a
                                        conclusão da aula.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mock Payment Form */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Número do Cartão
                                </label>
                                <input
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">
                                        Validade
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM/AA"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleBack}
                                className="flex-1 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                            >
                                Voltar
                            </button>
                            <button
                                onClick={handleContinue}
                                className="flex-1 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                            >
                                Confirmar R$ {instructor.precoAula.toFixed(2).replace(".", ",")}
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Step 4: Success */}
                {step === "success" && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-success" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            Aula Agendada!
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Sua aula com {instructor.nome} foi confirmada. Você receberá um email
                            com os detalhes.
                        </p>
                        <button
                            onClick={onCancel}
                            className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Voltar ao Início
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
