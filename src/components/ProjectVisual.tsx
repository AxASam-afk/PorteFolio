import type { Project } from "@/data/site";

const box = "rounded-[10px] px-3 py-2.5";

function NetworkVisual() {
  return (
    <div className="flex items-center justify-center gap-3 font-mono text-xs sm:gap-5">
      <div className="flex flex-col gap-3">
        {["PC0", "PC1", "PC2"].map((pc) => (
          <span key={pc} className={`${box} border border-line-2`}>
            {pc}
          </span>
        ))}
      </div>
      <span className="w-8 border-t-2 border-dashed border-accent sm:w-12" />
      <span className="rounded-[14px] bg-accent px-4 py-[18px] font-bold text-on-accent">2911</span>
      <span className="w-8 border-t-2 border-dashed border-accent sm:w-12" />
      <div className="flex flex-col gap-3">
        <span className={`${box} bg-line`}>DHCP · DNS</span>
        <span className={`${box} bg-line`}>HTTP</span>
      </div>
    </div>
  );
}

function GlpiVisual() {
  const bars = [30, 55, 45, 80, 60];
  return (
    <div className="grid h-full w-full grid-cols-3 gap-3 p-6">
      {[
        { label: "Postes", value: "[N]" },
        { label: "Tickets", value: "[N]" },
      ].map((kpi) => (
        <div key={kpi.label} className="flex flex-col justify-between rounded-xl bg-surface p-3.5">
          <span className="text-xs text-faint">{kpi.label}</span>
          <span className="font-display text-3xl font-bold">{kpi.value}</span>
        </div>
      ))}
      <div className="flex flex-col justify-between rounded-xl bg-accent p-3.5 text-on-accent">
        <span className="text-xs font-semibold">Budget</span>
        <span className="font-display text-3xl font-bold">[€]</span>
      </div>
      <div className="col-span-3 flex items-end gap-2.5 rounded-xl bg-surface p-3.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded ${i === 3 ? "bg-accent" : "bg-line-2"}`}
            style={{ height: `${h}%` }}
          />
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
      {visual === "network" ? <NetworkVisual /> : <GlpiVisual />}
    </div>
  );
}
