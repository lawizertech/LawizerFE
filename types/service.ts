export interface FAQItem {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

export interface BenefitItem {
  icon: string;
  title?: string;
  description?: string;
  text?: string;
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
  id?: string;
  slug?: string;
  category?: string;
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
  rating?: number;
  is_active?: boolean;
  theme?: ServiceTheme;
  addons?: any;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
  benefits: BenefitItem[];
  faqs: FAQItem[];
  sections: SectionBlock[];
}
