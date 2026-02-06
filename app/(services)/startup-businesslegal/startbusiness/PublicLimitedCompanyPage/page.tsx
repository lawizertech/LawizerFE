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
  { icon: "shield", text: "Limited liability protection for directors" },
  { icon: "trendingUp", text: "Higher credibility and public trust" },
  { icon: "users", text: "Easy access to large-scale funding and loans" },
  { icon: "trendingUp", text: "Preferred structure for public investment" },
  { icon: "fileText", text: "Free transferability of shares" },
  {
    icon: "building2",
    text: "Best suited for heavy capital-intensive businesses",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Minimum 7 shareholders",
  "Minimum 3 directors",
  "Directors and shareholders can be the same person",
  "At least one director must be an Indian resident",
  "Minimum authorised share capital as prescribed by law",
  "PAN, identity proof, and address proof of directors and shareholders",
];

const deliverables = [
  "DIN (Director Identification Number) for 3 directors",
  "Digital Signature Certificates (DSC) for shareholders",
  "Company name approval",
  "MOA & AOA drafting",
  "Certificate of Incorporation",
  "Company PAN Card",
  "Company TAN / TDS Number",
  "Bank account opening documentation support",
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
    q: "What documents are required to set up a Public Limited Company?",
    a: "Basic documents such as photograph, PAN card, and address proof of directors and shareholders are required.",
  },
  {
    q: "Is commercial office space mandatory?",
    a: "No. A residential or rented address can be used as the registered office and can be changed later.",
  },
  {
    q: "Who is the Registrar of Companies (ROC)?",
    a: "ROC is a government authority responsible for registering and regulating companies in India.",
  },
  {
    q: "Is physical presence required for incorporation?",
    a: "No. The entire Public Limited Company incorporation process is completed online.",
  },
  {
    q: "Is Public Limited Company registration renewable?",
    a: "No renewal is required, but annual ROC compliance filings are mandatory.",
  },
  {
    q: "What is a DIN?",
    a: "Director Identification Number (DIN) is a unique number issued to individuals appointed as directors.",
  },
  {
    q: "What is a DSC?",
    a: "A Digital Signature Certificate (DSC) is used to sign electronic forms filed with the ROC.",
  },
  {
    q: "Can the registered office address be changed later?",
    a: "Yes, the registered office address can be changed anytime after incorporation by following due procedure.",
  },
  {
    q: "Is share capital required at the time of incorporation?",
    a: "No. Share capital can be deposited after incorporation once the company bank account is opened.",
  },
  {
    q: "Are GST and PF automatically applicable?",
    a: "No. GST and PF apply only after crossing prescribed threshold limits.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function PublicLimitedCompanyPage() {
  return (
    <ServicePageLayout
      title="Public Limited Company"
      subtitle="A large-scale corporate structure designed to raise public capital with strong credibility."
      badgeText="Public Company • Investor Ready • Limited Liability"
      icon="building2"
      contentTitle="Overview"
      contentDescription="A Public Limited Company (PLC) is a corporate entity governed by the Companies Act, 2013. It requires a minimum of seven shareholders and three directors and can raise capital by offering shares to the public. PLCs enjoy limited liability, higher credibility, and are ideal for businesses planning large-scale expansion and public investment."
      section1Title="Key Benefits of Public Limited Company"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-red-500 to-orange-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-500 to-orange-500"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-600"
    />
  );
}
