import Link from "next/link";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto max-w-[1160px] px-4 pt-5 sm:px-8">
      <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 backdrop-blur">
        <Link href="/" className="font-display text-[17px] font-semibold text-ink">
          samuel<span className="text-accent-text">.</span>lepinay
        </Link>
        <nav aria-label="Navigation principale" className="flex flex-wrap items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a href={site.cvUrl} className="btn-glow ml-1 rounded-full px-4 py-2 font-medium">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}

const footerLinks = [
  { label: "Projets", href: "/#projets" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-4 px-6 py-8 text-sm text-faint sm:px-8">
      <div className="flex flex-wrap gap-6">
        {footerLinks.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-ink">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-6">
        <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-ink">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
          LinkedIn
        </a>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
