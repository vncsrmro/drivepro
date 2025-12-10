"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileCheck,
    Eye,
    CheckCircle2,
    XCircle,
    FileText,
    Download,
    User,
    MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import {
    getDocumentosPendentes,
    getInstrutoresPendentes,
    getInstrutorById,
    documentos
} from "@/data/mockData";
import { Document, DocumentType } from "@/types/types";

const documentTypeLabels: Record<DocumentType, string> = {
    cnh: "CNH (Habilitação)",
    certificado_instrutor: "Certificado de Instrutor",
    comprovante_residencia: "Comprovante de Residência",
};

export default function ValidacoesPage() {
    const documentosPendentes = getDocumentosPendentes();
    const instrutoresPendentes = getInstrutoresPendentes();
    const [selectedDoc, setSelectedDoc] = React.useState<Document | null>(null);
    const [docStatuses, setDocStatuses] = React.useState<Record<string, "aprovado" | "rejeitado">>({});

    const handleApprove = (docId: string) => {
        setDocStatuses((prev) => ({ ...prev, [docId]: "aprovado" }));
        setSelectedDoc(null);
    };

    const handleReject = (docId: string) => {
        setDocStatuses((prev) => ({ ...prev, [docId]: "rejeitado" }));
        setSelectedDoc(null);
    };

    // Group documents by instructor
    const docsByInstructor = documentosPendentes.reduce((acc, doc) => {
        if (!acc[doc.instrutorId]) {
            acc[doc.instrutorId] = [];
        }
        acc[doc.instrutorId].push(doc);
        return acc;
    }, {} as Record<string, Document[]>);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Validação de Documentos (KYC)
                </h1>
                <p className="text-white/60">
                    Revise e aprove documentos de novos instrutores
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-amber-500/20 rounded-xl p-4 border border-amber-500/30"
                >
                    <p className="text-3xl font-bold text-white">{documentosPendentes.length}</p>
                    <p className="text-amber-400">Documentos Pendentes</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30"
                >
                    <p className="text-3xl font-bold text-white">{instrutoresPendentes.length}</p>
                    <p className="text-purple-400">Instrutores Pendentes</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-success/20 rounded-xl p-4 border border-success/30"
                >
                    <p className="text-3xl font-bold text-white">{Object.keys(docStatuses).length}</p>
                    <p className="text-success">Processados Hoje</p>
                </motion.div>
            </div>

            {/* Instructors with Pending Documents */}
            <div className="space-y-6">
                {Object.entries(docsByInstructor).map(([instrutorId, docs]) => {
                    const instrutor = getInstrutorById(instrutorId);
                    if (!instrutor) return null;

                    const allApproved = docs.every(d => docStatuses[d.id] === "aprovado");
                    const anyRejected = docs.some(d => docStatuses[d.id] === "rejeitado");

                    return (
                        <motion.div
                            key={instrutorId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                        >
                            {/* Instructor Header */}
                            <div className="p-4 border-b border-white/10 flex items-center gap-4">
                                <img
                                    src={instrutor.foto}
                                    alt={instrutor.nome}
                                    className="w-14 h-14 rounded-xl object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-white flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        {instrutor.nome}
                                    </h3>
                                    <p className="text-sm text-white/60 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {instrutor.cidade}, {instrutor.estado}
                                    </p>
                                    <p className="text-xs text-white/40">
                                        Cadastrado em {new Date(instrutor.criadoEm).toLocaleDateString("pt-BR")}
                                    </p>
                                </div>
                                <Badge
                                    variant={
                                        allApproved ? "active" :
                                            anyRejected ? "rejected" : "pending"
                                    }
                                >
                                    {allApproved ? "Aprovado" :
                                        anyRejected ? "Rejeitado" : "Pendente"}
                                </Badge>
                            </div>

                            {/* Documents List */}
                            <div className="divide-y divide-white/10">
                                {docs.map((doc) => {
                                    const status = docStatuses[doc.id];

                                    return (
                                        <div
                                            key={doc.id}
                                            className="p-4 flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                                    <FileText className="w-5 h-5 text-white/70" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium">
                                                        {documentTypeLabels[doc.tipo]}
                                                    </p>
                                                    <p className="text-xs text-white/50">
                                                        {doc.nomeArquivo}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {status ? (
                                                    <Badge variant={status === "aprovado" ? "active" : "rejected"}>
                                                        {status === "aprovado" ? "Aprovado" : "Rejeitado"}
                                                    </Badge>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => setSelectedDoc(doc)}
                                                            className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
                                                            title="Visualizar"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleApprove(doc.id)}
                                                            className="p-2 bg-success/20 text-success rounded-lg hover:bg-success/30 transition-colors"
                                                            title="Aprovar"
                                                        >
                                                            <CheckCircle2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleReject(doc.id)}
                                                            className="p-2 bg-destructive/20 text-destructive rounded-lg hover:bg-destructive/30 transition-colors"
                                                            title="Rejeitar"
                                                        >
                                                            <XCircle className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Approve All Button */}
                            {!allApproved && !anyRejected && (
                                <div className="p-4 border-t border-white/10 flex justify-end gap-3">
                                    <button
                                        onClick={() => docs.forEach(d => handleReject(d.id))}
                                        className="px-4 py-2 bg-destructive/20 text-destructive rounded-lg hover:bg-destructive/30 transition-colors"
                                    >
                                        Rejeitar Todos
                                    </button>
                                    <button
                                        onClick={() => docs.forEach(d => handleApprove(d.id))}
                                        className="px-4 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors"
                                    >
                                        Aprovar Todos
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    );
                })}

                {Object.keys(docsByInstructor).length === 0 && (
                    <div className="text-center py-16 text-white/50">
                        <FileCheck className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Nenhum documento pendente</p>
                        <p className="text-sm">Todos os instrutores estão verificados</p>
                    </div>
                )}
            </div>

            {/* Document Preview Modal */}
            <Modal
                isOpen={!!selectedDoc}
                onClose={() => setSelectedDoc(null)}
                title="Visualizar Documento"
                size="lg"
            >
                {selectedDoc && (
                    <div className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Tipo</p>
                            <p className="font-medium text-foreground">
                                {documentTypeLabels[selectedDoc.tipo]}
                            </p>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Arquivo</p>
                            <p className="font-medium text-foreground flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                {selectedDoc.nomeArquivo}
                            </p>
                        </div>

                        {/* Mock Document Preview */}
                        <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                            <div className="text-center text-muted-foreground">
                                <FileText className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                <p>Pré-visualização do Documento</p>
                                <p className="text-sm">(Mock - PDF/Imagem)</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleReject(selectedDoc.id)}
                                className="flex-1 py-3 bg-destructive text-white rounded-lg font-semibold hover:bg-destructive/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <XCircle className="w-5 h-5" />
                                Rejeitar
                            </button>
                            <button
                                onClick={() => handleApprove(selectedDoc.id)}
                                className="flex-1 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 className="w-5 h-5" />
                                Aprovar
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
