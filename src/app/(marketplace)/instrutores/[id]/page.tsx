"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    Star,
    Car,
    Crown,
    MapPin,
    Calendar,
    Shield,
    CheckCircle2,
    Clock,
    MessageCircle,
    ChevronLeft,
    Award
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { BookingFlow } from "@/components/hub/BookingFlow";
import { Chat } from "@/components/hub/Chat";
import {
    getInstrutorById,
    getHorariosDisponiveis,
    conversas
} from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function InstructorProfilePage() {
    const params = useParams();
    const instructorId = params.id as string;
    const instructor = getInstrutorById(instructorId);
    const [showBookingModal, setShowBookingModal] = React.useState(false);
    const [showChatModal, setShowChatModal] = React.useState(false);
    const [booked, setBooked] = React.useState(false);

    if (!instructor) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary pt-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-2">
                        Instrutor não encontrado
                    </h1>
                    <Link href="/instrutores" className="text-primary hover:underline">
                        Voltar para a lista
                    </Link>
                </div>
            </div>
        );
    }

    const schedule = getHorariosDisponiveis(instructor.id);
    const isElite = instructor.plano === "ouro";
    const conversation = conversas[0]; // Mock conversation

    const handleBook = (date: string, time: string) => {
        console.log("Booked:", date, time);
        setBooked(true);
    };

    const handleSendMessage = (content: string) => {
        console.log("Message sent:", content);
    };

    return (
        <div className="min-h-screen bg-secondary pt-20">
            {/* Back Button */}
            <div className="bg-white border-b border-border sticky top-16 z-40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <Link
                        href="/instrutores"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Voltar para a lista
                    </Link>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "bg-card rounded-xl border overflow-hidden",
                                isElite ? "border-amber-300" : "border-border"
                            )}
                        >
                            {/* Cover */}
                            <div className="relative h-32 bg-gradient-to-r from-primary to-primary/80">
                                {isElite && (
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="elite" className="flex items-center gap-1">
                                            <Crown className="w-3 h-3" />
                                            Elite
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            {/* Profile Info */}
                            <div className="px-6 pb-6">
                                <div className="relative -mt-16 mb-4">
                                    <img
                                        src={instructor.foto}
                                        alt={instructor.nome}
                                        className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-lg"
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                            {instructor.nome}
                                            {instructor.documentosVerificados && (
                                                <CheckCircle2 className="w-5 h-5 text-success" />
                                            )}
                                        </h1>
                                        <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {instructor.cidade}, {instructor.estado}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                <span className="font-semibold text-foreground">
                                                    {instructor.nota.toFixed(1)}
                                                </span>
                                                <span>({instructor.totalAvaliacoes} avaliações)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {instructor.categoriasHabilitadas.map((cat) => (
                                            <span
                                                key={cat}
                                                className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                                            >
                                                CNH {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-card rounded-xl border border-border p-6"
                        >
                            <h2 className="text-lg font-semibold text-foreground mb-3">
                                Sobre o Instrutor
                            </h2>
                            <p className="text-muted-foreground">{instructor.bio}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-foreground">
                                        {instructor.aulasRealizadas}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Aulas realizadas</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-foreground">
                                        {instructor.nota.toFixed(1)}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Nota média</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-foreground">
                                        {new Date().getFullYear() - new Date(instructor.criadoEm).getFullYear()}+
                                    </p>
                                    <p className="text-sm text-muted-foreground">Anos na plataforma</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-success">100%</p>
                                    <p className="text-sm text-muted-foreground">Aprovação</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vehicle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-card rounded-xl border border-border p-6"
                        >
                            <h2 className="text-lg font-semibold text-foreground mb-3">
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
                                        {instructor.veiculo.ano} • {instructor.veiculo.transmissao === "automatico" ? "Automático" : "Manual"}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Reviews */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-card rounded-xl border border-border p-6"
                        >
                            <h2 className="text-lg font-semibold text-foreground mb-4">
                                Avaliações Recentes
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { name: "João P.", rating: 5, text: "Excelente instrutor! Muito paciente e didático.", date: "2 dias atrás" },
                                    { name: "Maria S.", rating: 5, text: "Consegui perder o medo de dirigir. Super recomendo!", date: "1 semana atrás" },
                                    { name: "Carlos M.", rating: 4, text: "Ótimo profissional, pontual e atencioso.", date: "2 semanas atrás" },
                                ].map((review, index) => (
                                    <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                                            {review.name[0]}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <p className="font-medium text-foreground">{review.name}</p>
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: review.rating }).map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-1">{review.text}</p>
                                            <p className="text-xs text-muted-foreground">{review.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar - Booking Card */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-card rounded-xl border border-border p-6 sticky top-36"
                        >
                            <div className="text-center mb-6">
                                <p className="text-3xl font-bold text-success">
                                    R$ {instructor.precoAula.toFixed(2).replace(".", ",")}
                                </p>
                                <p className="text-muted-foreground">por aula de 1 hora</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-sm text-foreground">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span>Duração: 1 hora</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <span>Horários flexíveis</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground">
                                    <Shield className="w-5 h-5 text-success" />
                                    <span>Pagamento seguro (Escrow)</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowBookingModal(true)}
                                className="w-full py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors mb-3"
                            >
                                Agendar Aula
                            </button>

                            {booked && (
                                <button
                                    onClick={() => setShowChatModal(true)}
                                    className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Conversar
                                </button>
                            )}

                            {/* Escrow Info */}
                            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-emerald-700">
                                        Seu dinheiro está seguro e só será liberado ao instrutor após a
                                        conclusão da aula.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <Modal
                isOpen={showBookingModal}
                onClose={() => setShowBookingModal(false)}
                title="Agendar Aula"
                size="lg"
            >
                <BookingFlow
                    instructor={instructor}
                    schedule={schedule}
                    onBook={handleBook}
                    onCancel={() => setShowBookingModal(false)}
                />
            </Modal>

            {/* Chat Modal */}
            <Modal
                isOpen={showChatModal}
                onClose={() => setShowChatModal(false)}
                title="Chat com o Instrutor"
                size="md"
            >
                <Chat
                    conversation={conversation}
                    currentUserId="a1"
                    currentUserType="aluno"
                    onSendMessage={handleSendMessage}
                />
            </Modal>
        </div>
    );
}
