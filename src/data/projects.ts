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
    link: "https://www.neeslearning.com"
  },
{
  id: "02",

  title: "CasaPro",

  subtitle: "Smart Home Inventory Management Platform",

  category: "Full-Stack Web Application",

  description:
    "A modern home inventory management platform that helps users organize, track, and protect household belongings, appliances, electronics, furniture, and important ownership records from a centralized dashboard.",

  problem:
    "Homeowners often lack a centralized way to document what they own, organize household assets, monitor inventory, and maintain records that may be needed for insurance, budgeting, replacement, or property management.",

  contribution:
    "Designed and developed the application experience including inventory organization, category management, dashboard workflows, user profiles, authentication flows, reporting concepts, responsive interfaces, and the overall product architecture.",

  result:
    "Built a responsive inventory management platform that transforms scattered household records into an organized digital system with categorized assets, dashboard visibility, reporting capabilities, and streamlined inventory workflows.",

  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "REST API",
    "Responsive Design",
  ],

  link: "https://casapro-pink.vercel.app",
},

  {
  id: "03",

  title: "DHMS International",

  subtitle: "African Fashion, Beauty & Lifestyle Boutique",

  category: "E-Commerce / Retail Web Application",

  description:
    "A responsive boutique e-commerce website for DHMS International in Fredericksburg, Virginia, showcasing African fashion, beauty, hair care, body products, jewelry, accessories, and in-store exclusive inventory.",

  problem:
    "DHMS International needed a stronger digital storefront that could present its culturally focused product catalog, support online product discovery, highlight in-store-only merchandise, and give customers a clear path to shop, contact the business, and visit the physical location.",

  contribution:
    "Designed and developed the customer-facing shopping experience, including responsive navigation, product collections, promotional sections, in-store pickup messaging, category discovery, testimonials, contact information, and retail-focused user flows.",

  result:
    "Delivered a modern, mobile-friendly storefront that gives DHMS International a professional online presence while connecting its physical boutique experience with digital product discovery and customer engagement.",

  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Responsive Design",
    "E-Commerce UI",
    "Product Catalog",
    "Retail UX",
  ],

  link: "https://www.dhmsint.com",
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
    link: "wwww.neeslearning.com"
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
    link: "https://www.perlicatoursandtravel.com/"
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
    link: "https://www.perlicatoursandtravel.com/"
  },
];