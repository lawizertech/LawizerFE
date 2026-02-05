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
    text: "Authorizes another person to legally act on your behalf.",
  },
  {
    icon: "shield",
    text: "Protects your interests in property, banking, and business transactions.",
  },
  {
    icon: "scale",
    text: "Prevents misuse by clearly defining powers and limitations.",
  },
  {
    icon: "home",
    text: "Ensures validity and compliance under local laws (e.g., West Bengal).",
  },
  {
    icon: "fileText",
    text: "Professionally drafted document clearly outlining powers and responsibilities.",
  },
] satisfies BenefitItem[];

/* ---------- PRE-REQUISITES ---------- */

const prerequisites = [
  "Principal and attorney details including name, address, and ID proofs",
  "Scope of powers to be granted (general, specific, financial, or property-related)",
  "Property or asset details, if applicable",
];

/* ---------- DELIVERABLES ---------- */

const deliverables = [
  "Drafted Power of Attorney document with legally compliant clauses",
  "Clause-wise explanation for complete clarity",
  "Digital copy with guidance for notarization or registration",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Information Required for Drafting",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What Lawizer Delivers",
    icon: "home",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Power of Attorney (POA)?",
    a: "A Power of Attorney is a legal document that authorizes a person (attorney) to act on behalf of another (principal) in financial, property, or legal matters.",
  },
  {
    q: "Why is a POA important for property matters?",
    a: "If the principal cannot be physically present, a POA allows the attorney to legally execute property transactions on their behalf.",
  },
  {
    q: "What is the difference between a General and a Special POA?",
    a: "A General POA grants broad authority, while a Special POA limits the attorney to specific acts or transactions.",
  },
  {
    q: "Is registration of a POA necessary?",
    a: "A registered POA is legally enforceable and accepted by government and financial institutions.",
  },
  {
    q: "What details are required to draft a POA?",
    a: "Details and ID proofs of both the principal and the attorney, along with the specific powers being granted.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function PowerOfAttorneyDraftingPage() {
  return (
    <ServicePageLayout
      title="Power of Attorney (POA) Drafting"
      subtitle="A legally binding document that authorizes a trusted person to act on your behalf in financial, property, or legal matters."
      badgeText="Lawizer drafts your Power of Attorney professionally with full legal clarity and compliance."
      icon="gavel"
      contentTitle="Why a Properly Drafted Power of Attorney Is Essential"
      contentDescription="A well-drafted Power of Attorney is critical when the principal cannot be present or needs assistance managing affairs. It prevents misuse, defines legal authority clearly, and ensures the document is valid, enforceable, and compliant with applicable laws."
      section1Title="Key Protections and Benefits"
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
