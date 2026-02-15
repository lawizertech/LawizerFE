"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "badgeIndianRupee",
    text: "Ideal for taxpayers with capital gains, foreign assets, or high income",
  },
  {
    icon: "fileText",
    text: "Handles income from multiple house properties and investments",
  },
  {
    icon: "scale",
    text: "Ensures full compliance with Income Tax Department rules",
  },
  {
    icon: "shield",
    text: "Avoids notices by accurate disclosure of foreign assets & gains",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Who Should File ITR-2",
    icon: "checkCircle",
    type: "list",
    data: [
      "Individuals or HUFs not eligible for ITR-1",
      "No income from business or profession",
      "Total income exceeding ₹50 lakh",
      "Income from more than one house property",
      "Capital gains from shares, mutual funds, or property",
      "Foreign assets or foreign income",
      "Director in a company or holder of unlisted equity shares",
    ],
  },
  {
    title: "Key Documents Required",
    icon: "fileText",
    type: "list",
    data: [
      "All documents required for ITR-1",
      "Capital gains statements",
      "Foreign asset and income details (if applicable)",
      "Rental income & property tax receipts",
    ],
  },
  {
    title: "Important Exclusion",
    icon: "scale",
    type: "grid",
    data: [
      "ITR-2 cannot be filed if you have business income",
      "Business or professional income requires ITR-3",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "Who should file ITR-2?",
    a: "ITR-2 is for individuals or HUFs who do not have business income but earn through salary, capital gains, multiple properties, or foreign assets.",
  },
  {
    q: "If I sell shares or mutual funds, which ITR should I file?",
    a: "Capital gains from shares or mutual funds require filing ITR-2. ITR-1 is not applicable for capital gains income.",
  },
  {
    q: "Can a company director file ITR-2?",
    a: "Yes. Directors in companies or holders of unlisted equity shares must file ITR-2 if they have no business income.",
  },
  {
    q: "What extra documents are needed compared to ITR-1?",
    a: "Capital gains reports, foreign asset disclosures, and multiple property income details are required in addition to ITR-1 documents.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ITR2Page() {
  return (
    <ServicePageLayout
      title="ITR-2 Filing"
      subtitle="For individuals and HUFs with capital gains, foreign assets, or multiple properties — excluding business income."
      badgeText="Capital gains • Foreign assets • High-income taxpayers"
      icon="badgeIndianRupee"

      serviceID="ITR-2_FILING"
      contentTitle="When Is ITR-2 Applicable?"
      contentDescription="ITR-2 is designed for individuals and HUFs with complex income structures such as capital gains, foreign income, or multiple house properties. Accurate filing is crucial to avoid scrutiny and penalties."
      section1Title="Why Choose Professional ITR-2 Filing"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-indigo-500/20",
        orb2: "bg-purple-500/20",
        iconBg: "from-indigo-500 to-purple-500",
        badgeText: "text-purple-300",
      }}
      primaryColor="text-indigo-600"
      primaryBg="bg-gradient-to-r from-indigo-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-indigo-700 to-purple-700"
    />
  );
}
