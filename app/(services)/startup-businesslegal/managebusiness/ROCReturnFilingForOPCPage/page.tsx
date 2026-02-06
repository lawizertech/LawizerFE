"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "calendar",
    text: "Helps in maintaining 'Active' status on the MCA Portal",
  },
  {
    icon: "shield",
    text: "Protection from steep penalties and legal actions",
  },
  {
    icon: "scale",
    text: "Boosts confidence and trust among stakeholders",
  },
  {
    icon: "clock",
    text: "Avoids mandatory strike-off due to non-filing",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
  "Signature of the Director on financials and forms",
  "DIN of Director and Nominee should be in APPROVED status",
  "One valid Digital Signature (DSC) of the Director",
  "Appointment of Statutory Auditor via Form ADT-1 (mandatory)",
];

const deliverables = [
  "Filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
  "MCA payment challan for filing fees",
  "Auditor’s Report and Financial Statements",
  "Certificate of filing compliance",
];

const sections = [
  {
    title: "Pre-Requisites for OPC ROC Filing",
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
    q: "Is ROC filing mandatory even if OPC has not done any business?",
    a: "Yes. ROC return filing is mandatory even if the OPC has not carried out any business activity. Nil returns must also be filed every year.",
  },
  {
    q: "Which forms are required for OPC ROC Annual Filing?",
    a: "The mandatory forms are AOC-4 (Financial Statements), MGT-7 (Annual Return), and ADT-1 (Appointment of Auditor).",
  },
  {
    q: "What is the due date for OPC annual filing?",
    a: "The first annual filing is due on 30th December of the year following incorporation. Subsequent filings are due on 30th September every year.",
  },
  {
    q: "Who is responsible for filing ROC returns for OPC?",
    a: "The sole Director of the OPC is responsible for ROC compliance and filing of annual returns.",
  },
  {
    q: "What is the penalty for late filing of OPC ROC returns?",
    a: "A late fee of ₹100 per day applies on both AOC-4 and MGT-7 without any maximum cap. ADT-1 also attracts penalties depending on delay.",
  },
  {
    q: "Is AGM required for OPC?",
    a: "No. OPCs are exempt from holding an Annual General Meeting (AGM). Resolutions are signed and recorded by the sole member/director.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ROCReturnFilingForOPCPage() {
  return (
    <ServicePageLayout
      title="ROC Annual Return Filing for OPC"
      subtitle="Mandatory annual compliance for One Person Companies to avoid penalties, DIN disqualification, and strike-off."
      badgeText="AOC-4 • MGT-7 • ADT-1 • Companies Act, 2013"
      icon="user"
      contentTitle="Why Timely ROC Filing for OPC Is Critical"
      contentDescription="ROC annual filing is mandatory for OPCs even if no business activity has occurred. Failure to file AOC-4 and MGT-7 results in uncapped penalties of ₹100 per day per form and risks DIN disqualification. Timely compliance ensures the company remains active and legally protected."
      section1Title="Key Benefits of OPC ROC Compliance"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-500/20",
        orb2: "bg-purple-500/20",
        iconBg: "from-blue-500 to-purple-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-blue-500"
      primaryBg="bg-gradient-to-r from-blue-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700"
    />
  );
}
