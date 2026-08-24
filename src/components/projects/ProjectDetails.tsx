
import type { Project } from "../../types/portfolio";

type Props = {
  project: Project;
};

export default function ProjectDetails({
  project,
}: Props) {
  return (
    <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_.8fr]">
      <div>
        <p className="leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-7 grid gap-5">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-400">
              Problem
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              {project.problem}
            </p>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-violet-400">
              My contribution
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              {project.contribution}
            </p>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-400">
              Result
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              {project.result}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.07] bg-black/10 p-5">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-700">
          Technology
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map(
            (item) => (
              <span
                key={item}
                className="rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
              >
                {item}
              </span>
            ),
          )}
        </div>

        {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center gap-2 text-xs font-black text-cyan-400"
    >
      View Live Project ↗
    </a>
  )}
      </div>
    </div>
  );
}