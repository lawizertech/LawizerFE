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
    icon: "calendar",
    text: "Helps in maintaining 'Active' status in the MCA Portal",
  },
  {
    icon: "shield",
    text: "Protection from steep penalty and legal actions",
  },
  {
    icon: "scale",
    text: "Boosts Confidence and Trust among stakeholders",
  },
  {
    icon: "clock",
    text: "Avoiding mandatory 'Strike Off' of the Company for non-filing",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
  "Attendance of a minimum of 1 director for the AGM (or signing of minutes)",
  "Signature of a minimum of 1 director on the financials (Director's Report/Board Report)",
  "DIN of all Directors should be in APPROVED Status",
  "One valid Digital Signature (DSC) of a Director (for e-filing)",
];

const deliverables = [
  "All filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
  "MCA payment challan for filing fees",
  "Auditor's Report and Audited Financial Statements",
  "Certificate of filing compliance",
];

const sections = [
  {
    title: "Pre-Requisites for Filing (AOC-4 & MGT-7)",
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

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "Since Incorporation, the Company has not done any business, do we need to file an ROC Return?",
    a: "Yes. ROC return gives details of changes that have taken place in the company during the year and must be filed **even if the company has not done any business** during the year. Nil returns are mandatory.",
  },
  {
    q: "What Forms are to be filed for ROC Return?",
    a: "The mandatory annual forms are: **MGT-7** (Annual Return/Compliance), **AOC-4** (Financial Statements/Balance Sheet), and **ADT-1** (For Appointment/Reappointment of Auditors).",
  },
  {
    q: "What is the Annual Filing due date?",
    a: "A) The first annual filing is due on the **30th of December** of the next year from incorporation. B) Subsequent filings are due on the **30th of September** every year (based on the AGM date of September 30th).",
  },
  {
    q: "What is the Penalty for late filing of a Company ROC return?",
    a: "Late fees of **₹100 per day** apply on Form MGT-7 and AOC-4 until rectified. For Form ADT-1, penalties are steep, increasing from 2x up to **12x** the normal fee depending on the delay duration.",
  },
  {
    q: "Who is responsible for filing the Company ROC Return?",
    a: "It is the duty of the Company and its Directors to file the ROC Return, as both the Company and the Directors are liable for non-filing and associated penalties.",
  },
  {
    q: "What are the ROC Return Filing fees and charges?",
    a: "A company having an Authorized Capital up to ₹1 lakh is charged **₹300** for each Form AOC-4 and MGT-7. For companies with ₹5 lakh or more Authorized Capital, the charge is **₹400** per form.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function RocReturnFilingPvtLtdPage() {
  return (
    <ServicePageLayout
      title="ROC Annual Return Filing for Pvt Ltd"
      subtitle="Mandatory annual compliance for Private Limited Companies, involving timely filing of AOC-4 (Financials) and MGT-7 (Annual Return) to avoid heavy penalties."
      badgeText="Companies Act, 2013 • AOC-4 • MGT-7"
      icon="users"
      contentTitle="The Importance of Timely Annual Filing"
      contentDescription="ROC Annual Filing is non-negotiable. Failure to file Form AOC-4 (Financials) and Form MGT-7 (Annual Return) by the deadline (September 30th) results in an uncapped, cumulative late fee of ₹100 per day per form. This compliance step is crucial for maintaining 'Active' status and protecting Directors' DINs from disqualification."
      section1Title="Key Benefits of Compliant Pvt Ltd Filing"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-600/20",
        orb2: "bg-purple-600/20",
        iconBg: "from-blue-500 to-purple-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-blue-500"
      primaryBg="bg-gradient-to-r from-blue-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700"
    />
  );
}
