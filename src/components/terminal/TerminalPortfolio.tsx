import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Activity,
  BadgeCheck,
  Binary,
  Circle,
  Cpu,
  Wifi,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  COMMAND_NAMES,
  FUNCTION_COMMANDS,
} from "./config/terminalCommands";

import {
  commandRegistry,
} from "./engine/commandRegistry";

import type {
  Telemetry,
  TerminalLine,
} from "./types/terminal";

import TypewriterText from "./components/TypewriterText";

import CommandLine from "./components/CommandLine";

import CommandRail from "./components/CommandRail";
import YuriSigniture from "./signiture/YuriSigniture";

/* =============================================================================
   MAIN
============================================================================= */

export default function TerminalPortfolio() {
  const [input, setInput] =
    useState("");

  const [
    history,
    setHistory,
  ] = useState<TerminalLine[]>(
    [],
  );

  const [
    commandHistory,
    setCommandHistory,
  ] = useState<string[]>(
    [],
  );

  const [
    historyIndex,
    setHistoryIndex,
  ] = useState(-1);

  const [
    processing,
    setProcessing,
  ] = useState(false);

  const [telemetry, setTelemetry] =
    useState<Telemetry>({
      apiLatency: 41,
      dbLatency: 12,
      supplyAir: 55.2,
      staticPressure: 1.73,
      vfdSpeed: 64,
      packets: 1842,
    });

  const terminalRef =
    useRef<HTMLDivElement>(null);

  const inputRef =
    useRef<HTMLInputElement>(null);

  const lineId =
    useRef(1);

  /* =========================================================================
     SIMULATED TELEMETRY
  ========================================================================= */

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        setTelemetry(
          (current) => ({
            apiLatency:
              Math.max(
                28,
                Math.min(
                  65,
                  current.apiLatency +
                    Math.round(
                      Math.random() *
                        6 -
                        3,
                    ),
                ),
              ),

            dbLatency:
              Math.max(
                7,
                Math.min(
                  24,
                  current.dbLatency +
                    Math.round(
                      Math.random() *
                        4 -
                        2,
                    ),
                ),
              ),

            supplyAir:
              Number(
                (
                  current.supplyAir +
                  (Math.random() -
                    0.5) *
                    0.2
                ).toFixed(1),
              ),

            staticPressure:
              Number(
                (
                  current.staticPressure +
                  (Math.random() -
                    0.5) *
                    0.03
                ).toFixed(2),
              ),

            vfdSpeed:
              Math.max(
                50,
                Math.min(
                  80,
                  current.vfdSpeed +
                    Math.round(
                      Math.random() *
                        4 -
                        2,
                    ),
                ),
              ),

            packets:
              current.packets +
              Math.round(
                Math.random() *
                  20 +
                  4,
              ),
          }),
        );
      }, 1800);

    return () =>
      window.clearInterval(
        timer,
      );
  }, []);

  /* =========================================================================
     AUTO SCROLL
  ========================================================================= */

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top:
        terminalRef.current
          .scrollHeight,

      behavior: "smooth",
    });
  }, [
    history,
    processing,
  ]);

  /* =========================================================================
     ADD LINE
  ========================================================================= */

  const addLine = (
    type:
      | "command"
      | "output"
      | "error",

    content:
      React.ReactNode,
  ) => {
    setHistory(
      (current) => [
        ...current,

        {
          id:
            lineId.current++,

          type,

          content,
        },
      ],
    );
  };

  /* =========================================================================
     EXECUTE
  ========================================================================= */

  const executeCommand = (
    rawCommand: string,
  ) => {
    if (processing) {
      return;
    }

    const command =
      rawCommand
        .trim()
        .toLowerCase();

    if (!command) {
      return;
    }

    setInput("");

    setCommandHistory(
      (current) => [
        ...current,
        command,
      ],
    );

    setHistoryIndex(-1);

    if (
      command === "clear"
    ) {
      setHistory([]);

      inputRef.current?.focus();

      return;
    }

    addLine(
      "command",
      command,
    );

    setProcessing(true);

    window.setTimeout(() => {
      const handler =
        commandRegistry[
          command
        ];

      if (!handler) {
        addLine(
          "error",

          <div>
            <TypewriterText
              text={`bash: ${command}: command not found`}
              speed={12}
              className="text-red-400"
            />

            <div className="mt-1">
              <TypewriterText
                text="Try help."
                delay={350}
                speed={12}
                className="text-slate-700"
              />
            </div>
          </div>,
        );

        setProcessing(false);

        return;
      }

      addLine(
        "output",

        handler({
          telemetry,
        }),
      );

      setProcessing(false);

      window.setTimeout(
        () =>
          inputRef.current?.focus(),
        100,
      );
    }, 350);
  };

  /* =========================================================================
     SUBMIT
  ========================================================================= */

  const handleSubmit = (
    event:
      FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    executeCommand(input);
  };

  /* =========================================================================
     KEYBOARD
  ========================================================================= */

  const handleKeyDown = (
    event:
      KeyboardEvent<HTMLInputElement>,
  ) => {
    /* Function keys */

    const functionCommand =
      FUNCTION_COMMANDS.find(
        (item) =>
          item.key ===
          event.key,
      );

    if (functionCommand) {
      event.preventDefault();

      executeCommand(
        functionCommand.command,
      );

      return;
    }

    /* Tab autocomplete */

    if (event.key === "Tab") {
      event.preventDefault();

      if (!input.trim()) {
        return;
      }

      const match =
        COMMAND_NAMES.find(
          (command) =>
            command.startsWith(
              input.toLowerCase(),
            ),
        );

      if (match) {
        setInput(match);
      }

      return;
    }

    /* History */

    if (
      event.key ===
      "ArrowUp"
    ) {
      event.preventDefault();

      if (
        commandHistory.length ===
        0
      ) {
        return;
      }

      const nextIndex =
        historyIndex < 0
          ? commandHistory.length -
            1
          : Math.max(
              0,
              historyIndex -
                1,
            );

      setHistoryIndex(
        nextIndex,
      );

      setInput(
        commandHistory[
          nextIndex
        ],
      );

      return;
    }

    if (
      event.key ===
      "ArrowDown"
    ) {
      event.preventDefault();

      if (
        historyIndex < 0
      ) {
        return;
      }

      const nextIndex =
        historyIndex + 1;

      if (
        nextIndex >=
        commandHistory.length
      ) {
        setHistoryIndex(-1);

        setInput("");

        return;
      }

      setHistoryIndex(
        nextIndex,
      );

      setInput(
        commandHistory[
          nextIndex
        ],
      );
    }
  };

  /* =========================================================================
     GLOBAL FUNCTION KEYS
  ========================================================================= */

  useEffect(() => {
    const handleFunctionKey = (
      event:
        globalThis.KeyboardEvent,
    ) => {
      const command =
        FUNCTION_COMMANDS.find(
          (item) =>
            item.key ===
            event.key,
        );

      if (!command) {
        return;
      }

      event.preventDefault();

      executeCommand(
        command.command,
      );
    };

    window.addEventListener(
      "keydown",
      handleFunctionKey,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleFunctionKey,
      );
  });

  /* =========================================================================
     RENDER
  ========================================================================= */

  return (
    <section
      className="
        relative
        h-[100dvh]
        w-screen
        overflow-hidden
        bg-[#010303]
        font-mono
        text-slate-300
      "
    >
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            [background-image:linear-gradient(rgba(34,211,238,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.28)_1px,transparent_1px)]
            [background-size:46px_46px]
          "
        />

        <motion.div
          animate={{
            top: [
              "-10%",
              "110%",
            ],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-0
            right-0
            h-px
            bg-cyan-400/[0.07]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,.82)_100%)]
          "
        />
      </div>

      {/* Main window */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.985,
          filter:
            "blur(4px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter:
            "blur(0px)",
        }}
        className="
          absolute
          inset-2
          flex
          flex-col
          overflow-hidden
          border
          border-cyan-400/[0.13]
          bg-[#030707]/96

          sm:inset-3
          md:inset-5
          xl:inset-7
        "
      >
        {/* Header */}

        <header
          className="
            grid
            h-14
            shrink-0
            grid-cols-[1fr_auto_1fr]
            items-center
            border-b
            border-white/[0.06]
            bg-[#050A0A]
            px-3

            sm:px-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Circle
              className="
                size-2
                fill-red-400
                text-red-400
              "
            />

            <Circle
              className="
                size-2
                fill-amber-400
                text-amber-400
              "
            />

            <Circle
              className="
                size-2
                fill-emerald-400
                text-emerald-400
              "
            />

            <Cpu
              className="
                ml-3
                hidden
                size-3
                text-cyan-500

                lg:block
              "
            />
          </div>

          <div className="text-center">
            <p
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.16em]
                text-slate-300

                sm:text-[9px]
                md:tracking-[0.25em]
              "
            >
              YURI // ENGINEERING CONSOLE
            </p>

            <p
              className="
                mt-1
                hidden
                text-[7px]
                tracking-[0.16em]
                text-slate-800

                sm:block
              "
            >
              DDC • BACKEND • CONTROLS • SYSTEMS
            </p>
          </div>

          <div
            className="
              flex
              justify-end
              gap-3
            "
          >
            <Wifi
              className="
                size-3.5
                text-emerald-500
              "
            />

            <BadgeCheck
              className="
                hidden
                size-4
                text-cyan-500

                sm:block
              "
            />
          </div>
        </header>

        {/* Main output */}

        <div
          ref={terminalRef}
          onClick={() =>
            inputRef.current?.focus()
          }
          className="
            min-h-0
            flex-1
            overflow-y-auto
            terminal-scrollbar
            overscroll-contain
            px-4
            py-5
            text-[11px]
            leading-6

            sm:px-6
            sm:text-[12px]

            md:px-8
            md:py-7

            lg:px-12
            lg:text-[13px]

            xl:px-16

            2xl:px-20
            2xl:py-10
            2xl:text-[14px]
          "
        >
          {/* Opening */}
          <YuriSigniture/>
          <div
            className="
              max-w-4xl
              border-l
              border-cyan-400/20
              pl-4

              sm:pl-5
            "
          >
            <div>
              <TypewriterText
                text="I BUILD SOFTWARE THAT TALKS TO THE REAL WORLD."
                speed={24}
                className="
                  text-sm
                  font-black
                  tracking-[0.08em]
                  text-cyan-300

                  sm:text-base
                  lg:text-lg
                "
              />
            </div>

            <div className="mt-6">
              <TypewriterText
                text='Houbenove "Yuri" Pierre-Louis'
                delay={1500}
                speed={28}
                className="
                  font-bold
                  text-white
                "
              />
            </div>

            <div className="mt-2">
              <TypewriterText
                text="DDC Programmer // Building Automation // Backend Development // Community Builder"
                delay={2700}
                speed={12}
                className="text-slate-400"
              />
            </div>

            <div
              className="
                mt-6
                space-y-1
                leading-7
              "
            >
              <div className="text-slate-600">
                <TypewriterText
                  text="My career started with HVAC installations."
                  delay={3900}
                  speed={12}
                />
              </div>

              <div className="text-slate-600">
                <TypewriterText
                  text="Then came commercial service and troubleshooting."
                  delay={4700}
                  speed={12}
                />
              </div>

              <div className="text-slate-500">
                <TypewriterText
                  text="Then the machines started talking."
                  delay={5600}
                  speed={14}
                />
              </div>

              <div className="text-slate-400">
                <TypewriterText
                  text="Controllers. Networks. BACnet. Logic. Data."
                  delay={6400}
                  speed={15}
                />
              </div>

              <div
                className="
                  pt-3
                  font-bold
                  text-white
                "
              >
                <TypewriterText
                  text="Learning software became the next logical step."
                  delay={7300}
                  speed={13}
                />
              </div>
            </div>

            <div
              className="
                mt-7
                text-slate-500
              "
            >
              <TypewriterText
                text="Start with story or help."
                delay={8500}
                speed={15}
              />
            </div>
          </div>

          {/* History */}

          <AnimatePresence>
            {history.map(
              (line) => (
                <motion.div
                  key={line.id}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-7
                    max-w-[1180px]
                  "
                >
                  {line.type ===
                  "command" ? (
                    <CommandLine>
                      {
                        line.content
                      }
                    </CommandLine>
                  ) : (
                    line.content
                  )}
                </motion.div>
              ),
            )}
          </AnimatePresence>

          {/* Processing */}

          <AnimatePresence>
            {processing && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  tracking-[0.14em]
                  text-slate-700
                "
              >
                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.65,
                    repeat:
                      Infinity,
                    ease: "linear",
                  }}
                >
                  <Binary
                    className="
                      size-3
                      text-cyan-600
                    "
                  />
                </motion.span>

                EXECUTING QUERY
              </motion.div>
            )}
          </AnimatePresence>

          <div className="h-8" />
        </div>

        {/* Always-visible command rail */}

        <CommandRail
          input={input}
          setInput={setInput}
          processing={processing}
          inputRef={inputRef}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          executeCommand={executeCommand}
        />

        {/* Footer */}

        <footer
          className="
            grid
            h-8
            shrink-0
            grid-cols-[1fr_auto]
            items-center
            border-t
            border-white/[0.04]
            bg-[#050A0A]
            px-4
            text-[7px]
            uppercase
            tracking-[0.14em]

            sm:grid-cols-3
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-emerald-500
            "
          >
            <Activity
              className="size-3"
            />

            SESSION ACTIVE
          </div>

          <div
            className="
              hidden
              text-center
              text-slate-800

              sm:block
            "
          >
            F1-F8 // TAB COMPLETE // ↑ ↓ HISTORY
          </div>

          <div className="text-right text-slate-700">
            YURI.OS
          </div>
        </footer>
      </motion.div>
    </section>
  );
}