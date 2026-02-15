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
    icon: "shield",
    text: "Recovery of loss by enforcing RBI zero-liability and limited-liability rules",
  },
  {
    icon: "users",
    text: "Full legal representation before RBI Ombudsman or Consumer Commission",
  },
  {
    icon: "checkCircle",
    text: "Refund of unauthorized debits with compensation for mental harassment",
  },
  {
    icon: "fileText",
    text: "Legally drafted complaint citing RBI circulars and case law",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const preRequisites = [
  "Immediate written complaint to the bank (within 3 days for zero-liability cases)",
  "FIR or Cyber Crime complaint (strongly recommended)",
  "Waiting period of 30 days after lodging complaint with bank",
];

const deliverables = [
  "Drafting complaint for RBI Integrated Ombudsman / Consumer Commission",
  "Issuance of legal notice to the bank demanding recovery",
  "Complete legal representation until final resolution",
];

const sections = [
  {
    title: "Pre-requisites for Filing a Case",
    icon: "clock",
    type: "list",
    data: preRequisites,
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "list",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "What types of digital banking fraud are covered?",
    a: "Phishing, vishing, card fraud, unauthorized UPI/NEFT/RTGS transactions, and failed digital payments where money is debited but not credited.",
  },
  {
    q: "What are RBI zero-liability rules?",
    a: "If the customer reports unauthorized transactions promptly and is not negligent, RBI guidelines require banks to compensate the full loss.",
  },
  {
    q: "When should I report fraud to the bank?",
    a: "Immediately. Ideally within 3 days to qualify for zero-liability protection under RBI rules.",
  },
  {
    q: "Do you represent clients before Consumer Commission?",
    a: "Yes. We handle full representation before the RBI Integrated Ombudsman and Consumer Commissions.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function DigitalBankingFraudPage() {
  return (
    <ServicePageLayout
      serviceID="DIGITAL_BANKING_FRAUD"
      title="Digital & Electronic Banking Fraud"
      subtitle="Legal recovery of losses from unauthorized digital transactions."
      badgeText="RBI Ombudsman • Consumer Commission"
      icon="banknote"
      contentTitle="Why Legal Action Is Necessary"
      contentDescription="Banks often deny liability in cases of digital fraud despite clear RBI guidelines. Legal action is required to enforce zero-liability or limited-liability rules and recover unauthorized debits along with compensation."
      section1Title="Key Benefits of Our Legal Support"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-500/20",
        orb2: "bg-cyan-500/20",
        iconBg: "from-blue-500 to-cyan-500",
        badgeText: "text-cyan-300",
      }}
      primaryColor="text-blue-600"
      primaryBg="bg-gradient-to-r from-blue-600 to-cyan-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-cyan-700"
    />
  );
}
