import type {
  CommandContext,
  CommandHandler,
} from "../types/terminal";

import {
  CareerCommand,
  DayJobCommand,
  ImpactCommand,
  StoryCommand,
  WhoAmICommand,
} from "../commands/IdentityCommands";

import {
  BackendCommand,
  ControlsCommand,
  DiagnosticCommand,
  NetworkCommand,
  PointsCommand,
  StackCommand,
  TelemetryCommand,
} from "../commands/TechnicalCommands";

import {
  DhmsCommand,
  NeesCommand,
  PerlicaCommand,
  ProjectsCommand,
  ReadyMyVoiceCommand,
} from "../commands/ProjectCommands";

import {
  ContactCommand,
  HelpCommand,
  InterestsCommand,
  LanguagesCommand,
  PhilosophyCommand,
  ResumeCommand,
} from "../commands/MiscCommands";

export const commandRegistry: Record<
  string,
  CommandHandler
> = {
  help: () => (
    <HelpCommand />
  ),

  whoami: () => (
    <WhoAmICommand />
  ),

  about: () => (
    <WhoAmICommand />
  ),

  story: () => (
    <StoryCommand />
  ),

  career: () => (
    <CareerCommand />
  ),

  impact: () => (
    <ImpactCommand />
  ),

  leadership: () => (
    <ImpactCommand />
  ),

  dayjob: () => (
    <DayJobCommand />
  ),

  stack: () => (
    <StackCommand />
  ),

  backend: () => (
    <BackendCommand />
  ),

  controls: () => (
    <ControlsCommand />
  ),

  telemetry: ({
    telemetry,
  }: CommandContext) => (
    <TelemetryCommand
      telemetry={telemetry}
    />
  ),

  status: ({
    telemetry,
  }: CommandContext) => (
    <TelemetryCommand
      telemetry={telemetry}
    />
  ),

  points: ({
    telemetry,
  }: CommandContext) => (
    <PointsCommand
      telemetry={telemetry}
    />
  ),

  network: ({
    telemetry,
  }: CommandContext) => (
    <NetworkCommand
      telemetry={telemetry}
    />
  ),

  diagnostic: () => (
    <DiagnosticCommand />
  ),

  projects: () => (
    <ProjectsCommand />
  ),

  nees: () => (
    <NeesCommand />
  ),

  readymyvoice: () => (
    <ReadyMyVoiceCommand />
  ),

  perlica: () => (
    <PerlicaCommand />
  ),

  dhms: () => (
    <DhmsCommand />
  ),

  languages: () => (
    <LanguagesCommand />
  ),

  interests: () => (
    <InterestsCommand />
  ),

  philosophy: () => (
    <PhilosophyCommand />
  ),

  contact: () => (
    <ContactCommand />
  ),

  resume: () => (
    <ResumeCommand />
  ),

  pwd: () => (
    <p className="text-cyan-300">
      /home/yuri/engineering
    </p>
  ),

  date: () => (
    <p className="text-slate-400">
      {new Date().toString()}
    </p>
  ),

  ls: () => (
    <pre
      className="
        grid
        grid-cols-2
        gap-2
        text-cyan-400

        sm:grid-cols-3
      "
    >
      <span>
        story.log
      </span>

      <span>
        career.log
      </span>

      <span>
        impact/
      </span>

      <span>
        controls.sys
      </span>

      <span>
        projects/
      </span>

      <span>
        stack.json
      </span>
    </pre>
  ),

  coffee: () => (
    <pre className="text-amber-300">
{`coffee.service()

pressure      9 bar
temperature   200°F
status        BREWING

✓ engineer operational`}
    </pre>
  ),

  matrix: () => (
    <div className="space-y-1 text-emerald-400">
      <p>
        01011001 01010101
        01010010 01001001
      </p>

      <p>
        wake up, recruiter...
      </p>
    </div>
  ),

  "sudo hire-yuri": () => (
    <div className="space-y-2">
      <p className="text-amber-300">
        [sudo] evaluating candidate...
      </p>

      <p>
        HVAC field experience
        ........ PASS
      </p>

      <p>
        DDC controls
        ................ PASS
      </p>

      <p>
        backend development
        ........... PASS
      </p>

      <p>
        systems thinking
        ............. PASS
      </p>

      <p>
        leadership
        ................... PASS
      </p>

      <p className="pt-3 text-xl font-black text-emerald-400">
        ACCESS GRANTED
      </p>
    </div>
  ),
};