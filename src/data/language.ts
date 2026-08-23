import type {
  CurrentGoal,
  Language,
} from "../types/portfolio";

export const languages: Language[] = [
  {
    flag: "🇺🇸",
    language: "English",
    level: "Professional",
    description:
      "Daily technical, professional and interpersonal communication.",
  },
  {
    flag: "🇭🇹",
    language: "Haitian Creole",
    level: "Native",
    description:
      "Native communication and cultural fluency.",
  },
  {
    flag: "🇧🇷",
    language: "Portuguese",
    level: "Developing",
    description:
      "Actively studying Brazilian Portuguese.",
  },
];

export const currentGoals: CurrentGoal[] = [
  {
    label: "Backend Architecture",
    progress: 82,
    description:
      "Production APIs, PostgreSQL and backend patterns.",
  },
  {
    label: "Brazilian Portuguese",
    progress: 58,
    description:
      "Professional communication and Brazilian fluency.",
  },
  {
    label: "Y1 Automation Lab",
    progress: 64,
    description:
      "Python, Raspberry Pi, controls and automation.",
  },
  {
    label: "Networking Knowledge",
    progress: 48,
    description:
      "Stronger networking fundamentals for software and controls.",
  },
];