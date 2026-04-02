"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Link2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TextBlurIn } from "@/components/TextBlurIn";
import { Section } from "@/components/sections/Section";
import { cn } from "@/lib/cn";

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "success">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
    window.setTimeout(() => setStatus("idle"), 2600);
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <TextBlurIn
            as="h2"
            className="text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl"
          >
            Contact
          </TextBlurIn>
          <Reveal delayMs={120}>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Un message suffit. Je réponds rapidement et je peux partager un CV
              ou des détails sur mes projets.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3">
            {[
              {
                icon: <Mail className="h-4 w-4" />,
                label: "Email",
                value: "samuellepinay54@gmail.com",
                href: "mailto:samuellepinay54@gmail.com",
              },
              {
                icon: <Phone className="h-4 w-4" />,
                label: "Téléphone",
                value: "+33 6 29 86 73 87",
                href: "tel:+33629867387",
              },
              {
                icon: <MapPin className="h-4 w-4" />,
                label: "Localisation",
                value: "Bordeaux, Toulouse et Paris",
                href: "#",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delayMs={160 + i * 90}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center justify-between gap-4 rounded-3xl border border-stroke bg-surface px-5 py-4 shadow-premium backdrop-blur-md",
                    "transition hover:scale-[1.02]",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-3xl border border-stroke bg-bg/40 p-2 text-secondary">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-ink">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink/80" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={440}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/samuel-lepinay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-5 py-3 text-sm font-semibold text-ink shadow-premium transition hover:scale-[1.02]"
              >
                <Link2 className="h-4 w-4 text-secondary" />
                LinkedIn
              </Link>
              <Link
                href="mailto:samuellepinay54@gmail.com"
                className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-bg shadow-premium transition hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                Écrire un email
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <div className="rounded-3xl border border-stroke bg-surface p-7 shadow-premium backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Lead capture
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.01em] text-ink">
                Envoyer un message
              </h3>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-sm font-semibold text-ink/85">
                    Nom
                  </span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-3xl border border-stroke bg-bg/40 px-4 py-3 text-sm text-ink shadow-premium outline-none focus:ring-2 focus:ring-secondary/30"
                    placeholder="Ton nom"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-ink/85">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-3xl border border-stroke bg-bg/40 px-4 py-3 text-sm text-ink shadow-premium outline-none focus:ring-2 focus:ring-secondary/30"
                    placeholder="votre@email.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-ink/85">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-3xl border border-stroke bg-bg/40 px-4 py-3 text-sm text-ink shadow-premium outline-none focus:ring-2 focus:ring-secondary/30"
                    placeholder="Décrivez votre besoin (projet, alternance, question...)"
                  />
                </label>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-secondary px-6 py-3 text-sm font-semibold text-bg shadow-premium transition hover:scale-[1.02] active:scale-[0.99]"
                >
                  Envoyer
                  <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div
                  aria-live="polite"
                  className={cn(
                    "flex items-center gap-2 rounded-3xl border border-stroke bg-bg/40 px-4 py-3 text-sm font-semibold text-ink/80",
                    status === "success"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1 pointer-events-none",
                    "transition duration-500 ease-out",
                  )}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Message envoyé. Merci !
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

