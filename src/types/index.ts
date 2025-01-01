import { LucideIcon } from 'lucide-react'

export interface TechStackItem {
  name: string
  icon: LucideIcon
}

export interface FloatingCardProps {
  children: React.ReactNode
  className?: string
}

export interface MousePosition {
  x: number
  y: number
}

export interface AnimatedBackgroundProps {
  className?: string
}

// ptoject 


// category
export interface Category {
  id: string
  label: string
  icon: LucideIcon
  
}

interface ProjectLinks {
  github: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  tags: string[];
  technologies: string[];
  links: ProjectLinks;
  category: string;
  highlight?: boolean;
}



// mentoship

export interface MentorshipStat {
  icon: LucideIcon;
  count: number;
  label: string;
  description: string;
  suffix?: string;
}

export interface Offering {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  highlight?: string;
  isHighlighted?: boolean;
}

export interface OfferingCardProps {
  offering: Offering;
}
