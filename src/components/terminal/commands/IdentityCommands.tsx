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
          text="My technical foundation began in the field — installing HVAC systems, working with ductwork, wiring thermostats, reading mechanical layouts and learning how equipment operates."
          delay={200}
        />

        <StoryChapter
          number="02"
          title="Troubleshooting became the foundation."
          text="Residential and commercial maintenance pushed me deeper into diagnostics. I learned to isolate electrical, mechanical and controls-related failures and restore systems to operation."
          delay={1300}
        />

        <StoryChapter
          number="03"
          title="Leadership came next."
          text="As a Lead Maintenance Technician, I managed service priorities, trained technicians and handled complex HVAC, electrical and building system issues while keeping daily operations moving."
          delay={2500}
        />

        <StoryChapter
          number="04"
          title="HVAC evolved into automation."
          text="I moved into factory and building controls, working with BACnet, VFDs, energy management systems, IP networking and control hardware — connecting mechanical systems to digital logic."
          delay={3900}
        />

        <StoryChapter
          number="05"
          title="Controls became systems engineering."
          text="Project support work exposed me to data centers and mobile switching facilities, where I configured and commissioned BAS/DDC systems using Distech Controls, JACE controllers, Automated Logic and Niagara Tridium."
          delay={5200}
        />

        <StoryChapter
          number="06"
          title="Today, I program the building."
          text="As a Controls Technician, I program, configure, commission and troubleshoot DDC/BAS systems across AHUs, RTUs, VAVs, boilers, heat pumps and VFDs while working across BACnet, Modbus and TCP/IP networks."
          delay={6600}
        />

        <StoryChapter
          number="07"
          title="Software became the next layer."
          text="Through Impact Team Technology and my own development work, I expanded into Python, FastAPI, JavaScript, TypeScript, React, databases and APIs — applying the same systems thinking from controls to software."
          delay={8000}
          last
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
          title="HVAC Installation"
          text="Built my technical foundation installing HVAC equipment, ductwork, thermostats and low-voltage control wiring."
          delay={100}
        />

        <CareerEntry
          number="02"
          title="Lead Maintenance Technician"
          text="Advanced into HVAC, electrical and building systems troubleshooting while supervising technicians and managing daily service operations."
          delay={1100}
        />

        <CareerEntry
          number="03"
          title="Factory Controls Technician"
          text="Moved deeper into automation through commercial HVAC controls, BACnet networks, VFD programming, energy management systems and field diagnostics."
          delay={2200}
        />

        <CareerEntry
          number="04"
          title="Project Support Engineer"
          text="Delivered and commissioned BAS/DDC solutions for critical facilities using Distech Controls, JACE controllers, Automated Logic and Niagara Tridium."
          delay={3400}
        />

        <CareerEntry
          number="05"
          title="Controls Technician // DDC"
          text="Program, commission and troubleshoot building automation systems across AHUs, RTUs, VAVs, boilers, heat pumps, VFDs, BACnet, Modbus and TCP/IP networks."
          delay={4700}
        />

        <CareerEntry
          number="06"
          title="Impact Team Technology"
          text="Co-founded and lead a technology community focused on software development, cybersecurity, design, mentorship and collaborative technical projects."
          delay={6000}
        />

        <CareerEntry
          number="07"
          title="Backend & Software Development"
          text="Build applications with Python, FastAPI, PostgreSQL, JavaScript, TypeScript, React, REST APIs, authentication and database-driven architectures."
          delay={7300}
        />

      </div>

      <ContinueCommand
        command="impact"
        delay={8600}
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