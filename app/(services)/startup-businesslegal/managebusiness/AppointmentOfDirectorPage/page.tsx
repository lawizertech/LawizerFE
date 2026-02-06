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
    text: "Boosts transparency and trust among stakeholders",
  },
  {
    icon: "shield",
    text: "Protection from penalty and legal actions",
  },
  {
    icon: "home",
    text: "Eligibility to raise unsecured loans from the Director (as applicable)",
  },
  {
    icon: "checkCircle",
    text: "Ensures compliance under the Companies Act, 2013",
  },
  {
    icon: "users",
    text: "Formalizes the structure and decision-making authority of the Board",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "ROC Return filing must be up to date",
  "DIN of minimum 1 director should be in 'Approved' status",
  "One valid DSC (Digital Signature Certificate) of an existing director",
  "Appointee must be an Indian Resident (if required)",
];

const deliverables = [
  "All filed e-forms with MCA (DIR-12)",
  "MCA payment challan",
  "Board Resolution draft",
  "Consent letter draft (DIR-2)",
  "Proper record keeping and statutory compliance",
];

const sections = [
  {
    title: "Pre-Requisites for Director Appointment",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "home",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What documents are required for director appointment?",
    a: `A) Documents required from Director:
PAN Card, Residence Proof, DIN declarations, Consent letter for appointment (DIR-2) etc.

B) Documents required from Company:
Board Meeting Resolution for Appointment and Letter of Appointment.
Lawizer will assist in preparing and filing these documents with the ROC.`,
  },
  {
    q: "What is Consent Letter from Director?",
    a: "A Consent Letter (Form DIR-2) is the written approval by the proposed director confirming acceptance of appointment. It must be submitted to the company before filing DIR-12.",
  },
  {
    q: "What form is filed for adding a director?",
    a: "Form DIR-12 is filed with the MCA portal to notify the appointment of a director.",
  },
  {
    q: "What are the fees and charges for appointing a director?",
    a: "Filing DIR-12 within the time limit generally attracts a nominal fee. Standard filing fee example: ₹300 (subject to MCA fee schedule).",
  },
  {
    q: "Minimum number of directors required in a company?",
    a: "Private Limited Company: 2 Directors. One Person Company: 1 Director. Public Limited Company: 3 Directors.",
  },
  {
    q: "Maximum number of directors allowed?",
    a: "Default maximum is 15 directors. To exceed 15, the company must follow the procedural steps under the Companies Act.",
  },
  {
    q: "Minimum age to become a director?",
    a: "Minimum age is 18 years. For a Managing Director, minimum age is typically 21 years where applicable.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function AppointmentOfDirectorPage() {
  return (
    <ServicePageLayout
      title="Appointment of Director & DIR-12 Filing"
      subtitle="Legally add a director to your Board, handling board resolutions, DIR-12 filing, and MCA formalities to ensure full compliance."
      badgeText="Companies Act compliant • MCA filing • Board governance"
      icon="users"
      contentTitle="The Importance of Formal Appointment"
      contentDescription="Appointing a director is a statutory requirement that involves specific forms (DIR-2 and DIR-12), board approvals, and filing with the Registrar of Companies (ROC). A compliant appointment is essential for legal validity and governance."
      section1Title="Key Benefits of a Compliant Appointment"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-blue-500/20",
        orb2: "bg-purple-500/20",
        iconBg: "from-blue-500 to-purple-500",
        badgeText: "text-blue-300",
      }}
      primaryColor="text-blue-600"
      primaryBg="bg-gradient-to-r from-blue-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700"
    />
  );
}
