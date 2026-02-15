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
    text: "Protects software intellectual property, revenue, and service obligations.",
  },
  {
    icon: "scale",
    text: "Prevents misuse of software and ensures regulatory compliance.",
  },
  {
    icon: "gavel",
    text: "Subscription-based SaaS agreement drafting.",
  },
  {
    icon: "fileText",
    text: "Clear guidance on IP ownership, SLA, and termination clauses.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Software provider and client details",
      "Subscription model and pricing structure",
      "IP ownership and licensing scope",
      "Support, SLA, and maintenance terms",
      "Termination, suspension, and liability clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Customized SaaS subscription agreement",
      "Clearly defined IP ownership and licensing rights",
      "Service Level Agreement (SLA) structuring",
      "Termination, suspension, and liability protection clauses",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a SaaS Agreement?",
    a: "A SaaS Agreement governs the subscription, licensing, support obligations, and intellectual property rights for cloud-based software services.",
  },
  {
    q: "Why is a dedicated SaaS Agreement necessary?",
    a: "SaaS businesses operate on subscription models with ongoing service delivery. A dedicated agreement protects IP, revenue streams, and clearly defines service obligations.",
  },
  {
    q: "What are the key clauses in a SaaS Agreement?",
    a: "It typically includes subscription terms, IP ownership, Service Level Agreements (SLA), data handling, termination conditions, and liability limitations.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function SaaSAgreementPage() {
  return (
    <ServicePageLayout
      title="Software as a Service (SaaS) Agreement"
      subtitle="Legally structured agreements for subscription-based software platforms."
      badgeText="Subscription • IP • SLA • Compliance"
      icon="fileText"

      serviceID="SOFTWARE_AS_A_SERVICE_AGREEMENT"
      contentTitle="Why a Customized SaaS Agreement Is Crucial"
      contentDescription="Standard contracts are insufficient for SaaS businesses. A customized SaaS Agreement clearly defines licensing boundaries, service levels, data responsibilities, and revenue protection for subscription-based software platforms."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-indigo-500/20",
        orb2: "bg-purple-500/20",
        iconBg: "from-indigo-500 to-purple-500",
        badgeText: "text-purple-300",
      }}
      primaryColor="text-indigo-600"
      primaryBg="bg-gradient-to-r from-indigo-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-indigo-700 to-purple-700"
    />
  );
}
