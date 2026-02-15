"use client";

import { toast } from "sonner";
import { serverApi } from "@/lib/apis/axios";
import { useState } from "react";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- SERVICE META ---------- */

const SERVICE_CODE = "CO_FOUNDER_AGREEMENT";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "gavel",
    text: "Prevents conflicts among founders by clearly defining rights and obligations.",
  },
  {
    icon: "checkCircle",
    text: "Clarifies equity ownership, contributions, and decision-making authority.",
  },
  {
    icon: "shield",
    text: "Protects business continuity and investor confidence.",
  },
  {
    icon: "fileText",
    text: "Defines roles, responsibilities, profit-sharing, and exit mechanisms.",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const sections = [
  {
    type: "alert",
    data: {
      type: "warning",
      title: "Critical for Every Startup",
      description:
        "Lack of a Co-Founder Agreement is one of the biggest reasons for startup failure and investor rejection.",
    },
  },
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Founder details, roles, and equity distribution",
      "Decision-making mechanisms and voting rights",
      "Contributions (monetary, intellectual property, or assets)",
      "Exit, vesting, and dispute resolution clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Startup-specific co-founder agreement",
      "Equity, vesting, and dilution-safe clauses",
      "Governance and decision-making framework",
      "Exit, deadlock, and dispute resolution provisions",
    ],
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Co-Founder Agreement?",
    a: "It is a legal contract between startup founders defining equity ownership, roles, responsibilities, decision-making, and exit mechanisms.",
  },
  {
    q: "Why is a Co-Founder Agreement important?",
    a: "It prevents founder disputes, protects the startup’s future, and is essential for raising external investment.",
  },
  {
    q: "Does it cover intellectual property?",
    a: "Yes. It clearly assigns ownership of intellectual property created by founders to the company.",
  },
  {
    q: "Can the agreement be customized?",
    a: "Absolutely. Lawizer drafts agreements tailored to your startup’s structure, stage, and long-term vision.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function CoFounderAgreementPage() {
  const [requesting, setRequesting] = useState(false);

  const handleStartService = async () => {
    try {
      setRequesting(true);

      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login to continue");
        return;
      }

      const res = await serverApi.post("/api/user/service-request", {
        serviceCode: SERVICE_CODE,
      });

      if (!res.data?.success) {
        toast.error(res.data?.message || "Failed to start service");
        return;
      }

      toast.success("Service request submitted successfully 🎉");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setRequesting(false);
    }
  };

  return (
    <ServicePageLayout
      title="Co-Founder Agreement Drafting"
      subtitle="A legally enforceable agreement defining equity, roles, responsibilities, and exit mechanisms for startup founders."
      badgeText="Startup-ready • Investor-friendly • Dispute-proof"
      icon="users"

      serviceID="CO-FOUNDER_AGREEMENT_DRAFTING"
      contentTitle="Why a Co-Founder Agreement Is Crucial"
      contentDescription="A Co-Founder Agreement establishes clarity among founders, safeguards intellectual property, and creates a strong legal foundation required for scaling and raising investment."
      section1Title="Key Protections & Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-indigo-500/20",
        orb2: "bg-purple-500/20",
        iconBg: "from-indigo-500 to-purple-500",
        badgeText: "text-purple-300",
      }}
      primaryColor="text-indigo-600"
      primaryBg="bg-gradient-to-r from-indigo-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-indigo-700 to-purple-700"
    />
  );
}
