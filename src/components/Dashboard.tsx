"use client";

import Link from "next/link";
import { useState } from "react";
import { journey, projects } from "@/data/site";

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

const dots = ["bg-accent", "bg-sky-400", "bg-pink-400", "bg-amber-300"];

const tabs = [
  { id: "apercu", label: "Aperçu" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
] as const;

type Tab = (typeof tabs)[number]["id"];

function Overview() {
  return (
    <>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-display text-2xl sm:text-[28px]">
            Bienvenue, <span className="text-accent-text">recruteur</span>
          </div>
          <p className="mt-2 text-sm text-faint">Support IT · Réseau · Cybersécurité · Dev web</p>
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
            {projects.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/projets/${p.slug}`}
                  className="flex items-center justify-between gap-2 rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${dots[i % dots.length]}`} />
                    {p.category.split(" · ")[0]}
                  </span>
                  <span aria-hidden="true" className="text-xs text-faint">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Score SUS — Platinum Ops</span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs">5 testeurs</span>
          </div>
          <svg
            viewBox="0 0 400 160"
            className="mt-3 h-[150px] w-full"
            preserveAspectRatio="none"
            role="img"
            aria-label="Scores SUS des 5 testeurs : 95, 77,5, 90, 92,5 et 95"
          >
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
            <a
              href="#contact"
              className="flex justify-between rounded-lg bg-[#0d0d16] px-3 py-2 transition hover:bg-black"
            >
              Me contacter <strong>→</strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectsTab() {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Link
            href={`/projets/${p.slug}`}
            className="glass flex h-full flex-col gap-2 rounded-2xl p-5 transition hover:border-[#7c7dff]/50"
          >
            <span className="flex items-center gap-2 text-xs text-accent-text">
              <span className={`h-1.5 w-1.5 rounded-full ${dots[i % dots.length]}`} />
              {p.category}
            </span>
            <span className="font-display text-lg font-medium">{p.title}</span>
            <span className="text-sm leading-relaxed text-muted">{p.summary}</span>
            <span className="mt-auto pt-2 text-sm font-medium text-accent-text">Voir le projet →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function JourneyTab() {
  return (
    <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {journey.map((step) => (
        <li key={step.title} className="glass rounded-2xl p-5">
          <div className="font-mono text-xs text-accent-text">{step.period}</div>
          <div className="mt-1.5 font-display text-base font-medium">{step.title}</div>
          {step.detail && <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>}
        </li>
      ))}
    </ol>
  );
}

export function Dashboard() {
  const [tab, setTab] = useState<Tab>("apercu");

  return (
    <div className="glass relative mx-auto mt-16 w-full max-w-[1000px] rounded-[28px] p-5 text-left backdrop-blur sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-display font-semibold">samuel.dev</span>
        <div role="tablist" aria-label="Sections du tableau de bord" className="flex gap-1 rounded-full border border-line-2 p-1 text-sm">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`cursor-pointer rounded-full px-4 py-2 transition ${
                tab === t.id ? "bg-white/10 text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
        {tab === "apercu" && <Overview />}
        {tab === "projets" && <ProjectsTab />}
        {tab === "parcours" && <JourneyTab />}
      </div>
    </div>
  );
}
