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
    text: "Ensures lawful and complete transfer of intellectual property rights.",
  },
  {
    icon: "scale",
    text: "Prevents future disputes related to IP ownership.",
  },
  {
    icon: "gavel",
    text: "Professionally drafted IP assignment agreements.",
  },
  {
    icon: "fileText",
    text: "Guidance on registration, where applicable.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of the intellectual property being assigned",
      "Assignor and assignee information",
      "Scope and nature of the IP transfer",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Drafting legally sound IP assignment agreements",
      "Clear definition of ownership transfer",
      "Protection against future ownership claims",
      "Registration guidance, if applicable",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is an Intellectual Property Assignment Agreement?",
    a: "It is a legal document that transfers ownership of intellectual property from one party (assignor) to another (assignee).",
  },
  {
    q: "Why is a formal IP assignment agreement necessary?",
    a: "Without a written agreement, IP ownership can remain unclear, leading to disputes. A formal assignment legally secures ownership.",
  },
  {
    q: "What types of intellectual property can be assigned?",
    a: "The agreement can cover copyrights, trademarks, patents, trade secrets, and other intellectual property rights.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function IPAssignmentAgreementPage() {
  return (
    <ServicePageLayout
      title="IP Assignment Agreement Drafting"
      subtitle="A legally enforceable document to formally transfer intellectual property ownership."
      badgeText="Clear ownership • Dispute prevention • Registration-ready"
      icon="shield"
      serviceID="IP_ASSIGNMENT_AGREEMENT_DRAFTING"
      contentTitle="Why an IP Assignment Agreement Is Essential"
      contentDescription="An IP Assignment Agreement ensures that ownership of intellectual property is legally transferred, eliminating ambiguity and protecting the assignee from future claims."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-purple-500/20",
        orb2: "bg-indigo-500/20",
        iconBg: "from-purple-500 to-indigo-500",
        badgeText: "text-indigo-300",
      }}
      primaryColor="text-purple-600"
      primaryBg="bg-gradient-to-r from-purple-600 to-indigo-600"
      primaryHoverBg="bg-gradient-to-r from-purple-700 to-indigo-700"
    />
  );
}
