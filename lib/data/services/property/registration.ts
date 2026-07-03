import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  "property-registration": {
    title: "Property Registration (Sale Deed Registration)",
    subtitle: "Register your property safely and hassle-free with expert legal support.",
    badgeText: "Lawizer \u2014 Making Property Registration Easy, Transparent & Legally Secure.",
    icon: "gavel",
    serviceID: "PROPERTY_REGISTRATION",
    contentTitle: "Key Benefits of Lawizer",
    contentDescription: "",
    section1Title: "Service Highlights",
    price: 999,
    originalPrice: 8999,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-red-500 to-orange-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-600",
    primaryBg: "bg-gradient-to-r from-red-600 to-orange-600",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-orange-700",
    benefits: [
      {
        icon: "shield",
        description: "Makes Property Registration Easy, Transparent & Legally Secure",
      },
      {
        icon: "gavel",
        description: "Ensures all government compliances are met",
      },
      {
        icon: "users",
        description: "Verifies ownership papers and checks stamp duty charges",
      },
      {
        icon: "scale",
        description: "Ensures a smooth, legally valid transfer of ownership",
      },
      {
        icon: "fileText",
        description: "Guidance from drafting to final registration",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of property registration?",
        answer: "It makes ownership transfer legally valid and officially recorded.",
      },
      {
        question: "Difference between Stamp Duty and Registration Charge?",
        answer: "Stamp duty is tax on ownership transfer; registration charge records it officially.",
      },
      {
        question: "What if stamp duty is deficient?",
        answer: "Sub-Registrar may refuse registration.",
      },
      {
        question: "Are witnesses mandatory?",
        answer: "Yes, seller and purchaser must be present with two witnesses.",
      },
      {
        question: "Does Lawizer assist with location requirements?",
        answer: "Yes, Lawizer ensures compliance with local registration rules.",
      },
    ],
    sections: [
      {
        title: "Procedure of Property Registration",
        icon: "fileText",
        type: "list",
        data: [
          "Submit documents to Sub-Registrar within property jurisdiction.",
          "Seller, purchaser, and two witnesses must be present.",
          "Carry valid ID proofs (Aadhaar, PAN, etc.).",
          "Provide valid POA if representing another person.",
          "Company transactions require Board Resolution & authorization.",
          "Present ownership documents & stamp duty proof.",
          "Sub-Registrar verifies stamp duty as per ready reckoner rates.",
          "Witness biometric verification required.",
        ],
      },
      {
        title: "Tentative Pre-Requisites",
        icon: "home",
        type: "grid",
        data: [
          "Estimation of property value",
          "Sale deed",
          "Stamp duty & registration charge payment",
          "Approaching Sub-Registrar",
          "Submission of required documents",
          "Other local jurisdictional documents",
        ],
      },
    ],
    addons: [
      "Sale Deed\\nVerification",
      "Stamp Duty\\nCalculation Support",
      "Complete\\nRegistration Guidance",
      "Location-Specific\\nCompliance Check",
    ],
  },
  "gift-deed": {
    title: "Gift Deed Drafting & Registration",
    subtitle: "Legally transfer ownership of property or assets voluntarily and securely.",
    badgeText: "Lawizer ensures your Gift Deed is legally compliant and registered.",
    icon: "heart",
    serviceID: "GIFT_DEED_DRAFTING_&_REGISTRATION",
    contentTitle: "Why a Registered Gift Deed is Important",
    contentDescription:
      "A registered Gift Deed legally transfers ownership without consideration and prevents future disputes.",
    section1Title: "Key Benefits of Gift Deed Registration",
    price: 999,
    originalPrice: 6499,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-pink-500/20",
      iconBg: "from-red-500 to-pink-500",
      badgeText: "text-pink-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-500 to-pink-500",
    primaryHoverBg: "bg-gradient-to-r from-red-600 to-pink-600",
    benefits: [
      {
        icon: "scale",
        description: "Legal ownership transfer without monetary exchange",
      },
      {
        icon: "shield",
        description: "Protects donor and donee rights",
      },
      {
        icon: "fileText",
        description: "Essential for property registration and mutation",
      },
      {
        icon: "users",
        description: "Formalizes voluntary transfer of assets",
      },
      {
        icon: "home",
        description: "Secures family property transactions",
      },
      {
        icon: "checkCircle",
        description: "Ensures the deed is legally valid and registered",
      },
    ],
    faqs: [
      {
        question: "What is a Gift Deed?",
        answer: "A Gift Deed transfers ownership voluntarily without monetary consideration.",
      },
      {
        question: "Is registration mandatory?",
        answer: "Yes, registration is mandatory for immovable property to be legally valid.",
      },
      {
        question: "What is the stamp duty?",
        answer: "Stamp duty varies by state and relationship between donor and donee.",
      },
      {
        question: "Can a Gift Deed be revoked?",
        answer: "Generally no, unless specific revocation clause or legal grounds exist.",
      },
      {
        question: "Why use Lawizer?",
        answer: "Lawizer ensures legal validity, compliance, and protection of rights.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Gift Deed Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Donor and donee details (name, address, ID)",
          "Property/asset details (address, type, area)",
          "Consent and signature of donor",
          "Supporting Documents (Original title deed, tax receipts, ID proofs)",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "home",
        type: "grid",
        data: [
          "Drafted and registered Gift Deed",
          "Clause-wise explanation",
          "Digital copy",
          "Step-by-step registration guidance",
          "Legally valid deed protecting both parties",
        ],
      },
    ],
    addons: [
      "Drafted & Registered\\nGift Deed",
      "Clause-wise\\nExplanation",
      "Step-by-Step\\nRegistration Support",
      "Digital Copy\\nProvided",
    ],
  },
};
