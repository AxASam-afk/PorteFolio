import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Samuel Lepinay`, description: project.summary };
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-t border-line-2 pt-6">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted sm:text-base">
            <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="relative border-b border-line">
        <div aria-hidden="true" className="stars pointer-events-none absolute inset-0 opacity-70" />
        <SiteHeader />
        <div className="relative mx-auto flex max-w-[1160px] flex-col gap-6 px-6 pb-16 pt-10 sm:px-8">
          <Link href="/#projets" className="self-start font-mono text-sm text-faint hover:text-ink">
            ← Tous les projets
          </Link>
          <div className="font-mono text-[13px] text-accent-text">
            {String(index + 1).padStart(2, "0")} — {project.category}
          </div>
          <h1 className="max-w-[900px] font-display text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="max-w-[720px] text-lg leading-relaxed text-muted">{project.summary}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Outils">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-lg border border-line-2 bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="mx-auto flex max-w-[1160px] flex-wrap gap-12 px-6 py-16 sm:px-8">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-10">
          <section>
            <h2 className="font-display text-2xl font-semibold">Contexte</h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">{project.context}</p>
          </section>

          {project.image && (
            <figure className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                className="mx-auto h-auto w-full max-w-[760px]"
              />
              <figcaption className="border-t border-line bg-surface px-4 py-3 font-mono text-xs text-faint">
                {project.image.caption}
              </figcaption>
            </figure>
          )}

          <Block title="Ce que j'ai fait" items={project.work} />
          <Block title="Résultats" items={project.results} />
        </div>

        <aside className="flex min-w-0 flex-[1_1_280px] flex-col gap-4 self-start glass rounded-3xl p-7">
          <h2 className="font-display text-xl font-semibold">Ressources</h2>
          <ul className="flex flex-col gap-3">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-line-2 px-4 py-3 text-[15px] font-semibold text-accent-text transition-colors hover:border-accent"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <div className="mx-auto max-w-[1160px] px-6 pb-20 sm:px-8">
        <Link
          href={`/projets/${next.slug}`}
          className="btn-glow flex flex-wrap items-center justify-between gap-4 rounded-3xl p-8 transition hover:brightness-110"
        >
          <span className="font-mono text-sm">Projet suivant</span>
          <span className="font-display text-3xl font-medium">{next.title} →</span>
        </Link>
      </div>
      <SiteFooter />
    </>
  );
}
