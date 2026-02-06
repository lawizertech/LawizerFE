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
    text: "Protection against Copycats: Even after selling, protection continues for the new owner",
  },
  {
    icon: "badgeIndianRupee",
    text: "Registered brand is a valuable asset that can be legally monetized",
  },
  {
    icon: "trendingUp",
    text: "Facilitates business expansion and growth for assignor or assignee",
  },
  {
    icon: "checkCircle",
    text: "Improves brand credibility through legally recorded ownership transfer",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Trademark Application / Registration Number",
  "Name of the transferor (current owner)",
  "Name of the transferee (new owner)",
  "Board Resolution (if either party is a company)",
  "Trademark Assignment Deed",
];

const deliverables = [
  "Documentation support and facilitation",
  "Trademark Registry filing receipt",
  "Screenshot of Assignment filing",
];

const sections = [
  {
    title: "Pre-Requisites for Trademark Assignment",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "calendar",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is Trademark Assignment?",
    a: "Trademark Assignment is the permanent transfer of ownership of a trademark from one person or company (Assignor) to another (Assignee). Like any other asset, a trademark can be sold for consideration.",
  },
  {
    q: "How do you sell a trademark?",
    a: "Selling a trademark does not mean selling the entire business. Ownership of a specific brand or logo is transferred by executing a Trademark Assignment Deed between the parties.",
  },
  {
    q: "What is a Trademark Assignment Deed?",
    a: "It is a legal agreement defining the terms of trademark transfer, including consideration amount, territory, and whether the transfer is with or without goodwill.",
  },
  {
    q: "What are the key clauses in an Assignment Deed?",
    a: "Key clauses include sale consideration, geographical usage rights, and whether goodwill is included. These directly affect stamp duty and enforceability.",
  },
  {
    q: "What is the difference between Trademark Licensing and Assignment?",
    a: "Licensing allows temporary usage rights while ownership remains unchanged. Assignment permanently transfers ownership to the new holder.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function SellYourTrademarkPage() {
  return (
    <ServicePageLayout
      title="Sell Your Trademark"
      subtitle="Legally transfer your trademark ownership and monetize your brand with a secure assignment process."
      badgeText="Trademark Assignment • Ownership Transfer"
      icon="badgeIndianRupee"
      contentTitle="Why Trademark Assignment Matters"
      contentDescription="A trademark is a valuable intellectual property asset. Through a legally valid assignment process, you can permanently transfer ownership, unlock financial value, and ensure the new owner receives full statutory protection."
      section1Title="Key Benefits of Selling a Trademark"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-orange-400/20",
        orb2: "bg-red-500/20",
        iconBg: "from-red-500 to-orange-400",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-500 to-orange-400"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-500"
    />
  );
}
