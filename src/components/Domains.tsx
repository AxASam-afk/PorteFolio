const domains = [
  { title: "Support IT", text: "Tickets, diagnostic d'incidents, maintenance du parc" },
  { title: "Réseau", text: "LAN, adressage IPv4, ARP, switchs sous Packet Tracer" },
  { title: "Cybersécurité", text: "CTF sur Root-Me et TryHackMe, OSINT" },
  { title: "Développement", text: "Python, Java, C, SQL, React et Next.js" },
];

export function Domains() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 pt-28 sm:px-8">
      <div className="text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,2.8rem)] font-medium tracking-[-0.01em]">Un profil polyvalent</h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
          Du poste utilisateur au réseau, en passant par le code : je relie les briques d&apos;un système d&apos;information.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-y-10">
        <div className="grid flex-[1_1_380px] grid-cols-1 gap-4 sm:grid-cols-2">
          {domains.map((d) => (
            <div key={d.title} className="glass rounded-2xl p-5 text-center">
              <h3 className="font-display text-[15px] font-medium">{d.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{d.text}</p>
            </div>
          ))}
        </div>

        {/* Liaisons vers la puce */}
        <svg aria-hidden="true" viewBox="0 0 120 200" className="hidden h-[200px] w-[120px] md:block" fill="none">
          <path d="M0 50 H50 Q60 50 60 60 V90 Q60 100 70 100 H120" stroke="#2a2a3d" strokeWidth="6" />
          <path d="M0 150 H50 Q60 150 60 140 V110 Q60 100 70 100 H120" stroke="#2a2a3d" strokeWidth="6" />
          <path d="M60 100 H120" stroke="#a5a6ff" strokeWidth="2" />
          <circle cx="60" cy="100" r="5" fill="#a5a6ff" />
        </svg>

        <div className="relative flex h-[200px] w-[200px] items-center justify-center" aria-hidden="true">
          <div className="absolute inset-0 rounded-full bg-[#5b5cf0]/30 blur-3xl" />
          {/* Pattes de la puce */}
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={`t${i}`} className="absolute top-2 h-6 w-0.5 bg-[#a5a6ff]/60" style={{ left: `${62 + i * 19}px` }} />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={`b${i}`} className="absolute bottom-2 h-6 w-0.5 bg-[#a5a6ff]/60" style={{ left: `${62 + i * 19}px` }} />
          ))}
          <div className="btn-glow relative flex h-[130px] w-[130px] items-center justify-center rounded-[22px] font-display text-5xl font-semibold">
            SL
          </div>
        </div>
      </div>
    </section>
  );
}
