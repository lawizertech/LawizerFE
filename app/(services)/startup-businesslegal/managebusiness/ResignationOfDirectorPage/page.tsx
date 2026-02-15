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
    text: "Protects the resigning director from future penalties and liabilities",
  },
  {
    icon: "scale",
    text: "Ensures the company records are compliant under Companies Act, 2013",
  },
  {
    icon: "userMinus",
    text: "Creates an opportunity for the director to take up a new role/directorship",
  },
  {
    icon: "checkCircle",
    text: "Boosts transparency and trust among all stakeholders",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "All prior forms relating to the appointment of the Director should have been filed",
  "DIN of minimum 1 Director should be in 'approved' status (to ensure quorum)",
  "One valid Digital Signature (DSC) of an existing Director (for company filing)",
  "Resignation Letter from the resigning Director must be submitted",
];

const deliverables = [
  "All filed e-forms with MCA (DIR-12 filed by Company & DIR-11 filed by Director)",
  "MCA payment challan for filing fees",
  "Drafted Board Meeting Resolution and Minutes",
  "Drafted Resignation Acceptance Letter from the Company",
];

const sections = [
  {
    title: "Pre-Requisites for Resignation Filing",
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

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "What documents are required for director resignation?",
    a: `A) Documents required from Director:
PAN Card, Residence Proof, DIN declarations, Consent letter for appointment (DIR-2) etc.

B) Documents required from Company:
Board Meeting Resolution for Appointment and Letter of Appointment.
Lawizer will assist in preparing and filing these documents with the ROC.`,
  },
  {
    q: "What is a Resignation Letter from Director?",
    a: "When a Director wishes to step down, they officially submit a written letter to the company informing them of their voluntary resignation, specifying the effective date.",
  },
  {
    q: "Which forms are to be filed for resignation of director?",
    a: "Form **DIR-12** is filed by the company (within 30 days of acceptance) and Form **DIR-11** is filed by the resigning director (within 30 days of resignation date) with the ROC.",
  },
  {
    q: "If there are only two directors, can one resign?",
    a: "No. The company must maintain the minimum required number of directors (two for a Pvt Ltd). A new additional director must be appointed first, after which the resignation can proceed.",
  },
  {
    q: "Is there any liability after resignation?",
    a: "The resigning director remains liable only for non-compliance and actions during their tenure, but is explicitly not liable for any company actions or non-compliance occurring after the effective date of resignation.",
  },
  {
    q: "Difference between Resignation and Removal of Director?",
    a: "Resignation is **voluntary** — initiated by the director. Removal is **involuntary** — initiated by the company against the director’s will, requiring a Special Notice and Ordinary Resolution.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function ResignationOfDirectorPage() {
  return (
    <ServicePageLayout
      title="Resignation of Director & ROC Filing"
      subtitle="Ensure the voluntary resignation of a Director is legally executed, protecting both the Director (DIR-11) and the Company (DIR-12) from future liabilities and penalties."
      badgeText="Companies Act, 2013 • DIR-11 • DIR-12"
      icon="userMinus"

      serviceID="RESIGNATION_OF_DIRECTOR_&_ROC_FILING"
      contentTitle="The Importance of Formal Compliance"
      contentDescription="A Director's resignation requires dual compliance: the Company must file DIR-12 (within 30 days of acceptance) and the resigning Director must file DIR-11 (within 30 days of resignation). Failing to file DIR-11 leaves the director's name on the records and exposed to non-compliance penalties. A correctly executed process formally ends the director's statutory liabilities."
      section1Title="Key Benefits of a Compliant Resignation"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-600/20",
        orb2: "bg-purple-600/20",
        iconBg: "from-blue-500 to-purple-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-blue-500"
      primaryBg="bg-gradient-to-r from-blue-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700"
    />
  );
}
