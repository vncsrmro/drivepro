import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Direção Pro | Encontre o Melhor Instrutor de Direção",
    template: "%s | Direção Pro",
  },
  description: "Hub de aulas de direção. Encontre instrutores certificados, agende suas aulas e realize seu sonho de tirar a CNH com segurança e confiança.",
  keywords: ["aulas de direção", "instrutor de direção", "CNH", "autoescola", "Americana", "São Paulo", "habilitação"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://direcaopro.com.br",
    title: "Direção Pro | Encontre o Melhor Instrutor de Direção",
    description: "Hub de aulas de direção. Encontre instrutores certificados e agende suas aulas com segurança.",
    siteName: "Direção Pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
