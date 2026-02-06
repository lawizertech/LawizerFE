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
    text: "Multiple privileges and exemptions under the Companies Act",
  },
  {
    icon: "fileText",
    text: "No minimum paid-up capital requirement",
  },
  {
    icon: "shield",
    text: "Exemption from stamp duty on incorporation",
  },
  {
    icon: "fileText",
    text: "CARO audit provisions generally not applicable",
  },
  {
    icon: "users",
    text: "Partnership firms can become members in their own capacity",
  },
  {
    icon: "trendingUp",
    text: "Donors eligible for tax deduction under Section 80G",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Minimum 2 members for Private Section 8 Company and 7 for Public Section 8 Company",
  "Minimum 2 directors (private) or 3 directors (public)",
  "Directors and members can be the same individuals",
  "Registered office address proof",
  "PAN, identity proof, and address proof of directors",
];

const deliverables = [
  "Director Identification Number (DIN)",
  "Digital Signature Certificate (DSC)",
  "Company name approval",
  "Memorandum of Association (MOA)",
  "Articles of Association (AOA)",
  "Certificate of Incorporation",
  "Company PAN Card",
  "Company TAN / TDS Number",
  "Bank account opening assistance",
];

const sections = [
  {
    title: "Pre-Requisites for Section 8 Registration",
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
    q: "What is a Section 8 Company?",
    a: "A Section 8 Company is a non-profit organization registered under the Companies Act, 2013, formed to promote charitable objectives such as education, social welfare, arts, or environment.",
  },
  {
    q: "Is commercial office space mandatory?",
    a: "No. Residential or rented premises can be used as the registered office address.",
  },
  {
    q: "Is Section 8 registration renewed annually?",
    a: "No. Once incorporated, it remains valid until closed. However, annual ROC compliance filings are mandatory.",
  },
  {
    q: "Can profits be distributed to members?",
    a: "No. All profits must be reinvested toward the charitable objectives of the company.",
  },
  {
    q: "Is there any minimum capital requirement?",
    a: "No. Section 8 companies usually operate as companies limited by guarantee and do not require minimum share capital.",
  },
  {
    q: "Are PF and GST automatically applicable?",
    a: "No. Applicability depends on employee count, turnover, and nature of activities — not company type.",
  },
  {
    q: "Can a Section 8 company be converted into a Private Limited Company?",
    a: "Yes, subject to approval from the Registrar of Companies and compliance with prescribed procedures.",
  },
  {
    q: "What is a DIN?",
    a: "DIN (Director Identification Number) is a unique number issued by MCA for individuals intending to act as company directors.",
  },
  {
    q: "What is a DSC?",
    a: "A Digital Signature Certificate (DSC) is used to electronically sign documents submitted to the ROC.",
  },
  {
    q: "Do we need to deposit funds before incorporation?",
    a: "No. Funds are deposited after incorporation once the company bank account is opened.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function Section8NGOCompanyPage() {
  return (
    <ServicePageLayout
      title="Section 8 NGO Company"
      subtitle="A highly credible non-profit structure for social, charitable, and public welfare initiatives."
      badgeText="Non-Profit • Tax Benefits • Limited Liability"
      icon="users"
      contentTitle="Why Choose a Section 8 Company?"
      contentDescription="A Section 8 Company under the Companies Act, 2013 is an ideal legal structure for NGOs and non-profit organizations. It offers high credibility, tax exemptions, and limited liability while ensuring that all profits are used strictly for charitable objectives."
      section1Title="Key Benefits of Section 8 Registration"
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
