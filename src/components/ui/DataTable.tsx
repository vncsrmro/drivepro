"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => React.ReactNode;
    sortable?: boolean;
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (item: T) => string;
    onRowClick?: (item: T) => void;
    emptyMessage?: string;
    className?: string;
}

export function DataTable<T>({
    data,
    columns,
    keyExtractor,
    onRowClick,
    emptyMessage = "Nenhum dado encontrado",
    className,
}: DataTableProps<T>) {
    const [sortKey, setSortKey] = React.useState<string | null>(null);
    const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };

    const sortedData = React.useMemo(() => {
        if (!sortKey) return data;

        return [...data].sort((a, b) => {
            const aValue = (a as Record<string, unknown>)[sortKey];
            const bValue = (b as Record<string, unknown>)[sortKey];

            if (aValue === bValue) return 0;
            if (aValue === null || aValue === undefined) return 1;
            if (bValue === null || bValue === undefined) return -1;

            const comparison = aValue < bValue ? -1 : 1;
            return sortDirection === "asc" ? comparison : -comparison;
        });
    }, [data, sortKey, sortDirection]);

    const getValue = (item: T, key: string): unknown => {
        return (item as Record<string, unknown>)[key];
    };

    return (
        <div className={cn("overflow-x-auto rounded-lg border border-border", className)}>
            <table className="w-full text-sm">
                <thead className="bg-muted/50">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key as string}
                                className={cn(
                                    "px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap",
                                    column.sortable && "cursor-pointer hover:bg-muted/70 transition-colors",
                                    column.className
                                )}
                                onClick={() => column.sortable && handleSort(column.key as string)}
                            >
                                <div className="flex items-center gap-2">
                                    {column.header}
                                    {column.sortable && (
                                        <span className="text-muted-foreground">
                                            {sortKey === column.key ? (
                                                sortDirection === "asc" ? (
                                                    <ChevronUp className="w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4" />
                                                )
                                            ) : (
                                                <ChevronsUpDown className="w-4 h-4" />
                                            )}
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {sortedData.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="px-4 py-8 text-center text-muted-foreground"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        sortedData.map((item) => (
                            <tr
                                key={keyExtractor(item)}
                                className={cn(
                                    "bg-card hover:bg-muted/30 transition-colors",
                                    onRowClick && "cursor-pointer"
                                )}
                                onClick={() => onRowClick?.(item)}
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key as string}
                                        className={cn("px-4 py-3 text-foreground", column.className)}
                                    >
                                        {column.render
                                            ? column.render(item)
                                            : String(getValue(item, column.key as string) ?? "-")}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
