"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Car, Menu, X, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Início" },
    { href: "/instrutores", label: "Buscar Instrutores" },
    { href: "/#como-funciona", label: "Como Funciona" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    // Check if on homepage hero section (only there we want overlay behavior)
    const isHomepage = pathname === "/";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ rotate: 10 }}
                            className="p-2 bg-white/20 rounded-lg"
                        >
                            <Car className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="text-xl font-bold text-white">
                            Direção <span className="text-success">Pro</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-success",
                                    pathname === link.href
                                        ? "text-white"
                                        : "text-white/80"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/instrutor"
                            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                            Sou Instrutor
                        </Link>
                        <Link
                            href="#login"
                            className="flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg font-medium text-sm hover:bg-success/90 transition-colors"
                        >
                            <LogIn className="w-4 h-4" />
                            Entrar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-primary border-t border-white/10"
            >
                <div className="px-4 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-white font-medium hover:text-success transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <hr className="border-white/20" />
                    <Link
                        href="/instrutor"
                        className="block text-white font-medium hover:text-success transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sou Instrutor
                    </Link>
                    <Link
                        href="#login"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-success text-white rounded-lg font-medium hover:bg-success/90 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <LogIn className="w-4 h-4" />
                        Entrar
                    </Link>
                </div>
            </motion.div>
        </header>
    );
}
