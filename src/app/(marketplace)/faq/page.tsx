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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
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
        <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-success/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Badge variant="elite" className="mb-6 px-4 py-2">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Central de Ajuda
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Perguntas{" "}
                        <span className="bg-gradient-to-r from-success to-emerald-300 bg-clip-text text-transparent">
                            Frequentes
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
                    >
                        Encontre respostas para as dúvidas mais comuns
                    </motion.p>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-lg mx-auto relative"
                    >
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar pergunta..."
                            className="w-full pl-14 pr-4 py-4 bg-white rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-success shadow-xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20 -mt-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {filteredFaqs.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl">{category.icon}</span>
                                    <h2 className="text-2xl font-bold text-foreground">
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
                                                className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all"
                                            >
                                                <button
                                                    onClick={() => toggleItem(key)}
                                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                                                >
                                                    <span className="font-semibold text-foreground pr-4">{item.q}</span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                                                        }`}>
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5" />
                                                        )}
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
                                                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
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
                            className="text-center py-16 text-muted-foreground"
                        >
                            <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-xl">Nenhuma pergunta encontrada para "{searchQuery}"</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-indigo-900" />
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-10 left-10 w-40 h-40 bg-success/40 rounded-full blur-3xl" />
                            <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl" />
                        </div>

                        <div className="relative p-12 md:p-16 text-center">
                            <MessageCircle className="w-12 h-12 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Não encontrou sua resposta?
                            </h2>
                            <p className="text-white/80 mb-8 text-lg">
                                Nossa equipe está pronta para ajudar você
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/suporte"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-success to-emerald-400 text-white rounded-xl font-bold shadow-xl shadow-success/30 transition-all"
                                >
                                    <Sparkles className="w-5 h-5" />
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
