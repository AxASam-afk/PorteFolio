import Link from "next/link";
import { projects, type Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";

function Card({ project, className, accent }: { project: Project; className?: string; accent?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[24px] p-7 transition ${
        accent ? "bg-gradient-to-br from-[#6667ff] to-[#3b3cc8]" : "glass hover:border-[#7c7dff]/50"
      } ${className ?? ""}`}
    >
      {accent && <div aria-hidden="true" className="stars pointer-events-none absolute inset-0 opacity-70" />}
      <div className="relative flex flex-col gap-3">
        <div className={`text-xs ${accent ? "text-white/80" : "text-accent-text"}`}>{project.category}</div>
        <h3 className="font-display text-[26px] font-medium leading-tight">
          {/* Le lien couvre toute la carte */}
          <Link href={`/projets/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className={`text-[15px] leading-relaxed ${accent ? "text-white/85" : "text-muted"}`}>{project.summary}</p>
      </div>
      {project.visual && !accent && (
        <div className="relative">
          <ProjectVisual visual={project.visual} />
        </div>
      )}
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2" aria-label="Outils">
          {project.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-3 py-1 text-xs ${accent ? "bg-white/15 text-white" : "bg-white/5 text-muted"}`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <span
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            accent ? "bg-white text-[#3b3cc8]" : "btn-glow"
          }`}
        >
          Découvrir
        </span>
      </div>
    </article>
  );
}

export function Projects() {
  const [first, second, third, fourth] = projects;
  return (
    <section id="projets" className="mx-auto max-w-[1160px] px-6 pt-28 sm:px-8">
      <div className="text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,2.8rem)] font-medium tracking-[-0.01em]">Mes projets</h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
          Chaque projet a sa page détaillée : contexte, ce que j&apos;ai fait, résultats et sources.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {first && <Card project={first} accent className="md:min-h-[360px]" />}
        {second && <Card project={second} className="md:col-span-2" />}
        {third && <Card project={third} className="md:col-span-2" />}
        {fourth && <Card project={fourth} />}
      </div>
    </section>
  );
}
