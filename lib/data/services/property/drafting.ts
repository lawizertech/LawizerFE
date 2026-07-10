import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  "joint-development-agreement": {
    title: "Joint Development Agreement (JDA)",
    subtitle:"A legally binding agreement defining responsibilities, profit-sharing, and timelines.",
    badgeText:"Lawizer ensures your JDA is professionally drafted and enforceable.",
    icon: "factory",
    serviceID: "JOINT_DEVELOPMENT_AGREEMENT",
    contentTitle: "Why a Joint Development Agreement Is Crucial",
    contentDescription:"A professionally drafted JDA protects revenue sharing, timelines, and legal compliance for smooth project execution.",
    section1Title: "Key Protections and Benefits",
    price: 999,
    originalPrice: 8999,
    theme: {
      orb1: "bg-teal-500/20",
      orb2: "bg-green-500/20",
      iconBg: "from-teal-500 to-green-500",
      badgeText: "text-green-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-green-600",
    primaryBg: "bg-gradient-to-r from-teal-500 to-green-600",
    primaryHoverBg: "bg-gradient-to-r from-teal-600 to-green-700",
    benefits: [
      {
        icon: "users",
        description: "Protects rights of landowner and developer.",
      },
      {
        icon: "shield",
        description: "Prevents disputes over timelines and payments.",
      },
      {
        icon: "scale",
        description: "Ensures compliance with property and development laws.",
      },
      {
        icon: "clock",
        description: "Defines clear project milestones and approvals.",
      },
      {
        icon: "fileText",
        description: "Acts as enforceable legal evidence.",
      },
      {
        icon: "factory",
        description: "Secures investment and revenue-sharing mechanisms.",
      },
    ],
    faqs: [
      {
        question: "What is a Joint Development Agreement?",
        answer:
          "A legal contract defining responsibilities, profit-sharing, and timelines between landowner and developer.",
      },
      {
        question: "Why is professional drafting important?",
        answer: "It prevents disputes and protects revenue interests.",
      },
      {
        question: "What should landowners review carefully?",
        answer: "Revenue share, approvals, penalties, and dispute clauses.",
      },
      {
        question: "Is JDA suitable for commercial projects?",
        answer:
          "Yes, JDAs apply to residential, commercial, and mixed-use developments.",
      },
      {
        question: "Does Lawizer assist with registration?",
        answer: "Yes, including drafting, consultation, and approval guidance.",
      },
    ],
    sections: [
      {
        title: "Information Required for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Landowner details & ownership documents",
          "Developer company registration & PAN",
          "Clear land title & property details",
          "Profit-sharing & construction timelines",
          "Optional clauses for penalties & dispute resolution",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "factory",
        type: "grid",
        data: [
          "Customized Joint Development Agreement",
          "Clause-wise explanation",
          "Editable digital copy",
          "Registration & approval guidance",
          "Expert legal consultation",
        ],
      },
    ],
    addons: [
      "Customized JDA\\nDrafting",
      "Revenue Sharing\\nProtection",
      "Clause-wise\\nExplanation",
      "Registration &\\nApproval Guidance",
    ],
  },
  "rent-agreement": {
    title: "Will Drafting & Estate Planning",
    subtitle:"Ensure your assets are distributed exactly according to your wishes.",
    badgeText: "Secure your legacy and prevent disputes.",
    icon: "heart",
    serviceID: "WILL_DRAFTING_&_ESTATE_PLANNING",
    contentTitle: "Importance of Drafting a Will",
    contentDescription:"A professionally drafted Will secures your legacy, avoids succession disputes, and provides legal certainty.",
    section1Title: "Key Benefits of a Legally Drafted Will",
    price: 999,
    originalPrice: 1499,
    theme: {
      orb1: "bg-pink-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-pink-500 to-red-500",
      badgeText: "text-red-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-pink-600",
    primaryBg: "bg-gradient-to-r from-pink-600 to-red-600",
    primaryHoverBg: "bg-gradient-to-r from-pink-700 to-red-700",
    benefits: [
      {
        icon: "checkCircle",
        description: "Ensures assets are inherited as per your wishes.",
      },
      {
        icon: "users",
        description: "Prevents family disputes and confusion.",
      },
      {
        icon: "gavel",
        description: "Legally enforceable when properly drafted.",
      },
      {
        icon: "shield",
        description: "Clear, valid, and compliant under Indian law.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Will?",
        answer:
          "It ensures your assets are distributed according to your wishes.",
      },
      {
        question: "Is registration mandatory?",
        answer: "Not compulsory, but highly recommended.",
      },
      {
        question: "What assets can be included?",
        answer:
          "Immovable property, bank accounts, investments, and personal belongings.",
      },
      {
        question: "Who is the Testator?",
        answer: "The person who creates and executes the Will.",
      },
      {
        question: "Does Lawizer assist beyond drafting?",
        answer: "Yes, including guidance on registration and formalities.",
      },
    ],
    sections: [
      {
        title: "Information Required for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Complete details of assets and beneficiaries",
          "Personal details of the testator with ID proof",
          "Witness details for execution",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "gavel",
        type: "grid",
        data: [
          "Professionally drafted customized Will",
          "Clause-wise explanation",
          "Digital copy with registration guidance",
        ],
      },
    ],
    addons: [
      "Customized Will\\nDrafting",
      "Family Dispute\\nPrevention",
      "Clause-wise\\nExplanation",
      "Registration\\nGuidance",
    ],
  },
  "commercial-lease": {
    title: "Commercial Lease Agreement Drafting",
    subtitle: "Legally define the terms for your commercial property lease.",
    badgeText:
      "Lawizer ensures your commercial lease is compliant and enforceable.",
    icon: "building",
    serviceID: "COMMERCIAL_LEASE_AGREEMENT_DRAFTING",
    contentTitle: "Why a Proper Commercial Lease Agreement Is Important",
    contentDescription:
      "A professionally drafted agreement protects both landlord and tenant and secures long-term business interests.",
    section1Title: "Key Protections and Benefits",
    price: 999,
    originalPrice: 5499,
    theme: {
      orb1: "bg-purple-500/20",
      orb2: "bg-indigo-500/20",
      iconBg: "from-purple-500 to-indigo-500",
      badgeText: "text-purple-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-purple-600",
    primaryBg: "bg-gradient-to-r from-purple-600 to-indigo-600",
    primaryHoverBg: "bg-gradient-to-r from-purple-700 to-indigo-700",
    benefits: [
      {
        icon: "shield",
        description: "Defines landlord and tenant rights clearly.",
      },
      {
        icon: "users",
        description: "Avoids disputes on rent, deposits, and maintenance.",
      },
      {
        icon: "scale",
        description: "Ensures compliance with West Bengal regulations.",
      },
      {
        icon: "gavel",
        description: "Acts as legal proof in court or tribunals.",
      },
      {
        icon: "fileText",
        description: "Customizable business-specific clauses.",
      },
      {
        icon: "building",
        description: "Protects long-term business investments.",
      },
    ],
    faqs: [
      {
        question: "What is a Commercial Lease Agreement?",
        answer:
          "It defines the legal relationship between landlord and tenant for commercial property.",
      },
      {
        question: "How is it different from residential rent?",
        answer:
          "Commercial leases include business-specific clauses and are more complex.",
      },
      {
        question: "Why choose Lawizer?",
        answer:
          "Specialized drafting tailored to West Bengal commercial property laws.",
      },
      {
        question: "Does it cover renewal and exit?",
        answer:
          "Yes, renewal, exit clauses, and maintenance are clearly defined.",
      },
      {
        question: "Is registration mandatory?",
        answer:
          "Depends on duration and local laws; Lawizer guides compliance.",
      },
    ],
    sections: [
      {
        title: "Information Required for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Landlord details (name, address, PAN)",
          "Tenant business details (registration, PAN)",
          "Commercial property details (location, size)",
          "Lease terms (rent, deposit, duration)",
          "Optional clauses (signage, sublease, utilities)",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "building",
        type: "grid",
        data: [
          "Customized Commercial Lease Agreement",
          "Clause-wise explanation",
          "Digital editable copy",
          "Registration guidance (if required)",
          "Expert legal consultation",
        ],
      },
    ],
    addons: [
      "Professionally Drafted\\nLease Agreement",
      "Business Risk\\nProtection",
      "Clause-wise\\nExplanation",
      "Registration\\nGuidance",
    ],
  },
  "agreement-to-sale": {
    title: "Agreement to Sale Drafting",
    subtitle:
      "The critical first legal step defining price, payment schedule, and possession terms.",
    badgeText:
      "Lawizer ensures your Agreement to Sale is precise and legally valid.",
    icon: "fileText",
    serviceID: "AGREEMENT_TO_SALE_DRAFTING",
    contentTitle: "Why a Proper Agreement to Sale Is Essential",
    contentDescription:
      "A professionally drafted Agreement to Sale protects both parties and forms the base for smooth Sale Deed execution.",
    section1Title: "Key Protections and Benefits",
    price: 999,
    originalPrice: 4499,
    theme: {
      orb1: "bg-orange-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-orange-500 to-yellow-500",
      badgeText: "text-yellow-400",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-600",
    primaryBg: "bg-gradient-to-r from-red-500 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-red-600 to-orange-600",
    benefits: [
      {
        icon: "users",
        description: "Legally binds both buyer and seller.",
      },
      {
        icon: "fileText",
        description:
          "Defines price, payment schedule, and possession timeline.",
      },
      {
        icon: "shield",
        description: "Protects buyer against unauthorized transfer.",
      },
      {
        icon: "shield",
        description: "Protects seller against payment defaults.",
      },
      {
        icon: "home",
        description: "Foundation for smooth property transaction.",
      },
      {
        icon: "scale",
        description: "Essential base for final Sale Deed registration.",
      },
    ],
    faqs: [
      {
        question: "What is an Agreement to Sale?",
        answer:
          "It records mutually agreed terms before executing the Sale Deed.",
      },
      {
        question: "Is it the same as a Sale Deed?",
        answer:
          "No. It promises future transfer; Sale Deed transfers ownership immediately.",
      },
      {
        question: "Why is proper drafting important?",
        answer: "It prevents disputes and protects financial interests.",
      },
      {
        question: "Is it location-specific?",
        answer: "Yes, Lawizer drafts as per local state property laws.",
      },
      {
        question: "What is the drafting process?",
        answer:
          "Lawyer discusses details, drafts agreement, and guides stamp requirements.",
      },
    ],
    sections: [
      {
        title: "Key Elements Covered in the Agreement",
        icon: "gavel",
        type: "list",
        data: [
          "Buyer and seller details",
          "Complete property description",
          "Sale price and payment schedule",
          "Possession terms",
          "Conditions precedent & subsequent",
          "Representations & warranties",
          "Indemnity clause",
          "Dispute resolution mechanism",
          "Termination clauses",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "fileText",
        type: "grid",
        data: [
          "Professionally drafted Agreement",
          "Legally precise documentation",
          "Protection of buyer and seller interests",
          "Clause-wise explanation",
          "Digital copy for stamp paper printing",
          "Guidance on stamp paper value",
        ],
      },
    ],
    addons: [
      "Professionally\\nDrafted Agreement",
      "Buyer & Seller\\nProtection",
      "Clause-wise\\nExplanation",
      "Stamp Paper\\nGuidance",
    ],
  },
  "relinquishment-deed": {
    title: "Relinquishment Deed Drafting",
    subtitle:
      "Legally transfer a co-owner\u2019s share with clarity and compliance.",
    badgeText:
      "Professionally drafted and legally compliant ownership transfer.",
    icon: "users",
    serviceID: "RELINQUISHMENT_DEED_DRAFTING",
    contentTitle: "Why a Relinquishment Deed Is Important",
    contentDescription:
      "A Relinquishment Deed formally records transfer of ownership shares, prevents disputes, and updates property records.",
    section1Title: "Key Benefits of a Relinquishment Deed",
    price: 999,
    originalPrice: 4499,
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
        icon: "gavel",
        description: "Legally transfers co-owner\u2019s share.",
      },
      {
        icon: "users",
        description: "Prevents disputes by recording clear intent.",
      },
      {
        icon: "fileText",
        description: "Required for updating property records.",
      },
      {
        icon: "shield",
        description: "Supports inheritance and partition cases.",
      },
      {
        icon: "checkCircle",
        description: "Ensures clarity and legal compliance.",
      },
    ],
    faqs: [
      {
        question: "What is a Relinquishment Deed?",
        answer: "A document where a co-owner voluntarily gives up their share.",
      },
      {
        question: "Is it mandatory for family property transfers?",
        answer: "Yes, to legally update ownership records.",
      },
      {
        question: "Can share be relinquished to non-family?",
        answer: "Yes, but stamp duty implications may apply.",
      },
      {
        question: "Does Lawizer assist with registration?",
        answer: "Yes, including full guidance for Sub-Registrar process.",
      },
      {
        question: "What documents are required?",
        answer: "Party details, ownership documents, and ID proofs.",
      },
    ],
    sections: [
      {
        title: "Information Required for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Details of relinquishing party",
          "Details of beneficiary",
          "Property description and ownership shares",
          "Original title deed & ID proofs",
          "Consent of all co-owners",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "home",
        type: "grid",
        data: [
          "Legally compliant Relinquishment Deed",
          "Clause-wise explanation",
          "Editable digital copy",
          "Registration guidance",
          "Expert legal support",
        ],
      },
    ],
    addons: [
      "Legally Drafted\\nRelinquishment Deed",
      "Ownership\\nClarity & Consent",
      "Clause-wise\\nExplanation",
      "Registration\\nGuidance",
    ],
  },
  "sale-deed": {
    title: "Sale Deed Drafting",
    subtitle: "The final legal document transferring property ownership.",
    badgeText: "Legally compliant \u2022 Secure \u2022 Registration-ready",
    icon: "fileText",
    serviceID: "SALE_DEED_DRAFTING",
    contentTitle: "Why a Properly Drafted Sale Deed Is Essential",
    contentDescription:
      "A professionally drafted Sale Deed ensures legal compliance, smooth registration, and long-term property protection.",
    section1Title: "Key Benefits of a Professionally Drafted Sale Deed",
    price: 999,
    originalPrice: 5999,
    theme: {
      orb1: "bg-purple-500/20",
      orb2: "bg-violet-500/20",
      iconBg: "from-purple-500 to-violet-500",
      badgeText: "text-violet-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-purple-600",
    primaryBg: "bg-gradient-to-r from-purple-600 to-violet-600",
    primaryHoverBg: "bg-gradient-to-r from-purple-700 to-violet-700",
    benefits: [
      {
        icon: "gavel",
        description: "Acts as the ultimate proof of ownership.",
      },
      {
        icon: "users",
        description: "Protects buyer and seller rights.",
      },
      {
        icon: "checkCircle",
        description: "Fully compliant with Indian laws.",
      },
      {
        icon: "shield",
        description: "Prevents fraud and hidden liabilities.",
      },
      {
        icon: "fileText",
        description: "Mandatory for smooth registration.",
      },
    ],
    faqs: [
      {
        question: "What is a Sale Deed?",
        answer: "It officially transfers ownership from seller to buyer.",
      },
      {
        question: "How is it different from Agreement to Sale?",
        answer: "Agreement sets terms; Sale Deed completes ownership transfer.",
      },
      {
        question: "Is stamp paper mandatory?",
        answer: "Yes, state-prescribed non-judicial stamp paper is required.",
      },
      {
        question: "Why is compliance critical?",
        answer: "Ensures enforceability and protects from future disputes.",
      },
      {
        question: "Does Lawizer draft for different cities?",
        answer: "Yes, across India with state-specific compliance.",
      },
    ],
    sections: [
      {
        title: "The Sale Deed Drafting Process",
        icon: "gavel",
        type: "list",
        data: [
          "Lawyer discusses property details and transaction requirements.",
          "Professional drafting with legal and factual checks.",
          "Printing on state-prescribed non-judicial stamp paper.",
        ],
      },
      {
        title: "Why Choose Lawizer",
        icon: "home",
        type: "grid",
        data: [
          "Drafted by expert property lawyers.",
          "Customized for your transaction.",
          "Clause-wise explanation for clarity.",
          "End-to-end support till registration.",
          "Fast online process with transparent pricing.",
        ],
      },
    ],
    addons: [
      "Legally Compliant\\nDrafted Sale Deed",
      "Fraud & Risk\\nProtection",
      "Clause-wise\\nExplanation",
      "Registration\\nGuidance",
    ],
  },
  "will-drafting": {
    title: "Will Drafting & Estate Planning",
    subtitle: "Ensure your assets are distributed exactly as you wish.",
    badgeText: "Legally valid \u2022 Clear \u2022 Secure",
    icon: "heart",
    serviceID: "WILL_DRAFTING_&_ESTATE_PLANNING",
    contentTitle: "Importance of Drafting a Will",
    contentDescription:
      "A Will protects your legacy, prevents disputes, and ensures legal clarity.",
    section1Title: "Key Benefits",
    price: 999,
    originalPrice: 2999,
    theme: {
      orb1: "bg-pink-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-pink-500 to-red-500",
      badgeText: "text-red-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-pink-600",
    primaryBg: "bg-gradient-to-r from-pink-600 to-red-600",
    primaryHoverBg: "bg-gradient-to-r from-pink-700 to-red-700",
    benefits: [
      {
        icon: "checkCircle",
        description:
          "Ensures your property is inherited according to your wishes",
      },
      {
        icon: "users",
        description: "Prevents family disputes over asset distribution",
      },
      {
        icon: "gavel",
        description: "Legally enforceable when properly registered",
      },
      {
        icon: "shield",
        description:
          "Drafted to be clear, legally valid, and compliant under Indian law",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Will?",
        answer:
          "A Will ensures your assets are distributed according to your wishes.",
      },
      {
        question: "Is registration mandatory?",
        answer: "Registration is not compulsory but highly advisable.",
      },
      {
        question: "What assets can be included?",
        answer:
          "Movable and immovable assets including property and investments.",
      },
      {
        question: "Who is the Testator?",
        answer: "The person who makes the Will.",
      },
      {
        question: "Does Lawizer assist beyond drafting?",
        answer: "Yes, including guidance for registration.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites",
        icon: "fileText",
        type: "list",
        data: [
          "Details of assets & beneficiaries",
          "Personal details of the testator",
          "Witness details for signing",
        ],
      },
      {
        title: "What You Receive",
        icon: "gavel",
        type: "grid",
        data: [
          "Professionally drafted Will",
          "Clause-wise explanation",
          "Digital copy & registration guidance",
        ],
      },
    ],
    addons: [
      "Professionally Drafted\\nWill Document",
      "Dispute\\nPrevention",
      "Clause-wise\\nExplanation",
      "Registration\\nGuidance",
    ],
  },
};
