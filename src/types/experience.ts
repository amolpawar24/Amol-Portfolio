// src/types/experience.ts

export type ExperienceType =
  | "professional"
  | "internship"
  | "freelance";

export type ExperienceStatus =
  | "completed"
  | "ongoing";

export interface Experience {
  id: string;

  type: ExperienceType;

  company: string;
  role: string;

  location?: string;

  startDate: string;
  endDate?: string;

  description: string;

  technologies: string[];

  responsibilities?: string[];

  achievements?: string[];

  companyLogo?: string;
  companyUrl?: string;
  projectUrl?: string;

  featured?: boolean;

  status: ExperienceStatus;
}