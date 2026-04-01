import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";
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
    slug: "app-gestion-produits-securisee",
    title: "Gestion de produits — App sécurisée",
    category: "Full-stack",
    description:
      "Application orientée sécurité: authentification, intégrité des données et contrôles.",
    caseMini:
      "Objectif: sécuriser des flux CRUD (auth, validation, logs). Résultat: un socle de bonnes pratiques réutilisable.",
    image: "/images/projects/secure-products.svg",
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
    badges: ["Crypto", "Threat model", "Prototype"],
  },
];

function ProjectCard({ p, delayMs }: { p: Project; delayMs: number }) {
  return (
    <Reveal delayMs={delayMs}>
      <article
        className={cn(
          "group relative overflow-hidden rounded-3xl border border-stroke bg-surface shadow-premium backdrop-blur-md",
          "transition hover:scale-[1.02]",
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={p.image}
            alt={`Visuel du projet ${p.title}`}
            fill
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 380px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(245,245,240,0.88),transparent_55%)]" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/50 px-3 py-1 text-xs font-semibold text-ink/85 backdrop-blur-md">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            {p.category}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
              {p.title}
            </h3>
            <span className="rounded-3xl border border-stroke bg-bg/40 p-2 text-ink/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink/85">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-muted">{p.description}</p>
          <p className="mt-3 text-sm leading-6 text-ink/80">{p.caseMini}</p>

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

          <div className="mt-5">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
            >
              Discuter de ce type de projet <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
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

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} delayMs={80 + i * 70} />
        ))}
      </div>
    </Section>
  );
}

