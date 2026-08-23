import {
  Check,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

import { leadershipContent } from "../../data/leadership";

import type { LeadershipTab } from "../../types/portfolio";

import SectionLabel from "../layout/SectionLabel";

export default function LeadershipSection() {
  const [tab, setTab] =
    useState<LeadershipTab>("CEO");

  const active =
    leadershipContent[tab];

  return (
    <section
      id="leadership"
      className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12"
    >
      <SectionLabel>
        Leadership & collaboration
      </SectionLabel>

      <div className="mt-6 grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400">
            Impact Team Technology
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            CEO.
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Builder. Mentor.
            </span>
          </h2>

          <p className="mt-6 leading-7 text-slate-500">
            I help lead a collaborative
            environment where developers work
            on real projects and newer members
            grow their skills.
          </p>

          <div className="mt-7 flex gap-2">
            {(
              [
                "CEO",
                "Mentor",
              ] as LeadershipTab[]
            ).map((item) => (
              <button
                type="button"
                key={item}
                onClick={() =>
                  setTab(item)
                }
                className={`min-h-[44px] rounded-xl border px-4 text-xs font-black ${
                  tab === item
                    ? "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-300"
                    : "border-white/[0.07] text-slate-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={tab}
          initial={{
            opacity: 0,
            x: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="rounded-[28px] border border-white/[0.07] bg-[#0D1319] p-6 sm:p-8"
        >
          <Users className="size-6 text-cyan-400" />

          <h3 className="mt-6 text-2xl font-black">
            {active.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-500">
            {active.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {active.items.map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] p-4"
                >
                  <Check className="size-3.5 text-cyan-400" />

                  <span className="text-sm font-bold text-slate-400">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}