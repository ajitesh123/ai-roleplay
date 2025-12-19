export interface ComparisonRow {
  feature: string;
  secondNature: string;
  hyperbond: string;
  quantified: string;
  mindtickle: string;
  yoodli: string;
  toughTongue: string;
}

export interface PlatformDetails {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  strengths: string[];
  limitations: string[];
  pricing: string;
  bestFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DecisionCriteria {
  platformName: string;
  criteria: string[];
}