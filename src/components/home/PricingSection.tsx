"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "$29",
        description: "Perfect for individuals and small projects.",
        features: [
            "Up to 5 Projects",
            "Basic Analytics",
            "24/7 Support",
            "1GB Storage",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$99",
        description: "For growing teams that need power and speed.",
        features: [
            "Unlimited Projects",
            "Advanced Analytics",
            "Priority Support",
            "10GB Storage",
            "Custom Domains",
            "API Access"
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale applications with custom needs.",
        features: [
            "Unlimited Everything",
            "Dedicated Support",
            "SLA Guarantee",
            "On-premise Deployment",
            "SSO & Audit Logs"
        ],
        highlighted: false,
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-muted-foreground md:text-lg"
                    >
                        Choose the plan that fits your speed.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:transform hover:-translate-y-1 hover:shadow-xl",
                                plan.highlighted
                                    ? "border-primary bg-background shadow-primary/10 ring-1 ring-primary"
                                    : "border-border bg-background/50 hover:bg-background/80"
                            )}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                            </div>

                            <ul className="mb-8 flex-1 space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className="w-full"
                                variant={plan.highlighted ? "default" : "outline"}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
