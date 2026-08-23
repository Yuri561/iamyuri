import {
  BadgeCheck,
  Cpu,
  Database,
  Globe2,
  Server,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";

const stats = [
  {
    icon: Server,
    label: "Backend",
    value: "FastAPI",
  },
  {
    icon: Database,
    label: "Data",
    value: "PostgreSQL",
  },
  {
    icon: Cpu,
    label: "Controls",
    value: "BACnet",
  },
  {
    icon: Wrench,
    label: "HVAC",
    value: "7+ Years",
  },
  {
    icon: Users,
    label: "Leadership",
    value: "CEO",
  },
  {
    icon: Globe2,
    label: "Languages",
    value: "EN / HT / PT",
  },
];

export default function HeroCommandCenter() {
  return (
    <div className="relative min-w-0">
      <div className="absolute inset-0 scale-90 rounded-full bg-cyan-500/[0.08] blur-[110px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0C1218]/95 shadow-[0_50px_120px_rgba(0,0,0,.55)]">
        <div className="flex min-h-[54px] items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>

          <p className="truncate px-3 font-mono text-[8px] text-slate-700 sm:text-[9px]">
            yuri.engineering.profile
          </p>

          <BadgeCheck className="size-4 shrink-0 text-cyan-400" />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/10">
              <Terminal className="size-7 text-white" />
            </div>

            <div>
              <p className="font-black">
                Engineering Command Center
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Backend • HVAC • BAS • Leadership
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {stats.map(
              ({
                icon: Icon,
                label,
                value,
              }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                >
                  <Icon className="size-4 text-cyan-400" />

                  <p className="mt-4 text-[8px] font-black uppercase tracking-[0.18em] text-slate-700">
                    {label}
                  </p>

                  <p className="mt-1.5 text-sm font-black">
                    {value}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-white/[0.06] bg-black/30 p-4 font-mono text-[10px] leading-6">
            <div className="min-w-[280px]">
              <p>
                <span className="text-cyan-400">
                  $
                </span>{" "}
                profile.status()
              </p>

              <p className="mt-2 text-slate-500">
                hvac_experience ........ 7+
                years
              </p>

              <p className="text-slate-500">
                backend_engineering .....
                active
              </p>

              <p className="text-slate-500">
                controls_engineering ....
                active
              </p>

              <p className="text-slate-500">
                leadership ..............
                active
              </p>

              <p className="text-slate-500">
                portuguese ..............
                developing
              </p>

              <p className="mt-3 text-emerald-400">
                ✓ ready_for_next_challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}