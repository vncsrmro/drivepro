"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Send, User } from "lucide-react";

export default function MensagensPage() {
    return (
        <div className="p-6 max-w-6xl mx-auto min-h-screen bg-[#0a0a0f] text-white flex gap-6 h-[calc(100vh-100px)]">
            {/* Sidebar List */}
            <div className="w-1/3 bg-white/5 border border-white/10 rounded-2xl flex flex-col overflow-hidden">
                <div className="p-4 border-b border-white/10">
                    <h2 className="text-xl font-bold mb-4">Mensagens</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Buscar conversa..."
                            className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/50"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className={`p-4 hover:bg-white/5 cursor-pointer border-b border-white/5 transition-colors ${i === 0 ? "bg-white/5" : ""}`}>
                            <div className="flex gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold truncate">Carlos Silva</h3>
                                        <span className="text-xs text-gray-500">10:30</span>
                                    </div>
                                    <p className="text-sm text-gray-400 truncate">Olá, podemos confirmar a aula de amanhã?</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl flex flex-col overflow-hidden">
                <div className="p-4 border-b border-white/10 flex items-center gap-4 bg-[#0a0a0f]/50 backdrop-blur-md">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold">Carlos Silva</h3>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-xs text-gray-400">Online agora</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#0a0a0f]/30">
                    <div className="flex justify-end">
                        <div className="bg-blue-600/20 border border-blue-600/30 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-md">
                            <p>Olá Carlos, tudo bem?</p>
                            <span className="text-[10px] text-blue-200/50 block text-right mt-1">10:28</span>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-white/10 border border-white/10 text-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-md">
                            <p>Tudo ótimo! Podemos confirmar a aula de amanhã às 14h?</p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1">10:30</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/10 bg-[#0a0a0f]/50 backdrop-blur-md">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Digite sua mensagem..."
                            className="flex-1 bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50"
                        />
                        <button className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
