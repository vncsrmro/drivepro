import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "DrivePRo | High-Performance Web Applications",
    template: "%s | DrivePRo",
  },
  description: "Experience the future of web development with DrivePRo. Built for speed, designed for impact. Antigravidade architecture for next-gen apps.",
  keywords: ["Next.js", "React", "High Performance", "Web Development", "SaaS", "Antigravidade"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drivepro.romeiro.dev",
    title: "DrivePRo | High-Performance Web Applications",
    description: "Experience the future of web development with DrivePRo. Built for speed, designed for impact.",
    siteName: "DrivePRo",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", inter.variable)}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
