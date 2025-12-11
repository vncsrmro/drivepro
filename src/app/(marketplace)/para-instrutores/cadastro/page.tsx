"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    User,
    Mail,
    Phone,
    Car,
    FileText,
    Upload,
    Check,
    ArrowRight,
    ArrowLeft,
    Shield
} from "lucide-react";

export default function CadastroInstrutorPage() {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
        cidade: "",
        estado: "SP",
        bio: "",
        categoriaCNH: "B",
        veiculo: {
            marca: "",
            modelo: "",
            ano: "",
            transmissao: "manual"
        }
    });

    const handleSubmit = () => {
        alert("Cadastro enviado! Você receberá um email para confirmar seus documentos.");
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-200">Cadastro de Parceiro</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Torne-se um Instrutor <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">Elite</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Comece a transformar a vida de novos motoristas hoje mesmo.
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${s === step ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-500/50" :
                                s < step ? "bg-emerald-500 text-white" :
                                    "bg-white/10 text-gray-500 border border-white/10"
                                }`}>
                                {s < step ? <Check className="w-5 h-5" /> : s}
                            </div>
                            {s < 3 && <div className={`w-12 md:w-20 h-1 rounded-full ${s < step ? "bg-emerald-500" : "bg-white/10"}`} />}
                        </div>
                    ))}
                </div>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
                >
                    {step === 1 && (
                        <div className="space-y-5">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <User className="w-6 h-6 text-purple-400" />
                                </div>
                                Dados Pessoais
                            </h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                                    <input
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                                        placeholder="(11) 99999-9999"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">CPF</label>
                                    <input
                                        type="text"
                                        value={formData.cpf}
                                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                        placeholder="000.000.000-00"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Categoria CNH</label>
                                    <select
                                        value={formData.categoriaCNH}
                                        onChange={(e) => setFormData({ ...formData, categoriaCNH: e.target.value })}
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                                    >
                                        <option value="A" className="bg-[#0a0a0f]">Categoria A</option>
                                        <option value="B" className="bg-[#0a0a0f]">Categoria B</option>
                                        <option value="C" className="bg-[#0a0a0f]">Categoria C</option>
                                        <option value="D" className="bg-[#0a0a0f]">Categoria D</option>
                                        <option value="E" className="bg-[#0a0a0f]">Categoria E</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Cidade</label>
                                    <input
                                        type="text"
                                        value={formData.cidade}
                                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                                        placeholder="Sua cidade"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Estado</label>
                                    <select
                                        value={formData.estado}
                                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                                    >
                                        <option value="SP" className="bg-[#0a0a0f]">São Paulo</option>
                                        <option value="RJ" className="bg-[#0a0a0f]">Rio de Janeiro</option>
                                        <option value="MG" className="bg-[#0a0a0f]">Minas Gerais</option>
                                        <option value="PR" className="bg-[#0a0a0f]">Paraná</option>
                                        <option value="SC" className="bg-[#0a0a0f]">Santa Catarina</option>
                                        <option value="RS" className="bg-[#0a0a0f]">Rio Grande do Sul</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-5">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Car className="w-6 h-6 text-blue-400" />
                                </div>
                                Dados do Veículo
                            </h2>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Marca</label>
                                    <input
                                        type="text"
                                        value={formData.veiculo.marca}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, marca: e.target.value } })}
                                        placeholder="Ex: Volkswagen"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Modelo</label>
                                    <input
                                        type="text"
                                        value={formData.veiculo.modelo}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, modelo: e.target.value } })}
                                        placeholder="Ex: UP"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Ano</label>
                                    <input
                                        type="text"
                                        value={formData.veiculo.ano}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, ano: e.target.value } })}
                                        placeholder="Ex: 2022"
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Transmissão</label>
                                    <select
                                        value={formData.veiculo.transmissao}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, transmissao: e.target.value } })}
                                        className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                                    >
                                        <option value="manual" className="bg-[#0a0a0f]">Manual</option>
                                        <option value="automatico" className="bg-[#0a0a0f]">Automático</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Biografia</label>
                                <textarea
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    rows={3}
                                    placeholder="Conte um pouco sobre sua experiência como instrutor..."
                                    className="w-full px-4 py-3.5 bg-[#0a0a0f]/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 resize-none transition-all"
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-5">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="p-2 bg-amber-500/20 rounded-lg">
                                    <FileText className="w-6 h-6 text-amber-400" />
                                </div>
                                Documentos
                            </h2>

                            <p className="text-sm text-gray-400 mb-4">
                                Após o cadastro, você precisará enviar os seguintes documentos para validação:
                            </p>

                            {[
                                { label: "CNH de Instrutor", desc: "Habilitação válida para instrutor" },
                                { label: "Certificado de Instrutor", desc: "Emitido pelo DETRAN" },
                                { label: "Comprovante de Residência", desc: "Atualizado (últimos 3 meses)" }
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-[#0a0a0f]/50 border border-white/5 rounded-xl">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                                        <Upload className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-white">{doc.label}</p>
                                        <p className="text-sm text-gray-400">{doc.desc}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                                <p className="text-sm text-amber-200">
                                    <strong className="text-amber-400">Importante:</strong> Os documentos serão validados em até 48h úteis após o envio.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                        {step > 1 ? (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Voltar
                            </button>
                        ) : (
                            <div />
                        )}

                        {step < 3 ? (
                            <button
                                onClick={() => setStep(step + 1)}
                                className="flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20"
                            >
                                Próximo
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/20"
                            >
                                <Check className="w-4 h-4" />
                                Finalizar Cadastro
                            </button>
                        )}
                    </div>
                </motion.div>

                <p className="text-center mt-8 text-sm text-gray-400">
                    Já tem uma conta?{" "}
                    <Link href="/login" className="text-white hover:underline">
                        Faça login
                    </Link>
                </p>
            </div>
        </div>
    );
}
