import { ContactCta } from "@/components/ContactCta";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { SkillsStrip } from "@/components/SkillsStrip";
import { SiteFooter } from "@/components/SiteHeader";

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
      <SiteFooter />
    </>
  );
}
