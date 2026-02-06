"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "trendingUp",
    text: "Easy Bank Loan up to 1 Crore without collateral/mortgage",
  },
  {
    icon: "shield",
    text: "Preference in procuring Government tenders",
  },
  {
    icon: "trendingUp",
    text: "1% exemption on interest rate on Bank Overdraft (OD)",
  },
  {
    icon: "fileText",
    text: "Concession in Electricity bills",
  },
  {
    icon: "shield",
    text: "Protection against the delay in payment from Buyers",
  },
  {
    icon: "trendingUp",
    text: "Tax Rebates",
  },
  {
    icon: "fileText",
    text: "Special 50% discount on Govt. fees for Trademark & Patent",
  },
  {
    icon: "shield",
    text: "Fast resolution of disputes",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "If the Applicant is Proprietorship Firm: Proprietor's PAN card, Address proof of Proprietor, Aadhaar Card of Proprietor",
  "If the Applicant is Partnership Firm: PAN Card of the Firm or Partnership Deed, Address proof of the Firm, Aadhaar Card of the Authorised Signatory",
  "If the Applicant is Pvt. Ltd./OPC/Public Ltd.: Incorporation Certificate or PAN of Company, PAN card and address proof of Director, Aadhaar Card of Authorised Signatory",
  "If the Applicant is LLP: PAN card of LLP, PAN card and address proof of all the Partners, Aadhaar Card of Authorised Signatory",
];

const deliverables = ["MSME/UDHYAM CERTIFICATE"];

const sections = [
  {
    title: "Prerequisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You'll Receive",
    icon: "building",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is MSME?",
    a: "MSME meaning Micro Small and Medium Enterprises as defined under MSME development Act 2006.",
  },
  {
    q: "What is MSME Registration?",
    a: "MSME registration is the procedure to get your firm registered under MSME development Act for SME benefits.",
  },
  {
    q: "What is difference between MSME, SSI and Udyog Aadhaar?",
    a: "There is no difference between MSME, SSI & Udyog Aadhaar. There are all one and the same.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function MSMEUdhyamRegistrationPage() {
  return (
    <ServicePageLayout
      title="MSME / Udhyam Registration"
      subtitle="Register your business online for free to unlock government benefits, priority lending, and protections."
      badgeText="Govt-recognized • Free • Fast"
      icon="building"
      contentTitle="Overview"
      contentDescription="MSME/Udhyam Registration is the simplified online process by which micro, small, and medium enterprises register their business with the government to access various benefits."
      section1Title="Key Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-[#c92c41]/20",
        orb2: "bg-[#4c3df7]/20",
        iconBg: "from-[#c92c41] to-[#e99b2b]",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-orange-600"
      primaryBg="bg-gradient-to-r from-[#c92c41] to-[#e99b2b]"
      primaryHoverBg="bg-gradient-to-r from-[#b02538] to-[#d88920]"
    />
  );
}
