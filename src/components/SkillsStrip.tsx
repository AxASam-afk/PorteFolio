const stack = [
  { name: "Linux", area: "Systèmes" },
  { name: "Packet Tracer", area: "Réseau" },
  { name: "VPN & Wi-Fi", area: "Réseau" },
  { name: "Root-Me", area: "Cyber" },
  { name: "TryHackMe", area: "Cyber" },
  { name: "Python", area: "Dev" },
  { name: "Java", area: "Dev" },
  { name: "C", area: "Dev" },
  { name: "SQL", area: "Données" },
  { name: "Next.js", area: "Web" },
  { name: "Figma", area: "UX" },
];

function Row({ reverse }: { reverse?: boolean }) {
  // Liste dupliquée pour une boucle continue
  const items = reverse ? [...stack].reverse() : stack;
  return (
    <div className={`flex w-max gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {[...items, ...items].map((item, i) => (
        <span
          key={`${item.name}-${i}`}
          aria-hidden={i >= items.length}
          className="glass flex items-center gap-3 whitespace-nowrap rounded-full py-2 pl-2 pr-5"
        >
          <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#5b5cf0]/20 px-2 font-mono text-[11px] text-accent-text">
            {item.area}
          </span>
          <span className="font-display text-[15px] font-medium">{item.name}</span>
        </span>
      ))}
    </div>
  );
}

export function SkillsStrip() {
  return (
    <section aria-labelledby="stack-title" className="mx-auto max-w-[1160px] px-6 sm:px-8">
      <div className="flex items-center justify-center gap-4">
        <span aria-hidden="true" className="h-px w-16 bg-gradient-to-r from-transparent to-[#7c7dff]/60" />
        <h2 id="stack-title" className="font-mono text-xs uppercase tracking-[0.2em] text-accent-text">
          Ma stack
        </h2>
        <span aria-hidden="true" className="h-px w-16 bg-gradient-to-l from-transparent to-[#7c7dff]/60" />
      </div>
      <div className="mt-8 flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
