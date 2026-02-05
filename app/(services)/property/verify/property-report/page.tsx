"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "shield",
    text: "A safe investment in property with clear legal ownership.",
  },
  {
    icon: "checkCircle",
    text: "Eliminates fear of hidden litigation, loans, or encumbrances on the property.",
  },
  {
    icon: "clock",
    text: "Peace of mind with complete verification from the comfort of your home.",
  },
  {
    icon: "users",
    text: "Enables you to transact with complete confidence.",
  },
] satisfies BenefitItem[];

/* ---------- PROCESS STEPS ---------- */

const processSteps = [
  "Upload or email all property documents, or request doorstep pickup.",
  "Senior property lawyers conduct a detailed review of all documents (200–300 pages).",
  "Property details are verified with government records wherever required.",
  "Continuity of the property paper trail is established and missing documents identified.",
  "A detailed property verification report is prepared with the lawyer’s observations.",
  "You receive a dedicated consultation slot to clarify all doubts after the report.",
  "The entire process is completed within 5 days.",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "The Property Verification Process",
    icon: "clock",
    type: "list",
    data: processSteps,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What does the Property Report uncover?",
    a: "The report covers ownership records, title clarity, encumbrances, government approvals, RERA compliance, and pending disputes.",
  },
  {
    q: "Why is the report process so thorough?",
    a: "The report is prepared after a detailed review by senior property lawyers along with verification from government records to ensure a complete paper trail.",
  },
  {
    q: "How long does it take to get the report?",
    a: "The entire property verification process is completed within 5 days.",
  },
  {
    q: "Is there consultation after the report?",
    a: "Yes, you receive a dedicated consultation session with the senior property lawyer to explain the report and address all queries.",
  },
  {
    q: "Does Lawizer check for RERA approval?",
    a: "Yes, the property report verifies RERA approval and ensures the property is free from legal issues and fully compliant.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function PropertyReportPage() {
  return (
    <ServicePageLayout
      title="Verified Property Report"
      subtitle="Make every property deal safe and stress-free with Lawizer’s comprehensive Verified Property Report."
      badgeText="Lawizer — Legal clarity for every property."
      icon="home"
      contentTitle="Why You Need a Property Search Report"
      contentDescription="A Verified Property Report gives you complete visibility into ownership history, title clarity, encumbrances, approvals, and potential disputes. This detailed legal due diligence protects you from fraud, hidden liabilities, and costly mistakes before buying or investing in property."
      section1Title="Key Benefits of a Verified Property Report"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-indigo-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-indigo-500 to-blue-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-indigo-600"
      primaryBg="bg-gradient-to-r from-indigo-600 to-blue-600"
      primaryHoverBg="bg-gradient-to-r from-indigo-700 to-blue-700"
    />
  );
}
