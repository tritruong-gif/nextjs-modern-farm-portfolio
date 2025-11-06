// types/index.d.ts

export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarSrc: string; // Path to image in public/images/avatars/
  quote: string;
  rating: number; // 1-5
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string; // For single team member page
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

// Global props for simple sections
export interface SectionProps {
  className?: string;
}


export interface Feature {
  id: string;
  title: string;
  description: string;
  iconSrc: string; // Path to main icon
  href: string;
}


export interface FieldFeature {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
}

export interface HistoryEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  author: string;
  title: string;
  imageUrl: string;
  href: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  title: string;
  imageUrl: string;
  href: string;
}

export interface InfoItem {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
}

export interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
}