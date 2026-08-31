import OutputBlock from "../components/OutputBlock";

import TypewriterText from "../components/TypewriterText";

import {
  CommandHelp,
  ContinueCommand,
} from "../components/TerminalUI";

/* =============================================================================
   HELP
============================================================================= */

export function HelpCommand() {
  const commands = [
    [
      "whoami",
      "quick engineer profile",
    ],

    [
      "story",
      "how the journey started",
    ],

    [
      "career",
      "career evolution",
    ],

    [
      "impact",
      "Impact Team Technology",
    ],

    [
      "dayjob",
      "current DDC role",
    ],

    [
      "controls",
      "building automation",
    ],

    [
      "backend",
      "backend engineering",
    ],

    [
      "stack",
      "technical stack",
    ],

    [
      "projects",
      "project registry",
    ],

    [
      "nees",
      "inspect Nee's Learning",
    ],

    [
      "readymyvoice",
      "inspect Ready My Voice",
    ],

    [
      "perlica",
      "inspect Perlica",
    ],

    [
      "dhms",
      "inspect DHMS",
    ],

    [
      "telemetry",
      "simulated engineering data",
    ],

    [
      "points",
      "BACnet point table",
    ],

    [
      "network",
      "system topology",
    ],

    [
      "diagnostic",
      "field troubleshooting",
    ],

    [
      "languages",
      "language profile",
    ],

    [
      "interests",
      "current interests",
    ],

    [
      "philosophy",
      "engineering mindset",
    ],

    [
      "contact",
      "communication links",
    ],

    [
      "resume",
      "open resume",
    ],
  ];

  return (
    <OutputBlock label="ENGINEERING COMMAND INDEX">
      <div
        className="
          mt-6
          grid
          gap-x-12
          gap-y-2

          md:grid-cols-2
        "
      >
        {commands.map(
          (
            [
              command,
              description,
            ],
            index,
          ) => (
            <CommandHelp
              key={command}
              command={command}
              text={description}
              delay={
                index * 90
              }
            />
          ),
        )}
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   LANGUAGES
============================================================================= */

export function LanguagesCommand() {
  return (
    <OutputBlock label="LANGUAGE INTERFACE">
      <div className="mt-5 space-y-3">
        <LanguageLine
          text="🇭🇹 Haitian Creole ........ Native"
          delay={100}
        />

        <LanguageLine
          text="🇺🇸 English ............... Professional"
          delay={500}
        />

        <LanguageLine
          text="🇫🇷 French ................ Professional"
          delay={900}
        />

        <LanguageLine
          text="🇧🇷 Portuguese ............ Developing"
          delay={1300}
          active
        />
      </div>

      <div className="mt-6">
        <TypewriterText
          text="Tecnologia não tem fronteiras."
          delay={1800}
          speed={14}
          className="text-green-300"
        />
      </div>
    </OutputBlock>
  );
}

function LanguageLine({
  text,
  delay,
  active = false,
}: {
  text: string;
  delay: number;
  active?: boolean;
}) {
  return (
    <TypewriterText
      text={text}
      delay={delay}
      speed={9}
      cursor={false}
      className={
        active
          ? "text-green-400"
          : "text-slate-400"
      }
    />
  );
}

/* =============================================================================
   PHILOSOPHY
============================================================================= */

export function PhilosophyCommand() {
  return (
    <OutputBlock label="ENGINEERING PHILOSOPHY">
      <div className="mt-6">
        <TypewriterText
          text="Understand the system before touching the system."
          speed={16}
          className="
            text-xl
            font-black
            text-white
          "
        />
      </div>

      <div className="mt-7 space-y-4">
        <Principle
          n="01"
          title="Don't guess."
          text="Inspect logs, measure signals, verify state and collect evidence."
          delay={800}
        />

        <Principle
          n="02"
          title="Trace the entire path."
          text="A problem at the output may originate several layers upstream."
          delay={1800}
        />

        <Principle
          n="03"
          title="Understand dependencies."
          text="Controllers depend on networks. APIs depend on services. Services depend on data."
          delay={2800}
        />

        <Principle
          n="04"
          title="Build for the person after you."
          text="Readable code, useful documentation and predictable architecture matter."
          delay={3900}
        />

        <Principle
          n="05"
          title="Stay curious."
          text="The most useful engineering question is still: why?"
          delay={5000}
        />
      </div>

      <ContinueCommand
        command="contact"
        delay={6100}
      />
    </OutputBlock>
  );
}

function Principle({
  n,
  title,
  text,
  delay,
}: {
  n: string;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <div
      className="
        grid
        gap-2

        sm:grid-cols-[45px_190px_1fr]
      "
    >
      <TypewriterText
        text={n}
        delay={delay}
        speed={8}
        cursor={false}
        className="text-cyan-800"
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
        speed={8}
        cursor={false}
        className="text-slate-500"
      />
    </div>
  );
}

/* =============================================================================
   INTERESTS
============================================================================= */

export function InterestsCommand() {
  const interests = [
    "Backend architecture",
    "Python automation",
    "Building automation",
    "BACnet",
    "DDC programming",
    "IoT",
    "Raspberry Pi",
    "Networking",
    "API integrations",
    "Smart infrastructure",
    "Cybersecurity",
    "Brazilian Portuguese",
    "International engineering",
    "Developer mentorship",
    "Systems diagnostics",
    "Community building",
    "Product engineering",
  ];

  return (
    <OutputBlock label="ACTIVE CURIOSITY BUFFER">
      <div
        className="
          mt-5
          grid
          gap-y-2

          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {interests.map(
          (
            interest,
            index,
          ) => (
            <TypewriterText
              key={interest}
              text={`${String(
                index + 1,
              ).padStart(
                2,
                "0",
              )}  ${interest}`}
              delay={
                index * 120
              }
              speed={8}
              cursor={false}
              className="text-slate-500"
            />
          ),
        )}
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   CONTACT
============================================================================= */

export function ContactCommand() {
  return (
    <OutputBlock label="COMMUNICATION BUS">
      <div className="mt-5 space-y-4">
        <ContactLink
          label="EMAIL"
          value="houbenovep@gmail.com"
          href="mailto:houbenovep@gmail.com"
          delay={100}
        />

        <ContactLink
          label="GITHUB"
          value="github.com/Yuri561"
          href="https://github.com/Yuri561"
          delay={700}
        />

        <ContactLink
          label="LINKEDIN"
          value="/in/houbenove-pierre-louis"
          href="https://linkedin.com/in/houbenove-pierre-louis"
          delay={1300}
        />
      </div>
    </OutputBlock>
  );
}

function ContactLink({
  label,
  value,
  href,
  delay,
}: {
  label: string;
  value: string;
  href: string;
  delay: number;
}) {
  return (
    <a
      href={href}
      target={
        href.startsWith(
          "http",
        )
          ? "_blank"
          : undefined
      }
      rel="noreferrer"
      className="
        grid
        gap-2
        border-b
        border-white/[0.05]
        pb-3

        sm:grid-cols-[100px_1fr_auto]
      "
    >
      <TypewriterText
        text={label}
        delay={delay}
        speed={8}
        cursor={false}
        className="text-slate-700"
      />

      <TypewriterText
        text={value}
        delay={delay + 100}
        speed={8}
        cursor={false}
        className="text-slate-400"
      />

      <span className="text-cyan-500">
        CONNECT ↗
      </span>
    </a>
  );
}

/* =============================================================================
   RESUME
============================================================================= */

export function ResumeCommand() {
  return (
    <OutputBlock label="RESUME SERVICE">
      <div className="mt-5">
        <TypewriterText
          text="Resume available."
          speed={14}
          className="text-slate-400"
        />
      </div>

      <div className="mt-4">
        <a
          href="/myres.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-cyan-200"
        >
          OPEN RESUME ↗
        </a>
      </div>
    </OutputBlock>
  );
}