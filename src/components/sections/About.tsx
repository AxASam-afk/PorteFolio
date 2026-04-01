import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";

const portrait = "/images/portrait.svg";

export function About() {
  return (
    <Section id="a-propos">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-stroke bg-surface shadow-premium backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(900px_340px_at_30%_10%,rgba(74,99,255,0.18),transparent_60%),radial-gradient(800px_320px_at_80%_80%,rgba(242,183,5,0.12),transparent_55%)]" />
              <div className="relative p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-stroke">
                  <Image
                    src={portrait}
                    alt="Portrait de Samuel Lepinay"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Samuel Lepinay
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Étudiant en cybersécurité & informatique
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-2 text-sm font-medium text-ink/80">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Bordeaux · Toulouse
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <TextBlurIn
            as="h2"
            className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
          >
            À propos
          </TextBlurIn>

          <Reveal delayMs={120}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Étudiant en cybersécurité, motivé par l’envie d’apprendre et de
              progresser dans les domaines du pentesting, du développement
              sécurisé et de la gestion de systèmes. J’aime relever des défis,
              travailler en autonomie et créer mes propres projets pour
              améliorer mes compétences techniques. Actuellement à la recherche
              d’opportunités pour continuer à monter en compétences et
              participer à des projets concrets.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Compétences clés",
                desc: "Pentesting · sécurité applicative · Python/Java · systèmes.",
              },
              {
                title: "Expérience",
                desc: "Stage SI (Adera) · support · tickets · maintenance · sensibilisation.",
              },
              {
                title: "Valeur ajoutée",
                desc: "Curieux, analytique, orienté apprentissage, rigoureux et autonome.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delayMs={160 + i * 90}>
                <div className="h-full rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md transition hover:scale-[1.02]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink/85">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={440}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="https://www.linkedin.com/in/samuel-lepinay/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-3xl border border-stroke bg-bg/40 px-6 py-3 text-sm font-semibold text-ink shadow-premium transition hover:scale-[1.02]"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4 text-ink/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-3xl bg-secondary px-6 py-3 text-sm font-semibold text-bg shadow-premium transition hover:scale-[1.02] active:scale-[0.99]"
              >
                Me contacter
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

