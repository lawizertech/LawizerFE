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
    text: "Clearly defines rights and obligations of landlord and tenant for legal protection.",
  },
  {
    icon: "users",
    text: "Avoids disputes by covering rent, deposits, maintenance, renewal, and exit terms.",
  },
  {
    icon: "scale",
    text: "Ensures compliance with West Bengal tenancy and commercial property regulations.",
  },
  {
    icon: "gavel",
    text: "Acts as legal proof in case of conflicts before courts or tribunals.",
  },
  {
    icon: "fileText",
    text: "Allows customization of clauses for business needs such as signage, utilities, and renovations.",
  },
  {
    icon: "building",
    text: "Minimizes risks and protects long-term business investments.",
  },
] satisfies BenefitItem[];

/* ---------- PRE-REQUISITES ---------- */

const prerequisites = [
  "Landlord details including name, address, PAN (if applicable), and contact information",
  "Tenant details such as business registration, PAN, and contact details",
  "Commercial property details including address, type, and area in square feet",
  "Lease terms covering rent, security deposit, duration, maintenance charges, and notice period",
  "Optional special clauses for subleasing, signage rights, utilities, or renovation permissions",
];

/* ---------- DELIVERABLES ---------- */

const deliverables = [
  "Legally drafted Commercial Lease Agreement tailored to your transaction",
  "Clause-wise explanation of rights and obligations for both parties",
  "Digital and editable copy ready for printing, signing, or notarization",
  "Guidance on registration under West Bengal property laws (if applicable)",
  "Expert legal consultation for clarifications or revisions",
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
    icon: "building",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Commercial Lease Agreement?",
    a: "A Commercial Lease Agreement defines the legal relationship between a landlord and tenant for commercial properties such as offices, shops, warehouses, or retail spaces, covering rent, duration, deposits, and responsibilities.",
  },
  {
    q: "How is a commercial lease different from a residential rent agreement?",
    a: "Commercial leases are more complex, often longer in duration, and include business-specific clauses such as signage rights, renovations, subleasing, and zoning compliance.",
  },
  {
    q: "Why should I choose Lawizer for commercial lease drafting?",
    a: "Lawizer drafts agreements through lawyers specializing in West Bengal commercial property law and customizes clauses based on your business and property type.",
  },
  {
    q: "Does the agreement cover renewal and exit clauses?",
    a: "Yes. The agreement clearly covers rent, lease duration, renewal options, exit clauses, and maintenance responsibilities to protect both parties.",
  },
  {
    q: "Is registration of a Commercial Lease Agreement mandatory?",
    a: "Registration depends on the lease duration and local laws. Lawizer provides guidance to ensure compliance with West Bengal property registration requirements.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function CommercialLeaseAgreementPage() {
  return (
    <ServicePageLayout
      title="Commercial Lease Agreement Drafting"
      subtitle="Legally define the terms for your office, shop, or warehouse lease with a professionally drafted agreement that protects your business interests."
      badgeText="Lawizer ensures your commercial lease agreement is customized, compliant, and legally enforceable."
      icon="building"
      contentTitle="Why a Proper Commercial Lease Agreement Is Important"
      contentDescription="A well-drafted Commercial Lease Agreement is the backbone of any business property transaction. It establishes clear terms on rent, duration, maintenance, and responsibilities while minimizing legal risks and protecting long-term business investments."
      section1Title="Key Protections and Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-purple-500/20",
        orb2: "bg-indigo-500/20",
        iconBg: "from-purple-500 to-indigo-500",
        badgeText: "text-purple-300",
      }}
      primaryColor="text-purple-600"
      primaryBg="bg-gradient-to-r from-purple-600 to-indigo-600"
      primaryHoverBg="bg-gradient-to-r from-purple-700 to-indigo-700"
    />
  );
}
