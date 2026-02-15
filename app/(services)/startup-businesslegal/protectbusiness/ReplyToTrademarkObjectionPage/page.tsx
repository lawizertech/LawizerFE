"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  {
    icon: "shield",
    text: "Protection against Copycats: Strengthens your claim over the brand",
  },
  {
    icon: "checkCircle",
    text: "Secures a Valuable Asset: A registered brand is a critical company asset",
  },
  {
    icon: "fileText",
    text: "Aids in Business Growth: Supports your brand expansion",
  },
  {
    icon: "calendar",
    text: "Builds Credibility: Establishes trust and market credibility",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = ["Trademark Application Number"];

const deliverables = [
  "Reply drafting support and facilitation",
  "Trademark Registry filing receipt",
  "Screenshot of the reply filing",
];

const sections = [
  {
    title: "Prerequisites for Filing Reply",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "calendar",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Trademark Objection?",
    a: "A Trademark Objection means the trademark registry has examined your application and found reasons to object. The objection is issued by the Trademark Department, not a third party.",
  },
  {
    q: "Why is it important to file a reply?",
    a: "A proper reply must be submitted within 30 days of the examination report. Failure to respond may result in the application being marked as 'Abandoned'.",
  },
  {
    q: "How do you respond to a Trademark Objection?",
    a: "Responses require legal understanding and professional drafting. Expert assistance ensures objections are addressed correctly and convincingly.",
  },
  {
    q: "What happens after filing the reply?",
    a: "The reply is submitted online. The application status remains 'Objected' until examination by the Trademark Registry, which typically takes 6–12 months.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ReplyToTrademarkObjectionPage() {
  return (
    <ServicePageLayout
      title="Reply to Trademark Objection"
      subtitle="Defend your trademark application with a professionally drafted and timely response."
      badgeText="Trademark Objection • Reply Filing"
      icon="fileWarning"

      serviceID="REPLY_TO_TRADEMARK_OBJECTION"
      contentTitle="Why Replying to a Trademark Objection Matters"
      contentDescription="When the Trademark Registry raises an objection, a legally sound reply must be filed within 30 days. A strong response protects your brand from abandonment, strengthens your ownership claim, and moves your application closer to registration."
      section1Title="Key Benefits of Filing a Proper Reply"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-yellow-400/20",
        orb2: "bg-red-500/20",
        iconBg: "from-yellow-400 to-red-500",
        badgeText: "text-yellow-200",
      }}
      primaryColor="text-red-500"
      primaryBg="bg-gradient-to-r from-red-500 to-yellow-500"
      primaryHoverBg="bg-gradient-to-r from-red-600 to-yellow-600"
    />
  );
}
