import OutputBlock from "../components/OutputBlock";

import TypewriterText from "../components/TypewriterText";

import {
  ContinueCommand,
} from "../components/TerminalUI";

/* =============================================================================
   PROJECT INDEX
============================================================================= */

export function ProjectsCommand() {
  return (
    <OutputBlock label="PROJECT REGISTRY // PRODUCTION WORK">
      <div className="mt-5 max-w-4xl leading-7 text-slate-500">
        <TypewriterText
          text="A selection of software and client projects covering backend systems, AI voice tooling, travel technology and e-commerce."
          speed={9}
        />
      </div>

      <div className="mt-7 space-y-4">
        <ProjectRecord
          number="01"
          name="Nee's Learning & Translation Services"
          type="Full-Stack Platform"
          description="Production tutoring and translation platform with authentication, learner and tutor profiles, availability, bookings, payments and backend business logic."
          stack="FastAPI / PostgreSQL / React / TypeScript / Supabase / PayPal"
          url="https://neeslearning.com"
          inspect="nees"
          delay={900}
        />

        <ProjectRecord
          number="02"
          name="Ready My Voice"
          type="AI Voice Platform"
          description="Voice-focused application exploring text-to-speech workflows, voice selection, generation, playback, exports and an interactive AI voice workspace."
          stack="Python / FastAPI / React / TypeScript / AI Audio"
          url="https://readymyvoice.vercel.app/"
          inspect="readymyvoice"
          delay={2600}
        />

        <ProjectRecord
          number="03"
          name="Perlica Tours & Travel"
          type="Travel Platform"
          description="Interactive travel experience built around destinations, packages, discovery tools, partners and visually immersive frontend interactions."
          stack="React / TypeScript / Vite / OGL / Vercel"
          url="https://www.perlicatoursandtravel.com/"
          inspect="perlica"
          delay={4300}
        />

        <ProjectRecord
          number="04"
          name="DHMS International"
          type="Client E-Commerce"
          description="Customer-facing boutique commerce platform focused on African fashion, beauty, product discovery, retail categories and responsive shopping experiences."
          stack="React / E-Commerce / Responsive UI"
          url="https://www.dhmsint.com/"
          inspect="dhms"
          delay={6000}
        />
      </div>

      <ContinueCommand
        command="nees"
        delay={7800}
      />
    </OutputBlock>
  );
}

/* =============================================================================
   PROJECT RECORD
============================================================================= */

function ProjectRecord({
  number,
  name,
  type,
  description,
  stack,
  url,
  inspect,
  delay,
}: {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string;
  url: string;
  inspect: string;
  delay: number;
}) {
  return (
    <div
      className="
        border-l
        border-white/[0.07]
        pl-4
        py-2

        sm:pl-5
      "
    >
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
        "
      >
        <TypewriterText
          text={`PRJ-${number}`}
          delay={delay}
          speed={8}
          cursor={false}
          className="text-cyan-700"
        />

        <TypewriterText
          text={name}
          delay={delay + 120}
          speed={12}
          cursor={false}
          className="font-bold text-white"
        />
      </div>

      <div className="mt-1">
        <TypewriterText
          text={type}
          delay={delay + 300}
          speed={8}
          cursor={false}
          className="
            text-[9px]
            uppercase
            tracking-[0.13em]
            text-slate-700
          "
        />
      </div>

      <div
        className="
          mt-3
          max-w-4xl
          leading-7
          text-slate-500
        "
      >
        <TypewriterText
          text={description}
          delay={delay + 450}
          speed={7}
          cursor={false}
        />
      </div>

      <div className="mt-3">
        <TypewriterText
          text={stack}
          delay={delay + 1050}
          speed={7}
          cursor={false}
          className="text-slate-600"
        />
      </div>

      <div
        className="
          mt-3
          flex
          flex-wrap
          gap-5
          text-[9px]
        "
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="
            text-cyan-400
            transition
            hover:text-cyan-200
          "
        >
          OPEN LIVE ↗
        </a>

        <span className="text-slate-700">
          inspect:
          {" "}
          <span className="text-cyan-500">
            {inspect}
          </span>
        </span>
      </div>
    </div>
  );
}

/* =============================================================================
   NEE'S LEARNING
============================================================================= */

export function NeesCommand() {
  return (
    <OutputBlock label="PROJECT INSPECT // NEE'S LEARNING">
      <div className="mt-5">
        <TypewriterText
          text="Nee's Learning & Translation Services"
          speed={18}
          className="
            text-xl
            font-black
            text-white
          "
        />

        <div className="mt-2">
          <TypewriterText
            text="Tutoring // Translation // Booking // Payments // Authentication"
            speed={10}
            delay={500}
            className="text-cyan-300"
          />
        </div>

        <div className="mt-6 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="A production application where I worked heavily on backend architecture, authentication, database design, bookings, availability, user profiles and payment workflows."
            speed={9}
            delay={1200}
          />
        </div>

        <pre
          className="
            mt-7
            overflow-x-auto
            text-[10px]
            leading-6
            text-slate-500

            sm:text-[11px]
          "
        >
{`
                React / TypeScript
                       │
                       │ REST
                       ▼
                    FastAPI
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      AUTH          BOOKINGS       PAYMENTS
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                  PostgreSQL
`}
        </pre>

        <div className="mt-5">
          <a
            href="https://neeslearning.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-200"
          >
            OPEN PRODUCTION ↗
          </a>
        </div>

        <ContinueCommand
          command="readymyvoice"
          delay={2500}
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   READY MY VOICE
============================================================================= */

export function ReadyMyVoiceCommand() {
  return (
    <OutputBlock label="PROJECT INSPECT // READY MY VOICE">
      <div className="mt-5">
        <TypewriterText
          text="Ready My Voice"
          speed={18}
          className="
            text-xl
            font-black
            text-white
          "
        />

        <div className="mt-2">
          <TypewriterText
            text="AI Voice Workspace // Generation // Playback // Export"
            delay={450}
            speed={10}
            className="text-cyan-300"
          />
        </div>

        <div className="mt-6 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="Ready My Voice explores AI-assisted voice workflows through a dedicated workspace for selecting voices, generating speech, previewing audio and exporting generated results."
            delay={1100}
            speed={9}
          />
        </div>

        <div className="mt-4 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="The project combines a React and TypeScript interface with a Python backend architecture, while also exploring desktop-style interactions and voice tooling."
            delay={2500}
            speed={8}
          />
        </div>

        <div className="mt-6">
          <a
            href="https://readymyvoice.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-200"
          >
            OPEN LIVE ↗
          </a>
        </div>

        <ContinueCommand
          command="perlica"
          delay={3700}
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   PERLICA
============================================================================= */

export function PerlicaCommand() {
  return (
    <OutputBlock label="PROJECT INSPECT // PERLICA">
      <div className="mt-5">
        <TypewriterText
          text="Perlica Tours & Travel"
          speed={18}
          className="
            text-xl
            font-black
            text-white
          "
        />

        <div className="mt-2">
          <TypewriterText
            text="Travel Discovery // Packages // Partners // Interactive UI"
            delay={450}
            speed={10}
            className="text-cyan-300"
          />
        </div>

        <div className="mt-6 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="Perlica pushed me further into interactive frontend engineering. Instead of treating travel as a static catalog, the goal was to make discovering destinations and packages feel visual and exploratory."
            delay={1100}
            speed={9}
          />
        </div>

        <div className="mt-4 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="The experience includes package discovery, search filters, travel partners and custom visual interactions using React, TypeScript and WebGL-oriented tooling."
            delay={2800}
            speed={8}
          />
        </div>

        <div className="mt-6">
          <a
            href="https://www.perlicatoursandtravel.com/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-200"
          >
            OPEN LIVE ↗
          </a>
        </div>

        <ContinueCommand
          command="dhms"
          delay={4200}
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   DHMS
============================================================================= */

export function DhmsCommand() {
  return (
    <OutputBlock label="PROJECT INSPECT // DHMS INTERNATIONAL">
      <div className="mt-5">
        <TypewriterText
          text="DHMS International"
          speed={18}
          className="
            text-xl
            font-black
            text-white
          "
        />

        <div className="mt-2">
          <TypewriterText
            text="Boutique Commerce // Product Discovery // Responsive Retail"
            delay={450}
            speed={10}
            className="text-cyan-300"
          />
        </div>

        <div className="mt-6 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="DHMS International is a customer-facing retail experience created for a boutique business selling African fashion, beauty and cultural products."
            delay={1100}
            speed={9}
          />
        </div>

        <div className="mt-4 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="The platform focuses on product discovery, retail categories, customer navigation, visual merchandising and a responsive shopping experience."
            delay={2400}
            speed={8}
          />
        </div>

        <div className="mt-6">
          <a
            href="https://www.dhmsint.com/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-200"
          >
            OPEN LIVE ↗
          </a>
        </div>

        <ContinueCommand
          command="contact"
          delay={3600}
        />
      </div>
    </OutputBlock>
  );
}