"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ================================
   BENEFITS
================================ */

const benefits = [
  {
    icon: "building",
    text: "Mandatory return for all companies registered under Companies Act",
  },
  {
    icon: "fileText",
    text: "Accurate filing with audited financial statements",
  },
  {
    icon: "scale",
    text: "Correct computation of corporate tax & MAT (if applicable)",
  },
  {
    icon: "shield",
    text: "Ensures statutory compliance & avoids penalties",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const applicableTo = [
  "Private Limited Companies",
  "Public Limited Companies",
  "One Person Companies (OPC)",
  "Any company registered under Companies Act, 2013 or 1956",
];

const documentsNeeded = [
  "PAN Card of the Company",
  "Audited Balance Sheet & Profit and Loss Account",
  "Audit Report (mandatory)",
  "Details for Minimum Alternate Tax (MAT), if applicable",
  "Digital Signature Certificate (DSC) for filing",
];

const exclusions = [
  "Companies claiming exemption under Section 11",
  "Charitable or religious companies (they must file ITR-7 instead)",
];

const sections = [
  {
    title: "Who Should File ITR-6",
    icon: "checkCircle",
    type: "list",
    data: applicableTo,
  },
  {
    title: "Mandatory Documents",
    icon: "fileText",
    type: "list",
    data: documentsNeeded,
  },
  {
    title: "Important Exclusions",
    icon: "gavel",
    type: "alert",
    data: exclusions,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "Who is required to file ITR-6?",
    a: "ITR-6 is mandatory for all companies registered under the Companies Act, including Private Limited, Public Limited, and OPCs.",
  },
  {
    q: "Can any company avoid filing ITR-6?",
    a: "Only companies claiming exemption under Section 11 (charitable or religious purposes) are excluded and must file ITR-7 instead.",
  },
  {
    q: "Are audited financial statements mandatory?",
    a: "Yes. Companies must submit audited Balance Sheet, Profit & Loss Account, and Audit Report while filing ITR-6.",
  },
  {
    q: "Is Digital Signature mandatory for ITR-6?",
    a: "Yes. ITR-6 must be filed using a valid Digital Signature Certificate (DSC) of the company.",
  },
  {
    q: "What is MAT in ITR-6?",
    a: "Minimum Alternate Tax (MAT) applies to companies paying low or no tax. MAT computation details must be included in ITR-6 if applicable.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function ITR6Page() {
  return (
    <ServicePageLayout
      title="ITR-6 Filing"
      subtitle="For all Companies registered under the Companies Act."
      badgeText="Private Ltd • Public Ltd • OPC"
      icon="building"

      serviceID="ITR-6_FILING"
      contentTitle="Overview"
      contentDescription="ITR-6 is the prescribed Income Tax Return for companies registered under the Companies Act. It requires filing with audited financial statements, mandatory digital signature, and detailed corporate tax or MAT computation where applicable."
      section1Title="Key Highlights of ITR-6"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-purple-500/20",
        orb2: "bg-violet-500/20",
        iconBg: "from-purple-500 to-violet-500",
        badgeText: "text-purple-300",
      }}
      primaryColor="text-purple-600"
      primaryBg="bg-gradient-to-r from-purple-600 to-violet-600"
      primaryHoverBg="bg-gradient-to-r from-purple-700 to-violet-700"
    />
  );
}
