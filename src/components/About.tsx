// Étiquettes suspendues : des faits tirés des projets
const tags = [
  { label: "Ping : 0 % de perte", left: "52%", top: "22%", thread: 70, delay: "0s" },
  { label: "SUS 90/100", left: "74%", top: "38%", thread: 120, delay: "1.2s", active: true },
  { label: "ARP compris", left: "46%", top: "52%", thread: 150, delay: "0.6s" },
  { label: "realloc ✓", left: "78%", top: "64%", thread: 190, delay: "1.8s" },
  { label: "MCD validé", left: "56%", top: "76%", thread: 230, delay: "2.4s" },
];

export function About() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 pt-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-[#0d0d16] via-[#14143a] to-[#2a2b7a]/70">
        <div aria-hidden="true" className="stars pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative flex min-h-[340px] flex-wrap items-center">
          <div className="max-w-[440px] flex-[1_1_320px] p-8 sm:p-12">
            <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-medium leading-tight text-[#d8d8ff]">
              J&apos;apprends en pratiquant
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Je code depuis très jeune et je me suis formé en autodidacte à Python et JavaScript. Je progresse surtout par la pratique :
              TP réseau, projets en équipe, CTF sur Root-Me et TryHackMe. C&apos;est pour ça que j&apos;ai choisi l&apos;alternance.
            </p>
          </div>
          <div aria-hidden="true" className="relative hidden h-[340px] flex-[1_1_320px] md:block">
            {tags.map((t) => (
              <div key={t.label} className="absolute -translate-x-1/2" style={{ left: t.left, top: 0 }}>
                <div
                  className="mx-auto w-px bg-gradient-to-b from-transparent to-[#a5a6ff]/70"
                  style={{ height: `${t.thread}px` }}
                />
                <div className="animate-float" style={{ animationDelay: t.delay }}>
                  <span className="mx-auto -mt-1 block h-2 w-2 rounded-full bg-[#a5a6ff] shadow-[0_0_10px_#a5a6ff]" />
                  <span
                    className={`mt-1 block whitespace-nowrap rounded-md px-3 py-1.5 text-xs ${
                      t.active ? "btn-glow" : "border border-[#7c7dff]/40 bg-[#1a1a3a]/90 text-[#d8d8ff]"
                    }`}
                  >
                    {t.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
