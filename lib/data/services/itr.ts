import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  "itr-6": {
    title: "ITR-6 Filing",
    subtitle: "For all Companies registered under the Companies Act.",
    badgeText: "Private Ltd \u2022 Public Ltd \u2022 OPC",
    icon: "building",
    serviceID: "ITR-6_FILING",
    contentTitle: "Overview",
    contentDescription:
      "ITR-6 is the prescribed Income Tax Return for companies registered under the Companies Act. It requires filing with audited financial statements, mandatory digital signature, and detailed corporate tax or MAT computation where applicable.",
    section1Title: "Key Highlights of ITR-6",
    price: 4999,
    originalPrice: 0,
    theme: {
      orb1: "bg-purple-500/20",
      orb2: "bg-violet-500/20",
      iconBg: "from-purple-500 to-violet-500",
      badgeText: "text-purple-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-purple-600",
    primaryBg: "bg-gradient-to-r from-purple-600 to-violet-600",
    primaryHoverBg: "bg-gradient-to-r from-purple-700 to-violet-700",
    benefits: [
      {
        icon: "building",
        description: "Mandatory return for all companies registered under Companies Act",
      },
      {
        icon: "fileText",
        description: "Accurate filing with audited financial statements",
      },
      {
        icon: "scale",
        description: "Correct computation of corporate tax & MAT (if applicable)",
      },
      {
        icon: "shield",
        description: "Ensures statutory compliance & avoids penalties",
      },
    ],
    faqs: [
      {
        question: "Who is required to file ITR-6?",
        answer:
          "ITR-6 is mandatory for all companies registered under the Companies Act, including Private Limited, Public Limited, and OPCs.",
      },
      {
        question: "Can any company avoid filing ITR-6?",
        answer:
          "Only companies claiming exemption under Section 11 (charitable or religious purposes) are excluded and must file ITR-7 instead.",
      },
      {
        question: "Are audited financial statements mandatory?",
        answer:
          "Yes. Companies must submit audited Balance Sheet, Profit & Loss Account, and Audit Report while filing ITR-6.",
      },
      {
        question: "Is Digital Signature mandatory for ITR-6?",
        answer: "Yes. ITR-6 must be filed using a valid Digital Signature Certificate (DSC) of the company.",
      },
      {
        question: "What is MAT in ITR-6?",
        answer:
          "Minimum Alternate Tax (MAT) applies to companies paying low or no tax. MAT computation details must be included in ITR-6 if applicable.",
      },
    ],
    sections: [
      {
        title: "Who Should File ITR-6",
        icon: "checkCircle",
        type: "list",
        data: [
          "Private Limited Companies",
          "Public Limited Companies",
          "One Person Companies (OPC)",
          "Any company registered under Companies Act, 2013 or 1956",
        ],
      },
      {
        title: "Mandatory Documents",
        icon: "fileText",
        type: "list",
        data: [
          "PAN Card of the Company",
          "Audited Balance Sheet & Profit and Loss Account",
          "Audit Report (mandatory)",
          "Details for Minimum Alternate Tax (MAT), if applicable",
          "Digital Signature Certificate (DSC) for filing",
        ],
      },
      {
        title: "Important Exclusions",
        icon: "gavel",
        type: "alert",
        data: [
          "Companies claiming exemption under Section 11",
          "Charitable or religious companies (they must file ITR-7 instead)",
        ],
      },
    ],
    addons: ["ITR-6\\nFiling", "Acknowledgment\\nReceipt", "MAT\\nComputation", "DSC-Based\\nFiling"],
  },
  "itr-1": {
    title: "ITR-1 (Sahaj) Filing",
    subtitle: "For salaried individuals with simple income structure.",
    badgeText: "CA-assisted \u2022 Fast \u2022 Accurate",
    icon: "users",
    serviceID: "ITR_1_FILLING",
    contentTitle: "Who Should File ITR-1?",
    contentDescription: "ITR-1 is for salaried individuals and pensioners with total income up to \u20b950 Lakh.",
    section1Title: "Key Highlights",
    price: 499,
    originalPrice: 50,
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
        icon: "users",
        description: "For resident individuals with income primarily from salary and one house property",
      },
      {
        icon: "checkCircle",
        description: "Applicable where total income does not exceed \u20b950 Lakh",
      },
      {
        icon: "fileText",
        description: "Income computed based on Form 16, AIS, and Form 26AS",
      },
      {
        icon: "shield",
        description: "Filed accurately by professionals to ensure compliance",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for ITR-1?",
        answer: "Resident Individuals with total income up to \u20b950 Lakh and simple income structure.",
      },
      {
        question: "What is the income limit?",
        answer: "Total income must not exceed \u20b950 Lakh.",
      },
      {
        question: "Can I file if I have two properties?",
        answer: "No, you must file ITR-2 instead.",
      },
      {
        question: "Is Form 16 required?",
        answer: "Yes, along with PAN, Aadhaar, and investment proofs.",
      },
    ],
    sections: [
      {
        title: "Applicable To",
        icon: "checkCircle",
        type: "list",
        data: [
          "Resident Individual with Total Income up to \u20b950 Lakh",
          "Income from Salary or Pension",
          "Income from One House Property",
          "Income from Other Sources (Interest)",
          "Agricultural Income up to \u20b95,000",
        ],
      },
      {
        title: "Documents Needed",
        icon: "fileText",
        type: "list",
        data: ["PAN & Aadhaar", "Form 16", "Form 26AS & AIS", "Interest Certificates", "Investment Proofs (80C, 80D)"],
      },
      {
        title: "Not Applicable To",
        icon: "home",
        type: "list",
        data: [
          "Non-residents (NR/NOR)",
          "More than one house property",
          "Capital gains or business income",
          "Director in company / unlisted equity holder",
        ],
      },
    ],
    addons: ["CA-Assisted\\nFiling", "Accurate &\\nCompliant", "Tax Saving\\nGuidance", "Quick Online\\nProcess"],
  },
  "itr-2": {
    title: "ITR-2 Filing",
    subtitle: "For individuals & HUFs with complex income structures.",
    badgeText: "Capital gains \u2022 Foreign assets \u2022 High-income",
    icon: "badgeIndianRupee",
    serviceID: "ITR-2_FILING",
    contentTitle: "When Is ITR-2 Applicable?",
    contentDescription: "ITR-2 applies to taxpayers with capital gains, foreign income, or multiple house properties.",
    section1Title: "Why Choose Professional Filing",
    price: 799,
    originalPrice: 50,
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
        icon: "badgeIndianRupee",
        description: "Ideal for capital gains & foreign asset holders",
      },
      {
        icon: "fileText",
        description: "Handles multiple properties & investments",
      },
      {
        icon: "scale",
        description: "Ensures compliance with Income Tax rules",
      },
      {
        icon: "shield",
        description: "Avoids notices with accurate disclosures",
      },
    ],
    faqs: [
      {
        question: "Who should file ITR-2?",
        answer: "Individuals or HUFs with capital gains, foreign income, or multiple properties.",
      },
      {
        question: "If I sell shares, which ITR applies?",
        answer: "ITR-2 must be filed for capital gains income.",
      },
      {
        question: "Can a company director file ITR-2?",
        answer: "Yes, if no business income exists.",
      },
      {
        question: "What extra documents are needed?",
        answer: "Capital gains, foreign asset disclosures, and multiple property details.",
      },
    ],
    sections: [
      {
        title: "Who Should File ITR-2",
        icon: "checkCircle",
        type: "list",
        data: [
          "Individuals or HUFs not eligible for ITR-1",
          "No business income",
          "Income exceeding \u20b950 lakh",
          "Multiple house properties",
          "Capital gains income",
          "Foreign assets or foreign income",
          "Director in company or unlisted equity holder",
        ],
      },
      {
        title: "Key Documents Required",
        icon: "fileText",
        type: "list",
        data: ["ITR-1 documents", "Capital gains statements", "Foreign asset details", "Rental income statements"],
      },
      {
        title: "Important Exclusion",
        icon: "scale",
        type: "grid",
        data: ["Cannot file if business income exists", "Business income requires ITR-3"],
      },
    ],
    addons: [
      "Capital Gains\\nComputation",
      "Foreign Asset\\nDisclosure",
      "Detailed\\nIncome Reporting",
      "Notice &\\nScrutiny Protection",
    ],
  },
  "itr-5": {
    title: "ITR-5 Filing",
    subtitle: "For Firms, LLPs, AOPs, BOIs & other non-individual entities.",
    badgeText: "Firms \u2022 LLPs \u2022 AOPs \u2022 BOIs",
    icon: "briefcase",
    serviceID: "ITR-5_FILING",
    contentTitle: "Overview",
    contentDescription:
      "ITR-5 is the prescribed Income Tax Return for non-individual entities such as partnership firms, LLPs, AOPs, BOIs, and business trusts. It requires detailed financial reporting, including books of accounts, partner capital details, and audit compliance where applicable.",
    section1Title: "Key Highlights of ITR-5",
    price: 1499,
    originalPrice: 0,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-pink-500/20",
      iconBg: "from-red-500 to-pink-500",
      badgeText: "text-red-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-600",
    primaryBg: "bg-gradient-to-r from-red-600 to-pink-600",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-pink-700",
    benefits: [
      {
        icon: "briefcase",
        description: "Mandatory return for Firms, LLPs, AOPs & BOIs",
      },
      {
        icon: "scale",
        description: "Accurate reporting of partner capital & profit sharing",
      },
      {
        icon: "fileText",
        description: "Proper preparation of Balance Sheet & P&L Account",
      },
      {
        icon: "shield",
        description: "Ensures compliance with audit & tax regulations",
      },
    ],
    faqs: [
      {
        question: "Who is required to file ITR-5?",
        answer:
          "ITR-5 is applicable to non-individual taxpayers such as Firms, LLPs, AOPs, BOIs, Business Trusts, and Investment Funds, excluding companies.",
      },
      {
        question: "Can an LLP file ITR-4?",
        answer: "No. LLPs are specifically required to file ITR-5 and cannot opt for presumptive taxation under ITR-4.",
      },
      {
        question: "Are books of accounts mandatory for ITR-5?",
        answer:
          "Yes. All entities filing ITR-5 must maintain proper books of accounts and prepare financial statements.",
      },
      {
        question: "Is tax audit applicable for ITR-5 filers?",
        answer:
          "Yes. If the entity crosses prescribed turnover limits or meets audit criteria, a tax audit report must be filed along with ITR-5.",
      },
    ],
    sections: [
      {
        title: "Who Should File ITR-5",
        icon: "checkCircle",
        type: "list",
        data: [
          "Partnership Firms (registered or unregistered)",
          "Limited Liability Partnerships (LLPs)",
          "Association of Persons (AOPs)",
          "Body of Individuals (BOIs)",
          "Artificial Juridical Persons, Business Trusts & Investment Funds",
        ],
      },
      {
        title: "Documents Required",
        icon: "fileText",
        type: "list",
        data: [
          "PAN Card of the firm/LLP/entity",
          "Books of Accounts (Balance Sheet & Profit & Loss Account)",
          "Audit Report (if applicable)",
          "Bank Statements",
          "Details of Partner",
          "s Capital Accounts",
        ],
      },
      {
        title: "Important Compliance Requirement",
        icon: "gavel",
        type: "alert",
        data: [
          "Maintenance of Books of Accounts is mandatory",
          "Preparation of Balance Sheet and P&L Account required",
          "Tax Audit report must be attached if audit is applicable",
        ],
      },
    ],
    addons: [
      "ITR-5\\nAcknowledgment",
      "Balance Sheet\\n& P&L Prep",
      "Partner Capital\\nAccount Report",
      "Tax Audit\\nCompliance Check",
    ],
  },
  "itr-4": {
    title: "ITR-4 (Sugam) Filing",
    subtitle: "Simplified return for small businesses under Presumptive Taxation.",
    badgeText: "Presumptive Tax \u2022 Small Business \u2022 Fast Filing",
    icon: "users",
    serviceID: "ITR-4_FILING",
    contentTitle: "Who Should File ITR-4?",
    contentDescription: "ITR-4 is ideal for small businesses and professionals opting for presumptive taxation.",
    section1Title: "Key Benefits",
    price: 699,
    originalPrice: 50,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-yellow-600",
    primaryBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
    primaryHoverBg: "bg-gradient-to-r from-yellow-700 to-orange-700",
    benefits: [
      {
        icon: "users",
        description: "Simple compliance under Presumptive Taxation",
      },
      {
        icon: "fileText",
        description: "No detailed books required",
      },
      {
        icon: "scale",
        description: "Lower compliance burden under 44AD/44ADA/44AE",
      },
      {
        icon: "gavel",
        description: "CA-assisted filing to avoid mistakes",
      },
    ],
    faqs: [
      {
        question: "What is Presumptive Taxation?",
        answer: "It allows eligible taxpayers to declare income at a fixed percentage without maintaining books.",
      },
      {
        question: "Who can file ITR-4?",
        answer: "Resident Individuals, HUFs, or Firms (other than LLP) opting for presumptive taxation.",
      },
      {
        question: "Can LLP file ITR-4?",
        answer: "No, LLP must file ITR-5.",
      },
      {
        question: "Are bank statements required?",
        answer: "Yes, to determine turnover and presumptive income.",
      },
    ],
    sections: [
      {
        title: "Who Should File ITR-4",
        icon: "users",
        type: "list",
        data: [
          "Resident Individuals, HUFs, or Firms (other than LLP)",
          "Total income up to \u20b950 Lakh",
          "Opting for Presumptive Taxation Scheme",
          "Income from Salary / House Property allowed",
        ],
      },
      {
        title: "Documents Required",
        icon: "fileText",
        type: "list",
        data: ["PAN & Aadhaar", "Form 26AS & AIS", "Bank statements for turnover", "Investment proofs"],
      },
      {
        title: "Who Cannot Use ITR-4",
        icon: "gavel",
        type: "grid",
        data: ["Income exceeding \u20b950 Lakh", "Non-residents", "Directors in companies", "Excess capital gains"],
      },
    ],
    addons: [
      "Presumptive\\nComputation",
      "Turnover\\nVerification",
      "Section 44AD /\\n44ADA Compliance",
      "CA-Assisted\\nFast Filing",
    ],
  },
  "itr-3": {
    title: "ITR-3 Filing",
    subtitle: "For individuals & HUFs with business or professional income.",
    badgeText: "Business Income \u2022 Audit Ready \u2022 CA Assisted",
    icon: "trendingUp",
    serviceID: "ITR-3_FILING",
    contentTitle: "Who Should File ITR-3?",
    contentDescription: "ITR-3 applies to entrepreneurs and professionals requiring detailed financial disclosures.",
    section1Title: "Key Benefits",
    price: 1199,
    originalPrice: 0,
    theme: {
      orb1: "bg-orange-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-orange-500 to-red-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-600",
    primaryBg: "bg-gradient-to-r from-orange-600 to-red-600",
    primaryHoverBg: "bg-gradient-to-r from-orange-700 to-red-700",
    benefits: [
      {
        icon: "trendingUp",
        description: "Mandatory for business or professional income",
      },
      {
        icon: "fileText",
        description: "Accurate Balance Sheet & P&L reporting",
      },
      {
        icon: "scale",
        description: "Compliant with Income Tax Act & Section 44AB",
      },
      {
        icon: "gavel",
        description: "Expert handling of complex income structures",
      },
    ],
    faqs: [
      {
        question: "Who must file ITR-3?",
        answer: "Individuals or HUFs with business or professional income.",
      },
      {
        question: "Can partners file ITR-3?",
        answer: "Yes, partners receiving remuneration or interest must file ITR-3.",
      },
      {
        question: "Is ITR-3 required with capital gains?",
        answer: "Yes, once business income exists, ITR-3 becomes mandatory.",
      },
      {
        question: "Is CA assistance recommended?",
        answer: "Yes, due to complexity and audit requirements.",
      },
    ],
    sections: [
      {
        title: "Who Should File ITR-3",
        icon: "users",
        type: "list",
        data: [
          "Individuals or HUFs with Proprietary Business or Profession",
          "Partners receiving remuneration or interest",
          "Business income with capital gains/salary",
          "Entrepreneurs and professionals",
        ],
      },
      {
        title: "Documents Required",
        icon: "fileText",
        type: "list",
        data: [
          "ITR-2 documents",
          "Books of Accounts",
          "Balance Sheet & P&L",
          "Tax Audit Report (if applicable)",
          "Business bank statements",
        ],
      },
      {
        title: "Why Expert Assistance Matters",
        icon: "gavel",
        type: "grid",
        data: [
          "Mandatory financial disclosures",
          "Higher scrutiny by IT Department",
          "Audit compliance under 44AB",
          "Penalty avoidance through accuracy",
        ],
      },
    ],
    addons: ["Balance Sheet\\nReporting", "P&L Statement\\nDisclosure", "Audit\\nCompliance", "CA-Assisted\\nFiling"],
  },
};
