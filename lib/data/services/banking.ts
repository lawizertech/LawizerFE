import { ServiceData } from "@/lib/types/service";

export const servicesData: Record<string, ServiceData> = {
  "loan-advance-disputes": {
    title: "Loan & Advance Disputes",
    subtitle: "Legal remedy for incorrect CIBIL reporting and harassment by banks or recovery agents.",
    badgeText: "CIBIL Rectification \u2022 Anti-Harassment \u2022 Legal Protection",
    icon: "users",
    serviceID: "LOAN_ADVANCE_DISPUTES",
    contentTitle: "Resolve CIBIL Errors & Stop Recovery Harassment",
    contentDescription:
      "Incorrect credit reporting and unlawful recovery practices can permanently damage your financial future. Legal action compels banks to correct CIBIL errors, stop harassment, and compensate affected consumers.",
    section1Title: "Why Legal Action is Necessary",
    price: 999,
    originalPrice: 0,
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
        description: "Correction of incorrect CIBIL records and restoration of credit score.",
      },
      {
        icon: "scale",
        description: "Immediate stoppage of illegal harassment by recovery agents.",
      },
      {
        icon: "checkCircle",
        description: "Compensation for financial loss, costs incurred, and mental harassment.",
      },
      {
        icon: "users",
        description: "Legal action compelling banks to issue no-dues certificates and rectify records.",
      },
    ],
    faqs: [
      {
        question: "What is a CIBIL or credit score dispute?",
        answer:
          "A dispute arises when incorrect loan status such as 'written-off', 'default', or 'settled' is wrongly reported, damaging the consumer's creditworthiness.",
      },
      {
        question: "What qualifies as harassment by recovery agents?",
        answer:
          "Threats, repeated calls, intimidation, public shaming, or abusive conduct by bank or NBFC recovery agents in violation of RBI's Fair Practices Code.",
      },
      {
        question: "Why is correcting CIBIL errors important?",
        answer:
          "Incorrect CIBIL data can prevent future loans for housing, vehicles, education, or business. Legal action forces correction and restores financial credibility.",
      },
      {
        question: "Where is the legal case filed?",
        answer:
          "Cases are filed before the Consumer Commission or the RBI Integrated Ombudsman depending on the nature of the dispute.",
      },
    ],
    sections: [
      {
        title: "Pre-requisites for Filing a Loan or CIBIL Dispute Case",
        icon: "fileText",
        type: "list",
        data: [
          "Detailed written complaint to the bank or NBFC",
          "Escalation to the CEO in cases of continued harassment.",
          "Supporting documents such as loan agreement, payment receipts, and CIBIL/credit reports.",
          "Evidence of harassment including call recordings, messages, or police complaints (if any).",
          "Mandatory waiting period of 30 days after lodging complaint with the bank.",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Drafting of legal petition for Consumer Commission or RBI Ombudsman.",
          "Issuance of legal notices to the bank and credit bureaus (CIBIL, Equifax, etc.).",
          "Representation to secure rectification of credit records and compensation.",
        ],
      },
    ],
    addons: [
      "Legal Notice\\nto Bank",
      "CIBIL\\nRectification",
      "Consumer Commission\\nRepresentation",
      "Compensation\\nRecovery",
    ],
  },
  "cheque-bounce-s138": {
    title: "Cheque Bounce Case (Section 138)",
    subtitle: "Criminal proceedings under the Negotiable Instruments Act for fast and effective debt recovery.",
    badgeText: "Criminal Remedy \u2022 Strict Timelines \u2022 Court Representation",
    icon: "gavel",
    serviceID: "CHEQUE_BOUNCE_S138",
    contentTitle: "Recover Your Money Through Section 138 Proceedings",
    contentDescription:
      "Section 138 of the Negotiable Instruments Act provides a powerful criminal remedy against cheque dishonour. Strict timelines apply, and professional handling ensures faster recovery of dues, interest, and compensation.",
    section1Title: "Why Section 138 Is the Strongest Debt Recovery Tool",
    price: 1499,
    originalPrice: 0,
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
        icon: "gavel",
        description: "Criminal remedy for debt recovery with imprisonment and heavy fines under law.",
      },
      {
        icon: "clock",
        description: "Faster and more effective recovery mechanism compared to lengthy civil suits.",
      },
      {
        icon: "scale",
        description: "Recovery of cheque amount along with interest, compensation, and legal costs.",
      },
      {
        icon: "fileText",
        description: "End-to-end handling till final court order and execution of recovery.",
      },
    ],
    faqs: [
      {
        question: "When does a cheque bounce become a criminal offence?",
        answer:
          "When a cheque issued towards a legally enforceable debt is dishonored due to insufficient funds or similar reasons, and statutory timelines under Section 138 are followed.",
      },
      {
        question: "Why is Section 138 more effective than a civil suit?",
        answer:
          "It is a criminal offence carrying imprisonment and fines, creating strong pressure on the drawer to settle quickly.",
      },
      {
        question: "What is the deadline for sending the legal notice?",
        answer:
          "The legal demand notice must be sent within 30 days of receiving the cheque return memo from the bank.",
      },
      {
        question: "When can the court complaint be filed?",
        answer:
          "If payment is not made within 15 days of notice receipt, the complaint must be filed within the next 30 days.",
      },
    ],
    sections: [
      {
        title: "Mandatory Legal Prerequisites (Strict Timelines)",
        icon: "clock",
        type: "list",
        data: [
          "Cheque must be presented within its validity period (generally 3 months).",
          "Cheque should be dishonored for legally recognized reasons such as insufficient funds.",
          "Legal Demand Notice must be sent within 30 days of receiving the Cheque Return Memo.",
          "Drawer must fail to make payment within 15 days of receiving the notice.",
          "Criminal complaint must be filed within 30 days after expiry of the 15-day notice period.",
        ],
      },
      {
        title: "Documents Required",
        icon: "fileText",
        type: "list",
        data: [
          "Original dishonored cheque.",
          "Original cheque return memo issued by the bank.",
          "Copy of the legal demand notice sent to the drawer.",
          "Postal or courier receipt and delivery acknowledgement.",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "scale",
        type: "grid",
        data: [
          "Drafting and dispatch of a legally compliant demand notice.",
          "Drafting and filing of Section 138 criminal complaint before Magistrate Court.",
          "Complete legal representation during trial and hearings.",
          "Execution support to recover cheque amount, fine, and compensation.",
        ],
      },
    ],
    addons: [
      "Legal Demand\\nNotice Draft",
      "S.138 Complaint\\nFiling",
      "Court\\nRepresentation",
      "Recovery &\\nExecution Support",
    ],
  },
  "digital-banking-fraud": {
    title: "Digital & Electronic Banking Fraud",
    subtitle: "Legal recovery of losses from unauthorized digital transactions.",
    badgeText: "RBI Ombudsman \u2022 Consumer Commission",
    icon: "banknote",
    serviceID: "DIGITAL_BANKING_FRAUD",
    contentTitle: "Why Legal Action Is Necessary",
    contentDescription:
      "Banks often deny liability in cases of digital fraud despite clear RBI guidelines. Legal action is required to enforce zero-liability or limited-liability rules and recover unauthorized debits along with compensation.",
    section1Title: "Key Benefits of Our Legal Support",
    price: 1199,
    originalPrice: 0,
    theme: {
      orb1: "bg-blue-500/20",
      orb2: "bg-cyan-500/20",
      iconBg: "from-blue-500 to-cyan-500",
      badgeText: "text-cyan-300",
      heroBg: "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]",
    },
    primaryColor: "text-blue-600",
    primaryBg: "bg-gradient-to-r from-blue-600 to-cyan-600",
    primaryHoverBg: "bg-gradient-to-r from-blue-700 to-cyan-700",
    benefits: [
      {
        icon: "shield",
        description: "Recovery of loss by enforcing RBI zero-liability and limited-liability rules",
      },
      {
        icon: "users",
        description: "Full legal representation before RBI Ombudsman or Consumer Commission",
      },
      {
        icon: "checkCircle",
        description: "Refund of unauthorized debits with compensation for mental harassment",
      },
      {
        icon: "fileText",
        description: "Legally drafted complaint citing RBI circulars and case law",
      },
    ],
    faqs: [
      {
        question: "What types of digital banking fraud are covered?",
        answer:
          "Phishing, vishing, card fraud, unauthorized UPI/NEFT/RTGS transactions, and failed digital payments where money is debited but not credited.",
      },
      {
        question: "What are RBI zero-liability rules?",
        answer:
          "If the customer reports unauthorized transactions promptly and is not negligent, RBI guidelines require banks to compensate the full loss.",
      },
      {
        question: "When should I report fraud to the bank?",
        answer: "Immediately. Ideally within 3 days to qualify for zero-liability protection under RBI rules.",
      },
      {
        question: "Do you represent clients before Consumer Commission?",
        answer: "Yes. We handle full representation before the RBI Integrated Ombudsman and Consumer Commissions.",
      },
    ],
    sections: [
      {
        title: "Pre-requisites for Filing a Case",
        icon: "clock",
        type: "list",
        data: [
          "Immediate written complaint to the bank (within 3 days for zero-liability cases)",
          "FIR or Cyber Crime complaint (strongly recommended)",
          "Waiting period of 30 days after lodging complaint with bank",
        ],
      },
      {
        title: "What Lawizer Delivers",
        icon: "fileText",
        type: "list",
        data: [
          "Drafting complaint for RBI Integrated Ombudsman / Consumer Commission",
          "Issuance of legal notice to the bank demanding recovery",
          "Complete legal representation until final resolution",
        ],
      },
    ],
    addons: [
      "RBI Ombudsman\\nComplaint Draft",
      "Legal Notice\\nto Bank",
      "Court\\nRepresentation",
      "Loss Recovery\\nand Compensation",
    ],
  },
};
