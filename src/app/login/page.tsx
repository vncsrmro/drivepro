"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn, Mail, Lock, ArrowRight, Car, User, BookOpen } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type UserRole = "aluno" | "instrutor";

export default function LoginPage() {
    const router = useRouter();
    const [role, setRole] = useState<UserRole>("aluno");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                return;
            }

            // In a real app, we would check the user's role here and redirect accordingly.
            // For now, we'll redirect based on the selected tab or just to home/dashboard.
            if (role === "instrutor") {
                router.push("/instrutor");
            } else {
                router.push("/minha-conta");
            }
            router.refresh();
        } catch (err) {
            setError("Ocorreu um erro ao fazer login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000 ${role === 'aluno' ? 'bg-blue-600/20' : 'bg-purple-600/20'}`} />
                <div className={`absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000 ${role === 'aluno' ? 'bg-cyan-600/20' : 'bg-amber-600/20'}`} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                        <div className={`p-3 rounded-xl shadow-lg transition-all duration-500 ${role === 'aluno' ? 'bg-gradient-to-br from-blue-500 to-cyan-600 shadow-blue-500/20 group-hover:shadow-blue-500/40' : 'bg-gradient-to-br from-purple-500 to-amber-600 shadow-purple-500/20 group-hover:shadow-purple-500/40'}`}>
                            <Car className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Direção Pro
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h1>
                    <p className="text-gray-400">Escolha como deseja acessar sua conta</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

                    {/* Role Toggle */}
                    <div className="bg-white/5 p-1 rounded-xl flex mb-8 relative">
                        <motion.div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-r rounded-lg shadow-lg z-0 ${role === 'aluno' ? 'left-1 from-blue-600 to-cyan-600' : 'right-1 from-purple-600 to-amber-600'}`}
                            layoutId="roleHighlight"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                        <button
                            onClick={() => setRole("aluno")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold relative z-10 transition-colors ${role === "aluno" ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            <BookOpen className="w-4 h-4" />
                            Sou Aluno
                        </button>
                        <button
                            onClick={() => setRole("instrutor")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold relative z-10 transition-colors ${role === "instrutor" ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            <User className="w-4 h-4" />
                            Sou Instrutor
                        </button>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center"
                            >
                                {error}
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className={`h-5 w-5 transition-colors ${role === 'aluno' ? 'group-focus-within:text-blue-400' : 'group-focus-within:text-purple-400'} text-gray-500`} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${role === 'aluno' ? 'focus:ring-blue-500/50' : 'focus:ring-purple-500/50'}`}
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Senha</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className={`h-5 w-5 transition-colors ${role === 'aluno' ? 'group-focus-within:text-blue-400' : 'group-focus-within:text-purple-400'} text-gray-500`} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`block w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${role === 'aluno' ? 'focus:ring-blue-500/50' : 'focus:ring-purple-500/50'}`}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className={`h-4 w-4 rounded border-gray-600 bg-white/5 text-blue-500 focus:ring-blue-500/50 ${role === 'aluno' ? 'text-blue-500 focus:ring-blue-500/50' : 'text-purple-500 focus:ring-purple-500/50'}`}
                                />
                                <label htmlFor="remember-me" className="ml-2 text-gray-400">
                                    Lembrar de mim
                                </label>
                            </div>
                            <Link href="/recuperar-senha" className={`hover:underline transition-colors ${role === 'aluno' ? 'text-blue-400' : 'text-purple-400'}`}>
                                Esqueceu a senha?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group ${role === 'aluno' ? 'from-blue-600 to-cyan-600 hover:shadow-blue-500/25' : 'from-purple-600 to-amber-600 hover:shadow-purple-500/25'}`}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5" />
                                    Entrar
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-gray-400 text-sm">
                            Não tem uma conta?{" "}
                            <Link href="/cadastro" className="text-white font-medium hover:underline">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
