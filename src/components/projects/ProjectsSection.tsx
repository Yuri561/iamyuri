import { useState } from "react";

import { projects } from "../../data/projects";

import SectionLabel from "../layout/SectionLabel";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [
    expandedProject,
    setExpandedProject,
  ] = useState<string | null>("01");

  return (
    <section
      id="projects"
      className="border-y border-white/[0.06] bg-[#090E13]"
    >
      <div className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <SectionLabel>
          Engineering portfolio
        </SectionLabel>

        <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
          Projects built around
          <span className="block text-cyan-400">
            real problems.
          </span>
        </h2>

        <div className="mt-10 space-y-4">
          {projects.map(
            (project) => (
              <ProjectCard
                key={project.id}
                project={project}
                expanded={
                  expandedProject ===
                  project.id
                }
                onToggle={() =>
                  setExpandedProject(
                    expandedProject ===
                      project.id
                      ? null
                      : project.id,
                  )
                }
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}