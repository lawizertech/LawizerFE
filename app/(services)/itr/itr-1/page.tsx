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
    text: "For resident individuals with income primarily from salary and one house property",
  },
  {
    icon: "checkCircle",
    text: "Applicable where total income does not exceed ₹50 Lakh",
  },
  {
    icon: "fileText",
    text: "Income computed based on Form 16, AIS, and Form 26AS",
  },
  {
    icon: "shield",
    text: "Filed accurately by professionals to ensure compliance",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const applicableTo = [
  "Resident Individual with Total Income up to ₹50 Lakh",
  "Income from Salary or Pension",
  "Income from One House Property (excluding brought forward loss)",
  "Income from Other Sources (e.g., Interest)",
  "Agricultural Income up to ₹5,000",
];

const documentsNeeded = [
  "PAN Card & Aadhaar Card",
  "Form 16 (from employer)",
  "Form 26AS and Annual Information Statement (AIS)",
  "Interest Certificates from banks/post office",
  "Investment Proofs for claiming deductions (e.g., Section 80C, 80D)",
];

const notApplicable = [
  "Non-residents (NR) or Not Ordinarily Residents (NOR)",
  "Individuals with income from more than one house property",
  "Individuals with Capital Gains or business/profession income",
  "Those who are a Director in a company or have held unlisted equity shares",
];

const sections = [
  {
    title: "Applicable To",
    icon: "checkCircle",
    type: "list",
    data: applicableTo,
  },
  {
    title: "Documents Needed",
    icon: "fileText",
    type: "list",
    data: documentsNeeded,
  },
  {
    title: "Not Applicable To (Important Note)",
    icon: "home",
    type: "list",
    data: notApplicable,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "Who is eligible to file ITR-1 (Sahaj)?",
    a: "ITR-1 is for Resident Individuals whose total income is up to ₹50 Lakh, and whose income sources include salary/pension, income from one house property, and income from other sources (like interest).",
  },
  {
    q: "What is the income limit for ITR-1?",
    a: "The total income of the individual must not exceed ₹50 Lakh to be eligible to file ITR-1.",
  },
  {
    q: "Can ITR-1 be used if I have rental income from two properties?",
    a: "No. ITR-1 is not applicable if you have income from more than one house property. You would typically need to file ITR-2.",
  },
  {
    q: "Do I need my Form 16 to file ITR-1?",
    a: "Yes, Form 16 from your employer is one of the essential documents needed for ITR-1 filing, along with your PAN, Aadhaar, and investment proofs.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ITR1Page() {
  return (
    <ServicePageLayout
      title="ITR-1 (Sahaj) Filing"
      subtitle="The Salaried Simplifier: For resident individuals with income primarily from salary and one house property, with total income up to ₹50 Lakh."
      badgeText="CA-assisted • Fast • Accurate"
      icon="users"
      contentTitle="Who Should File ITR-1?"
      contentDescription="ITR-1 is meant for salaried individuals and pensioners with simple income structures. Filing the correct return helps avoid errors, notices, and compliance issues."
      section1Title="Key Highlights of ITR-1"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-green-500/20",
        orb2: "bg-teal-500/20",
        iconBg: "from-green-500 to-teal-500",
        badgeText: "text-teal-300",
      }}
      primaryColor="text-green-600"
      primaryBg="bg-gradient-to-r from-green-600 to-teal-600"
      primaryHoverBg="bg-gradient-to-r from-green-700 to-teal-700"
      serviceID="ITR_1_FILLING"
    />
  );
}
