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
    text: "Grants exclusive legal rights to use your brand name, logo, or slogan",
  },
  {
    icon: "shield",
    text: "Protection against misuse or infringement by competitors",
  },
  {
    icon: "trendingUp",
    text: "Enhances business credibility and brand value",
  },
  {
    icon: "fileText",
    text: "Allows use of ® symbol",
  },
  {
    icon: "building2",
    text: "Enables trademark licensing, assignment and franchising",
  },
  {
    icon: "trendingUp",
    text: "Essential for online marketplaces, export, and government tenders",
  },
  {
    icon: "shield",
    text: "TM registration can provide strong legal standing in disputes",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "For Individuals/Sole Proprietors/MSME/Startups: Applicant’s PAN card, Address proof, MSME/Udhyam/Startup recognition if applicable (for fee concession), Aadhaar card/Passport/Driving License",
  "For Companies/LLP/Partnership Firms: Company/LLP Incorporation Certificate/Partnership Deed, PAN card of entity, Address proof of authorized signatory/partners/directors, Udyam Registration Certificate for MSME discount if applicable, TM-48 Form (authorizes attorney/agent), Copy of logo (optional, required for device marks)",
];

const deliverables = [
  "Acknowledgment Receipt with TM Application Number",
  "Registered Trademark Certificate (upon approval)",
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
    q: "What can be registered as a trademark?",
    a: "Names, logos, symbols, slogans, shapes, and combinations used to distinguish goods/services.",
  },
  {
    q: "How long does the process take?",
    a: "The legal process involves several stages (filing, examination, publication, registration) and generally takes approximately 6–12 months if uncontested by third parties.",
  },
  {
    q: "Can a trademark be renewed?",
    a: "Yes, a registered trademark is valid for 10 years and can be renewed indefinitely by paying the prescribed renewal fee (Form TM-R).",
  },
  {
    q: "What if my application is objected to?",
    a: "If the Examiner raises an objection in the Examination Report, you must file a formal reply within 30 days. You may also be required to attend a hearing.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function TrademarkRegistrationPage() {
  return (
    <ServicePageLayout
      title="Trademark Registration"
      subtitle="Secure exclusive rights to your brand identity and safeguard against infringement."
      badgeText="Brand Protection • ® Rights • Legal Enforcement"
      icon="penTool"
      contentTitle="Overview"
      contentDescription="Trademark registration is a legal process for securing exclusive rights over a distinctive brand name, logo, slogan, or symbol that identifies your goods or services. Registered trademarks protect your intellectual property, prevent unauthorized use, and build brand credibility. A registered trademark is valid for 10 years and can be renewed indefinitely."
      section1Title="Key Benefits of Trademark Registration"
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
