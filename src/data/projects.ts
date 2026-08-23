import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "01",
    title: "Nee's Learning",
    subtitle: "Learning & Translation Platform",
    category: "Production SaaS",
    description:
      "Production tutoring and translation platform connecting learners and tutors through authentication, scheduling, bookings, profiles, storage and online payments.",
    problem:
      "The business needed one platform for learners, tutors, availability, bookings, translations and payments.",
    contribution:
      "Backend architecture, FastAPI routes, database models, authentication, PayPal integration, storage integration and production debugging.",
    result:
      "Successfully deployed and validated through a real production learner booking and $1 PayPal transaction.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "PayPal",
      "Supabase",
      "Render",
      "Vercel",
    ],
  },

  {
    id: "02",
    title: "F.A.T.E.",
    subtitle: "File Arrangement & Transfer Engine",
    category: "Desktop Automation",
    description:
      "Desktop application for categorizing, organizing and transferring files through a system dashboard.",
    problem:
      "Large file collections become difficult to organize manually.",
    contribution:
      "Desktop architecture, file categories, vault structure, transfers and system events.",
    result:
      "Built a desktop automation foundation using React, Tauri and Rust.",
    stack: [
      "React",
      "TypeScript",
      "Tauri",
      "Rust",
    ],
  },

  {
    id: "03",
    title: "Y1 Technologies",
    subtitle: "Smart Controls Lab",
    category: "Automation / IoT",
    description:
      "Personal automation lab combining Python, Raspberry Pi, sensors and intelligent control concepts.",
    problem:
      "Explore how software can interact directly with physical environments.",
    contribution:
      "System architecture, controls experimentation and Python automation.",
    result:
      "Created a platform for continuing automation and smart-system development.",
    stack: [
      "Python",
      "Raspberry Pi",
      "BACnet",
      "IoT",
      "Automation",
    ],
  },

  {
    id: "04",
    title: "Ready My Voice",
    subtitle: "Creative Desktop Workspace",
    category: "Desktop Software",
    description:
      "Desktop workspace concept combining projects, media management and voice workflows.",
    problem:
      "Creative workflows often live across disconnected applications.",
    contribution:
      "Desktop UI architecture and project workspace design.",
    result:
      "Developed a unified creative desktop workspace concept.",
    stack: [
      "Python",
      "CustomTkinter",
      "Desktop UI",
    ],
  },

  {
    id: "05",
    title: "Perlica Tours & Travel",
    subtitle: "Travel Experience Platform",
    category: "Web Experience",
    description:
      "Interactive travel website with package discovery, visual experiences and search tools.",
    problem:
      "Travel customers need engaging ways to discover destinations.",
    contribution:
      "Frontend architecture, interactive galleries and responsive design.",
    result:
      "Built a modern web experience for travel discovery.",
    stack: [
      "React",
      "TypeScript",
      "Vercel",
    ],
  },

  {
    id: "06",
    title: "A Place Called Home",
    subtitle: "Community Housing Website",
    category: "Client Web Project",
    description:
      "Community-focused website supporting housing programs and vulnerable populations.",
    problem:
      "The organization needed a professional online presence for its mission.",
    contribution:
      "Responsive UI, content architecture and impact sections.",
    result:
      "Created a structured community-facing website.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];