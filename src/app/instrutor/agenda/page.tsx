"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Check, Moon, Sun, Sunrise } from "lucide-react";

export default function AvailabilityPage() {
    const days = [
        "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
    ];

    const periods = [
        { id: "morning", label: "Manhã", icon: Sunrise, time: "07:00 - 12:00" },
        { id: "afternoon", label: "Tarde", icon: Sun, time: "13:00 - 18:00" },
        { id: "night", label: "Noite", icon: Moon, time: "18:00 - 22:00" },
    ];

    return (
        <div className="p-6 max-w-4xl mx-auto min-h-screen bg-[#0a0a0f] text-white">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-400" />
                Gerenciar Disponibilidade
            </h1>

            <p className="text-gray-400 mb-8 max-w-2xl text-lg">
                Defina seus horários de atendimento. Você pode configurar turnos específicos como serviço extra (ex: aulas noturnas).
            </p>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid gap-6">
                    {days.map((day, index) => (
                        <div key={day} className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                            <div className="w-32 font-bold text-lg text-white/90">{day}</div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {periods.map((period) => (
                                    <label key={period.id} className="relative group cursor-pointer">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="p-3 rounded-xl bg-[#0a0a0f] border border-white/10 peer-checked:border-blue-500 peer-checked:bg-blue-500/10 transition-all flex items-center gap-3 group-hover:scale-[1.02]">
                                            <div className="p-2 bg-white/5 rounded-lg peer-checked:bg-blue-500/20 text-gray-400 peer-checked:text-blue-400 transition-colors">
                                                <period.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-gray-300 peer-checked:text-white transition-colors">{period.label}</p>
                                                <p className="text-xs text-gray-500">{period.time}</p>
                                            </div>
                                            <div className="ml-auto w-5 h-5 rounded-full border-2 border-white/10 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center transition-all">
                                                <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-end pt-6 border-t border-white/10">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Salvar Disponibilidade
                    </button>
                </div>
            </div>
        </div>
    );
}
