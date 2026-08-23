import { motion } from "framer-motion";
import { useState } from "react";

import { skills } from "../../data/skills";

import type { SkillCategory } from "../../types/portfolio";

export default function TechStackExplorer() {
  const [category, setCategory] =
    useState<SkillCategory>("Backend");

  const active = skills[category];
  const Icon = active.icon;

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {(
          Object.keys(
            skills,
          ) as SkillCategory[]
        ).map((item) => (
          <button
            type="button"
            key={item}
            onClick={() =>
              setCategory(item)
            }
            className={`min-h-[44px] rounded-xl border px-4 py-2 text-xs font-bold ${
              category === item
                ? "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-300"
                : "border-white/[0.07] text-slate-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        key={category}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mt-5 rounded-[28px] border border-white/[0.07] bg-[#0D1319] p-6 sm:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <div className="grid size-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05]">
              <Icon className="size-5 text-cyan-400" />
            </div>

            <h3 className="mt-5 text-2xl font-black">
              {category}
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              {active.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {active.items.map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                >
                  <p className="text-sm font-bold">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}