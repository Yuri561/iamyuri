import { motion } from "framer-motion";
import { useState } from "react";

import { careerStages } from "../../data/career";

import CareerStageCard from "./CareerStageCard";
import SectionLabel from "../layout/SectionLabel";

export default function CareerJourney() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const active =
    careerStages[activeIndex];

  const Icon = active.icon;

  return (
    <section
      id="journey"
      className="border-y border-white/[0.06] bg-[#090E13]"
    >
      <div className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <SectionLabel>
          5+ year engineering journey
        </SectionLabel>

        <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
          Installer. Service tech.
          <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Controls. Software. Systems.
          </span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
          <div className="space-y-2">
            {careerStages.map(
              (stage, index) => (
                <CareerStageCard
                  key={stage.title}
                  stage={stage}
                  active={
                    index === activeIndex
                  }
                  onClick={() =>
                    setActiveIndex(index)
                  }
                />
              ),
            )}
          </div>

          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              x: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-[28px] border border-white/[0.08] bg-[#0D1319] p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs text-cyan-400">
                  {active.number}
                </p>

                <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-700">
                  {active.subtitle}
                </p>
              </div>

              <div className="grid size-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05]">
                <Icon className="size-5 text-cyan-400" />
              </div>
            </div>

            <h3 className="mt-5 text-3xl font-black sm:text-4xl">
              {active.title}
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              {active.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {active.skills.map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}