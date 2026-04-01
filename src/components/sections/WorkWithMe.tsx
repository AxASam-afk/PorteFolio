import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";
import { cn } from "@/lib/cn";

const ctaBg = "/images/cta-bg.svg";

const values = [
  "Rigueur & restitution claire",
  "Approche progressive (lab → prod)",
  "Sens des procédures & fiabilité",
];

export function WorkWithMe() {
  return (
    <Section id="travaillons-ensemble" className="pt-0">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-stroke bg-surface shadow-premium backdrop-blur-md">
          <div className="absolute inset-0">
            <Image
              src={ctaBg}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 92vw, 1200px"
            />
            <div className="absolute inset-0 bg-[radial-gradient(900px_360px_at_30%_20%,rgba(74,99,255,0.24),transparent_60%),radial-gradient(900px_420px_at_80%_80%,rgba(242,183,5,0.16),transparent_55%)]" />
            <div className="absolute inset-0 bg-bg/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <TextBlurIn
                  as="h2"
                  className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
                >
                  Travaillons ensemble
                </TextBlurIn>
                <Reveal delayMs={120}>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    Si tu cherches un profil motivé, sérieux et en progression,
                    je suis partant pour contribuer à des projets concrets — en
                    cybersécurité, dev sécurisé ou support SI.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <div className="grid gap-3">
                  {values.map((v, i) => (
                    <Reveal key={v} delayMs={160 + i * 90}>
                      <div className="flex items-center gap-3 rounded-3xl border border-stroke bg-surface-strong px-5 py-4 shadow-premium backdrop-blur-md">
                        <span className="rounded-3xl border border-stroke bg-bg/40 p-2 text-secondary">
                          <Check className="h-4 w-4" />
                        </span>
                        <p className="text-sm font-semibold text-ink/85">{v}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delayMs={460}>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="#contact"
                      className={cn(
                        "group inline-flex items-center justify-center gap-3 rounded-3xl px-6 py-3",
                        "bg-secondary text-bg shadow-premium",
                        "transition hover:scale-[1.02] active:scale-[0.99]",
                      )}
                    >
                      Me contacter
                      <ArrowDownRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      href="/cv.pdf"
                      className="inline-flex items-center justify-center rounded-3xl border border-stroke bg-bg/40 px-6 py-3 text-sm font-semibold text-ink shadow-premium transition hover:scale-[1.02]"
                    >
                      Télécharger le CV
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

