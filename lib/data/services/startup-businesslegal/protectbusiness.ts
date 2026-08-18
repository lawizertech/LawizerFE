import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  ReplyToTrademarkObjectionPage: {
    title: "Reply to Trademark Objection",
    subtitle: "Defend your trademark application with a professionally drafted and timely response.",
    badgeText: "Trademark Objection \u2022 Reply Filing",
    icon: "fileWarning",
    serviceID: "REPLY_TO_TRADEMARK_OBJECTION",
    contentTitle: "Why Replying to a Trademark Objection Matters",
    contentDescription:
      "When the Trademark Registry raises an objection, a legally sound reply must be filed within 30 days. A strong response protects your brand from abandonment, strengthens your ownership claim, and moves your application closer to registration.",
    section1Title: "Key Benefits of Filing a Proper Reply",
    price: 999,
    originalPrice: 0,
    theme: {
      orb1: "bg-yellow-400/20",
      orb2: "bg-red-500/20",
      iconBg: "from-yellow-400 to-red-500",
      badgeText: "text-yellow-200",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-500 to-yellow-500",
    primaryHoverBg: "bg-gradient-to-r from-red-600 to-yellow-600",
    benefits: [
      {
        icon: "shield",
        description: "Protection against Copycats: Strengthens your claim over the brand",
      },
      {
        icon: "checkCircle",
        description: "Secures a Valuable Asset: A registered brand is a critical company asset",
      },
      {
        icon: "fileText",
        description: "Aids in Business Growth: Supports your brand expansion",
      },
      {
        icon: "calendar",
        description: "Builds Credibility: Establishes trust and market credibility",
      },
    ],
    faqs: [
      {
        question: "What is a Trademark Objection?",
        answer:
          "A Trademark Objection means the trademark registry has examined your application and found reasons to object. The objection is issued by the Trademark Department, not a third party.",
      },
      {
        question: "Why is it important to file a reply?",
        answer:
          "A proper reply must be submitted within 30 days of the examination report. Failure to respond may result in the application being marked as 'Abandoned'.",
      },
      {
        question: "How do you respond to a Trademark Objection?",
        answer:
          "Responses require legal understanding and professional drafting. Expert assistance ensures objections are addressed correctly and convincingly.",
      },
      {
        question: "What happens after filing the reply?",
        answer:
          "The reply is submitted online. The application status remains 'Objected' until examination by the Trademark Registry, which typically takes 6\u201312 months.",
      },
    ],
    sections: [
      {
        title: "Prerequisites for Filing Reply",
        icon: "fileText",
        type: "list",
        data: ["Trademark Application Number"],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "Reply drafting support and facilitation",
          "Trademark Registry filing receipt",
          "Screenshot of the reply filing",
        ],
      },
    ],
    addons: [
      "Reply Drafting\\nSupport",
      "TM Registry\\nFiling Receipt",
      "Screenshot of\\nReply Filing",
      "Filed Within\\n30-Day Deadline",
    ],
  },
  TrademarkRegistrationPage: {
    title: "Trademark Registration",
    subtitle: "Secure exclusive rights to your brand identity and safeguard against infringement.",
    badgeText: "Brand Protection \u2022 \u00ae Rights \u2022 Legal Enforcement",
    icon: "penTool",
    serviceID: "TRADEMARK_REGISTRATION",
    contentTitle: "Overview",
    contentDescription:
      "Trademark registration is a legal process for securing exclusive rights over a distinctive brand name, logo, slogan, or symbol that identifies your goods or services. Registered trademarks protect your intellectual property, prevent unauthorized use, and build brand credibility. A registered trademark is valid for 10 years and can be renewed indefinitely.",
    section1Title: "Key Benefits of Trademark Registration",
    price: 999,
    originalPrice: 3499,
    theme: {
      orb1: "bg-[#c92c41]/20",
      orb2: "bg-[#4c3df7]/20",
      iconBg: "from-[#c92c41] to-[#e99b2b]",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-[#c92c41]",
    primaryBg: "bg-gradient-to-r from-[#c92c41] to-[#e99b2b]",
    primaryHoverBg: "bg-gradient-to-r from-[#b12438] to-[#d8891f]",
    benefits: [
      {
        icon: "shield",
        description: "Grants exclusive legal rights to use your brand name, logo, or slogan",
      },
      {
        icon: "shield",
        description: "Protection against misuse or infringement by competitors",
      },
      {
        icon: "trendingUp",
        description: "Enhances business credibility and brand value",
      },
      {
        icon: "fileText",
        description: "Allows use of \u00ae symbol",
      },
      {
        icon: "building2",
        description: "Enables trademark licensing, assignment and franchising",
      },
      {
        icon: "trendingUp",
        description: "Essential for online marketplaces, export, and government tenders",
      },
      {
        icon: "shield",
        description: "TM registration can provide strong legal standing in disputes",
      },
    ],
    faqs: [
      {
        question: "What can be registered as a trademark?",
        answer: "Names, logos, symbols, slogans, shapes, and combinations used to distinguish goods/services.",
      },
      {
        question: "How long does the process take?",
        answer:
          "The legal process involves several stages (filing, examination, publication, registration) and generally takes approximately 6\u201312 months if uncontested by third parties.",
      },
      {
        question: "Can a trademark be renewed?",
        answer:
          "Yes, a registered trademark is valid for 10 years and can be renewed indefinitely by paying the prescribed renewal fee (Form TM-R).",
      },
      {
        question: "What if my application is objected to?",
        answer:
          "If the Examiner raises an objection in the Examination Report, you must file a formal reply within 30 days. You may also be required to attend a hearing.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: [
          "For Individuals/Sole Proprietors/MSME/Startups: Applicant",
          "For Companies/LLP/Partnership Firms: Company/LLP Incorporation Certificate/Partnership Deed, PAN card of entity, Address proof of authorized signatory/partners/directors, Udyam Registration Certificate for MSME discount if applicable, TM-48 Form (authorizes attorney/agent), Copy of logo (optional, required for device marks)",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building2",
        type: "grid",
        data: ["Acknowledgment Receipt with TM Application Number", "Registered Trademark Certificate (upon approval)"],
      },
    ],
    addons: [
      "TM Application\\nAcknowledgment",
      "\u00ae Symbol\\nUsage Right",
      "Brand\\nInfringement Shield",
      "Trademark\\nCertificate",
    ],
  },
  ReplyToCopyrightObjectionPage: {
    title: "Reply to Copyright Objection",
    subtitle: "File a professional reply to copyright objections and secure your registration without delays.",
    badgeText: "Legal Drafting \u2022 Timely Filing \u2022 Expert Handling",
    icon: "penTool",
    serviceID: "REPLY_TO_COPYRIGHT_OBJECTION",
    contentTitle: "Why Responding to an Objection Matters",
    contentDescription:
      "When the Copyright Office raises an objection, it means your application requires clarification or justification. A well-drafted and timely reply is mandatory to avoid rejection. Our legal experts analyze the objection grounds, prepare a professional response, and ensure correct filing within the prescribed timeline.",
    section1Title: "Key Benefits of Filing a Proper Reply",
    price: 999,
    originalPrice: 2499,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-yellow-500 to-red-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-600",
    primaryBg: "bg-gradient-to-r from-[#c92c41] to-[#4c3df7]",
    primaryHoverBg: "bg-gradient-to-r from-[#4c3df7] to-[#c92c41]",
    benefits: [
      {
        icon: "shield",
        description: "Protection against Copycats and Unauthorized Use",
      },
      {
        icon: "checkCircle",
        description: "Enhances Credibility and Market Reputation",
      },
      {
        icon: "fileText",
        description: "Supports Business Growth and Expansion",
      },
      {
        icon: "calendar",
        description: "Secures Legal Backing and Timely Filing",
      },
    ],
    faqs: [
      {
        question: "What is Copyright Objection?",
        answer:
          "Copyright Objection means the copyright department has examined your application and raised concerns. You must respond to clarify and justify your claim.",
      },
      {
        question: "Why file a Reply to Copyright Objection?",
        answer:
          "Submitting a reply within the prescribed time (15\u201330 days) is crucial. Failure to respond can lead to rejection of your application.",
      },
      {
        question: "How to Respond to Copyright Objection?",
        answer:
          "The response requires legal drafting expertise. Our experts help prepare and file the reply according to your objection's grounds.",
      },
      {
        question: "What happens after filing the reply?",
        answer:
          "The copyright department reviews the submitted reply and proceeds with the registration process upon acceptance.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites",
        icon: "fileText",
        type: "list",
        data: ["Copyright Diary Number", "Copyright Objection Notice"],
      },
      {
        title: "Deliverables",
        icon: "calendar",
        type: "grid",
        data: ["Reply Drafting Support and Facilitation", "Filing Receipt for the Reply"],
      },
    ],
    addons: [
      "Expert Reply\\nDrafting",
      "Filing Receipt\\nfor Reply",
      "Timely Filing\\nWithin Deadline",
      "Legal Expert\\nReview",
    ],
  },
  CopyrightRegistrationPage: {
    title: "Copyright Registration",
    subtitle:
      "Legally establish ownership of your original creative works and gain enforceable proof against infringement.",
    badgeText: "Copyright Act \u2022 IP Protection \u2022 Legal Proof",
    icon: "copyright",
    serviceID: "COPYRIGHT_REGISTRATION",
    contentTitle: "Overview",
    contentDescription:
      "Copyright registration is the process of legally establishing the ownership of original creative works such as literary content, art, music, films, software, and more. While copyright exists automatically upon creation, registration provides official proof and makes enforcement easier in case of infringement. The process is done before the Copyright Office, and a certificate is issued upon approval.",
    section1Title: "Key Benefits",
    price: 999,
    originalPrice: 3999,
    theme: {
      orb1: "bg-[#c92c41]/20",
      orb2: "bg-[#4c3df7]/20",
      iconBg: "from-[#c92c41] to-[#e99b2b]",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-[#c92c41]",
    primaryBg: "bg-gradient-to-r from-[#c92c41] to-[#e99b2b]",
    primaryHoverBg: "bg-gradient-to-r from-[#b12438] to-[#d8891f]",
    benefits: [
      {
        icon: "fileText",
        description: "Official record of authorship and ownership",
      },
      {
        icon: "shield",
        description: "Provides legal evidence in infringement disputes",
      },
      {
        icon: "trendingUp",
        description: "Easier to license, sell, or transfer rights",
      },
      {
        icon: "shield",
        description: "Prevents others from copying or distributing your work without permission",
      },
      {
        icon: "building2",
        description: "Enhances commercial value of creative work",
      },
    ],
    faqs: [
      {
        question: "Is registration mandatory for copyright protection?",
        answer:
          "No, copyright protection exists automatically upon creation. However, registration is highly recommended as it provides legal evidence in infringement disputes.",
      },
      {
        question: "What works can be registered?",
        answer:
          "The Copyright Act covers literary, musical, dramatic, and artistic works, cinematograph films, sound recordings, and computer software (including source code).",
      },
      {
        question: "How long does it take?",
        answer:
          "The legal waiting period is 30 days for any objections. If there are no objections, the process generally takes between 2 to 9 months for final registration.",
      },
      {
        question: "Who can apply?",
        answer:
          "The author, the owner of the copyright (if different from the author), or any other person interested in the copyright (such as a publisher or assignee) can apply.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: [
          "Complete copyright application form (Form XIV)",
          "Copies of the work to be registered (2 copies for unpublished, 3 for published works)",
          "Full details of applicant (name, address, nationality, contact)",
          "Author details / declaration",
          "Proof of identity and address (PAN/Aadhaar/Passport/Voter ID)",
          "Statement of applicant",
          "Power of Attorney, if applying through agent/advocate",
          "Title, category, language, and publication details of the work",
          "Statutory fee payment (online/DD/IPO)",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building2",
        type: "grid",
        data: ["Copyright Registration Certificate", "Diary Number for application tracking"],
      },
    ],
    addons: [
      "Copyright\\nRegistration Certificate",
      "Diary Number\\nfor Tracking",
      "Legal Proof of\\nOwnership",
      "Infringement\\nProtection",
    ],
  },
  RenewTrademarkPage: {
    title: "Trademark Renewal",
    subtitle: "Extend your trademark protection for another 10 years and safeguard your brand identity.",
    badgeText: "Form TM-R \u2022 Trademark Act, 1999",
    icon: "refresh",
    serviceID: "TRADEMARK_RENEWAL",
    contentTitle: "Why Trademark Renewal Is Essential",
    contentDescription:
      "Trademark renewal keeps your registration active and enforceable. Filing Form TM-R on time extends statutory protection for another 10 years, preserving goodwill, exclusivity, and legal rights associated with your brand.",
    section1Title: "Key Benefits of Trademark Renewal",
    price: 999,
    originalPrice: 2499,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-blue-500/20",
      iconBg: "from-red-500 to-orange-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-500",
    primaryBg: "bg-gradient-to-r from-red-600 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-orange-600",
    benefits: [
      {
        icon: "shield",
        description: "Protection against copycats \u2014 safeguards your brand from unauthorized use",
      },
      {
        icon: "scale",
        description: "A registered brand is a valuable business asset",
      },
      {
        icon: "trendingUp",
        description: "Facilitates business expansion and licensing",
      },
      {
        icon: "checkCircle",
        description: "Builds credibility and consumer trust in the market",
      },
    ],
    faqs: [
      {
        question: "What is Trademark Renewal?",
        answer:
          "A registered trademark is initially valid for 10 years. Renewal (Form TM-R) extends protection for another 10 years from the renewal date.",
      },
      {
        question: "When should I renew my trademark?",
        answer:
          "You may file renewal anytime before expiry. A one-year grace period is available after expiry with additional fees. If not renewed within this period, the trademark may be treated as abandoned.",
      },
      {
        question: "What fees apply for trademark renewal?",
        answer:
          "Statutory renewal fees depend on the class and applicant type. Additional late fees apply if filed during the grace period.",
      },
      {
        question: "How long does the renewal process take?",
        answer:
          "Online filing and acknowledgement are immediate. Registry processing timelines may vary, but filing receipts and confirmations are issued promptly.",
      },
    ],
    sections: [
      {
        title: "Prerequisites for Trademark Renewal",
        icon: "fileText",
        type: "list",
        data: [
          "Trademark Application / Registration Number (e.g., TM-XXXXXX)",
          "Signed Authorisation (TM-M) or POA if filing via agent",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "building",
        type: "grid",
        data: ["Trademark Registry filing receipt (TM-R)", "Screenshot / PDF of the online filing confirmation"],
      },
    ],
    addons: [
      "TM-R Filing\\nReceipt",
      "Filing\\nConfirmation PDF",
      "10-Year Brand\\nProtection",
      "Renewal Status\\nTracking",
    ],
  },
  SellYourTrademarkPage: {
    title: "Sell Your Trademark",
    subtitle: "Legally transfer your trademark ownership and monetize your brand with a secure assignment process.",
    badgeText: "Trademark Assignment \u2022 Ownership Transfer",
    icon: "badgeIndianRupee",
    serviceID: "SELL_YOUR_TRADEMARK",
    contentTitle: "Why Trademark Assignment Matters",
    contentDescription:
      "A trademark is a valuable intellectual property asset. Through a legally valid assignment process, you can permanently transfer ownership, unlock financial value, and ensure the new owner receives full statutory protection.",
    section1Title: "Key Benefits of Selling a Trademark",
    price: 999,
    originalPrice: 2499,
    theme: {
      orb1: "bg-orange-400/20",
      orb2: "bg-red-500/20",
      iconBg: "from-red-500 to-orange-400",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-500 to-orange-400",
    primaryHoverBg: "bg-gradient-to-r from-red-600 to-orange-500",
    benefits: [
      {
        icon: "shield",
        description: "Protection against Copycats: Even after selling, protection continues for the new owner",
      },
      {
        icon: "badgeIndianRupee",
        description: "Registered brand is a valuable asset that can be legally monetized",
      },
      {
        icon: "trendingUp",
        description: "Facilitates business expansion and growth for assignor or assignee",
      },
      {
        icon: "checkCircle",
        description: "Improves brand credibility through legally recorded ownership transfer",
      },
    ],
    faqs: [
      {
        question: "What is Trademark Assignment?",
        answer:
          "Trademark Assignment is the permanent transfer of ownership of a trademark from one person or company (Assignor) to another (Assignee). Like any other asset, a trademark can be sold for consideration.",
      },
      {
        question: "How do you sell a trademark?",
        answer:
          "Selling a trademark does not mean selling the entire business. Ownership of a specific brand or logo is transferred by executing a Trademark Assignment Deed between the parties.",
      },
      {
        question: "What is a Trademark Assignment Deed?",
        answer:
          "It is a legal agreement defining the terms of trademark transfer, including consideration amount, territory, and whether the transfer is with or without goodwill.",
      },
      {
        question: "What are the key clauses in an Assignment Deed?",
        answer:
          "Key clauses include sale consideration, geographical usage rights, and whether goodwill is included. These directly affect stamp duty and enforceability.",
      },
      {
        question: "What is the difference between Trademark Licensing and Assignment?",
        answer:
          "Licensing allows temporary usage rights while ownership remains unchanged. Assignment permanently transfers ownership to the new holder.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Trademark Assignment",
        icon: "fileText",
        type: "list",
        data: [
          "Trademark Application / Registration Number",
          "Name of the transferor (current owner)",
          "Name of the transferee (new owner)",
          "Board Resolution (if either party is a company)",
          "Trademark Assignment Deed",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "Documentation support and facilitation",
          "Trademark Registry filing receipt",
          "Screenshot of Assignment filing",
        ],
      },
    ],
    addons: [
      "Assignment\\nDeed Support",
      "TM Registry\\nFiling Receipt",
      "Screenshot of\\nAssignment Filing",
      "Legal Ownership\\nTransfer",
    ],
  },
};
