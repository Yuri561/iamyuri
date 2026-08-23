import { motion } from "framer-motion";

import SectionLabel from "../layout/SectionLabel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="grid gap-12 lg:grid-cols-[.68fr_1.32fr]"
      >
        <div>
          <SectionLabel>
            About me
          </SectionLabel>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
            Engineering from both sides of the
            <span className="text-cyan-400">
              {" "}
              wire.
            </span>
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-slate-300">
            I didn't enter software without
            first understanding how real
            systems behave outside a laptop.
          </p>

          <p className="mt-6 leading-8 text-slate-500">
            HVAC installation taught me how
            equipment is built. Service work
            taught me how to diagnose it.
            Commercial HVAC introduced larger
            system dependencies. Controls
            showed me how software, networking
            and physical equipment interact.
          </p>

          <p className="mt-5 leading-8 text-slate-500">
            Backend engineering became the
            next logical step. When an API,
            database, payment flow or cloud
            integration fails, I approach it
            the same way I approach a field
            system: trace the path, verify the
            layers and isolate the real cause.
          </p>

          <p className="mt-5 font-semibold leading-8 text-slate-300">
            My advantage is the combination of
            software, controls, field
            experience, troubleshooting,
            leadership and communication.
          </p>
        </div>
      </motion.div>
    </section>
  );
}