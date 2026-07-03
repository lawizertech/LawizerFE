export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: string;
  title?: string;
  description: string;
}

export interface SectionBlock {
  title: string;
  content?: string;
  icon?: string;
  type?: string;
  data?: any;
}

export interface ServiceTheme {
  orb1?: string;
  orb2?: string;
  heroBg?: string;
  iconBg?: string;
  badgeText?: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  badgeText: string;
  icon: string;
  serviceID: string;
  contentTitle: string;
  contentDescription: string;
  section1Title: string;
  price: number;
  originalPrice?: number;
  theme?: ServiceTheme;
  addons?: any;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
  benefits: BenefitItem[];
  faqs: FAQItem[];
  sections: SectionBlock[];
}
