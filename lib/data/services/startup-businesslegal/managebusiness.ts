import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  ResignationOfDirectorPage: {
    title: "Resignation of Director & ROC Filing",
    subtitle:
      "Ensure the voluntary resignation of a Director is legally executed, protecting both the Director (DIR-11) and the Company (DIR-12) from future liabilities and penalties.",
    badgeText: "Companies Act, 2013 \u2022 DIR-11 \u2022 DIR-12",
    icon: "userMinus",
    serviceID: "RESIGNATION_OF_DIRECTOR_&_ROC_FILING",
    contentTitle: "The Importance of Formal Compliance",
    contentDescription: "A Director",
    section1Title: "Key Benefits of a Compliant Resignation",
    price: 1999,
    originalPrice: 0,
    theme: {
      orb1: "bg-blue-600/20",
      orb2: "bg-purple-600/20",
      iconBg: "from-blue-500 to-purple-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-500",
    primaryBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-purple-700",
    benefits: [
      {
        icon: "shield",
        description: "Protects the resigning director from future penalties and liabilities",
      },
      {
        icon: "scale",
        description: "Ensures the company records are compliant under Companies Act, 2013",
      },
      {
        icon: "userMinus",
        description: "Creates an opportunity for the director to take up a new role/directorship",
      },
      {
        icon: "checkCircle",
        description: "Boosts transparency and trust among all stakeholders",
      },
    ],
    faqs: [
      {
        question: "What documents are required for director resignation?",
        answer:
          "A) Documents required from Director: PAN Card, Residence Proof, DIN declarations, Consent letter for appointment (DIR-2) etc. B) Documents required from Company: Board Meeting Resolution and Letter of Appointment. Lawizer will assist in preparing and filing these documents with the ROC.",
      },
      {
        question: "What is a Resignation Letter from Director?",
        answer:
          "When a Director wishes to step down, they officially submit a written letter to the company informing them of their voluntary resignation, specifying the effective date.",
      },
      {
        question: "Which forms are to be filed for resignation of director?",
        answer:
          "Form DIR-12 is filed by the company (within 30 days of acceptance) and Form DIR-11 is filed by the resigning director (within 30 days of resignation date) with the ROC.",
      },
      {
        question: "If there are only two directors, can one resign?",
        answer:
          "No. The company must maintain the minimum required number of directors (two for a Pvt Ltd). A new additional director must be appointed first, after which the resignation can proceed.",
      },
      {
        question: "Is there any liability after resignation?",
        answer:
          "The resigning director remains liable only for non-compliance and actions during their tenure, but is explicitly not liable for any company actions or non-compliance occurring after the effective date of resignation.",
      },
      {
        question: "Difference between Resignation and Removal of Director?",
        answer:
          "Resignation is voluntary \u2014 initiated by the director. Removal is involuntary \u2014 initiated by the company against the director's will, requiring a Special Notice and Ordinary Resolution.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Resignation Filing",
        icon: "fileText",
        type: "list",
        data: [
          "All prior forms relating to the appointment of the Director should have been filed",
          "DIN of minimum 1 Director should be in ",
          " status (to ensure quorum)",
          "One valid Digital Signature (DSC) of an existing Director (for company filing)",
          "Resignation Letter from the resigning Director must be submitted",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "All filed e-forms with MCA (DIR-12 filed by Company & DIR-11 filed by Director)",
          "MCA payment challan for filing fees",
          "Drafted Board Meeting Resolution and Minutes",
          "Drafted Resignation Acceptance Letter from the Company",
        ],
      },
    ],
    addons: [
      "DIR-12 & DIR-11\\nFiled with MCA",
      "Board Meeting\\nResolution Draft",
      "Resignation\\nAcceptance Letter",
      "MCA Payment\\nChallan",
    ],
  },
  ClosureOfLLPPage: {
    title: "Closure of LLP (Striking Off)",
    subtitle:
      "Formally dissolve your non-operational Limited Liability Partnership by striking its name off the ROC records via Form 24 to avoid future penalties.",
    badgeText: "LLP Act compliant \u2022 Form 24 filing \u2022 Penalty-free exit",
    icon: "fileWarning",
    serviceID: "CLOSURE_OF_LLP",
    contentTitle: "The Importance of Legal Closure",
    contentDescription:
      "Even if your LLP has ceased business, it remains a legal entity with mandatory annual filing obligations (Form 8 and 11). Legal closure via striking off (Form 24) is critical to eliminate statutory compliance requirements, remove the tag of defaulter, and prevent the accrual of heavy penalties.",
    section1Title: "Key Benefits of Formal LLP Closure",
    price: 4999,
    originalPrice: 0,
    theme: {
      orb1: "bg-red-600/20",
      orb2: "bg-yellow-500/20",
      iconBg: "from-red-500 to-yellow-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-600 to-yellow-500",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-yellow-600",
    benefits: [
      {
        icon: "scale",
        description: "Removes legal hassles and avoids continuing non-compliance",
      },
      {
        icon: "shield",
        description: "Eliminates the risk of accumulating penalties and fines",
      },
      {
        icon: "checkCircle",
        description: "Formal closure frees partners from LLP statutory obligations",
      },
      {
        icon: "building",
        description: "Removes the entity's 'defaulter' status (if applicable)",
      },
    ],
    faqs: [
      {
        question: "What is Closure of LLP?",
        answer:
          "Closure of an LLP is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the Registrar of Companies (ROC) records.",
      },
      {
        question: "What is the difference between Closure, Winding up, Dissolution of LLP?",
        answer:
          "Closure (or Striking Off) is typically done voluntarily for non-operational LLPs (via Form 24/FTE). Winding up is a formal liquidation, either voluntary or by court order, involving asset distribution. Dissolution is the final act of ending the legal existence.",
      },
      {
        question: "Why ROC filing is required for Closing an LLP?",
        answer:
          "It is necessary to file Closure with the ROC (MCA) so the database is updated. Unless this is approved, the LLP is not legally closed and is still required to file all regular annual returns and compliances, incurring penalties if not done.",
      },
      {
        question: "What is Fast Track Exit (FTE) Scheme (for LLP)?",
        answer:
          "FTE is an LLP closure scheme initiated by MCA for easy and faster striking off (closure) of LLPs that meet specific eligibility criteria, often related to being non-operational for a period.",
      },
      {
        question: "Which LLP is eligible to apply for Closure of LLP?",
        answer:
          "Generally, any LLP which has been inoperative for more than 1 year (or 2 years depending on the method) from the date of its incorporation can apply for Closure, provided all other pre-requisites are met.",
      },
      {
        question: "What documents are required for Closure of LLP?",
        answer:
          "Application for Striking off (Form 24), Partners' Resolution for closure, Consent of Partners, Partners' Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents.",
      },
      {
        question: "Which form is required to be filed for Closure of LLP with ROC?",
        answer:
          "Form 24 is the primary e-form required to be filed with the ROC for the Striking Off (Closure) of the LLP.",
      },
      {
        question: "What is the time limit to file Closure documents with ROC?",
        answer:
          "The Form 24 has to be filed with ROC office within 30 days from the date of Signing of the Statement of Assets and Liabilities for all partners.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Striking Off (Form 24)",
        icon: "fileText",
        type: "list",
        data: [
          "Annual ROC Return Filings (Form 8 and Form 11) must be up to date",
          "LLP Should be Inoperative for more than 1 or 2 consecutive Financial Years",
          "Bank Account of the LLP should be Closed and Statement of Accounts prepared",
          "Latest Filed Income Tax Returns and Indemnity Bond/Affidavit prepared",
          "DIN of all Designated Partners should be in ",
          " Status",
          "Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "All filed e-forms with MCA (e.g., Form 24)",
          "MCA payment challan for closure fees",
          "LLP Closure Certificate (Confirmation of Striking Off)",
          "Drafted Indemnity Bond and Affidavit documents",
          "Partner Resolution for voluntary closure",
        ],
      },
    ],
    addons: [
      "LLP Closure\\nCertificate",
      "Form 24\\nFiled with MCA",
      "Partner Resolution\\nfor Closure",
      "Indemnity Bond\\n& Affidavit",
    ],
  },
  AppointmentOfDirectorPage: {
    title: "Appointment of Director & DIR-12 Filing",
    subtitle:
      "Legally add a director to your Board, handling board resolutions, DIR-12 filing, and MCA formalities to ensure full compliance.",
    badgeText: "Companies Act compliant \u2022 MCA filing \u2022 Board governance",
    icon: "users",
    serviceID: "APPOINTMENT_OF_DIRECTOR_&_DIR-12_FILING",
    contentTitle: "The Importance of Formal Appointment",
    contentDescription:
      "Appointing a director is a statutory requirement that involves specific forms (DIR-2 and DIR-12), board approvals, and filing with the Registrar of Companies (ROC). A compliant appointment is essential for legal validity and governance.",
    section1Title: "Key Benefits of a Compliant Appointment",
    price: 1999,
    originalPrice: 300,
    theme: {
      orb1: "bg-blue-500/20",
      orb2: "bg-purple-500/20",
      iconBg: "from-blue-500 to-purple-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-600",
    primaryBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-purple-700",
    benefits: [
      {
        icon: "scale",
        description: "Boosts transparency and trust among stakeholders",
      },
      {
        icon: "shield",
        description: "Protection from penalty and legal actions",
      },
      {
        icon: "home",
        description: "Eligibility to raise unsecured loans from the Director (as applicable)",
      },
      {
        icon: "checkCircle",
        description: "Ensures compliance under the Companies Act, 2013",
      },
      {
        icon: "users",
        description: "Formalizes the structure and decision-making authority of the Board",
      },
    ],
    faqs: [
      {
        question: "What documents are required for director appointment?",
        answer:
          "A) Documents required from Director: PAN Card, Residence Proof, DIN declarations, Consent letter for appointment (DIR-2) etc. B) Documents required from Company: Board Meeting Resolution for Appointment and Letter of Appointment. Lawizer will assist in preparing and filing these documents with the ROC.",
      },
      {
        question: "What is Consent Letter from Director?",
        answer:
          "A Consent Letter (Form DIR-2) is the written approval by the proposed director confirming acceptance of appointment. It must be submitted to the company before filing DIR-12.",
      },
      {
        question: "What form is filed for adding a director?",
        answer: "Form DIR-12 is filed with the MCA portal to notify the appointment of a director.",
      },
      {
        question: "What are the fees and charges for appointing a director?",
        answer:
          "Filing DIR-12 within the time limit generally attracts a nominal fee. Standard filing fee example: \u20b9300 (subject to MCA fee schedule).",
      },
      {
        question: "Minimum number of directors required in a company?",
        answer:
          "Private Limited Company: 2 Directors. One Person Company: 1 Director. Public Limited Company: 3 Directors.",
      },
      {
        question: "Maximum number of directors allowed?",
        answer:
          "Default maximum is 15 directors. To exceed 15, the company must follow the procedural steps under the Companies Act.",
      },
      {
        question: "Minimum age to become a director?",
        answer: "Minimum age is 18 years. For a Managing Director, minimum age is typically 21 years where applicable.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Director Appointment",
        icon: "fileText",
        type: "list",
        data: [
          "ROC Return filing must be up to date",
          "DIN of minimum 1 director should be in ",
          " status",
          "One valid DSC (Digital Signature Certificate) of an existing director",
          "Appointee must be an Indian Resident (if required)",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "home",
        type: "grid",
        data: [
          "All filed e-forms with MCA (DIR-12)",
          "MCA payment challan",
          "Board Resolution draft",
          "Consent letter draft (DIR-2)",
          "Proper record keeping and statutory compliance",
        ],
      },
    ],
    addons: [
      "DIR-12 Filed\\nwith MCA",
      "Board Resolution\\nDraft",
      "Consent Letter\\nDraft (DIR-2)",
      "MCA Payment\\nChallan",
    ],
  },
  ROCReturnFilingForOPCPage: {
    title: "ROC Annual Return Filing for OPC",
    subtitle:
      "Mandatory annual compliance for One Person Companies to avoid penalties, DIN disqualification, and strike-off.",
    badgeText: "AOC-4 \u2022 MGT-7 \u2022 ADT-1 \u2022 Companies Act, 2013",
    icon: "user",
    serviceID: "ROC_ANNUAL_RETURN_FILING_FOR_OPC",
    contentTitle: "Why Timely ROC Filing for OPC Is Critical",
    contentDescription:
      "ROC annual filing is mandatory for OPCs even if no business activity has occurred. Failure to file AOC-4 and MGT-7 results in uncapped penalties of \u20b9100 per day per form and risks DIN disqualification. Timely compliance ensures the company remains active and legally protected.",
    section1Title: "Key Benefits of OPC ROC Compliance",
    price: 2999,
    originalPrice: 100,
    theme: {
      orb1: "bg-blue-500/20",
      orb2: "bg-purple-500/20",
      iconBg: "from-blue-500 to-purple-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-500",
    primaryBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-purple-700",
    benefits: [
      {
        icon: "calendar",
        description: "Helps in maintaining 'Active' status on the MCA Portal",
      },
      {
        icon: "shield",
        description: "Protection from steep penalties and legal actions",
      },
      {
        icon: "scale",
        description: "Boosts confidence and trust among stakeholders",
      },
      {
        icon: "clock",
        description: "Avoids mandatory strike-off due to non-filing",
      },
    ],
    faqs: [
      {
        question: "Is ROC filing mandatory even if OPC has not done any business?",
        answer:
          "Yes. ROC return filing is mandatory even if the OPC has not carried out any business activity. Nil returns must also be filed every year.",
      },
      {
        question: "Which forms are required for OPC ROC Annual Filing?",
        answer:
          "The mandatory forms are AOC-4 (Financial Statements), MGT-7 (Annual Return), and ADT-1 (Appointment of Auditor).",
      },
      {
        question: "What is the due date for OPC annual filing?",
        answer:
          "The first annual filing is due on 30th December of the year following incorporation. Subsequent filings are due on 30th September every year.",
      },
      {
        question: "Who is responsible for filing ROC returns for OPC?",
        answer: "The sole Director of the OPC is responsible for ROC compliance and filing of annual returns.",
      },
      {
        question: "What is the penalty for late filing of OPC ROC returns?",
        answer:
          "A late fee of \u20b9100 per day applies on both AOC-4 and MGT-7 without any maximum cap. ADT-1 also attracts penalties depending on delay.",
      },
      {
        question: "Is AGM required for OPC?",
        answer:
          "No. OPCs are exempt from holding an Annual General Meeting (AGM). Resolutions are signed and recorded by the sole member/director.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for OPC ROC Filing",
        icon: "fileText",
        type: "list",
        data: [
          "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
          "Signature of the Director on financials and forms",
          "DIN of Director and Nominee should be in APPROVED status",
          "One valid Digital Signature (DSC) of the Director",
          "Appointment of Statutory Auditor via Form ADT-1 (mandatory)",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "Filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
          "MCA payment challan for filing fees",
          "Auditor",
          "Certificate of filing compliance",
        ],
      },
    ],
    addons: [
      "AOC-4\\n(Financials)",
      "MGT-7\\n(Annual Return)",
      "ADT-1\\n(Auditor Appt.)",
      "Filing Compliance\\nCertificate",
    ],
  },
  ChangeInOfficeAddressPage: {
    title: "Change in Registered Office Address",
    subtitle: "Update your company",
    badgeText: "ROC compliant \u2022 INC-22 filing \u2022 Timely updates",
    icon: "mapPin",
    serviceID: "CHANGE_IN_REGISTERED_OFFICE_ADDRESS",
    contentTitle: "The Importance of Timely Filing",
    contentDescription:
      "Changing your registered office address is a mandatory, multi-step compliance process. It requires passing a Board Resolution and filing Form INC-22 with the Registrar of Companies (ROC) within 30 days of the resolution. Timely compliance prevents penalties and maintains your company",
    section1Title: "Key Benefits of Proper Address Filing",
    price: 1499,
    originalPrice: 0,
    theme: {
      orb1: "bg-yellow-500/20",
      orb2: "bg-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-600",
    primaryBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-purple-700",
    benefits: [
      {
        icon: "scale",
        description: "Removes legal hassles and avoids continuing non-compliance",
      },
      {
        icon: "shield",
        description: "Protection from penalty and legal actions",
      },
      {
        icon: "home",
        description: "Boosts Transparency and Trust among stakeholders",
      },
      {
        icon: "fileText",
        description: "Avoids legal complications due to outdated records",
      },
    ],
    faqs: [
      {
        question: "What documents are required for Office Address Change?",
        answer:
          "New Address Proof, Board Resolution, NOC for Shifting of Registered Office and Declaration for Shifting of Registered Office. Lawizer will guide in the document preparation and filing of Forms.",
      },
      {
        question: "What are the fees and charges for Shifting of Office Address?",
        answer:
          "Rs. 300 is for Form INC-22 if filed within the prescribed time limit. Note that Stamp Duty on the Rent/Lease Agreement is a separate, variable cost.",
      },
      {
        question: "What Forms are to be filed for changing the Company Address?",
        answer:
          "Form INC-22 is the primary form filed with the ROC to notify the change. Other forms (like MGT-14 or INC-28) may be required depending on the type of shift (e.g., state change).",
      },
      {
        question: "What is time limit to file change of office address documents with ROC?",
        answer: "The time limit is 30 days from passing of the Board Resolution for shifting of Registered Office.",
      },
      {
        question: "What actions need to be taken after shifting of registered office address of Company?",
        answer:
          "The Name Plate mentioning the address has to be modified, the Letterhead of the Company has to be changed, the Statutory Register has to be shifted to the new registered office, Shop Act License & PAN card need to be updated.",
      },
      {
        question: "What are different types of Registered Office Shifting?",
        answer:
          "a) Within the Local Limits of the City b) Within the limits of the same ROC c) Within the same state but different ROC (Only in case of Maharashtra and Tamil Nadu) d) From one state to another (Complex process requiring Central Government approval).",
      },
    ],
    sections: [
      {
        title: "Documentation and Pre-Requisites",
        icon: "fileText",
        type: "list",
        data: [
          "Form INC-20A for Commencement of Business should have been filed",
          "Copy of Latest Utility Bill of New office (Not Older than 45 Days)",
          "Copy of Rental Agreement/Sale Deed of the new office",
          "DIN of minimum 1 Director should be in ",
          " Status",
          "One Valid Digital Signature (DSC) of an existing Director.",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "Board Resolution draft for shifting of office",
          "Filed e-form INC-22 with MCA",
          "MCA payment challan and acknowledgment",
          "Guidance on post-filing statutory updates (Name Plate, Letterhead)",
          "Declaration for Shifting of Registered Office",
        ],
      },
    ],
    addons: [
      "INC-22\\nFiled with MCA",
      "Board Resolution\\nDraft",
      "Address Change\\nDeclaration",
      "MCA Payment\\nChallan",
    ],
  },
  ClosureOfPvtLtdPage: {
    title: "Closure of Private Limited Company",
    subtitle:
      "Formally dissolve your non-operational Private Limited Company by striking its name off the ROC records via Form STK-2 (Fast Track Exit).",
    badgeText: "Companies Act, 2013 \u2022 STK-2 Filing \u2022 Director Protection",
    icon: "users",
    serviceID: "CLOSURE_OF_PRIVATE_LIMITED_COMPANY",
    contentTitle: "The Importance of Legal Closure (FTE)",
    contentDescription:
      "The Fast Track Exit (FTE) route via Form STK-2 is the simplified way to close a non-operational Private Limited Company. Failure to formally close means mandatory annual filings continue, heavy penalties accrue, and directors remain liable. Legal striking off removes all future compliance burdens and protects directors.",
    section1Title: "Key Benefits of Formal Company Closure",
    price: 6999,
    originalPrice: 10000,
    theme: {
      orb1: "bg-red-600/20",
      orb2: "bg-yellow-600/20",
      iconBg: "from-red-500 to-yellow-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-600 to-yellow-500",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-yellow-600",
    benefits: [
      {
        icon: "scale",
        description: "Removes legal hassles and avoids continuing non-compliance",
      },
      {
        icon: "shield",
        description: "Protects directors from future penalties and liabilities",
      },
      {
        icon: "checkCircle",
        description: "Formal closure frees the company from all statutory obligations",
      },
      {
        icon: "building",
        description: "Stops unnecessary financial losses (audit/filing fees)",
      },
    ],
    faqs: [
      {
        question: "What is Closure of Company?",
        answer:
          "When the existence of a Private Limited Company as a legal entity comes to an end, it is known as closure of the company. This is typically achieved via the Striking Off or Winding Up process.",
      },
      {
        question: "What is the difference between Closure, Winding up, and Dissolution?",
        answer:
          "Closure is voluntary under Fast Track Exit (FTE). Winding up may be voluntary or court-ordered with a liquidator. Dissolution is the final legal termination of a company, often initiated by the court.",
      },
      {
        question: "Why is ROC filing required for Closure?",
        answer:
          "Even if business stops, the company remains legally active until ROC approves closure (STK-2). Filing ensures removal from MCA records and exemption from further annual compliance filings, avoiding penalties.",
      },
      {
        question: "What is Fast Track Exit (FTE) Scheme?",
        answer:
          "An MCA initiative for simplified and faster voluntary closure of inoperative companies (Pvt Ltd) by filing Form STK-2.",
      },
      {
        question: "Which companies are eligible for Closure under FTE?",
        answer:
          "Any Private Limited Company (not Section 8) that has been inoperative for over one year since incorporation or one year prior to the application can apply for closure.",
      },
      {
        question: "What are the costs involved in Closing a Company?",
        answer:
          "ROC filing fee for Form STK-2 is \u20b910,000. Notary and Stamp Paper charges may vary (approximately \u20b91,200\u2013\u20b91,500).",
      },
      {
        question: "What documents are required for Closure?",
        answer:
          "Application for striking off, Board Resolution, Special Resolution (Shareholders), Director's Affidavit, Indemnity Bond, and Statement of Assets & Liabilities.",
      },
      {
        question: "What is the time limit to file Closure documents with ROC?",
        answer:
          "Form STK-2 must be filed with the ROC office within 30 days from the date of signing the Statement of Assets & Liabilities.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Striking Off (Form STK-2)",
        icon: "fileText",
        type: "list",
        data: [
          "Form INC-20A for Commencement of Business should have been filed",
          "Annual ROC Return Filings should be up to date",
          "Company should be inoperative for more than 2 consecutive financial years (or 1 year for FTE)",
          "Bank Account of the Company should be closed and Statement of Accounts prepared",
          "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
          "DIN of all Directors should be in ",
          " status",
          "One valid Digital Signature (DSC) of an existing Director",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "All filed e-forms with MCA (e.g., Form STK-2)",
          "MCA payment challan for closure fees",
          "Company Closure Certificate (Confirmation of Striking Off)",
          "Drafted Indemnity Bond and Affidavit documents",
          "Board and Shareholder Resolution for voluntary closure",
        ],
      },
    ],
    addons: [
      "Company Closure\\nCertificate",
      "STK-2 Filed\\nwith MCA",
      "Indemnity Bond\\n& Affidavit",
      "Board & Shareholder\\nResolution",
    ],
  },
  IncreasingCapitalOfCompanyPage: {
    title: "Increase in Authorized Share Capital",
    subtitle: "Legally expand your company",
    badgeText: "Form SH-7 \u2022 Companies Act, 2013 \u2022 Growth Ready",
    icon: "banknote",
    serviceID: "INCREASE_IN_AUTHORIZED_SHARE_CAPITAL",
    contentTitle: "The Importance of Capital Expansion",
    contentDescription:
      "Increasing Authorized Capital raises the ceiling for issuing shares, enabling fundraising and expansion without repeated MOA amendments. The process requires a Special Resolution and timely filing of Form SH-7 to avoid penalties.",
    section1Title: "Key Benefits of Increasing Share Capital",
    price: 2499,
    originalPrice: 0,
    theme: {
      orb1: "bg-green-500/20",
      orb2: "bg-teal-500/20",
      iconBg: "from-green-500 to-teal-500",
      badgeText: "text-green-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-green-500",
    primaryBg: "bg-gradient-to-r from-green-600 to-teal-500",
    primaryHoverBg: "bg-gradient-to-r from-green-700 to-teal-600",
    benefits: [
      {
        icon: "trendingUp",
        description: "Enables scaling, business expansion, and new ventures",
      },
      {
        icon: "banknote",
        description: "Creates opportunities for raising funds from new investors",
      },
      {
        icon: "users",
        description: "Boosts transparency and trust among stakeholders",
      },
      {
        icon: "scale",
        description: "Ensures legal compliance and protects against penalties",
      },
    ],
    faqs: [
      {
        question: "What is maximum share capital allowed for a Company?",
        answer:
          "There is no maximum limit for the Authorized Share Capital of a Private or Public Limited Company under the Companies Act, 2013.",
      },
      {
        question: "What is the difference between Authorized Capital & Paid up capital?",
        answer:
          "Authorized Capital is the maximum limit up to which a Company can issue shares. Paid Up Capital is the actual amount invested by shareholders.",
      },
      {
        question: "What documents are required for increasing the capital?",
        answer:
          "MOA, AOA, Board Meeting documents, and documents for Extra Ordinary General Meeting (EGM). Lawizer assists in drafting and filing all documents.",
      },
      {
        question: "What forms are filed for increasing Company capital?",
        answer:
          "Form SH-7 is the primary form filed with the ROC to register the increase in Authorized Share Capital.",
      },
      {
        question: "What is the time limit to file capital increase with ROC?",
        answer: "Form SH-7 must be filed within 30 days from passing the Special Resolution in the EGM.",
      },
      {
        question: "Is Stamp Duty payable on increase in Authorized Capital?",
        answer: "Yes, Stamp Duty is payable and varies depending on the State and the amount of capital increase.",
      },
      {
        question: "Are Share Certificates required after capital increase?",
        answer: "Yes, Share Certificates must be updated and issued to reflect the revised capital structure.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Increase in Authorized Capital",
        icon: "fileText",
        type: "list",
        data: [
          "Form INC-20A for Commencement of Business should have been filed",
          "Details of the required Increase in Authorized Capital",
          "DIN of minimum 1 Director should be in ",
          " Status",
          "One Valid Digital Signature (DSC) of an existing Director",
          "MOA (Memorandum of Association) must contain the necessary capital clause",
        ],
      },
      {
        title: "Pre-Requisites for Increase in Paid-up Capital",
        icon: "checkCircle",
        type: "list",
        data: [
          "Bank Statement showing deposit of Paid up Capital amount",
          "Share certificates of the Company (for updating)",
          "DIN of minimum 1 Director should be in ",
          " Status",
          "One Valid Digital Signature (DSC) of an existing Director",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "Filed e-forms with MCA (Form SH-7)",
          "MCA payment challan for filing fees and stamp duty",
          "Drafted Shareholders",
          "Updated MOA and AOA copy",
          "Guidance on printing new Share Certificates",
        ],
      },
    ],
    addons: [
      "SH-7 Filed\\nwith MCA",
      "Special Resolution\\n(EGM) Draft",
      "Updated MOA\\n& AOA Copy",
      "Share Certificate\\nGuidance",
    ],
  },
  ROCReturnFilingForLLPPage: {
    title: "ROC Annual Return Filing for LLP",
    subtitle:
      "Mandatory annual compliance for Limited Liability Partnerships (LLP), involving timely filing of Form 8 (Financials) and Form 11 (Annual Return) to avoid heavy penalties.",
    badgeText: "LLP Act, 2008 \u2022 Form 8 \u2022 Form 11",
    icon: "fileText",
    serviceID: "ROC_ANNUAL_RETURN_FILING_FOR_LLP",
    contentTitle: "The Importance of Timely Annual Filing",
    contentDescription:
      "ROC Annual Filing is non-negotiable for an LLP. Failing to file Form 8 and Form 11 by their respective deadlines (October 30th and May 30th) results in an uncapped, cumulative late fee of \u20b9100 per day per form. This compliance step is crucial for maintaining ",
    section1Title: "Key Benefits of Compliant LLP Filing",
    price: 2499,
    originalPrice: 100,
    theme: {
      orb1: "bg-blue-600/20",
      orb2: "bg-purple-600/20",
      iconBg: "from-blue-500 to-purple-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-500",
    primaryBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-purple-700",
    benefits: [
      {
        icon: "calendar",
        description: "Helps in maintaining 'Active' status in the MCA Portal",
      },
      {
        icon: "shield",
        description: "Protection from steep penalty and legal actions",
      },
      {
        icon: "scale",
        description: "Boosts Confidence and Trust among partners and stakeholders",
      },
      {
        icon: "clock",
        description: "Avoiding mandatory 'Strike Off' action by the ROC for non-filing",
      },
    ],
    faqs: [
      {
        question: "What Forms are to be filed for ROC Return (for LLP)?",
        answer:
          "LLP needs to file two eForms every year: Form 11 for the Annual Return (Compliance) and Form 8 for the Statement of Accounts (Financials).",
      },
      {
        question: "What is the LLP Annual Filing due date?",
        answer:
          "Due date for filing Form 11 is 30th May of each year. Due date for filing Form 8 is 30th October of every year.",
      },
      {
        question: "What is the Penalty for late filing of LLP return?",
        answer:
          "Late fees of \u20b9100 per day is charged on each Form (Form 11 and Form 8) from the day after the due date until the filing is completed. The penalty is uncapped.",
      },
      {
        question: "How to calculate Penalty for late filing of LLP Annual filing?",
        answer:
          "Penalty calculation is: \u20b9100 x Number of days delay for Form 11 + \u20b9100 x Number of days delay for Form 8.",
      },
      {
        question: "Is there any chance of waiver of penalty for non-filing of Form 11 & Form 8?",
        answer:
          "No, there is typically no provision for waiver of penalty. The MCA has not recently announced any general waiver or amnesty scheme, making timely filing essential.",
      },
      {
        question: "What happens if an LLP does not file annual returns?",
        answer:
          "A) LLP & its Partners become liable for steep, uncapped late fees. B) ROC may issue notice to close the LLP. C) ROC can disqualify and block the DIN of Designated Partners, preventing them from joining other entities.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Filing (Form 8 & Form 11)",
        icon: "fileText",
        type: "list",
        data: [
          "For Form 11 Filing (Annual Return): DIN of all Designated Partners should be in APPROVED Status, Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
          "For Form 8 Filing (Statement of Accounts): Turnover less than 40 Lac: Signed Balance Sheet & P&L. Turnover more than 40 Lac: Audited Balance Sheet (Mandatory), DIN of all Designated Partners should be in APPROVED Status, Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "All filed e-forms with MCA (Form 8 and Form 11)",
          "MCA payment challan for filing fees",
          "Financial statements preparation (if required)",
          "Certificate of filing compliance",
        ],
      },
    ],
    addons: [
      "Form 11\\n(Annual Return)",
      "Form 8\\n(Financials)",
      "MCA Payment\\nChallan",
      "Filing Compliance\\nCertificate",
    ],
  },
  RocReturnFilingPvtLtdPage: {
    title: "ROC Annual Return Filing for Pvt Ltd",
    subtitle:
      "Mandatory annual compliance for Private Limited Companies, involving timely filing of AOC-4 (Financials) and MGT-7 (Annual Return) to avoid heavy penalties.",
    badgeText: "Companies Act, 2013 \u2022 AOC-4 \u2022 MGT-7",
    icon: "users",
    serviceID: "ROC_ANNUAL_RETURN_FILING_PVT_LTD",
    contentTitle: "The Importance of Timely Annual Filing",
    contentDescription:
      "ROC Annual Filing is non-negotiable. Failure to file Form AOC-4 (Financials) and Form MGT-7 (Annual Return) by the deadline (September 30th) results in an uncapped, cumulative late fee of \u20b9100 per day per form. This compliance step is crucial for maintaining ",
    section1Title: "Key Benefits of Compliant Pvt Ltd Filing",
    price: 3499,
    originalPrice: 100,
    theme: {
      orb1: "bg-blue-600/20",
      orb2: "bg-purple-600/20",
      iconBg: "from-blue-500 to-purple-500",
      badgeText: "text-blue-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-500",
    primaryBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-purple-700",
    benefits: [
      {
        icon: "calendar",
        description: "Helps in maintaining 'Active' status in the MCA Portal",
      },
      {
        icon: "shield",
        description: "Protection from steep penalty and legal actions",
      },
      {
        icon: "scale",
        description: "Boosts Confidence and Trust among stakeholders",
      },
      {
        icon: "clock",
        description: "Avoiding mandatory 'Strike Off' of the Company for non-filing",
      },
    ],
    faqs: [
      {
        question: "Since Incorporation, the Company has not done any business, do we need to file an ROC Return?",
        answer:
          "Yes. ROC return gives details of changes that have taken place in the company during the year and must be filed even if the company has not done any business during the year. Nil returns are mandatory.",
      },
      {
        question: "What Forms are to be filed for ROC Return?",
        answer:
          "The mandatory annual forms are: MGT-7 (Annual Return/Compliance), AOC-4 (Financial Statements/Balance Sheet), and ADT-1 (For Appointment/Reappointment of Auditors).",
      },
      {
        question: "What is the Annual Filing due date?",
        answer:
          "A) The first annual filing is due on the 30th of December of the next year from incorporation. B) Subsequent filings are due on the 30th of September every year (based on the AGM date of September 30th).",
      },
      {
        question: "What is the Penalty for late filing of a Company ROC return?",
        answer:
          "Late fees of \u20b9100 per day apply on Form MGT-7 and AOC-4 until rectified. For Form ADT-1, penalties are steep, increasing from 2x up to 12x the normal fee depending on the delay duration.",
      },
      {
        question: "Who is responsible for filing the Company ROC Return?",
        answer:
          "It is the duty of the Company and its Directors to file the ROC Return, as both the Company and the Directors are liable for non-filing and associated penalties.",
      },
      {
        question: "What are the ROC Return Filing fees and charges?",
        answer:
          "A company having an Authorized Capital up to \u20b91 lakh is charged \u20b9300 for each Form AOC-4 and MGT-7. For companies with \u20b95 lakh or more Authorized Capital, the charge is \u20b9400 per form.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Filing (AOC-4 & MGT-7)",
        icon: "fileText",
        type: "list",
        data: [
          "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
          "Attendance of a minimum of 1 director for the AGM (or signing of minutes)",
          "Signature of a minimum of 1 director on the financials (Director",
          "DIN of all Directors should be in APPROVED Status",
          "One valid Digital Signature (DSC) of a Director (for e-filing)",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "All filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
          "MCA payment challan for filing fees",
          "Auditor",
          "Certificate of filing compliance",
        ],
      },
    ],
    addons: [
      "AOC-4\\n(Financials)",
      "MGT-7\\n(Annual Return)",
      "ADT-1\\n(Auditor Appt.)",
      "Filing Compliance\\nCertificate",
    ],
  },
  ClosureOfOPCPage: {
    title: "Closure of OPC (Striking Off)",
    subtitle:
      "Formally dissolve your One Person Company via the Fast Track Exit (FTE) Scheme and strike its name off the ROC records using Form STK-2.",
    badgeText: "Companies Act, 2013 \u2022 FTE Scheme \u2022 STK-2 Filing",
    icon: "user",
    serviceID: "CLOSURE_OF_OPC",
    contentTitle: "The Importance of Legal Closure (FTE)",
    contentDescription:
      "The Fast Track Exit (FTE) route via Form STK-2 is the simplified way to close a non-operational OPC. Failure to formally close the OPC means mandatory annual filings continue, leading to heavy fines and non-compliance issues for the Director. Legal striking off removes all future compliance burdens.",
    section1Title: "Key Benefits of Formal OPC Closure",
    price: 5999,
    originalPrice: 10000,
    theme: {
      orb1: "bg-red-600/20",
      orb2: "bg-yellow-600/20",
      iconBg: "from-red-500 to-yellow-500",
      badgeText: "text-yellow-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-red-500",
    primaryBg: "bg-gradient-to-r from-red-600 to-yellow-500",
    primaryHoverBg: "bg-gradient-to-r from-red-700 to-yellow-600",
    benefits: [
      {
        icon: "scale",
        description: "Removes legal hassles and avoids continuing non-compliance",
      },
      {
        icon: "shield",
        description: "Eliminates the risk of accumulating penalties and fines",
      },
      {
        icon: "checkCircle",
        description: "Formal closure frees the director from OPC statutory obligations",
      },
      {
        icon: "building2",
        description: "Removes the entity's 'defaulter' status (if applicable)",
      },
    ],
    faqs: [
      {
        question: "What is Closure of OPC?",
        answer:
          "Closure of an OPC is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the ROC records.",
      },
      {
        question: "What is the difference between Closure, Winding up, and Dissolution?",
        answer:
          "Closure (Striking Off via FTE) is voluntary for non-operational OPCs (Form STK-2). Winding up is a formal liquidation, either voluntary or court-ordered. Dissolution is the final act of legal termination.",
      },
      {
        question: "Why ROC filing is required for Closing an OPC?",
        answer:
          "ROC filing (STK-2) officially removes the OPC from government records. Without this approval, the OPC must continue mandatory annual filings, incurring penalties if not done.",
      },
      {
        question: "What is Fast Track Exit (FTE) Scheme?",
        answer:
          "A simplified MCA process for easy and faster voluntary closure of inoperative companies, including OPCs, by filing Form STK-2.",
      },
      {
        question: "Which OPC is eligible for Closure?",
        answer:
          "Any OPC not being a Section 8 Company and inactive for over one year since incorporation or one year prior to application can apply for closure.",
      },
      {
        question: "What are the costs involved?",
        answer:
          "Filing fee for Form STK-2: \u20b910,000. Notary and Stamp Paper charges may vary (approx. \u20b91,200\u2013\u20b91,500).",
      },
      {
        question: "What documents are required?",
        answer:
          "Application for striking off, Board Resolution, Director's Consent, Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents.",
      },
      {
        question: "What is the time limit to file?",
        answer:
          "Form STK-2 must be filed with the ROC office within 30 days from the date of Signing of the Statement of Assets and Liabilities.",
      },
    ],
    sections: [
      {
        title: "Pre-Requisites for Striking Off (Form STK-2)",
        icon: "fileText",
        type: "list",
        data: [
          "Form INC-20A for Commencement of Business should have been filed",
          "Annual ROC Return Filings should be up to date (or statement prepared)",
          "OPC should be inoperative for more than 1 or 2 consecutive financial years",
          "Bank Account of the OPC should be closed and Statement of Accounts prepared",
          "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
          "DIN of all Directors should be in ",
          " status",
          "One valid Digital Signature (DSC) of an existing Director",
        ],
      },
      {
        title: "Lawizer Deliverables",
        icon: "calendar",
        type: "grid",
        data: [
          "All filed e-forms with MCA (e.g., Form STK-2)",
          "MCA payment challan for closure fees",
          "OPC Closure Certificate (Confirmation of Striking Off)",
          "Drafted Indemnity Bond and Affidavit documents",
          "Board Resolution and Director",
        ],
      },
    ],
    addons: [
      "OPC Closure\\nCertificate",
      "STK-2 Filed\\nwith MCA",
      "Indemnity Bond\\n& Affidavit",
      "MCA Payment\\nChallan",
    ],
  },
};
