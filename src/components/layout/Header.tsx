"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold inline-block">DrivePRo</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/#features" className="transition-colors hover:text-primary text-muted-foreground">
                        Features
                    </Link>
                    <Link href="/#pricing" className="transition-colors hover:text-primary text-muted-foreground">
                        Pricing
                    </Link>
                    <Link href="/#testimonials" className="transition-colors hover:text-primary text-muted-foreground">
                        Testimonials
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-y-0 right-0 z-50 w-full bg-background/95 backdrop-blur-xl p-6 sm:w-80 border-l border-border/40 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col space-y-8 mt-12">
                            <Link
                                href="/#features"
                                className="text-2xl font-bold transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/#pricing"
                                className="text-2xl font-bold transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/#testimonials"
                                className="text-2xl font-bold transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Testimonials
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
