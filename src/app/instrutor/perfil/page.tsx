"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Car,
    Star,
    Award,
    Edit2,
    Camera,
    Save
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getInstrutorById } from "@/data/mockData";

const INSTRUCTOR_ID = "1";

export default function PerfilPage() {
    const instructor = getInstrutorById(INSTRUCTOR_ID)!;
    const [isEditing, setIsEditing] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nome: instructor.nome,
        email: instructor.email,
        telefone: instructor.telefone,
        bio: instructor.bio,
        precoAula: instructor.precoAula,
    });

    const handleSave = () => {
        setIsEditing(false);
        // Mock save
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground mb-2">
                        Meu Perfil
                    </h1>
                    <p className="text-muted-foreground">
                        Gerencie suas informações pessoais e profissionais
                    </p>
                </div>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isEditing
                            ? "bg-success text-white hover:bg-success/90"
                            : "bg-primary text-white hover:bg-primary/90"
                        }`}
                >
                    {isEditing ? (
                        <>
                            <Save className="w-4 h-4" />
                            Salvar
                        </>
                    ) : (
                        <>
                            <Edit2 className="w-4 h-4" />
                            Editar
                        </>
                    )}
                </button>
            </div>

            {/* Profile Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl border border-border overflow-hidden mb-6"
            >
                {/* Cover */}
                <div className="h-32 bg-gradient-to-r from-primary to-primary/80 relative">
                    {instructor.plano === "ouro" && (
                        <div className="absolute top-4 right-4">
                            <Badge variant="elite" className="flex items-center gap-1">
                                <Award className="w-3 h-3" />
                                Elite
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Avatar */}
                <div className="px-6 pb-6">
                    <div className="relative -mt-16 mb-4">
                        <img
                            src={instructor.foto}
                            alt={instructor.nome}
                            className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-lg"
                        />
                        {isEditing && (
                            <button className="absolute bottom-2 right-2 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                            <span className="font-bold text-foreground">{instructor.nota.toFixed(1)}</span>
                            <span className="text-muted-foreground">({instructor.totalAvaliacoes} avaliações)</span>
                        </div>
                        <div className="text-muted-foreground">
                            {instructor.aulasRealizadas} aulas realizadas
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {instructor.categoriasHabilitadas.map(cat => (
                            <Badge key={cat} variant="secondary">
                                CNH {cat}
                            </Badge>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl border border-border p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Informações Pessoais
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                            Nome Completo
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                            />
                        ) : (
                            <p className="text-foreground font-medium">{formData.nome}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                            <Mail className="w-4 h-4 inline mr-1" />
                            Email
                        </label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                            />
                        ) : (
                            <p className="text-foreground">{formData.email}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                            <Phone className="w-4 h-4 inline mr-1" />
                            Telefone
                        </label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={formData.telefone}
                                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                                className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                            />
                        ) : (
                            <p className="text-foreground">{formData.telefone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            Localização
                        </label>
                        <p className="text-foreground">{instructor.cidade}, {instructor.estado}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Biografia
                    </label>
                    {isEditing ? (
                        <textarea
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                        />
                    ) : (
                        <p className="text-foreground">{formData.bio}</p>
                    )}
                </div>
            </motion.div>

            {/* Vehicle Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl border border-border p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Veículo
                </h2>

                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Car className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">
                            {instructor.veiculo.marca} {instructor.veiculo.modelo}
                        </p>
                        <p className="text-muted-foreground">
                            {instructor.veiculo.ano} • {instructor.veiculo.transmissao === "automatico" ? "Automático" : "Manual"} • Placa: {instructor.veiculo.placa}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-xl border border-border p-6"
            >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                    Preço da Aula
                </h2>

                <div className="flex items-center gap-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                            Valor por aula (1 hora)
                        </label>
                        {isEditing ? (
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">R$</span>
                                <input
                                    type="number"
                                    value={formData.precoAula}
                                    onChange={(e) => setFormData({ ...formData, precoAula: Number(e.target.value) })}
                                    className="w-24 px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                />
                            </div>
                        ) : (
                            <p className="text-3xl font-bold text-success">
                                R$ {formData.precoAula.toFixed(2).replace(".", ",")}
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
