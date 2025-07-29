export interface HeroSection {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
}

export interface AboutSection {
  bio: string;
  email: string;
  phone: string;
  location: string;
  socials: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  client: string;
  quote: string;
}

export interface Blog {
  title: string;
  summary?: string;
}

export interface Contact {
  message: string;
  email: string;
  phone: string;
}

export interface PortfolioData {
  id: string;
  template: "template1" | "template2";
  hero: HeroSection;
  about: AboutSection;
  skills: string[];
  services: Service[];
  portfolio: Project[];
  testimonials: Testimonial[];
  blog: Blog;
  contact: Contact;
}
