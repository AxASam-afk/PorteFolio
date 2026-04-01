import { About } from "@/components/sections/About";
import { Bento } from "@/components/sections/Bento";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { WorkWithMe } from "@/components/sections/WorkWithMe";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Bento />
      <Projects />
      <CaseStudies />
      <WorkWithMe />
      <Contact />
      <Footer />
    </main>
  );
}
