"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "trendingUp",
    text: "Enables scaling, business expansion, and new ventures",
  },
  {
    icon: "banknote",
    text: "Creates opportunities for raising funds from new investors",
  },
  {
    icon: "users",
    text: "Boosts transparency and trust among stakeholders",
  },
  {
    icon: "scale",
    text: "Ensures legal compliance and protects against penalties",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisitesAuth = [
  "Form INC-20A for Commencement of Business should have been filed",
  "Details of the required Increase in Authorized Capital",
  "DIN of minimum 1 Director should be in 'APPROVED' Status",
  "One Valid Digital Signature (DSC) of an existing Director",
  "MOA (Memorandum of Association) must contain the necessary capital clause",
];

const prerequisitesPaidUp = [
  "Bank Statement showing deposit of Paid up Capital amount",
  "Share certificates of the Company (for updating)",
  "DIN of minimum 1 Director should be in 'APPROVED' Status",
  "One Valid Digital Signature (DSC) of an existing Director",
];

const deliverables = [
  "Filed e-forms with MCA (Form SH-7)",
  "MCA payment challan for filing fees and stamp duty",
  "Drafted Shareholders' Special Resolution (EGM)",
  "Updated MOA and AOA copy",
  "Guidance on printing new Share Certificates",
];

const sections = [
  {
    title: "Pre-Requisites for Increase in Authorized Capital",
    icon: "fileText",
    type: "list",
    data: prerequisitesAuth,
  },
  {
    title: "Pre-Requisites for Increase in Paid-up Capital",
    icon: "checkCircle",
    type: "list",
    data: prerequisitesPaidUp,
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
    q: "What is maximum share capital allowed for a Company?",
    a: "There is no maximum limit for the Authorized Share Capital of a Private or Public Limited Company under the Companies Act, 2013.",
  },
  {
    q: "What is the difference between Authorized Capital & Paid up capital?",
    a: "Authorized Capital is the maximum limit up to which a Company can issue shares. Paid Up Capital is the actual amount invested by shareholders.",
  },
  {
    q: "What documents are required for increasing the capital?",
    a: "MOA, AOA, Board Meeting documents, and documents for Extra Ordinary General Meeting (EGM). Lawizer assists in drafting and filing all documents.",
  },
  {
    q: "What forms are filed for increasing Company capital?",
    a: "Form SH-7 is the primary form filed with the ROC to register the increase in Authorized Share Capital.",
  },
  {
    q: "What is the time limit to file capital increase with ROC?",
    a: "Form SH-7 must be filed within 30 days from passing the Special Resolution in the EGM.",
  },
  {
    q: "Is Stamp Duty payable on increase in Authorized Capital?",
    a: "Yes, Stamp Duty is payable and varies depending on the State and the amount of capital increase.",
  },
  {
    q: "Are Share Certificates required after capital increase?",
    a: "Yes, Share Certificates must be updated and issued to reflect the revised capital structure.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function IncreasingCapitalOfCompanyPage() {
  return (
    <ServicePageLayout
      title="Increase in Authorized Share Capital"
      subtitle="Legally expand your company’s capital base to unlock growth, attract investors, and stay compliant with ROC filings."
      badgeText="Form SH-7 • Companies Act, 2013 • Growth Ready"
      icon="banknote"
      contentTitle="The Importance of Capital Expansion"
      contentDescription="Increasing Authorized Capital raises the ceiling for issuing shares, enabling fundraising and expansion without repeated MOA amendments. The process requires a Special Resolution and timely filing of Form SH-7 to avoid penalties."
      section1Title="Key Benefits of Increasing Share Capital"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-green-500/20",
        orb2: "bg-teal-500/20",
        iconBg: "from-green-500 to-teal-500",
        badgeText: "text-green-300",
      }}
      primaryColor="text-green-500"
      primaryBg="bg-gradient-to-r from-green-600 to-teal-500"
      primaryHoverBg="bg-gradient-to-r from-green-700 to-teal-600"
    />
  );
}
