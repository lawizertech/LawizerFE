"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "trendingUp",
    text: "Mandatory compliance for individuals and HUFs with business or professional income",
  },
  {
    icon: "fileText",
    text: "Accurate reporting of Balance Sheet and Profit & Loss Account",
  },
  {
    icon: "scale",
    text: "Ensures compliance with Income Tax Act and Section 44AB audit provisions",
  },
  {
    icon: "gavel",
    text: "Expert handling of complex business, capital gains, and partner income",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const applicableTo = [
  "Individuals or HUFs having income from Proprietary Business or Profession",
  "Partners in firms receiving salary, interest, or remuneration",
  "Taxpayers having business income along with capital gains, salary, or house property income",
  "Entrepreneurs and self-employed professionals",
];

const documentsRequired = [
  "All documents applicable for ITR-2",
  "Books of Accounts and Financial Statements (Balance Sheet & P&L)",
  "Tax Audit Report under Section 44AB (if applicable)",
  "Business bank statements",
];

const sections = [
  {
    title: "Who Should File ITR-3",
    icon: "users",
    type: "list",
    data: applicableTo,
  },
  {
    title: "Documents Required for ITR-3 Filing",
    icon: "fileText",
    type: "list",
    data: documentsRequired,
  },
  {
    title: "Why Expert Assistance Is Important",
    icon: "gavel",
    type: "grid",
    data: [
      "Mandatory disclosure of Balance Sheet and Profit & Loss Account",
      "Higher scrutiny by Income Tax Department for business returns",
      "Audit compliance under Section 44AB where applicable",
      "Avoidance of penalties due to incorrect reporting",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "Who is required to file ITR-3?",
    a: "ITR-3 is applicable to individuals and HUFs who have income from proprietary business or profession. It is mandatory even if there are other income sources like salary or capital gains.",
  },
  {
    q: "Can a partner in a firm file ITR-3?",
    a: "Yes. If you are a partner in a firm and receive remuneration, interest, or salary from the firm, you must file ITR-3.",
  },
  {
    q: "Is ITR-3 mandatory if I have capital gains along with business income?",
    a: "Yes. Once there is any income from business or profession, ITR-3 becomes mandatory regardless of other income sources.",
  },
  {
    q: "What additional documents are needed for ITR-3?",
    a: "In addition to standard income documents, ITR-3 requires Books of Accounts, Balance Sheet, Profit & Loss Account, and a Tax Audit Report if applicable.",
  },
  {
    q: "Is professional CA assistance recommended for ITR-3?",
    a: "Yes. Due to complexity, audit requirements, and higher scrutiny, professional assistance ensures accurate filing and compliance.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ITR3Page() {
  return (
    <ServicePageLayout
      title="ITR-3 Filing"
      subtitle="Mandatory income tax return for individuals and HUFs with business or professional income."
      badgeText="Business Income • Audit Ready • CA Assisted"
      icon="trendingUp"
      contentTitle="Who Should File ITR-3?"
      contentDescription="ITR-3 is designed for entrepreneurs, professionals, and business owners. It requires detailed disclosure of financial statements, business income, and audit reports where applicable. Professional filing ensures compliance and avoids penalties."
      section1Title="Key Benefits of Professional ITR-3 Filing"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-orange-500/20",
        orb2: "bg-red-500/20",
        iconBg: "from-orange-500 to-red-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-orange-600"
      primaryBg="bg-gradient-to-r from-orange-600 to-red-600"
      primaryHoverBg="bg-gradient-to-r from-orange-700 to-red-700"
    />
  );
}
