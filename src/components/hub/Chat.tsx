"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, User, MessageCircle } from "lucide-react";
import { Conversation, ChatMessage } from "@/types/types";
import { cn } from "@/lib/utils";

interface ChatProps {
    conversation: Conversation;
    currentUserId: string;
    currentUserType: "aluno" | "instrutor";
    onSendMessage: (content: string) => void;
}

export function Chat({
    conversation,
    currentUserId,
    currentUserType,
    onSendMessage,
}: ChatProps) {
    const [newMessage, setNewMessage] = React.useState("");
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [conversation.mensagens]);

    const handleSend = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage.trim());
            setNewMessage("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="flex flex-col h-[400px] bg-card rounded-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Chat da Aula</h3>
                    <p className="text-xs text-muted-foreground">
                        Converse com seu {currentUserType === "aluno" ? "instrutor" : "aluno"}
                    </p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversation.mensagens.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                        <MessageCircle className="w-10 h-10 mb-2 opacity-50" />
                        <p className="text-sm">Nenhuma mensagem ainda</p>
                        <p className="text-xs">Inicie a conversa!</p>
                    </div>
                ) : (
                    conversation.mensagens.map((message, index) => {
                        const isOwn = message.remetenteId === currentUserId;

                        return (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={cn("flex", isOwn ? "justify-end" : "justify-start")}
                            >
                                <div
                                    className={cn(
                                        "max-w-[75%] rounded-2xl px-4 py-2",
                                        isOwn
                                            ? "bg-primary text-white rounded-br-none"
                                            : "bg-muted text-foreground rounded-bl-none"
                                    )}
                                >
                                    <p className="text-sm">{message.conteudo}</p>
                                    <p
                                        className={cn(
                                            "text-[10px] mt-1",
                                            isOwn ? "text-white/70" : "text-muted-foreground"
                                        )}
                                    >
                                        {formatTime(message.enviadoEm)}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-muted/30">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 px-4 py-2 bg-card rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!newMessage.trim()}
                        className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
