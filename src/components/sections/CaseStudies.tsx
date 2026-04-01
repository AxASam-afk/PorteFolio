import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";

type Step = { title: string; text: string };
type CaseStudy = {
  title: string;
  subtitle: string;
  image: string;
  steps: Step[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "App sécurisée de gestion de produits",
    subtitle: "Du besoin fonctionnel à un socle secure coding.",
    image: "/images/case/secure-app.svg",
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
    title: "Dashboard CTF & writeups",
    subtitle: "S’entraîner, tracer, apprendre, restituer.",
    image: "/images/case/ctf-story.svg",
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
          Deux projets majeurs racontés comme une mini étude de cas: problème,
          solution, résultat — avec une timeline animée.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((cs, idx) => (
          <Reveal key={cs.title} delayMs={160 + idx * 120}>
            <article className="overflow-hidden rounded-3xl border border-stroke bg-surface shadow-premium backdrop-blur-md">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cs.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 520px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(245,245,240,0.88),transparent_60%)]" />
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Story
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.01em] text-ink">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{cs.subtitle}</p>

                <div className="mt-7 space-y-5">
                  {cs.steps.map((s, stepIdx) => (
                    <Reveal
                      key={s.title}
                      delayMs={220 + stepIdx * 110}
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

                <div className="mt-8 inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-semibold text-ink/80">
                  Explorer en détail <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

