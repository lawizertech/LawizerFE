"use client";

import { toast } from "sonner";
import { useState } from "react";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "shield",
    text: "Protects the legal and financial interests of both the consultant and the company.",
  },
  {
    icon: "checkCircle",
    text: "Clearly defines scope of work, deliverables, timelines, and payment terms.",
  },
  {
    icon: "users",
    text: "Prevents misuse of confidential and proprietary information.",
  },
  {
    icon: "fileText",
    text: "Customized drafting aligned with your business requirements.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    type: "alert",
    data: {
      type: "info",
      title: "Avoid Scope & Payment Disputes",
      description:
        "A properly drafted Consultancy Agreement prevents scope creep, delayed payments, and confidentiality breaches.",
    },
  },
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Consultant and company details",
      "Scope of work and deliverables",
      "Fees, payment schedule, and duration",
      "Confidentiality and IP ownership requirements",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Tailored consultancy agreement",
      "Clear scope and milestone definition",
      "Payment and termination clauses",
      "Confidentiality and IP protection",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Consultancy Agreement?",
    a: "It is a legal contract defining the relationship, scope of work, deliverables, fees, and confidentiality obligations between a consultant and a company.",
  },
  {
    q: "Why is defining scope important?",
    a: "Clear scope prevents disputes related to additional work, delayed delivery, and payment conflicts.",
  },
  {
    q: "Does it protect confidential information?",
    a: "Yes. The agreement includes confidentiality and non-disclosure clauses to safeguard sensitive business information.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ConsultancyAgreementPage() {
  return (
    <ServicePageLayout
      title="Consultancy Agreement Drafting"
      subtitle="A legally binding contract defining scope, deliverables, fees, and confidentiality for consultancy engagements."
      badgeText="Clear scope • Secure payments • Confidentiality protected"
      icon="fileText"
      contentTitle="Why a Consultancy Agreement Is Essential"
      contentDescription="A Consultancy Agreement sets clear expectations, protects confidential information, and provides a legally enforceable framework for professional engagements."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-cyan-500/20",
        orb2: "bg-blue-500/20",
        iconBg: "from-cyan-500 to-blue-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-cyan-600"
      primaryBg="bg-gradient-to-r from-cyan-600 to-blue-600"
      primaryHoverBg="bg-gradient-to-r from-cyan-700 to-blue-700"
    />
  );
}
