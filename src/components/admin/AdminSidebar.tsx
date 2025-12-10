"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    FileCheck,
    Users,
    DollarSign,
    Settings,
    LogOut,
    Menu,
    X,
    Shield,
    PieChart,
    Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/financeiro", icon: Wallet, label: "Financeiro" },
    { href: "/admin/validacoes", icon: FileCheck, label: "Validações" },
    { href: "/admin/instrutores", icon: Users, label: "Instrutores" },
    { href: "/admin/relatorios", icon: PieChart, label: "Relatórios" },
    { href: "/admin/configuracoes", icon: Settings, label: "Configurações" },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    return (
        <>
            {/* Mobile Header Trigger */}
            <div className="lg:hidden fixed top-0 left-0 z-50 p-4">
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 bg-[#1f2937] border border-white/10 rounded-lg text-white shadow-lg"
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-72 bg-[#111827] border-r border-white/10 flex flex-col transition-transform duration-300",
                    "lg:translate-x-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Logo */}
                <div className="h-20 flex items-center px-8 border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="block font-bold text-white text-lg tracking-tight">Admin<span className="text-primary">Pro</span></span>
                            <span className="block text-xs text-white/40 font-medium tracking-wide">PAINEL DE CONTROLE</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-8 px-4 overflow-y-auto custom-scrollbar">
                    <div className="space-y-1.5">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="group block"
                                >
                                    <div className={cn(
                                        "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                                        isActive
                                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}>
                                        <Icon className={cn(
                                            "w-5 h-5 transition-colors",
                                            isActive ? "text-white" : "text-white/60 group-hover:text-white"
                                        )} />
                                        <span className="font-medium">{item.label}</span>

                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                            />
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Support Card */}
                    <div className="mt-8 mx-2 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/20">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                            <Settings className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-white font-semibold mb-1">Precisa de ajuda?</h4>
                        <p className="text-xs text-white/50 mb-3">Contate o suporte técnico para dúvidas.</p>
                        <button className="w-full py-2 bg-primary/20 hover:bg-primary/30 border border-primary/20 rounded-lg text-xs font-semibold text-primary transition-colors">
                            Abrir Chamado
                        </button>
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 bg-[#0f1522]">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sair do Painel</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
