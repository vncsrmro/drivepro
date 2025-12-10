"use client";

import React from "react";
import { Bell, Search, User } from "lucide-react";
import { motion } from "framer-motion";

export function AdminHeader() {
    return (
        <header className="h-16 border-b border-white/10 bg-[#111827]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-white">Administrador</p>
                        <p className="text-xs text-white/50">Direção Pro</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center border border-white/10 shadow-lg shadow-primary/20">
                        <User className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>
        </header>
    );
}
