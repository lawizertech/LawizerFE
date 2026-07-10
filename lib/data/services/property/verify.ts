import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  "property-report": {
    title: "Verified Property Report",
    subtitle:
      "Make every property deal safe and stress-free with Lawizer\u2019s comprehensive Verified Property Report.",
    badgeText: "Lawizer \u2014 Legal clarity for every property.",
    icon: "home",
    serviceID: "VERIFIED_PROPERTY_REPORT",
    contentTitle: "Why You Need a Property Search Report",
    contentDescription:
      "A Verified Property Report gives you complete visibility into ownership history, title clarity, encumbrances, approvals, and disputes. This legal due diligence protects you from fraud and costly mistakes.",
    section1Title: "Key Benefits of a Verified Property Report",
    price: 999,
    originalPrice: 2999,
    theme: {
      orb1: "bg-indigo-500/20",
      orb2: "bg-blue-500/20",
      iconBg: "from-indigo-500 to-blue-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-indigo-600",
    primaryBg: "bg-gradient-to-r from-indigo-600 to-blue-600",
    primaryHoverBg: "bg-gradient-to-r from-indigo-700 to-blue-700",
    benefits: [
      {
        icon: "shield",
        description: "A safe investment in property with clear legal ownership.",
      },
      {
        icon: "checkCircle",
        description: "Eliminates fear of hidden litigation, loans, or encumbrances.",
      },
      {
        icon: "clock",
        description: "Peace of mind with complete verification from home.",
      },
      {
        icon: "users",
        description: "Enables you to transact with complete confidence.",
      },
    ],
    faqs: [
      {
        question: "What does the Property Report uncover?",
        answer:
          "Ownership records, title clarity, encumbrances, government approvals, RERA compliance, and pending disputes.",
      },
      {
        question: "Why is the process thorough?",
        answer: "Prepared by senior lawyers with government cross-verification ensuring complete paper trail.",
      },
      {
        question: "How long does it take?",
        answer: "The full verification process is completed within 5 days.",
      },
      {
        question: "Is consultation included?",
        answer: "Yes, a dedicated consultation session is included.",
      },
      {
        question: "Does it check RERA?",
        answer: "Yes, RERA approval and compliance are verified.",
      },
    ],
    sections: [
      {
        title: "The Property Verification Process",
        icon: "clock",
        type: "list",
        data: [
          "Upload or email all property documents, or request doorstep pickup.",
          "Senior property lawyers review all documents (200\u2013300 pages).",
          "Verification with government records wherever required.",
          "Establish continuity of property paper trail.",
          "Detailed property verification report is prepared.",
          "Dedicated consultation slot after report delivery.",
          "Entire process completed within 5 days.",
        ],
      },
    ],
    addons: [
      "Detailed Legal\\nOpinion",
      "Government Record\\nVerification",
      "RERA Compliance\\nCheck",
      "Post-Report\\nConsultation",
    ],
  },
  "agreement-review": {
    title: "Sale Agreement / Agreement to Sale Review",
    subtitle: "Expert legal review to ensure your Agreement to Sale is legally sound and enforceable.",
    badgeText: "Lawizer ensures your agreement is legally valid under Indian property laws.",
    icon: "fileText",
    serviceID: "SALE_AGREEMENT_AGREEMENT_TO_SALE_REVIEW",
    contentTitle: "Why Reviewing a Sale Agreement Is Important",
    contentDescription:
      "A properly reviewed Sale Agreement clearly defines buyer and seller rights, prevents disputes, and ensures enforceability for final property transfer.",
    section1Title: "Key Benefits of Sale Agreement Review",
    price: 999,
    originalPrice: 2499,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-yellow-600",
    primaryBg: "bg-gradient-to-r from-yellow-500 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
    benefits: [
      {
        icon: "scale",
        description: "Legally binds both parties and prevents last-minute disputes.",
      },
      {
        icon: "checkCircle",
        description: "Defines clear payment schedule, possession dates, and responsibilities.",
      },
      {
        icon: "shield",
        description: "Protects buyer and seller rights from misuse or default.",
      },
      {
        icon: "shield",
        description: "Prevents fraud and misrepresentation in transactions.",
      },
      {
        icon: "fileText",
        description: "Forms the legal foundation for execution of the final Sale Deed.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of reviewing the Agreement to Sale?",
        answer: "It ensures all terms are legally valid and protect both parties from disputes.",
      },
      {
        question: "What does Lawizer ensure during review?",
        answer: "The agreement is enforceable, clear, and compliant with Indian property laws.",
      },
      {
        question: "Who conducts the review?",
        answer: "Senior and experienced property lawyers conduct the review.",
      },
      {
        question: "How does consultation work?",
        answer: "Upload your document, choose time, and connect via scheduled call.",
      },
      {
        question: "Is this service available across India?",
        answer: "Yes, Lawizer provides agreement review services nationwide.",
      },
    ],
    sections: [
      {
        title: "How the Agreement Review Works",
        icon: "clock",
        type: "list",
        data: [
          "Upload your agreement and select a convenient consultation time.",
          "Senior lawyers analyze and interpret the agreement.",
          "Connect with the lawyer for detailed clarification and review.",
        ],
      },
    ],
    addons: [
      "Clause-by-Clause\\nExplanation",
      "Risk & Legal\\nCompliance Check",
      "One-on-One\\nConsultation",
      "Legal Suggestions\\n& Clarifications",
    ],
  },
  "property-paper-review": {
    title: "Property Paper Review & Legal Consultation",
    subtitle:
      "Get expert legal review of your property documents and a clear oral consultation on ownership, risks, and compliance.",
    badgeText: "Lawizer ensures your property papers are genuine, updated, and dispute-free before any transaction.",
    icon: "fileText",
    serviceID: "PROPERTY_PAPER_REVIEW_&_LEGAL_CONSULTATION",
    contentTitle: "Why Property Paper Review Is Important",
    contentDescription:
      "Before buying, selling, or inheriting a property, it is essential to verify documents are legally sound. Professional review identifies ownership issues, encumbrances, non-compliance, and potential disputes.",
    section1Title: "Key Benefits of Property Paper Review",
    price: 999,
    originalPrice: 1999,
    theme: {
      orb1: "bg-teal-500/20",
      orb2: "bg-cyan-500/20",
      iconBg: "from-teal-500 to-cyan-500",
      badgeText: "text-cyan-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-teal-600",
    primaryBg: "bg-gradient-to-r from-teal-500 to-cyan-500",
    primaryHoverBg: "bg-gradient-to-r from-teal-600 to-cyan-600",
    benefits: [
      {
        icon: "shield",
        description:
          "Detects legal risks early by identifying disputes, encumbrances, or ownership issues before buying.",
      },
      {
        icon: "checkCircle",
        description: "Verifies authenticity by confirming documents are genuine and properly executed.",
      },
      {
        icon: "clock",
        description: "Saves time and money by avoiding costly legal troubles or fraudulent deals later.",
      },
      {
        icon: "scale",
        description: "Ensures compliance with state and municipal property regulations.",
      },
      {
        icon: "users",
        description: "Provides legal clarity for confident property decisions.",
      },
    ],
    faqs: [
      {
        question: "What does the Property Paper Review involve?",
        answer:
          "Expert lawyers examine title deeds, agreements, mutation papers, and tax receipts, followed by a clear oral consultation.",
      },
      {
        question: "Why is early review important?",
        answer: "It detects legal risks before purchase, preventing disputes and financial losses.",
      },
      {
        question: "What documents are checked?",
        answer: "Title deeds, sale agreements, mutation papers, tax receipts and related property documents.",
      },
      {
        question: "Do I get a written report?",
        answer: "This service includes a detailed oral consultation explaining the legal position.",
      },
      {
        question: "Is this suitable for inherited property?",
        answer: "Yes, it helps heirs understand ownership clarity and compliance.",
      },
    ],
    sections: [
      {
        title: "Who Is This Service For?",
        icon: "users",
        type: "list",
        data: [
          "Homebuyers wanting to validate documents before purchase",
          "Real estate investors evaluating new properties",
          "Heirs or inheritors unsure of legal ownership",
          "Sellers wanting paperwork clarity",
          "Anyone seeking legal clarity before a transaction",
        ],
      },
    ],
    addons: [
      "Detailed Document\\nExamination",
      "Ownership & Risk\\nAssessment",
      "One-on-One Legal\\nConsultation",
      "Compliance &\\nRegulatory Check",
    ],
  },
};
