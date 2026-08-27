import OutputBlock from "../components/OutputBlock";

import TypewriterText from "../components/TypewriterText";

import {
  ContinueCommand,
  DataRow,
} from "../components/TerminalUI";

/* =============================================================================
   WHOAMI
============================================================================= */

export function WhoAmICommand() {
  return (
    <OutputBlock label="IDENTITY // ENGINEER PROFILE">
      <div className="mt-5 max-w-5xl">
        <div>
          <TypewriterText
            text='Houbenove "Yuri" Pierre-Louis'
            speed={22}
            className="
              text-xl
              font-black
              text-white

              sm:text-2xl
            "
          />
        </div>

        <div className="mt-2">
          <TypewriterText
            text="DDC Programmer // Controls Technician // Backend Developer // Community Builder"
            speed={11}
            delay={500}
            className="text-cyan-300"
          />
        </div>

        <div className="mt-6 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="I came into technology through physical systems. Before APIs and databases, I was installing and servicing HVAC equipment."
            speed={10}
            delay={1100}
          />
        </div>

        <div className="mt-3 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="Today my day job is building automation and DDC controls, while I continue building backend applications, automation tools and collaborative technology projects outside of work."
            speed={9}
            delay={2400}
          />
        </div>

        <div
          className="
            mt-7
            grid
            gap-x-12
            gap-y-1
            border-y
            border-white/[0.05]
            py-5

            sm:grid-cols-2
            lg:max-w-4xl
          "
        >
          <DataRow
            keyName="day_job"
            value="Controls Technician / DDC Programmer"
            delay={3700}
          />

          <DataRow
            keyName="software"
            value="Python / FastAPI"
            delay={3900}
          />

          <DataRow
            keyName="field"
            value="HVAC / BAS"
            delay={4100}
          />

          <DataRow
            keyName="protocol"
            value="BACnet"
            delay={4300}
          />

          <DataRow
            keyName="community"
            value="Impact Team Technology"
            delay={4500}
          />

          <DataRow
            keyName="mindset"
            value="diagnose → understand → build"
            success
            delay={4700}
          />
        </div>

        <ContinueCommand
          command="story"
          delay={5100}
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   STORY
============================================================================= */

export function StoryCommand() {
  return (
    <OutputBlock label="ORIGIN TRACE // FIELD TO SOFTWARE">
      <div className="mt-6 max-w-5xl">
        <StoryChapter
          number="01"
          title="It started with HVAC installation."
          text="My technical foundation began with heating and cooling systems — equipment, wiring, piping, electrical circuits and mechanical systems."
          delay={200}
        />

        <StoryChapter
          number="02"
          title="Then came HVAC service."
          text="Commercial service taught me troubleshooting. I had to understand why systems failed, isolate the problem and return equipment to operation."
          delay={1300}
        />

        <StoryChapter
          number="03"
          title="Technology became bigger than my job."
          text="I founded Impact Team Technology as a community where coders, designers, cybersecurity enthusiasts and people interested in technology could learn and collaborate."
          delay={2500}
        />

        <StoryChapter
          number="04"
          title="Collaboration became real work."
          text="Members began collaborating on websites and client projects, giving newer developers experience with requirements, teamwork, Git workflows and delivery."
          delay={3900}
        />

        <StoryChapter
          number="05"
          title="HVAC evolved into controls."
          text="My current day job is Controls Technician — or the title I prefer, DDC Programmer — where software logic, controllers, networks and physical equipment all meet."
          delay={5200}
        />

        <StoryChapter
          number="06"
          title="Backend development became another layer."
          text="Python, FastAPI, PostgreSQL and APIs let me apply the same systems thinking I learned in the field to software architecture and products."
          delay={6600}
          last
        />

        <div
          className="
            mt-8
            border
            border-cyan-400/10
            bg-cyan-400/[0.02]
            p-5
          "
        >
          <TypewriterText
            text="I didn't leave the physical world for software. I learned to program it."
            speed={16}
            delay={8000}
            className="
              text-base
              font-bold
              text-white

              sm:text-lg
            "
          />
        </div>

        <ContinueCommand
          command="career"
          delay={9100}
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   STORY CHAPTER
============================================================================= */

function StoryChapter({
  number,
  title,
  text,
  delay,
  last = false,
}: {
  number: string;
  title: string;
  text: string;
  delay: number;
  last?: boolean;
}) {
  return (
    <div
      className={`
        border-l
        border-cyan-400/15
        pl-5
        pb-8

        ${
          last
            ? "pb-1"
            : ""
        }
      `}
    >
      <TypewriterText
        text={`STAGE_${number}`}
        delay={delay}
        speed={8}
        cursor={false}
        className="
          text-[8px]
          font-black
          tracking-[0.18em]
          text-cyan-700
        "
      />

      <div className="mt-2">
        <TypewriterText
          text={title}
          delay={delay + 150}
          speed={12}
          cursor={false}
          className="
            text-sm
            font-black
            text-white

            sm:text-base
          "
        />
      </div>

      <div
        className="
          mt-2
          max-w-3xl
          leading-7
          text-slate-500
        "
      >
        <TypewriterText
          text={text}
          delay={delay + 350}
          speed={8}
          cursor={false}
        />
      </div>
    </div>
  );
}

/* =============================================================================
   CAREER
============================================================================= */

export function CareerCommand() {
  return (
    <OutputBlock label="CAREER TRACE // SYSTEM EVOLUTION">
      <div className="mt-6 space-y-6">
        <CareerEntry
          number="01"
          title="HVAC Installer"
          text="Equipment installation, wiring, piping and learning how mechanical systems are physically assembled."
          delay={100}
        />

        <CareerEntry
          number="02"
          title="Commercial HVAC Service"
          text="Troubleshooting refrigeration, electrical systems and real equipment failures in the field."
          delay={1100}
        />

        <CareerEntry
          number="03"
          title="Impact Team Technology"
          text="Founded a collaborative technology community for developers, designers, cybersecurity enthusiasts and people learning technology."
          delay={2200}
        />

        <CareerEntry
          number="04"
          title="Controls Technician / DDC Programmer"
          text="Building automation, BACnet networks, DDC logic, commissioning, AHUs, VAVs, RTUs, VFDs and field diagnostics."
          delay={3500}
        />

        <CareerEntry
          number="05"
          title="Backend Development"
          text="Python, FastAPI, PostgreSQL, authentication, APIs, payments, automation and production applications."
          delay={4800}
        />
      </div>

      <ContinueCommand
        command="impact"
        delay={6100}
      />
    </OutputBlock>
  );
}

function CareerEntry({
  number,
  title,
  text,
  delay,
}: {
  number: string;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <div
      className="
        grid
        gap-2

        md:grid-cols-[55px_230px_1fr]
      "
    >
      <TypewriterText
        text={number}
        delay={delay}
        speed={8}
        cursor={false}
        className="text-cyan-700"
      />

      <TypewriterText
        text={title}
        delay={delay + 100}
        speed={10}
        cursor={false}
        className="font-bold text-white"
      />

      <TypewriterText
        text={text}
        delay={delay + 250}
        speed={7}
        cursor={false}
        className="
          max-w-3xl
          leading-7
          text-slate-500
        "
      />
    </div>
  );
}

/* =============================================================================
   IMPACT TEAM
============================================================================= */

export function ImpactCommand() {
  return (
    <OutputBlock label="IMPACT TEAM TECHNOLOGY">
      <div className="mt-5">
        <TypewriterText
          text="Founder / CEO"
          speed={18}
          className="
            text-xl
            font-black
            text-white
          "
        />

        <div className="mt-2">
          <TypewriterText
            text="Technology Community // Collaboration // Mentorship"
            delay={400}
            speed={10}
            className="text-cyan-300"
          />
        </div>

        <div className="mt-6 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="I founded Impact Team Technology to create a place where people interested in technology could grow together instead of learning everything alone."
            delay={1000}
            speed={9}
          />
        </div>

        <div className="mt-3 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="The community includes coders, designers, cybersecurity enthusiasts and people exploring different areas of technology."
            delay={2300}
            speed={9}
          />
        </div>

        <div className="mt-3 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="Some members also collaborate on websites and client projects, giving newer developers practical experience with teamwork, requirements, Git workflows and delivery."
            delay={3500}
            speed={8}
          />
        </div>

        <div
          className="
            mt-7
            grid
            gap-2

            sm:grid-cols-2
            lg:max-w-4xl
          "
        >
          <DataRow
            keyName="role"
            value="Founder / CEO"
            delay={4900}
          />

          <DataRow
            keyName="community"
            value="Technology"
            delay={5100}
          />

          <DataRow
            keyName="members"
            value="Coders / Designers / Cybersecurity"
            delay={5300}
          />

          <DataRow
            keyName="client_work"
            value="Websites + projects"
            delay={5500}
          />

          <DataRow
            keyName="mentorship"
            value="Active"
            success
            delay={5700}
          />
        </div>

        <ContinueCommand
          command="projects"
          delay={6100}
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   DAY JOB
============================================================================= */

export function DayJobCommand() {
  return (
    <OutputBlock label="CURRENT ROLE // DDC PROGRAMMER">
      <div className="mt-5">
        <TypewriterText
          text="Controls Technician / DDC Programmer"
          speed={18}
          className="
            text-xl
            font-black
            text-white
          "
        />

        <div className="mt-5 max-w-4xl leading-7 text-slate-400">
          <TypewriterText
            text="My day job sits at the intersection of software logic, electronics, networking and HVAC equipment."
            delay={600}
            speed={10}
          />
        </div>

        <div className="mt-3 max-w-4xl leading-7 text-slate-500">
          <TypewriterText
            text="I work with building automation controllers, sequences, BACnet networks, sensors, actuators, VFDs and field devices while tracing the signal path between software commands and physical operation."
            delay={1700}
            speed={9}
          />
        </div>

        <div
          className="
            mt-7
            grid
            gap-2

            sm:grid-cols-2
            lg:max-w-4xl
          "
        >
          <DataRow
            keyName="protocol"
            value="BACnet"
            delay={3400}
          />

          <DataRow
            keyName="network"
            value="IP / MS-TP"
            delay={3600}
          />

          <DataRow
            keyName="logic"
            value="DDC sequences"
            delay={3800}
          />

          <DataRow
            keyName="equipment"
            value="AHU / VAV / RTU / VFD"
            delay={4000}
          />
        </div>

        <ContinueCommand
          command="controls"
          delay={4400}
        />
      </div>
    </OutputBlock>
  );
}