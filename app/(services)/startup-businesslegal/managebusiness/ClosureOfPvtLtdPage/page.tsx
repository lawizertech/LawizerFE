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
    text: "Protects directors from future penalties and liabilities",
  },
  {
    icon: "checkCircle",
    text: "Formal closure frees the company from all statutory obligations",
  },
  {
    icon: "building",
    text: "Stops unnecessary financial losses (audit/filing fees)",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Form INC-20A for Commencement of Business should have been filed",
  "Annual ROC Return Filings should be up to date",
  "Company should be inoperative for more than 2 consecutive financial years (or 1 year for FTE)",
  "Bank Account of the Company should be closed and Statement of Accounts prepared",
  "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
  "DIN of all Directors should be in ‘APPROVED’ status",
  "One valid Digital Signature (DSC) of an existing Director",
];

const deliverables = [
  "All filed e-forms with MCA (e.g., Form STK-2)",
  "MCA payment challan for closure fees",
  "Company Closure Certificate (Confirmation of Striking Off)",
  "Drafted Indemnity Bond and Affidavit documents",
  "Board and Shareholder Resolution for voluntary closure",
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

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is Closure of Company?",
    a: "When the existence of a Private Limited Company as a legal entity comes to an end, it is known as closure of the company. This is typically achieved via the Striking Off or Winding Up process.",
  },
  {
    q: "What is the difference between Closure, Winding up, and Dissolution?",
    a: "Closure is voluntary under Fast Track Exit (FTE). Winding up may be voluntary or court-ordered with a liquidator. Dissolution is the final legal termination of a company, often initiated by the court.",
  },
  {
    q: "Why is ROC filing required for Closure?",
    a: "Even if business stops, the company remains legally active until ROC approves closure (STK-2). Filing ensures removal from MCA records and exemption from further annual compliance filings, avoiding penalties.",
  },
  {
    q: "What is Fast Track Exit (FTE) Scheme?",
    a: "An MCA initiative for simplified and faster voluntary closure of inoperative companies (Pvt Ltd) by filing Form STK-2.",
  },
  {
    q: "Which companies are eligible for Closure under FTE?",
    a: "Any Private Limited Company (not Section 8) that has been inoperative for over one year since incorporation or one year prior to the application can apply for closure.",
  },
  {
    q: "What are the costs involved in Closing a Company?",
    a: "ROC filing fee for Form STK-2 is ₹10,000. Notary and Stamp Paper charges may vary (approximately ₹1,200–₹1,500).",
  },
  {
    q: "What documents are required for Closure?",
    a: "Application for striking off, Board Resolution, Special Resolution (Shareholders), Director’s Affidavit, Indemnity Bond, and Statement of Assets & Liabilities.",
  },
  {
    q: "What is the time limit to file Closure documents with ROC?",
    a: "Form STK-2 must be filed with the ROC office within 30 days from the date of signing the Statement of Assets & Liabilities.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ClosureOfPvtLtdPage() {
  return (
    <ServicePageLayout
      serviceID="CLOSURE_OF_PRIVATE_LIMITED_COMPANY"
      title="Closure of Private Limited Company"
      subtitle="Formally dissolve your non-operational Private Limited Company by striking its name off the ROC records via Form STK-2 (Fast Track Exit)."
      badgeText="Companies Act, 2013 • STK-2 Filing • Director Protection"
      icon="users"
      contentTitle="The Importance of Legal Closure (FTE)"
      contentDescription="The Fast Track Exit (FTE) route via Form STK-2 is the simplified way to close a non-operational Private Limited Company. Failure to formally close means mandatory annual filings continue, heavy penalties accrue, and directors remain liable. Legal striking off removes all future compliance burdens and protects directors."
      section1Title="Key Benefits of Formal Company Closure"
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
