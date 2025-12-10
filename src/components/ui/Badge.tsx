"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                success: "bg-success text-success-foreground",
                destructive: "bg-destructive text-destructive-foreground",
                outline: "border border-border text-foreground",
                elite: "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-amber-500/20",
                pending: "bg-amber-100 text-amber-800",
                active: "bg-emerald-100 text-emerald-800",
                rejected: "bg-red-100 text-red-800",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
