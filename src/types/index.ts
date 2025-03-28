export type TechCategory = "Frontend" | "Backend" | "DevOps";

export interface Option {
  text: string;
  scores: Partial<Record<TechCategory, number>>;
}

export interface Question {
  question: string;
  options: Option[];
}
