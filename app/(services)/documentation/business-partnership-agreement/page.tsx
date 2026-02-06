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
    text: "Prevents conflicts among partners by clearly defining rights and obligations.",
  },
  {
    icon: "badgeIndianRupee",
    text: "Provides clarity on capital contribution, investment, and profit-sharing ratios.",
  },
  {
    icon: "scale",
    text: "Legally enforceable document in case of disputes or disagreements.",
  },
  {
    icon: "fileText",
    text: "Agreement tailored specifically to your business model and partnership structure.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    type: "alert",
    data: {
      type: "warning",
      title: "Highly Recommended Before Starting Operations",
      description:
        "Operating without a written partnership agreement can lead to serious financial and legal disputes that are difficult to resolve later.",
    },
  },
  {
    title: "Pre-Requisites for Drafting the Agreement",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of all partners (name, address, identity proof)",
      "Capital contribution and investment amount of each partner",
      "Profit-sharing ratio and roles & responsibilities",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Professionally drafted partnership agreement",
      "Clear clauses on management, profit sharing, and decision-making",
      "Exit, retirement, and dispute resolution clauses",
      "Clause-wise explanation before finalisation",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Business Partnership Agreement?",
    a: "It is a legal contract between business partners that defines capital contribution, profit-sharing, management roles, rights, responsibilities, and exit mechanisms.",
  },
  {
    q: "Why is a Partnership Agreement necessary?",
    a: "It prevents conflicts, provides legal clarity, and protects partners in case of disputes by clearly documenting financial and operational terms.",
  },
  {
    q: "Is a partnership agreement legally enforceable?",
    a: "Yes. A properly drafted and executed partnership agreement is legally enforceable and can be relied upon in court or arbitration.",
  },
  {
    q: "Can the agreement be customized?",
    a: "Absolutely. Lawizer drafts partnership agreements customized to your business, partner roles, and long-term goals.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function BusinessPartnershipAgreementPage() {
  return (
    <ServicePageLayout
      title="Business Partnership Agreement Drafting"
      subtitle="A legally enforceable agreement defining investment, profit-sharing, roles, and exit mechanisms among partners."
      badgeText="Custom-drafted • Legally enforceable • Dispute-proof"
      icon="users"
      contentTitle="Why a Business Partnership Agreement Is Essential"
      contentDescription="A well-drafted partnership agreement is the foundation of a stable business relationship. It clearly documents expectations, prevents misunderstandings, and safeguards the interests of all partners from day one."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-orange-500/20",
        orb2: "bg-yellow-500/20",
        iconBg: "from-orange-500 to-yellow-500",
        badgeText: "text-yellow-300",
      }}
      primaryColor="text-orange-600"
      primaryBg="bg-gradient-to-r from-orange-600 to-yellow-600"
      primaryHoverBg="bg-gradient-to-r from-orange-700 to-yellow-700"
    />
  );
}
