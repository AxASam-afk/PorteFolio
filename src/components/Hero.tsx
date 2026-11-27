import { nav, site } from "@/data/site";

export function Hero() {
  return (
    <section className="dot-grid border-b border-line">
      <header className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5 font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent font-display font-bold text-on-accent">
            {site.initials}
          </span>
          {site.name}
        </a>
        <nav aria-label="Navigation principale" className="flex flex-wrap gap-6 text-sm">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 px-6 pb-24 pt-16 sm:px-8 sm:pt-[72px]">
        <span className="animate-rise inline-flex items-center gap-2.5 self-start rounded-full border border-line-2 bg-surface px-3.5 py-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
          {site.status}
        </span>

        <h1 className="animate-rise max-w-[1000px] font-display text-[clamp(3.25rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.045em] [animation-delay:80ms]">
          {site.heroTitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block text-accent-text">{site.heroAccent}</span>
        </h1>

        <div className="animate-rise flex flex-wrap items-end justify-between gap-10 [animation-delay:160ms]">
          <p className="max-w-[520px] flex-[1_1_360px] text-lg leading-relaxed text-muted sm:text-[19px]">
            {site.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projets"
              className="rounded-xl bg-accent px-6 py-[15px] text-[15px] font-semibold text-on-accent transition hover:brightness-110"
            >
              Voir les projets ↓
            </a>
            <a
              href={site.cvUrl}
              className="rounded-xl border border-line-2 bg-surface px-6 py-[15px] text-[15px] font-semibold text-ink transition hover:border-faint"
            >
              CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
