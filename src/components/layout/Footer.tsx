"use client";

import React from "react";
import Link from "next/link";
import { Car, Heart } from "lucide-react";

const footerLinks = {
    alunos: [
        { label: "Buscar Instrutores", href: "/instrutores" },
        { label: "Como Funciona", href: "/como-funciona" },
        { label: "Preços", href: "/precos" },
        { label: "Perguntas Frequentes", href: "/faq" },
    ],
    instrutores: [
        { label: "Cadastre-se", href: "/para-instrutores/cadastro" },
        { label: "Planos Premium", href: "/para-instrutores/planos" },
        { label: "Vantagens", href: "/para-instrutores" },
        { label: "Suporte", href: "/suporte" },
    ],
    empresa: [
        { label: "Sobre Nós", href: "/sobre" },
        { label: "Termos de Uso", href: "/termos" },
        { label: "Privacidade", href: "/privacidade" },
        { label: "Contato", href: "/suporte" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-white/20 rounded-lg">
                                <Car className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                Direção <span className="text-success">Pro</span>
                            </span>
                        </Link>
                        <p className="text-white/70 text-sm mb-4">
                            O Hub de aulas de direção que conecta alunos a instrutores
                            certificados com segurança e confiança.
                        </p>
                    </div>

                    {/* Para Alunos */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Para Alunos</h4>
                        <ul className="space-y-2">
                            {footerLinks.alunos.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Para Instrutores */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Para Instrutores</h4>
                        <ul className="space-y-2">
                            {footerLinks.instrutores.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/60 text-sm">
                            © 2024 Direção Pro. Todos os direitos reservados.
                        </p>
                        <p className="text-white/60 text-sm flex items-center gap-1">
                            Desenvolvido com{" "}
                            <Heart className="w-4 h-4 text-red-400 fill-red-400" />{" "}
                            pela{" "}
                            <a
                                href="https://inovasys.digital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-success hover:underline"
                            >
                                InovaSys
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
