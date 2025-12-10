"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        quote: "DrivePRo completely transformed how we handle our high-performance workflows. It's shockingly fast.",
        author: "Alex Rivera",
        role: "CTO, SpeedTech",
        avatar: "AR"
    },
    {
        quote: "The 'Antigravidade' design isn't just a gimmick. It feels like the interface is reading my mind.",
        author: "Sarah Chen",
        role: "Product Lead, FutureScale",
        avatar: "SC"
    },
    {
        quote: "We migrated our entire infrastructure to DrivePRo in a weekend. The easiest decision we've made.",
        author: "Marcus Johnson",
        role: "DevOps Engineer, CloudNine",
        avatar: "MJ"
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold text-center tracking-tighter mb-12 sm:text-4xl">
                    Trusted by the Fastest Teams
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl border bg-secondary/10 hover:bg-secondary/20 transition-colors"
                        >
                            <p className="text-lg mb-6 italic text-muted-foreground">"{t.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-primary-foreground font-bold text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold">{t.author}</div>
                                    <div className="text-sm text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Ready to Defy Gravity?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of developers building the future with DrivePRo today.
                    </p>
                    <Button size="lg" variant="default" className="text-lg px-8 h-12 shadow-2xl shadow-primary/30">
                        Start Your Free Trial
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
