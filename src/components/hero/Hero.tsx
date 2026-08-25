import {
  ArrowDown,
  ArrowRight,
  Code2,
  Cpu,
  Globe2,
  RadioTower,
  Sparkles,
  Terminal,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import HeroCommandCenter from "./HeroCommandCenter";
import RoleRotator from "./RoleRotator";

/* ========================================================================== */
/* QUICK FACTS                                                                */
/* ========================================================================== */

const quickFacts = [
  {
    icon: Cpu,
    value: "5+ Years",
    label: "HVAC / Controls",
  },

  {
    icon: Code2,
    value: "Python",
    label: "Backend Engineering",
  },

  {
    icon: RadioTower,
    value: "BACnet",
    label: "Automation",
  },

  {
    icon: Globe2,
    value: "Global",
    label: "Career Direction",
  },
];

/* ========================================================================== */
/* HERO                                                                       */
/* ========================================================================== */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        border-b
        border-white/[0.05]
      "
    >
      {/* ================================================================== */}
      {/* BACKGROUND EFFECTS                                                 */}
      {/* ================================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
            [background-size:52px_52px]
          "
        />

        {/* cyan glow */}

        <div
          className="
            absolute
            left-[-180px]
            top-[10%]
            size-[500px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[140px]
          "
        />

        {/* violet glow */}

        <div
          className="
            absolute
            right-[-180px]
            top-[15%]
            size-[520px]
            rounded-full
            bg-violet-500/[0.06]
            blur-[150px]
          "
        />

        {/* center fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-[#070B10]
            to-transparent
          "
        />
      </div>

      {/* ================================================================== */}
      {/* HERO CONTENT                                                       */}
      {/* ================================================================== */}

      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-74px)]
          max-w-[1550px]
          items-center
          gap-14
          px-4
          py-16

          sm:px-6
          sm:py-20

          lg:grid-cols-[1.04fr_.96fr]
          lg:px-10
          lg:py-24

          xl:gap-16
          xl:px-12
        "
      >
        {/* ================================================================= */}
        {/* LEFT                                                             */}
        {/* ================================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative z-10 min-w-0"
        >
          {/* =============================================================== */}
          {/* STATUS                                                          */}
          {/* =============================================================== */}

          <div className="flex flex-wrap gap-2">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/15
                bg-emerald-500/[0.04]
                px-3.5
                py-2
              "
            >
              <span
                className="
                  relative
                  flex
                  size-2
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    size-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    size-2
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.17em]
                  text-emerald-300
                "
              >
                Open to opportunities
              </span>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/15
                bg-cyan-500/[0.04]
                px-3.5
                py-2
              "
            >
              <Globe2 className="size-3.5 text-cyan-400" />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.17em]
                  text-cyan-300
                "
              >
                Remote / International
              </span>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/15
                bg-green-500/[0.04]
                px-3.5
                py-2
              "
            >
              <span className="text-sm">
                🇧🇷
              </span>

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.17em]
                  text-green-300
                "
              >
                Brazil Career Focus
              </span>
            </div>
          </div>

          {/* =============================================================== */}
          {/* NAME                                                            */}
          {/* =============================================================== */}

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <div className="flex items-center gap-2">
              <Terminal className="size-3.5 text-cyan-400" />

              <p
                className="
                  font-mono
                  text-xs
                  text-cyan-300
                  sm:text-sm
                "
              >
                Houbenove “Yuri” Pierre-Louis
              </p>
            </div>
          </div>

          {/* =============================================================== */}
          {/* HEADLINE                                                        */}
          {/* =============================================================== */}

          <h1
            className="
              mt-6
              max-w-[900px]
              text-[3rem]
              font-black
              leading-[0.92]
              tracking-[-0.065em]

              sm:text-[4rem]

              md:text-[4.7rem]

              xl:text-[5.8rem]

              2xl:text-[6.2rem]
            "
          >
            I build systems that

            <span
              className="
                relative
                mt-1
                block
                w-fit
                max-w-full
              "
            >
              <span
                className="
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

              <motion.span
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                }}
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-gradient-to-r
                  from-cyan-400/70
                  via-violet-400/50
                  to-transparent
                "
              />
            </span>
          </h1>

          {/* =============================================================== */}
          {/* DESCRIPTION                                                     */}
          {/* =============================================================== */}

          <p
            className="
              mt-9
              max-w-[760px]
              text-base
              leading-8
              text-slate-400

              sm:text-lg
            "
          >
            Backend engineer and building automation specialist combining{" "}

            <strong className="font-semibold text-slate-200">
              Python, APIs, databases, BACnet, networking, and field
              engineering
            </strong>{" "}

            to build software that connects digital systems with the physical
            world.
          </p>

          {/* =============================================================== */}
          {/* CAREER STORY                                                    */}
          {/* =============================================================== */}

          <div
            className="
              mt-6
              max-w-[730px]
              border-l
              border-white/[0.08]
              pl-4
            "
          >
            <p
              className="
                text-sm
                leading-7
                text-slate-600
              "
            >
              5+ years in HVAC  progressing from installation and
              residential/commercial service into industrial controls,
              building automation, systems integration, and backend
              engineering.
            </p>
          </div>

          {/* =============================================================== */}
          {/* ROLE ROTATOR                                                    */}
          {/* =============================================================== */}

          <RoleRotator />

          {/* =============================================================== */}
          {/* ACTIONS                                                         */}
          {/* =============================================================== */}

          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
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
                shadow-[0_15px_50px_rgba(34,211,238,.13)]
                transition
                hover:bg-cyan-300
              "
            >
              Explore My Work

              <ArrowRight
                className="
                  size-4
                  transition
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            <motion.a
              href="#challenge"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                inline-flex
                min-h-[50px]
                items-center
                gap-3
                rounded-xl
                border
                border-violet-400/20
                bg-violet-500/[0.04]
                px-5
                text-sm
                font-bold
                text-violet-300
                transition
                hover:border-violet-400/40
                hover:bg-violet-500/[0.08]
              "
            >
              <Sparkles className="size-4" />

              Engineering Challenge
            </motion.a>
          </div>

          {/* =============================================================== */}
          {/* QUICK FACTS                                                     */}
          {/* =============================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-2
              overflow-hidden
              rounded-[22px]
              border
              border-white/[0.07]
              bg-[#0B1117]/60
              backdrop-blur

              sm:grid-cols-4
            "
          >
            {quickFacts.map(
              (
                {
                  icon: Icon,
                  value,
                  label,
                },
                index,
              ) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      0.35 +
                      index * 0.08,
                  }}
                  whileHover={{
                    backgroundColor:
                      "rgba(34,211,238,0.035)",
                  }}
                  className={`
                    group
                    relative
                    min-h-[110px]
                    p-4
                    sm:p-5

                    ${
                      index % 2 !== 0
                        ? "border-l border-white/[0.07]"
                        : ""
                    }

                    ${
                      index >= 2
                        ? "border-t border-white/[0.07] sm:border-t-0"
                        : ""
                    }

                    ${
                      index > 0
                        ? "sm:border-l sm:border-white/[0.07]"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="
                        size-4
                        text-slate-700
                        transition
                        group-hover:text-cyan-400
                      "
                    />

                    <span
                      className="
                        size-1.5
                        rounded-full
                        bg-slate-800
                        transition
                        group-hover:bg-emerald-400
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-4
                      text-lg
                      font-black
                      text-white
                    "
                  >
                    {value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-slate-700
                    "
                  >
                    {label}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* ================================================================= */}
        {/* RIGHT — INTERACTIVE TERMINAL                                     */}
        {/* ================================================================= */}

        <div className="relative lg:pl-2">
          <div
            className="
              mb-3
              hidden
              items-center
              gap-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.17em]
              text-slate-700
              lg:flex
            "
          >
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

            interactive profile terminal
          </div>

          <HeroCommandCenter />
        </div>
      </div>

      {/* ================================================================== */}
      {/* SCROLL INDICATOR                                                   */}
      {/* ================================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-700
          xl:flex
        "
      >
        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.2em]
          "
        >
          scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
        >
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}