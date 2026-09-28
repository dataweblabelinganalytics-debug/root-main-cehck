export interface Project {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'In Development' | 'Beta' | 'Live' | 'Coming Soon';
  route: string;
  technologies: string[];
  highlightColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  projectInterest: string;
  privacyConsent: boolean;
}

export interface NewsletterFormData {
  email: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}
