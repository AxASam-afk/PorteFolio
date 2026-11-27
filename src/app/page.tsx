import { About } from "@/components/About";
import { ContactCta } from "@/components/ContactCta";
import { Domains } from "@/components/Domains";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteHeader";
import { SkillsStrip } from "@/components/SkillsStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <SkillsStrip />
        <About />
        <Domains />
        <Projects />
        <Journey />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
