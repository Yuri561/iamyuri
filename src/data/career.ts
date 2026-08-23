import {
  BrainCircuit,
  Building2,
  Cpu,
  Gauge,
  Server,
  Wrench,
} from "lucide-react";

import type { CareerStage } from "../types/portfolio";

export const careerStages: CareerStage[] = [
  {
    number: "01",
    title: "HVAC Installer",
    subtitle: "Where it started",
    icon: Wrench,
    description:
      "Started in the HVAC industry installing equipment, duct systems and mechanical components while learning how complete HVAC systems are physically assembled.",
    skills: [
      "HVAC Installation",
      "Ductwork",
      "Mechanical Systems",
      "Jobsite Coordination",
    ],
  },

  {
    number: "02",
    title: "Residential Service Technician",
    subtitle: "Learning diagnostics",
    icon: Gauge,
    description:
      "Moved into residential service and troubleshooting, developing a systematic approach to electrical, mechanical and refrigeration problems.",
    skills: [
      "Troubleshooting",
      "Electrical Diagnosis",
      "Residential HVAC",
      "Customer Communication",
    ],
  },

  {
    number: "03",
    title: "Commercial Service Technician",
    subtitle: "Larger systems",
    icon: Building2,
    description:
      "Expanded into commercial HVAC systems where rooftop units, air handlers, motors, controls and operating sequences introduced greater system complexity.",
    skills: [
      "Commercial HVAC",
      "RTUs",
      "Air Handlers",
      "Motors",
      "Controls",
    ],
  },

  {
    number: "04",
    title: "Industrial Controls Technician",
    subtitle: "Software meets equipment",
    icon: Cpu,
    description:
      "Transitioned deeper into building automation, working with BACnet networks, VAVs, AHUs, VFDs, controllers, sensors, actuators and sequence logic.",
    skills: [
      "BACnet",
      "BAS",
      "VAV",
      "AHU",
      "VFD",
      "Controllers",
      "Networking",
    ],
  },

  {
    number: "05",
    title: "Backend Engineer",
    subtitle: "Engineering beyond the controller",
    icon: Server,
    description:
      "Extended the same troubleshooting mindset into software engineering using Python, FastAPI, databases, APIs, authentication and cloud services.",
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Cloud",
    ],
  },

  {
    number: "06",
    title: "Systems Engineer",
    subtitle: "Where everything connects",
    icon: BrainCircuit,
    description:
      "Building toward roles where software engineering, automation, infrastructure and connected intelligent systems intersect.",
    skills: [
      "Software",
      "Automation",
      "Integration",
      "IoT",
      "Systems Thinking",
    ],
  },
];