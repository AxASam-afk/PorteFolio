import { site } from "@/data/site";
import { Dashboard } from "./Dashboard";
import { SiteHeader } from "./SiteHeader";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20">
      {/* Étoiles et faisceau lumineux */}
      <div aria-hidden="true" className="stars animate-twinkle pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[900px] w-[260px] rotate-[-35deg] bg-gradient-to-b from-transparent via-[#7c7dff]/35 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[520px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#5b5cf0]/20 blur-[120px]"
      />

      <SiteHeader />

      <div className="relative mx-auto flex max-w-[1160px] flex-col items-center px-6 pt-20 text-center sm:px-8">
        <span className="animate-rise glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] text-muted">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
          {site.status}
        </span>
        <h1 className="animate-rise mt-7 max-w-[820px] font-display text-[clamp(2.6rem,6.5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.02em] [animation-delay:80ms]">
          <span className="text-gradient">{site.heroGradient}</span> {site.heroRest}
        </h1>
        <p className="animate-rise mt-6 max-w-[600px] text-base leading-relaxed text-muted sm:text-lg [animation-delay:160ms]">
          {site.intro}
        </p>
        <div className="animate-rise mt-9 flex flex-wrap justify-center gap-3 [animation-delay:240ms]">
          <a href="#projets" className="btn-glow rounded-full px-7 py-3.5 text-[15px] font-medium transition hover:brightness-110">
            Voir mes projets
          </a>
          <a href={site.cvUrl} className="btn-ghost rounded-full px-7 py-3.5 text-[15px] font-medium transition hover:bg-white/10">
            Télécharger le CV
          </a>
        </div>

        <Dashboard />
      </div>
    </section>
  );
}
