import Link from "next/link";
import { projects, type Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";

function ProjectText({ project, index, large }: { project: Project; index: number; large?: boolean }) {
  return (
    <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3.5">
      <div className="font-mono text-[13px] text-accent-text">
        {String(index + 1).padStart(2, "0")} — {project.category}
      </div>
      <h3 className={`font-display font-bold tracking-[-0.02em] ${large ? "text-[34px] leading-tight" : "text-[28px]"}`}>
        {/* Le lien couvre toute la carte grâce à after:absolute */}
        <Link href={`/projets/${project.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
          {project.title}
        </Link>
      </h3>
      <p className="text-[15px] leading-relaxed text-muted sm:text-base">{project.summary}</p>
      <ul className="flex flex-wrap gap-2" aria-label="Outils">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-lg bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>
      <span className="text-[15px] font-semibold text-accent-text">Lire le détail du projet →</span>
    </div>
  );
}

const card =
  "relative rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-accent focus-within:border-accent";

export function Projects() {
  const featured = projects.filter((p) => p.visual);
  const others = projects.filter((p) => !p.visual);

  return (
    <section id="projets" className="mx-auto max-w-[1160px] px-6 pb-10 pt-24 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(2.5rem,6vw,3.5rem)] font-bold tracking-[-0.03em]">Projets choisis</h2>
        <span className="font-mono text-sm text-faint">
          {String(projects.length).padStart(2, "0")} réalisations
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {featured.map((project) => (
          <article key={project.slug} className={`${card} flex flex-wrap items-center gap-8`}>
            <ProjectText project={project} index={projects.indexOf(project)} large />
            <ProjectVisual visual={project.visual!} />
          </article>
        ))}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {others.map((project) => (
            <article key={project.slug} className={card}>
              <ProjectText project={project} index={projects.indexOf(project)} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
