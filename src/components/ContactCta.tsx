import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1160px] px-6 pb-24 pt-14 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-8 rounded-[28px] bg-accent p-8 text-on-accent sm:p-14">
        <h2 className="flex-[1_1_420px] font-display text-[clamp(2.75rem,6vw,3.75rem)] font-bold leading-none tracking-[-0.03em]">
          On travaille
          <br />
          ensemble ?
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-xl bg-bg px-6 py-[15px] text-[15px] font-semibold text-ink transition hover:opacity-90"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border-[1.5px] border-on-accent px-5 py-[15px] text-[15px] font-semibold transition hover:bg-on-accent/10"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border-[1.5px] border-on-accent px-5 py-[15px] text-[15px] font-semibold transition hover:bg-on-accent/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
