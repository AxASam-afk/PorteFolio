import Link from "next/link";
import { Code2, Link2, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-stroke bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(900px_360px_at_20%_30%,rgba(74,99,255,0.12),transparent_60%),radial-gradient(900px_360px_at_80%_70%,rgba(242,183,5,0.10),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
        <Reveal>
          <p className="select-none text-[3.2rem] font-semibold leading-none tracking-[-0.04em] text-ink/10 sm:text-[5rem] lg:text-[7rem]">
            Samuel Lepinay
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md">
              <p className="text-sm font-semibold text-ink">
                Étudiant en cybersécurité & informatique
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Sérieux, curieux, déterminé — orienté apprentissage et projets
                concrets.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {[
              {
                title: "Work",
                links: [
                  { label: "Projets", href: "#projets" },
                  { label: "Case studies", href: "#case-studies" },
                  { label: "Compétences", href: "#competences" },
                ],
              },
              {
                title: "Info",
                links: [
                  { label: "À propos", href: "#a-propos" },
                  { label: "Témoignages", href: "#temoignages" },
                  { label: "Travaillons ensemble", href: "#travaillons-ensemble" },
                ],
              },
              {
                title: "Contact",
                links: [
                  { label: "Email", href: "mailto:slepinay@guardiaschool.fr" },
                  { label: "Téléphone", href: "tel:+33629867387" },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/samuel-lepinay/",
                    external: true,
                  },
                ],
              },
            ].map((col, idx) => (
              <Reveal key={col.title} delayMs={120 + idx * 90}>
                <div className="rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {col.title}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          target={l.external ? "_blank" : undefined}
                          rel={l.external ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-ink/85 transition hover:text-ink"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delayMs={260}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-stroke pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Samuel Lepinay. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="mailto:slepinay@guardiaschool.fr"
                className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink shadow-premium transition hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4 text-secondary" />
                Email
              </Link>
              <Link
                href="tel:+33629867387"
                className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink shadow-premium transition hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4 text-accent" />
                Appeler
              </Link>
              <Link
                href="https://www.linkedin.com/in/samuel-lepinay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink shadow-premium transition hover:scale-[1.02]"
              >
                <Link2 className="h-4 w-4 text-secondary" />
                LinkedIn
              </Link>
              <Link
                href="#"
                aria-label="GitHub (à renseigner)"
                className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink/70 shadow-premium transition hover:scale-[1.02]"
              >
                <Code2 className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

