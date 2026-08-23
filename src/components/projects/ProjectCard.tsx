import {
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

import type { Project } from "../../types/portfolio";

import ProjectDetails from "./ProjectDetails";

type Props = {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
};

export default function ProjectCard({
  project,
  expanded,
  onToggle,
}: Props) {
  return (
    <article className="overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#0D1319]">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[110px] w-full items-center justify-between gap-5 p-5 text-left sm:p-7"
      >
        <div className="flex items-center gap-5">
          <span className="font-mono text-xs text-cyan-400">
            {project.id}
          </span>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-700">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-black sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-1 text-xs text-slate-600">
              {project.subtitle}
            </p>
          </div>
        </div>

        <ChevronDown
          className={`size-5 shrink-0 transition ${
            expanded
              ? "rotate-180 text-cyan-400"
              : "text-slate-600"
          }`}
        />
      </button>

      {expanded && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="border-t border-white/[0.07]"
        >
          <ProjectDetails
            project={project}
          />
        </motion.div>
      )}
    </article>
  );
}