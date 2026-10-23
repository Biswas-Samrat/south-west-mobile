/* ── Types ──────────────────────────────────────────────── */

export type PostTag =
  | "DPF"
  | "Brakes"
  | "Engine"
  | "Repairs"
  | "Servicing"
  | "Buying advice"
  | "Offers"
  | "News";

export interface Service {
  slug: "diagnostics" | "servicing" | "repairs";
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  bullets: string[];
  href: string;
  whatsappService: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  vehicle: string;
  told: string;
  found: string;
  result: string;
  quotedPrice?: string;
  fixedPrice?: string;
  imageSlot: string;
}

export interface Faq {
  id: string;
  group: "Booking and quotes" | "Services" | "Pricing and finance" | "Areas and workshop";
  question: string;
  answer: string;
  home?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  detail?: string;
  platform?: "Google" | "Yell" | "Facebook";
}

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "timeline"; items: { label: string; text: string }[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  tags: PostTag[];
  body: PostBlock[];
  source: "facebook" | "manual";
  facebookUrl?: string;
  publishedAt?: string;
  image?: { src: string; alt: string };
  order: number;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface QuoteFormValues {
  name: string;
  phone: string;
  email?: string;
  postcode: string;
  reg?: string;
  makeModel: string;
  year?: string;
  service: string;
  location: "mobile" | "workshop" | "unsure";
  date?: string;
  timeOfDay?: "Morning" | "Afternoon" | "Any time";
  blueLight: boolean;
  finance: boolean;
  details?: string;
}
