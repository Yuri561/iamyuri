import SectionLabel from "../layout/SectionLabel";
import TechStackExplorer from "./TechStackExplorer";

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="border-y border-white/[0.06] bg-[#090E13]"
    >
      <div className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <SectionLabel>
          Technical command center
        </SectionLabel>

        <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
          Explore my
          <span className="text-cyan-400">
            {" "}
            engineering stack.
          </span>
        </h2>

        <TechStackExplorer />
      </div>
    </section>
  );
}