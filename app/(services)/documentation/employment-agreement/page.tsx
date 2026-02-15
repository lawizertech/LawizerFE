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
    text: "Provides clarity on employee rights and employer obligations.",
  },
  {
    icon: "shield",
    text: "Prevents disputes over compensation, termination, or confidentiality.",
  },
  {
    icon: "scale",
    text: "Ensures compliance with labour and employment laws.",
  },
  {
    icon: "fileText",
    text: "Includes clause-wise explanation on non-compete, confidentiality, and termination.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Employee and employer details",
      "Compensation, role, responsibilities, and benefits",
      "Duration and termination clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Drafting legally compliant employment agreements",
      "Clause explanation including non-compete and confidentiality",
      "Clear termination and notice-period clauses",
      "Advice on dispute prevention and compliance",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is an Employment Agreement?",
    a: "It is a legal document outlining the terms of employment, including roles, salary, benefits, and termination policies.",
  },
  {
    q: "Why is an Employment Agreement important?",
    a: "It provides clarity on employee rights and employer obligations, ensures compliance with labour laws, and prevents disputes over compensation or termination.",
  },
  {
    q: "Does the agreement cover confidentiality and non-compete clauses?",
    a: "Yes. The agreement includes detailed clauses on confidentiality, non-compete, and termination with proper legal explanation.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function EmploymentAgreementPage() {
  return (
    <ServicePageLayout
      title="Employment Agreement Drafting"
      subtitle="A legally compliant contract defining roles, salary, benefits, and termination terms."
      badgeText="Labour-law compliant • Dispute prevention • Clear obligations"
      icon="users"

      serviceID="EMPLOYMENT_AGREEMENT_DRAFTING"
      contentTitle="Why a Compliant Employment Agreement Is Essential"
      contentDescription="A strong employment agreement creates a clear framework for the working relationship, reduces legal risk, and ensures compliance with labour and employment laws."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-green-500/20",
        orb2: "bg-teal-500/20",
        iconBg: "from-green-500 to-teal-500",
        badgeText: "text-teal-300",
      }}
      primaryColor="text-green-600"
      primaryBg="bg-gradient-to-r from-green-600 to-teal-600"
      primaryHoverBg="bg-gradient-to-r from-green-700 to-teal-700"
    />
  );
}
