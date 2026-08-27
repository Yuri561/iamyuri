import OutputBlock from "../components/OutputBlock";

import TypewriterText from "../components/TypewriterText";

import {
  ContinueCommand,
  DataRow,
  Metric,
  Trace,
} from "../components/TerminalUI";

import type {
  Telemetry,
} from "../types/terminal";

/* =============================================================================
   STACK
============================================================================= */

export function StackCommand() {
  return (
    <OutputBlock label="ENGINEERING STACK">
      <pre
        className="
          mt-5
          overflow-x-auto
          leading-7
          text-slate-400
        "
      >
{`BACKEND
  Python             FastAPI
  PostgreSQL         SQLAlchemy
  Pydantic           REST APIs
  JWT                OAuth

FRONTEND
  React              TypeScript
  JavaScript         Tailwind
  Vite

CONTROLS
  BACnet/IP          BACnet MS/TP
  DDC                Niagara
  AHU                VAV
  RTU                VFD

INFRASTRUCTURE
  Git                GitHub
  Render             Vercel
  Supabase           Postman`}
      </pre>

      <ContinueCommand
        command="backend"
        delay={600}
      />
    </OutputBlock>
  );
}

/* =============================================================================
   BACKEND
============================================================================= */

export function BackendCommand() {
  return (
    <OutputBlock label="BACKEND DEVELOPMENT">
      <div
        className="
          mt-5
          max-w-4xl
          leading-7
          text-slate-400
        "
      >
        <TypewriterText
          text="Backend development feels natural to me because the architecture resembles controls work: inputs, validation, logic, state, communication, outputs and failures."
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
          keyName="language"
          value="Python"
          delay={1400}
        />

        <DataRow
          keyName="framework"
          value="FastAPI"
          delay={1600}
        />

        <DataRow
          keyName="database"
          value="PostgreSQL"
          delay={1800}
        />

        <DataRow
          keyName="orm"
          value="SQLAlchemy"
          delay={2000}
        />

        <DataRow
          keyName="validation"
          value="Pydantic"
          delay={2200}
        />

        <DataRow
          keyName="auth"
          value="JWT / OAuth"
          delay={2400}
        />
      </div>

      <ContinueCommand
        command="projects"
        delay={2900}
      />
    </OutputBlock>
  );
}

/* =============================================================================
   CONTROLS
============================================================================= */

export function ControlsCommand() {
  return (
    <OutputBlock label="BUILDING AUTOMATION // DDC CONTROLS">
      <div
        className="
          mt-5
          grid
          gap-8

          lg:grid-cols-[.75fr_1.25fr]
        "
      >
        <div>
          <DataRow
            keyName="protocol"
            value="BACnet"
            delay={100}
          />

          <DataRow
            keyName="transport"
            value="IP / MS-TP"
            delay={300}
          />

          <DataRow
            keyName="logic"
            value="DDC"
            delay={500}
          />

          <DataRow
            keyName="equipment"
            value="AHU / VAV / RTU / VFD"
            delay={700}
          />

          <DataRow
            keyName="diagnostics"
            value="ACTIVE"
            success
            delay={900}
          />
        </div>

        <div
          className="
            border-l
            border-white/[0.06]
            pl-5
          "
        >
          <TypewriterText
            text="FIELD TROUBLESHOOTING SEQUENCE"
            delay={1200}
            speed={9}
            cursor={false}
            className="
              text-[8px]
              font-black
              tracking-[0.18em]
              text-cyan-600
            "
          />

          <div className="mt-4 space-y-2">
            <Trace
              n="01"
              text="Verify the command"
              delay={1500}
            />

            <Trace
              n="02"
              text="Verify BAS point state"
              delay={1800}
            />

            <Trace
              n="03"
              text="Measure controller output"
              delay={2100}
            />

            <Trace
              n="04"
              text="Trace the field signal"
              delay={2400}
            />

            <Trace
              n="05"
              text="Verify device response"
              delay={2700}
            />

            <Trace
              n="06"
              text="Compare expected vs actual"
              delay={3000}
            />

            <Trace
              n="07"
              text="Prove root cause before replacement"
              delay={3300}
            />
          </div>
        </div>
      </div>

      <ContinueCommand
        command="diagnostic"
        delay={3900}
      />
    </OutputBlock>
  );
}

/* =============================================================================
   TELEMETRY
============================================================================= */

export function TelemetryCommand({
  telemetry,
}: {
  telemetry: Telemetry;
}) {
  return (
    <OutputBlock label="SIMULATED SYSTEM TELEMETRY">
      <div
        className="
          mt-5
          grid
          gap-x-8
          gap-y-2

          sm:grid-cols-2
          lg:max-w-4xl
          lg:grid-cols-3
        "
      >
        <Metric
          label="API LATENCY"
          value={`${telemetry.apiLatency} ms`}
          delay={100}
        />

        <Metric
          label="DB QUERY"
          value={`${telemetry.dbLatency} ms`}
          delay={300}
        />

        <Metric
          label="SUPPLY AIR"
          value={`${telemetry.supplyAir} °F`}
          delay={500}
        />

        <Metric
          label="STATIC PRESS"
          value={`${telemetry.staticPressure} inWC`}
          delay={700}
        />

        <Metric
          label="VFD SPEED"
          value={`${telemetry.vfdSpeed} %`}
          delay={900}
        />

        <Metric
          label="BACNET PACKETS"
          value={`${telemetry.packets}`}
          delay={1100}
        />
      </div>

      <div className="mt-5">
        <TypewriterText
          text="DEMONSTRATION TELEMETRY // NOT CONNECTED TO LIVE EQUIPMENT"
          delay={1500}
          speed={8}
          cursor={false}
          className="
            text-[8px]
            tracking-[0.13em]
            text-slate-800
          "
        />
      </div>
    </OutputBlock>
  );
}

/* =============================================================================
   NETWORK
============================================================================= */

export function NetworkCommand({
  telemetry,
}: {
  telemetry: Telemetry;
}) {
  return (
    <OutputBlock label="NETWORK TOPOLOGY">
      <pre
        className="
          mt-5
          overflow-x-auto
          text-[10px]
          leading-5
          text-slate-500

          sm:text-[11px]
          sm:leading-6
        "
      >
{`
                  SOFTWARE

      Browser / Client
             │
           HTTPS
             │
             ▼
        React / TypeScript
             │
            REST
             │
             ▼
           FastAPI
             │
             SQL
             ▼
         PostgreSQL


                    BAS

         Workstation
              │
           BACnet/IP
              │
              ▼
        DDC Controller
              │
            MS/TP
      ┌───────┼─────────┐
      ▼       ▼         ▼
     VAV     VFD      Sensor


packets_rx=${telemetry.packets}
network_state=HEALTHY
`}
      </pre>
    </OutputBlock>
  );
}

/* =============================================================================
   POINTS
============================================================================= */

export function PointsCommand({
  telemetry,
}: {
  telemetry: Telemetry;
}) {
  return (
    <OutputBlock label="BACNET POINT TABLE">
      <div className="mt-5 overflow-x-auto">
        <table
          className="
            min-w-[680px]
            w-full
            text-left
          "
        >
          <thead
            className="
              border-b
              border-white/[0.06]
              text-[8px]
              uppercase
              tracking-[0.13em]
              text-slate-700
            "
          >
            <tr>
              <th className="py-3">
                Point
              </th>

              <th>
                Object
              </th>

              <th>
                Value
              </th>

              <th>
                Units
              </th>

              <th>
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <Point
              name="SAT"
              object="AI:1001"
              value={
                telemetry.supplyAir
              }
              unit="°F"
              delay={200}
            />

            <Point
              name="DSP"
              object="AI:1002"
              value={
                telemetry.staticPressure
              }
              unit="inWC"
              delay={500}
            />

            <Point
              name="SF_CMD"
              object="BO:2001"
              value="ON"
              unit="-"
              delay={800}
            />

            <Point
              name="SF_STATUS"
              object="BI:3001"
              value="ON"
              unit="-"
              delay={1100}
            />

            <Point
              name="VFD_SPEED"
              object="AO:4001"
              value={
                telemetry.vfdSpeed
              }
              unit="%"
              delay={1400}
            />
          </tbody>
        </table>
      </div>
    </OutputBlock>
  );
}

function Point({
  name,
  object,
  value,
  unit,
  delay,
}: {
  name: string;
  object: string;
  value: string | number;
  unit: string;
  delay: number;
}) {
  return (
    <tr
      className="
        border-b
        border-white/[0.04]
      "
    >
      <td className="py-3">
        <TypewriterText
          text={name}
          delay={delay}
          speed={7}
          cursor={false}
          className="text-cyan-300"
        />
      </td>

      <td>
        <TypewriterText
          text={object}
          delay={delay + 50}
          speed={7}
          cursor={false}
          className="text-slate-600"
        />
      </td>

      <td>
        <TypewriterText
          text={`${value}`}
          delay={delay + 100}
          speed={7}
          cursor={false}
          className="text-white"
        />
      </td>

      <td>
        <TypewriterText
          text={unit}
          delay={delay + 150}
          speed={7}
          cursor={false}
          className="text-slate-600"
        />
      </td>

      <td>
        <TypewriterText
          text="NORMAL"
          delay={delay + 200}
          speed={7}
          cursor={false}
          className="text-emerald-500"
        />
      </td>
    </tr>
  );
}

/* =============================================================================
   DIAGNOSTIC
============================================================================= */

export function DiagnosticCommand() {
  return (
    <OutputBlock label="FIELD DIAGNOSTIC">
      <div className="mt-5">
        <TypewriterText
          text="FAULT CONDITION:"
          speed={11}
          className="text-amber-300"
        />
      </div>

      <div
        className="
          mt-2
          max-w-3xl
          leading-7
          text-slate-400
        "
      >
        <TypewriterText
          text="BAS commands a supply fan ON. Controller output is active. Fan proof remains OFF."
          delay={500}
          speed={10}
        />
      </div>

      <div className="mt-6 space-y-2">
        <Trace
          n="01"
          text="Verify BAS command"
          delay={1500}
        />

        <Trace
          n="02"
          text="Verify controller output"
          delay={1800}
        />

        <Trace
          n="03"
          text="Measure control voltage"
          delay={2100}
        />

        <Trace
          n="04"
          text="Trace relay / starter / enable path"
          delay={2400}
        />

        <Trace
          n="05"
          text="Check safeties"
          delay={2700}
        />

        <Trace
          n="06"
          text="Verify VFD or motor response"
          delay={3000}
        />

        <Trace
          n="07"
          text="Prove the failure before replacing hardware"
          delay={3300}
        />
      </div>

      <ContinueCommand
        command="philosophy"
        delay={3900}
      />
    </OutputBlock>
  );
}