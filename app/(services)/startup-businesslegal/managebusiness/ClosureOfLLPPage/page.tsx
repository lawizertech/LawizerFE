"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "scale",
    text: "Removes legal hassles and avoids continuing non-compliance",
  },
  {
    icon: "shield",
    text: "Eliminates the risk of accumulating penalties and fines",
  },
  {
    icon: "checkCircle",
    text: "Formal closure frees partners from LLP statutory obligations",
  },
  {
    icon: "building",
    text: "Removes the entity's 'defaulter' status (if applicable)",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Annual ROC Return Filings (Form 8 and Form 11) must be up to date",
  "LLP Should be Inoperative for more than 1 or 2 consecutive Financial Years (depending on scheme)",
  "Bank Account of the LLP should be Closed and Statement of Accounts prepared",
  "Latest Filed Income Tax Returns and Indemnity Bond/Affidavit prepared",
  "DIN of all Designated Partners should be in 'APPROVED' Status",
  "Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
];

const deliverables = [
  "All filed e-forms with MCA (e.g., Form 24)",
  "MCA payment challan for closure fees",
  "LLP Closure Certificate (Confirmation of Striking Off)",
  "Drafted Indemnity Bond and Affidavit documents",
  "Partner Resolution for voluntary closure",
];

const sections = [
  {
    title: "Pre-Requisites for Striking Off (Form 24)",
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
    q: "What is Closure of LLP?",
    a: "Closure of an LLP is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the Registrar of Companies (ROC) records.",
  },
  {
    q: "What is the difference between Closure, Winding up, Dissolution of LLP?",
    a: "Closure (or Striking Off) is typically done voluntarily for non-operational LLPs (via Form 24/FTE). Winding up is a formal liquidation, either voluntary or by court order, involving asset distribution. Dissolution is the final act of ending the legal existence.",
  },
  {
    q: "Why ROC filing is required for Closing an LLP?",
    a: "It is necessary to file Closure with the ROC (MCA) so the database is updated. Unless this is approved, the LLP is not legally closed and is still required to file all regular annual returns and compliances, incurring penalties if not done.",
  },
  {
    q: "What is Fast Track Exit (FTE) Scheme (for LLP)?",
    a: "FTE is an LLP closure scheme initiated by MCA for easy and faster striking off (closure) of LLPs that meet specific eligibility criteria, often related to being non-operational for a period.",
  },
  {
    q: "Which LLP is eligible to apply for Closure of LLP?",
    a: "Generally, any LLP which has been inoperative for more than 1 year (or 2 years depending on the method) from the date of its incorporation can apply for Closure, provided all other pre-requisites are met.",
  },
  {
    q: "What documents are required for Closure of LLP?",
    a: "Application for Striking off (Form 24), Partners' Resolution for closure, Consent of Partners, Partners' Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents. Lawizer assists in preparing and filing these.",
  },
  {
    q: "Which form is required to be filed for Closure of LLP with ROC?",
    a: "Form 24 is the primary e-form required to be filed with the ROC for the Striking Off (Closure) of the LLP.",
  },
  {
    q: "What is the time limit to file Closure documents with ROC?",
    a: "The Form 24 has to be filed with ROC office within **30 days** from the date of Signing of the Statement of Assets and Liabilities for all partners.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ClosureOfLLPPage() {
  return (
    <ServicePageLayout
      title="Closure of LLP (Striking Off)"
      subtitle="Formally dissolve your non-operational Limited Liability Partnership by striking its name off the ROC records via Form 24 to avoid future penalties."
      badgeText="LLP Act compliant • Form 24 filing • Penalty-free exit"
      icon="fileWarning"

      serviceID="CLOSURE_OF_LLP"
      contentTitle="The Importance of Legal Closure"
      contentDescription="Even if your LLP has ceased business, it remains a legal entity with mandatory annual filing obligations (Form 8 and 11). Legal closure via striking off (Form 24) is critical to eliminate statutory compliance requirements, remove the tag of defaulter, and prevent the accrual of heavy penalties."
      section1Title="Key Benefits of Formal LLP Closure"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-600/20",
        orb2: "bg-yellow-500/20",
        iconBg: "from-red-500 to-yellow-500",
        badgeText: "text-yellow-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-600 to-yellow-500"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-yellow-600"
    />
  );
}
