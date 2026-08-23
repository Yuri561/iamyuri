import {
  ArrowRight,
  Globe2,
  Sparkles,
} from "lucide-react";

import HeroCommandCenter from "./HeroCommandCenter";
import RoleRotator from "./RoleRotator";

const quickFacts = [
  {
    value: "7+ Years",
    label: "HVAC / Controls",
  },
  {
    value: "Python",
    label: "Backend Focus",
  },
  {
    value: "BACnet",
    label: "Automation",
  },
  {
    value: "CEO",
    label: "Leadership",
  },
  {
    value: "3",
    label: "Languages",
  },
  {
    value: "Live",
    label: "Production Apps",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        mx-auto
        grid
        min-h-[calc(100vh-74px)]
        max-w-[1550px]
        items-center
        gap-12
        px-4
        py-16

        sm:px-6
        sm:py-20

        lg:grid-cols-[1.08fr_.92fr]
        lg:px-10
        lg:py-24

        xl:px-12
      "
    >
      {/* =============================================================== */}
      {/* LEFT SIDE                                                       */}
      {/* =============================================================== */}

      <div className="relative z-10 min-w-0">
        {/* STATUS BADGES */}

        <div className="flex flex-wrap gap-2.5">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/[0.06]
              px-3.5
              py-2
              text-[9px]
              font-black
              uppercase
              tracking-[0.17em]
              text-emerald-400
            "
          >
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

            Open to opportunities
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/[0.06]
              px-3.5
              py-2
              text-[9px]
              font-black
              uppercase
              tracking-[0.17em]
              text-cyan-300
            "
          >
            <Globe2 className="size-3.5" />

            Remote / International
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500/20
              bg-green-500/[0.05]
              px-3.5
              py-2
              text-[9px]
              font-black
              uppercase
              tracking-[0.17em]
              text-green-300
            "
          >
            🇧🇷 Brazil Career Focus
          </span>
        </div>

        {/* NAME */}

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan-400" />

          <p className="font-mono text-xs text-cyan-300 sm:text-sm">
            Houbenove “Yuri” Pierre-Louis
          </p>
        </div>

        {/* MAIN HEADLINE */}

        <h1
          className="
            mt-6
            max-w-6xl
            text-[3rem]
            font-black
            leading-[0.92]
            tracking-[-0.065em]

            sm:text-[4.2rem]

            md:text-[4.8rem]

            xl:text-[6.2rem]
          "
        >
          I build systems that

          <span
            className="
              block
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-violet-400
              bg-clip-text
              text-transparent
            "
          >
            talk to the real world.
          </span>
        </h1>

        {/* MAIN DESCRIPTION */}

        <p
          className="
            mt-8
            max-w-[780px]
            text-base
            leading-8
            text-slate-400

            sm:text-lg
          "
        >
          Backend engineer and building automation specialist combining

          <strong className="font-semibold text-slate-200">
            {" "}
            Python, APIs, databases, BACnet, networking and field
            engineering
          </strong>{" "}

          to build reliable software and intelligent systems.
        </p>

        {/* CAREER CONTEXT */}

        <p
          className="
            mt-4
            max-w-[720px]
            text-sm
            leading-7
            text-slate-600
          "
        >
          7+ years in HVAC — progressing from installation and
          residential/commercial service into industrial controls,
          building automation and backend engineering.
        </p>

        {/* ROLE ROTATOR */}

        <RoleRotator />

        {/* CTA BUTTONS */}

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="
              group
              inline-flex
              min-h-[50px]
              items-center
              gap-3
              rounded-xl
              bg-cyan-400
              px-5
              text-sm
              font-black
              text-[#061014]
              shadow-[0_15px_50px_rgba(34,211,238,.14)]
              transition
              duration-300

              hover:-translate-y-0.5
              hover:bg-cyan-300
              hover:shadow-[0_18px_60px_rgba(34,211,238,.22)]
            "
          >
            Explore My Work

            <ArrowRight
              className="
                size-4
                transition
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

          <a
            href="#challenge"
            className="
              inline-flex
              min-h-[50px]
              items-center
              gap-3
              rounded-xl
              border
              border-violet-400/20
              bg-violet-500/[0.05]
              px-5
              text-sm
              font-bold
              text-violet-300
              transition
              duration-300

              hover:border-violet-400/40
              hover:bg-violet-500/[0.09]
            "
          >
            <Sparkles className="size-4" />

            Try the Engineering Challenge
          </a>
        </div>

        {/* QUICK FACTS */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.018]

            sm:grid-cols-3
          "
        >
          {quickFacts.map((item, index) => (
            <div
              key={item.label}
              className={`
                relative
                min-h-[92px]
                p-4
                sm:p-5

                ${
                  index % 2 !== 0
                    ? "border-l border-white/[0.07] sm:border-l-0"
                    : ""
                }

                ${
                  index % 3 !== 0
                    ? "sm:border-l sm:border-white/[0.07]"
                    : ""
                }

                ${
                  index >= 2
                    ? "border-t border-white/[0.07]"
                    : ""
                }

                ${
                  index >= 3
                    ? "sm:border-t sm:border-white/[0.07]"
                    : ""
                }
              `}
            >
              <p className="text-lg font-black text-white">
                {item.value}
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-slate-700
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =============================================================== */}
      {/* RIGHT SIDE                                                      */}
      {/* =============================================================== */}

      <HeroCommandCenter />
    </section>
  );
}