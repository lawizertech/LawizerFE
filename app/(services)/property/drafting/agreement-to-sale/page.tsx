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
    text: "Legally binds both buyer and seller to the agreed terms.",
  },
  {
    icon: "fileText",
    text: "Clearly defines price, payment schedule, and possession timeline.",
  },
  {
    icon: "shield",
    text: "Protects the buyer against unauthorized transfer or mortgage of the property.",
  },
  {
    icon: "shield",
    text: "Protects the seller against payment defaults and breach of terms.",
  },
  {
    icon: "home",
    text: "Lays the foundation for a smooth and dispute-free property transaction.",
  },
  {
    icon: "scale",
    text: "Acts as the essential base document for final Sale Deed registration.",
  },
] satisfies BenefitItem[];

/* ---------- KEY ELEMENTS ---------- */

const keyElements = [
  "Details of buyer and seller including names and addresses",
  "Complete description of the property (location, size, and identification)",
  "Sale price and payment schedule agreed between parties",
  "Possession date and handover terms",
  "Conditions precedent and subsequent to the sale",
  "Representations and warranties by the seller",
  "Indemnity clause protecting the buyer from title defects",
  "Dispute resolution mechanism",
  "Termination clauses and consequences",
];

/* ---------- DELIVERABLES ---------- */

const deliverables = [
  "Professionally drafted Agreement to Sale",
  "Legally valid and precise documentation",
  "Protection of buyer and seller interests",
  "Clause-wise explanation for complete clarity",
  "Digital copy ready for stamp paper printing",
  "Guidance on stamp paper value as per state law",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Key Elements Covered in the Agreement",
    icon: "gavel",
    type: "list",
    data: keyElements,
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is an Agreement to Sale?",
    a: "An Agreement to Sale is the first legal step before executing a Sale Deed. It records the mutual terms agreed between the buyer and seller, including price, payment schedule, and possession date.",
  },
  {
    q: "Is an Agreement to Sale the same as a Sale Deed?",
    a: "No. An Agreement to Sale is a promise to transfer the property in the future, while a Sale Deed immediately transfers ownership.",
  },
  {
    q: "Why is a properly drafted Agreement to Sale important?",
    a: "It legally binds both parties, prevents last-minute disputes, protects buyer interests, and secures the seller against defaults.",
  },
  {
    q: "Does Lawizer customize the agreement based on location?",
    a: "Yes. Lawizer drafts Agreements to Sale in compliance with local property laws and state-specific requirements.",
  },
  {
    q: "What is the process for drafting the agreement?",
    a: "The lawyer discusses property details, drafts the agreement, and guides you on stamp paper requirements for execution.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function AgreementToSaleDraftingPage() {
  return (
    <ServicePageLayout
      title="Agreement to Sale Drafting"
      subtitle="The critical first legal step defining price, payment schedule, and possession terms to safeguard buyer and seller interests."
      badgeText="Lawizer ensures your Agreement to Sale is precise, legally valid, and tailored to local property laws."
      icon="fileText"
      contentTitle="Why a Proper Agreement to Sale Is Essential"
      contentDescription="An Agreement to Sale prevents disputes by clearly defining the rights and obligations of both parties. A professionally drafted agreement ensures legal enforceability, protects your financial interests, and creates a strong foundation for smooth execution of the final Sale Deed."
      section1Title="Key Protections and Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-orange-500/20",
        orb2: "bg-red-500/20",
        iconBg: "from-orange-500 to-yellow-500",
        badgeText: "text-yellow-400",
      }}
      primaryColor="text-orange-600"
      primaryBg="bg-gradient-to-r from-red-500 to-orange-500"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-600"
    />
  );
}
