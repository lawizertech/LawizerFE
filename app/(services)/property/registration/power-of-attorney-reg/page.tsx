"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS (UNCHANGED DATA) ---------- */

const benefits = [
  {
    icon: "gavel",
    text: "A registered POA is legally enforceable and accepted by government and financial institutions.",
  },
  {
    icon: "shield",
    text: "Lawizer guides you through West Bengal registration requirements to ensure the POA is valid for property or legal matters.",
  },
  {
    icon: "users",
    text: "Prevents legal disputes by establishing the validity of the power granted.",
  },
] satisfies BenefitItem[];

/* ---------- DELIVERABLES (UNCHANGED DATA) ---------- */

const deliverables = [
  "Guidance on stamp duty & registration",
  "Registered POA document",
  "Step-by-step process support",
];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    title: "Lawizer Deliverables",
    icon: "fileText",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs (UNCHANGED DATA) ---------- */

const faqs = [
  {
    q: "Why is registering a POA necessary?",
    a: "A registered Power of Attorney is legally enforceable and is required to be accepted by various government and financial institutions, especially for property transactions.",
  },
  {
    q: "Is POA registration mandatory for all types of powers?",
    a: "Registration is generally mandatory for POAs concerning the sale or transfer of immovable property to ensure legal validity and recognition under the Registration Act.",
  },
  {
    q: "What is included in Lawizer's registration guidance?",
    a: "Lawizer provides guidance on applicable stamp duty and registration fees, along with step-by-step support for the entire process.",
  },
  {
    q: "How does the Sub-Registrar verify the POA?",
    a: "During the registration process, the Sub-Registrar verifies the identity of the Principal (or the person executing the POA) and the Agent, ensuring the document is legally executed and authenticated.",
  },
  {
    q: "Can a POA be registered if the Principal is overseas?",
    a: "Yes, a POA executed outside India must be authenticated by the Indian Embassy or Consulate and then stamped and registered in India within a specified time frame.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function PowerOfAttorneyRegistrationPage() {
  return (
    <ServicePageLayout
      title="Registration of Power of Attorney (POA)"
      subtitle="Ensure your Power of Attorney is legally enforceable and valid for property and financial matters by completing the official registration process."
      badgeText="Lawizer guides you through West Bengal registration requirements to ensure the POA is valid for property or legal matters."
      icon="gavel"

      serviceID="REGISTRATION_OF_POWER_OF_ATTORNEY"
      contentTitle="Why POA Registration is Mandatory for Property"
      contentDescription="For property sale, transfer, or significant legal transactions, registration is key. It converts the POA into a public record, enhancing its authenticity and preventing legal challenges to the actions taken by the attorney."
      section1Title="Key Benefits of Lawizer's POA Registration Support"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-indigo-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-indigo-500 to-blue-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-indigo-600"
      primaryBg="bg-gradient-to-r from-indigo-600 to-blue-600"
      primaryHoverBg="bg-gradient-to-r from-indigo-700 to-blue-700"
    />
  );
}
