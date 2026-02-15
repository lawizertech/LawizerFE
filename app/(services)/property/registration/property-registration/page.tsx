import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS (UNCHANGED MEANING) ---------- */

const benefits = [
  {
    icon: "shield",
    text: "Makes Property Registration Easy, Transparent & Legally Secure",
  },
  {
    icon: "gavel",
    text: "Ensures all government compliances are met",
  },
  {
    icon: "users",
    text: "Verifies ownership papers and checks stamp duty and registration charges",
  },
  {
    icon: "scale",
    text: "Ensures a smooth, legally valid transfer of ownership",
  },
  {
    icon: "fileText",
    text: "Guidance through the entire process, from document drafting to final registration",
  },
] satisfies BenefitItem[];

/* ---------- ORIGINAL PROCEDURE (RESTORED, DETAILED) ---------- */

const registrationProcedure = [
  "Documents must be submitted to the Sub-Registrar of Assurances within whose jurisdiction the property is situated.",
  "The authorised signatories for the seller and the purchaser must be present along with two witnesses for registration.",
  "All signatories must carry valid proof of identity such as Aadhaar Card, PAN Card, or other government-issued ID.",
  "If any signatory is representing another person, a valid Power of Attorney must be furnished.",
  "In case of company transactions, authorised representatives must carry documents such as a Power of Attorney or Letter of Authority along with a copy of the Board Resolution.",
  "The property card, original ownership documents, and proof of stamp duty payment must be presented to the Sub-Registrar.",
  "The Sub-Registrar will verify whether adequate stamp duty has been paid as per the applicable ready reckoner rates.",
  "Witnesses must establish their identity by submitting ID and address proofs, and their biometric identity will also be recorded.",
];

/* ---------- ORIGINAL PRE-REQUISITES (RESTORED) ---------- */

const prerequisites = [
  "Estimation of the property value",
  "Sale deed",
  "Payment of stamp duty and registration charges",
  "Approaching the Sub-Registrar for registration",
  "Submission of documents",
  "Other documents as per local jurisdictional requirements",
];

/* ---------- SECTIONS (STRUCTURE ONLY) ---------- */

const sections = [
  {
    title: "Procedure of Property Registration",
    icon: "fileText",
    type: "list",
    data: registrationProcedure,
  },
  {
    title: "Tentative Pre-Requisites",
    icon: "home",
    type: "grid",
    data: prerequisites,
  },
] satisfies SectionBlock[];

/* ---------- FAQs (RESTORED, EXPANDED) ---------- */

const faqs = [
  {
    q: "What is the purpose of property registration?",
    a: "Property registration makes the transfer of ownership legally valid and enforceable. It is the formal process of officially recording the transaction in government records.",
  },
  {
    q: "What is the difference between Stamp Duty and Registration Charge?",
    a: "Stamp duty is the tax paid to the government for acquiring legal ownership of an asset, whereas the registration charge is the fee paid to officially record this legal transaction in government records.",
  },
  {
    q: "What happens if stamp duty is deficient?",
    a: "If there is any deficit in the stamp duty paid, the Sub-Registrar has the authority to refuse registration of the documents.",
  },
  {
    q: "Are witnesses mandatory for property registration?",
    a: "Yes. The authorised signatories for both the seller and the purchaser must be present along with two witnesses. Witnesses are also required to establish their identity during registration.",
  },
  {
    q: "Does Lawizer assist with location-specific registration requirements?",
    a: "Yes. Lawizer assists with verifying ownership papers, checking applicable charges, and ensuring compliance with location-specific requirements to facilitate a smooth and legally valid transfer.",
  },
] satisfies FAQItem[];

/* ---------- PAGE ---------- */

export default function PropertyRegistrationPage() {
  return (
    <ServicePageLayout
      title="Property Registration (Sale Deed Registration)"
      subtitle="Register your property safely and hassle-free with expert legal support, from document verification to final submission."
      badgeText="Lawizer — Making Property Registration Easy, Transparent & Legally Secure."
      icon="gavel"

      serviceID="PROPERTY_REGISTRATION"
      contentTitle="Key Benefits of Lawizer's Registration Support"
      section1Title="Service Highlights"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-red-500/20",
        orb2: "bg-orange-500/20",
        iconBg: "from-red-500 to-orange-500",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-red-600"
      primaryBg="bg-gradient-to-r from-red-600 to-orange-600"
      primaryHoverBg="bg-gradient-to-r from-red-700 to-orange-700"
    />
  );
}
