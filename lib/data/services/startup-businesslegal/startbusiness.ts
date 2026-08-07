import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  Section8NGOCompanyPage: {
    title: "Section 8 NGO Company",
    subtitle: "A highly credible non-profit structure for social, charitable, and public welfare initiatives.",
    badgeText: "Non-Profit \u2022 Tax Benefits \u2022 Limited Liability",
    icon: "users",
    serviceID: "SECTION_8_NGO_COMPANY",
    contentTitle: "Why Choose a Section 8 Company?",
    contentDescription:
      "A Section 8 Company under the Companies Act, 2013 is an ideal legal structure for NGOs and non-profit organizations. It offers high credibility, tax exemptions, and limited liability while ensuring that all profits are used strictly for charitable objectives.",
    section1Title: "Key Benefits of Section 8 Registration",
    price: 8999,
    originalPrice: 0,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-orange-400/20",
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
        description: "Multiple privileges and exemptions under the Companies Act",
      },
      {
        icon: "fileText",
        description: "No minimum paid-up capital requirement",
      },
      {
        icon: "shield",
        description: "Exemption from stamp duty on incorporation",
      },
      {
        icon: "fileText",
        description: "CARO audit provisions generally not applicable",
      },
      {
        icon: "users",
        description: "Partnership firms can become members in their own capacity",
      },
      {
        icon: "trendingUp",
        description: "Donors eligible for tax deduction under Section 80G",
      },
    ],
    faqs: [
      {
        question: "What is a Section 8 Company?",
        answer:
          "A Section 8 Company is a non-profit organization registered under the Companies Act, 2013, formed to promote charitable objectives such as education, social welfare, arts, or environment.",
      },
      {
        question: "Is commercial office space mandatory?",
        answer: "No. Residential or rented premises can be used as the registered office address.",
      },
      {
        question: "Is Section 8 registration renewed annually?",
        answer:
          "No. Once incorporated, it remains valid until closed. However, annual ROC compliance filings are mandatory.",
      },
      {
        question: "Can profits be distributed to members?",
        answer: "No. All profits must be reinvested toward the charitable objectives of the company.",
      },
      {
        question: "Is there any minimum capital requirement?",
        answer:
          "No. Section 8 companies usually operate as companies limited by guarantee and do not require minimum share capital.",
      },
      {
        question: "Are PF and GST automatically applicable?",
        answer:
          "No. Applicability depends on employee count, turnover, and nature of activities \u2014 not company type.",
      },
      {
        question: "Can a Section 8 company be converted into a Private Limited Company?",
        answer: "Yes, subject to approval from the Registrar of Companies and compliance with prescribed procedures.",
      },
      {
        question: "What is a DIN?",
        answer:
          "DIN (Director Identification Number) is a unique number issued by MCA for individuals intending to act as company directors.",
      },
      {
        question: "What is a DSC?",
        answer: "A Digital Signature Certificate (DSC) is used to electronically sign documents submitted to the ROC.",
      },
      {
        question: "Do we need to deposit funds before incorporation?",
        answer: "No. Funds are deposited after incorporation once the company bank account is opened.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Section 8 Registration",
        icon: "fileText",
        type: "list",
        data: [
          "Minimum 2 members for Private Section 8 Company and 7 for Public Section 8 Company",
          "Minimum 2 directors (private) or 3 directors (public)",
          "Directors and members can be the same individuals",
          "Registered office address proof",
          "PAN, identity proof, and address proof of directors",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building",
        type: "grid",
        data: [
          "Director Identification Number (DIN)",
          "Digital Signature Certificate (DSC)",
          "Company name approval",
          "Memorandum of Association (MOA)",
          "Articles of Association (AOA)",
          "Certificate of Incorporation",
          "Company PAN Card",
          "Company TAN / TDS Number",
          "Bank account opening assistance",
        ],
      },
    ],
    addons: [
      "Director\\nIdentification No.",
      "Digital Signature\\nCertificate (DSC)",
      "Certificate of\\nIncorporation",
      "MOA & AOA\\nDrafted",
    ],
  },
  GSTRegistrationPage: {
    title: "GST Registration",
    subtitle: "Enroll your business under India's GST framework — mandatory for businesses exceeding the prescribed turnover threshold.",
    badgeText: "GSTIN \u2022 ITC Benefits \u2022 Nationwide Compliance",
    icon: "fileText",
    serviceID: "GST_REGISTRATION",
    contentTitle: "Overview",
    contentDescription:
      "Goods and Services Tax (GST) is a comprehensive, destination-based indirect tax that has replaced multiple indirect taxes in India. GST Registration is mandatory for businesses whose aggregate turnover exceeds the prescribed limit and for certain other categories of suppliers. Registration allows businesses to legally collect GST from customers and claim Input Tax Credit (ITC), ensuring a seamless flow of tax credit.",
    section1Title: "Key Benefits of GST Registration",
    price: 999,
    originalPrice: 20,
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
        description: "Seamless Input Tax Credit (ITC) on purchases to reduce tax liability",
      },
      {
        icon: "trendingUp",
        description: "Legal authority to collect GST from customers",
      },
      {
        icon: "fileText",
        description: "Simplified compliance with single nationwide registration",
      },
      {
        icon: "building2",
        description: "Access to unified national market without barriers",
      },
    ],
    faqs: [
      {
        question: "What is Central GST (CGST)?",
        answer:
          "When the supply of goods and services takes place WITHIN a state (intra-state), two taxes are levied. One part is levied by the State Government, and the other is by the Central Government. The tax levied by the Central Government is known as Central GST (CGST).",
      },
      {
        question: "What is State GST (SGST)?",
        answer:
          "State GST (SGST) is the component of GST collected by the state government on all goods and services supplied within that state (intra-state trade).",
      },
      {
        question: "What is Integrated GST (IGST)?",
        answer:
          "When the supply of goods and services takes place BETWEEN two states (inter-state), Integrated GST (IGST) is levied by the Central Government. In the case of inter-state supply, only IGST is applicable.",
      },
      {
        question: "What are the benefits of GST in India?",
        answer:
          "Many indirect taxes like VAT, Excise Duty, Service Tax, CST, Import-Export, Octroi, Luxury Tax, and Entertainment Tax have been subsumed under GST. This requires only a single GST registration, resulting in fewer compliances and helping businesses focus more on their core operations.",
      },
      {
        question: "What are the GST Rates in India?",
        answer:
          "The GST rate depends on the type of goods and services. Currently, the main slab rates are 5%, 12%, 18%, and 28%. Gold and rough diamonds are taxed separately at 3% and 0.25%, respectively.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: [
          "Aggregate turnover exceeding \u20b920 Lakh in a financial year (\u20b910 Lakh for Special Category States)",
          "Any inter-state supply of goods or services",
          "E-commerce operators and vendors selling through online portals",
          "Specific cases: Non-residents, importers, and certain notified suppliers",
          "PAN card of the business/applicant",
          "Proof of business address (rent agreement, utility bill, etc.)",
          "Identity and address proof of proprietors/partners/directors (Aadhaar, Voter ID, etc.)",
          "Bank account details and cancelled cheque",
          "Authorization letter or board resolution (if applicable)",
          "Digital photograph of the authorized signatory",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building2",
        type: "grid",
        data: [
          "15-digit Goods and Services Tax Identification Number (GSTIN)",
          "GST Registration Certificate",
          "Login credentials for GST Portal",
          "Eligibility to file GST returns and claim ITC",
        ],
      },
    ],
    addons: [
      "GSTIN\\nCertificate",
      "GST Portal\\nLogin Credentials",
      "ITC Claim\\nEligibility",
      "GST Return\\nFiling Support",
    ],
  },
  OnePersonCompanyPage: {
    title: "One Person Company (OPC)",
    subtitle: "A smart business structure for solo entrepreneurs with limited liability and full legal recognition.",
    badgeText: "Single Owner \u2022 Limited Liability \u2022 Company Status",
    icon: "user",
    serviceID: "ONE_PERSON_COMPANY",
    contentTitle: "Why Choose a One Person Company?",
    contentDescription:
      "A One Person Company (OPC) under the Companies Act, 2013 allows solo entrepreneurs to enjoy the benefits of a private limited company with reduced compliance burden. It offers limited liability, separate legal identity, and long-term business continuity.",
    section1Title: "Key Benefits of OPC Registration",
    price: 999,
    originalPrice: 2999,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-orange-400/20",
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
        description: "Limited liability protection to the owner's personal assets",
      },
      {
        icon: "trendingUp",
        description: "Enhanced credibility and easier access to funding",
      },
      {
        icon: "fileText",
        description: "Fewer compliances compared to traditional private companies",
      },
      {
        icon: "building",
        description: "Perpetual succession even with a single owner",
      },
    ],
    faqs: [
      {
        question: "What is a One Person Company (OPC)?",
        answer:
          "An OPC is a type of private company incorporated by a single natural person under the Companies Act, 2013. It provides limited liability and separate legal entity status.",
      },
      {
        question: "Who can form an OPC in India?",
        answer:
          "Any natural person who is an Indian citizen and resident in India (minimum 182 days stay in the previous calendar year) can incorporate an OPC.",
      },
      {
        question: "Is a nominee mandatory for OPC registration?",
        answer:
          "Yes. The sole member must appoint a nominee who will become the shareholder in case of death or incapacity.",
      },
      {
        question: "What documents are required to set up an OPC?",
        answer:
          "PAN card, Aadhaar card, photographs, address proofs of the director and nominee, and registered office proof are required.",
      },
      {
        question: "Is commercial office space required for OPC?",
        answer: "No. A residential address can be used as the registered office, subject to compliance requirements.",
      },
      {
        question: "Who is the Registrar of Companies (ROC)?",
        answer:
          "The ROC is a government authority under the Ministry of Corporate Affairs responsible for company registrations and compliance.",
      },
      {
        question: "Is physical visit to ROC required?",
        answer: "No. OPC incorporation is a completely online process handled digitally.",
      },
      {
        question: "What is a DIN?",
        answer:
          "DIN (Director Identification Number) is a unique identification number issued by MCA to become a director in a company.",
      },
      {
        question: "What is a DSC?",
        answer: "A Digital Signature Certificate (DSC) is used to electronically sign documents filed with the ROC.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for OPC Registration",
        icon: "fileText",
        type: "list",
        data: [
          "Single natural person who is an Indian citizen and resident",
          "Mandatory appointment of a nominee (successor)",
          "No minimum paid-up share capital requirement",
          "PAN, Aadhaar, photographs, address proofs of director and nominee",
          "Proof of registered office address",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building",
        type: "grid",
        data: [
          "DIN for 1 Director",
          "Digital Signature Certificate (DSC)",
          "OPC Certificate of Incorporation",
          "Memorandum of Association (MOA)",
          "Articles of Association (AOA)",
          "Company PAN Card",
          "Company TAN",
          "Bank account opening assistance",
        ],
      },
    ],
    addons: [
      "DIN for\\n1 Director",
      "Digital Signature\\nCertificate (DSC)",
      "OPC Certificate\\nof Incorporation",
      "MOA & AOA\\nDrafted",
    ],
  },
  LLPPage: {
    title: "Limited Liability Partnership (LLP)",
    subtitle: "A flexible business structure combining partnership benefits with limited liability protection.",
    badgeText: "LLP Registration \u2022 Startup Friendly \u2022 Low Compliance",
    icon: "briefcase",
    serviceID: "LIMITED_LIABILITY_PARTNERSHIP",
    contentTitle: "Why Choose an LLP for Your Business?",
    contentDescription:
      "A Limited Liability Partnership (LLP) under the LLP Act, 2008 offers the operational flexibility of a partnership with the legal protection of limited liability. It is ideal for startups, professionals, and small businesses seeking structure with minimal compliance.",
    section1Title: "Key Benefits of LLP Registration",
    price: 1499,
    originalPrice: 3999,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-orange-400/20",
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
        description: "Limited liability protection to partners' personal assets",
      },
      {
        icon: "trendingUp",
        description: "Better image and enhanced credibility in the market",
      },
      {
        icon: "fileText",
        description: "No mandatory audit requirement and minimal annual compliances",
      },
      {
        icon: "building",
        description: "Continuity of business with perpetual succession",
      },
    ],
    faqs: [
      {
        question: "What documents are required to set up an LLP in India?",
        answer:
          "Basic documents such as photograph, PAN card, and one address proof of the partners are sufficient for LLP incorporation.",
      },
      {
        question: "Is commercial office space required to start an LLP?",
        answer:
          "No. You may use a residential or rented address as the registered office. The address can be changed later if required.",
      },
      {
        question: "Who is the Registrar of Companies (ROC)?",
        answer:
          "The ROC is a government authority under the Ministry of Corporate Affairs responsible for registration and compliance of LLPs and companies.",
      },
      {
        question: "Do partners need to visit the ROC office physically?",
        answer:
          "No. LLP incorporation is a completely online process. All filings and approvals are handled digitally.",
      },
      {
        question: "Is LLP registration required to be renewed every year?",
        answer: "No renewal is required. However, LLPs must file basic annual returns to remain compliant.",
      },
      {
        question: "What is a DIN?",
        answer:
          "DIN (Designated Partner Identification Number) is a unique identification number issued by the MCA to become a designated partner in an LLP.",
      },
      {
        question: "What is a DSC?",
        answer: "A Digital Signature Certificate (DSC) is used to electronically sign documents filed with the ROC.",
      },
      {
        question: "Can the LLP office address be changed after incorporation?",
        answer: "Yes. The registered office address of an LLP can be changed anytime after incorporation.",
      },
      {
        question: "What is an LLP Agreement?",
        answer:
          "The LLP Agreement defines the internal rules of the LLP, including capital contribution, profit sharing, business activities, and partner rights.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for LLP Registration",
        icon: "fileText",
        type: "list",
        data: [
          "Minimum of 2 partners are required",
          "If a body corporate is a partner, a natural person must be nominated",
          "No concept of share capital \u2014 partners contribute agreed capital",
          "KYC documents of partners (PAN, identity proof, address proof)",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building",
        type: "grid",
        data: [
          "DIN for 2 designated partners",
          "Digital Signature Certificate (DSC) for 1 partner",
          "LLP Incorporation Certificate",
          "Drafted and filed LLP Agreement",
          "LLP PAN Card",
          "LLP TAN / TDS Number",
          "Bank account opening assistance",
        ],
      },
    ],
    addons: [
      "DIN for 2\\nDesignated Partners",
      "DSC for\\n1 Partner",
      "LLP Incorporation\\nCertificate",
      "LLP Agreement\\nDrafted & Filed",
    ],
  },
  PrivateLimitedCompanyPage: {
    title: "Private Limited Company",
    subtitle: "A scalable, investor-friendly business structure with limited liability protection.",
    badgeText: "Startup Friendly \u2022 Investor Ready \u2022 Limited Liability",
    icon: "briefcase",
    serviceID: "PRIVATE_LIMITED_COMPANY",
    contentTitle: "Overview",
    contentDescription:
      "A Private Limited Company (Pvt. Ltd.) is one of the most popular business structures in India. It requires a minimum of two directors and shareholders, offers limited liability protection, and operates as a separate legal entity. This structure is ideal for startups and growing businesses looking to raise funds, attract talent, and scale operations with credibility.",
    section1Title: "Key Benefits of Private Limited Company",
    price: 999,
    originalPrice: 4999,
    theme: {
      orb1: "bg-blue-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-red-500 to-orange-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-500 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-red-600 to-orange-600",
    benefits: [
      {
        icon: "shield",
        description: "Limited Liability Protection to Directors",
      },
      {
        icon: "trendingUp",
        description: "Better image and credibility in the market",
      },
      {
        icon: "building2",
        description: "Easy to raise funds and loans",
      },
      {
        icon: "users",
        description: "Preferred business structure for investors",
      },
      {
        icon: "users",
        description: "Easy to attract and retain employees",
      },
      {
        icon: "fileText",
        description: "Easy to sell or transfer ownership",
      },
    ],
    faqs: [
      {
        question: "What documents are required to set up a Private Limited Company?",
        answer: "Only basic documents are required such as photograph, PAN card, and address proof of directors.",
      },
      {
        question: "Is commercial office space required?",
        answer:
          "No. You can use your residential or rented address as the registered office. This can be changed later.",
      },
      {
        question: "Who is the Registrar of Companies (ROC)?",
        answer:
          "ROC is a government authority responsible for company registrations. Each state has at least one ROC office.",
      },
      {
        question: "Is physical presence required during incorporation?",
        answer: "No. The entire incorporation process is completed online without visiting the ROC office.",
      },
      {
        question: "Is Private Limited Company registration renewable?",
        answer: "No renewal is required. However, annual ROC filings are mandatory.",
      },
      {
        question: "What is DIN?",
        answer: "Director Identification Number (DIN) is a unique ID issued by ROC to a person appointed as director.",
      },
      {
        question: "What is DSC?",
        answer: "Digital Signature Certificate (DSC) is used to electronically sign ROC forms during incorporation.",
      },
      {
        question: "Can the registered office be changed later?",
        answer: "Yes, the company's registered office address can be changed anytime after incorporation.",
      },
      {
        question: "Is minimum capital required?",
        answer: "There is no minimum capital requirement. Capital can be deposited after incorporation.",
      },
      {
        question: "Are GST and PF mandatory after incorporation?",
        answer: "No. GST and PF apply only after crossing prescribed threshold limits.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: [
          "Minimum 2 shareholders",
          "Minimum 2 directors",
          "Directors and shareholders can be the same person",
          "At least one director must be an Indian resident (182 days stay in previous FY)",
          "PAN card copy (mandatory for Indian nationals)",
          "Identity proof (Passport, Voter ID, Driving License, Aadhaar Card)",
          "Address proof (Bank statement / Utility bill \u2013 not older than 30\u201360 days)",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building2",
        type: "grid",
        data: [
          "DIN (Director Identification Number) for 2 directors",
          "Digital Signature Certificates (DSC) for promoters",
          "Company Name Approval (RUN / SPICe)",
          "MOA & AOA drafting",
          "Certificate of Incorporation",
          "Company PAN Card",
          "Company TAN / TDS Number",
          "Bank Account Opening support",
        ],
      },
    ],
    addons: ["Company\\nPAN & TAN", "MOA + AOA +\\nIncorporation Certificate"],
  },
  StartupIndiaRegistrationPage: {
    title: "Startup India Registration",
    subtitle: "Get DPIIT recognition and unlock tax benefits, funding access, and compliance relaxations.",
    badgeText: "DPIIT Recognition \u2022 Tax Benefits \u2022 Govt-backed",
    icon: "rocket",
    serviceID: "STARTUP_INDIA_REGISTRATION",
    contentTitle: "Overview",
    contentDescription: "Startup India Registration grants official DPIIT recognition under the Government of India's Startup India initiative. It unlocks tax exemptions, funding access, patent/trademark fee rebates, and compliance relaxations for eligible startups.",
    section1Title: "Key Benefits of Startup India Registration",
    price: 999,
    originalPrice: 10000,
    theme: {
      orb1: "bg-orange-500/20",
      orb2: "bg-red-500/20",
      iconBg: "from-orange-500 to-red-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-orange-500",
    primaryBg: "bg-gradient-to-r from-orange-500 to-red-500",
    primaryHoverBg: "bg-gradient-to-r from-orange-600 to-red-600",
    benefits: [
      {
        icon: "fileText",
        description: "DPIIT Recognition Certificate (Digital)",
      },
      {
        icon: "shield",
        description: "Eligibility for 100% Income Tax exemption for 3 consecutive years",
      },
      {
        icon: "trendingUp",
        description: "Up to 80% rebate on patent filing & 50% on trademark filing",
      },
      {
        icon: "building2",
        description: "Self-certification under Labour & Environmental Laws",
      },
      {
        icon: "users",
        description: "Access to \u20b910,000 Cr Government Fund of Funds via VCs",
      },
      {
        icon: "shield",
        description: "Angel Tax exemption under Section 56",
      },
      {
        icon: "trendingUp",
        description: "Fast-track company exit within 90 days",
      },
      {
        icon: "fileText",
        description: "Relaxation in public procurement & government tenders",
      },
    ],
    faqs: [
      {
        question: "How much time does Startup India registration take?",
        answer:
          "DPIIT generally issues the Startup India Recognition Certificate within 2 working days after successful submission.",
      },
      {
        question: "Will my startup get income tax exemption automatically?",
        answer: "No. After DPIIT recognition, you must separately apply for tax exemption under Section 80IAC.",
      },
      {
        question: "Is commercial office space mandatory?",
        answer: "No. Residential or rented premises can be used as the registered office address.",
      },
      {
        question: "Is the Startup India certificate valuable?",
        answer: "Yes. It provides tax benefits, funding access, government recognition, and compliance relaxations.",
      },
      {
        question: "Is Startup India registration free?",
        answer: "Yes. There are no government fees for obtaining DPIIT Startup India recognition.",
      },
      {
        question: "Is Lawizer connected to the Government?",
        answer: "No. Lawizer (and similar platforms) are private legal-tech consultants and not government representatives. We facilitate the application process on your behalf.",
      },
    ],
    sections: [
      {
        title: "Eligibility & Documentation",
        icon: "fileText",
        type: "list",
        data: [
          "Entity age must be less than 10 years from incorporation",
          "Entity type must be Private Limited, LLP, or Registered Partnership Firm",
          "Annual turnover should not exceed \u20b9100 Crore in any financial year",
          "Business must focus on innovation or improvement of products/services",
          "Entity should not be formed by splitting or reconstruction",
          "Certificate of Incorporation / Registration Certificate",
          "Company / LLP / Firm PAN Card",
          "Pitch deck or brief write-up on innovation & scalability",
          "PAN & Aadhaar of Directors / Partners",
          "Authorisation letter",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building2",
        type: "grid",
        data: [
          "DPIIT Startup India Recognition Certificate",
          "Confirmation of eligibility for Startup India benefits",
          "Access to Startup India portal dashboard",
        ],
      },
    ],
    addons: [
      "DPIIT Recognition\\nCertificate",
      "Startup India\\nPortal Access",
      "Angel Tax\\nExemption",
      "80% Patent\\nFiling Rebate",
    ],
  },
  PublicLimitedCompanyPage: {
    title: "Public Limited Company",
    subtitle: "A large-scale corporate structure designed to raise public capital with strong credibility.",
    badgeText: "Public Company \u2022 Investor Ready \u2022 Limited Liability",
    icon: "building2",
    serviceID: "PUBLIC_LIMITED_COMPANY",
    contentTitle: "Overview",
    contentDescription:
      "A Public Limited Company (PLC) is a corporate entity governed by the Companies Act, 2013. It requires a minimum of seven shareholders and three directors and can raise capital by offering shares to the public. PLCs enjoy limited liability, higher credibility, and are ideal for businesses planning large-scale expansion and public investment.",
    section1Title: "Key Benefits of Public Limited Company",
    price: 19999,
    originalPrice: 0,
    theme: {
      orb1: "bg-red-500/20",
      orb2: "bg-blue-500/20",
      iconBg: "from-red-500 to-orange-500",
      badgeText: "text-orange-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-500 to-orange-500",
    primaryHoverBg: "bg-gradient-to-r from-red-600 to-orange-600",
    benefits: [
      {
        icon: "shield",
        description: "Limited liability protection for directors",
      },
      {
        icon: "trendingUp",
        description: "Higher credibility and public trust",
      },
      {
        icon: "users",
        description: "Easy access to large-scale funding and loans",
      },
      {
        icon: "trendingUp",
        description: "Preferred structure for public investment",
      },
      {
        icon: "fileText",
        description: "Free transferability of shares",
      },
      {
        icon: "building2",
        description: "Best suited for heavy capital-intensive businesses",
      },
    ],
    faqs: [
      {
        question: "What documents are required to set up a Public Limited Company?",
        answer:
          "Basic documents such as photograph, PAN card, and address proof of directors and shareholders are required.",
      },
      {
        question: "Is commercial office space mandatory?",
        answer: "No. A residential or rented address can be used as the registered office and can be changed later.",
      },
      {
        question: "Who is the Registrar of Companies (ROC)?",
        answer: "ROC is a government authority responsible for registering and regulating companies in India.",
      },
      {
        question: "Is physical presence required for incorporation?",
        answer: "No. The entire Public Limited Company incorporation process is completed online.",
      },
      {
        question: "Is Public Limited Company registration renewable?",
        answer: "No renewal is required, but annual ROC compliance filings are mandatory.",
      },
      {
        question: "What is a DIN?",
        answer: "Director Identification Number (DIN) is a unique number issued to individuals appointed as directors.",
      },
      {
        question: "What is a DSC?",
        answer: "A Digital Signature Certificate (DSC) is used to sign electronic forms filed with the ROC.",
      },
      {
        question: "Can the registered office address be changed later?",
        answer:
          "Yes, the registered office address can be changed anytime after incorporation by following due procedure.",
      },
      {
        question: "Is share capital required at the time of incorporation?",
        answer: "No. Share capital can be deposited after incorporation once the company bank account is opened.",
      },
      {
        question: "Are GST and PF automatically applicable?",
        answer: "No. GST and PF apply only after crossing prescribed threshold limits.",
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        icon: "fileText",
        type: "list",
        data: [
          "Minimum 7 shareholders",
          "Minimum 3 directors",
          "Directors and shareholders can be the same person",
          "At least one director must be an Indian resident",
          "Minimum authorised share capital as prescribed by law",
          "PAN, identity proof, and address proof of directors and shareholders",
        ],
      },
      {
        title: "What You'll Receive",
        icon: "building2",
        type: "grid",
        data: [
          "DIN (Director Identification Number) for 3 directors",
          "Digital Signature Certificates (DSC) for shareholders",
          "Company name approval",
          "MOA & AOA drafting",
          "Certificate of Incorporation",
          "Company PAN Card",
          "Company TAN / TDS Number",
          "Bank account opening documentation support",
        ],
      },
    ],
    addons: [
      "DIN for\\n3 Directors",
      "DSC for\\nShareholders",
      "Certificate of\\nIncorporation",
      "MOA & AOA\\nDrafted",
    ],
  },
};
