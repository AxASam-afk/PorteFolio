import type { Project } from "@/data/site";

export function ProjectDiagram({ diagram }: { diagram: Project["diagram"] }) {
  return (
    <section aria-labelledby="schema-title" className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#14143a] to-[#09090f] p-6 sm:p-10">
      <div aria-hidden="true" className="stars pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-text">Comment ça marche</div>
        <h2 id="schema-title" className="mt-2 font-display text-[clamp(1.5rem,3vw,2rem)] font-medium">
          {diagram.title}
        </h2>

        <ol className="mt-8 flex flex-col gap-4 lg:flex-row lg:gap-0">
          {diagram.steps.map((step, i) => (
            <li key={step.label} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
              <div className="glass flex flex-1 flex-col gap-2 rounded-2xl bg-bg/60 p-5">
                <div className="flex items-center gap-2">
                  <span className="btn-glow flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs">
                    {i + 1}
                  </span>
                  <span className="font-mono text-[11px] text-faint">{step.actor}</span>
                </div>
                <h3 className="font-display text-base font-medium">{step.label}</h3>
                <p className="text-[13px] leading-relaxed text-muted">{step.detail}</p>
              </div>
              {i < diagram.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-auto h-4 w-px bg-[#a5a6ff]/60 lg:mx-0 lg:my-auto lg:h-px lg:w-4"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CourseNotions({ notions }: { notions: Project["notions"] }) {
  return (
    <section aria-labelledby="notions-title">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-text">Mes cours</div>
      <h2 id="notions-title" className="mt-2 font-display text-[clamp(1.5rem,3vw,2rem)] font-medium">
        Les notions utilisées
      </h2>
      <p className="mt-2 max-w-[640px] text-[15px] text-muted">
        Ce que ce projet m&apos;a fait appliquer, résumé depuis mes notes de cours. Chaque fiche renvoie vers le cours complet.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {notions.map((n) => (
          <li key={n.name} className="glass flex flex-col gap-3 rounded-2xl p-6">
            <h3 className="font-display text-lg font-medium">{n.name}</h3>
            <p className="flex-1 text-[15px] leading-relaxed text-muted">{n.explanation}</p>
            <a
              href={n.source.href}
              target="_blank"
              rel="noreferrer"
              className="self-start text-sm font-medium text-accent-text hover:underline"
            >
              {n.source.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
