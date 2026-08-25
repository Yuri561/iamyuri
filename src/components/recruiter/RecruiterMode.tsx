import {
  Activity,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDot,
  Cpu,
  Gauge,
  Globe2,
  Network,
  Server,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useMemo, useState } from "react";

import {
  recruiterContent,
  recruiterModes,
} from "../../data/recruiter";

import type { RecruiterModeId } from "../../types/portfolio";

import SectionLabel from "../layout/SectionLabel";

/* ========================================================================== */
/* RECRUITER META                                                             */
/* ========================================================================== */

const recruiterMeta: Record<
  RecruiterModeId,
  {
    score: number;
    status: string;
    accent: string;
    soft: string;
    border: string;
    runtime: string;
    icon: typeof Server;
    strengths: string[];
    signals: {
      label: string;
      value: string;
    }[];
  }
> = {
  backend: {
    score: 92,
    status: "Strong Match",
    accent: "text-cyan-300",
    soft: "bg-cyan-400/[0.06]",
    border: "border-cyan-400/25",
    runtime: "Python / FastAPI / PostgreSQL",
    icon: Server,
    strengths: [
      "API architecture",
      "Production debugging",
      "Authentication",
      "Database modeling",
      "Cloud deployment",
      "Payments & integrations",
    ],
    signals: [
      {
        label: "Backend",
        value: "High",
      },
      {
        label: "APIs",
        value: "High",
      },
      {
        label: "Database",
        value: "High",
      },
    ],
  },

  automation: {
    score: 96,
    status: "Excellent Match",
    accent: "text-emerald-300",
    soft: "bg-emerald-400/[0.06]",
    border: "border-emerald-400/25",
    runtime: "BACnet / BAS / HVAC",
    icon: Cpu,
    strengths: [
      "5+ years HVAC",
      "Field diagnostics",
      "BACnet systems",
      "Controls troubleshooting",
      "AHU / VAV / VFD",
      "Commissioning mindset",
    ],
    signals: [
      {
        label: "Controls",
        value: "High",
      },
      {
        label: "Field",
        value: "High",
      },
      {
        label: "HVAC",
        value: "High",
      },
    ],
  },

  systems: {
    score: 94,
    status: "Strong Match",
    accent: "text-violet-300",
    soft: "bg-violet-400/[0.06]",
    border: "border-violet-400/25",
    runtime: "Software / Networks / Devices",
    icon: Network,
    strengths: [
      "Cross-system troubleshooting",
      "Networking",
      "Software + hardware",
      "Signal-path diagnostics",
      "Integration thinking",
      "Real-world infrastructure",
    ],
    signals: [
      {
        label: "Integration",
        value: "High",
      },
      {
        label: "Systems",
        value: "High",
      },
      {
        label: "Networks",
        value: "High",
      },
    ],
  },

  brazil: {
    score: 88,
    status: "Growing Match",
    accent: "text-green-300",
    soft: "bg-green-400/[0.06]",
    border: "border-green-400/25",
    runtime: "Remote / Brazil / Multilingual",
    icon: Globe2,
    strengths: [
      "International mindset",
      "English",
      "Haitian Creole",
      "Developing Portuguese",
      "Remote collaboration",
      "Cross-cultural communication",
    ],
    signals: [
      {
        label: "Global",
        value: "High",
      },
      {
        label: "Remote",
        value: "High",
      },
      {
        label: "Portuguese",
        value: "Growing",
      },
    ],
  },
};

/* ========================================================================== */
/* COMPONENT                                                                  */
/* ========================================================================== */

export default function RecruiterMode() {
  const [mode, setMode] =
    useState<RecruiterModeId>("backend");

  const active =
    recruiterContent[mode];

  const meta =
    recruiterMeta[mode];

  const ActiveIcon =
    meta.icon;

  const terminalLines = useMemo(
    () => [
      `$ evaluate_candidate --track=${mode}`,
      `> profile_loaded: Yuri Pierre-Louis`,
      `> target_role: ${active.title}`,
      `> runtime: ${meta.runtime}`,
      `> fit_score: ${meta.score}%`,
      `> recommendation: ${meta.status.toLowerCase()}`,
    ],
    [
      mode,
      active.title,
      meta,
    ],
  );

  return (
    <section className="relative border-y border-white/[0.06] bg-[#090E13]">
      {/* ambient glows */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-150px] size-[400px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />

        <div className="absolute right-[8%] bottom-[-180px] size-[420px] rounded-full bg-violet-500/[0.04] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">

        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>
              Recruiter Mode
            </SectionLabel>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              What are you
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                hiring for?
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Pick the type of role you're hiring for and this section will
              reconfigure itself around the part of my background most relevant
              to your team.
            </p>

            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-slate-700">
              <CircleDot className="size-3 text-emerald-400" />
              recruiter_profile_engine: online
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ROLE SELECTOR                                                */}
        {/* ============================================================ */}

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {recruiterModes.map(
            ({
              id,
              label,
              icon: Icon,
            },
            index) => {
              const selected =
                id === mode;

              return (
                <motion.button
                  type="button"
                  key={id}
                  onClick={() =>
                    setMode(id)
                  }
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300

                    ${
                      selected
                        ? `${meta.border} ${meta.soft}`
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]"
                    }
                  `}
                >
                  {selected && (
                    <motion.div
                      layoutId="activeRecruiterMode"
                      className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`
                        grid
                        size-11
                        place-items-center
                        rounded-xl
                        border
                        transition

                        ${
                          selected
                            ? `${meta.border} ${meta.soft}`
                            : "border-white/[0.06] bg-white/[0.02]"
                        }
                      `}
                    >
                      <Icon
                        className={`size-5 ${
                          selected
                            ? meta.accent
                            : "text-slate-600"
                        }`}
                      />
                    </div>

                    <span className="font-mono text-[9px] text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-black text-slate-200">
                    {label}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-700">
                    {selected
                      ? "active profile"
                      : "select profile"}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className={`size-1.5 rounded-full ${
                        selected
                          ? "animate-pulse bg-emerald-400"
                          : "bg-slate-800"
                      }`}
                    />

                    <span className="font-mono text-[9px] text-slate-700">
                      {selected
                        ? "loaded"
                        : "standby"}
                    </span>
                  </div>
                </motion.button>
              );
            },
          )}
        </div>

        {/* ============================================================ */}
        {/* MATCH CONSOLE                                                */}
        {/* ============================================================ */}

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
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
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              mt-5
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.07]
              bg-[#0B1117]
              shadow-[0_30px_90px_rgba(0,0,0,.35)]
            "
          >
            {/* top bar */}

            <div className="flex flex-col gap-3 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-400/70" />
                <span className="size-2 rounded-full bg-yellow-400/70" />
                <span className="size-2 rounded-full bg-emerald-400/70" />

                <span className="ml-3 font-mono text-[9px] text-slate-700">
                  recruiter.match.console
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="size-4 text-emerald-400" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-400">
                  Candidate Profile Verified
                </span>
              </div>
            </div>

            {/* body */}

            <div className="grid xl:grid-cols-[.72fr_1.28fr]">

              {/* ====================================================== */}
              {/* LEFT PROFILE PANEL                                    */}
              {/* ====================================================== */}

              <div className="border-b border-white/[0.07] p-6 sm:p-8 xl:border-b-0 xl:border-r">
                <div className="flex items-start justify-between gap-4">
                  <motion.div
                    initial={{
                      rotate: -10,
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
                    <ActiveIcon
                      className={`size-6 ${meta.accent}`}
                    />
                  </motion.div>

                  <div className="rounded-full border border-emerald-500/15 bg-emerald-500/[0.05] px-3 py-1.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-300">
                      {meta.status}
                    </span>
                  </div>
                </div>

                <p
                  className={`mt-7 text-[9px] font-black uppercase tracking-[0.2em] ${meta.accent}`}
                >
                  {active.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                  {active.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                  {active.description}
                </p>

                {/* fit meter */}

                <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-700">
                        Role Fit
                      </p>

                      <p className="mt-2 text-3xl font-black">
                        {meta.score}
                        <span className="text-slate-700">
                          %
                        </span>
                      </p>
                    </div>

                    <Target className={`size-6 ${meta.accent}`} />
                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${meta.score}%`,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
                    />
                  </div>
                </div>

                {/* terminal */}

                <div className="mt-5 rounded-2xl border border-white/[0.06] bg-black/35 p-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="size-3.5 text-cyan-400" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                      candidate runtime
                    </span>
                  </div>

                  <div className="mt-4 space-y-1 font-mono text-[10px] leading-5">
                    {terminalLines.map(
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
                            terminalLines.length -
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

              {/* ====================================================== */}
              {/* RIGHT MATCH PANEL                                     */}
              {/* ====================================================== */}

              <div className="p-6 sm:p-8">

                {/* capability signals */}

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-400">
                        Capability Signals
                      </p>

                      <h4 className="mt-2 text-xl font-black">
                        Why this profile fits
                      </h4>
                    </div>

                    <Activity className="size-5 text-cyan-400/60" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {meta.signals.map(
                      ({
                        label,
                        value,
                      },
                      index) => (
                        <motion.div
                          key={label}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.08,
                          }}
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                          <div className="flex items-center justify-between">
                            <Gauge className={`size-4 ${meta.accent}`} />

                            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                          </div>

                          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                            {label}
                          </p>

                          <p className="mt-2 text-sm font-black">
                            {value}
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* strengths */}

                <div className="mt-8">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-violet-400">
                    Matching Strengths
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {meta.strengths.map(
                      (strength, index) => (
                        <motion.div
                          key={strength}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.05,
                          }}
                          whileHover={{
                            x: 3,
                          }}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                          <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-cyan-400/[0.06] font-mono text-[9px] text-cyan-400">
                            {String(
                              index + 1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <span className="text-sm font-semibold text-slate-400">
                            {strength}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* highlights */}

                <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-violet-400" />

                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
                      Keyword Match
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.highlights.map(
                      (item, index) => (
                        <motion.span
                          key={item}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay:
                              index * 0.05,
                          }}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                        >
                          {item}
                        </motion.span>
                      ),
                    )}
                  </div>
                </div>

                {/* next step */}

                <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />

                    <div>
                      <p className="text-sm font-black">
                        Profile alignment complete
                      </p>

                      <p className="mt-1 text-xs leading-6 text-slate-600">
                        Continue exploring the portfolio to see relevant
                        experience, systems, and projects.
                      </p>
                    </div>
                  </div>

                  <a
                    href="#projects"
                    className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] px-4 text-xs font-black text-emerald-300 transition hover:bg-emerald-500/[0.1]"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* FOOTER                                                   */}
            {/* ======================================================== */}

            <div className="grid border-t border-white/[0.07] sm:grid-cols-4">
              {[
                [
                  "Track",
                  mode,
                ],
                [
                  "Fit",
                  `${meta.score}%`,
                ],
                [
                  "Runtime",
                  meta.runtime,
                ],
                [
                  "Status",
                  meta.status,
                ],
              ].map(
                ([label, value], index) => (
                  <div
                    key={label}
                    className={`
                      p-4
                      ${
                        index > 0
                          ? "border-t border-white/[0.07] sm:border-l sm:border-t-0"
                          : ""
                      }
                    `}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-slate-700">
                      {label}
                    </p>

                    <p
                      className={`mt-1 truncate text-sm font-black ${
                        label === "Status"
                          ? "text-emerald-400"
                          : ""
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}