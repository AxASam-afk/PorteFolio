import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Poppins } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${manrope.variable} ${poppins.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
