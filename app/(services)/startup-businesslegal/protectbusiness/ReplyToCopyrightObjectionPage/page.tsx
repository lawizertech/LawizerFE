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
    text: "Protection against Copycats and Unauthorized Use",
  },
  {
    icon: "checkCircle",
    text: "Enhances Credibility and Market Reputation",
  },
  {
    icon: "fileText",
    text: "Supports Business Growth and Expansion",
  },
  {
    icon: "calendar",
    text: "Secures Legal Backing and Timely Filing",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = ["Copyright Diary Number", "Copyright Objection Notice"];

const deliverables = [
  "Reply Drafting Support and Facilitation",
  "Filing Receipt for the Reply",
];

const sections = [
  {
    title: "Pre-Requisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Deliverables",
    icon: "calendar",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "What is Copyright Objection?",
    a: "Copyright Objection means the copyright department has examined your application and raised concerns. You must respond to clarify and justify your claim.",
  },
  {
    q: "Why file a Reply to Copyright Objection?",
    a: "Submitting a reply within the prescribed time (15–30 days) is crucial. Failure to respond can lead to rejection of your application.",
  },
  {
    q: "How to Respond to Copyright Objection?",
    a: "The response requires legal drafting expertise. Our experts help prepare and file the reply according to your objection’s grounds.",
  },
  {
    q: "What happens after filing the reply?",
    a: "The copyright department reviews the submitted reply and proceeds with the registration process upon acceptance.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function ReplyToCopyrightObjectionPage() {
  return (
    <ServicePageLayout
      title="Reply to Copyright Objection"
      subtitle="File a professional reply to copyright objections and secure your registration without delays."
      badgeText="Legal Drafting • Timely Filing • Expert Handling"
      icon="penTool"
      contentTitle="Why Responding to an Objection Matters"
      contentDescription="When the Copyright Office raises an objection, it means your application requires clarification or justification. A well-drafted and timely reply is mandatory to avoid rejection. Our legal experts analyze the objection grounds, prepare a professional response, and ensure correct filing within the prescribed timeline."
      section1Title="Key Benefits of Filing a Proper Reply"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-yellow-500/20",
        orb2: "bg-red-500/20",
        iconBg: "from-yellow-500 to-red-500",
        badgeText: "text-yellow-300",
      }}
      primaryColor="text-blue-600"
      primaryBg="bg-gradient-to-r from-[#c92c41] to-[#4c3df7]"
      primaryHoverBg="bg-gradient-to-r from-[#4c3df7] to-[#c92c41]"
    />
  );
}
