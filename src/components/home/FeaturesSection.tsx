"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Globe, Layers, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Instant Analytics",
        description: "Real-time data processing with sub-millisecond latency. Watch your metrics update live.",
        icon: Zap,
        className: "md:col-span-2",
    },
    {
        title: "Bank-Grade Security",
        description: "AES-256 encryption for all your sensitive data. Your privacy is our fortress.",
        icon: Shield,
        className: "md:col-span-1",
    },
    {
        title: "Global Edge Network",
        description: "Deployed to 35+ regions worldwide. Low latency, everywhere.",
        icon: Globe,
        className: "md:col-span-1",
    },
    {
        title: "Automated Scaling",
        description: "Handle millions of requests without lifting a finger. Our infrastructure adapts to you.",
        icon: BarChart3,
        className: "md:col-span-2",
    },
    {
        title: "Visual Workflow",
        description: "Drag-and-drop interface for building complex automation pipelines.",
        icon: Layers,
        className: "md:col-span-1",
    },
    {
        title: "AI Core",
        description: "Integrated machine learning models for predictive insights and automation.",
        icon: Cpu,
        className: "md:col-span-2",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-secondary/20">
            <div className="container">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    >
                        Power Under the Hood
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto"
                    >
                        Everything you need to build faster, scale better, and stay secure.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5 will-change-transform",
                                feature.className
                            )}
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                <feature.icon className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>

                            {/* Hover Glow Effect */}
                            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
