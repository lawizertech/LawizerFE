"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "gavel",
    text: "Criminal remedy for debt recovery with imprisonment and heavy fines under law.",
  },
  {
    icon: "clock",
    text: "Faster and more effective recovery mechanism compared to lengthy civil suits.",
  },
  {
    icon: "scale",
    text: "Recovery of cheque amount along with interest, compensation, and legal costs.",
  },
  {
    icon: "fileText",
    text: "End-to-end handling till final court order and execution of recovery.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Cheque must be presented within its validity period (generally 3 months).",
  "Cheque should be dishonored for legally recognized reasons such as insufficient funds.",
  "Legal Demand Notice must be sent within 30 days of receiving the Cheque Return Memo.",
  "Drawer must fail to make payment within 15 days of receiving the notice.",
  "Criminal complaint must be filed within 30 days after expiry of the 15-day notice period.",
];

const documentsRequired = [
  "Original dishonored cheque.",
  "Original cheque return memo issued by the bank.",
  "Copy of the legal demand notice sent to the drawer.",
  "Postal or courier receipt and delivery acknowledgement.",
];

const deliverables = [
  "Drafting and dispatch of a legally compliant demand notice.",
  "Drafting and filing of Section 138 criminal complaint before Magistrate Court.",
  "Complete legal representation during trial and hearings.",
  "Execution support to recover cheque amount, fine, and compensation.",
];

const sections = [
  {
    title: "Mandatory Legal Prerequisites (Strict Timelines)",
    icon: "clock",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Documents Required",
    icon: "fileText",
    type: "list",
    data: documentsRequired,
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "When does a cheque bounce become a criminal offence?",
    a: "When a cheque issued towards a legally enforceable debt is dishonored due to insufficient funds or similar reasons, and statutory timelines under Section 138 are followed.",
  },
  {
    q: "Why is Section 138 more effective than a civil suit?",
    a: "It is a criminal offence carrying imprisonment and fines, creating strong pressure on the drawer to settle quickly.",
  },
  {
    q: "What is the deadline for sending the legal notice?",
    a: "The legal demand notice must be sent within 30 days of receiving the cheque return memo from the bank.",
  },
  {
    q: "When can the court complaint be filed?",
    a: "If payment is not made within 15 days of notice receipt, the complaint must be filed within the next 30 days.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ChequeBounceS138Page() {
  return (
    <ServicePageLayout
      serviceID="CHEQUE_BOUNCE_S138"
      title="Cheque Bounce Case (Section 138)"
      subtitle="Criminal proceedings under the Negotiable Instruments Act for fast and effective debt recovery."
      badgeText="Criminal Remedy • Strict Timelines • Court Representation"
      icon="gavel"
      contentTitle="Recover Your Money Through Section 138 Proceedings"
      contentDescription="Section 138 of the Negotiable Instruments Act provides a powerful criminal remedy against cheque dishonour. Strict timelines apply, and professional handling ensures faster recovery of dues, interest, and compensation."
      section1Title="Why Section 138 Is the Strongest Debt Recovery Tool"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-purple-500/20",
        orb2: "bg-indigo-500/20",
        iconBg: "from-purple-500 to-indigo-500",
        badgeText: "text-indigo-300",
      }}
      primaryColor="text-purple-600"
      primaryBg="bg-gradient-to-r from-purple-600 to-indigo-600"
      primaryHoverBg="bg-gradient-to-r from-purple-700 to-indigo-700"
    />
  );
}
