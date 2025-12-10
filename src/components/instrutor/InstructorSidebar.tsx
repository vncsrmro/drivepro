"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Calendar,
    DollarSign,
    Crown,
    User,
    LogOut,
    Car,
    Menu,
    X,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { href: "/instrutor", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/instrutor/agenda", icon: Calendar, label: "Minha Agenda" },
    { href: "/instrutor/financeiro", icon: DollarSign, label: "Financeiro" },
    { href: "/instrutor/planos", icon: Crown, label: "Planos Premium" },
    { href: "/instrutor/perfil", icon: User, label: "Meu Perfil" },
];

export function InstructorSidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-border px-4 py-3 flex items-center justify-between">
                <Link href="/instrutor" className="flex items-center gap-2">
                    <div className="p-2 bg-primary rounded-lg">
                        <Car className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-foreground">
                        Direção <span className="text-success">Pro</span>
                    </span>
                </Link>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-border flex flex-col transition-transform duration-300",
                    "lg:translate-x-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <Link href="/instrutor" className="flex items-center gap-2">
                        <div className="p-2 bg-primary rounded-lg">
                            <Car className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-foreground">
                            Direção <span className="text-success">Pro</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4 px-3 overflow-y-auto">
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
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
                <div className="p-4 border-t border-border">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sair</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
