import {
  CloudCog,
  Code2,
  Cpu,
  Network,
  Server,
} from "lucide-react";

import type {
  SkillCategory,
  SkillGroup,
} from "../types/portfolio";

export const skills: Record<
  SkillCategory,
  SkillGroup
> = {
  Backend: {
    icon: Server,
    description:
      "Backend architecture, APIs, validation, authentication and business logic.",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "JWT",
      "Authentication",
      "API Integration",
      "PostgreSQL",
    ],
  },

  Frontend: {
    icon: Code2,
    description:
      "Responsive frontend applications connected to real APIs and application state.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Responsive UI",
    ],
  },

  Cloud: {
    icon: CloudCog,
    description:
      "Production deployment, cloud storage, payments, email and external integrations.",
    items: [
      "Render",
      "Vercel",
      "Supabase",
      "PayPal",
      "Brevo",
      "Google Auth",
      "GitHub",
      "Postman",
    ],
  },

  Controls: {
    icon: Cpu,
    description:
      "Building automation systems and real-world HVAC control infrastructure.",
    items: [
      "BACnet",
      "BACnet/IP",
      "BACnet MS/TP",
      "VAV",
      "AHU",
      "RTU",
      "VFD",
      "Controllers",
      "Sensors",
      "Actuators",
    ],
  },

  Networking: {
    icon: Network,
    description:
      "System communication, diagnostics and field signal troubleshooting.",
    items: [
      "BACnet Networks",
      "Device Addressing",
      "MAC Troubleshooting",
      "Point-to-Point Testing",
      "Network Diagnostics",
      "Field Commissioning",
      "Signal Verification",
    ],
  },
};