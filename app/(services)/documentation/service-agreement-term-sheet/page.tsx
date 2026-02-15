"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "checkCircle",
    text: "Clearly defines scope, fees, deliverables, and timelines for services.",
  },
  {
    icon: "shield",
    text: "Prevents disputes related to services, payments, or expectations.",
  },
  {
    icon: "scale",
    text: "Ensures legal enforceability of service commitments.",
  },
  {
    icon: "clock",
    text: "Provides clarity on obligations, milestones, and timelines.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "fileText",
    type: "list",
    data: [
      "Details of the service provider and client",
      "Scope of services and deliverables",
      "Fees, payment terms, and deadlines",
      "Service timelines and milestones",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "clock",
    type: "grid",
    data: [
      "Drafting of Service Agreements or Term Sheets",
      "Clear definition of scope, fees, and deliverables",
      "Timeline and milestone structuring",
      "Guidance on obligations and legal clauses",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Service Agreement?",
    a: "A Service Agreement is a legally binding document that defines the scope of services, fees, deliverables, and timelines between parties.",
  },
  {
    q: "What is a Term Sheet in service arrangements?",
    a: "A Term Sheet is a preliminary, usually non-binding document that outlines key commercial terms before a detailed Service Agreement is executed.",
  },
  {
    q: "Why is defining scope and timelines important?",
    a: "Clear scope, fees, and timelines prevent misunderstandings, reduce disputes, and ensure enforceability of service obligations.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ServiceAgreementTermSheetPage() {
  return (
    <ServicePageLayout
      title="Service Agreement & Term Sheet Drafting"
      subtitle="Clear, enforceable contracts defining scope, fees, deliverables, and timelines."
      badgeText="Scope • Fees • Timelines • Enforceable"
      icon="fileText"

      serviceID="SERVICE_AGREEMENT_&_TERM_SHEET_DRAFTING"
      contentTitle="Why a Service Agreement Is Critical"
      contentDescription="A properly drafted Service Agreement or Term Sheet ensures clarity on service expectations, payments, and timelines. It legally binds both parties and prevents disputes arising from unclear obligations or deliverables."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-teal-500/20",
        orb2: "bg-green-500/20",
        iconBg: "from-teal-500 to-green-500",
        badgeText: "text-green-300",
      }}
      primaryColor="text-teal-600"
      primaryBg="bg-gradient-to-r from-teal-600 to-green-600"
      primaryHoverBg="bg-gradient-to-r from-teal-700 to-green-700"
    />
  );
}
