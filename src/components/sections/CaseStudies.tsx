import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";
import { InteractiveTravelCard } from "@/components/ui/3d-card";

type Step = { title: string; text: string };
type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  context: string;
  stack: string[];
  extraContent?: string;
  steps: Step[];
};

function TimelinePreview({ steps }: { steps: Step[] }) {
  return (
    <div className="rounded-2xl border border-stroke bg-bg/40 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        Aperçu timeline
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {steps.map((s, idx) => (
          <div key={`${s.title}-${idx}`} className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold text-ink/90">{s.title}</span>
            {idx !== steps.length - 1 ? (
              <span className="text-xs text-muted">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

const caseStudies: CaseStudy[] = [
  {
    slug: "app-gestion-produits-securisee",
    title: "App sécurisée de gestion de produits",
    subtitle: "Du besoin fonctionnel à un socle secure coding.",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
    context:
      "Projet orienté fiabilité applicative pour renforcer un flux CRUD exposé aux erreurs métier et aux abus.",
    stack: ["Auth", "Validation", "Logs", "Secure coding"],
    extraContent: `Décisions clés

Mise en place d'une séparation claire des responsabilités (contrôleurs, services, règles métier), avec une validation systématique des entrées.

Points de sécurité

Authentification robuste, contrôle d'accès explicite par action, journalisation des opérations sensibles et garde-fous d'intégrité.

Bénéfices métier

Des comportements plus prévisibles, une maintenance facilitée et un socle réutilisable pour accélérer les évolutions.`,
    steps: [
      {
        title: "Problème",
        text: "Un CRUD simple devient vite fragile sans authentification, validation et traçabilité.",
      },
      {
        title: "Solution",
        text: "Mettre en place des contrôles cohérents (auth, règles, intégrité, logs) et une structure claire.",
      },
      {
        title: "Résultat",
        text: "Une base réutilisable et plus sûre, avec un comportement prévisible et une restitution lisible.",
      },
    ],
  },
  {
    slug: "dashboard-ctf-writeups",
    title: "Dashboard CTF & writeups",
    subtitle: "S’entraîner, tracer, apprendre, restituer.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    context:
      "Projet personnel pour rendre l'apprentissage cybersécurité mesurable et plus régulier dans le temps.",
    stack: ["CTF", "Organisation", "Méthode", "Restitution"],
    extraContent: `Décisions clés

Structuration des notes autour d'un format unique (reconnaissance, hypothèses, tests, conclusion) et catégorisation par tags.

Points d'usage

Recherche plus rapide des anciens cas, visibilité claire sur la progression et préparation facilitée des restitutions.

Bénéfices long terme

Moins de perte d'information, meilleure mémorisation des acquis et boucle d'amélioration continue.`,
    steps: [
      {
        title: "Problème",
        text: "Les notes, solutions et tags finissent dispersés: dur de progresser régulièrement.",
      },
      {
        title: "Solution",
        text: "Centraliser la progression et structurer les writeups autour d’une méthode (reco → test → conclusion).",
      },
      {
        title: "Résultat",
        text: "Une routine plus fluide, des acquis mieux mémorisés et des restitutions plus rapides.",
      },
    ],
  },
];

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <TextBlurIn
        as="h2"
        className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
      >
        Case studies
      </TextBlurIn>
      <Reveal delayMs={120}>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Deux projets majeurs racontés comme une mini étude de cas :
          problème, solution, résultat — avec une timeline animée.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((cs, idx) => (
          <Reveal key={cs.title} delayMs={160 + idx * 120}>
            <article className="overflow-hidden rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Story
                </p>
                <div className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink/80">
                  Détails au verso <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-4">
                <TimelinePreview steps={cs.steps} />
                <InteractiveTravelCard
                  title={cs.title}
                  subtitle={`${cs.subtitle} • Problème → Solution → Résultat`}
                  imageUrl={cs.imageUrl}
                  className="mx-auto mt-3 w-full max-w-none"
                  details={
                    <>
                      <p className="text-sm leading-6 text-muted">{cs.context}</p>

                      <div className="mt-5 space-y-4">
                        {cs.steps.map((s, stepIdx) => (
                          <Reveal
                            key={`${cs.slug}-${s.title}`}
                            delayMs={140 + stepIdx * 100}
                            className="opacity-100 scale-100 translate-y-0"
                          >
                            <div className="grid grid-cols-[24px_1fr] gap-4">
                              <div className="flex flex-col items-center">
                                <div className="h-3 w-3 rounded-full bg-secondary" />
                                {stepIdx !== cs.steps.length - 1 ? (
                                  <div className="mt-2 h-full w-px bg-stroke" />
                                ) : null}
                              </div>
                              <div className="pb-1">
                                <p className="text-sm font-semibold text-ink">
                                  {s.title}
                                </p>
                                <p className="mt-1 text-sm leading-6 text-muted">
                                  {s.text}
                                </p>
                              </div>
                            </div>
                          </Reveal>
                        ))}
                      </div>

                      {cs.extraContent ? (
                        <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/90">
                          {cs.extraContent.split(/\n\n+/).map((block, i) => {
                            const lines = block.trim().split("\n");
                            const head = lines[0] ?? "";
                            const rest = lines.slice(1).join("\n").trim();
                            return (
                              <div key={i}>
                                <p className="font-semibold text-ink">{head}</p>
                                {rest ? (
                                  <p className="mt-1.5 whitespace-pre-line">
                                    {rest}
                                  </p>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      ) : null}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {cs.stack.map((tag) => (
                          <span
                            key={`${cs.slug}-${tag}`}
                            className="rounded-3xl border border-stroke bg-bg/40 px-3 py-1 text-xs font-semibold text-ink/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  }
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

