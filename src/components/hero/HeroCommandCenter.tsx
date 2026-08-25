import {
  BadgeCheck,
  ChevronRight,
  Terminal,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type TerminalEntry = {
  id: number;
  command?: string;
  output: React.ReactNode;
};

const commands = {
  help: (
    <div className="space-y-1">
      <p className="text-slate-500">
        Available commands:
      </p>

      <p>
        <span className="text-cyan-300">about</span>
        {"      "}Who I am
      </p>

      <p>
        <span className="text-cyan-300">interests</span>
        {"  "}What keeps me curious
      </p>

      <p>
        <span className="text-cyan-300">stack</span>
        {"      "}Engineering stack
      </p>

      <p>
        <span className="text-cyan-300">controls</span>
        {"   "}HVAC / BAS background
      </p>

      <p>
        <span className="text-cyan-300">languages</span>
        {"  "}Languages I speak
      </p>

      <p>
        <span className="text-cyan-300">projects</span>
        {"   "}Things I build
      </p>

      <p>
        <span className="text-cyan-300">contact</span>
        {"    "}How to reach me
      </p>

      <p>
        <span className="text-cyan-300">clear</span>
        {"      "}Clear terminal
      </p>
    </div>
  ),

  about: (
    <div className="space-y-2">
      <p className="text-white">
        Houbenove “Yuri” Pierre-Louis
      </p>

      <p className="text-slate-500">
        Backend developer + building automation specialist.
      </p>

      <p className="text-slate-500">
        I like building software that can eventually communicate
        with real equipment, networks, sensors, and physical systems.
      </p>

      <p className="text-emerald-400">
        status: always_building
      </p>
    </div>
  ),

  interests: (
    <div className="space-y-2">
      <p className="text-violet-300">
        interests.load()
      </p>

      <div className="grid gap-1 text-slate-500">
        <p>→ Backend engineering</p>
        <p>→ Python & API architecture</p>
        <p>→ Building automation</p>
        <p>→ HVAC controls</p>
        <p>→ BACnet & connected systems</p>
        <p>→ Raspberry Pi / IoT experiments</p>
        <p>→ Networking & systems integration</p>
        <p>→ Brazilian Portuguese 🇧🇷</p>
        <p>→ Mentoring developers</p>
        <p>→ Building useful products</p>
      </div>
    </div>
  ),

  stack: (
    <div className="space-y-2">
      <p>
        <span className="text-cyan-300">backend</span>
        {"    "}Python / FastAPI / PostgreSQL
      </p>

      <p>
        <span className="text-violet-300">frontend</span>
        {"   "}React / TypeScript / Tailwind
      </p>

      <p>
        <span className="text-emerald-300">controls</span>
        {"   "}BACnet / BAS / HVAC
      </p>

      <p>
        <span className="text-amber-300">cloud</span>
        {"      "}Render / Vercel / Supabase
      </p>

      <p>
        <span className="text-blue-300">tools</span>
        {"      "}Git / Postman / SQLAlchemy
      </p>
    </div>
  ),

  controls: (
    <div className="space-y-2">
      <p className="text-cyan-300">
        controls.profile()
      </p>

      <p className="text-slate-500">
        5+ years across HVAC installation, residential service,
        commercial service, and building automation.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-500">
        <p>AHU</p>
        <p>VAV</p>
        <p>RTU</p>
        <p>VFD</p>
        <p>BACnet/IP</p>
        <p>MS/TP</p>
        <p>Sensors</p>
        <p>Controllers</p>
      </div>

      <p className="text-emerald-400">
        field_diagnostics: enabled
      </p>
    </div>
  ),

  languages: (
    <div className="space-y-1">
      <p>
        🇭🇹 Haitian Creole
        <span className="text-slate-600"> — native</span>
      </p>

      <p>
        🇺🇸 English
        <span className="text-slate-600"> — professional</span>
      </p>

      <p>
        🇫🇷 French
        <span className="text-slate-600"> — professional</span>
      </p>

      <p>
        🇧🇷 Portuguese
        <span className="text-green-400"> — developing</span>
      </p>
    </div>
  ),

  projects: (
    <div className="space-y-1">
      <p className="text-cyan-300">
        projects --featured
      </p>

      <p className="text-slate-500">
        → Nee's Learning & Translation Services
      </p>

      <p className="text-slate-500">
        → CasaPro
      </p>

      <p className="text-slate-500">
        → DHMS International
      </p>

      <p className="text-slate-500">
        → F.A.T.E.
      </p>

      <p className="text-slate-500">
        → Y1 Technologies
      </p>

      <p className="mt-2 text-emerald-400">
        scroll_to: #projects
      </p>
    </div>
  ),

  contact: (
    <div className="space-y-2">
      <p className="text-cyan-300">
        contact.open()
      </p>

      <p className="text-slate-500">
        Open to backend, automation, systems, and international
        engineering opportunities.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
      >
        Go to contact section
        <ChevronRight className="size-3" />
      </a>
    </div>
  ),
};

type CommandName = keyof typeof commands;

const quickCommands: CommandName[] = [
  "about",
  "interests",
  "stack",
  "controls",
  "languages",
  "projects",
];

export default function HeroCommandCenter() {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      id: 1,
      output: (
        <div className="space-y-1">
          <p className="text-cyan-300">
            Yuri Engineering Terminal v1.0
          </p>

          <p className="text-slate-600">
            Interactive profile initialized.
          </p>

          <p className="text-slate-600">
            Type{" "}
            <span className="text-emerald-400">
              help
            </span>{" "}
            or choose a command below.
          </p>
        </div>
      ),
    },
  ]);

  const nextId = useRef(2);

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand
      .trim()
      .toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const commandOutput =
      commands[command as CommandName];

    const output = commandOutput ?? (
      <div>
        <p className="text-red-400">
          command not found: {command}
        </p>

        <p className="mt-1 text-slate-600">
          Type{" "}
          <span className="text-cyan-400">
            help
          </span>{" "}
          to see available commands.
        </p>
      </div>
    );

    setHistory((current) => [
      ...current,
      {
        id: nextId.current++,
        command,
        output,
      },
    ]);

    setInput("");
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    executeCommand(input);
  };

  return (
    <div className="relative min-w-0">
      {/* Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 scale-90 rounded-full bg-cyan-500/[0.08] blur-[120px]" />

        <div className="absolute right-[-80px] top-[20%] size-60 rounded-full bg-violet-500/[0.06] blur-[100px]" />
      </div>

      {/* Terminal */}

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/[0.09]
          bg-[#090D12]
          shadow-[0_50px_120px_rgba(0,0,0,.55)]
        "
      >
        {/* Window bar */}

        <div className="flex min-h-[56px] items-center justify-between border-b border-white/[0.07] px-5">
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>

          <div className="flex items-center gap-2">
            <Terminal className="size-3.5 text-cyan-400" />

            <p className="font-mono text-[9px] text-slate-600">
              yuri@engineering:~
            </p>
          </div>

          <BadgeCheck className="size-4 text-cyan-400" />
        </div>

        {/* Terminal header */}

        <div className="border-b border-white/[0.06] px-5 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold text-white">
                Engineering Profile Terminal
              </p>

              <p className="mt-1 font-mono text-[9px] text-slate-700">
                backend • automation • systems • curiosity
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.04] px-3 py-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-300">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Terminal output */}

        <div
          ref={terminalRef}
          className="
            h-[390px]
            overflow-y-auto
            px-5
            py-5
            font-mono
            text-[11px]
            leading-6
            scrollbar-thin
            sm:h-[420px]
          "
        >
          <AnimatePresence initial={false}>
            {history.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mb-6"
              >
                {entry.command && (
                  <p className="mb-2">
                    <span className="text-emerald-400">
                      yuri@portfolio
                    </span>

                    <span className="text-slate-700">
                      :
                    </span>

                    <span className="text-cyan-400">
                      ~
                    </span>

                    <span className="text-white">
                      $ {entry.command}
                    </span>
                  </p>
                )}

                <div className="text-slate-400">
                  {entry.output}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Cursor */}

          <div className="flex items-center gap-2">
            <span className="text-emerald-400">
              yuri@portfolio
            </span>

            <span className="text-slate-700">
              :
            </span>

            <span className="text-cyan-400">
              ~
            </span>

            <span className="animate-pulse text-white">
              ▋
            </span>
          </div>
        </div>

        {/* Quick commands */}

        <div className="border-t border-white/[0.06] px-4 py-3">
          <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700">
            Quick commands
          </p>

          <div className="flex flex-wrap gap-2">
            {quickCommands.map((command) => (
              <motion.button
                type="button"
                key={command}
                onClick={() =>
                  executeCommand(command)
                }
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  px-3
                  py-1.5
                  font-mono
                  text-[9px]
                  text-slate-500
                  transition
                  hover:border-cyan-400/20
                  hover:text-cyan-300
                "
              >
                {command}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Command input */}

        <form
          onSubmit={handleSubmit}
          className="
            flex
            items-center
            border-t
            border-white/[0.07]
            bg-black/20
            px-5
            py-4
            font-mono
          "
        >
          <span className="mr-2 text-emerald-400">
            $
          </span>

          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            placeholder="type a command..."
            spellCheck={false}
            autoComplete="off"
            className="
              min-w-0
              flex-1
              bg-transparent
              text-xs
              text-white
              outline-none
              placeholder:text-slate-700
            "
          />

          <button
            type="submit"
            className="
              ml-3
              inline-flex
              items-center
              gap-1
              rounded-lg
              border
              border-cyan-400/15
              bg-cyan-400/[0.05]
              px-3
              py-1.5
              text-[9px]
              font-black
              text-cyan-300
              transition
              hover:bg-cyan-400/[0.1]
            "
          >
            RUN
            <ChevronRight className="size-3" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}