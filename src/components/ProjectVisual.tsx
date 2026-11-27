import type { Project } from "@/data/site";

const box = "rounded-[10px] px-3 py-2.5";

function NetworkVisual() {
  return (
    <div className="flex items-center justify-center gap-3 font-mono text-xs sm:gap-5">
      <div className="flex flex-col gap-3">
        {["PC-A .10", "PC-B .20", "PC-C .30"].map((pc) => (
          <span key={pc} className={`${box} border border-line-2`}>
            {pc}
          </span>
        ))}
      </div>
      <span className="w-8 border-t-2 border-dashed border-accent sm:w-12" />
      <span className="rounded-[14px] bg-accent px-4 py-[18px] font-bold text-on-accent">SW1</span>
      <span className="hidden w-12 border-t-2 border-dashed border-accent sm:block" />
      <span className={`${box} hidden bg-line sm:block`}>192.168.10.0/24</span>
    </div>
  );
}

// Scores SUS réels des 5 participants (Livrables IHM Platinum Ops)
const sus = [95, 77.5, 90, 92.5, 95];

function SusVisual() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-6">
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-faint">Score SUS moyen</span>
        <span className="font-display text-3xl font-bold text-accent-text">
          90<span className="text-base text-faint">/100</span>
        </span>
      </div>
      <div className="flex flex-1 items-end gap-3 rounded-xl bg-surface p-3.5">
        {sus.map((score, i) => (
          <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
            <div
              className={`w-full rounded ${score >= 90 ? "bg-accent" : "bg-line-2"}`}
              style={{ height: `${score}%` }}
            />
            <span className="font-mono text-[11px] text-faint">P{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectVisual({ visual }: { visual: NonNullable<Project["visual"]> }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[260px] min-w-0 flex-[1_1_420px] items-center justify-center rounded-2xl border border-line bg-surface-2"
    >
      {visual === "network" ? <NetworkVisual /> : <SusVisual />}
    </div>
  );
}
