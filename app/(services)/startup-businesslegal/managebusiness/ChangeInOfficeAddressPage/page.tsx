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
    text: "Protection from Penalty and Legal actions",
  },
  {
    icon: "checkCircle",
    text: "Ensures smooth government communication and compliance",
  },
  {
    icon: "home",
    text: "Boosts Transparency and Trust among stakeholders",
  },
  {
    icon: "fileText",
    text: "Avoids legal complications due to outdated records",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Form INC-20A for Commencement of Business should have been filed",
  "Copy of Latest Utility Bill of New office (Not Older than 45 Days)",
  "Copy of Rental Agreement/Sale Deed of the new office",
  "DIN of minimum 1 Director should be in 'APPROVED' Status",
  "One Valid Digital Signature (DSC) of an existing Director.",
];

const deliverables = [
  "Board Resolution draft for shifting of office",
  "Filed e-form INC-22 with MCA",
  "MCA payment challan and acknowledgment",
  "Guidance on post-filing statutory updates (Name Plate, Letterhead)",
  "Declaration for Shifting of Registered Office",
];

const sections = [
  {
    title: "Documentation and Pre-Requisites",
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
    q: "What documents are required for Office Address Change?",
    a: "New Address Proof, Board Resolution, NOC for Shifting of Registered Office and Declaration for Shifting of Registered Office. Lawizer will guide in the document preparation and filing of Forms.",
  },
  {
    q: "What are the fees and charges for Shifting of Office Address?",
    a: "Rs. 300 is for Form INC-22 if filed within the prescribed time limit. Note that Stamp Duty on the Rent/Lease Agreement is a separate, variable cost.",
  },
  {
    q: "What Forms are to be filed for changing the Company Address?",
    a: "Form INC-22 is the primary form filed with the ROC to notify the change. Other forms (like MGT-14 or INC-28) may be required depending on the type of shift (e.g., state change).",
  },
  {
    q: "What is time limit to file change of office address documents with ROC?",
    a: "The time limit is **30 days** from passing of the Board Resolution for shifting of Registered Office.",
  },
  {
    q: "What actions need to be taken after shifting of registered office address of Company?",
    a: "The Name Plate mentioning the address has to be modified, the Letterhead of the Company has to be changed, the Statutory Register has to be shifted to the new registered office, Shop Act License & PAN card need to be updated.",
  },
  {
    q: "What are different types of Registered Office Shifting?",
    a: "a) Within the Local Limits of the City\nb) Within the limits of the same ROC\nc) Within the same state but different ROC (Only in case of Maharashtra and Tamil Nadu)\nd) From one state to another (Complex process requiring Central Government approval).",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function ChangeInOfficeAddressPage() {
  return (
    <ServicePageLayout
      title="Change in Registered Office Address"
      subtitle="Update your company’s statutory address legally and compliantly, ensuring all ROC filings (INC-22) are completed on time."
      badgeText="ROC compliant • INC-22 filing • Timely updates"
      icon="mapPin"
      contentTitle="The Importance of Timely Filing"
      contentDescription="Changing your registered office address is a mandatory, multi-step compliance process. It requires passing a Board Resolution and filing Form INC-22 with the Registrar of Companies (ROC) within 30 days of the resolution. Timely compliance prevents penalties and maintains your company's legal status."
      section1Title="Key Benefits of Proper Address Filing"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-yellow-500/20",
        orb2: "bg-orange-500/20",
        iconBg: "from-yellow-500 to-orange-500",
        badgeText: "text-yellow-300",
      }}
      primaryColor="text-blue-600"
      primaryBg="bg-gradient-to-r from-blue-600 to-purple-600"
      primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700"
    />
  );
}
