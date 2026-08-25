import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Cpu,
  Gauge,
  RotateCcw,
  Terminal,
  XCircle,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useMemo, useState } from "react";

import { diagnosticQuestions } from "../../data/quiz";

import SectionLabel from "../layout/SectionLabel";

export default function DiagnosticQuiz() {
  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState<number | null>(null);

  const [score, setScore] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const question =
    diagnosticQuestions[questionIndex];

  const progress =
    ((questionIndex +
      (selectedAnswer !== null ? 1 : 0)) /
      diagnosticQuestions.length) *
    100;

  const isCorrect =
    selectedAnswer !== null
      ? question.answers[selectedAnswer].correct
      : null;

  const percentage =
    Math.round(
      (score /
        diagnosticQuestions.length) *
        100,
    );

  const resultLabel = useMemo(() => {
    if (percentage >= 90) {
      return "Excellent Diagnostic Thinking";
    }

    if (percentage >= 70) {
      return "Strong Field Logic";
    }

    if (percentage >= 50) {
      return "Solid Troubleshooting Foundation";
    }

    return "Keep Tracing the Signal";
  }, [percentage]);

  const chooseAnswer = (
    index: number,
  ) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(index);

    if (
      question.answers[index].correct
    ) {
      setScore(
        (current) => current + 1,
      );
    }
  };

  const next = () => {
    if (
      questionIndex ===
      diagnosticQuestions.length - 1
    ) {
      setFinished(true);
      return;
    }

    setQuestionIndex(
      (current) => current + 1,
    );

    setSelectedAnswer(null);
  };

  const reset = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section
      id="challenge"
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

      <div className="pointer-events-none absolute inset-x-0 top-20 h-[520px]">
        <div className="absolute left-[8%] top-8 size-72 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

        <div className="absolute right-[8%] top-24 size-72 rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      {/* ============================================================ */}
      {/* HEADER                                                       */}
      {/* ============================================================ */}

      <div className="relative grid gap-10 lg:grid-cols-[.66fr_1.34fr]">
        <div>
          <SectionLabel>
            Interactive Challenge
          </SectionLabel>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
            Think like a
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              controls engineer.
            </span>
          </h2>

          <p className="mt-6 max-w-md leading-7 text-slate-500">
            These scenarios are designed around
            the same troubleshooting mindset used
            in real BAS and HVAC field work:
            verify, isolate, measure, and prove.
          </p>

          {/* score overview */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
              <div className="flex items-center justify-between">
                <Gauge className="size-5 text-cyan-400" />

                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              </div>

              <p className="mt-4 text-[9px] font-black uppercase tracking-[0.18em] text-slate-700">
                Current Score
              </p>

              <p className="mt-2 text-3xl font-black">
                {score}
                <span className="text-slate-700">
                  /
                  {
                    diagnosticQuestions.length
                  }
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#0D1319] p-5">
              <Activity className="size-5 text-violet-400" />

              <p className="mt-4 text-[9px] font-black uppercase tracking-[0.18em] text-slate-700">
                Scenario Progress
              </p>

              <p className="mt-2 text-3xl font-black">
                {questionIndex + 1}
                <span className="text-slate-700">
                  /
                  {
                    diagnosticQuestions.length
                  }
                </span>
              </p>
            </div>
          </div>

          {/* overall progress */}

          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-[#0D1319] p-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-slate-700">
                diagnostic_session
              </p>

              <span className="font-mono text-[10px] text-cyan-400">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-slate-700">
              <CircleDot className="size-3 text-emerald-400" />
              field_diagnostic_engine: online
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* WORKSTATION                                               */}
        {/* ========================================================== */}

        <div className="overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#0B1117] shadow-[0_30px_90px_rgba(0,0,0,.35)]">

          {/* workstation bar */}

          <div className="flex flex-col gap-3 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-400/70" />
              <span className="size-2 rounded-full bg-yellow-400/70" />
              <span className="size-2 rounded-full bg-emerald-400/70" />

              <span className="ml-3 font-mono text-[9px] text-slate-700">
                yuri.field.diagnostic
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu className="size-3.5 text-cyan-400" />

              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-400">
                Simulator Online
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FINISHED STATE                                           */}
          {/* ======================================================== */}

          <AnimatePresence mode="wait">
            {finished ? (
              <motion.div
                key="finished"
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="p-6 sm:p-8"
              >
                <div className="py-6 text-center">
                  <motion.div
                    initial={{
                      scale: 0.6,
                      rotate: -10,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    className="mx-auto grid size-20 place-items-center rounded-[24px] border border-emerald-400/20 bg-emerald-400/[0.06]"
                  >
                    <BadgeCheck className="size-10 text-emerald-400" />
                  </motion.div>

                  <p className="mt-6 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400">
                    Diagnostic Session Complete
                  </p>

                  <h3 className="mt-4 text-3xl font-black sm:text-4xl">
                    {resultLabel}
                  </h3>

                  <p className="mt-4 text-5xl font-black">
                    {score}
                    <span className="text-slate-700">
                      /
                      {
                        diagnosticQuestions.length
                      }
                    </span>
                  </p>

                  <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-500">
                    My field philosophy is simple:
                    verify the command, trace the
                    path, measure the signal,
                    compare expected versus actual
                    operation, and prove the failure
                    before replacing components.
                  </p>

                  {/* result cards */}

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                        Accuracy
                      </p>

                      <p className="mt-2 text-xl font-black text-cyan-300">
                        {percentage}%
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                        Method
                      </p>

                      <p className="mt-2 text-sm font-black">
                        Signal Tracing
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                        Status
                      </p>

                      <p className="mt-2 text-sm font-black text-emerald-400">
                        Complete
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={reset}
                    className="
                      mt-8
                      inline-flex
                      min-h-[48px]
                      items-center
                      gap-2
                      rounded-xl
                      bg-cyan-400
                      px-5
                      text-sm
                      font-black
                      text-[#071014]
                      transition
                      hover:bg-cyan-300
                    "
                  >
                    <RotateCcw className="size-4" />
                    Run Diagnostic Again
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={questionIndex}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="p-5 sm:p-7 lg:p-8"
              >
                {/* scenario header */}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-400">
                      FIELD DIAGNOSTIC
                    </p>

                    <p className="mt-1 font-mono text-[10px] text-slate-700">
                      scenario_
                      {String(
                        questionIndex + 1,
                      ).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-slate-500">
                      {questionIndex + 1}/
                      {
                        diagnosticQuestions.length
                      }
                    </span>

                    <span className="flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.04] px-3 py-1.5">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

                      <span className="text-[9px] font-black uppercase tracking-[0.14em] text-emerald-300">
                        Active
                      </span>
                    </span>
                  </div>
                </div>

                {/* question */}

                <div className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05]">
                      <Terminal className="size-4 text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                        Troubleshooting Scenario
                      </p>

                      <h3 className="mt-3 text-xl font-black leading-8 sm:text-2xl">
                        {question.question}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* answers */}

                <div className="mt-6 grid gap-3">
                  {question.answers.map(
                    (answer, index) => {
                      const selected =
                        selectedAnswer === index;

                      const correct =
                        selectedAnswer !== null &&
                        answer.correct;

                      const incorrectSelected =
                        selected &&
                        !answer.correct;

                      return (
                        <motion.button
                          type="button"
                          key={answer.text}
                          onClick={() =>
                            chooseAnswer(index)
                          }
                          whileHover={
                            selectedAnswer === null
                              ? {
                                  x: 4,
                                }
                              : undefined
                          }
                          whileTap={
                            selectedAnswer === null
                              ? {
                                  scale: 0.99,
                                }
                              : undefined
                          }
                          className={`
                            group
                            flex
                            min-h-[64px]
                            items-center
                            justify-between
                            gap-4
                            rounded-2xl
                            border
                            p-4
                            text-left
                            text-sm
                            leading-6
                            transition

                            ${
                              correct
                                ? "border-emerald-500/35 bg-emerald-500/[0.07]"
                                : incorrectSelected
                                  ? "border-red-500/30 bg-red-500/[0.06]"
                                  : "border-white/[0.07] bg-white/[0.025] hover:border-cyan-400/25"
                            }
                          `}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`
                                grid
                                size-8
                                shrink-0
                                place-items-center
                                rounded-lg
                                border
                                font-mono
                                text-[10px]

                                ${
                                  correct
                                    ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400"
                                    : incorrectSelected
                                      ? "border-red-400/20 bg-red-400/[0.08] text-red-400"
                                      : "border-white/[0.07] bg-white/[0.02] text-slate-600"
                                }
                              `}
                            >
                              {String(
                                index + 1,
                              ).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <span
                              className={
                                correct
                                  ? "text-emerald-200"
                                  : incorrectSelected
                                    ? "text-red-200"
                                    : "text-slate-400"
                              }
                            >
                              {answer.text}
                            </span>
                          </div>

                          {correct && (
                            <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />
                          )}

                          {incorrectSelected && (
                            <XCircle className="size-5 shrink-0 text-red-400" />
                          )}
                        </motion.button>
                      );
                    },
                  )}
                </div>

                {/* ==================================================== */}
                {/* FEEDBACK PANEL                                       */}
                {/* ==================================================== */}

                <AnimatePresence>
                  {selectedAnswer !== null && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -6,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`
                          mt-6
                          rounded-2xl
                          border
                          p-5

                          ${
                            isCorrect
                              ? "border-emerald-500/20 bg-emerald-500/[0.035]"
                              : "border-amber-500/20 bg-amber-500/[0.035]"
                          }
                        `}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`
                              grid
                              size-10
                              shrink-0
                              place-items-center
                              rounded-xl

                              ${
                                isCorrect
                                  ? "bg-emerald-500/[0.08]"
                                  : "bg-amber-500/[0.08]"
                              }
                            `}
                          >
                            {isCorrect ? (
                              <CheckCircle2 className="size-5 text-emerald-400" />
                            ) : (
                              <AlertTriangle className="size-5 text-amber-400" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <p
                              className={`text-sm font-black ${
                                isCorrect
                                  ? "text-emerald-300"
                                  : "text-amber-300"
                              }`}
                            >
                              {isCorrect
                                ? "Correct diagnostic path"
                                : "Not the first move I’d make"}
                            </p>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                              {
                                question.explanation
                              }
                            </p>
                          </div>
                        </div>

                        {/* fake field note */}

                        <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                          <div className="flex items-center gap-2">
                            <Activity className="size-3.5 text-cyan-400" />

                            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-700">
                              field_note
                            </p>
                          </div>

                          <div className="mt-3 space-y-1 font-mono text-[10px] leading-5 text-slate-600">
                            <p>
                              &gt; verify command
                            </p>

                            <p>
                              &gt; confirm signal path
                            </p>

                            <p>
                              &gt; compare expected vs actual
                            </p>

                            <p className="text-emerald-400">
                              &gt; isolate root cause
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={next}
                          className="
                            mt-5
                            inline-flex
                            min-h-[44px]
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-cyan-400/20
                            bg-cyan-400/[0.05]
                            px-4
                            text-sm
                            font-black
                            text-cyan-300
                            transition
                            hover:bg-cyan-400/[0.09]
                          "
                        >
                          {questionIndex ===
                          diagnosticQuestions.length -
                            1
                            ? "View Diagnostic Result"
                            : "Next Scenario"}

                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ======================================================== */}
          {/* FOOTER                                                   */}
          {/* ======================================================== */}

          {!finished && (
            <div className="grid border-t border-white/[0.07] sm:grid-cols-3">
              <div className="p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700">
                  Mode
                </p>

                <p className="mt-1 text-sm font-black">
                  Field Diagnostic
                </p>
              </div>

              <div className="border-t border-white/[0.07] p-4 sm:border-l sm:border-t-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700">
                  Score
                </p>

                <p className="mt-1 text-sm font-black">
                  {score}/
                  {
                    diagnosticQuestions.length
                  }
                </p>
              </div>

              <div className="border-t border-white/[0.07] p-4 sm:border-l sm:border-t-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700">
                  System
                </p>

                <p className="mt-1 flex items-center gap-2 text-sm font-black text-emerald-400">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                  Operational
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}