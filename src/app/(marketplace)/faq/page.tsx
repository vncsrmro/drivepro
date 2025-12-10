"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        category: "Para Alunos",
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
        <div className="min-h-screen bg-secondary pt-20">
            {/* Hero */}
            <section className="bg-primary py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        Perguntas Frequentes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
                    >
                        Encontre respostas para as dúvidas mais comuns sobre a Direção Pro.
                    </motion.p>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md mx-auto relative"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar pergunta..."
                            className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-success"
                        />
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredFaqs.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="mb-8"
                        >
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-primary" />
                                {category.category}
                            </h2>
                            <div className="space-y-3">
                                {category.questions.map((item, index) => {
                                    const key = `${category.category}-${index}`;
                                    const isOpen = openItems[key];

                                    return (
                                        <div
                                            key={index}
                                            className="bg-card rounded-xl border border-border overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleItem(key)}
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                                            >
                                                <span className="font-medium text-foreground pr-4">{item.q}</span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                                )}
                                            </button>
                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 text-muted-foreground">
                                                    {item.a}
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Nenhuma pergunta encontrada para "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Não encontrou sua resposta?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Nossa equipe está pronta para ajudar você.
                    </p>
                    <Link
                        href="/suporte"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Falar com Suporte
                    </Link>
                </div>
            </section>
        </div>
    );
}
