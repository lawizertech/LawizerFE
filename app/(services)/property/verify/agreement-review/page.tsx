"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "scale",
    text: "Legally binds both parties and prevents last-minute cancellations or disputes.",
  },
  {
    icon: "checkCircle",
    text: "Defines clear terms such as payment schedule, possession dates, and responsibilities.",
  },
  {
    icon: "shield",
    text: "Protects buyer and seller rights and prevents misuse or default on commitments.",
  },
  {
    icon: "shield",
    text: "Prevents fraud and misrepresentation by safeguarding against fake or illegal transactions.",
  },
  {
    icon: "fileText",
    text: "Forms the legal foundation for execution of the final Sale Deed.",
  },
] satisfies BenefitItem[];

/* ---------- PROCESS STEPS ---------- */

const processSteps = [
  "Upload your document after payment and select a convenient consultation time.",
  "Senior lawyers carefully read, interpret, and analyze the agreement.",
  "At the scheduled time, Lawizer connects you with the expert lawyer for review and clarification.",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "How the Agreement Review Works",
    icon: "clock",
    type: "list",
    data: processSteps,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is the purpose of reviewing the Agreement to Sale?",
    a: "Reviewing the agreement ensures that all terms and conditions are clear, legally valid, and protect the interests of both parties, preventing disputes later.",
  },
  {
    q: "What does Lawizer ensure during the review?",
    a: "Lawizer ensures the agreement is clear, legally enforceable, and compliant with Indian property laws.",
  },
  {
    q: "Who conducts the document review?",
    a: "Senior and experienced property lawyers conduct the review and explain the agreement in simple terms.",
  },
  {
    q: "How does the consultation work?",
    a: "You upload your document, choose a convenient time, and connect with the lawyer through an auto-generated consultation call.",
  },
  {
    q: "Does this service cover properties across India?",
    a: "Yes, Lawizer provides expert agreement review services for properties located anywhere in India.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function SaleAgreementReviewPage() {
  return (
    <ServicePageLayout
      title="Sale Agreement / Agreement to Sale Review"
      subtitle="Expert legal review to ensure your Agreement to Sale or Sale Agreement is legally sound, valid, and enforceable."
      badgeText="Lawizer ensures your agreement is clear, legally valid, and enforceable under Indian property laws."
      icon="fileText"

      serviceID="SALE_AGREEMENT_AGREEMENT_TO_SALE_REVIEW"
      contentTitle="Why Reviewing a Sale Agreement Is Important"
      contentDescription="A properly drafted and reviewed Sale Agreement or Agreement to Sale clearly defines the rights and obligations of the buyer and seller. Legal review helps prevent disputes, detect unfair clauses, and ensures the agreement forms a strong and enforceable foundation for the final property transfer."
      section1Title="Key Benefits of Sale Agreement Review"
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
      primaryBg="bg-gradient-to-r from-yellow-500 to-orange-500"
      primaryHoverBg="bg-gradient-to-r from-yellow-600 to-orange-600"
    />
  );
}
