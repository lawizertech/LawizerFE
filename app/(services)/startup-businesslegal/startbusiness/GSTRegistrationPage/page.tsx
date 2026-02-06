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
    text: "Seamless Input Tax Credit (ITC) on purchases to reduce tax liability",
  },
  {
    icon: "trendingUp",
    text: "Legal authority to collect GST from customers",
  },
  {
    icon: "fileText",
    text: "Simplified compliance with single nationwide registration",
  },
  {
    icon: "building2",
    text: "Access to unified national market without barriers",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Aggregate turnover exceeding ₹20 Lakh in a financial year (₹10 Lakh for Special Category States)",
  "Any inter-state supply of goods or services",
  "E-commerce operators and vendors selling through online portals",
  "Specific cases: Non-residents, importers, and certain notified suppliers",
  "PAN card of the business/applicant",
  "Proof of business address (rent agreement, utility bill, etc.)",
  "Identity and address proof of proprietors/partners/directors (Aadhaar, Voter ID, etc.)",
  "Bank account details and cancellation cheque",
  "Authorization letter or board resolution (if applicable)",
  "Digital photograph of the authorized signatory",
];

const deliverables = [
  "15-digit Goods and Services Tax Identification Number (GSTIN)",
  "GST Registration Certificate",
  "Login credentials for GST Portal",
  "Eligibility to file GST returns and claim ITC",
];

const sections = [
  {
    title: "Prerequisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You'll Receive",
    icon: "building2",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "What is Central GST (CGST)?",
    a: "When the supply of goods and services takes place WITHIN a state (intra-state), two taxes are levied. One part is levied by the State Government, and the other is by the Central Government. The tax levied by the Central Government is known as Central GST (CGST).",
  },
  {
    q: "What is State GST (SGST)?",
    a: "State GST (SGST) is the component of GST collected by the state government on all goods and services supplied within that state (intra-state trade).",
  },
  {
    q: "What is Integrated GST (IGST)?",
    a: "When the supply of goods and services takes place BETWEEN two states (inter-state), Integrated GST (IGST) is levied by the Central Government. In the case of inter-state supply, only IGST is applicable.",
  },
  {
    q: "What are the benefits of GST in India?",
    a: "Many indirect taxes like VAT, Excise Duty, Service Tax, CST, Import-Export, Octroi, Luxury Tax, and Entertainment Tax have been subsumed under GST. This requires only a single GST registration, resulting in fewer compliances and helping businesses focus more on their core operations.",
  },
  {
    q: "What are the GST Rates in India?",
    a: "The GST rate depends on the type of goods and services. Currently, the main slab rates are 5%, 12%, 18%, and 28%. Gold and rough diamonds are taxed separately at 3% and 0.25%, respectively.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function GSTRegistrationPage() {
  return (
    <ServicePageLayout
      title="GST Registration"
      subtitle="Enroll your business under India’s unified tax system to comply, collect, and claim credits seamlessly."
      badgeText="GSTIN • ITC Benefits • Nationwide Compliance"
      icon="fileText"
      contentTitle="Overview"
      contentDescription="Goods and Services Tax (GST) is a comprehensive, destination-based indirect tax that has replaced multiple indirect taxes in India. GST Registration is mandatory for businesses whose aggregate turnover exceeds the prescribed limit and for certain other categories of suppliers. Registration allows businesses to legally collect GST from customers and claim Input Tax Credit (ITC), ensuring a seamless flow of tax credit."
      section1Title="Key Benefits of GST Registration"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-[#c92c41]/20",
        orb2: "bg-[#4c3df7]/20",
        iconBg: "from-[#c92c41] to-[#e99b2b]",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-[#c92c41]"
      primaryBg="bg-gradient-to-r from-[#c92c41] to-[#e99b2b]"
      primaryHoverBg="bg-gradient-to-r from-[#b12438] to-[#d8891f]"
    />
  );
}
