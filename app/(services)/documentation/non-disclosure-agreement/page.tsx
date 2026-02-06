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
    text: "Protects sensitive business information and trade secrets.",
  },
  {
    icon: "scale",
    text: "Legally enforceable protection in case of unauthorized disclosure.",
  },
  {
    icon: "users",
    text: "Enables safe collaboration, partnerships, and funding discussions.",
  },
  {
    icon: "fileText",
    text: "Customized NDA drafting based on your business or project needs.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of all parties involved",
      "Nature and scope of confidential information",
      "Duration of confidentiality obligations",
      "Exclusions and permitted disclosures",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Tailor-made Non-Disclosure Agreement drafting",
      "Clear definition of confidential information",
      "Balanced obligations for both parties",
      "Legally enforceable NDA aligned with business goals",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Non-Disclosure Agreement (NDA)?",
    a: "A Non-Disclosure Agreement is a legal contract that obligates parties to keep shared confidential information private and protected from unauthorized disclosure.",
  },
  {
    q: "Why is an NDA important for startups and businesses?",
    a: "An NDA protects sensitive business information and trade secrets, allowing startups and businesses to discuss ideas, partnerships, or funding safely.",
  },
  {
    q: "What should an NDA clearly define?",
    a: "An NDA must define what constitutes confidential information, the duration of confidentiality, permitted disclosures, and consequences of breach.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function NDAAgreementPage() {
  return (
    <ServicePageLayout
      title="Non-Disclosure Agreement (NDA) Drafting"
      subtitle="A legally enforceable agreement to protect confidential information and trade secrets."
      badgeText="Confidentiality • Trade secrets • Legal protection"
      icon="shield"
      contentTitle="Why an NDA Is Essential for Business"
      contentDescription="An NDA safeguards proprietary information while allowing businesses to collaborate, negotiate, and explore opportunities without risking misuse or disclosure of sensitive data."
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
