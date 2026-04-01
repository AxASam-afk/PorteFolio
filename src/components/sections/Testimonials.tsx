import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";

const testimonials = [
  {
    text: "Sérieux, autonome et très rigoureux dans l’exécution. Il apprend vite et documente bien.",
    author: "Collaborateur",
    role: "Environnement SI",
  },
  {
    text: "Bonne capacité à suivre des procédures et à gérer le stress. Communication claire avec les utilisateurs.",
    author: "Encadrant",
    role: "Support & maintenance",
  },
  {
    text: "Curieux et analytique: il cherche à comprendre le “pourquoi” avant d’agir, et ça se voit dans ses projets.",
    author: "Pair",
    role: "Projets techniques",
  },
  {
    text: "Fiable, déterminé, et orienté apprentissage. Une progression visible sur la sécurité applicative.",
    author: "Mentor",
    role: "Parcours cybersécurité",
  },
];

function Track() {
  return (
    <div className="flex w-max gap-4 pr-4">
      {testimonials.map((t, i) => (
        <figure
          key={`${t.author}-${i}`}
          className="w-[320px] rounded-3xl border border-stroke bg-surface p-6 shadow-premium backdrop-blur-md"
        >
          <div className="flex items-start justify-between gap-4">
            <Quote className="h-5 w-5 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Témoignage
            </p>
          </div>
          <blockquote className="mt-3 text-sm leading-6 text-ink/85">
            “{t.text}”
          </blockquote>
          <figcaption className="mt-5">
            <p className="text-sm font-semibold text-ink">{t.author}</p>
            <p className="mt-1 text-xs font-medium text-muted">{t.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="temoignages">
      <TextBlurIn
        as="h2"
        className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
      >
        Témoignages
      </TextBlurIn>
      <Reveal delayMs={120}>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Une présentation “magazine” minimaliste, avec un défilement doux pour
          donner du rythme à la page.
        </p>
      </Reveal>

      <Reveal delayMs={180}>
        <div className="mt-10 overflow-hidden rounded-3xl border border-stroke bg-bg/40 p-4 shadow-premium">
          <div className="flex gap-4">
            <div className="animate-marquee flex gap-4">
              <Track />
              <Track />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

