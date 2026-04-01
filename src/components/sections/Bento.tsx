import Image from "next/image";
import { Shield, Terminal, Code2, Server, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";

const motionVisual = "/images/bento-visual.svg";

const skills = [
  {
    title: "Pentesting",
    icon: Shield,
    text: "Méthodologie, reconnaissance, exploitation contrôlée, restitution claire.",
    tags: ["Root-Me", "CTF", "OWASP"],
  },
  {
    title: "Dev sécurisé",
    icon: Code2,
    text: "Auth, validation, intégrité des données, logging, hygiène de dépendances.",
    tags: ["Python", "Java", "Web"],
  },
  {
    title: "Systèmes & SI",
    icon: Server,
    text: "Support, dépannage, tickets, maintenance, sécurisation basique des environnements.",
    tags: ["ITSM", "Rigueur", "Procédures"],
  },
  {
    title: "Culture technique",
    icon: Terminal,
    text: "Goût des défis, documentation, apprentissage rapide, autonomie.",
    tags: ["Writeups", "Veille", "Lab"],
  },
];

export function Bento() {
  return (
    <Section id="competences">
      <div className="flex items-end justify-between gap-6">
        <div>
          <TextBlurIn
            as="h2"
            className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
          >
            Compétences & points forts
          </TextBlurIn>
          <Reveal delayMs={120}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Une base solide orientée terrain, avec une progression structurée
              vers la sécurité applicative et le pentesting.
            </p>
          </Reveal>
        </div>
        <Reveal delayMs={160}>
          <div className="hidden items-center gap-2 rounded-3xl border border-stroke bg-surface px-4 py-2 text-sm font-semibold text-ink/80 shadow-premium backdrop-blur-md lg:inline-flex">
            <Sparkles className="h-4 w-4 text-accent" />
            Bento premium · micro-interactions
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-stroke bg-surface shadow-premium backdrop-blur-md">
            <div className="absolute inset-0 bg-[radial-gradient(900px_360px_at_30%_20%,rgba(74,99,255,0.20),transparent_60%),radial-gradient(900px_360px_at_80%_80%,rgba(242,183,5,0.14),transparent_55%)]" />
            <div className="relative p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Highlight visuel
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-ink">
                Une approche “lab → projet → restitution”
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                Je transforme les exercices (CTF, labs, cours) en prototypes
                concrets, puis je documente ce qui fonctionne, ce qui ne
                fonctionne pas, et ce que j’améliore.
              </p>
              <div className="mt-6 relative aspect-[16/9] overflow-hidden rounded-3xl border border-stroke">
                <Image
                  src={motionVisual}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 720px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(245,245,240,0.78),transparent_55%)]" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:col-span-5">
          {skills.slice(0, 3).map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delayMs={80 + idx * 90}>
                <div className="group h-full rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md transition hover:scale-[1.02]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                        Skill
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-ink">
                        {s.title}
                      </h4>
                    </div>
                    <div className="rounded-3xl border border-stroke bg-bg/40 p-3 text-secondary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{s.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-3xl border border-stroke bg-bg/40 px-3 py-1 text-xs font-semibold text-ink/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="h-full rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md transition hover:scale-[1.02]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Soft skills
                </p>
                <h4 className="mt-2 text-xl font-semibold text-ink">
                  Organisation & gestion du stress
                </h4>
              </div>
              <div className="rounded-3xl border border-stroke bg-bg/40 p-3 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              Habitué à suivre des procédures, à être fiable sous pression et à
              livrer rapidement (expériences en environnement exigeant).
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delayMs={100}>
          <div className="h-full rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Langues
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { k: "Anglais", v: "A2" },
                { k: "Espagnol", v: "Débutant" },
              ].map((l) => (
                <div
                  key={l.k}
                  className="rounded-3xl border border-stroke bg-bg/40 px-5 py-4 transition hover:scale-[1.02]"
                >
                  <p className="text-sm font-semibold text-ink">{l.k}</p>
                  <p className="mt-1 text-sm text-muted">{l.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

