import { skills } from "@/data/site";

export function SkillsStrip() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
      <p className="text-center text-sm text-faint">Les outils que j&apos;utilise au quotidien</p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 font-display text-xl font-semibold text-ink/90 sm:text-2xl">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
