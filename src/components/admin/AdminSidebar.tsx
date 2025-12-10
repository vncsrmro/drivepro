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
    Car,
    Menu,
    X,
    ChevronRight,
    Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Visão Geral" },
    { href: "/admin/validacoes", icon: FileCheck, label: "Validações" },
    { href: "/admin/instrutores", icon: Users, label: "Instrutores" },
    { href: "/admin/financeiro", icon: DollarSign, label: "Financeiro" },
    { href: "/admin/configuracoes", icon: Settings, label: "Configurações" },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1f2937] border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <Link href="/admin" className="flex items-center gap-2">
                    <div className="p-2 bg-primary rounded-lg">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-white">
                        Admin <span className="text-success">Panel</span>
                    </span>
                </Link>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/70 z-40"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-64 bg-[#1f2937] border-r border-white/10 flex flex-col transition-transform duration-300",
                    "lg:translate-x-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="p-2 bg-primary rounded-lg">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-white">
                            Admin <span className="text-success">Panel</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4 px-3 overflow-y-auto">
                    <p className="px-3 mb-2 text-xs font-semibold text-white/50 uppercase tracking-wider">
                        Menu Principal
                    </p>
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                                            isActive
                                                ? "bg-primary text-white"
                                                : "text-white/70 hover:bg-white/10 hover:text-white"
                                        )}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{item.label}</span>
                                        {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-white/10">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sair</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
