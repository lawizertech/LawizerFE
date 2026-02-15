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
    text: "Limited liability protection to the owner’s personal assets",
  },
  {
    icon: "trendingUp",
    text: "Enhanced credibility and easier access to funding",
  },
  {
    icon: "fileText",
    text: "Fewer compliances compared to traditional private companies",
  },
  {
    icon: "building",
    text: "Perpetual succession even with a single owner",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Single natural person who is an Indian citizen and resident",
  "Mandatory appointment of a nominee (successor)",
  "No minimum paid-up share capital requirement",
  "PAN, Aadhaar, photographs, address proofs of director and nominee",
  "Proof of registered office address",
];

const deliverables = [
  "DIN for 1 Director",
  "Digital Signature Certificate (DSC)",
  "OPC Certificate of Incorporation",
  "Memorandum of Association (MOA)",
  "Articles of Association (AOA)",
  "Company PAN Card",
  "Company TAN",
  "Bank account opening assistance",
];

const sections = [
  {
    title: "Pre-Requisites for OPC Registration",
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
    q: "What is a One Person Company (OPC)?",
    a: "An OPC is a type of private company incorporated by a single natural person under the Companies Act, 2013. It provides limited liability and separate legal entity status.",
  },
  {
    q: "Who can form an OPC in India?",
    a: "Any natural person who is an Indian citizen and resident in India (minimum 182 days stay in the previous calendar year) can incorporate an OPC.",
  },
  {
    q: "Is a nominee mandatory for OPC registration?",
    a: "Yes. The sole member must appoint a nominee who will become the shareholder in case of death or incapacity.",
  },
  {
    q: "What documents are required to set up an OPC?",
    a: "PAN card, Aadhaar card, photographs, address proofs of the director and nominee, and registered office proof are required.",
  },
  {
    q: "Is commercial office space required for OPC?",
    a: "No. A residential address can be used as the registered office, subject to compliance requirements.",
  },
  {
    q: "Who is the Registrar of Companies (ROC)?",
    a: "The ROC is a government authority under the Ministry of Corporate Affairs responsible for company registrations and compliance.",
  },
  {
    q: "Is physical visit to ROC required?",
    a: "No. OPC incorporation is a completely online process handled digitally.",
  },
  {
    q: "What is a DIN?",
    a: "DIN (Director Identification Number) is a unique identification number issued by MCA to become a director in a company.",
  },
  {
    q: "What is a DSC?",
    a: "A Digital Signature Certificate (DSC) is used to electronically sign documents filed with the ROC.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function OnePersonCompanyPage() {
  return (
    <ServicePageLayout
      serviceID="ONE_PERSON_COMPANY"
      title="One Person Company (OPC)"
      subtitle="A smart business structure for solo entrepreneurs with limited liability and full legal recognition."
      badgeText="Single Owner • Limited Liability • Company Status"
      icon="user"
      contentTitle="Why Choose a One Person Company?"
      contentDescription="A One Person Company (OPC) under the Companies Act, 2013 allows solo entrepreneurs to enjoy the benefits of a private limited company with reduced compliance burden. It offers limited liability, separate legal identity, and long-term business continuity."
      section1Title="Key Benefits of OPC Registration"
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
