"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "scale",
    text: "Ensures compliance under IT Act, GDPR, and other data protection regulations.",
  },
  {
    icon: "shield",
    text: "Protects both the business and users legally.",
  },
  {
    icon: "users",
    text: "Builds trust and transparency with users.",
  },
  {
    icon: "fileText",
    text: "Tailored policies for websites, apps, and software platforms.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Business and platform details",
      "Data collection, storage, and usage practices",
      "User rights, obligations, and prohibited actions",
      "Cookies, tracking, and third-party integrations",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Customized Privacy Policy drafting",
      "Clear and enforceable Terms of Use",
      "Regulatory-aligned disclosures and disclaimers",
      "Policies tailored to your platform’s business model",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Privacy Policy?",
    a: "A Privacy Policy is a legal document that explains how user data is collected, stored, processed, and protected by a website, app, or digital platform.",
  },
  {
    q: "Why are Privacy Policy and Terms of Use mandatory?",
    a: "These documents are essential for legal compliance under the IT Act, GDPR, and global regulations, and they protect businesses from legal disputes.",
  },
  {
    q: "What does a Terms of Use document cover?",
    a: "It defines the rules, rights, responsibilities, and limitations for users accessing and using your website, app, or services.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function PrivacyTermsOfUsePage() {
  return (
    <ServicePageLayout
      title="Privacy Policy & Terms of Use Drafting"
      subtitle="Essential legal documents governing data protection and platform usage."
      badgeText="IT Act • GDPR • Digital compliance"
      icon="scale"
      contentTitle="Why Privacy & Terms Documents Are Non-Negotiable"
      contentDescription="Privacy Policies and Terms of Use are legally mandatory for digital platforms. They ensure regulatory compliance, mitigate legal risk, and build long-term trust with users."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-500/20",
        orb2: "bg-indigo-500/20",
        iconBg: "from-blue-500 to-indigo-500",
        badgeText: "text-indigo-300",
      }}
      primaryColor="text-blue-600"
      primaryBg="bg-gradient-to-r from-blue-600 to-indigo-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-indigo-700"
    />
  );
}
