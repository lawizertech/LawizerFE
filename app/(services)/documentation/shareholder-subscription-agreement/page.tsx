"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "shield",
    text: "Protects investor and company rights through legally structured funding.",
  },
  {
    icon: "checkCircle",
    text: "Ensures clarity on shareholding, voting rights, and dividend entitlement.",
  },
  {
    icon: "scale",
    text: "Legally enforceable agreement in case of shareholder disputes.",
  },
  {
    icon: "users",
    text: "Suitable for startup funding rounds and corporate investments.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "fileText",
    type: "list",
    data: [
      "Company and investor details",
      "Number, class, and type of shares to be issued",
      "Share price and investment amount",
      "Rights, obligations, and exit clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "users",
    type: "grid",
    data: [
      "Drafting Shareholder Subscription Agreements",
      "Structuring shareholding and voting rights",
      "Guidance on dividend and liquidation rights",
      "Exit clauses and investor protection mechanisms",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Shareholder Subscription Agreement?",
    a: "It is a legal agreement governing the issuance of shares to investors and defining their rights, obligations, and relationship with the company.",
  },
  {
    q: "Why is this agreement important for investors?",
    a: "It ensures clarity on shareholding, voting rights, dividend entitlement, and protects the investor’s interests legally.",
  },
  {
    q: "What clauses are typically included?",
    a: "It includes share issuance details, rights and obligations of shareholders, governance provisions, and exit clauses.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ShareholderSubscriptionAgreementPage() {
  return (
    <ServicePageLayout
      title="Shareholder Subscription Agreement"
      subtitle="Legally structured agreements governing investment and share issuance."
      badgeText="Funding • Shareholding • Governance"
      icon="gavel"

      serviceID="SHAREHOLDER_SUBSCRIPTION_AGREEMENT"
      contentTitle="Why a Subscription Agreement Is Essential for Funding"
      contentDescription="A Shareholder Subscription Agreement formalizes capital investment into a company, clearly defining shareholder rights, obligations, and governance structures. It ensures legal compliance and reduces the risk of future disputes between founders and investors."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-purple-500/20",
        orb2: "bg-violet-500/20",
        iconBg: "from-purple-500 to-violet-500",
        badgeText: "text-violet-300",
      }}
      primaryColor="text-purple-600"
      primaryBg="bg-gradient-to-r from-purple-600 to-violet-600"
      primaryHoverBg="bg-gradient-to-r from-purple-700 to-violet-700"
    />
  );
}
