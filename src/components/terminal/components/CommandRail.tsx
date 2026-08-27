import {
  Terminal,
} from "lucide-react";

import type {
  FormEvent,
  KeyboardEvent,
  RefObject,
} from "react";

import {
  FUNCTION_COMMANDS,
} from "../config/terminalCommands";

type Props = {
  input: string;

  setInput: (
    value: string,
  ) => void;

  processing: boolean;

  inputRef: RefObject<HTMLInputElement | null>;

  onSubmit: (
    event: FormEvent<HTMLFormElement>,
  ) => void;

  onKeyDown: (
    event: KeyboardEvent<HTMLInputElement>,
  ) => void;

  executeCommand: (
    command: string,
  ) => void;
};

export default function CommandRail({
  input,
  setInput,
  processing,
  inputRef,
  onSubmit,
  onKeyDown,
  executeCommand,
}: Props) {
  return (
    <div
      className="
        shrink-0
        border-t
        border-cyan-400/[0.08]
        bg-[#020606]/98
      "
    >
      {/* Desktop rail */}

      <div
        className="
          hidden
          h-10
          items-stretch
          border-b
          border-white/[0.05]

          md:flex
        "
      >
        {FUNCTION_COMMANDS.map(
          (item) => (
            <button
              type="button"
              key={item.key}
              onClick={() =>
                executeCommand(
                  item.command,
                )
              }
              className="
                group
                flex
                flex-1
                items-center
                justify-center
                gap-2
                border-r
                border-white/[0.04]
                bg-white/[0.008]
                text-[8px]
                uppercase
                tracking-[0.12em]
                transition

                last:border-r-0

                hover:bg-cyan-400/[0.04]
              "
            >
              <span
                className="
                  text-cyan-800
                  transition

                  group-hover:text-cyan-500
                "
              >
                [{item.key}]
              </span>

              <span
                className="
                  text-slate-700
                  transition

                  group-hover:text-slate-300
                "
              >
                {item.label}
              </span>
            </button>
          ),
        )}
      </div>

      {/* Mobile command rail */}

      <div
        className="
          flex
          gap-1.5
          overflow-x-auto
          border-b
          border-white/[0.05]
          px-3
          py-2

          md:hidden
        "
      >
        {FUNCTION_COMMANDS.map(
          (item) => (
            <button
              type="button"
              key={item.command}
              onClick={() =>
                executeCommand(
                  item.command,
                )
              }
              className="
                shrink-0
                border
                border-white/[0.06]
                bg-white/[0.015]
                px-2.5
                py-1.5
                text-[8px]
                uppercase
                tracking-[0.1em]
                text-slate-500
              "
            >
              {item.label}
            </button>
          ),
        )}
      </div>

      {/* Prompt */}

      <form
        onSubmit={onSubmit}
        className="
          flex
          min-h-[52px]
          items-center
          gap-1.5
          px-3
          text-[11px]

          sm:gap-2
          sm:px-5
          sm:text-[12px]

          lg:px-7
          lg:text-[13px]
        "
      >
        <Terminal
          className="
            mr-1
            size-3.5
            shrink-0
            text-cyan-700
          "
        />

        <span
          className="
            shrink-0
            font-bold
            text-emerald-400
          "
        >
          visitor@yuri
        </span>

        <span className="text-slate-700">
          :
        </span>

        <span
          className="
            hidden
            text-cyan-400

            sm:inline
          "
        >
          ~/engineering
        </span>

        <span className="text-cyan-400 sm:hidden">
          ~
        </span>

        <span className="text-white">
          $
        </span>

        <input
          ref={inputRef}
          value={input}
          onChange={(event) =>
            setInput(
              event.target.value,
            )
          }
          onKeyDown={onKeyDown}
          disabled={processing}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder="type a command..."
          className="
  terminal-command-input
  min-w-0
  w-full
  flex-1
  border-none
  bg-transparent
  text-[16px]
  text-white
  caret-cyan-300
  outline-none

  placeholder:text-slate-800

  sm:text-[12px]
  lg:text-[13px]

  disabled:opacity-50
"
        />
      </form>
    </div>
  );
}