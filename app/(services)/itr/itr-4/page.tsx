"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "users",
    text: "Simple compliance for small businesses opting for Presumptive Taxation",
  },
  {
    icon: "fileText",
    text: "No requirement to maintain detailed Books of Accounts",
  },
  {
    icon: "scale",
    text: "Lower tax compliance burden under Sections 44AD, 44ADA & 44AE",
  },
  {
    icon: "gavel",
    text: "CA-assisted filing to avoid incorrect presumptive income declaration",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const applicableTo = [
  "Resident Individuals, HUFs, or Firms (other than LLP)",
  "Total income up to ₹50 Lakh",
  "Opting for Presumptive Taxation under Section 44AD, 44ADA, or 44AE",
  "Income from Salary, One House Property, or Other Sources allowed",
];

const documentsRequired = [
  "PAN Card & Aadhaar Card",
  "Form 26AS and Annual Information Statement (AIS)",
  "Bank statements to calculate turnover or gross receipts",
  "Investment proofs for deductions under Sections 80C, 80D, etc.",
];

const notApplicable = [
  "Income exceeding ₹50 Lakh",
  "Non-Residents (NR) or Not Ordinarily Residents (NOR)",
  "Directors in companies",
  "Capital gains exceeding permissible limits",
];

const sections = [
  {
    title: "Who Should File ITR-4 (Sugam)",
    icon: "users",
    type: "list",
    data: applicableTo,
  },
  {
    title: "Documents Required for ITR-4",
    icon: "fileText",
    type: "list",
    data: documentsRequired,
  },
  {
    title: "Who Cannot Use ITR-4",
    icon: "gavel",
    type: "grid",
    data: notApplicable,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is the Presumptive Taxation Scheme?",
    a: "Presumptive taxation under Sections 44AD, 44ADA, and 44AE allows eligible taxpayers to declare income at a fixed percentage of turnover instead of maintaining detailed books of accounts.",
  },
  {
    q: "Who can file ITR-4 (Sugam)?",
    a: "Resident Individuals, HUFs, or Firms (other than LLP) with income up to ₹50 lakh who opt for the Presumptive Taxation Scheme can file ITR-4.",
  },
  {
    q: "Can an LLP file ITR-4?",
    a: "No. LLPs must file ITR-5. ITR-4 is only for Individuals, HUFs, and Firms other than LLPs.",
  },
  {
    q: "Are bank statements required for ITR-4?",
    a: "Yes. Bank statements are required to determine turnover or gross receipts for presumptive income calculation.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ITR4Page() {
  return (
    <ServicePageLayout
      title="ITR-4 (Sugam) Filing"
      subtitle="Simplified income tax return for small businesses and professionals under the Presumptive Taxation Scheme."
      badgeText="Presumptive Tax • Small Business • Fast Filing"
      icon="users"

      serviceID="ITR-4_FILING"
      contentTitle="Who Should File ITR-4?"
      contentDescription="ITR-4 (Sugam) is designed for small businesses and professionals opting for presumptive taxation. It offers simplified compliance without maintaining detailed books, making it ideal for quick and hassle-free filing."
      section1Title="Key Benefits of ITR-4 Filing"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-yellow-500/20",
        orb2: "bg-orange-500/20",
        iconBg: "from-yellow-500 to-orange-500",
        badgeText: "text-yellow-300",
      }}
      primaryColor="text-yellow-600"
      primaryBg="bg-gradient-to-r from-yellow-600 to-orange-600"
      primaryHoverBg="bg-gradient-to-r from-yellow-700 to-orange-700"
    />
  );
}
