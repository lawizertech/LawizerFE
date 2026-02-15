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
    text: "Acts as the ultimate legal proof of property ownership.",
  },
  {
    icon: "users",
    text: "Protects both buyer and seller by clearly defining rights and obligations.",
  },
  {
    icon: "checkCircle",
    text: "Complies fully with the Indian Registration Act and Transfer of Property Act.",
  },
  {
    icon: "shield",
    text: "Prevents fraud, misrepresentation, and hidden liabilities.",
  },
  {
    icon: "fileText",
    text: "Mandatory document for smooth property registration.",
  },
] satisfies BenefitItem[];

/* ---------- DRAFTING PROCESS ---------- */

const draftingProcess = [
  "Lawyer discusses property details and transaction requirements with you.",
  "Professional drafting of the Sale Deed based on legal and factual checks.",
  "Printing of the Sale Deed on state-prescribed non-judicial stamp paper.",
];

/* ---------- WHY LAWIZER ---------- */

const whyChooseLawizer = [
  "Drafted by expert property lawyers experienced in Indian real estate law.",
  "Customized specifically for your property and transaction.",
  "Clause-wise explanation so you understand exactly what you are signing.",
  "End-to-end support from drafting to registration guidance.",
  "Fast, hassle-free online process with transparent pricing.",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "The Sale Deed Drafting Process",
    icon: "gavel",
    type: "list",
    data: draftingProcess,
  },
  {
    title: "Why Choose Lawizer",
    icon: "home",
    type: "grid",
    data: whyChooseLawizer,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Sale Deed?",
    a: "A Sale Deed is the final legal document that officially transfers ownership of a property from the seller to the buyer. It is the most important step in a property transaction.",
  },
  {
    q: "How is a Sale Deed different from an Agreement to Sale?",
    a: "An Agreement to Sale sets the terms for a future transfer, while the Sale Deed completes the actual transfer of ownership and must be registered.",
  },
  {
    q: "Is stamp paper mandatory for a Sale Deed?",
    a: "Yes. A Sale Deed must be printed on non-judicial stamp paper of value prescribed by the state government to be legally valid.",
  },
  {
    q: "Why is legal compliance critical for a Sale Deed?",
    a: "Compliance with property and registration laws ensures the deed is legally enforceable and protects the buyer from future claims or disputes.",
  },
  {
    q: "Can Lawizer help with property transactions across different cities?",
    a: "Yes. Lawizer drafts legally compliant Sale Deeds for properties across India, irrespective of the city or state.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function SaleDeedDraftingPage() {
  return (
    <ServicePageLayout
      title="Sale Deed Drafting"
      subtitle="The final and most critical legal document that officially transfers property ownership and secures your investment."
      badgeText="Legally compliant • Secure • Registration-ready"
      icon="fileText"

      serviceID="SALE_DEED_DRAFTING"
      contentTitle="Why a Properly Drafted Sale Deed Is Essential"
      contentDescription="A Sale Deed is the ultimate proof of ownership. Any error or ambiguity can lead to serious legal disputes. A professionally drafted Sale Deed ensures legal compliance, smooth registration, and long-term protection of your property rights."
      section1Title="Key Benefits of a Professionally Drafted Sale Deed"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-purple-500/20",
        orb2: "bg-violet-500/20",
        iconBg: "from-purple-500 to-violet-500",
        badgeText: "text-violet-300",
      }}
      primaryColor="text-purple-600"
      primaryBg="bg-gradient-to-r from-purple-600 to-violet-600"
      primaryHoverBg="bg-gradient-to-r from-purple-700 to-violet-700"
    />
  );
}
