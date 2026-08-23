import {
  Activity,
  Check,
  RadioTower,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

import { equipmentData } from "../../data/equipment";

import type { EquipmentKey } from "../../types/portfolio";

import SectionLabel from "../layout/SectionLabel";

export default function EquipmentExplorer() {
  const [equipment, setEquipment] =
    useState<EquipmentKey>("AHU");

  const active =
    equipmentData[equipment];

  return (
    <section
      id="controls"
      className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12"
    >
      <SectionLabel>
        Controls equipment explorer
      </SectionLabel>

      <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
        Explore the systems
        <span className="block text-cyan-400">
          behind the software.
        </span>
      </h2>

      <div className="mt-8 flex flex-wrap gap-2">
        {(
          Object.keys(
            equipmentData,
          ) as EquipmentKey[]
        ).map((item) => (
          <button
            type="button"
            key={item}
            onClick={() =>
              setEquipment(item)
            }
            className={`min-h-[44px] rounded-xl border px-4 text-xs font-bold ${
              equipment === item
                ? "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-300"
                : "border-white/[0.07] text-slate-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        key={equipment}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mt-5 grid gap-5 lg:grid-cols-[.85fr_1.15fr]"
      >
        <div className="rounded-[28px] border border-cyan-400/15 bg-[#0D1319] p-6 sm:p-8">
          <RadioTower className="size-6 text-cyan-400" />

          <p className="mt-6 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400">
            {equipment}
          </p>

          <h3 className="mt-3 text-3xl font-black">
            {active.title}
          </h3>

          <p className="mt-5 leading-7 text-slate-500">
            {active.intro}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-white/[0.07] bg-[#0D1319] p-6">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400">
              Typical BAS points
            </p>

            <div className="mt-5 space-y-3">
              {active.points.map(
                (point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <Check className="size-3.5 text-cyan-400" />
                    {point}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/[0.07] bg-[#0D1319] p-6">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-400">
              Common problems
            </p>

            <div className="mt-5 space-y-3">
              {active.faults.map(
                (fault) => (
                  <div
                    key={fault}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <Activity className="size-3.5 text-red-400" />
                    {fault}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}