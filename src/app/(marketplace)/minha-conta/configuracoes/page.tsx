"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Bell, Lock, LogOut } from "lucide-react";

export default function ConfiguracoesPage() {
    return (
        <div className="p-6 max-w-3xl mx-auto min-h-screen bg-[#0a0a0f] text-white">
            <h1 className="text-3xl font-bold mb-8">Configurações da Conta</h1>

            <div className="space-y-6">
                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <User className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="text-xl font-bold">Perfil</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Nome Completo</label>
                            <input type="text" defaultValue="João Pedro" className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Email</label>
                            <input type="email" defaultValue="joao.pedro@email.com" className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Telefone</label>
                            <input type="tel" defaultValue="(11) 99999-9999" className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">CPF</label>
                            <input type="text" defaultValue="***.***.***-**" disabled className="w-full bg-[#0a0a0f]/50 border border-white/5 rounded-xl px-4 py-3 text-gray-500 cursor-not-allowed" />
                        </div>
                    </div>
                </section>

                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Bell className="w-5 h-5 text-purple-400" />
                        </div>
                        <h2 className="text-xl font-bold">Notificações</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Lembretes de aula</p>
                                <p className="text-sm text-gray-400">Receber notificações 1h antes</p>
                            </div>
                            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Novas mensagens</p>
                                <p className="text-sm text-gray-400">Notificar quando receber mensagem</p>
                            </div>
                            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                            <Lock className="w-5 h-5 text-red-400" />
                        </div>
                        <h2 className="text-xl font-bold">Segurança</h2>
                    </div>
                    <button className="text-red-400 hover:text-red-300 font-medium transition-colors">Alterar Senha</button>
                </section>

                <div className="flex justify-end gap-4 pt-4">
                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors font-semibold">Cancelar</button>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors font-semibold shadow-lg shadow-blue-500/20">Salvar Alterações</button>
                </div>
            </div>
        </div>
    );
}
