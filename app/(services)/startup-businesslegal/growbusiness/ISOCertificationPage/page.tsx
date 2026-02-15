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
    text: "Helps in building Management processes suitable for the business",
  },
  {
    icon: "shield",
    text: "Inspires confidence and improves public image",
  },
  {
    icon: "building",
    text: "Provides eligibility to enter global markets",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "PAN Card of the organisation",
  "Address Proof of the organisation",
  "PAN card of Authorised signatory",
];

const deliverables = ["ISO CERTIFICATE"];

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
    q: "What is ISO 9001:2015?",
    a: "ISO means International Standard Organization. ISO prescribes a set of requirements, if maintained business organization, ISO certificate is issued to such organization. ISO 9001:2015 is the International Standard for Quality Management Systems (QMS). It provides a set of requirements that helps management of business to achieve customer satisfaction.",
  },
  {
    q: "What is benefit of ISO Certification in India?",
    a: "ISO certification gives the confidence that your business has the capability to provide HIGH QUALITY goods and services to its customers. Improves public image, Inspires confidence of the market and helps in growth of business, Helps in getting Govt. Tenders, Provides eligibility to enter global markets, Good marketing tool.",
  },
  {
    q: "How many days it takes to complete ISO 9001 process in India?",
    a: "It depends upon the size of the business and current level of management practices. Typically it may take from 5 to 90 working days.",
  },
  {
    q: "Who can apply for ISO 9001 standards?",
    a: "ISO 9001 standard is applicable to companies of any size or sector. Any business like Proprietorship firm, Partnership, Private Limited Companies, LLP, One Person company, Public Ltd., Trusts, NGO, Hospitals, Govt. Agencies.",
  },
  {
    q: "What are ISO certification bodies?",
    a: "They are the registered organizations eligible to issue ISO certificates to Companies adhering to ISO standards.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ISOCertificationPage() {
  return (
    <ServicePageLayout
      title="ISO Certification"
      subtitle="Achieve international standards for quality and efficiency to boost credibility and access global opportunities."
      badgeText="Globally recognized • Quality-driven • Trustworthy"
      icon="shield"
      serviceID="ISO_CERTIFICATION"
      contentTitle="Overview"
      contentDescription="ISO Certification signifies that a company adheres to established International Organization for Standardization (ISO) standards, indicating a commitment to quality and efficient management systems."
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
