import type {
  FunctionCommand,
} from "../types/terminal";

export const COMMAND_NAMES = [
  "help",

  "whoami",
  "story",
  "career",
  "experience",
  "impact",
  "dayjob",

  "stack",
  "backend",
  "controls",
  "telemetry",
  "points",
  "network",
  "diagnostic",

  "projects",
  "nees",
  "readymyvoice",
  "perlica",
  "dhms",

  "languages",
  "interests",
  "philosophy",
  "contact",
  "resume",

  "clear",

  // shell / easter eggs
  "ls",
  "pwd",
  "date",
  "coffee",
  "matrix",
  "sudo hire-yuri",
];

export const FUNCTION_COMMANDS: FunctionCommand[] = [
  {
    key: "F1",
    command: "story",
    label: "Story",
  },

  {
    key: "F2",
    command: "career",
    label: "Career",
  },

  {
    key: "F3",
    command: "impact",
    label: "Impact",
  },

  {
    key: "F4",
    command: "controls",
    label: "Controls",
  },

  {
    key: "F5",
    command: "projects",
    label: "Projects",
  },

  {
    key: "F6",
    command: "stack",
    label: "Stack",
  },

  {
    key: "F7",
    command: "contact",
    label: "Contact",
  },

  {
    key: "F8",
    command: "help",
    label: "Help",
  },
];