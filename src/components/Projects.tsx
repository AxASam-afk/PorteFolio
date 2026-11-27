import { projects, type Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";

function ProjectText({ project, index, large }: { project: Project; index: number; large?: boolean }) {
  return (
    <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3.5">
      <div className="font-mono text-[13px] text-accent-text">
        {String(index + 1).padStart(2, "0")} — {project.category}
      </div>
      <h3 className={`font-display font-bold tracking-[-0.02em] ${large ? "text-[34px] leading-tight" : "text-[28px]"}`}>
        {project.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-muted sm:text-base">{project.description}</p>
      {project.link && (
        <a
          href={project.link.href}
          target={project.link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="self-start text-[15px] font-semibold text-accent-text hover:underline"
        >
          {project.link.label} →
        </a>
      )}
    </div>
  );
}

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
          <article
            key={project.id}
            className="flex flex-wrap items-center gap-8 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-line-2"
          >
            <ProjectText project={project} index={projects.indexOf(project)} large />
            <ProjectVisual visual={project.visual!} />
          </article>
        ))}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {others.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-line-2"
            >
              <ProjectText project={project} index={projects.indexOf(project)} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
