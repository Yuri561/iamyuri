import type {
  EquipmentData,
  EquipmentKey,
} from "../types/portfolio";

export const equipmentData: Record<
  EquipmentKey,
  EquipmentData
> = {
  AHU: {
    title: "Air Handling Unit",
    intro:
      "Large central HVAC systems where mechanical equipment, controls and sequences all interact.",
    points: [
      "Supply fan",
      "Static pressure",
      "Outside air damper",
      "Heating / cooling valves",
      "Supply temperature",
      "Occupancy logic",
    ],
    faults: [
      "Fan command logic",
      "Economizer problems",
      "Failed sensors",
      "Damper issues",
      "Setpoint problems",
      "Safety / interlock issues",
    ],
  },

  VAV: {
    title: "Variable Air Volume Box",
    intro:
      "Zone-level airflow systems controlling temperature and ventilation.",
    points: [
      "Airflow",
      "Damper position",
      "Zone temperature",
      "Heating valve",
      "Discharge temperature",
      "Occupancy",
    ],
    faults: [
      "Actuator failure",
      "Reversed damper",
      "Bad airflow sensor",
      "Heating problems",
      "Communication loss",
      "Incorrect airflow setup",
    ],
  },

  RTU: {
    title: "Rooftop Unit",
    intro:
      "Packaged commercial HVAC equipment integrating heating, cooling, fans and controls.",
    points: [
      "Fan status",
      "Cooling stages",
      "Heating stages",
      "Outdoor air",
      "Discharge air",
      "Safety status",
    ],
    faults: [
      "Lockouts",
      "Fan failures",
      "Cooling faults",
      "Heating faults",
      "Sequence problems",
    ],
  },

  VFD: {
    title: "Variable Frequency Drive",
    intro:
      "Motor-control equipment used to vary fan and pump speed.",
    points: [
      "Command",
      "Frequency",
      "Speed feedback",
      "Run status",
      "Fault status",
      "Bypass",
    ],
    faults: [
      "No run response",
      "Command mismatch",
      "Drive fault",
      "Bypass issue",
      "Analog scaling",
      "Communication problems",
    ],
  },

  Controller: {
    title: "Building Automation Controller",
    intro:
      "The programmable layer reading sensors, executing logic and commanding equipment.",
    points: [
      "Inputs",
      "Outputs",
      "Schedules",
      "Logic",
      "Setpoints",
      "Network points",
    ],
    faults: [
      "Missing logic",
      "Bad configuration",
      "Priority conflicts",
      "Network loss",
      "Output problems",
      "Address conflicts",
    ],
  },

  Sensors: {
    title: "Sensors & Field Devices",
    intro:
      "Physical inputs allowing software to understand actual system conditions.",
    points: [
      "Temperature",
      "Pressure",
      "Humidity",
      "Airflow",
      "Current",
      "Position",
    ],
    faults: [
      "Bad calibration",
      "Open circuit",
      "Incorrect scaling",
      "Failed sensor",
      "Wiring fault",
      "Wrong location",
    ],
  },
};