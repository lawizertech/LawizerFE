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
    text: "Correction of incorrect CIBIL records and restoration of credit score.",
  },
  {
    icon: "scale",
    text: "Immediate stoppage of illegal harassment by recovery agents.",
  },
  {
    icon: "checkCircle",
    text: "Compensation for financial loss, costs incurred, and mental harassment.",
  },
  {
    icon: "users",
    text: "Legal action compelling banks to issue no-dues certificates and rectify records.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Detailed written complaint to the bank or NBFC’s nodal officer.",
  "Escalation to the CEO in cases of continued harassment.",
  "Supporting documents such as loan agreement, payment receipts, and CIBIL/credit reports.",
  "Evidence of harassment including call recordings, messages, or police complaints (if any).",
  "Mandatory waiting period of 30 days after lodging complaint with the bank.",
];

const deliverables = [
  "Drafting of legal petition for Consumer Commission or RBI Ombudsman.",
  "Issuance of legal notices to the bank and credit bureaus (CIBIL, Equifax, etc.).",
  "Representation to secure rectification of credit records and compensation.",
];

const sections = [
  {
    title: "Pre-requisites for Filing a Loan or CIBIL Dispute Case",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a CIBIL or credit score dispute?",
    a: "A dispute arises when incorrect loan status such as 'written-off', 'default', or 'settled' is wrongly reported, damaging the consumer’s creditworthiness.",
  },
  {
    q: "What qualifies as harassment by recovery agents?",
    a: "Threats, repeated calls, intimidation, public shaming, or abusive conduct by bank or NBFC recovery agents in violation of RBI’s Fair Practices Code.",
  },
  {
    q: "Why is correcting CIBIL errors important?",
    a: "Incorrect CIBIL data can prevent future loans for housing, vehicles, education, or business. Legal action forces correction and restores financial credibility.",
  },
  {
    q: "Where is the legal case filed?",
    a: "Cases are filed before the Consumer Commission or the RBI Integrated Ombudsman depending on the nature of the dispute.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function LoanAdvanceDisputesPage() {
  return (
    <ServicePageLayout
      title="Loan & Advance Disputes"
      subtitle="Legal remedy for incorrect CIBIL reporting and harassment by banks or recovery agents."
      badgeText="CIBIL Rectification • Anti-Harassment • Legal Protection"
      icon="users"
      contentTitle="Resolve CIBIL Errors & Stop Recovery Harassment"
      contentDescription="Incorrect credit reporting and unlawful recovery practices can permanently damage your financial future. Legal action compels banks to correct CIBIL errors, stop harassment, and compensate affected consumers."
      section1Title="Why Legal Action is Necessary"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-orange-500/20",
        iconBg: "from-red-500 to-orange-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-red-600"
      primaryBg="bg-gradient-to-r from-red-600 to-orange-600"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-orange-700"
    />
  );
}
