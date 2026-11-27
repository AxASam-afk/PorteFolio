import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

const description =
  "Portfolio de Samuel Lepinay, étudiant en Bachelor Systèmes & Cybersécurité à l'ESGI Toulouse, en recherche d'alternance.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Systèmes, réseaux & cybersécurité`,
  description,
  openGraph: {
    title: `${site.name} — Portfolio`,
    description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
