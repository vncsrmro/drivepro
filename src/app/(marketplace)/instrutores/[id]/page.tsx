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
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] pt-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">
                        Instrutor não encontrado
                    </h1>
                    <Link href="/instrutores" className="text-blue-400 hover:text-blue-300">
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
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
            {/* Background Gradient */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            {/* Back Button */}
            <div className="sticky top-20 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 pb-4 pt-2 mb-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/instrutores"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Voltar para a lista
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "bg-white/5 backdrop-blur-md rounded-3xl border overflow-hidden",
                                isElite ? "border-amber-500/30" : "border-white/10"
                            )}
                        >
                            {/* Cover */}
                            <div className="relative h-40 bg-gradient-to-r from-blue-900 to-purple-900">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                {isElite && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                        <Crown className="w-3.5 h-3.5" />
                                        ELITE
                                    </div>
                                )}
                            </div>

                            {/* Profile Info */}
                            <div className="px-8 pb-8">
                                <div className="relative -mt-16 mb-6">
                                    <img
                                        src={instructor.foto}
                                        alt={instructor.nome}
                                        className="w-32 h-32 rounded-3xl object-cover border-4 border-[#0a0a0f] shadow-2xl"
                                    />
                                    {instructor.documentosVerificados && (
                                        <div className="absolute bottom-[-10px] right-[-10px] bg-[#0a0a0f] rounded-full p-1.5 border border-white/10">
                                            <div className="bg-emerald-500 rounded-full p-1">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                    <div>
                                        <h1 className="text-3xl font-bold text-white mb-2">
                                            {instructor.nome}
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-blue-400" />
                                                {instructor.cidade}, {instructor.estado}
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/10">
                                                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                <span className="font-bold text-amber-500">
                                                    {instructor.nota.toFixed(1)}
                                                </span>
                                                <span className="text-gray-500">({instructor.totalAvaliacoes} avaliações)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {instructor.categoriasHabilitadas.map((cat) => (
                                            <span
                                                key={cat}
                                                className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm font-bold rounded-xl"
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
                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8"
                        >
                            <h2 className="text-xl font-bold text-white mb-4">
                                Sobre o Instrutor
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">{instructor.bio}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white mb-1">
                                        {instructor.aulasRealizadas}
                                    </p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Aulas</p>
                                </div>
                                <div className="text-center border-l border-white/5">
                                    <p className="text-2xl font-bold text-white mb-1">
                                        {instructor.nota.toFixed(1)}
                                    </p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Nota</p>
                                </div>
                                <div className="text-center border-l border-white/5">
                                    <p className="text-2xl font-bold text-white mb-1">
                                        {new Date().getFullYear() - new Date(instructor.criadoEm).getFullYear()}+
                                    </p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Anos</p>
                                </div>
                                <div className="text-center border-l border-white/5">
                                    <p className="text-2xl font-bold text-emerald-400 mb-1">100%</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Aprovação</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vehicle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8"
                        >
                            <h2 className="text-xl font-bold text-white mb-6">
                                Veículo
                            </h2>
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                                    <Car className="w-10 h-10 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white mb-1">
                                        {instructor.veiculo.marca} {instructor.veiculo.modelo}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10">
                                            {instructor.veiculo.ano}
                                        </span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10">
                                            {instructor.veiculo.transmissao === "automatico" ? "Automático" : "Manual"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Reviews */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8"
                        >
                            <h2 className="text-xl font-bold text-white mb-6">
                                Avaliações Recentes
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { name: "João P.", rating: 5, text: "Excelente instrutor! Muito paciente e didático.", date: "2 dias atrás" },
                                    { name: "Maria S.", rating: 5, text: "Consegui perder o medo de dirigir. Super recomendo!", date: "1 semana atrás" },
                                    { name: "Carlos M.", rating: 4, text: "Ótimo profissional, pontual e atencioso.", date: "2 semanas atrás" },
                                ].map((review, index) => (
                                    <div key={index} className="flex gap-4 pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-lg border border-white/5">
                                            {review.name[0]}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="font-bold text-white">{review.name}</p>
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: review.rating }).map((_, i) => (
                                                        <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-2 leading-relaxed">{review.text}</p>
                                            <p className="text-xs text-gray-600">{review.date}</p>
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
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 sticky top-36"
                        >
                            <div className="text-center mb-8 pb-8 border-b border-white/5">
                                <p className="text-sm text-gray-400 mb-2">Investimento por aula</p>
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        R$ {instructor.precoAula.toFixed(0)}
                                    </span>
                                    <span className="text-gray-500 mb-1">/ hora</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 text-sm text-gray-300">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <span>Duração: 60 minutos</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-300">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <span>Horários flexíveis</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-300">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <span>Pagamento Seguro</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowBookingModal(true)}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all mb-3 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Agendar Aula
                            </button>

                            {booked && (
                                <button
                                    onClick={() => setShowChatModal(true)}
                                    className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Conversar
                                </button>
                            )}

                            {/* Escrow Guarantee */}
                            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                <div className="flex gap-3">
                                    <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-emerald-200/80 leading-relaxed">
                                        Seu valor fica protegido e só é liberado para o instrutor após você confirmar a realização da aula.
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
