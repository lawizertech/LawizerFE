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
    icon: "scale",
    text: "Removes legal hassles and avoids continuing non-compliance",
  },
  {
    icon: "shield",
    text: "Eliminates the risk of accumulating penalties and fines",
  },
  {
    icon: "checkCircle",
    text: "Formal closure frees the director from OPC statutory obligations",
  },
  {
    icon: "building2",
    text: "Removes the entity's 'defaulter' status (if applicable)",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Form INC-20A for Commencement of Business should have been filed",
  "Annual ROC Return Filings should be up to date (or statement prepared)",
  "OPC should be inoperative for more than 1 or 2 consecutive financial years (depending on scheme)",
  "Bank Account of the OPC should be closed and Statement of Accounts prepared",
  "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
  "DIN of all Directors should be in ‘APPROVED’ status",
  "One valid Digital Signature (DSC) of an existing Director",
];

const deliverables = [
  "All filed e-forms with MCA (e.g., Form STK-2)",
  "MCA payment challan for closure fees",
  "OPC Closure Certificate (Confirmation of Striking Off)",
  "Drafted Indemnity Bond and Affidavit documents",
  "Board Resolution and Director’s Consent for voluntary closure",
];

const sections = [
  {
    title: "Pre-Requisites for Striking Off (Form STK-2)",
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
    q: "What is Closure of OPC?",
    a: "Closure of an OPC is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the Registrar of Companies (ROC) records.",
  },
  {
    q: "What is the difference between Closure, Winding up, and Dissolution?",
    a: "Closure (Striking Off via FTE) is voluntary for non-operational OPCs (Form STK-2). Winding up is a formal liquidation, either voluntary or court-ordered. Dissolution is the final act of legal termination.",
  },
  {
    q: "Why ROC filing is required for Closing an OPC?",
    a: "ROC filing (STK-2) officially removes the OPC from government records. Without this approval, the OPC must continue mandatory annual filings, incurring penalties if not done.",
  },
  {
    q: "What is Fast Track Exit (FTE) Scheme?",
    a: "A simplified MCA process for easy and faster voluntary closure of inoperative companies, including OPCs, by filing Form STK-2.",
  },
  {
    q: "Which OPC is eligible for Closure?",
    a: "Any OPC not being a Section 8 Company and inactive for over **one year** since incorporation or one year prior to application can apply for closure.",
  },
  {
    q: "What are the costs involved?",
    a: "Filing fee for Form STK-2: **₹10,000**. Notary and Stamp Paper charges may vary (approx. ₹1,200–₹1,500).",
  },
  {
    q: "What documents are required?",
    a: "Application for striking off, Board Resolution, Director’s Consent, Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents. Lawizer assists in preparing and filing these.",
  },
  {
    q: "What is the time limit to file?",
    a: "Form STK-2 must be filed with the ROC office within **30 days** from the date of Signing of the Statement of Assets and Liabilities.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function ClosureOfOPCPage() {
  return (
    <ServicePageLayout
      serviceID="CLOSURE_OF_OPC"
      title="Closure of OPC (Striking Off)"
      subtitle="Formally dissolve your One Person Company via the Fast Track Exit (FTE) Scheme and strike its name off the ROC records using Form STK-2."
      badgeText="Companies Act, 2013 • FTE Scheme • STK-2 Filing"
      icon="user"
      contentTitle="The Importance of Legal Closure (FTE)"
      contentDescription="The Fast Track Exit (FTE) route via Form STK-2 is the simplified way to close a non-operational OPC. Failure to formally close the OPC means mandatory annual filings continue, leading to heavy fines and non-compliance issues for the Director. Legal striking off removes all future compliance burdens."
      section1Title="Key Benefits of Formal OPC Closure"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-600/20",
        orb2: "bg-yellow-600/20",
        iconBg: "from-red-500 to-yellow-500",
        badgeText: "text-yellow-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-600 to-yellow-500"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-yellow-600"
    />
  );
}
