import type { ReactNode } from "react";

export type LineType =
  | "command"
  | "output"
  | "error";

export type TerminalLine = {
  id: number;
  type: LineType;
  content: ReactNode;
};

export type FunctionCommand = {
  key: string;
  command: string;
  label: string;
};

export type Telemetry = {
  apiLatency: number;
  dbLatency: number;
  supplyAir: number;
  staticPressure: number;
  vfdSpeed: number;
  packets: number;
};

export type CommandContext = {
  telemetry: Telemetry;
};

export type CommandHandler = (
  context: CommandContext,
) => ReactNode;