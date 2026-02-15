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
    text: "Ensures your property and assets are inherited exactly according to your wishes.",
  },
  {
    icon: "users",
    text: "Prevents family disputes and confusion over asset distribution.",
  },
  {
    icon: "gavel",
    text: "Legally enforceable when properly drafted and registered.",
  },
  {
    icon: "shield",
    text: "Drafted to be clear, legally valid, and fully compliant under Indian law.",
  },
] satisfies BenefitItem[];

/* ---------- PRE-REQUISITES ---------- */

const prerequisites = [
  "Complete details of assets and beneficiaries",
  "Personal details of the testator including name, age, address, and ID proof",
  "Details of witnesses required for execution of the Will",
];

/* ---------- DELIVERABLES ---------- */

const deliverables = [
  "Professionally drafted Will tailored to your assets and wishes",
  "Clause-wise explanation to ensure complete clarity",
  "Digital copy of the Will with guidance for registration",
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
    icon: "gavel",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is the purpose of a Will?",
    a: "A Will ensures that your assets are distributed according to your wishes after your lifetime, providing legal clarity and peace of mind.",
  },
  {
    q: "Is it mandatory to register a Will in India?",
    a: "Registration of a Will is not compulsory under Indian law, but it is highly recommended as it strengthens legal validity and helps prevent disputes.",
  },
  {
    q: "What types of assets can be included in a Will?",
    a: "A Will can include immovable property, bank accounts, investments, securities, and personal belongings.",
  },
  {
    q: "Who is the Testator?",
    a: "The Testator is the person who creates and executes the Will, specifying how their assets should be distributed.",
  },
  {
    q: "Does Lawizer help beyond drafting the Will?",
    a: "Yes. Lawizer drafts your Will and also guides you through registration and legal formalities under Indian law.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function WillDraftingPage() {
  return (
    <ServicePageLayout
      title="Will Drafting & Estate Planning"
      subtitle="Ensure your assets are distributed exactly according to your wishes after your lifetime, with complete legal clarity."
      badgeText="Secure your legacy. Prevent disputes. Ensure peace of mind for your loved ones."
      icon="heart"

      serviceID="WILL_DRAFTING_&_ESTATE_PLANNING"
      contentTitle="Importance of Drafting a Will"
      contentDescription="Drafting a Will is an act of responsibility that protects your loved ones and secures your legacy. A properly drafted Will ensures smooth transfer of assets, avoids disputes under succession laws, and provides legal certainty to your intentions."
      section1Title="Key Benefits of a Legally Drafted Will"
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
