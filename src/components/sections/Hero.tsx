import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { EntropyBackground } from "@/components/ui/entropy-background";
import { cn } from "@/lib/cn";

const heroImage = "/images/hero-bg.svg";

function Pill({
  icon,
  children,
  href,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-3xl px-4 py-2",
        "bg-surface-strong backdrop-blur-md border border-stroke shadow-premium",
        "text-ink/90 hover:text-ink transition",
        "hover:scale-[1.02] active:scale-[0.99]",
      )}
    >
      <span className="text-secondary">{icon}</span>
      <span className="text-sm font-medium">{children}</span>
      <ArrowDownRight className="h-4 w-4 text-ink/50 translate-x-0 transition group-hover:translate-x-0.5 group-hover:text-ink/80" />
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <EntropyBackground className="absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_30%_20%,rgba(74,99,255,0.28),transparent_60%),radial-gradient(900px_500px_at_70%_30%,rgba(242,183,5,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-bg/55 backdrop-blur-[2px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-3xl border border-stroke bg-surface px-4 py-2 shadow-premium backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm font-medium text-ink/80">
                  Bordeaux, Toulouse et Paris · Disponible pour projets &
                  alternance
                </p>
              </div>
            </Reveal>

            <div className="mt-6 space-y-5">
              <TextBlurIn
                as="h1"
                className="text-[3rem] leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl lg:text-7xl"
              >
                Sécuriser. Construire. Apprendre vite.
              </TextBlurIn>

              <Reveal delayMs={120}>
                <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
                  Samuel Lepinay, étudiant en cybersécurité & informatique. Je
                  progresse sur le pentesting, le développement sécurisé et la
                  gestion de systèmes via des projets concrets, des CTF et des
                  expériences terrain.
                </p>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#projets"
                    className={cn(
                      "group inline-flex items-center justify-center gap-3 rounded-3xl px-6 py-3",
                      "bg-primary text-bg shadow-premium",
                      "transition hover:scale-[1.02] active:scale-[0.99]",
                    )}
                  >
                    Voir mes projets
                    <ArrowDownRight className="h-5 w-5 translate-x-0 transition group-hover:translate-x-0.5" />
                  </Link>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Pill href="/cv.pdf" icon={<Download className="h-4 w-4" />}>
                      Télécharger mon CV
                    </Pill>
                    <Pill
                      href="mailto:samuellepinay54@gmail.com"
                      icon={<Mail className="h-4 w-4" />}
                    >
                      samuellepinay54@gmail.com
                    </Pill>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={160}>
              <div className="relative overflow-hidden rounded-3xl border border-stroke bg-surface shadow-premium backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(800px_240px_at_30%_20%,rgba(74,99,255,0.25),transparent_60%),radial-gradient(600px_220px_at_70%_70%,rgba(242,183,5,0.20),transparent_55%)]" />
                <div className="relative p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Focus actuel
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-ink">
                    Sécurité applicative & bonnes pratiques
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Objectif: construire des applications fiables, comprendre
                    les vulnérabilités, et documenter mes apprentissages.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { k: "CTF / Root-Me", v: "Routine + writeups" },
                      { k: "Secure coding", v: "Auth · intégrité · logs" },
                      { k: "Systèmes", v: "Support · SI · tickets" },
                      { k: "Dev", v: "Python · Java · web" },
                    ].map((item) => (
                      <div
                        key={item.k}
                        className="rounded-3xl border border-stroke bg-bg/40 px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {item.k}
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">
                          {item.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

