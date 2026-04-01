"use client";

import Link from "next/link";
import { ArrowUpRight, Filter, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";
import { InteractiveTravelCard } from "@/components/ui/3d-card";
import { cn } from "@/lib/cn";

type Category = "Cybersécurité" | "Full-stack" | "Jeu" | "Systèmes";

type Project = {
  slug: string;
  title: string;
  category: Category;
  description: string;
  caseMini: string;
  image: string;
  badges: string[];
  imageUrl: string;
  /** Texte long optionnel affiché au verso (détails), paragraphes séparés par des lignes vides. */
  extraContent?: string;
};

const categories: Array<Category | "Tous"> = [
  "Tous",
  "Cybersécurité",
  "Full-stack",
  "Systèmes",
  "Jeu",
];

const projects: Project[] = [
  {
    slug: "portfolio-samuel-lepinay",
    title: "Portfolio personnel — site vitrine",
    category: "Full-stack",
    description:
      "Site présentant mon parcours, mes projets et un moyen de contact : Next.js, interface soignée et expérience interactive.",
    caseMini:
      "Objectif: un site rapide, lisible et représentatif de mon profil cybersécurité & informatique. Résultat: une base Next.js (App Router) avec sections claires, fond animé, cartes projets en 3D et formulaire de contact orienté email.",
    image: "/images/hero-bg.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    badges: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    extraContent: `Stack et architecture

Le site est construit avec Next.js (App Router), React 19 et TypeScript. Les styles utilisent Tailwind CSS v4 et une palette définie en variables CSS (couleurs, ombres, surfaces) pour garder une identité visuelle cohérente sur toute la page.

Interface et contenu

La page d’accueil regroupe un hero, des sections À propos, compétences (bento), projets avec études de cas, appel à l’action et contact. Le texte est pensé pour être professionnel et lisible (hiérarchie des titres, contrastes, vouvoiement sur les textes de contact).

Effets et performance

Un fond animé type « Entropy » (canvas 2D) couvre le site en arrière-plan, avec un voile léger pour préserver la lisibilité du texte. Les cartes projets utilisent Framer Motion : inclinaison au survol, retournement 3D au clic sur la flèche pour afficher objectifs, résumé de cas et tags — sans quitter la grille des projets.

Contact

Le bloc contact propose des liens mailto vers une adresse personnelle et un formulaire côté interface (comportement à brancher sur un service d’envoi si besoin en production).

Qualité et évolutions

Ce projet me sert aussi de laboratoire pour itérer sur l’UX, l’accessibilité de base (libellés, focus) et la qualité du code (lint, build TypeScript).`,
  },
  {
    slug: "app-gestion-produits-securisee",
    title: "Gestion de produits — App sécurisée",
    category: "Full-stack",
    description:
      "Application orientée sécurité: authentification, intégrité des données et contrôles.",
    caseMini:
      "Objectif: sécuriser des flux CRUD (auth, validation, logs). Résultat: un socle de bonnes pratiques réutilisable.",
    image: "/images/projects/secure-products.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
    badges: ["Auth", "Intégrité", "Secure coding"],
  },
  {
    slug: "mario-2d-unity",
    title: "Platformer 2D type Mario",
    category: "Jeu",
    description:
      "Projet autodidacte Unity: gameplay, collisions, niveaux et gestion d’assets.",
    caseMini:
      "Objectif: renforcer la logique et l’architecture. Résultat: un prototype jouable, itérable et documenté.",
    image: "/images/projects/unity-platformer.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
    badges: ["Unity", "Gameplay", "Autonomie"],
  },
  {
    slug: "dashboard-ctf-writeups",
    title: "Dashboard CTF & writeups",
    category: "Cybersécurité",
    description:
      "Un espace pour suivre les challenges, la progression et les notes de restitution.",
    caseMini:
      "Problème: progression dispersée. Solution: centraliser, tagger, chercher. Résultat: routine plus régulière.",
    image: "/images/projects/ctf-dashboard.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    badges: ["CTF", "Organisation", "Recherche"],
  },
  {
    slug: "scanner-reseau-lab",
    title: "Scanner réseau (lab)",
    category: "Cybersécurité",
    description:
      "Outils de lab pour inventorier services/ports et produire un résumé exploitable.",
    caseMini:
      "Objectif: comprendre la reconnaissance. Résultat: sorties lisibles, triées, et prêtes à être analysées.",
    image: "/images/projects/network-scanner.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    badges: ["Recon", "Synthèse", "Lab"],
  },
  {
    slug: "hardening-checklist-si",
    title: "Checklist de hardening SI",
    category: "Systèmes",
    description:
      "Checklist pragmatique (comptes, mises à jour, sauvegardes, accès, journalisation).",
    caseMini:
      "Objectif: fiabiliser les routines. Résultat: contrôles plus rapides et reproductibles.",
    image: "/images/projects/hardening.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80",
    badges: ["Procédures", "Rigueur", "Sécurisation"],
  },
  {
    slug: "mini-password-vault",
    title: "Mini “password vault” (prototype)",
    category: "Cybersécurité",
    description:
      "Prototype pour explorer stockage, chiffrement et bonnes pratiques côté applicatif.",
    caseMini:
      "Objectif: apprendre par la pratique. Résultat: une base de réflexion sur les choix et menaces.",
    image: "/images/projects/password-vault.svg",
    imageUrl:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1400&q=80",
    badges: ["Crypto", "Threat model", "Prototype"],
  },
];

function ProjectCard({ p, delayMs }: { p: Project; delayMs: number }) {
  return (
    <Reveal delayMs={delayMs}>
      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-surface px-3 py-1 text-xs font-semibold text-ink/85 shadow-premium backdrop-blur-md">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            {p.category}
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
          >
            Discuter <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div style={{ perspective: "1000px" }}>
          <InteractiveTravelCard
            title={p.title}
            subtitle={p.description}
            imageUrl={p.imageUrl}
            details={
              <>
                <p className="text-muted">{p.description}</p>
                <p className="mt-4 text-ink/85">{p.caseMini}</p>
                {p.extraContent ? (
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/90">
                    {p.extraContent.split(/\n\n+/).map((block, i) => {
                      const lines = block.trim().split("\n");
                      const head = lines[0] ?? "";
                      const rest = lines.slice(1).join("\n").trim();
                      return (
                        <div key={i}>
                          <p className="font-semibold text-ink">{head}</p>
                          {rest ? (
                            <p className="mt-1.5 whitespace-pre-line">{rest}</p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-3xl border border-stroke bg-bg/40 px-3 py-1 text-xs font-semibold text-ink/80"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </>
            }
            className={cn("mx-auto w-full max-w-[22rem]")}
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projets">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <TextBlurIn
            as="h2"
            className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
          >
            Projets
          </TextBlurIn>
          <Reveal delayMs={120}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Une sélection de projets pour montrer ma progression, ma rigueur
              et mon intérêt pour la sécurité — du lab au produit.
            </p>
          </Reveal>
        </div>

        <Reveal delayMs={160}>
          <div className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-surface px-4 py-2 text-sm font-semibold text-ink/80 shadow-premium backdrop-blur-md">
            <Filter className="h-4 w-4 text-accent" />
            Filtres (visuel) · catégories
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={220}>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className="rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink/80 shadow-premium transition hover:scale-[1.02]"
              aria-pressed={c === "Tous"}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 overflow-visible md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} delayMs={80 + i * 70} />
        ))}
      </div>
    </Section>
  );
}

