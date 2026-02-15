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
    text: "Protects investments of all joint venture partners.",
  },
  {
    icon: "gavel",
    text: "Defines clear governance and dispute resolution mechanisms.",
  },
  {
    icon: "fileText",
    text: "Joint Venture agreements drafted in compliance with Indian law.",
  },
  {
    icon: "checkCircle",
    text: "Clear guidance on profit sharing, timelines, and exit strategies.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of all joint venture parties",
      "Investment contributions and ownership ratios",
      "Governance and management structure",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Legally compliant Joint Venture agreements",
      "Clear profit-sharing and governance structure",
      "Defined dispute resolution mechanisms",
      "Well-structured exit and termination clauses",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Joint Venture (JV) Agreement?",
    a: "A Joint Venture Agreement defines the partnership structure, investment contributions, management responsibilities, and profit-sharing terms between collaborating parties.",
  },
  {
    q: "Why is a formal JV Agreement necessary?",
    a: "It protects investments, establishes governance rules, and provides dispute resolution mechanisms, reducing legal and operational risks.",
  },
  {
    q: "What key elements are covered in a JV Agreement?",
    a: "The agreement covers capital contribution, profit sharing, governance, decision-making, dispute resolution, and exit strategies.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function JointVentureAgreementPage() {
  return (
    <ServicePageLayout
      title="Joint Venture (JV) Agreement Drafting"
      subtitle="A legally binding agreement defining investment, management, and profit-sharing in a joint venture."
      badgeText="Investment protection • Governance clarity • Dispute control"
      icon="users"

      serviceID="JOINT_VENTURE_AGREEMENT_DRAFTING"
      contentTitle="Why a Joint Venture Agreement Is Essential"
      contentDescription="A well-drafted Joint Venture Agreement protects the interests of all parties by clearly defining management roles, profit sharing, governance, and exit mechanisms from the outset."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-yellow-500/20",
        orb2: "bg-orange-500/20",
        iconBg: "from-yellow-500 to-orange-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-yellow-600"
      primaryBg="bg-gradient-to-r from-yellow-600 to-orange-600"
      primaryHoverBg="bg-gradient-to-r from-yellow-700 to-orange-700"
    />
  );
}
