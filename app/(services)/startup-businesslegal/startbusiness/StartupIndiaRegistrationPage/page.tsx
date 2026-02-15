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
    icon: "fileText",
    text: "DPIIT Recognition Certificate (Digital)",
  },
  {
    icon: "shield",
    text: "Eligibility for 100% Income Tax exemption for 3 consecutive years",
  },
  {
    icon: "trendingUp",
    text: "Up to 80% rebate on patent filing & 50% on trademark filing",
  },
  {
    icon: "building2",
    text: "Self-certification under Labour & Environmental Laws",
  },
  {
    icon: "users",
    text: "Access to ₹10,000 Cr Government Fund of Funds via VCs",
  },
  {
    icon: "shield",
    text: "Angel Tax exemption under Section 56",
  },
  {
    icon: "trendingUp",
    text: "Fast-track company exit within 90 days",
  },
  {
    icon: "fileText",
    text: "Relaxation in public procurement & government tenders",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Entity age must be less than 10 years from incorporation",
  "Entity type must be Private Limited, LLP, or Registered Partnership Firm",
  "Annual turnover should not exceed ₹100 Crore in any financial year",
  "Business must focus on innovation or improvement of products/services",
  "Entity should not be formed by splitting or reconstruction",
  "Certificate of Incorporation / Registration Certificate",
  "Company / LLP / Firm PAN Card",
  "Pitch deck or brief write-up on innovation & scalability",
  "PAN & Aadhaar of Directors / Partners",
  "Authorisation letter",
];

const deliverables = [
  "DPIIT Startup India Recognition Certificate",
  "Confirmation of eligibility for Startup India benefits",
  "Access to Startup India portal dashboard",
];

const sections = [
  {
    title: "Eligibility & Documentation",
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
    q: "How much time does Startup India registration take?",
    a: "DPIIT generally issues the Startup India Recognition Certificate within 2 working days after successful submission.",
  },
  {
    q: "Will my startup get income tax exemption automatically?",
    a: "No. After DPIIT recognition, you must separately apply for tax exemption under Section 80IAC.",
  },
  {
    q: "Is commercial office space mandatory?",
    a: "No. Residential or rented premises can be used as the registered office address.",
  },
  {
    q: "Is the Startup India certificate valuable?",
    a: "Yes. It provides tax benefits, funding access, government recognition, and compliance relaxations.",
  },
  {
    q: "Is Startup India registration free?",
    a: "Yes. There are no government fees for obtaining DPIIT Startup India recognition.",
  },
  {
    q: "Is Startupwala connected to the Government?",
    a: "No. Startupwala (or similar platforms) are private consultants and not government representatives.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function StartupIndiaRegistrationPage() {
  return (
    <ServicePageLayout
      serviceID="STARTUP_INDIA_REGISTRATION"
      title="Startup India Registration"
      subtitle="Get DPIIT recognition and unlock tax benefits, funding access, and compliance relaxations."
      badgeText="DPIIT Recognition • Tax Benefits • Govt-backed"
      icon="rocket"
      contentTitle="Overview"
      contentDescription="Startup India Registration grants official DPIIT recognition under the Government of India’s flagship initiative. Recognized startups gain access to tax exemptions, intellectual property rebates, simplified compliance, government funding support, and faster exit mechanisms — all designed to encourage innovation and entrepreneurship."
      section1Title="Key Benefits of Startup India Registration"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-orange-500/20",
        orb2: "bg-red-500/20",
        iconBg: "from-orange-500 to-red-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-orange-500"
      primaryBg="bg-gradient-to-r from-orange-500 to-red-500"
      primaryHoverBg="bg-gradient-to-r from-orange-600 to-red-600"
    />
  );
}
