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
  { icon: "shield", text: "Limited Liability Protection to Directors" },
  { icon: "trendingUp", text: "Better image and credibility in the market" },
  { icon: "building2", text: "Easy to raise funds and loans" },
  { icon: "users", text: "Preferred business structure for investors" },
  { icon: "users", text: "Easy to attract and retain employees" },
  { icon: "fileText", text: "Easy to sell or transfer ownership" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Minimum 2 shareholders",
  "Minimum 2 directors",
  "Directors and shareholders can be the same person",
  "At least one director must be an Indian resident (182 days stay in previous FY)",
  "PAN card copy (mandatory for Indian nationals)",
  "Identity proof (Passport, Voter ID, Driving License, Aadhaar Card)",
  "Address proof (Bank statement / Utility bill – not older than 30–60 days)",
];

const deliverables = [
  "DIN (Director Identification Number) for 2 directors",
  "Digital Signature Certificates (DSC) for promoters",
  "Company Name Approval (RUN / SPICe)",
  "MOA & AOA drafting",
  "Certificate of Incorporation",
  "Company PAN Card",
  "Company TAN / TDS Number",
  "Bank Account Opening support",
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
    q: "What documents are required to set up a Private Limited Company?",
    a: "Only basic documents are required such as photograph, PAN card, and address proof of directors.",
  },
  {
    q: "Is commercial office space required?",
    a: "No. You can use your residential or rented address as the registered office. This can be changed later.",
  },
  {
    q: "Who is the Registrar of Companies (ROC)?",
    a: "ROC is a government authority responsible for company registrations. Each state has at least one ROC office.",
  },
  {
    q: "Is physical presence required during incorporation?",
    a: "No. The entire incorporation process is completed online without visiting the ROC office.",
  },
  {
    q: "Is Private Limited Company registration renewable?",
    a: "No renewal is required. However, annual ROC filings are mandatory.",
  },
  {
    q: "What is DIN?",
    a: "Director Identification Number (DIN) is a unique ID issued by ROC to a person appointed as director.",
  },
  {
    q: "What is DSC?",
    a: "Digital Signature Certificate (DSC) is used to electronically sign ROC forms during incorporation.",
  },
  {
    q: "Can the registered office be changed later?",
    a: "Yes, the company’s registered office address can be changed anytime after incorporation.",
  },
  {
    q: "Is minimum capital required?",
    a: "There is no minimum capital requirement. Capital can be deposited after incorporation.",
  },
  {
    q: "Are GST and PF mandatory after incorporation?",
    a: "No. GST and PF apply only after crossing prescribed threshold limits.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function PrivateLimitedCompanyPage() {
  return (
    <ServicePageLayout
      title="Private Limited Company"
      subtitle="A scalable, investor-friendly business structure with limited liability protection."
      badgeText="Startup Friendly • Investor Ready • Limited Liability"
      icon="briefcase"
      contentTitle="Overview"
      contentDescription="A Private Limited Company (Pvt. Ltd.) is one of the most popular business structures in India. It requires a minimum of two directors and shareholders, offers limited liability protection, and operates as a separate legal entity. This structure is ideal for startups and growing businesses looking to raise funds, attract talent, and scale operations with credibility."
      section1Title="Key Benefits of Private Limited Company"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-500/20",
        orb2: "bg-red-500/20",
        iconBg: "from-red-500 to-orange-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-500 to-orange-500"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-600"
    />
  );
}
