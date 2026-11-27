import { projects, site } from "@/data/site";
import { SiteHeader } from "./SiteHeader";

// Scores SUS réels des 5 participants au test de Platinum Ops
const sus = [95, 77.5, 90, 92.5, 95];
const pts = sus.map((s, i) => ({ x: 20 + i * 90, y: 150 - (s - 60) * 3.25 }));
const path = pts
  .map((p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = pts[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `C${cx},${prev.y} ${cx},${p.y} ${p.x},${p.y}`;
  })
  .join(" ");

const categories = [
  { label: "UX / IHM", count: 1, color: "bg-accent" },
  { label: "Réseau", count: 1, color: "bg-sky-400" },
  { label: "Bases de données", count: 1, color: "bg-pink-400" },
  { label: "Langage C", count: 1, color: "bg-amber-300" },
];

function Dashboard() {
  return (
    <div
      aria-hidden="true"
      className="glass relative mx-auto mt-16 w-full max-w-[1000px] rounded-[28px] bg-bg/80 p-5 backdrop-blur sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-display font-semibold">samuel.dev</span>
        <div className="flex gap-1 rounded-full border border-line-2 p-1 text-xs text-muted">
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-ink">Aperçu</span>
          <span className="px-3 py-1.5">Projets</span>
          <span className="hidden px-3 py-1.5 sm:inline">Parcours</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-display text-2xl sm:text-[28px]">
            Bienvenue, <span className="text-accent-text">recruteur</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-pink-500/90 px-3 py-1 text-white">Support IT</span>
            <span className="rounded-full bg-white px-3 py-1 text-bg">Réseau</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Cybersécurité</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Dev web</span>
          </div>
        </div>
        <div className="flex gap-6 sm:gap-8">
          {[
            { value: String(projects.length), label: "Projets" },
            { value: "90", label: "Score SUS" },
            { value: "2", label: "Mois de stage IT" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl sm:text-[40px] sm:leading-none">{s.value}</div>
              <div className="mt-1 text-xs text-faint">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.6fr_1fr]">
        <div className="glass rounded-2xl p-4">
          <div className="text-sm font-medium">Projets par domaine</div>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {categories.map((c) => (
              <li key={c.label} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${c.color}`} />
                  {c.label}
                </span>
                <span className="rounded bg-white/10 px-1.5 text-xs">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Score SUS — Platinum Ops</span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs">5 testeurs</span>
          </div>
          <svg viewBox="0 0 400 160" className="mt-3 h-[150px] w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sus-line" x1="0" x2="1">
                <stop offset="0" stopColor="#7c7dff" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            {[40, 80, 120].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
            ))}
            <path d={path} fill="none" stroke="url(#sus-line)" strokeWidth="3" />
            {pts.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="4" fill="#050509" stroke="#a5a6ff" strokeWidth="2" />
            ))}
          </svg>
          <div className="mt-1 flex justify-between px-2 font-mono text-[11px] text-faint">
            {sus.map((s, i) => (
              <span key={i}>P{i + 1}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-b from-[#5b5cf0] to-[#3b3cc8] p-4 text-white">
          <div>
            <div className="text-sm font-semibold">Disponibilité</div>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              Alternance dès maintenant, à Toulouse et accessible en transports.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <span className="flex justify-between rounded-lg bg-white px-3 py-2 text-bg">
              Rythme <strong>3 j / 2 j</strong>
            </span>
            <span className="flex justify-between rounded-lg bg-[#0d0d16] px-3 py-2">
              Statut <strong>Disponible</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20">
      {/* Étoiles et faisceau lumineux */}
      <div aria-hidden="true" className="stars animate-twinkle pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[900px] w-[260px] rotate-[-35deg] bg-gradient-to-b from-transparent via-[#7c7dff]/35 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[520px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#5b5cf0]/20 blur-[120px]"
      />

      <SiteHeader />

      <div className="relative mx-auto flex max-w-[1160px] flex-col items-center px-6 pt-20 text-center sm:px-8">
        <span className="animate-rise glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] text-muted">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
          {site.status}
        </span>
        <h1 className="animate-rise mt-7 max-w-[820px] font-display text-[clamp(2.6rem,6.5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.02em] [animation-delay:80ms]">
          <span className="text-gradient">{site.heroGradient}</span> {site.heroRest}
        </h1>
        <p className="animate-rise mt-6 max-w-[600px] text-base leading-relaxed text-muted sm:text-lg [animation-delay:160ms]">
          {site.intro}
        </p>
        <div className="animate-rise mt-9 flex flex-wrap justify-center gap-3 [animation-delay:240ms]">
          <a href="#projets" className="btn-glow rounded-full px-7 py-3.5 text-[15px] font-medium transition hover:brightness-110">
            Voir mes projets
          </a>
          <a href={site.cvUrl} className="btn-ghost rounded-full px-7 py-3.5 text-[15px] font-medium transition hover:bg-white/10">
            Télécharger le CV
          </a>
        </div>

        <Dashboard />
      </div>
    </section>
  );
}
