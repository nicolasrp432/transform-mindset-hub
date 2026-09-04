import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type FaqItem = { question: string; answer: ReactNode };

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  stars: number;
};

export type IconItem = { icon: LucideIcon; title: string; text: string };

export type TrustItem = { icon: LucideIcon; label: string };

export type ModuleItem = { title: string; description: string };
