import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section id="contact" className="relative mt-28 overflow-hidden pb-40 pt-24">
      {/* Faisceau qui monte depuis le bas */}
      <div aria-hidden="true" className="stars animate-twinkle pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[340px] -translate-x-1/2 bg-gradient-to-t from-[#7c7dff]/60 via-[#5b5cf0]/20 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[900px] -translate-x-1/2 rounded-full bg-[#5b5cf0]/30 blur-[100px]"
      />
      <div className="relative mx-auto flex max-w-[800px] flex-col items-center px-6 text-center">
        <div className="font-display text-xl font-medium">
          samuel<span className="text-accent-text">.</span>lepinay
        </div>
        <h2 className="mt-5 bg-gradient-to-b from-white to-[#c3c4ff] bg-clip-text font-display text-[clamp(2.5rem,6vw,4rem)] font-medium leading-tight text-transparent">
          Travaillons ensemble
        </h2>
        <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-muted">
          Vous cherchez un alternant en support IT, réseau ou cybersécurité ? Écrivez-moi, je réponds rapidement.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="btn-glow mt-10 rounded-full px-10 py-5 text-lg font-medium transition hover:brightness-110"
        >
          M&apos;écrire un email
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-5 py-2.5">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-5 py-2.5">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
