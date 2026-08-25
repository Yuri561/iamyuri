import {
  Check,
  ChevronRight,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import type { CareerStage } from "../../types/portfolio";

type Props = {
  stage: CareerStage;
  index: number;
  active: boolean;
  completed: boolean;
  onClick: () => void;
};

export default function CareerStageCard({
  stage,
  index,
  active,
  completed,
  onClick,
}: Props) {
  const Icon =
    stage.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        x: active
          ? 0
          : 4,
      }}
      whileTap={{
        scale: 0.99,
      }}
      className={`
        group
        relative
        z-10
        flex
        min-h-[86px]
        w-full
        items-center
        gap-4
        overflow-hidden
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        duration-300

        ${
          active
            ? "border-cyan-400/25 bg-cyan-400/[0.055]"
            : "border-transparent bg-transparent hover:border-white/[0.07] hover:bg-white/[0.02]"
        }
      `}
    >
      {/* ============================================================ */}
      {/* TIMELINE NODE                                                */}
      {/* ============================================================ */}

      <div
        className="
          relative
          z-10
          flex
          size-12
          shrink-0
          items-center
          justify-center
        "
      >
        <motion.div
          animate={{
            scale:
              active
                ? 1.08
                : 1,
          }}
          className={`
            grid
            size-10
            place-items-center
            rounded-xl
            border
            transition-all

            ${
              active
                ? "border-cyan-400/30 bg-cyan-400/[0.10] text-cyan-300"
                : completed
                  ? "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-400"
                  : "border-white/[0.06] bg-[#0B1117] text-slate-700"
            }
          `}
        >
          {completed &&
          !active ? (
            <Check className="size-4" />
          ) : (
            <Icon className="size-4" />
          )}
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* CONTENT                                                      */}
      {/* ============================================================ */}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`
              font-mono
              text-[9px]

              ${
                active
                  ? "text-cyan-400"
                  : "text-slate-800"
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

          {active && (
            <span
              className="
                flex
                items-center
                gap-1.5
                text-[8px]
                font-black
                uppercase
                tracking-[0.14em]
                text-emerald-400
              "
            >
              <span className="size-1 animate-pulse rounded-full bg-emerald-400" />

              active
            </span>
          )}
        </div>

        <p
          className={`
            mt-1
            truncate
            text-sm
            font-black
            transition

            ${
              active
                ? "text-white"
                : "text-slate-400"
            }
          `}
        >
          {stage.title}
        </p>

        <p
          className="
            mt-1
            truncate
            text-xs
            text-slate-700
          "
        >
          {stage.subtitle}
        </p>
      </div>

      {/* ============================================================ */}
      {/* ARROW                                                        */}
      {/* ============================================================ */}

      <ChevronRight
        className={`
          size-4
          shrink-0
          transition-all

          ${
            active
              ? "translate-x-0 text-cyan-400"
              : "-translate-x-1 text-slate-800 group-hover:translate-x-0 group-hover:text-slate-500"
          }
        `}
      />

      {/* active line */}

      {active && (
        <motion.div
          layoutId="careerStageActive"
          className="
            absolute
            bottom-0
            left-16
            right-4
            h-px
            bg-gradient-to-r
            from-cyan-400
            via-violet-400
            to-transparent
          "
        />
      )}
    </motion.button>
  );
}