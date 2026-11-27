import { journey, languages } from "@/data/site";

export function Journey() {
  return (
    <section id="parcours" className="mx-auto max-w-[1000px] px-6 pt-28 sm:px-8">
      <div className="text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,2.8rem)] font-medium tracking-[-0.01em]">Parcours</h2>
        <p className="mt-4 text-[15px] text-muted">{languages}</p>
      </div>
      <ol className="relative mt-14 flex flex-col gap-4 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-px before:bg-gradient-to-b before:from-[#7c7dff] before:to-transparent">
        {journey.map((step, i) => (
          <li key={step.title} className="relative flex gap-5">
            <span
              aria-hidden="true"
              className={`relative mt-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                i === 0 ? "btn-glow" : "glass bg-bg"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="glass flex-1 rounded-2xl p-5">
              <div className="font-mono text-xs text-accent-text">{step.period}</div>
              <h3 className="mt-1.5 font-display text-lg font-medium">{step.title}</h3>
              {step.detail && <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
