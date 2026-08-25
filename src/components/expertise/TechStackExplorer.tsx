import {
  Activity,
  Binary,
  Braces,
  CheckCircle2,
  CircleDot,
  Cpu,
  Database,
  Gauge,
  Network,
  RadioTower,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

import { skills } from "../../data/skills";
import type { SkillCategory } from "../../types/portfolio";

const categoryMeta: Record<
  SkillCategory,
  {
    accent: string;
    soft: string;
    border: string;
    terminalLabel: string;
    runtime: string;
    telemetry: {
      label: string;
      value: string;
      icon: typeof Server;
    }[];
  }
> = {
  Backend: {
    accent: "text-cyan-300",
    soft: "bg-cyan-400/[0.06]",
    border: "border-cyan-400/25",
    terminalLabel: "backend.runtime",
    runtime: "FastAPI / Python",
    telemetry: [
      {
        label: "API Layer",
        value: "Active",
        icon: Server,
      },
      {
        label: "Database",
        value: "Linked",
        icon: Database,
      },
      {
        label: "Validation",
        value: "Enabled",
        icon: CheckCircle2,
      },
    ],
  },

  Frontend: {
    accent: "text-violet-300",
    soft: "bg-violet-400/[0.06]",
    border: "border-violet-400/25",
    terminalLabel: "frontend.runtime",
    runtime: "React / TypeScript",
    telemetry: [
      {
        label: "UI State",
        value: "Synced",
        icon: Activity,
      },
      {
        label: "Components",
        value: "Modular",
        icon: Braces,
      },
      {
        label: "Render",
        value: "Responsive",
        icon: Zap,
      },
    ],
  },

  Cloud: {
    accent: "text-sky-300",
    soft: "bg-sky-400/[0.06]",
    border: "border-sky-400/25",
    terminalLabel: "cloud.runtime",
    runtime: "Render / Vercel / Supabase",
    telemetry: [
      {
        label: "Deployments",
        value: "Live",
        icon: Server,
      },
      {
        label: "Storage",
        value: "Connected",
        icon: Database,
      },
      {
        label: "Integrations",
        value: "Online",
        icon: Network,
      },
    ],
  },

  Controls: {
    accent: "text-emerald-300",
    soft: "bg-emerald-400/[0.06]",
    border: "border-emerald-400/25",
    terminalLabel: "controls.runtime",
    runtime: "BACnet / BAS",
    telemetry: [
      {
        label: "BACnet",
        value: "Online",
        icon: RadioTower,
      },
      {
        label: "Controllers",
        value: "Polling",
        icon: Cpu,
      },
      {
        label: "Field Points",
        value: "Verified",
        icon: Gauge,
      },
    ],
  },

  Networking: {
    accent: "text-amber-300",
    soft: "bg-amber-400/[0.06]",
    border: "border-amber-400/25",
    terminalLabel: "network.runtime",
    runtime: "BACnet / IP / MS/TP",
    telemetry: [
      {
        label: "Devices",
        value: "Discovered",
        icon: Network,
      },
      {
        label: "Signal Path",
        value: "Tracing",
        icon: Activity,
      },
      {
        label: "Packets",
        value: "Flowing",
        icon: RadioTower,
      },
    ],
  },
};

export default function TechStackExplorer() {
  const [category, setCategory] =
    useState<SkillCategory>("Backend");

  const [hoveredSkill, setHoveredSkill] =
    useState<string | null>(null);

  const active = skills[category];
  const Icon = active.icon;
  const meta = categoryMeta[category];

  const pseudoTerminal = useMemo(() => {
    const first = active.items[0] ?? "system";
    const second = active.items[1] ?? "module";
    const third = active.items[2] ?? "service";

    return [
      `$ load ${meta.terminalLabel}`,
      `> runtime: ${meta.runtime}`,
      `> module_01: ${first}`,
      `> module_02: ${second}`,
      `> module_03: ${third}`,
      `> status: operational`,
    ];
  }, [active.items, meta]);

  return (
    <section className="relative">
      {/* ambient glows */}

      <div className="pointer-events-none absolute inset-x-0 top-10 h-[420px]">
        <div className="absolute left-[12%] top-12 size-64 rounded-full bg-cyan-400/[0.05] blur-[100px]" />
        <div className="absolute right-[8%] top-24 size-72 rounded-full bg-violet-500/[0.05] blur-[120px]" />
      </div>

      {/* ============================================================ */}
      {/* CATEGORY NAV                                                */}
      {/* ============================================================ */}

      <div className="relative mt-8 overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2">
          {(
            Object.keys(
              skills,
            ) as SkillCategory[]
          ).map((item, index) => {
            const selected =
              category === item;

            return (
              <motion.button
                type="button"
                key={item}
                onClick={() =>
                  setCategory(item)
                }
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  relative
                  min-h-[46px]
                  overflow-hidden
                  rounded-xl
                  border
                  px-4
                  py-2
                  text-xs
                  font-bold
                  transition

                  ${
                    selected
                      ? `${meta.border} ${meta.soft} text-white`
                      : "border-white/[0.07] bg-white/[0.02] text-slate-500 hover:border-white/[0.14] hover:text-slate-300"
                  }
                `}
              >
                {selected && (
                  <motion.span
                    layoutId="skillCategoryActive"
                    className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  <span className="font-mono text-[9px] text-slate-700">
                    0{index + 1}
                  </span>

                  {item}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN CONSOLE                                                */}
      {/* ============================================================ */}

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.99,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.99,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.07]
            bg-[#0B1117]
            shadow-[0_30px_90px_rgba(0,0,0,.35)]
          "
        >
          {/* top chrome */}

          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-400/70" />
              <span className="size-2 rounded-full bg-yellow-400/70" />
              <span className="size-2 rounded-full bg-emerald-400/70" />
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] text-slate-700">
              <Terminal className="size-3" />

              engineering.stack.console
            </div>

            <div className="flex items-center gap-2">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-400">
                Online
              </span>
            </div>
          </div>

          {/* body */}

          <div className="grid xl:grid-cols-[.66fr_1.34fr]">
            {/* ======================================================== */}
            {/* LEFT CONTROL PANEL                                       */}
            {/* ======================================================== */}

            <div className="border-b border-white/[0.07] p-6 sm:p-8 xl:border-b-0 xl:border-r">
              <motion.div
                initial={{
                  rotate: -8,
                  scale: 0.9,
                }}
                animate={{
                  rotate: 0,
                  scale: 1,
                }}
                className={`
                  grid
                  size-14
                  place-items-center
                  rounded-2xl
                  border
                  ${meta.border}
                  ${meta.soft}
                `}
              >
                <Icon className={`size-6 ${meta.accent}`} />
              </motion.div>

              <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-700">
                subsystem
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-[-0.035em]">
                {category}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                {active.description}
              </p>

              {/* telemetry */}

              <div className="mt-7 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {meta.telemetry.map(
                  ({
                    label,
                    value,
                    icon: StatIcon,
                  }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <StatIcon className={`size-4 ${meta.accent}`} />

                        <span className="text-xs font-semibold text-slate-500">
                          {label}
                        </span>
                      </div>

                      <span className="font-mono text-[10px] text-slate-300">
                        {value}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* terminal */}

              <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/35 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Binary className="size-3.5 text-cyan-400" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                    runtime log
                  </span>
                </div>

                <div className="space-y-1 font-mono text-[10px] leading-5">
                  {pseudoTerminal.map(
                    (line, index) => (
                      <motion.p
                        key={line}
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.06,
                        }}
                        className={
                          index ===
                          pseudoTerminal.length -
                            1
                            ? "text-emerald-400"
                            : "text-slate-600"
                        }
                      >
                        {line}
                      </motion.p>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT SKILL GRID                                         */}
            {/* ======================================================== */}

            <div className="relative p-6 sm:p-8">
              {/* fake signal path */}

              <div className="pointer-events-none absolute inset-x-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent lg:block" />

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-700">
                    loaded modules
                  </p>

                  <h4 className="mt-2 text-xl font-black">
                    Active skill nodes
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <CircleDot className="size-3 text-emerald-400" />

                  {active.items.length} modules loaded
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {active.items.map(
                  (item, index) => {
                    const hovered =
                      hoveredSkill === item;

                    return (
                      <motion.div
                        key={item}
                        onMouseEnter={() =>
                          setHoveredSkill(item)
                        }
                        onMouseLeave={() =>
                          setHoveredSkill(null)
                        }
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.04,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.015,
                        }}
                        className={`
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          p-4
                          transition

                          ${
                            hovered
                              ? `${meta.border} ${meta.soft}`
                              : "border-white/[0.07] bg-white/[0.02]"
                          }
                        `}
                      >
                        {/* top indicator */}

                        <div className="flex items-center justify-between">
                          <span
                            className={`
                              size-2
                              rounded-full
                              ${
                                hovered
                                  ? "bg-emerald-400"
                                  : "bg-slate-700"
                              }
                            `}
                          />

                          <span className="font-mono text-[9px] text-slate-700">
                            mod_{String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="mt-5">
                          <p className="text-sm font-black text-slate-200">
                            {item}
                          </p>

                          <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-700">
                            loaded / available
                          </p>
                        </div>

                        {/* hover signal */}

                        <motion.div
                          initial={false}
                          animate={{
                            width:
                              hovered
                                ? "100%"
                                : "0%",
                          }}
                          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
                        />
                      </motion.div>
                    );
                  },
                )}
              </div>

              {/* ====================================================== */}
              {/* SIGNAL FLOW                                            */}
              {/* ====================================================== */}

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <div className="flex items-center gap-2">
                  <RadioTower className="size-4 text-cyan-400" />

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
                    Engineering signal path
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    "Input",
                    category,
                    "Logic",
                    "Output",
                  ].map((node, index) => (
                    <div
                      key={node}
                      className="relative"
                    >
                      <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-center">
                        <p className="font-mono text-[9px] text-slate-700">
                          NODE {index + 1}
                        </p>

                        <p className="mt-1 text-xs font-black text-slate-300">
                          {node}
                        </p>
                      </div>

                      {index < 3 && (
                        <motion.div
                          initial={{
                            scaleX: 0,
                          }}
                          animate={{
                            scaleX: 1,
                          }}
                          transition={{
                            duration: 0.6,
                            delay:
                              0.2 +
                              index * 0.12,
                          }}
                          className="absolute -right-3 top-1/2 hidden h-px w-3 origin-left bg-cyan-400/40 sm:block"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STATUS FOOTER                                                 */}
          {/* ============================================================ */}

          <div className="grid border-t border-white/[0.07] sm:grid-cols-3">
            <div className="p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                subsystem
              </p>

              <p className="mt-1 text-sm font-black">
                {category}
              </p>
            </div>

            <div className="border-t border-white/[0.07] p-4 sm:border-l sm:border-t-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                modules
              </p>

              <p className="mt-1 text-sm font-black">
                {active.items.length} loaded
              </p>
            </div>

            <div className="border-t border-white/[0.07] p-4 sm:border-l sm:border-t-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                system state
              </p>

              <p className="mt-1 flex items-center gap-2 text-sm font-black text-emerald-400">
                <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                Operational
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}