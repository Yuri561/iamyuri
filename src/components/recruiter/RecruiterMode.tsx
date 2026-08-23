import { motion } from "framer-motion";
import { useState } from "react";

import {
  recruiterContent,
  recruiterModes,
} from "../../data/recruiter";

import type { RecruiterModeId } from "../../types/portfolio";

import SectionLabel from "../layout/SectionLabel";

export default function RecruiterMode() {
  const [mode, setMode] =
    useState<RecruiterModeId>("backend");

  const active =
    recruiterContent[mode];

  return (
    <section className="border-y border-white/[0.06] bg-[#090E13]">
      <div className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
        <div className="text-center">
          <SectionLabel>
            Recruiter mode
          </SectionLabel>

          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
            What are you hiring for?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Choose a direction and the site
            will highlight the part of my
            background most relevant to your
            team.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterModes.map(
            ({
              id,
              label,
              icon: Icon,
            }) => {
              const selected =
                id === mode;

              return (
                <button
                  type="button"
                  key={id}
                  onClick={() =>
                    setMode(id)
                  }
                  className={`flex min-h-[78px] items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    selected
                      ? "border-cyan-400/30 bg-cyan-400/[0.06]"
                      : "border-white/[0.07] bg-white/[0.02]"
                  }`}
                >
                  <Icon
                    className={`size-5 ${
                      selected
                        ? "text-cyan-400"
                        : "text-slate-600"
                    }`}
                  />

                  <span className="text-sm font-bold">
                    {label}
                  </span>
                </button>
              );
            },
          )}
        </div>

        <motion.div
          key={mode}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-5 rounded-[26px] border border-white/[0.07] bg-[#0D1319] p-6 sm:p-8"
        >
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400">
            {active.eyebrow}
          </p>

          <h3 className="mt-3 text-2xl font-black sm:text-3xl">
            {active.title}
          </h3>

          <p className="mt-4 max-w-3xl leading-7 text-slate-500">
            {active.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {active.highlights.map(
              (item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}