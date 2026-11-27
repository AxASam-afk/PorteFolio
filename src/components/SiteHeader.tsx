import Link from "next/link";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8">
      <Link href="/" className="flex items-center gap-2.5 font-semibold text-ink">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent font-display font-bold text-on-accent">
          {site.initials}
        </span>
        {site.name}
      </Link>
      <nav aria-label="Navigation principale" className="flex flex-wrap gap-6 text-sm">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="text-muted transition-colors hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-3 px-6 py-6 font-mono text-[13px] text-faint sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-ink">
          github.com/AxASam-afk
        </a>
      </div>
    </footer>
  );
}
