import Link from "next/link";
import { projects, type Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <article className="glass group relative flex flex-col gap-5 rounded-[24px] p-4 transition hover:-translate-y-1 hover:border-[#7c7dff]/50 hover:shadow-[0_20px_60px_-20px_rgba(91,92,240,0.5)]">
      <ProjectVisual slug={project.slug} />
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="text-accent-text">{project.category}</span>
          <span className="font-mono text-faint">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="font-display text-[22px] font-medium leading-tight">
          {/* Le lien couvre toute la carte */}
          <Link href={`/projets/${project.slug}`} className="after:absolute after:inset-0 after:rounded-[24px]">
            {project.title}
          </Link>
        </h3>
        <p className="text-[15px] leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <ul className="flex flex-wrap gap-2" aria-label="Outils">
            {project.tags.slice(0, 3).map((tag) => (
              <li key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
          <span className="text-sm font-medium text-accent-text transition group-hover:translate-x-1">Découvrir →</span>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-[1160px] px-6 pt-28 sm:px-8">
      <div className="text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,2.8rem)] font-medium tracking-[-0.01em]">Mes projets</h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
          Chaque projet a sa page détaillée : contexte, ce que j&apos;ai fait, résultats et sources.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Card key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
