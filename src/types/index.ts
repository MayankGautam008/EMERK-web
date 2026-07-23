export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  details?: string;
}

export interface ProblemCard {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ComparisonRow {
  feature: string;
  drugCheckers: boolean | string;
  adrDatabases: boolean | string;
  cdss: boolean | string;
  ehrAlerts: boolean | string;
  chatbots: boolean | string;
  emerk: boolean | string;
}

export interface WorkflowStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface TechCard {
  icon: string;
  name: string;
  category: string;
  description: string;
}

export interface UseCase {
  icon: string;
  userType: string;
  description: string;
  benefits: string[];
}

export interface USP {
  icon: string;
  title: string;
  description: string;
}

export interface BusinessModel {
  icon: string;
  title: string;
  description: string;
}

export interface ResearchMilestone {
  year: string;
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface FutureVision {
  icon: string;
  title: string;
  description: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
