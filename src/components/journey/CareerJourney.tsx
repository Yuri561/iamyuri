import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Cpu,
  Route,
  Terminal,
  TrendingUp,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useMemo,
  useState,
} from "react";

import { careerStages } from "../../data/career";

import CareerStageCard from "./CareerStageCard";
import SectionLabel from "../layout/SectionLabel";

export default function CareerJourney() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const active =
    careerStages[activeIndex];

  const Icon =
    active.icon;

  const progress =
    ((activeIndex + 1) /
      careerStages.length) *
    100;

  const stageNumber =
    String(activeIndex + 1).padStart(
      2,
      "0",
    );

  const totalStages =
    String(
      careerStages.length,
    ).padStart(
      2,
      "0",
    );

  const terminalLines =
    useMemo(
      () => [
        `$ career.load --stage=${stageNumber}`,
        `> title: ${active.title}`,
        `> discipline: ${active.subtitle}`,
        `> skills_loaded: ${active.skills.length}`,
        `> progression: ${Math.round(progress)}%`,
        `> status: experience_verified`,
      ],
      [
        active,
        progress,
        stageNumber,
      ],
    );

  const goNext = () => {
    setActiveIndex(
      (current) =>
        (current + 1) %
        careerStages.length,
    );
  };

  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-[#090E13]
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND                                                   */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:58px_58px]
          "
        />

        <div className="absolute left-[-160px] top-[10%] size-[450px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute right-[-140px] bottom-[5%] size-[420px] rounded-full bg-violet-500/[0.05] blur-[140px]" />
      </div>

      <div
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
        {/* ========================================================== */}
        {/* SECTION HEADER                                             */}
        {/* ========================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[.85fr_1.15fr]
            lg:items-end
          "
        >
          <div>
            <SectionLabel>
              7+ Year Technical Journey
            </SectionLabel>

            <h2
              className="
                mt-6
                max-w-4xl
                text-4xl
                font-black
                tracking-[-0.045em]

                sm:text-5xl
              "
            >
              From the mechanical room

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-cyan-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                to software systems.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-slate-500
              "
            >
              My career evolved through
              hands-on HVAC work,
              diagnostics, commercial
              service, building automation,
              controls engineering, systems
              integration, and backend
              development.
            </p>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                font-mono
                text-[10px]
                text-slate-700
              "
            >
              <CircleDot className="size-3 text-emerald-400" />

              career_evolution: active
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* CAREER PROGRESS                                            */}
        {/* ========================================================== */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#0B1117]
            p-5
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="
                  font-mono
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-slate-700
                "
              >
                Career Evolution
              </p>

              <p className="mt-1 text-sm font-black">
                Stage {stageNumber} /{" "}
                {totalStages}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-cyan-400" />

              <span className="font-mono text-xs text-cyan-400">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          <div
            className="
              relative
              mt-5
              h-1.5
              overflow-hidden
              rounded-full
              bg-white/[0.05]
            "
          >
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-violet-400
                to-emerald-400
              "
            />
          </div>

          {/* stage nodes */}

          <div
            className="
              mt-5
              flex
              justify-between
            "
          >
            {careerStages.map(
              (stage, index) => {
                const completed =
                  index <= activeIndex;

                return (
                  <button
                    key={stage.title}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      gap-2
                    "
                  >
                    <motion.span
                      animate={{
                        scale:
                          index ===
                          activeIndex
                            ? 1.25
                            : 1,
                      }}
                      className={`
                        block
                        size-2.5
                        rounded-full
                        border

                        ${
                          completed
                            ? "border-cyan-400 bg-cyan-400"
                            : "border-slate-700 bg-[#090E13]"
                        }
                      `}
                    />

                    <span
                      className={`
                        hidden
                        font-mono
                        text-[8px]

                        sm:block

                        ${
                          index ===
                          activeIndex
                            ? "text-cyan-400"
                            : "text-slate-800"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* MAIN EXPERIENCE CONSOLE                                    */}
        {/* ========================================================== */}

        <div
          className="
            mt-6
            grid
            gap-6

            lg:grid-cols-[.68fr_1.32fr]
          "
        >
          {/* ======================================================== */}
          {/* LEFT TIMELINE                                            */}
          {/* ======================================================== */}

          <div
            className="
              rounded-[28px]
              border
              border-white/[0.07]
              bg-[#0B1117]
              p-4

              sm:p-5
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.07]
                pb-4
              "
            >
              <div className="flex items-center gap-2">
                <Route className="size-4 text-cyan-400" />

                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-slate-600
                  "
                >
                  Experience Timeline
                </p>
              </div>

              <span className="font-mono text-[9px] text-slate-700">
                {careerStages.length} stages
              </span>
            </div>

            <div className="relative mt-5 space-y-2">
              {/* timeline rail */}

              <div
                className="
                  absolute
                  bottom-5
                  left-[23px]
                  top-5
                  w-px
                  bg-gradient-to-b
                  from-cyan-400/30
                  via-violet-400/20
                  to-transparent
                "
              />

              {careerStages.map(
                (stage, index) => (
                  <CareerStageCard
                    key={stage.title}
                    stage={stage}
                    index={index}
                    active={
                      index ===
                      activeIndex
                    }
                    completed={
                      index <=
                      activeIndex
                    }
                    onClick={() =>
                      setActiveIndex(index)
                    }
                  />
                ),
              )}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT EXPERIENCE DETAIL                                  */}
          {/* ======================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                x: 20,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -15,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                overflow-hidden
                rounded-[30px]
                border
                border-white/[0.08]
                bg-[#0B1117]
                shadow-[0_30px_90px_rgba(0,0,0,.3)]
              "
            >
              {/* window bar */}

              <div
                className="
                  flex
                  min-h-[54px]
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  px-5
                "
              >
                <div className="flex gap-2">
                  <span className="size-2 rounded-full bg-red-400/70" />
                  <span className="size-2 rounded-full bg-yellow-400/70" />
                  <span className="size-2 rounded-full bg-emerald-400/70" />
                </div>

                <div className="flex items-center gap-2">
                  <Terminal className="size-3 text-cyan-400" />

                  <span className="font-mono text-[9px] text-slate-700">
                    career.stage.{stageNumber}
                  </span>
                </div>

                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              </div>

              <div
                className="
                  p-6
                  sm:p-8
                  lg:p-10
                "
              >
                {/* stage heading */}

                <div
                  className="
                    flex
                    flex-col
                    gap-6

                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        font-mono
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-cyan-400
                      "
                    >
                      Stage {stageNumber}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-slate-700
                      "
                    >
                      {active.subtitle}
                    </p>
                  </div>

                  <motion.div
                    initial={{
                      rotate: -8,
                      scale: 0.9,
                    }}
                    animate={{
                      rotate: 0,
                      scale: 1,
                    }}
                    className="
                      grid
                      size-14
                      shrink-0
                      place-items-center
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.05]
                    "
                  >
                    <Icon className="size-6 text-cyan-400" />
                  </motion.div>
                </div>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    tracking-[-0.035em]

                    sm:text-4xl
                  "
                >
                  {active.title}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-4xl
                    text-sm
                    leading-8
                    text-slate-400

                    sm:text-base
                  "
                >
                  {active.description}
                </p>

                {/* ================================================== */}
                {/* EXPERIENCE SIGNALS                                 */}
                {/* ================================================== */}

                <div
                  className="
                    mt-8
                    grid
                    gap-3
                    sm:grid-cols-3
                  "
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      p-4
                    "
                  >
                    <Cpu className="size-4 text-cyan-400" />

                    <p
                      className="
                        mt-4
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.17em]
                        text-slate-700
                      "
                    >
                      Discipline
                    </p>

                    <p className="mt-2 text-sm font-black">
                      {active.subtitle}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      p-4
                    "
                  >
                    <Activity className="size-4 text-violet-400" />

                    <p
                      className="
                        mt-4
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.17em]
                        text-slate-700
                      "
                    >
                      Skills Loaded
                    </p>

                    <p className="mt-2 text-sm font-black">
                      {active.skills.length}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      p-4
                    "
                  >
                    <CheckCircle2 className="size-4 text-emerald-400" />

                    <p
                      className="
                        mt-4
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.17em]
                        text-slate-700
                      "
                    >
                      Stage Status
                    </p>

                    <p className="mt-2 text-sm font-black text-emerald-400">
                      Experience Built
                    </p>
                  </div>
                </div>

                {/* ================================================== */}
                {/* SKILLS                                             */}
                {/* ================================================== */}

                <div className="mt-8">
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-violet-400
                    "
                  >
                    Skills acquired
                  </p>

                  <div
                    className="
                      mt-4
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >
                    {active.skills.map(
                      (
                        skill,
                        index,
                      ) => (
                        <motion.div
                          key={skill}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              index *
                              0.05,
                          }}
                          whileHover={{
                            x: 4,
                          }}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-white/[0.07]
                            bg-white/[0.02]
                            p-4
                          "
                        >
                          <span
                            className="
                              grid
                              size-7
                              shrink-0
                              place-items-center
                              rounded-lg
                              bg-cyan-400/[0.06]
                              font-mono
                              text-[9px]
                              text-cyan-400
                            "
                          >
                            {String(
                              index +
                                1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <span className="text-sm font-semibold text-slate-400">
                            {skill}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* ================================================== */}
                {/* TERMINAL                                           */}
                {/* ================================================== */}

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-black/30
                    p-4
                  "
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="size-3.5 text-cyan-400" />

                      <p
                        className="
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.17em]
                          text-slate-700
                        "
                      >
                        career runtime
                      </p>
                    </div>

                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  </div>

                  <div
                    className="
                      mt-4
                      space-y-1
                      font-mono
                      text-[10px]
                      leading-5
                    "
                  >
                    {terminalLines.map(
                      (
                        line,
                        index,
                      ) => (
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
                              index *
                              0.06,
                          }}
                          className={
                            index ===
                            terminalLines.length -
                              1
                              ? "text-emerald-400"
                              : index ===
                                  0
                                ? "text-cyan-300"
                                : "text-slate-600"
                          }
                        >
                          {line}
                        </motion.p>
                      ),
                    )}
                  </div>
                </div>

                {/* ================================================== */}
                {/* NEXT STAGE                                         */}
                {/* ================================================== */}

                <button
                  type="button"
                  onClick={goNext}
                  className="
                    group
                    mt-7
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.035]
                    p-5
                    text-left
                    transition
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.06]
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.17em]
                        text-slate-700
                      "
                    >
                      Continue Journey
                    </p>

                    <p className="mt-2 text-sm font-black text-slate-300">
                      {activeIndex ===
                      careerStages.length -
                        1
                        ? "Return to the beginning"
                        : careerStages[
                            activeIndex +
                              1
                          ].title}
                    </p>
                  </div>

                  <ArrowRight
                    className="
                      size-5
                      text-cyan-400
                      transition
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================== */}
        {/* JOURNEY PHILOSOPHY                                         */}
        {/* ========================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            rounded-[24px]
            border
            border-white/[0.07]
            bg-[#0B1117]
            p-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-cyan-400
              "
            >
              Engineering Philosophy
            </p>

            <p
              className="
                mt-2
                max-w-4xl
                text-sm
                leading-7
                text-slate-500
              "
            >
              Every stage added another
              layer: mechanical systems
              taught me how equipment works,
              service taught me how to
              diagnose failures, controls
              taught me how systems
              communicate, and software lets
              me build the intelligence that
              connects them.
            </p>
          </div>

          <TrendingUp className="size-6 shrink-0 text-emerald-400" />
        </div>
      </div>
    </section>
  );
}