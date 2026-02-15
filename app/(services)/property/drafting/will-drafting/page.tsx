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
    text: "Ensures your property is inherited according to your wishes",
  },
  {
    icon: "users",
    text: "Prevents family disputes over asset distribution",
  },
  {
    icon: "gavel",
    text: "Legally enforceable when properly registered",
  },
  {
    icon: "shield",
    text: "Drafted to be clear, legally valid, and compliant under Indian law",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Details of assets & beneficiaries",
  "Personal details of the testator (name, age, address, ID)",
  "Witness details for signing",
];

const deliverables = [
  "Professionally drafted Will",
  "Clause-wise explanation",
  "Digital copy & registration guidance",
];

const sections = [
  {
    title: "Pre-Requisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You Receive",
    icon: "gavel",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is the purpose of a Will?",
    a: "A Will ensures your assets are distributed according to your wishes after your lifetime, providing legal clarity to your intentions.",
  },
  {
    q: "Is it mandatory to register a Will?",
    a: "Registration is not compulsory, but highly advisable as a registered Will is stronger legally and avoids future disputes.",
  },
  {
    q: "What kind of assets can be included in a Will?",
    a: "All movable and immovable assets, including property, bank accounts, shares, jewellery, and personal belongings.",
  },
  {
    q: "Who is the Testator?",
    a: "The Testator is the person who makes the Will, stating how their assets should be distributed.",
  },
  {
    q: "Does Lawizer assist beyond drafting?",
    a: "Yes, Lawizer helps with drafting and guides you through the registration process.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function WillDraftingPage() {
  return (
    <ServicePageLayout
      title="Will Drafting & Estate Planning"
      subtitle="Ensure your assets are distributed exactly as you wish, preventing disputes and maintaining family harmony."
      badgeText="Legally valid • Clear • Secure"
      icon="heart"

      serviceID="WILL_DRAFTING_&_ESTATE_PLANNING"
      contentTitle="Importance of Drafting a Will"
      contentDescription="A Will ensures your legacy is safely passed on according to your wishes, protecting your beneficiaries and preventing legal disputes."
      section1Title="Key Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-pink-500/20",
        orb2: "bg-red-500/20",
        iconBg: "from-pink-500 to-red-500",
        badgeText: "text-red-300",
      }}
      primaryColor="text-pink-600"
      primaryBg="bg-gradient-to-r from-pink-600 to-red-600"
      primaryHoverBg="bg-gradient-to-r from-pink-700 to-red-700"
    />
  );
}
