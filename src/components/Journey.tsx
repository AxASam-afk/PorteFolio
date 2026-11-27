import { journey, languages } from "@/data/site";

export function Journey() {
  return (
    <section id="parcours" className="mx-auto max-w-[1160px] px-6 py-14 sm:px-8">
      <h2 className="sr-only">Parcours</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {journey.map((step) => (
          <div key={step.title} className="border-t border-line-2 pt-6">
            <div className="font-mono text-[13px] text-faint">{step.period}</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-[13px] text-faint">{languages}</p>
    </section>
  );
}
