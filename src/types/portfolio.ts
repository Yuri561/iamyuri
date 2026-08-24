import type { LucideIcon } from "lucide-react";

export type RecruiterModeId =
  | "backend"
  | "automation"
  | "systems"
  | "brazil";

export type SkillCategory =
  | "Backend"
  | "Frontend"
  | "Cloud"
  | "Controls"
  | "Networking";

export type EquipmentKey =
  | "AHU"
  | "VAV"
  | "RTU"
  | "VFD"
  | "Controller"
  | "Sensors";

export type LeadershipTab =
  | "CEO"
  | "Mentor";

export interface RecruiterMode {
  id: RecruiterModeId;
  label: string;
  icon: LucideIcon;
}

export interface RecruiterContent {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface CareerStage {
  number: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

export interface DiagnosticAnswer {
  text: string;
  correct: boolean;
}

export interface DiagnosticQuestion {
  question: string;
  answers: DiagnosticAnswer[];
  explanation: string;
}

export interface SkillGroup {
  icon: LucideIcon;
  description: string;
  items: string[];
}

export interface EquipmentData {
  title: string;
  intro: string;
  points: string[];
  faults: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  contribution: string;
  result: string;
  stack: string[];
  link: string;
}

export interface Language {
  flag: string;
  language: string;
  level: string;
  description: string;
}

export interface CurrentGoal {
  label: string;
  progress: number;
  description: string;
}