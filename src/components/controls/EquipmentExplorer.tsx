import {
  Activity,
  AlertTriangle,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Gauge,
  Network,
  Power,
  RadioTower,
  RefreshCcw,
  Server,
  ShieldCheck,
  Thermometer,
  Waves,
  X,
  Zap,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useMemo,
  useState,
} from "react";

import { equipmentData } from "../../data/equipment";
import type { EquipmentKey } from "../../types/portfolio";

import SectionLabel from "../layout/SectionLabel";

/* ========================================================================== */
/* TYPES                                                                      */
/* ========================================================================== */

type TelemetryCard = {
  label: string;
  value: string;
  unit?: string;
  icon: typeof Gauge;
};

type PointInspectorData = {
  objectName: string;
  objectType: string;
  instance: number;
  presentValue: string;
  unit: string;
  status: string;
  command: string;
  source: string;
  priority: string;
  lastUpdate: string;
  trend: number[];
};

type FaultInspectorData = {
  fault: string;
  severity: "Low" | "Medium" | "High";
  status: string;
  probableCause: string;
  checks: string[];
};

/* ========================================================================== */
/* META                                                                       */
/* ========================================================================== */

const equipmentMeta: Record<
  EquipmentKey,
  {
    accent: string;
    soft: string;
    border: string;
    status: string;
    protocol: string;
    icon: typeof Cpu;
    telemetry: TelemetryCard[];
  }
> = {
  AHU: {
    accent: "text-cyan-300",
    soft: "bg-cyan-400/[0.06]",
    border: "border-cyan-400/25",
    status: "Operational",
    protocol: "BACnet/IP",
    icon: Waves,
    telemetry: [
      {
        label: "Supply Air",
        value: "55.2",
        unit: "°F",
        icon: Thermometer,
      },
      {
        label: "Static Pressure",
        value: "1.72",
        unit: "inWC",
        icon: Gauge,
      },
      {
        label: "Fan Command",
        value: "ON",
        icon: Power,
      },
    ],
  },

  VAV: {
    accent: "text-violet-300",
    soft: "bg-violet-400/[0.06]",
    border: "border-violet-400/25",
    status: "Controlling",
    protocol: "BACnet MS/TP",
    icon: Activity,
    telemetry: [
      {
        label: "Zone Temp",
        value: "72.1",
        unit: "°F",
        icon: Thermometer,
      },
      {
        label: "Airflow",
        value: "842",
        unit: "CFM",
        icon: Waves,
      },
      {
        label: "Damper",
        value: "64",
        unit: "%",
        icon: Gauge,
      },
    ],
  },

  RTU: {
    accent: "text-amber-300",
    soft: "bg-amber-400/[0.06]",
    border: "border-amber-400/25",
    status: "Running",
    protocol: "BACnet/IP",
    icon: Server,
    telemetry: [
      {
        label: "Discharge Air",
        value: "58.4",
        unit: "°F",
        icon: Thermometer,
      },
      {
        label: "Cooling",
        value: "Stage 1",
        icon: Activity,
      },
      {
        label: "Fan",
        value: "ON",
        icon: Power,
      },
    ],
  },

  VFD: {
    accent: "text-emerald-300",
    soft: "bg-emerald-400/[0.06]",
    border: "border-emerald-400/25",
    status: "Modulating",
    protocol: "BACnet / Analog",
    icon: Zap,
    telemetry: [
      {
        label: "Frequency",
        value: "42.7",
        unit: "Hz",
        icon: Gauge,
      },
      {
        label: "Speed",
        value: "71",
        unit: "%",
        icon: Activity,
      },
      {
        label: "Fault",
        value: "Clear",
        icon: Check,
      },
    ],
  },

  Controller: {
    accent: "text-sky-300",
    soft: "bg-sky-400/[0.06]",
    border: "border-sky-400/25",
    status: "Online",
    protocol: "BACnet",
    icon: Cpu,
    telemetry: [
      {
        label: "Inputs",
        value: "12",
        icon: Activity,
      },
      {
        label: "Outputs",
        value: "8",
        icon: Zap,
      },
      {
        label: "Network",
        value: "Healthy",
        icon: Network,
      },
    ],
  },

  Sensors: {
    accent: "text-rose-300",
    soft: "bg-rose-400/[0.06]",
    border: "border-rose-400/25",
    status: "Reading",
    protocol: "Analog / BACnet",
    icon: RadioTower,
    telemetry: [
      {
        label: "Temperature",
        value: "71.8",
        unit: "°F",
        icon: Thermometer,
      },
      {
        label: "Humidity",
        value: "48",
        unit: "%",
        icon: Gauge,
      },
      {
        label: "Signal",
        value: "Stable",
        icon: Activity,
      },
    ],
  },
};

/* ========================================================================== */
/* FAKE POINT DATA                                                           */
/* ========================================================================== */

function buildPointData(
  equipment: EquipmentKey,
  point: string,
  index: number,
): PointInspectorData {
  const normalized = point.toLowerCase();

  let unit = "%";
  let presentValue = `${45 + index * 7}`;
  let command = "Auto";

  if (normalized.includes("temp")) {
    unit = "°F";
    presentValue = `${(55 + index * 2.7).toFixed(1)}`;
  }

  if (normalized.includes("pressure")) {
    unit = "inWC";
    presentValue = `${(1.3 + index * 0.16).toFixed(2)}`;
  }

  if (
    normalized.includes("fan") ||
    normalized.includes("occupancy") ||
    normalized.includes("status")
  ) {
    unit = "";
    presentValue = index % 2 === 0 ? "ON" : "OFF";
    command = "Automatic";
  }

  if (normalized.includes("airflow")) {
    unit = "CFM";
    presentValue = `${720 + index * 85}`;
  }

  const seed = 40 + index * 5;

  return {
    objectName: `${equipment}_${point
      .replaceAll(" ", "_")
      .toUpperCase()}`,
    objectType:
      unit === ""
        ? "Binary Value"
        : "Analog Value",
    instance: 1000 + index,
    presentValue,
    unit,
    status: "Normal",
    command,
    source:
      equipment === "VAV"
        ? "BACnet MS/TP"
        : "BACnet/IP",
    priority: "16 - Default",
    lastUpdate: "2 sec ago",
    trend: [
      seed,
      seed + 3,
      seed + 1,
      seed + 6,
      seed + 8,
      seed + 5,
      seed + 10,
      seed + 9,
      seed + 14,
      seed + 12,
    ],
  };
}

/* ========================================================================== */
/* FAKE FAULT DATA                                                           */
/* ========================================================================== */

function buildFaultData(
  fault: string,
  index: number,
): FaultInspectorData {
  const severities: FaultInspectorData["severity"][] = [
    "Medium",
    "High",
    "Low",
  ];

  return {
    fault,
    severity:
      severities[index % severities.length],
    status: "Diagnostic scenario",
    probableCause:
      index % 2 === 0
        ? "Command, configuration, wiring, or field-device response may not match expected operation."
        : "Communication, signal scaling, or device configuration should be verified before replacing hardware.",
    checks: [
      "Verify controller command",
      "Confirm point value at BAS",
      "Measure signal at controller output",
      "Verify signal at field device",
      "Confirm device configuration",
      "Inspect physical equipment response",
    ],
  };
}

/* ========================================================================== */
/* SPARKLINE                                                                  */
/* ========================================================================== */

function Sparkline({
  values,
}: {
  values: number[];
}) {
  const width = 260;
  const height = 80;

  const max = Math.max(...values);
  const min = Math.min(...values);

  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x =
        (index / (values.length - 1)) *
        width;

      const y =
        height -
        ((value - min) / range) *
          (height - 12) -
        6;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-20 w-full"
      preserveAspectRatio="none"
    >
      <motion.polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-cyan-400"
      />
    </svg>
  );
}

/* ========================================================================== */
/* COMPONENT                                                                  */
/* ========================================================================== */

export default function EquipmentExplorer() {
  const [equipment, setEquipment] =
    useState<EquipmentKey>("AHU");

  const [selectedPoint, setSelectedPoint] =
    useState<{
      name: string;
      index: number;
    } | null>(null);

  const [selectedFault, setSelectedFault] =
    useState<{
      name: string;
      index: number;
    } | null>(null);

  const [scanning, setScanning] =
    useState(false);

  const active =
    equipmentData[equipment];

  const meta =
    equipmentMeta[equipment];

  const EquipmentIcon = meta.icon;

  const pointInspector =
    selectedPoint !== null
      ? buildPointData(
          equipment,
          selectedPoint.name,
          selectedPoint.index,
        )
      : null;

  const faultInspector =
    selectedFault !== null
      ? buildFaultData(
          selectedFault.name,
          selectedFault.index,
        )
      : null;

  const consoleLines = useMemo(
    () => [
      `$ connect ${equipment.toLowerCase()}`,
      `> protocol: ${meta.protocol}`,
      `> status: ${meta.status.toLowerCase()}`,
      `> device_instance: 4190001`,
      `> network_number: 2001`,
      `> points_loaded: ${active.points.length}`,
      `> polling: active`,
      `> response_time: 42ms`,
    ],
    [
      equipment,
      meta,
      active.points.length,
    ],
  );

  const runScan = () => {
    if (scanning) return;

    setScanning(true);

    window.setTimeout(() => {
      setScanning(false);
    }, 1300);
  };

  return (
    <section
      id="controls"
      className="
        relative
        mx-auto
        max-w-[1550px]
        px-4
        py-16
        sm:px-6
        lg:px-10
        lg:py-24
        xl:px-12
      "
    >
      {/* ============================================================ */}
      {/* AMBIENT BACKGROUND                                           */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-x-0 top-20 h-[600px]">
        <div className="absolute left-[8%] top-10 size-72 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

        <div className="absolute right-[5%] top-32 size-72 rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      {/* ============================================================ */}
      {/* HEADER                                                       */}
      {/* ============================================================ */}

      <div className="relative">
        <SectionLabel>
          Controls Equipment Explorer
        </SectionLabel>

        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Step inside a
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                live BAS workstation.
              </span>
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="text-sm leading-7 text-slate-500">
              Select equipment, inspect BAS
              points, open fake telemetry,
              trace signals, and explore
              diagnostic scenarios.
            </p>

            <p className="mt-2 font-mono text-[10px] text-slate-700">
              * telemetry shown below is
              simulated for portfolio
              demonstration
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* EQUIPMENT SELECTOR                                           */}
      {/* ============================================================ */}

      <div className="relative mt-9 overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2">
          {(
            Object.keys(
              equipmentData,
            ) as EquipmentKey[]
          ).map(
            (item, index) => {
              const selected =
                item === equipment;

              return (
                <motion.button
                  type="button"
                  key={item}
                  onClick={() => {
                    setEquipment(item);
                    setSelectedPoint(null);
                    setSelectedFault(null);
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`
                    relative
                    min-h-[48px]
                    overflow-hidden
                    rounded-xl
                    border
                    px-4
                    text-xs
                    font-black
                    transition

                    ${
                      selected
                        ? `${meta.border} ${meta.soft} text-white`
                        : "border-white/[0.07] bg-white/[0.02] text-slate-500 hover:border-white/[0.14]"
                    }
                  `}
                >
                  {selected && (
                    <motion.div
                      layoutId="activeEquipment"
                      className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <span className="font-mono text-[9px] text-slate-700">
                      0{index + 1}
                    </span>

                    {item}
                  </span>
                </motion.button>
              );
            },
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* BAS WORKSTATION                                              */}
      {/* ============================================================ */}

      <AnimatePresence mode="wait">
        <motion.div
          key={equipment}
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.99,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.07]
            bg-[#0B1117]
            shadow-[0_30px_90px_rgba(0,0,0,.35)]
          "
        >
          {/* ======================================================== */}
          {/* TOP BAR                                                  */}
          {/* ======================================================== */}

          <div className="flex flex-col gap-3 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-400/70" />
              <span className="size-2 rounded-full bg-yellow-400/70" />
              <span className="size-2 rounded-full bg-emerald-400/70" />

              <span className="ml-3 font-mono text-[9px] text-slate-700">
                yuri.bas.workstation
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-400">
                  {meta.status}
                </span>
              </div>

              <span className="font-mono text-[9px] text-slate-700">
                {meta.protocol}
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* TELEMETRY                                                */}
          {/* ======================================================== */}

          <div className="grid border-b border-white/[0.07] md:grid-cols-3">
            {meta.telemetry.map(
              (
                {
                  label,
                  value,
                  unit,
                  icon: TelemetryIcon,
                },
                index,
              ) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.08,
                  }}
                  className="
                    border-b
                    border-white/[0.07]
                    p-5
                    last:border-b-0

                    md:border-b-0
                    md:border-r
                    md:last:border-r-0
                  "
                >
                  <div className="flex items-center justify-between">
                    <TelemetryIcon
                      className={`size-4 ${meta.accent}`}
                    />

                    <CircleDot className="size-3 text-emerald-400" />
                  </div>

                  <p className="mt-4 text-[9px] font-black uppercase tracking-[0.18em] text-slate-700">
                    {label}
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    {value}

                    {unit && (
                      <span className="ml-1 text-xs font-bold text-slate-600">
                        {unit}
                      </span>
                    )}
                  </p>
                </motion.div>
              ),
            )}
          </div>

          {/* ======================================================== */}
          {/* MAIN BODY                                                */}
          {/* ======================================================== */}

          <div className="grid xl:grid-cols-[.7fr_1.3fr]">
            {/* ====================================================== */}
            {/* EQUIPMENT PANEL                                       */}
            {/* ====================================================== */}

            <div className="border-b border-white/[0.07] p-6 sm:p-8 xl:border-b-0 xl:border-r">
              <div className="flex items-start justify-between gap-4">
                <motion.div
                  initial={{
                    rotate: -10,
                    scale: 0.88,
                  }}
                  animate={{
                    rotate: 0,
                    scale: 1,
                  }}
                  className={`
                    grid
                    size-16
                    place-items-center
                    rounded-2xl
                    border
                    ${meta.border}
                    ${meta.soft}
                  `}
                >
                  <EquipmentIcon
                    className={`size-7 ${meta.accent}`}
                  />
                </motion.div>

                <button
                  type="button"
                  onClick={runScan}
                  className="
                    inline-flex
                    min-h-[40px]
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    px-3
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-slate-500
                    transition
                    hover:border-cyan-400/20
                    hover:text-cyan-300
                  "
                >
                  <RefreshCcw
                    className={`size-3.5 ${
                      scanning
                        ? "animate-spin text-cyan-400"
                        : ""
                    }`}
                  />

                  {scanning
                    ? "Scanning"
                    : "Scan Points"}
                </button>
              </div>

              <p
                className={`mt-7 text-[9px] font-black uppercase tracking-[0.2em] ${meta.accent}`}
              >
                {equipment} SUBSYSTEM
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                {active.title}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                {active.intro}
              </p>

              {/* Device identity */}

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700">
                    Device Instance
                  </p>

                  <p className="mt-2 text-sm font-black">
                    4190001
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700">
                    Network
                  </p>

                  <p className="mt-2 text-sm font-black">
                    2001
                  </p>
                </div>
              </div>

              {/* controller console */}

              <div className="mt-5 rounded-2xl border border-white/[0.06] bg-black/35 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="size-3.5 text-cyan-400" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                      controller console
                    </span>
                  </div>

                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                </div>

                <div className="mt-4 space-y-1 font-mono text-[10px] leading-5">
                  {consoleLines.map(
                    (line, index) => (
                      <motion.p
                        key={line}
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.05,
                        }}
                        className={
                          index ===
                          consoleLines.length -
                            1
                            ? "text-emerald-400"
                            : "text-slate-600"
                        }
                      >
                        {line}
                      </motion.p>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/* RIGHT PANEL                                           */}
            {/* ====================================================== */}

            <div className="p-6 sm:p-8">
              {/* BAS POINTS */}

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-400">
                      BAS Points
                    </p>

                    <h4 className="mt-2 text-xl font-black">
                      Live point map
                    </h4>
                  </div>

                  <span className="font-mono text-[10px] text-slate-700">
                    {active.points.length} points
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {active.points.map(
                    (point, index) => {
                      const selected =
                        selectedPoint?.name ===
                        point;

                      const preview =
                        buildPointData(
                          equipment,
                          point,
                          index,
                        );

                      return (
                        <motion.button
                          type="button"
                          key={point}
                          onClick={() => {
                            setSelectedFault(null);

                            setSelectedPoint(
                              selected
                                ? null
                                : {
                                    name: point,
                                    index,
                                  },
                            );
                          }}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay:
                              index *
                              0.04,
                          }}
                          whileHover={{
                            y: -4,
                          }}
                          className={`
                            group
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            p-4
                            text-left
                            transition

                            ${
                              selected
                                ? `${meta.border} ${meta.soft}`
                                : "border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/20"
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`size-2 rounded-full ${
                                selected
                                  ? "animate-pulse bg-emerald-400"
                                  : "bg-emerald-400/50"
                              }`}
                            />

                            <span className="font-mono text-[9px] text-slate-700">
                              AV_
                              {String(
                                index + 1,
                              ).padStart(
                                2,
                                "0",
                              )}
                            </span>
                          </div>

                          <p className="mt-5 text-sm font-black text-slate-300">
                            {point}
                          </p>

                          <div className="mt-3 flex items-end justify-between gap-2">
                            <p className="text-lg font-black text-white">
                              {
                                preview.presentValue
                              }

                              {preview.unit && (
                                <span className="ml-1 text-[10px] text-slate-600">
                                  {
                                    preview.unit
                                  }
                                </span>
                              )}
                            </p>

                            <ChevronRight
                              className={`size-4 transition ${
                                selected
                                  ? "rotate-90 text-cyan-400"
                                  : "text-slate-700 group-hover:text-cyan-400"
                              }`}
                            />
                          </div>

                          <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-slate-700">
                            click to inspect
                          </p>

                          {selected && (
                            <motion.div
                              initial={{
                                scaleX: 0,
                              }}
                              animate={{
                                scaleX: 1,
                              }}
                              className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan-400 to-emerald-400"
                            />
                          )}
                        </motion.button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* ==================================================== */}
              {/* POINT INSPECTOR                                      */}
              {/* ==================================================== */}

              <AnimatePresence>
                {pointInspector && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 rounded-[24px] border border-cyan-400/20 bg-cyan-400/[0.025] p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />

                            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-400">
                              Live Point Inspector
                            </p>
                          </div>

                          <h4 className="mt-3 text-xl font-black">
                            {
                              selectedPoint
                                ?.name
                            }
                          </h4>

                          <p className="mt-1 font-mono text-[10px] text-slate-700">
                            {
                              pointInspector.objectName
                            }
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPoint(
                              null,
                            )
                          }
                          className="grid size-9 place-items-center rounded-xl border border-white/[0.07] text-slate-600 hover:text-white"
                        >
                          <X className="size-4" />
                        </button>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                          [
                            "Present Value",
                            `${pointInspector.presentValue} ${pointInspector.unit}`,
                          ],
                          [
                            "Object Type",
                            pointInspector.objectType,
                          ],
                          [
                            "Instance",
                            pointInspector.instance,
                          ],
                          [
                            "Status",
                            pointInspector.status,
                          ],
                          [
                            "Command",
                            pointInspector.command,
                          ],
                          [
                            "Source",
                            pointInspector.source,
                          ],
                          [
                            "Priority",
                            pointInspector.priority,
                          ],
                          [
                            "Last Update",
                            pointInspector.lastUpdate,
                          ],
                        ].map(
                          ([
                            label,
                            value,
                          ]) => (
                            <div
                              key={label}
                              className="rounded-xl border border-white/[0.06] bg-black/20 p-4"
                            >
                              <p className="text-[9px] font-black uppercase tracking-[0.13em] text-slate-700">
                                {
                                  label
                                }
                              </p>

                              <p className="mt-2 text-xs font-bold text-slate-300">
                                {
                                  value
                                }
                              </p>
                            </div>
                          ),
                        )}
                      </div>

                      <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-700">
                            Trend History
                          </p>

                          <span className="font-mono text-[9px] text-emerald-400">
                            LIVE
                          </span>
                        </div>

                        <Sparkline
                          values={
                            pointInspector.trend
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ==================================================== */}
              {/* SIGNAL PATH                                          */}
              {/* ==================================================== */}

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <div className="flex items-center gap-2">
                  <RadioTower className="size-4 text-cyan-400" />

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
                    Signal Path
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-4">
                  {[
                    "Sensor",
                    "Controller",
                    meta.protocol,
                    equipment,
                  ].map(
                    (node, index) => (
                      <div
                        key={node}
                        className="relative"
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay:
                              index *
                              0.12,
                          }}
                          className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-center"
                        >
                          <span className="mx-auto block size-2 animate-pulse rounded-full bg-emerald-400" />

                          <p className="mt-3 font-mono text-[9px] text-slate-700">
                            NODE{" "}
                            {index +
                              1}
                          </p>

                          <p className="mt-1 truncate text-xs font-black text-slate-300">
                            {node}
                          </p>
                        </motion.div>

                        {index < 3 && (
                          <motion.div
                            initial={{
                              scaleX: 0,
                            }}
                            animate={{
                              scaleX: 1,
                            }}
                            transition={{
                              duration:
                                0.5,
                              delay:
                                0.2 +
                                index *
                                  0.12,
                            }}
                            className="absolute -right-3 top-1/2 hidden h-px w-3 origin-left bg-cyan-400/50 sm:block"
                          />
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* ==================================================== */}
              {/* FAULTS                                               */}
              {/* ==================================================== */}

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-red-400">
                      Diagnostic Library
                    </p>

                    <h4 className="mt-2 text-xl font-black">
                      Common failure scenarios
                    </h4>
                  </div>

                  <AlertTriangle className="size-5 text-red-400/70" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {active.faults.map(
                    (fault, index) => {
                      const selected =
                        selectedFault?.name ===
                        fault;

                      return (
                        <motion.button
                          type="button"
                          key={fault}
                          onClick={() => {
                            setSelectedPoint(
                              null,
                            );

                            setSelectedFault(
                              selected
                                ? null
                                : {
                                    name: fault,
                                    index,
                                  },
                            );
                          }}
                          whileHover={{
                            x: 3,
                          }}
                          className={`
                            flex
                            items-center
                            justify-between
                            gap-4
                            rounded-xl
                            border
                            p-4
                            text-left
                            transition

                            ${
                              selected
                                ? "border-red-400/25 bg-red-400/[0.05]"
                                : "border-white/[0.07] bg-white/[0.02] hover:border-red-400/20"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <Activity
                              className={`size-4 ${
                                selected
                                  ? "text-red-400"
                                  : "text-slate-700"
                              }`}
                            />

                            <span className="text-sm font-semibold text-slate-400">
                              {fault}
                            </span>
                          </div>

                          <ChevronRight
                            className={`size-4 transition ${
                              selected
                                ? "rotate-90 text-red-400"
                                : "text-slate-700"
                            }`}
                          />
                        </motion.button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* ==================================================== */}
              {/* FAULT INSPECTOR                                      */}
              {/* ==================================================== */}

              <AnimatePresence>
                {faultInspector && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 rounded-[24px] border border-red-400/20 bg-red-400/[0.025] p-5 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-red-400">
                            Diagnostic Scenario
                          </p>

                          <h4 className="mt-3 text-xl font-black">
                            {
                              faultInspector.fault
                            }
                          </h4>
                        </div>

                        <span className="rounded-full border border-red-400/20 bg-red-400/[0.05] px-3 py-1 text-[10px] font-black text-red-300">
                          {
                            faultInspector.severity
                          }
                        </span>
                      </div>

                      <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-700">
                          Probable Cause
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {
                            faultInspector.probableCause
                          }
                        </p>
                      </div>

                      <div className="mt-5">
                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-700">
                          Troubleshooting Sequence
                        </p>

                        <div className="mt-4 space-y-2">
                          {faultInspector.checks.map(
                            (
                              check,
                              index,
                            ) => (
                              <motion.div
                                key={
                                  check
                                }
                                initial={{
                                  opacity: 0,
                                  x: -8,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay:
                                    index *
                                    0.06,
                                }}
                                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-3"
                              >
                                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-cyan-400/[0.07] font-mono text-[9px] text-cyan-400">
                                  {String(
                                    index +
                                      1,
                                  ).padStart(
                                    2,
                                    "0",
                                  )}
                                </span>

                                <span className="text-xs text-slate-400">
                                  {
                                    check
                                  }
                                </span>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FOOTER                                                   */}
          {/* ======================================================== */}

          <div className="grid border-t border-white/[0.07] sm:grid-cols-4">
            {[
              [
                "Equipment",
                equipment,
              ],
              [
                "Protocol",
                meta.protocol,
              ],
              [
                "Points",
                `${active.points.length} loaded`,
              ],
              [
                "System",
                meta.status,
              ],
            ].map(
              ([label, value], index) => (
                <div
                  key={label}
                  className={`
                    p-4
                    ${
                      index > 0
                        ? "border-t border-white/[0.07] sm:border-l sm:border-t-0"
                        : ""
                    }
                  `}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                    {label}
                  </p>

                  <p
                    className={`mt-1 text-sm font-black ${
                      label ===
                      "System"
                        ? "text-emerald-400"
                        : ""
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}