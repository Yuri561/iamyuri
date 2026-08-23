import {
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import SectionLabel from "../layout/SectionLabel";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 pb-20 sm:px-6 lg:px-10 xl:px-12"
    >
      <div className="relative mx-auto grid max-w-[1550px] gap-10 overflow-hidden rounded-[36px] border border-cyan-400/[0.15] bg-[#0D151C] p-7 sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:p-14">
        <div className="absolute right-[-180px] top-[-260px] size-[600px] rounded-full bg-violet-500/[0.10] blur-[130px]" />

        <div className="relative">
          <SectionLabel>
            Let's connect
          </SectionLabel>

          <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
            Looking for an engineer
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              who understands systems?
            </span>
          </h2>

          <p className="mt-7 max-w-2xl leading-8 text-slate-400">
            I'm interested in backend
            engineering, Python, APIs,
            automation, building controls,
            systems integration and
            international opportunities.
          </p>
        </div>

        <div className="relative self-end">
          <a
            href="mailto:youremail@example.com"
            className="group flex min-h-[72px] items-center justify-between rounded-2xl bg-white p-5 text-[#071014]"
          >
            <div className="flex items-center gap-4">
              <div className="grid size-11 place-items-center rounded-xl bg-[#071014] text-white">
                <Mail className="size-5" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-black">
                  Start a conversation
                </p>
              </div>
            </div>

            <ChevronRight className="size-5 transition group-hover:translate-x-1" />
          </a>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href="#"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/[0.08] text-xs font-bold text-slate-400"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>

            <a
              href="#"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/[0.08] text-xs font-bold text-slate-400"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>

          <div className="mt-3 flex min-h-[52px] items-center gap-3 rounded-xl border border-white/[0.08] p-4 text-xs text-slate-500">
            <MapPin className="size-4 text-cyan-400" />
            Open to remote & international
            opportunities
          </div>
        </div>
      </div>
    </section>
  );
}