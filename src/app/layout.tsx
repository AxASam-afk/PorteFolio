import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { EntropyBackground } from "@/components/ui/entropy-background";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Lepinay — Cybersécurité & Informatique",
  description:
    "Portfolio de Samuel Lepinay, étudiant en cybersécurité & informatique. Projets, compétences, expériences et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink selection:bg-accent/20 selection:text-ink">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <EntropyBackground className="absolute inset-0" />
          <div className="absolute inset-0 bg-bg/70" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_30%_20%,rgba(74,99,255,0.10),transparent_60%),radial-gradient(700px_450px_at_70%_35%,rgba(242,183,5,0.08),transparent_55%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
