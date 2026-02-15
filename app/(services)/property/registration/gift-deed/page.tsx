"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS (UNCHANGED DATA) ---------- */

const benefits = [
  {
    icon: "scale",
    text: "Legal ownership transfer without monetary exchange",
  },
  {
    icon: "shield",
    text: "Protects donor and donee rights",
  },
  {
    icon: "fileText",
    text: "Essential for property registration and mutation",
  },
  {
    icon: "users",
    text: "Formalizes voluntary transfer of assets",
  },
  {
    icon: "home",
    text: "Secures the transaction for family members (e.g., gifting a flat)",
  },
  {
    icon: "checkCircle",
    text: "Ensures the deed is legally valid and registered",
  },
] satisfies BenefitItem[];

/* ---------- PRE-REQUISITES (UNCHANGED DATA) ---------- */

const prerequisites = [
  "Donor and donee details (name, address, ID)",
  "Property/asset details (address, type, area)",
  "Consent and signature of donor",
  "Supporting Documents (Original title deed, tax receipts, and ID proofs)",
];

/* ---------- DELIVERABLES (UNCHANGED DATA) ---------- */

const deliverables = [
  "Drafted and registered Gift Deed",
  "Clause-wise explanation",
  "Digital copy",
  "Step-by-step guidance for registration",
  "Legally valid deed that protects both donor and donee rights",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Gift Deed Drafting",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "home",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs (UNCHANGED DATA) ---------- */

const faqs = [
  {
    q: "What is a Gift Deed?",
    a: "A Gift Deed transfers ownership of property or assets voluntarily from the donor (giver) to the donee (receiver) without any monetary consideration (money changing hands).",
  },
  {
    q: "Is registration of a Gift Deed mandatory?",
    a: "Yes, for immovable property (like a house or land), the Gift Deed must be registered with the Sub-Registrar's office to be legally valid and effective. Registration is also essential for property mutation.",
  },
  {
    q: "What is the stamp duty on a Gift Deed?",
    a: "Stamp duty for a Gift Deed varies significantly from state to state and depends on the relationship between the donor and donee. Many states offer rebates or lower duties if the property is gifted to close family members.",
  },
  {
    q: "Can a Gift Deed be revoked?",
    a: "Generally, a Gift Deed, once validly executed and registered, cannot be revoked unless there is a specific clause in the deed allowing for revocation under certain conditions, or if the gift was made under fraud, undue influence, or coercion.",
  },
  {
    q: "Why use Lawizer for Gift Deed drafting?",
    a: "Lawizer ensures the deed is legally valid, properly registered, and protects both donor and donee rights, handling all legal nuances (e.g., for gifting a flat in Rajarhat, Kolkata).",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function GiftDeedDraftingPage() {
  return (
    <ServicePageLayout
      title="Gift Deed Drafting & Registration"
      subtitle="Legally transfer ownership of your property or assets voluntarily and without monetary exchange, ensuring the transfer is valid and secure."
      badgeText="Lawizer ensures your Gift Deed is legally compliant and registered to secure the ownership transfer."
      icon="heart"

      serviceID="GIFT_DEED_DRAFTING_&_REGISTRATION"
      contentTitle="Why a Registered Gift Deed is Important"
      contentDescription="A registered Gift Deed is the legally recognized instrument for transferring ownership of property or assets without consideration. Proper registration ensures enforceability, updates government records, and prevents future disputes among family members or heirs."
      section1Title="Key Benefits of Gift Deed Registration"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-pink-500/20",
        iconBg: "from-red-500 to-pink-500",
        badgeText: "text-pink-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-500 to-pink-500"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-pink-600"
    />
  );
}
