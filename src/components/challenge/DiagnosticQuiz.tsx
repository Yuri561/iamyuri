import {
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { useState } from "react";

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
      className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
        <div>
          <SectionLabel>
            Interactive challenge
          </SectionLabel>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
            Think like a
            <span className="block text-cyan-400">
              controls engineer.
            </span>
          </h2>

          <p className="mt-6 leading-7 text-slate-500">
            You’ve read the résumé. Now try
            some of the troubleshooting
            decisions I’ve spent years making
            in the field.
          </p>

          <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400">
              Score
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
        </div>

        <div className="rounded-[30px] border border-cyan-400/20 bg-[#0D1319] p-5 sm:p-8">
          {finished ? (
            <div className="py-8 text-center">
              <BadgeCheck className="mx-auto size-12 text-cyan-400" />

              <p className="mt-5 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400">
                DIAGNOSTIC COMPLETE
              </p>

              <h3 className="mt-4 text-3xl font-black">
                You scored {score}/
                {
                  diagnosticQuestions.length
                }
              </h3>

              <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
                My field philosophy is simple:
                verify, isolate and prove the
                failure before replacing
                components.
              </p>

              <button
                type="button"
                onClick={reset}
                className="mt-7 min-h-[48px] rounded-xl bg-cyan-400 px-5 text-sm font-black text-[#071014]"
              >
                Run Again
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-cyan-400">
                  FIELD DIAGNOSTIC
                </span>

                <span className="text-xs text-slate-600">
                  {questionIndex + 1}/
                  {
                    diagnosticQuestions.length
                  }
                </span>
              </div>

              <h3 className="mt-7 text-xl font-black leading-8 sm:text-2xl">
                {question.question}
              </h3>

              <div className="mt-7 grid gap-3">
                {question.answers.map(
                  (answer, index) => {
                    const selected =
                      selectedAnswer ===
                      index;

                    const correct =
                      selectedAnswer !==
                        null &&
                      answer.correct;

                    return (
                      <button
                        type="button"
                        key={answer.text}
                        onClick={() =>
                          chooseAnswer(index)
                        }
                        className={`min-h-[56px] rounded-xl border p-4 text-left text-sm leading-6 transition ${
                          correct
                            ? "border-emerald-500/35 bg-emerald-500/[0.07]"
                            : selected
                              ? "border-red-500/30 bg-red-500/[0.06]"
                              : "border-white/[0.07] bg-white/[0.025] hover:border-cyan-400/25"
                        }`}
                      >
                        {answer.text}
                      </button>
                    );
                  },
                )}
              </div>

              {selectedAnswer !== null && (
                <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/20 p-5">
                  <p className="text-sm leading-7 text-slate-400">
                    {
                      question.explanation
                    }
                  </p>

                  <button
                    type="button"
                    onClick={next}
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-black text-cyan-400"
                  >
                    {questionIndex ===
                    diagnosticQuestions.length -
                      1
                      ? "See Result"
                      : "Next Scenario"}

                    <ArrowRight className="size-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}