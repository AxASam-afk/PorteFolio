// Mini-visuels décoratifs, construits à partir du contenu réel de chaque projet (notes du vault)

const chip = "rounded-md border border-white/10 bg-[#0d0d16] px-2 py-1";

function PlatinumOps() {
  // Écran « route optimale » : étape 2/6 et alerte de non-retour
  return (
    <div className="w-[260px] rounded-xl border border-white/10 bg-[#0d0d16]/90 p-3 text-[11px]">
      <div className="flex items-center justify-between">
        <span className="font-medium">Route optimale</span>
        <span className="text-faint">Étape 2/6</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-white/10">
        <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#7c7dff] to-[#f472b6]" />
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5">
          <span className="h-3 w-3 rounded-full bg-[#7c7dff]" /> Trophées ratables
        </div>
        <div className="flex items-center justify-between rounded-md border border-red-400/40 bg-red-500/10 px-2 py-1.5 text-red-200">
          <span>NON-RETOUR</span>
          <span>1 h 09</span>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-muted">
          <span className="rounded bg-[#5b5cf0] px-1.5 text-white">IA</span> Assistant tactique
        </div>
      </div>
    </div>
  );
}

function Network() {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px]">
      <div className="flex flex-col gap-2">
        {["PC-A .10", "PC-B .20", "PC-C .30"].map((pc) => (
          <span key={pc} className={chip}>
            {pc}
          </span>
        ))}
      </div>
      <span className="w-6 border-t border-dashed border-[#a5a6ff]" />
      <span className="btn-glow rounded-lg px-3 py-2.5 font-semibold">SW1</span>
      <span className="w-6 border-t border-dashed border-[#a5a6ff]" />
      <span className={chip}>192.168.10.0/24</span>
    </div>
  );
}

function Database() {
  // MCD TravelNow : 5 entités
  const box = "rounded-md border border-[#7c7dff]/40 bg-[#14143a] px-2 py-1";
  return (
    <div className="grid grid-cols-[auto_16px_auto_16px_auto] items-center gap-y-3 font-mono text-[11px]">
      <span className={box}>Utilisateur</span>
      <span className="h-px bg-[#a5a6ff]/60" />
      <span className="btn-glow rounded-md px-2 py-1">Réservation</span>
      <span className="h-px bg-[#a5a6ff]/60" />
      <span className={box}>LigneRéservation</span>
      <span />
      <span />
      <span className="mx-auto h-4 w-px bg-[#a5a6ff]/60" />
      <span />
      <span className="mx-auto h-4 w-px bg-[#a5a6ff]/60" />
      <span />
      <span />
      <span className={box}>Paiement</span>
      <span />
      <span className={box}>Service</span>
    </div>
  );
}

function Terminal() {
  // Menu du carnet de contacts (cahier des charges)
  const menu = ["Ajouter", "Lister", "Rechercher", "Supprimer", "Sauvegarder"];
  return (
    <div className="w-[230px] rounded-xl border border-white/10 bg-[#0d0d16]/90 p-3 font-mono text-[11px] leading-relaxed">
      <div className="text-faint">$ ./carnet</div>
      {menu.map((m, i) => (
        <div key={m}>
          <span className="text-accent-text">{i + 1}.</span> {m}
        </div>
      ))}
      <div className="mt-1 text-faint">
        → contacts.txt <span className="text-ok">✓</span>
      </div>
    </div>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  "platinum-ops": PlatinumOps,
  "tp-infrastructure-reseau": Network,
  travelnow: Database,
  "carnet-de-contacts": Terminal,
};

export function ProjectVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug];
  if (!Visual) return null;
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[210px] items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#14143a] to-[#09090f]"
    >
      <div className="stars pointer-events-none absolute inset-0 opacity-50" />
      <div className="absolute -bottom-16 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-[#5b5cf0]/30 blur-3xl" />
      <div className="relative transition-transform duration-500 group-hover:scale-[1.04]">
        <Visual />
      </div>
    </div>
  );
}
