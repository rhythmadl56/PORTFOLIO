export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration?: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  tagline: string;
  summary: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}