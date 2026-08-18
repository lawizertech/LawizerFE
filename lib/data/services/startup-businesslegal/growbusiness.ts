import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  ISOCertificationPage: {
    title: "ISO Certification",
    subtitle:
      "Achieve international standards for quality and efficiency to boost credibility and access global opportunities.",
    badgeText: "Globally recognized \u2022 Quality-driven \u2022 Trustworthy",
    icon: "shield",
    serviceID: "ISO_CERTIFICATION",
    contentTitle: "Overview",
    contentDescription:
      "ISO Certification signifies that a company adheres to established International Organization for Standardization (ISO) standards, indicating a commitment to quality and efficient management systems.",
    section1Title: "Key Benefits",
    price: 999,
    originalPrice: 2999,
    theme: {
      orb1: "bg-[#c92c41]/20",
      orb2: "bg-[#4c3df7]/20",
      iconBg: "from-[#c92c41] to-[#e99b2b]",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-600",
    primaryBg: "bg-gradient-to-r from-[#c92c41] to-[#e99b2b]",
    primaryHoverBg: "bg-gradient-to-r from-[#b02538] to-[#d88920]",
    benefits: [
      {
        icon: "trendingUp",
        description: "Helps in building Management processes suitable for the business",
      },
      {
        icon: "shield",
        description: "Inspires confidence and improves public image",
      },
      {
        icon: "building",
        description: "Provides eligibility to enter global markets",
      },
    ],
    faqs: [
      {
        question: "What is ISO 9001:2015?",
        answer:
          "ISO stands for the International Organization for Standardization. ISO prescribes a set of requirements; if a business organisation maintains them, an ISO certificate is issued to it. ISO 9001:2015 is the International Standard for Quality Management Systems (QMS). It provides a set of requirements that helps management of business to achieve customer satisfaction.",
      },
      {
        question: "What is the benefit of ISO Certification in India?",
        answer:
          "ISO certification gives the confidence that your business has the capability to provide HIGH QUALITY goods and services to its customers. Improves public image, Inspires confidence of the market and helps in growth of business, Helps in getting Govt. Tenders, Provides eligibility to enter global markets, Good marketing tool.",
      },
      {
        question: "How many days does it take to complete the ISO 9001 process in India?",
        answer:
          "It depends upon the size of the business and current level of management practices. Typically it may take from 5 to 90 working days.",
      },
      {
        question: "Who can apply for ISO 9001 standards?",
        answer:
          "ISO 9001 standard is applicable to companies of any size or sector. Any business like Proprietorship firm, Partnership, Private Limited Companies, LLP, One Person company, Public Ltd., Trusts, NGO, Hospitals, Govt. Agencies.",
      },
      {
        question: "What are ISO certification bodies?",
        answer:
          "They are the registered organizations eligible to issue ISO certificates to Companies adhering to ISO standards.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: ["PAN Card of the organisation", "Address Proof of the organisation", "PAN card of Authorised signatory"],
      },
      {
        title: "What You'll Receive",
        icon: "building",
        type: "grid",
        data: ["ISO CERTIFICATE"],
      },
    ],
    addons: [
      "ISO\\nCertificate",
      "Global Market\\nEligibility",
      "Quality\\nAssurance Mark",
      "Govt. Tender\\nEligibility",
    ],
  },
  MSMEUdhyamRegistrationPage: {
    title: "MSME / Udyam Registration",
    subtitle:
      "Register your business online for free to unlock government benefits, priority lending, and protections.",
    badgeText: "Govt-recognized \u2022 Free \u2022 Fast",
    icon: "building",
    serviceID: "MSME_UDHYAM_REGISTRATION",
    contentTitle: "Overview",
    contentDescription:
      "MSME/Udyam Registration is the simplified online process by which micro, small, and medium enterprises register their business with the government to access various benefits.",
    section1Title: "Key Benefits",
    price: 999,
    originalPrice: 1,
    theme: {
      orb1: "bg-[#c92c41]/20",
      orb2: "bg-[#4c3df7]/20",
      iconBg: "from-[#c92c41] to-[#e99b2b]",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-600",
    primaryBg: "bg-gradient-to-r from-[#c92c41] to-[#e99b2b]",
    primaryHoverBg: "bg-gradient-to-r from-[#b02538] to-[#d88920]",
    benefits: [
      {
        icon: "trendingUp",
        description: "Easy Bank Loan up to 1 Crore without collateral/mortgage",
      },
      {
        icon: "shield",
        description: "Preference in procuring Government tenders",
      },
      {
        icon: "trendingUp",
        description: "1% exemption on interest rate on Bank Overdraft (OD)",
      },
      {
        icon: "fileText",
        description: "Concession in Electricity bills",
      },
      {
        icon: "shield",
        description: "Protection against the delay in payment from Buyers",
      },
      {
        icon: "trendingUp",
        description: "Tax Rebates",
      },
      {
        icon: "fileText",
        description: "Special 50% discount on Govt. fees for Trademark & Patent",
      },
      {
        icon: "shield",
        description: "Fast resolution of disputes",
      },
    ],
    faqs: [
      {
        question: "What is MSME?",
        answer: "MSME means Micro, Small and Medium Enterprises, as defined under the MSME Development Act, 2006.",
      },
      {
        question: "What is MSME Registration?",
        answer:
          "MSME registration is the procedure to get your firm registered under MSME development Act for SME benefits.",
      },
      {
        question: "What is the difference between MSME, SSI and Udyog Aadhaar?",
        answer: "There is no difference between MSME, SSI & Udyog Aadhaar. They are all one and the same.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: [
          "If the Applicant is Proprietorship Firm: Proprietor",
          "If the Applicant is Partnership Firm: PAN Card of the Firm or Partnership Deed, Address proof of the Firm, Aadhaar Card of the Authorised Signatory",
          "If the Applicant is Pvt. Ltd./OPC/Public Ltd.: Incorporation Certificate or PAN of Company, PAN card and address proof of Director, Aadhaar Card of Authorised Signatory",
          "If the Applicant is LLP: PAN card of LLP, PAN card and address proof of all the Partners, Aadhaar Card of Authorised Signatory",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building",
        type: "grid",
        data: ["MSME/Udyam Certificate"],
      },
    ],
    addons: [
      "MSME / Udyam\\nCertificate",
      "Govt. Tender\\nPreference",
      "Collateral-Free\\nLoan Upto \u20b91Cr",
      "50% Discount on\\nTrademark Fees",
    ],
  },
};
