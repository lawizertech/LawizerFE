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
    text: "Protection against copycats — safeguards your brand from unauthorized use",
  },
  {
    icon: "scale",
    text: "A registered brand is a valuable business asset",
  },
  {
    icon: "trendingUp",
    text: "Facilitates business expansion and licensing",
  },
  {
    icon: "checkCircle",
    text: "Builds credibility and consumer trust in the market",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Trademark Application / Registration Number (e.g., TM-XXXXXX)",
  "Signed Authorisation (TM-M) or POA if filing via agent",
];

const deliverables = [
  "Trademark Registry filing receipt (TM-R)",
  "Screenshot / PDF of the online filing confirmation",
];

const sections = [
  {
    title: "Prerequisites for Trademark Renewal",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "building",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is Trademark Renewal?",
    a: "A registered trademark is initially valid for 10 years. Renewal (Form TM-R) extends protection for another 10 years from the renewal date.",
  },
  {
    q: "When should I renew my trademark?",
    a: "You may file renewal anytime before expiry. A one-year grace period is available after expiry with additional fees. If not renewed within this period, the trademark may be treated as abandoned.",
  },
  {
    q: "What fees apply for trademark renewal?",
    a: "Statutory renewal fees depend on the class and applicant type. Additional late fees apply if filed during the grace period.",
  },
  {
    q: "How long does the renewal process take?",
    a: "Online filing and acknowledgement are immediate. Registry processing timelines may vary, but filing receipts and confirmations are issued promptly.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function RenewTrademarkPage() {
  return (
    <ServicePageLayout
      title="Trademark Renewal"
      subtitle="Extend your trademark protection for another 10 years and safeguard your brand identity."
      badgeText="Form TM-R • Trademark Act, 1999"
      icon="refresh"
      contentTitle="Why Trademark Renewal Is Essential"
      contentDescription="Trademark renewal keeps your registration active and enforceable. Filing Form TM-R on time extends statutory protection for another 10 years, preserving goodwill, exclusivity, and legal rights associated with your brand."
      section1Title="Key Benefits of Trademark Renewal"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-red-500 to-orange-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-orange-500"
      primaryBg="bg-gradient-to-r from-red-600 to-orange-500"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-orange-600"
    />
  );
}
