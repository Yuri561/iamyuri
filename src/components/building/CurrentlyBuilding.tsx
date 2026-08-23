import { currentGoals } from "../../data/language";

import SectionLabel from "../layout/SectionLabel";

export default function CurrentlyBuilding() {
  return (
    <section className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
      <SectionLabel>
        Currently building
      </SectionLabel>

      <h2 className="mt-6 text-4xl font-black sm:text-5xl">
        Still learning.
        <span className="text-cyan-400">
          {" "}
          Always building.
        </span>
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {currentGoals.map((goal) => (
          <div
            key={goal.label}
            className="rounded-[24px] border border-white/[0.07] bg-[#0D1319] p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-black">
                {goal.label}
              </h3>

              <span className="font-mono text-xs text-cyan-400">
                {goal.progress}%
              </span>
            </div>

            <p className="mt-3 text-xs leading-6 text-slate-600">
              {goal.description}
            </p>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                style={{
                  width: `${goal.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}