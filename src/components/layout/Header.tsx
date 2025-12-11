"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Menu, X, LogIn, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Início" },
    { href: "/instrutores", label: "Buscar Instrutores" },
    { href: "/como-funciona", label: "Como Funciona" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Transparent only on home and at top
    const isTransparent = pathname === "/" && !scrolled;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isTransparent
                    ? "bg-transparent border-transparent"
                    : "bg-[#0a0a0f]/80 backdrop-blur-md border-white/10"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full" />
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="relative p-2.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
                            >
                                <Car className="w-5 h-5 text-white" />
                            </motion.div>
                        </div>
                        <span className="text-xl font-bold text-white">
                            Direção <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pro</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-all hover:text-blue-400 relative group",
                                    pathname === link.href ? "text-white" : "text-white/60"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/para-instrutores"
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Sou Instrutor
                        </Link>
                        <Link
                            href="/login"
                            className="relative group overflow-hidden px-6 py-2.5 rounded-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all group-hover:scale-105" />
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center gap-2 text-white font-medium text-sm">
                                <LogIn className="w-4 h-4" />
                                Entrar
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "block text-lg font-medium p-2 rounded-lg transition-colors",
                                        pathname === link.href
                                            ? "text-white bg-white/5"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/10 my-4" />
                            <Link
                                href="/para-instrutores"
                                className="block text-lg font-medium text-white/60 hover:text-white p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sou Instrutor
                            </Link>
                            <Link
                                href="/login"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <LogIn className="w-4 h-4" />
                                Entrar
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
