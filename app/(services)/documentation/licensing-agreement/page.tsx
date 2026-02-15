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
    text: "Protects intellectual property rights and revenue streams.",
  },
  {
    icon: "scale",
    text: "Ensures legally enforceable usage terms and restrictions.",
  },
  {
    icon: "gavel",
    text: "Clearly defines royalties, scope of use, and license terms.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Licensor and licensee details",
      "Scope of licensed intellectual property",
      "Royalty structure or license fees",
      "Duration, territory, and special conditions",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "grid",
    data: [
      "Customized Licensing Agreement drafting",
      "Clear royalty, scope, and term definitions",
      "Risk-mitigated structure protecting IP ownership",
      "Legally enforceable agreement aligned with business goals",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Licensing Agreement?",
    a: "A Licensing Agreement allows one party (the licensee) to use intellectual property, technology, or products owned by another party (the licensor) under defined terms.",
  },
  {
    q: "Why is a Licensing Agreement important?",
    a: "It protects the licensor’s IP and revenue by clearly defining usage rights, restrictions, royalties, and legal enforceability.",
  },
  {
    q: "What details must be clearly defined?",
    a: "The agreement must specify the scope of the license, royalty or fee structure, duration, territory, and termination conditions.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function LicensingAgreementPage() {
  return (
    <ServicePageLayout
      title="Licensing Agreement Drafting"
      subtitle="A legally binding agreement governing the licensed use of intellectual property, technology, or products."
      badgeText="IP protection • Royalties • Enforceable terms"
      icon="fileText"
      serviceID="LICENSING_AGREEMENT_DRAFTING"
      contentTitle="Why a Licensing Agreement Is Critical"
      contentDescription="A Licensing Agreement enables you to monetize intellectual property while retaining ownership. It clearly defines how, where, and for how long your IP can be used, protecting both revenue and legal rights."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-pink-500/20",
        iconBg: "from-red-500 to-pink-500",
        badgeText: "text-pink-300",
      }}
      primaryColor="text-red-600"
      primaryBg="bg-gradient-to-r from-red-600 to-pink-600"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-pink-700"
    />
  );
}
