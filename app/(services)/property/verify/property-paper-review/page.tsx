"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS (UNCHANGED MEANING) ---------- */

const benefits = [
  {
    icon: "shield",
    text: "Detects legal risks early by identifying disputes, encumbrances, or ownership issues before buying.",
  },
  {
    icon: "checkCircle",
    text: "Verifies authenticity by confirming that all property documents are genuine and properly executed.",
  },
  {
    icon: "clock",
    text: "Saves time and money by avoiding costly legal troubles or fraudulent deals later.",
  },
  {
    icon: "scale",
    text: "Ensures compliance with all applicable state and municipal property regulations.",
  },
  {
    icon: "users",
    text: "Provides legal clarity to help you make confident property decisions.",
  },
] satisfies BenefitItem[];

/* ---------- TARGET AUDIENCE ---------- */

const targetAudience = [
  "Homebuyers wanting to validate documents before purchase",
  "Real estate investors evaluating new properties",
  "Heirs or inheritors unsure of legal ownership",
  "Sellers wanting to ensure paperwork is in order",
  "Anyone seeking legal clarity before a property transaction",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Who Is This Service For?",
    icon: "users",
    type: "list",
    data: targetAudience,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What does the Property Paper Review involve?",
    a: "Lawizer connects you directly with expert real estate lawyers who carefully examine documents such as title deeds, sale agreements, mutation papers, and tax receipts, and provide a clear oral consultation on the property's legal status.",
  },
  {
    q: "Why is an early review important?",
    a: "An early review helps detect legal risks such as disputes or encumbrances before buying, saving time and preventing costly legal or fraudulent issues later.",
  },
  {
    q: "What kind of documents are checked?",
    a: "Documents like title deeds, sale agreements, mutation papers, and tax receipts are examined during the review.",
  },
  {
    q: "Do I get a written report?",
    a: "The service provides a clear oral consultation explaining the legal position of the property.",
  },
  {
    q: "Is this service suitable for inherited property?",
    a: "Yes, it is especially helpful for heirs or inheritors who want clarity on legal ownership and documentation.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function PropertyPaperReviewPage() {
  return (
    <ServicePageLayout
      title="Property Paper Review & Legal Consultation"
      subtitle="Get expert legal review of your property documents and a clear oral consultation on ownership, risks, and compliance."
      badgeText="Lawizer ensures your property papers are genuine, updated, and dispute-free before any transaction."
      icon="fileText"

      serviceID="PROPERTY_PAPER_REVIEW_&_LEGAL_CONSULTATION"
      contentTitle="Why Property Paper Review Is Important"
      contentDescription="Before buying, selling, or inheriting a property, it is essential to verify that all documents are legally sound. A professional property paper review helps identify ownership issues, encumbrances, regulatory non-compliance, and potential disputes—protecting you from financial and legal risks."
      section1Title="Key Benefits of Property Paper Review"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-teal-500/20",
        orb2: "bg-cyan-500/20",
        iconBg: "from-teal-500 to-cyan-500",
        badgeText: "text-cyan-300",
      }}
      primaryColor="text-teal-600"
      primaryBg="bg-gradient-to-r from-teal-500 to-cyan-500"
      primaryHoverBg="bg-gradient-to-r from-teal-600 to-cyan-600"
    />
  );
}
