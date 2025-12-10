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
    ArrowLeft
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
        <div className="min-h-screen bg-secondary pt-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Cadastre-se como Instrutor
                    </h1>
                    <p className="text-muted-foreground">
                        Preencha seus dados para começar a dar aulas
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${s === step ? "bg-primary text-white" :
                                    s < step ? "bg-success text-white" :
                                        "bg-muted text-muted-foreground"
                                }`}>
                                {s < step ? <Check className="w-5 h-5" /> : s}
                            </div>
                            {s < 3 && <div className={`w-16 h-1 ${s < step ? "bg-success" : "bg-muted"}`} />}
                        </div>
                    ))}
                </div>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-card rounded-xl border border-border p-6"
                >
                    {step === 1 && (
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" />
                                Dados Pessoais
                            </h2>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                                    <input
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                                        placeholder="(11) 99999-9999"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">CPF</label>
                                    <input
                                        type="text"
                                        value={formData.cpf}
                                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                        placeholder="000.000.000-00"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Categoria CNH</label>
                                    <select
                                        value={formData.categoriaCNH}
                                        onChange={(e) => setFormData({ ...formData, categoriaCNH: e.target.value })}
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    >
                                        <option value="A">Categoria A</option>
                                        <option value="B">Categoria B</option>
                                        <option value="C">Categoria C</option>
                                        <option value="D">Categoria D</option>
                                        <option value="E">Categoria E</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Cidade</label>
                                    <input
                                        type="text"
                                        value={formData.cidade}
                                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                                        placeholder="Sua cidade"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Estado</label>
                                    <select
                                        value={formData.estado}
                                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    >
                                        <option value="SP">São Paulo</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PR">Paraná</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" />
                                Dados do Veículo
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Marca</label>
                                    <input
                                        type="text"
                                        value={formData.veiculo.marca}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, marca: e.target.value } })}
                                        placeholder="Ex: Volkswagen"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Modelo</label>
                                    <input
                                        type="text"
                                        value={formData.veiculo.modelo}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, modelo: e.target.value } })}
                                        placeholder="Ex: UP"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Ano</label>
                                    <input
                                        type="text"
                                        value={formData.veiculo.ano}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, ano: e.target.value } })}
                                        placeholder="Ex: 2022"
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Transmissão</label>
                                    <select
                                        value={formData.veiculo.transmissao}
                                        onChange={(e) => setFormData({ ...formData, veiculo: { ...formData.veiculo, transmissao: e.target.value } })}
                                        className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                    >
                                        <option value="manual">Manual</option>
                                        <option value="automatico">Automático</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">Biografia</label>
                                <textarea
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    rows={3}
                                    placeholder="Conte um pouco sobre sua experiência como instrutor..."
                                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                Documentos
                            </h2>

                            <p className="text-sm text-muted-foreground mb-4">
                                Após o cadastro, você precisará enviar os seguintes documentos para validação:
                            </p>

                            {[
                                { label: "CNH de Instrutor", desc: "Habilitação válida para instrutor" },
                                { label: "Certificado de Instrutor", desc: "Emitido pelo DETRAN" },
                                { label: "Comprovante de Residência", desc: "Atualizado (últimos 3 meses)" }
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Upload className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-foreground">{doc.label}</p>
                                        <p className="text-sm text-muted-foreground">{doc.desc}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="p-4 bg-amber-500/10 rounded-lg">
                                <p className="text-sm text-amber-700">
                                    <strong>Importante:</strong> Os documentos serão validados em até 48h úteis após o envio.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between mt-6 pt-6 border-t border-border">
                        {step > 1 ? (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
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
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Próximo
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                            >
                                <Check className="w-4 h-4" />
                                Finalizar Cadastro
                            </button>
                        )}
                    </div>
                </motion.div>

                <p className="text-center mt-6 text-sm text-muted-foreground">
                    Já tem uma conta?{" "}
                    <Link href="/instrutor" className="text-primary hover:underline">
                        Faça login
                    </Link>
                </p>
            </div>
        </div>
    );
}
