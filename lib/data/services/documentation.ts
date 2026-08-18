import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  "joint-venture-agreement": {
    title: "Joint Venture (JV) Agreement Drafting",
    subtitle: "A legally binding agreement defining investment, management, and profit-sharing in a joint venture.",
    badgeText: "Investment protection \u2022 Governance clarity \u2022 Dispute control",
    icon: "users",
    serviceID: "JOINT_VENTURE_AGREEMENT_DRAFTING",
    contentTitle: "Why a Joint Venture Agreement Is Essential",
    contentDescription:
      "A well-drafted Joint Venture Agreement protects the interests of all parties by clearly defining management roles, profit sharing, governance, and exit mechanisms from the outset.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 7999,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-yellow-600",
    primaryBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
    primaryHoverBg: "bg-gradient-to-r from-yellow-700 to-orange-700",
    benefits: [
      {
        icon: "shield",
        description: "Protects investments of all joint venture partners.",
      },
      {
        icon: "gavel",
        description: "Defines clear governance and dispute resolution mechanisms.",
      },
      {
        icon: "fileText",
        description: "Joint Venture agreements drafted in compliance with Indian law.",
      },
      {
        icon: "checkCircle",
        description: "Clear guidance on profit sharing, timelines, and exit strategies.",
      },
    ],
    faqs: [
      {
        question: "What is a Joint Venture (JV) Agreement?",
        answer:
          "A Joint Venture Agreement defines the partnership structure, investment contributions, management responsibilities, and profit-sharing terms between collaborating parties.",
      },
      {
        question: "Why is a formal JV Agreement necessary?",
        answer:
          "It protects investments, establishes governance rules, and provides dispute resolution mechanisms, reducing legal and operational risks.",
      },
      {
        question: "What key elements are covered in a JV Agreement?",
        answer:
          "The agreement covers capital contribution, profit sharing, governance, decision-making, dispute resolution, and exit strategies.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Details of all joint venture parties",
          "Investment contributions and ownership ratios",
          "Governance and management structure",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "gavel",
        type: "grid",
        data: [
          "Legally compliant Joint Venture agreements",
          "Clear profit-sharing and governance structure",
          "Defined dispute resolution mechanisms",
          "Well-structured exit and termination clauses",
        ],
      },
    ],
    addons: [
      "JV Agreement\\nDraft",
      "Profit Sharing\\n& Governance",
      "Dispute\\nResolution",
      "Exit &\\nTermination Clauses",
    ],
  },
  "privacy-terms-of-use": {
    title: "Privacy Policy & Terms of Use Drafting",
    subtitle: "Essential legal documents governing data protection and platform usage.",
    badgeText: "IT Act \u2022 GDPR \u2022 Digital compliance",
    icon: "scale",
    serviceID: "PRIVACY_POLICY_&_TERMS_OF_USE_DRAFTING",
    contentTitle: "Why Privacy & Terms Documents Are Non-Negotiable",
    contentDescription:
      "Privacy Policies and Terms of Use are legally mandatory for digital platforms. They ensure regulatory compliance, mitigate legal risk, and build long-term trust with users.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 2999,
    theme: {
      orb1: "bg-blue-500/20",
      orb2: "bg-indigo-500/20",
      iconBg: "from-blue-500 to-indigo-500",
      badgeText: "text-indigo-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-600",
    primaryBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-indigo-700",
    benefits: [
      {
        icon: "scale",
        description: "Ensures compliance under IT Act, GDPR, and other data protection regulations.",
      },
      {
        icon: "shield",
        description: "Protects both the business and users legally.",
      },
      {
        icon: "users",
        description: "Builds trust and transparency with users.",
      },
      {
        icon: "fileText",
        description: "Tailored policies for websites, apps, and software platforms.",
      },
    ],
    faqs: [
      {
        question: "What is a Privacy Policy?",
        answer:
          "A Privacy Policy is a legal document that explains how user data is collected, stored, processed, and protected by a website, app, or digital platform.",
      },
      {
        question: "Why are Privacy Policy and Terms of Use mandatory?",
        answer:
          "These documents are essential for legal compliance under the IT Act, GDPR, and global regulations, and they protect businesses from legal disputes.",
      },
      {
        question: "What does a Terms of Use document cover?",
        answer:
          "It defines the rules, rights, responsibilities, and limitations for users accessing and using your website, app, or services.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Business and platform details",
          "Data collection, storage, and usage practices",
          "User rights, obligations, and prohibited actions",
          "Cookies, tracking, and third-party integrations",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Customized Privacy Policy drafting",
          "Clear and enforceable Terms of Use",
          "Regulatory-aligned disclosures and disclaimers",
          "Policies tailored to your platform",
        ],
      },
    ],
    addons: [
      "Privacy Policy\\nDraft",
      "Terms of Use\\nDraft",
      "GDPR & IT Act\\nCompliance",
      "Cookie &\\nDisclaimer Clauses",
    ],
  },
  "non-disclosure-agreement": {
    title: "Non-Disclosure Agreement (NDA) Drafting",
    subtitle: "A legally enforceable agreement to protect confidential information and trade secrets.",
    badgeText: "Confidentiality \u2022 Trade secrets \u2022 Legal protection",
    icon: "shield",
    serviceID: "NON-DISCLOSURE_AGREEMENT_DRAFTING",
    contentTitle: "Why an NDA Is Essential for Business",
    contentDescription:
      "An NDA safeguards proprietary information while allowing businesses to collaborate, negotiate, and explore opportunities without risking misuse or disclosure of sensitive data.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 1999,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-pink-500/20",
      iconBg: "from-red-500 to-pink-500",
      badgeText: "text-pink-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-600",
    primaryBg: "bg-gradient-to-r from-red-600 to-pink-600",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-pink-700",
    benefits: [
      {
        icon: "shield",
        description: "Protects sensitive business information and trade secrets.",
      },
      {
        icon: "scale",
        description: "Legally enforceable protection in case of unauthorized disclosure.",
      },
      {
        icon: "users",
        description: "Enables safe collaboration, partnerships, and funding discussions.",
      },
      {
        icon: "fileText",
        description: "Customized NDA drafting based on your business or project needs.",
      },
    ],
    faqs: [
      {
        question: "What is a Non-Disclosure Agreement (NDA)?",
        answer:
          "A Non-Disclosure Agreement is a legal contract that obligates parties to keep shared confidential information private and protected from unauthorized disclosure.",
      },
      {
        question: "Why is an NDA important for startups and businesses?",
        answer:
          "An NDA protects sensitive business information and trade secrets, allowing startups and businesses to discuss ideas, partnerships, or funding safely.",
      },
      {
        question: "What should an NDA clearly define?",
        answer:
          "An NDA must define what constitutes confidential information, the duration of confidentiality, permitted disclosures, and consequences of breach.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Details of all parties involved",
          "Nature and scope of confidential information",
          "Duration of confidentiality obligations",
          "Exclusions and permitted disclosures",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Tailor-made Non-Disclosure Agreement drafting",
          "Clear definition of confidential information",
          "Balanced obligations for both parties",
          "Legally enforceable NDA aligned with business goals",
        ],
      },
    ],
    addons: [
      "NDA\\nDraft",
      "Confidential Info\\nDefinition",
      "Duration &\\nPermitted Disclosures",
      "Breach &\\nRemedies Clauses",
    ],
  },
  "shareholder-subscription-agreement": {
    title: "Shareholder Subscription Agreement",
    subtitle: "Legally structured agreements governing investment and share issuance.",
    badgeText: "Funding \u2022 Shareholding \u2022 Governance",
    icon: "gavel",
    serviceID: "SHAREHOLDER_SUBSCRIPTION_AGREEMENT",
    contentTitle: "Why a Subscription Agreement Is Essential for Funding",
    contentDescription:
      "A Shareholder Subscription Agreement formalizes capital investment into a company, clearly defining shareholder rights, obligations, and governance structures. It ensures legal compliance and reduces the risk of future disputes between founders and investors.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 8999,
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
        icon: "shield",
        description: "Protects investor and company rights through legally structured funding.",
      },
      {
        icon: "checkCircle",
        description: "Ensures clarity on shareholding, voting rights, and dividend entitlement.",
      },
      {
        icon: "scale",
        description: "Legally enforceable agreement in case of shareholder disputes.",
      },
      {
        icon: "users",
        description: "Suitable for startup funding rounds and corporate investments.",
      },
    ],
    faqs: [
      {
        question: "What is a Shareholder Subscription Agreement?",
        answer:
          "It is a legal agreement governing the issuance of shares to investors and defining their rights, obligations, and relationship with the company.",
      },
      {
        question: "Why is this agreement important for investors?",
        answer:
          "It ensures clarity on shareholding, voting rights, dividend entitlement, and protects the investor's interests legally.",
      },
      {
        question: "What clauses are typically included?",
        answer:
          "It includes share issuance details, rights and obligations of shareholders, governance provisions, and exit clauses.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Company and investor details",
          "Number, class, and type of shares to be issued",
          "Share price and investment amount",
          "Rights, obligations, and exit clauses",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "users",
        type: "grid",
        data: [
          "Drafting Shareholder Subscription Agreements",
          "Structuring shareholding and voting rights",
          "Guidance on dividend and liquidation rights",
          "Exit clauses and investor protection mechanisms",
        ],
      },
    ],
    addons: [
      "Subscription\\nAgreement Draft",
      "Shareholding &\\nVoting Rights",
      "Dividend &\\nLiquidation Rights",
      "Exit & Investor\\nProtection",
    ],
  },
  "co-founder-agreement": {
    title: "Co-Founder Agreement Drafting",
    subtitle:
      "A legally enforceable agreement defining equity, roles, responsibilities, and exit mechanisms for startup founders.",
    badgeText: "Startup-ready \u2022 Investor-friendly \u2022 Dispute-proof",
    icon: "users",
    serviceID: "CO-FOUNDER_AGREEMENT_DRAFTING",
    contentTitle: "Why a Co-Founder Agreement Is Crucial",
    contentDescription:
      "A Co-Founder Agreement establishes clarity among founders, safeguards intellectual property, and creates a strong legal foundation required for scaling and raising investment.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 3999,
    theme: {
      orb1: "bg-indigo-500/20",
      orb2: "bg-purple-500/20",
      iconBg: "from-indigo-500 to-purple-500",
      badgeText: "text-purple-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-indigo-600",
    primaryBg: "bg-gradient-to-r from-indigo-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-indigo-700 to-purple-700",
    benefits: [
      {
        icon: "gavel",
        description: "Prevents conflicts among founders by clearly defining rights and obligations.",
      },
      {
        icon: "checkCircle",
        description: "Clarifies equity ownership, contributions, and decision-making authority.",
      },
      {
        icon: "shield",
        description: "Protects business continuity and investor confidence.",
      },
      {
        icon: "fileText",
        description: "Defines roles, responsibilities, profit-sharing, and exit mechanisms.",
      },
    ],
    faqs: [
      {
        question: "What is a Co-Founder Agreement?",
        answer:
          "It is a legal contract between startup founders defining equity ownership, roles, responsibilities, decision-making, and exit mechanisms.",
      },
      {
        question: "Why is a Co-Founder Agreement important?",
        answer:
          "It prevents founder disputes, protects the startup's future, and is essential for raising external investment.",
      },
      {
        question: "Does it cover intellectual property?",
        answer: "Yes. It clearly assigns ownership of intellectual property created by founders to the company.",
      },
      {
        question: "Can the agreement be customized?",
        answer:
          "Absolutely. Lawizer drafts agreements tailored to your startup's structure, stage, and long-term vision.",
      },
    ],
    sections: [
      {
        title: "Critical for Every Startup",
        icon: "",
        type: "alert",
        data: [],
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
    ],
    addons: [
      "Co-Founder\\nAgreement Draft",
      "Equity & Vesting\\nClauses",
      "IP Ownership\\nProtection",
      "Exit & Dispute\\nResolution",
    ],
  },
  "service-agreement-term-sheet": {
    title: "Service Agreement & Term Sheet Drafting",
    subtitle: "Clear, enforceable contracts defining scope, fees, deliverables, and timelines.",
    badgeText: "Scope \u2022 Fees \u2022 Timelines \u2022 Enforceable",
    icon: "fileText",
    serviceID: "SERVICE_AGREEMENT_&_TERM_SHEET_DRAFTING",
    contentTitle: "Why a Service Agreement Is Critical",
    contentDescription:
      "A properly drafted Service Agreement or Term Sheet ensures clarity on service expectations, payments, and timelines. It legally binds both parties and prevents disputes arising from unclear obligations or deliverables.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 4499,
    theme: {
      orb1: "bg-teal-500/20",
      orb2: "bg-green-500/20",
      iconBg: "from-teal-500 to-green-500",
      badgeText: "text-green-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-teal-600",
    primaryBg: "bg-gradient-to-r from-teal-600 to-green-600",
    primaryHoverBg: "bg-gradient-to-r from-teal-700 to-green-700",
    benefits: [
      {
        icon: "checkCircle",
        description: "Clearly defines scope, fees, deliverables, and timelines for services.",
      },
      {
        icon: "shield",
        description: "Prevents disputes related to services, payments, or expectations.",
      },
      {
        icon: "scale",
        description: "Ensures legal enforceability of service commitments.",
      },
      {
        icon: "clock",
        description: "Provides clarity on obligations, milestones, and timelines.",
      },
    ],
    faqs: [
      {
        question: "What is a Service Agreement?",
        answer:
          "A Service Agreement is a legally binding document that defines the scope of services, fees, deliverables, and timelines between parties.",
      },
      {
        question: "What is a Term Sheet in service arrangements?",
        answer:
          "A Term Sheet is a preliminary, usually non-binding document that outlines key commercial terms before a detailed Service Agreement is executed.",
      },
      {
        question: "Why is defining scope and timelines important?",
        answer:
          "Clear scope, fees, and timelines prevent misunderstandings, reduce disputes, and ensure enforceability of service obligations.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Details of the service provider and client",
          "Scope of services and deliverables",
          "Fees, payment terms, and deadlines",
          "Service timelines and milestones",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "clock",
        type: "grid",
        data: [
          "Drafting of Service Agreements or Term Sheets",
          "Clear definition of scope, fees, and deliverables",
          "Timeline and milestone structuring",
          "Guidance on obligations and legal clauses",
        ],
      },
    ],
    addons: [
      "Service Agreement\\nDraft",
      "Term Sheet\\nDraft",
      "Milestone &\\nTimeline Clauses",
      "Scope & Fees\\nDefinition",
    ],
  },
  "consultancy-agreement": {
    title: "Consultancy Agreement Drafting",
    subtitle:
      "A legally binding contract defining scope, deliverables, fees, and confidentiality for consultancy engagements.",
    badgeText: "Clear scope \u2022 Secure payments \u2022 Confidentiality protected",
    icon: "fileText",
    serviceID: "CONSULTANCY_AGREEMENT_DRAFTING",
    contentTitle: "Why a Consultancy Agreement Is Essential",
    contentDescription:
      "A Consultancy Agreement sets clear expectations, protects confidential information, and provides a legally enforceable framework for professional engagements.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 3199,
    theme: {
      orb1: "bg-cyan-500/20",
      orb2: "bg-blue-500/20",
      iconBg: "from-cyan-500 to-blue-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-cyan-600",
    primaryBg: "bg-gradient-to-r from-cyan-600 to-blue-600",
    primaryHoverBg: "bg-gradient-to-r from-cyan-700 to-blue-700",
    benefits: [
      {
        icon: "shield",
        description: "Protects the legal and financial interests of both the consultant and the company.",
      },
      {
        icon: "checkCircle",
        description: "Clearly defines scope of work, deliverables, timelines, and payment terms.",
      },
      {
        icon: "users",
        description: "Prevents misuse of confidential and proprietary information.",
      },
      {
        icon: "fileText",
        description: "Customized drafting aligned with your business requirements.",
      },
    ],
    faqs: [
      {
        question: "What is a Consultancy Agreement?",
        answer:
          "It is a legal contract defining the relationship, scope of work, deliverables, fees, and confidentiality obligations between a consultant and a company.",
      },
      {
        question: "Why is defining scope important?",
        answer: "Clear scope prevents disputes related to additional work, delayed delivery, and payment conflicts.",
      },
      {
        question: "Does it protect confidential information?",
        answer:
          "Yes. The agreement includes confidentiality and non-disclosure clauses to safeguard sensitive business information.",
      },
    ],
    sections: [
      {
        title: "Avoid Scope & Payment Disputes",
        icon: "",
        type: "alert",
        data: [],
      },
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Consultant and company details",
          "Scope of work and deliverables",
          "Fees, payment schedule, and duration",
          "Confidentiality and IP ownership requirements",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Tailored consultancy agreement",
          "Clear scope and milestone definition",
          "Payment and termination clauses",
          "Confidentiality and IP protection",
        ],
      },
    ],
    addons: [
      "Consultancy\\nAgreement Draft",
      "Scope & Milestone\\nDefinition",
      "Payment &\\nTermination Clauses",
      "Confidentiality\\n& IP Protection",
    ],
  },
  "licensing-agreement": {
    title: "Licensing Agreement Drafting",
    subtitle:
      "A legally binding agreement governing the licensed use of intellectual property, technology, or products.",
    badgeText: "IP protection \u2022 Royalties \u2022 Enforceable terms",
    icon: "fileText",
    serviceID: "LICENSING_AGREEMENT_DRAFTING",
    contentTitle: "Why a Licensing Agreement Is Critical",
    contentDescription:
      "A Licensing Agreement enables you to monetize intellectual property while retaining ownership. It clearly defines how, where, and for how long your IP can be used, protecting both revenue and legal rights.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 5499,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-pink-500/20",
      iconBg: "from-red-500 to-pink-500",
      badgeText: "text-pink-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-600",
    primaryBg: "bg-gradient-to-r from-red-600 to-pink-600",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-pink-700",
    benefits: [
      {
        icon: "shield",
        description: "Protects intellectual property rights and revenue streams.",
      },
      {
        icon: "scale",
        description: "Ensures legally enforceable usage terms and restrictions.",
      },
      {
        icon: "gavel",
        description: "Clearly defines royalties, scope of use, and license terms.",
      },
    ],
    faqs: [
      {
        question: "What is a Licensing Agreement?",
        answer:
          "A Licensing Agreement allows one party (the licensee) to use intellectual property, technology, or products owned by another party (the licensor) under defined terms.",
      },
      {
        question: "Why is a Licensing Agreement important?",
        answer:
          "It protects the licensor's IP and revenue by clearly defining usage rights, restrictions, royalties, and legal enforceability.",
      },
      {
        question: "What details must be clearly defined?",
        answer:
          "The agreement must specify the scope of the license, royalty or fee structure, duration, territory, and termination conditions.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Licensor and licensee details",
          "Scope of licensed intellectual property",
          "Royalty structure or license fees",
          "Duration, territory, and special conditions",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "fileText",
        type: "grid",
        data: [
          "Customized Licensing Agreement drafting",
          "Clear royalty, scope, and term definitions",
          "Risk-mitigated structure protecting IP ownership",
          "Legally enforceable agreement aligned with business goals",
        ],
      },
    ],
    addons: [
      "Licensing\\nAgreement Draft",
      "Royalty &\\nScope Definition",
      "IP Ownership\\nProtection",
      "Duration &\\nTerritory Clauses",
    ],
  },
  "ip-assignment-agreement": {
    title: "IP Assignment Agreement Drafting",
    subtitle: "A legally enforceable document to formally transfer intellectual property ownership.",
    badgeText: "Clear ownership \u2022 Dispute prevention \u2022 Registration-ready",
    icon: "shield",
    serviceID: "IP_ASSIGNMENT_AGREEMENT_DRAFTING",
    contentTitle: "Why an IP Assignment Agreement Is Essential",
    contentDescription:
      "An IP Assignment Agreement ensures that ownership of intellectual property is legally transferred, eliminating ambiguity and protecting the assignee from future claims.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 4999,
    theme: {
      orb1: "bg-purple-500/20",
      orb2: "bg-indigo-500/20",
      iconBg: "from-purple-500 to-indigo-500",
      badgeText: "text-indigo-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-purple-600",
    primaryBg: "bg-gradient-to-r from-purple-600 to-indigo-600",
    primaryHoverBg: "bg-gradient-to-r from-purple-700 to-indigo-700",
    benefits: [
      {
        icon: "shield",
        description: "Ensures lawful and complete transfer of intellectual property rights.",
      },
      {
        icon: "scale",
        description: "Prevents future disputes related to IP ownership.",
      },
      {
        icon: "gavel",
        description: "Professionally drafted IP assignment agreements.",
      },
      {
        icon: "fileText",
        description: "Guidance on registration, where applicable.",
      },
    ],
    faqs: [
      {
        question: "What is an Intellectual Property Assignment Agreement?",
        answer:
          "It is a legal document that transfers ownership of intellectual property from one party (assignor) to another (assignee).",
      },
      {
        question: "Why is a formal IP assignment agreement necessary?",
        answer:
          "Without a written agreement, IP ownership can remain unclear, leading to disputes. A formal assignment legally secures ownership.",
      },
      {
        question: "What types of intellectual property can be assigned?",
        answer:
          "The agreement can cover copyrights, trademarks, patents, trade secrets, and other intellectual property rights.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Details of the intellectual property being assigned",
          "Assignor and assignee information",
          "Scope and nature of the IP transfer",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "gavel",
        type: "grid",
        data: [
          "Drafting legally sound IP assignment agreements",
          "Clear definition of ownership transfer",
          "Protection against future ownership claims",
          "Registration guidance, if applicable",
        ],
      },
    ],
    addons: [
      "IP Assignment\\nAgreement Draft",
      "Ownership\\nTransfer Clauses",
      "Future Claims\\nProtection",
      "Registration\\nGuidance",
    ],
  },
  "business-partnership-agreement": {
    title: "Business Partnership Agreement Drafting",
    subtitle:
      "A legally enforceable agreement defining investment, profit-sharing, roles, and exit mechanisms among partners.",
    badgeText: "Custom-drafted \u2022 Legally enforceable \u2022 Dispute-proof",
    icon: "users",
    serviceID: "BUSINESS_PARTNERSHIP_AGREEMENT_DRAFTING",
    contentTitle: "Why a Business Partnership Agreement Is Essential",
    contentDescription:
      "A well-drafted partnership agreement is the foundation of a stable business relationship. It clearly documents expectations, prevents misunderstandings, and safeguards the interests of all partners from day one.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 4499,
    theme: {
      orb1: "bg-orange-500/20",
      orb2: "bg-yellow-500/20",
      iconBg: "from-orange-500 to-yellow-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-600",
    primaryBg: "bg-gradient-to-r from-orange-600 to-yellow-600",
    primaryHoverBg: "bg-gradient-to-r from-orange-700 to-yellow-700",
    benefits: [
      {
        icon: "shield",
        description: "Prevents conflicts among partners by clearly defining rights and obligations.",
      },
      {
        icon: "badgeIndianRupee",
        description: "Provides clarity on capital contribution, investment, and profit-sharing ratios.",
      },
      {
        icon: "scale",
        description: "Legally enforceable document in case of disputes or disagreements.",
      },
      {
        icon: "fileText",
        description: "Agreement tailored specifically to your business model and partnership structure.",
      },
    ],
    faqs: [
      {
        question: "What is a Business Partnership Agreement?",
        answer:
          "It is a legal contract between business partners that defines capital contribution, profit-sharing, management roles, rights, responsibilities, and exit mechanisms.",
      },
      {
        question: "Why is a Partnership Agreement necessary?",
        answer:
          "It prevents conflicts, provides legal clarity, and protects partners in case of disputes by clearly documenting financial and operational terms.",
      },
      {
        question: "Is a partnership agreement legally enforceable?",
        answer:
          "Yes. A properly drafted and executed partnership agreement is legally enforceable and can be relied upon in court or arbitration.",
      },
      {
        question: "Can the agreement be customized?",
        answer:
          "Absolutely. Lawizer drafts partnership agreements customized to your business, partner roles, and long-term goals.",
      },
    ],
    sections: [
      {
        title: "Highly Recommended Before Starting Operations",
        icon: "",
        type: "alert",
        data: [],
      },
      {
        title: "Pre-Requisites for Drafting the Agreement",
        icon: "checkCircle",
        type: "list",
        data: [
          "Details of all partners (name, address, identity proof)",
          "Capital contribution and investment amount of each partner",
          "Profit-sharing ratio and roles & responsibilities",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Professionally drafted partnership agreement",
          "Clear clauses on management, profit sharing, and decision-making",
          "Exit, retirement, and dispute resolution clauses",
          "Clause-wise explanation before finalisation",
        ],
      },
    ],
    addons: [
      "Partnership\\nAgreement Draft",
      "Profit Sharing\\nClauses",
      "Dispute Resolution\\nClauses",
      "Exit & Retirement\\nClauses",
    ],
  },
  "saas-agreement": {
    title: "Software as a Service (SaaS) Agreement",
    subtitle: "Legally structured agreements for subscription-based software platforms.",
    badgeText: "Subscription \u2022 IP \u2022 SLA \u2022 Compliance",
    icon: "fileText",
    serviceID: "SOFTWARE_AS_A_SERVICE_AGREEMENT",
    contentTitle: "Why a Customized SaaS Agreement Is Crucial",
    contentDescription:
      "Standard contracts are insufficient for SaaS businesses. A customized SaaS Agreement clearly defines licensing boundaries, service levels, data responsibilities, and revenue protection for subscription-based software platforms.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 5999,
    theme: {
      orb1: "bg-indigo-500/20",
      orb2: "bg-purple-500/20",
      iconBg: "from-indigo-500 to-purple-500",
      badgeText: "text-purple-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-indigo-600",
    primaryBg: "bg-gradient-to-r from-indigo-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-indigo-700 to-purple-700",
    benefits: [
      {
        icon: "shield",
        description: "Protects software intellectual property, revenue, and service obligations.",
      },
      {
        icon: "scale",
        description: "Prevents misuse of software and ensures regulatory compliance.",
      },
      {
        icon: "gavel",
        description: "Subscription-based SaaS agreement drafting.",
      },
      {
        icon: "fileText",
        description: "Clear guidance on IP ownership, SLA, and termination clauses.",
      },
    ],
    faqs: [
      {
        question: "What is a SaaS Agreement?",
        answer:
          "A SaaS Agreement governs the subscription, licensing, support obligations, and intellectual property rights for cloud-based software services.",
      },
      {
        question: "Why is a dedicated SaaS Agreement necessary?",
        answer:
          "SaaS businesses operate on subscription models with ongoing service delivery. A dedicated agreement protects IP, revenue streams, and clearly defines service obligations.",
      },
      {
        question: "What are the key clauses in a SaaS Agreement?",
        answer:
          "It typically includes subscription terms, IP ownership, Service Level Agreements (SLA), data handling, termination conditions, and liability limitations.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Software provider and client details",
          "Subscription model and pricing structure",
          "IP ownership and licensing scope",
          "Support, SLA, and maintenance terms",
          "Termination, suspension, and liability clauses",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "gavel",
        type: "grid",
        data: [
          "Customized SaaS subscription agreement",
          "Clearly defined IP ownership and licensing rights",
          "Service Level Agreement (SLA) structuring",
          "Termination, suspension, and liability protection clauses",
        ],
      },
    ],
    addons: [
      "SaaS Subscription\\nAgreement Draft",
      "IP Ownership\\n& Licensing",
      "SLA\\nStructuring",
      "Termination &\\nLiability Clauses",
    ],
  },
  "employment-agreement": {
    title: "Employment Agreement Drafting",
    subtitle: "A legally compliant contract defining roles, salary, benefits, and termination terms.",
    badgeText: "Labour-law compliant \u2022 Dispute prevention \u2022 Clear obligations",
    icon: "users",
    serviceID: "EMPLOYMENT_AGREEMENT_DRAFTING",
    contentTitle: "Why a Compliant Employment Agreement Is Essential",
    contentDescription:
      "A strong employment agreement creates a clear framework for the working relationship, reduces legal risk, and ensures compliance with labour and employment laws.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 3499,
    theme: {
      orb1: "bg-green-500/20",
      orb2: "bg-teal-500/20",
      iconBg: "from-green-500 to-teal-500",
      badgeText: "text-teal-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-green-600",
    primaryBg: "bg-gradient-to-r from-green-600 to-teal-600",
    primaryHoverBg: "bg-gradient-to-r from-green-700 to-teal-700",
    benefits: [
      {
        icon: "checkCircle",
        description: "Provides clarity on employee rights and employer obligations.",
      },
      {
        icon: "shield",
        description: "Prevents disputes over compensation, termination, or confidentiality.",
      },
      {
        icon: "scale",
        description: "Ensures compliance with labour and employment laws.",
      },
      {
        icon: "fileText",
        description: "Includes clause-wise explanation on non-compete, confidentiality, and termination.",
      },
    ],
    faqs: [
      {
        question: "What is an Employment Agreement?",
        answer:
          "It is a legal document outlining the terms of employment, including roles, salary, benefits, and termination policies.",
      },
      {
        question: "Why is an Employment Agreement important?",
        answer:
          "It provides clarity on employee rights and employer obligations, ensures compliance with labour laws, and prevents disputes over compensation or termination.",
      },
      {
        question: "Does the agreement cover confidentiality and non-compete clauses?",
        answer:
          "Yes. The agreement includes detailed clauses on confidentiality, non-compete, and termination with proper legal explanation.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Employee and employer details",
          "Compensation, role, responsibilities, and benefits",
          "Duration and termination clauses",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Drafting legally compliant employment agreements",
          "Clause explanation including non-compete and confidentiality",
          "Clear termination and notice-period clauses",
          "Advice on dispute prevention and compliance",
        ],
      },
    ],
    addons: [
      "Employment\\nAgreement Draft",
      "Non-Compete &\\nConfidentiality",
      "Termination &\\nNotice Period",
      "Labour Law\\nCompliance",
    ],
  },
  "franchise-agreement": {
    title: "Franchise Agreement Drafting",
    subtitle: "A legally sound contract defining rights, obligations, royalties, and operational standards.",
    badgeText: "Brand protection \u2022 Indian law compliant \u2022 Dispute prevention",
    icon: "building2",
    serviceID: "FRANCHISE_AGREEMENT_DRAFTING",
    contentTitle: "Why a Franchise Agreement Is Crucial",
    contentDescription:
      "A strong Franchise Agreement safeguards brand integrity and creates a clear, enforceable framework for a successful franchisor\u2013franchisee relationship.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 6999,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-yellow-600",
    primaryBg: "bg-gradient-to-r from-yellow-500 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
    benefits: [
      {
        icon: "shield",
        description: "Protects the franchisor's brand identity and business model.",
      },
      {
        icon: "checkCircle",
        description: "Ensures franchisee compliance with quality and operational standards.",
      },
      {
        icon: "scale",
        description: "Prevents disputes related to royalties, territory, or termination.",
      },
      {
        icon: "users",
        description: "Drafting franchise agreements compliant with Indian laws.",
      },
    ],
    faqs: [
      {
        question: "What is a Franchise Agreement?",
        answer:
          "A Franchise Agreement is a legal contract between a franchisor (brand owner) and a franchisee defining rights, obligations, royalties, territory, and operational standards.",
      },
      {
        question: "Why is a Franchise Agreement important for the franchisor?",
        answer:
          "It protects the franchisor's brand and business model while ensuring franchisee compliance with quality and operational standards.",
      },
      {
        question: "What key details should be clearly defined?",
        answer:
          "The agreement must define rights, obligations, royalty structure, territory, and termination terms to prevent disputes.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites from Client",
        icon: "checkCircle",
        type: "list",
        data: [
          "Franchisor and franchisee details",
          "Franchise model, fees, and territory",
          "Operational guidelines and royalty structure",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "fileText",
        type: "grid",
        data: [
          "Drafting franchise agreements compliant with Indian laws",
          "Clause-by-clause legal explanation",
          "Clear definition of rights, obligations, and royalties",
          "Guidance on registration, if required",
        ],
      },
    ],
    addons: [
      "Franchise\\nAgreement Draft",
      "Royalty &\\nTerritory Clauses",
      "Brand Protection\\nClauses",
      "Clause-by-Clause\\nExplanation",
    ],
  },
  "letter-of-intent": {
    title: "Letter of Intent (LOI) Drafting",
    subtitle: "A preliminary legal document defining intent, key terms, and negotiation framework.",
    badgeText: "Preliminary terms \u2022 Negotiation clarity \u2022 Risk reduction",
    icon: "fileText",
    serviceID: "LETTER_OF_INTENT_DRAFTING",
    contentTitle: "Why a Letter of Intent Is Important",
    contentDescription:
      "A Letter of Intent helps parties align on essential commercial terms before entering complex legal agreements, reducing misunderstandings and strengthening negotiations.",
    section1Title: "Key Protections & Benefits",
    price: 999,
    originalPrice: 2999,
    theme: {
      orb1: "bg-cyan-500/20",
      orb2: "bg-blue-500/20",
      iconBg: "from-cyan-500 to-blue-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-cyan-600",
    primaryBg: "bg-gradient-to-r from-cyan-600 to-blue-600",
    primaryHoverBg: "bg-gradient-to-r from-cyan-700 to-blue-700",
    benefits: [
      {
        icon: "users",
        description: "Establishes mutual understanding and preliminary transaction terms.",
      },
      {
        icon: "checkCircle",
        description: "Reduces misunderstandings before drafting formal contracts.",
      },
      {
        icon: "scale",
        description: "LOIs drafted specifically for your business transaction.",
      },
      {
        icon: "shield",
        description: "Clear guidance on binding vs non-binding clauses.",
      },
    ],
    faqs: [
      {
        question: "What is a Letter of Intent (LOI)?",
        answer:
          "A Letter of Intent is a document expressing a preliminary intention to enter into a business transaction, outlining key commercial terms before a formal contract is executed.",
      },
      {
        question: "Is a Letter of Intent legally binding?",
        answer:
          "An LOI may contain both binding and non-binding clauses. Typically, confidentiality and exclusivity clauses are binding, while commercial terms remain non-binding.",
      },
      {
        question: "Why use an LOI before a formal agreement?",
        answer:
          "An LOI helps align expectations early, reduces negotiation risks, and saves time and cost before drafting detailed legal agreements.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Drafting",
        icon: "checkCircle",
        type: "list",
        data: [
          "Details of all involved parties",
          "Transaction overview and commercial intent",
          "Preliminary terms and timelines",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Customized Letter of Intent drafting",
          "Clear distinction between binding and non-binding clauses",
          "Commercially aligned structure for negotiations",
          "Legally sound documentation to support final agreements",
        ],
      },
    ],
    addons: ["LOI\\nDraft", "Binding vs\\nNon-Binding Clauses", "Negotiation\\nFramework", "Commercial\\nAlignment"],
  },
  "power-of-attorney-registration": {
    title: "Registration of Power of Attorney (POA)",
    subtitle: "Ensure your Power of Attorney is legally enforceable and valid for property and financial matters.",
    badgeText: "Lawizer guides you through West Bengal registration requirements.",
    icon: "gavel",
    serviceID: "REGISTRATION_OF_POWER_OF_ATTORNEY",
    contentTitle: "Why POA Registration is Mandatory for Property",
    contentDescription:
      "Registration converts the POA into a public record, ensuring authenticity and preventing legal challenges.",
    section1Title: "Key Benefits of Lawizer",
    price: 999,
    originalPrice: 4999,
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
        description: "A registered POA is legally enforceable and accepted by institutions.",
      },
      {
        icon: "shield",
        description: "Guidance through West Bengal registration requirements.",
      },
      {
        icon: "users",
        description: "Prevents disputes by establishing validity of granted power.",
      },
    ],
    faqs: [
      {
        question: "Why is registering a POA necessary?",
        answer: "Registration ensures enforceability and acceptance by institutions.",
      },
      {
        question: "Is registration mandatory for property matters?",
        answer: "Yes, registration is generally required for immovable property transactions.",
      },
      {
        question: "What does Lawizer provide?",
        answer: "Stamp duty guidance and complete registration process support.",
      },
      {
        question: "How does Sub-Registrar verify POA?",
        answer: "Identity verification and authentication during registration.",
      },
      {
        question: "Can overseas POA be registered?",
        answer: "Yes, after embassy authentication and local stamping.",
      },
    ],
    sections: [
      {
        title: "Lawizer Deliverables",
        icon: "fileText",
        type: "grid",
        data: ["Guidance on stamp duty & registration", "Registered POA document", "Step-by-step process support"],
      },
    ],
    addons: [
      "Stamp Duty\\nGuidance",
      "Registered POA\\nDocument",
      "Step-by-Step\\nProcess Support",
      "Legal Validity\\nAssurance",
    ],
  },
  "power-of-attorney-drafting": {
    title: "Power of Attorney (POA) Drafting",
    subtitle: "A legally binding document authorizing someone to act on your behalf.",
    badgeText: "Lawizer drafts your POA with full legal clarity and compliance.",
    icon: "gavel",
    serviceID: "POWER_OF_ATTORNEY_DRAFTING",
    contentTitle: "Why a Properly Drafted POA Is Essential",
    contentDescription:
      "A professionally drafted POA defines authority clearly, prevents misuse, and ensures enforceability.",
    section1Title: "Key Protections and Benefits",
    price: 999,
    originalPrice: 2499,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-yellow-600",
    primaryBg: "bg-gradient-to-r from-yellow-500 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
    benefits: [
      {
        icon: "users",
        description: "Authorizes another person to legally act on your behalf.",
      },
      {
        icon: "shield",
        description: "Protects your interests in transactions.",
      },
      {
        icon: "scale",
        description: "Prevents misuse by defining clear limitations.",
      },
      {
        icon: "home",
        description: "Ensures validity under local laws.",
      },
      {
        icon: "fileText",
        description: "Professionally drafted document outlining powers.",
      },
    ],
    faqs: [
      {
        question: "What is a Power of Attorney?",
        answer: "A legal document authorizing someone to act on your behalf.",
      },
      {
        question: "Why is POA important for property?",
        answer: "It allows execution of transactions when principal is absent.",
      },
      {
        question: "Difference between General and Special POA?",
        answer: "General grants broad powers; Special limits to specific acts.",
      },
      {
        question: "Is registration necessary?",
        answer: "Registered POA is legally enforceable and widely accepted.",
      },
      {
        question: "What details are required?",
        answer: "Principal & attorney details with specific powers granted.",
      },
    ],
    sections: [
      {
        title: "Information Required for Drafting",
        icon: "fileText",
        type: "list",
        data: [
          "Principal and attorney details with ID proofs",
          "Scope of powers (general or specific)",
          "Property or asset details (if applicable)",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "home",
        type: "grid",
        data: ["Legally compliant POA document", "Clause-wise explanation", "Digital copy with notarization guidance"],
      },
    ],
    addons: [
      "Legally Compliant\\nDrafted POA",
      "Clearly Defined\\nPowers & Limits",
      "Clause-wise\\nExplanation",
      "Notarization &\\nRegistration Guidance",
    ],
  },
};
