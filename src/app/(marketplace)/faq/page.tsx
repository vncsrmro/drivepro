"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

const faqs = [
    {
        category: "Para Alunos",
        icon: "👨‍🎓",
        questions: [
            {
                q: "Como funciona o pagamento?",
                a: "O pagamento é feito de forma segura através da nossa plataforma. Seu dinheiro fica em custódia (Escrow) e só é liberado ao instrutor após a conclusão da aula. Isso garante segurança para ambas as partes."
            },
            {
                q: "E se eu não gostar da aula?",
                a: "Se você não ficar satisfeito, pode solicitar reembolso em até 24 horas após a aula. Nossa equipe irá analisar o caso e, se procedente, devolver o valor integral."
            },
            {
                q: "Posso cancelar uma aula agendada?",
                a: "Sim! Você pode cancelar até 24 horas antes do horário agendado sem custo. Cancelamentos com menos de 24h podem ter uma taxa de até 50% do valor."
            },
            {
                q: "Quanto custa usar a plataforma?",
                a: "Para alunos, cobramos uma taxa de serviço de apenas 5% sobre o valor da aula. Se a aula custar R$ 100, você pagará R$ 105 no total."
            },
            {
                q: "O instrutor usa o veículo dele?",
                a: "Sim! Todos os instrutores utilizam veículos próprios, devidamente adaptados para aulas de direção, com duplo comando e seguros."
            }
        ]
    },
    {
        category: "Para Instrutores",
        icon: "🚗",
        questions: [
            {
                q: "Como me cadastro como instrutor?",
                a: "Basta clicar em 'Cadastre-se' e preencher seus dados. Você precisará enviar documentos como CNH de instrutor válida, comprovante de residência e certificado de instrutor. Após validação, seu perfil estará ativo."
            },
            {
                q: "Qual a taxa cobrada pela plataforma?",
                a: "A comissão varia de 10% a 20% dependendo do seu plano. No plano Grátis é 20%, no Prata 15% e no Ouro (Elite) apenas 10%. Quanto melhor seu plano, menor a taxa!"
            },
            {
                q: "Quando recebo meu dinheiro?",
                a: "O valor é liberado 24 horas após a conclusão da aula. Você pode solicitar repasse a qualquer momento para sua conta bancária cadastrada."
            },
            {
                q: "Posso definir meus próprios preços?",
                a: "Sim! Você tem total liberdade para definir o valor da sua aula. Recomendamos pesquisar o mercado da sua região para preços competitivos."
            },
            {
                q: "O que é o selo Elite?",
                a: "Instrutores com plano Ouro recebem o selo Elite, que aparece em destaque nas buscas. Isso aumenta sua visibilidade e atrai mais alunos."
            }
        ]
    },
    {
        category: "Pagamentos e Segurança",
        icon: "🔒",
        questions: [
            {
                q: "Meus dados estão seguros?",
                a: "Sim! Utilizamos criptografia de ponta e processadores de pagamento certificados PCI DSS. Seus dados bancários e pessoais são armazenados com segurança."
            },
            {
                q: "O que é o sistema Escrow?",
                a: "Escrow (ou custódia) significa que o pagamento fica 'guardado' na plataforma até a conclusão do serviço. O aluno paga, mas o instrutor só recebe após a aula ser realizada."
            },
            {
                q: "Quais formas de pagamento são aceitas?",
                a: "Aceitamos cartões de crédito, débito e PIX. Para instrutores, os repasses são feitos via transferência bancária ou PIX."
            }
        ]
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({});

    const toggleItem = (key: string) => {
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const filteredFaqs = React.useMemo(() => {
        if (!searchQuery) return faqs;

        const query = searchQuery.toLowerCase();
        return faqs.map(category => ({
            ...category,
            questions: category.questions.filter(
                q => q.q.toLowerCase().includes(query) || q.a.toLowerCase().includes(query)
            )
        })).filter(category => category.questions.length > 0);
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-md">
                        <HelpCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-200">Central de Ajuda</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    Perguntas{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Frequentes
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    Encontre respostas para as dúvidas mais comuns sobre pagamentos, aulas e segurança.
                </motion.p>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-xl mx-auto relative"
                >
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar pergunta..."
                        className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xl backdrop-blur-xl transition-all"
                    />
                </motion.div>
            </section>

            {/* FAQ Content */}
            <section className="py-12 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        {filteredFaqs.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-3xl p-3 bg-white/5 rounded-2xl">{category.icon}</span>
                                    <h2 className="text-2xl font-bold text-white">
                                        {category.category}
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {category.questions.map((item, index) => {
                                        const key = `${category.category}-${index}`;
                                        const isOpen = openItems[key];

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="bg-white/5 hover:bg-white/[0.07] border border-white/10 rounded-2xl overflow-hidden transition-colors"
                                            >
                                                <button
                                                    onClick={() => toggleItem(key)}
                                                    className="w-full flex items-center justify-between p-6 text-left"
                                                >
                                                    <span className="font-bold text-lg text-white pr-8">{item.q}</span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-blue-500 text-white rotate-180" : "bg-white/10 text-gray-400"
                                                        }`}>
                                                        <ChevronDown className="w-5 h-5" />
                                                    </div>
                                                </button>
                                                <motion.div
                                                    initial={false}
                                                    animate={{
                                                        height: isOpen ? "auto" : 0,
                                                        opacity: isOpen ? 1 : 0
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                        {item.a}
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredFaqs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 text-gray-500"
                        >
                            <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-xl">Nenhuma pergunta encontrada para "{searchQuery}"</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 relative px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a24] border border-white/10 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden relative"
                    >
                        {/* Glow effects */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25">
                                <MessageCircle className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Não encontrou sua resposta?
                            </h2>
                            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
                                Nossa equipe de especialistas está pronta para ajudar você em tempo real via WhatsApp ou Email.
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/suporte"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors shadow-xl"
                                >
                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                    Falar com Suporte
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
