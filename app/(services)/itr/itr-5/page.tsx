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
    icon: "briefcase",
    text: "Mandatory return for Firms, LLPs, AOPs & BOIs",
  },
  {
    icon: "scale",
    text: "Accurate reporting of partner capital & profit sharing",
  },
  {
    icon: "fileText",
    text: "Proper preparation of Balance Sheet & P&L Account",
  },
  {
    icon: "shield",
    text: "Ensures compliance with audit & tax regulations",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const applicableTo = [
  "Partnership Firms (registered or unregistered)",
  "Limited Liability Partnerships (LLPs)",
  "Association of Persons (AOPs)",
  "Body of Individuals (BOIs)",
  "Artificial Juridical Persons, Business Trusts & Investment Funds",
];

const documentsNeeded = [
  "PAN Card of the firm/LLP/entity",
  "Books of Accounts (Balance Sheet & Profit & Loss Account)",
  "Audit Report (if applicable)",
  "Bank Statements",
  "Details of Partner’s / Member’s Capital Accounts",
];

const keyRequirement = [
  "Maintenance of Books of Accounts is mandatory",
  "Preparation of Balance Sheet and P&L Account required",
  "Tax Audit report must be attached if audit is applicable",
];

const sections = [
  {
    title: "Who Should File ITR-5",
    icon: "checkCircle",
    type: "list",
    data: applicableTo,
  },
  {
    title: "Documents Required",
    icon: "fileText",
    type: "list",
    data: documentsNeeded,
  },
  {
    title: "Important Compliance Requirement",
    icon: "gavel",
    type: "alert",
    data: keyRequirement,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "Who is required to file ITR-5?",
    a: "ITR-5 is applicable to non-individual taxpayers such as Firms, LLPs, AOPs, BOIs, Business Trusts, and Investment Funds, excluding companies.",
  },
  {
    q: "Can an LLP file ITR-4?",
    a: "No. LLPs are specifically required to file ITR-5 and cannot opt for presumptive taxation under ITR-4.",
  },
  {
    q: "Are books of accounts mandatory for ITR-5?",
    a: "Yes. All entities filing ITR-5 must maintain proper books of accounts and prepare financial statements.",
  },
  {
    q: "Is tax audit applicable for ITR-5 filers?",
    a: "Yes. If the entity crosses prescribed turnover limits or meets audit criteria, a tax audit report must be filed along with ITR-5.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function ITR5Page() {
  return (
    <ServicePageLayout
      title="ITR-5 Filing"
      subtitle="For Firms, LLPs, AOPs, BOIs & other non-individual entities."
      badgeText="Firms • LLPs • AOPs • BOIs"
      icon="briefcase"

      serviceID="ITR-5_FILING"
      contentTitle="Overview"
      contentDescription="ITR-5 is the prescribed Income Tax Return for non-individual entities such as partnership firms, LLPs, AOPs, BOIs, and business trusts. It requires detailed financial reporting, including books of accounts, partner capital details, and audit compliance where applicable."
      section1Title="Key Highlights of ITR-5"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-pink-500/20",
        iconBg: "from-red-500 to-pink-500",
        badgeText: "text-red-300",
      }}
      primaryColor="text-red-600"
      primaryBg="bg-gradient-to-r from-red-600 to-pink-600"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-pink-700"
    />
  );
}
