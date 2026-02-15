"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "users",
    text: "Protects rights of landowner and developer including ownership, profit-sharing, and responsibilities.",
  },
  {
    icon: "shield",
    text: "Prevents disputes related to construction delays, payments, or possession timelines.",
  },
  {
    icon: "scale",
    text: "Ensures compliance with property, contract, municipal, and development laws.",
  },
  {
    icon: "clock",
    text: "Defines clear project timelines, milestones, approvals, and handover schedules.",
  },
  {
    icon: "fileText",
    text: "Acts as enforceable legal evidence in case of disputes or breach of terms.",
  },
  {
    icon: "factory",
    text: "Secures investment and clearly defines revenue-sharing mechanisms.",
  },
] satisfies BenefitItem[];

/* ---------- PRE-REQUISITES ---------- */

const prerequisites = [
  "Landowner details including identity proofs and ownership documents",
  "Developer details such as company registration, PAN, contact information, and prior project experience",
  "Property details including location, area, and clear land title proof",
  "Development terms covering profit-sharing ratio, timelines, construction standards, and approvals",
  "Optional clauses for penalties, dispute resolution, exit terms, and guarantees",
];

/* ---------- DELIVERABLES ---------- */

const deliverables = [
  "Legally drafted Joint Development Agreement tailored to your property and project",
  "Clause-wise explanation of obligations and rights for both landowner and developer",
  "Digital and editable copy ready for signing and registration",
  "Guidance for registration and government approvals under applicable laws",
  "Expert legal consultation to ensure smooth project execution",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Information Required for Drafting",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What Lawizer Delivers",
    icon: "factory",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Joint Development Agreement (JDA)?",
    a: "A Joint Development Agreement is a legal contract between a landowner and a developer that defines rights, responsibilities, profit-sharing, construction timelines, and legal obligations for developing a property.",
  },
  {
    q: "Why is a professionally drafted JDA important?",
    a: "A properly drafted JDA prevents disputes, clearly defines profit-sharing and timelines, and serves as strong legal evidence in case of disagreements.",
  },
  {
    q: "What should a landowner carefully review in a JDA?",
    a: "Landowners should ensure clarity on revenue share, developer responsibilities, approval timelines, penalties, and dispute resolution clauses.",
  },
  {
    q: "Is a JDA suitable for both residential and commercial projects?",
    a: "Yes. Lawizer drafts customized JDAs for residential, commercial, and mixed-use developments while ensuring legal compliance.",
  },
  {
    q: "Does Lawizer assist with registration and approvals?",
    a: "Yes. Lawizer provides end-to-end support including drafting, legal consultation, and guidance on registration and statutory approvals.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function JointDevelopmentAgreementPage() {
  return (
    <ServicePageLayout
      title="Joint Development Agreement (JDA)"
      subtitle="A legally binding agreement between a landowner and developer defining responsibilities, profit-sharing, timelines, and legal safeguards for property development."
      badgeText="Lawizer ensures your Joint Development Agreement is professionally drafted, compliant, and legally enforceable."
      icon="factory"

      serviceID="JOINT_DEVELOPMENT_AGREEMENT"
      contentTitle="Why a Joint Development Agreement Is Crucial"
      contentDescription="A Joint Development Agreement governs the entire lifecycle of a development project. It establishes legal clarity on revenue sharing, construction obligations, approvals, timelines, and rights of both the landowner and developer, reducing risks and ensuring smooth project execution."
      section1Title="Key Protections and Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-teal-500/20",
        orb2: "bg-green-500/20",
        iconBg: "from-teal-500 to-green-500",
        badgeText: "text-green-300",
      }}
      primaryColor="text-green-600"
      primaryBg="bg-gradient-to-r from-teal-500 to-green-600"
      primaryHoverBg="bg-gradient-to-r from-teal-600 to-green-700"
    />
  );
}
