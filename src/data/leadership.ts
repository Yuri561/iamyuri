import type { LeadershipTab } from "../types/portfolio";

export const leadershipContent: Record<
  LeadershipTab,
  {
    title: string;
    description: string;
    items: string[];
  }
> = {
  CEO: {
    title: "CEO / Collaborative Engineering",
    description:
      "Through Impact Team Technology, I help coordinate development work, contribute to shared projects and create opportunities for developers to gain real project experience.",
    items: [
      "Project planning",
      "Team direction",
      "Repository collaboration",
      "Development workflows",
      "Shared project execution",
      "Technical support",
    ],
  },

  Mentor: {
    title: "Developer Mentorship",
    description:
      "I help newer developers understand programming and debugging rather than simply handing them code to copy.",
    items: [
      "Python fundamentals",
      "Debugging",
      "Git workflows",
      "Project structure",
      "API concepts",
      "Problem solving",
    ],
  },
};