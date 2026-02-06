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
    text: "Establishes mutual understanding and preliminary transaction terms.",
  },
  {
    icon: "checkCircle",
    text: "Reduces misunderstandings before drafting formal contracts.",
  },
  {
    icon: "scale",
    text: "LOIs drafted specifically for your business transaction.",
  },
  {
    icon: "shield",
    text: "Clear guidance on binding vs non-binding clauses.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of all involved parties",
      "Transaction overview and commercial intent",
      "Preliminary terms and timelines",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Customized Letter of Intent drafting",
      "Clear distinction between binding and non-binding clauses",
      "Commercially aligned structure for negotiations",
      "Legally sound documentation to support final agreements",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Letter of Intent (LOI)?",
    a: "A Letter of Intent is a document expressing a preliminary intention to enter into a business transaction, outlining key commercial terms before a formal contract is executed.",
  },
  {
    q: "Is a Letter of Intent legally binding?",
    a: "An LOI may contain both binding and non-binding clauses. Typically, confidentiality and exclusivity clauses are binding, while commercial terms remain non-binding.",
  },
  {
    q: "Why use an LOI before a formal agreement?",
    a: "An LOI helps align expectations early, reduces negotiation risks, and saves time and cost before drafting detailed legal agreements.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function LetterOfIntentPage() {
  return (
    <ServicePageLayout
      title="Letter of Intent (LOI) Drafting"
      subtitle="A preliminary legal document defining intent, key terms, and negotiation framework."
      badgeText="Preliminary terms • Negotiation clarity • Risk reduction"
      icon="fileText"
      contentTitle="Why a Letter of Intent Is Important"
      contentDescription="A Letter of Intent helps parties align on essential commercial terms before entering complex legal agreements, reducing misunderstandings and strengthening negotiations."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-cyan-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-cyan-500 to-blue-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-cyan-600"
      primaryBg="bg-gradient-to-r from-cyan-600 to-blue-600"
      primaryHoverBg="bg-gradient-to-r from-cyan-700 to-blue-700"
    />
  );
}
