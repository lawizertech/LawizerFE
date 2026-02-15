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
    text: "Protects the franchisor’s brand identity and business model.",
  },
  {
    icon: "checkCircle",
    text: "Ensures franchisee compliance with quality and operational standards.",
  },
  {
    icon: "scale",
    text: "Prevents disputes related to royalties, territory, or termination.",
  },
  {
    icon: "users",
    text: "Drafting franchise agreements compliant with Indian laws.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites from Client",
    icon: "checkCircle",
    type: "list",
    data: [
      "Franchisor and franchisee details",
      "Franchise model, fees, and territory",
      "Operational guidelines and royalty structure",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "grid",
    data: [
      "Drafting franchise agreements compliant with Indian laws",
      "Clause-by-clause legal explanation",
      "Clear definition of rights, obligations, and royalties",
      "Guidance on registration, if required",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Franchise Agreement?",
    a: "A Franchise Agreement is a legal contract between a franchisor (brand owner) and a franchisee defining rights, obligations, royalties, territory, and operational standards.",
  },
  {
    q: "Why is a Franchise Agreement important for the franchisor?",
    a: "It protects the franchisor’s brand and business model while ensuring franchisee compliance with quality and operational standards.",
  },
  {
    q: "What key details should be clearly defined?",
    a: "The agreement must define rights, obligations, royalty structure, territory, and termination terms to prevent disputes.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function FranchiseAgreementPage() {
  return (
    <ServicePageLayout
      title="Franchise Agreement Drafting"
      subtitle="A legally sound contract defining rights, obligations, royalties, and operational standards."
      badgeText="Brand protection • Indian law compliant • Dispute prevention"
      icon="building2"
      serviceID="FRANCHISE_AGREEMENT_DRAFTING"
      contentTitle="Why a Franchise Agreement Is Crucial"
      contentDescription="A strong Franchise Agreement safeguards brand integrity and creates a clear, enforceable framework for a successful franchisor–franchisee relationship."
      section1Title="Key Protections & Benefits"
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
      primaryBg="bg-gradient-to-r from-yellow-500 to-orange-500"
      primaryHoverBg="bg-gradient-to-r from-yellow-600 to-orange-600"
    />
  );
}
