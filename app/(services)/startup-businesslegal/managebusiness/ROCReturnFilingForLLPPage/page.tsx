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
    text: "Boosts Confidence and Trust among partners and stakeholders",
  },
  {
    icon: "clock",
    text: "Avoiding mandatory 'Strike Off' action by the ROC for non-filing",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

/**
 * NOTE:
 * Original page had structured sub-bullets.
 * We preserve content exactly, only flattening structure
 * so ServicePageLayout renders it consistently.
 */

const prerequisites = [
  "For Form 11 Filing (Annual Return):",
  "DIN of all Designated Partners should be in APPROVED Status",
  "Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
  "For Form 8 Filing (Statement of Accounts):",
  "Turnover less than 40 Lac: Signed Balance Sheet & P&L",
  "Turnover more than 40 Lac: Audited Balance Sheet (Mandatory)",
  "DIN of all Designated Partners should be in APPROVED Status",
  "Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
];

const deliverables = [
  "All filed e-forms with MCA (Form 8 and Form 11)",
  "MCA payment challan for filing fees",
  "Financial statements preparation (if required)",
  "Certificate of filing compliance",
];

const sections = [
  {
    title: "Pre-Requisites for Filing (Form 8 & Form 11)",
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
    q: "What Forms are to be filed for ROC Return (for LLP)?",
    a: "LLP needs to file two eForms every year: **Form 11** for the Annual Return (Compliance) and **Form 8** for the Statement of Accounts (Financials).",
  },
  {
    q: "What is the LLP Annual Filing due date?",
    a: "Due date for filing **Form 11** is **30th May** of each year. Due date for filing **Form 8** is **30th October** of every year.",
  },
  {
    q: "What is the Penalty for late filing of LLP return?",
    a: "Late fees of **₹100 per day** is charged on each Form (Form 11 and Form 8) from the day after the due date until the filing is completed. The penalty is uncapped.",
  },
  {
    q: "How to calculate Penalty for late filing of LLP Annual filing?",
    a: "Penalty calculation is: **₹100 x Number of days delay** for Form 11 + **₹100 x Number of days delay** for Form 8.",
  },
  {
    q: "Is there any chance of waiver of penalty for non-filing of Form 11 & Form 8?",
    a: "No, there is typically no provision for waiver of penalty. The MCA has not recently announced any general waiver or amnesty scheme, making timely filing essential.",
  },
  {
    q: "What happens if an LLP does not file annual returns?",
    a: "A) LLP & its Partners become liable for steep, uncapped late fees. B) ROC may issue notice to close the LLP. C) ROC can disqualify and block the DIN of Designated Partners, preventing them from joining other entities.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function ROCReturnFilingForLLPPage() {
  return (
    <ServicePageLayout
      title="ROC Annual Return Filing for LLP"
      subtitle="Mandatory annual compliance for Limited Liability Partnerships (LLP), involving timely filing of Form 8 (Financials) and Form 11 (Annual Return) to avoid heavy penalties."
      badgeText="LLP Act, 2008 • Form 8 • Form 11"
      icon="fileText"

      serviceID="ROC_ANNUAL_RETURN_FILING_FOR_LLP"
      contentTitle="The Importance of Timely Annual Filing"
      contentDescription="ROC Annual Filing is non-negotiable for an LLP. Failing to file Form 8 and Form 11 by their respective deadlines (October 30th and May 30th) results in an uncapped, cumulative late fee of ₹100 per day per form. This compliance step is crucial for maintaining 'Active' status and protecting Designated Partners' DINs from disqualification."
      section1Title="Key Benefits of Compliant LLP Filing"
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
