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
    text: "Limited liability protection to partners’ personal assets",
  },
  {
    icon: "trendingUp",
    text: "Better image and enhanced credibility in the market",
  },
  {
    icon: "fileText",
    text: "No mandatory audit requirement and minimal annual compliances",
  },
  {
    icon: "building",
    text: "Continuity of business with perpetual succession",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Minimum of 2 partners are required",
  "If a body corporate is a partner, a natural person must be nominated",
  "No concept of share capital — partners contribute agreed capital",
  "KYC documents of partners (PAN, identity proof, address proof)",
];

const deliverables = [
  "DIN for 2 designated partners",
  "Digital Signature Certificate (DSC) for 1 partner",
  "LLP Incorporation Certificate",
  "Drafted and filed LLP Agreement",
  "LLP PAN Card",
  "LLP TAN / TDS Number",
  "Bank account opening assistance",
];

const sections = [
  {
    title: "Pre-Requisites for LLP Registration",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You’ll Receive",
    icon: "building",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What documents are required to set up an LLP in India?",
    a: "Basic documents such as photograph, PAN card, and one address proof of the partners are sufficient for LLP incorporation.",
  },
  {
    q: "Is commercial office space required to start an LLP?",
    a: "No. You may use a residential or rented address as the registered office. The address can be changed later if required.",
  },
  {
    q: "Who is the Registrar of Companies (ROC)?",
    a: "The ROC is a government authority under the Ministry of Corporate Affairs responsible for registration and compliance of LLPs and companies.",
  },
  {
    q: "Do partners need to visit the ROC office physically?",
    a: "No. LLP incorporation is a completely online process. All filings and approvals are handled digitally.",
  },
  {
    q: "Is LLP registration required to be renewed every year?",
    a: "No renewal is required. However, LLPs must file basic annual returns to remain compliant.",
  },
  {
    q: "What is a DIN?",
    a: "DIN (Designated Partner Identification Number) is a unique identification number issued by the MCA to become a designated partner in an LLP.",
  },
  {
    q: "What is a DSC?",
    a: "A Digital Signature Certificate (DSC) is used to electronically sign documents filed with the ROC.",
  },
  {
    q: "Can the LLP office address be changed after incorporation?",
    a: "Yes. The registered office address of an LLP can be changed anytime after incorporation.",
  },
  {
    q: "What is an LLP Agreement?",
    a: "The LLP Agreement defines the internal rules of the LLP, including capital contribution, profit sharing, business activities, and partner rights.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function LLPIncorporationPage() {
  return (
    <ServicePageLayout
      serviceID="LIMITED_LIABILITY_PARTNERSHIP"
      title="Limited Liability Partnership (LLP)"
      subtitle="A flexible business structure combining partnership benefits with limited liability protection."
      badgeText="LLP Registration • Startup Friendly • Low Compliance"
      icon="briefcase"
      contentTitle="Why Choose an LLP for Your Business?"
      contentDescription="A Limited Liability Partnership (LLP) under the LLP Act, 2008 offers the operational flexibility of a partnership with the legal protection of limited liability. It is ideal for startups, professionals, and small businesses seeking structure with minimal compliance."
      section1Title="Key Benefits of LLP Registration"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-orange-400/20",
        iconBg: "from-red-500 to-orange-400",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-500 to-orange-400"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-500"
    />
  );
}
