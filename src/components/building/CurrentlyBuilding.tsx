import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Code2,
  Cpu,
  Globe2,
  Network,
  Rocket,
  Target,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useMemo,
  useState,
} from "react";

import { currentGoals } from "../../data/language";

import SectionLabel from "../layout/SectionLabel";

/* ========================================================================== */
/* TYPES                                                                      */
/* ========================================================================== */

type GoalStatus =
  | "Active"
  | "In Progress"
  | "Building"
  | "Learning";

/* ========================================================================== */
/* GOAL META                                                                  */
/* ========================================================================== */

const goalMeta = [
  {
    icon: Code2,
    status: "Active" as GoalStatus,
    accent: "text-cyan-300",
    border: "border-cyan-400/20",
    soft: "bg-cyan-400/[0.05]",
    next: "Expand production API architecture and testing patterns",
  },
  {
    icon: Globe2,
    status: "Learning" as GoalStatus,
    accent: "text-green-300",
    border: "border-green-400/20",
    soft: "bg-green-400/[0.05]",
    next: "Improve professional Portuguese and technical vocabulary",
  },
  {
    icon: Cpu,
    status: "Building" as GoalStatus,
    accent: "text-violet-300",
    border: "border-violet-400/20",
    soft: "bg-violet-400/[0.05]",
    next: "Connect more physical devices to Python-based automation",
  },
  {
    icon: Network,
    status: "In Progress" as GoalStatus,
    accent: "text-amber-300",
    border: "border-amber-400/20",
    soft: "bg-amber-400/[0.05]",
    next: "Strengthen routing, protocols, diagnostics, and systems knowledge",
  },
];

/* ========================================================================== */
/* COMPONENT                                                                  */
/* ========================================================================== */

export default function CurrentlyBuilding() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeGoal =
    currentGoals[activeIndex];

  const activeMeta =
    goalMeta[activeIndex];

  const ActiveIcon =
    activeMeta.icon;

  const averageProgress =
    useMemo(() => {
      if (!currentGoals.length) {
        return 0;
      }

      return Math.round(
        currentGoals.reduce(
          (total, goal) =>
            total + goal.progress,
          0,
        ) / currentGoals.length,
      );
    }, []);

  return (
    <section
      className="
        relative
        mx-auto
        max-w-[1550px]
        px-4
        py-16
        sm:px-6
        lg:px-10
        lg:py-24
        xl:px-12
      "
    >
      {/* ambient glow */}

      <div className="pointer-events-none absolute inset-x-0 top-20 h-[500px]">
        <div className="absolute left-[10%] top-0 size-72 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

        <div className="absolute right-[8%] top-24 size-72 rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      {/* ============================================================ */}
      {/* HEADER                                                       */}
      {/* ============================================================ */}

      <div className="relative grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <SectionLabel>
            Currently Building
          </SectionLabel>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
            Still learning.
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Always building.
            </span>
          </h2>
        </div>

        <div className="lg:justify-self-end">
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            These are the areas I’m actively
            developing right now — not
            permanent skill scores, but real
            projects and learning tracks that
            continue to evolve.
          </p>

          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-slate-700">
            <CircleDot className="size-3 text-emerald-400" />
            development_queue: active
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* OVERVIEW STRIP                                              */}
      {/* ============================================================ */}

      <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0D1319] p-5">
          <Activity className="size-5 text-cyan-400" />

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.17em] text-slate-700">
            Active Tracks
          </p>

          <p className="mt-2 text-2xl font-black">
            {currentGoals.length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0D1319] p-5">
          <Target className="size-5 text-violet-400" />

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.17em] text-slate-700">
            Average Progress
          </p>

          <p className="mt-2 text-2xl font-black">
            {averageProgress}
            <span className="text-slate-700">
              %
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0D1319] p-5">
          <Rocket className="size-5 text-emerald-400" />

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.17em] text-slate-700">
            Status
          </p>

          <p className="mt-2 flex items-center gap-2 text-lg font-black text-emerald-400">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            In Motion
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN DASHBOARD                                              */}
      {/* ============================================================ */}

      <div className="relative mt-5 grid gap-5 xl:grid-cols-[.72fr_1.28fr]">

        {/* ========================================================== */}
        {/* GOAL SELECTOR                                             */}
        {/* ========================================================== */}

        <div className="rounded-[28px] border border-white/[0.07] bg-[#0B1117] p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-400">
                Build Queue
              </p>

              <h3 className="mt-2 text-xl font-black">
                Active development tracks
              </h3>
            </div>

            <span className="font-mono text-[10px] text-slate-700">
              0{activeIndex + 1}/0
              {currentGoals.length}
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {currentGoals.map(
              (goal, index) => {
                const meta =
                  goalMeta[index];

                const Icon =
                  meta.icon;

                const selected =
                  activeIndex === index;

                return (
                  <motion.button
                    key={goal.label}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    whileHover={{
                      x: 3,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                    className={`
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition

                      ${
                        selected
                          ? `${meta.border} ${meta.soft}`
                          : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.13]"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`
                            grid
                            size-11
                            shrink-0
                            place-items-center
                            rounded-xl
                            border

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

                        <div>
                          <p className="text-sm font-black text-slate-300">
                            {goal.label}
                          </p>

                          <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-slate-700">
                            {meta.status}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`font-mono text-xs ${
                          selected
                            ? meta.accent
                            : "text-slate-700"
                        }`}
                      >
                        {goal.progress}%
                      </span>
                    </div>

                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${goal.progress}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay:
                            index * 0.05,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
                      />
                    </div>

                    {selected && (
                      <motion.div
                        layoutId="activeGoal"
                        className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      />
                    )}
                  </motion.button>
                );
              },
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* ACTIVE GOAL DETAIL                                        */}
        {/* ========================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal.label}
            initial={{
              opacity: 0,
              y: 15,
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
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.07]
              bg-[#0B1117]
            "
          >
            {/* top bar */}

            <div className="flex flex-col gap-3 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-400/70" />
                <span className="size-2 rounded-full bg-yellow-400/70" />
                <span className="size-2 rounded-full bg-emerald-400/70" />

                <span className="ml-3 font-mono text-[9px] text-slate-700">
                  yuri.build.queue
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-400">
                  {activeMeta.status}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                {/* identity */}

                <div>
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
                      ${activeMeta.border}
                      ${activeMeta.soft}
                    `}
                  >
                    <ActiveIcon
                      className={`size-6 ${activeMeta.accent}`}
                    />
                  </motion.div>

                  <p
                    className={`mt-6 text-[9px] font-black uppercase tracking-[0.2em] ${activeMeta.accent}`}
                  >
                    CURRENT TRACK
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                    {activeGoal.label}
                  </h3>
                </div>

                {/* percentage */}

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                    Progress
                  </p>

                  <p className="mt-1 text-3xl font-black">
                    {activeGoal.progress}
                    <span className="text-slate-700">
                      %
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
                {activeGoal.description}
              </p>

              {/* progress rail */}

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-slate-700">
                    execution progress
                  </p>

                  <span className="font-mono text-[10px] text-slate-500">
                    {activeGoal.progress}/100
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    key={activeGoal.label}
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${activeGoal.progress}%`,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
                  />
                </div>
              </div>

              {/* status cards */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <CheckCircle2 className="size-4 text-emerald-400" />

                  <p className="mt-4 text-[9px] font-black uppercase tracking-[0.16em] text-slate-700">
                    Status
                  </p>

                  <p className="mt-2 text-sm font-black">
                    {activeMeta.status}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <Target className="size-4 text-violet-400" />

                  <p className="mt-4 text-[9px] font-black uppercase tracking-[0.16em] text-slate-700">
                    Target
                  </p>

                  <p className="mt-2 text-sm font-black">
                    Continuous Growth
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <Activity className="size-4 text-cyan-400" />

                  <p className="mt-4 text-[9px] font-black uppercase tracking-[0.16em] text-slate-700">
                    Mode
                  </p>

                  <p className="mt-2 text-sm font-black">
                    Hands-On
                  </p>
                </div>
              </div>

              {/* next checkpoint */}

              <div
                className={`
                  mt-8
                  rounded-2xl
                  border
                  p-5
                  ${activeMeta.border}
                  ${activeMeta.soft}
                `}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-700">
                      Next Checkpoint
                    </p>

                    <p className="mt-2 max-w-2xl text-sm font-semibold leading-7 text-slate-300">
                      {activeMeta.next}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`size-5 shrink-0 ${activeMeta.accent}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}