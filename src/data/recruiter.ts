import {
  Cpu,
  Globe2,
  Network,
  Server,
} from "lucide-react";

import type {
  RecruiterContent,
  RecruiterMode,
  RecruiterModeId,
} from "../types/portfolio";

export const rotatingRoles = [
  "Backend Engineer",
  "Python Developer",
  "Building Automation Specialist",
  "Controls Technician",
  "Systems Integrator",
  "Technical Leader",
];

export const recruiterModes: RecruiterMode[] = [
  {
    id: "backend",
    label: "Backend Engineering",
    icon: Server,
  },
  {
    id: "automation",
    label: "Automation / Controls",
    icon: Cpu,
  },
  {
    id: "systems",
    label: "Systems Integration",
    icon: Network,
  },
  {
    id: "brazil",
    label: "Brazil / International",
    icon: Globe2,
  },
];

export const recruiterContent: Record<
  RecruiterModeId,
  RecruiterContent
> = {
  backend: {
    eyebrow: "BACKEND PROFILE",
    title: "Production backend engineering",
    description:
      "Python-focused backend engineering with FastAPI, PostgreSQL, authentication, payments, cloud integrations and production debugging.",
    highlights: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "SQLAlchemy",
      "PayPal",
    ],
  },

  automation: {
    eyebrow: "AUTOMATION PROFILE",
    title: "5+ years across HVAC and controls",
    description:
      "A career progressing from HVAC installation into residential service, commercial service, industrial controls, BACnet and field diagnostics.",
    highlights: [
      "BACnet",
      "HVAC",
      "AHU",
      "VAV",
      "VFD",
      "Controls",
    ],
  },

  systems: {
    eyebrow: "SYSTEMS PROFILE",
    title: "Software meets physical infrastructure",
    description:
      "A systems-oriented engineering background spanning APIs, databases, networks, controllers, sensors and real-world equipment.",
    highlights: [
      "Integration",
      "Networking",
      "Diagnostics",
      "APIs",
      "Controllers",
      "IoT",
    ],
  },

  brazil: {
    eyebrow: "INTERNATIONAL PROFILE",
    title: "Building toward Brazil and global teams",
    description:
      "English, native Haitian Creole and developing Brazilian Portuguese with interest in backend, automation and systems roles in international environments.",
    highlights: [
      "English",
      "Kreyòl",
      "Português",
      "Remote",
      "Brazil",
      "Global",
    ],
  },
};