export interface Skill {
  name: string;
  level: number; // percentage (e.g. 90) or rating (1-5)
  icon: string; // lucide icon name representation
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'IoT & Hardware' | 'Machine Learning' | 'Software Engineering';
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}
