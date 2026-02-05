"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "gavel",
    text: "Legally transfers ownership rights of a co-owner’s share to another party.",
  },
  {
    icon: "users",
    text: "Prevents future disputes by clearly recording the intention to relinquish ownership.",
  },
  {
    icon: "fileText",
    text: "Essential for registration to update land and property records with local authorities.",
  },
  {
    icon: "shield",
    text: "Supports inheritance and partition cases in family property settlements.",
  },
  {
    icon: "checkCircle",
    text: "Protects interests of all parties by ensuring clarity, consent, and legal compliance.",
  },
] satisfies BenefitItem[];

/* ---------- PRE-REQUISITES ---------- */

const prerequisites = [
  "Details of the relinquishing party including name, address, PAN/Aadhaar, and relationship with other owners",
  "Details of the beneficiary including name, address, PAN/Aadhaar, and relationship",
  "Property details such as address, type (flat, house, or plot), area, and ownership shares",
  "Supporting documents including original title deed, property tax receipts, and ID proofs of all parties",
  "Mutual consent of all co-owners with signatures on the deed",
];

/* ---------- DELIVERABLES ---------- */

const deliverables = [
  "Legally drafted Relinquishment Deed compliant with local property laws",
  "Clause-wise explanation to ensure all parties understand the ownership transfer",
  "Digital and editable copy ready for printing, signing, and registration",
  "Step-by-step guidance for registration at the Sub-Registrar’s office",
  "Expert legal support to clarify doubts and ensure smooth execution",
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
    q: "What is a Relinquishment Deed?",
    a: "A Relinquishment Deed is a legal document used when a co-owner of a property voluntarily gives up their share in favor of another co-owner or family member.",
  },
  {
    q: "Is a Relinquishment Deed mandatory for family property transfers?",
    a: "Yes. It is required to legally transfer a co-owner’s share and update property ownership records.",
  },
  {
    q: "Can a co-owner relinquish their share in favor of a non-family member?",
    a: "Yes. However, such transfers may be treated as a sale or gift depending on the circumstances, which can affect stamp duty.",
  },
  {
    q: "Does Lawizer assist with registration of the deed?",
    a: "Yes. Lawizer provides complete guidance for the registration process at the Sub-Registrar’s office.",
  },
  {
    q: "What documents are required to draft a Relinquishment Deed?",
    a: "Details of all parties, ownership information, original title documents, and relevant property papers are required.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function RelinquishmentDeedPage() {
  return (
    <ServicePageLayout
      title="Relinquishment Deed Drafting"
      subtitle="Legally transfer a co-owner’s share in a property voluntarily to another co-owner or family member with complete legal clarity."
      badgeText="Professionally drafted, legally compliant, and hassle-free property ownership transfer."
      icon="users"
      contentTitle="Why a Relinquishment Deed Is Important"
      contentDescription="A Relinquishment Deed is commonly used in inheritance or partition cases to formally record the transfer of ownership shares. It removes ambiguity, updates property records, and prevents future disputes by clearly documenting the consent and intention of all co-owners."
      section1Title="Key Benefits of a Relinquishment Deed"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-indigo-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-indigo-500 to-blue-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-indigo-600"
      primaryBg="bg-gradient-to-r from-indigo-600 to-blue-600"
      primaryHoverBg="bg-gradient-to-r from-indigo-700 to-blue-700"
    />
  );
}
