import { ContactCta } from "@/components/ContactCta";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { SkillsStrip } from "@/components/SkillsStrip";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <SkillsStrip />
        <Projects />
        <Journey />
        <ContactCta />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-3 px-6 py-6 font-mono text-[13px] text-faint sm:px-8">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href={site.github} className="hover:text-ink">
            github.com/AxASam-afk
          </a>
        </div>
      </footer>
    </>
  );
}
