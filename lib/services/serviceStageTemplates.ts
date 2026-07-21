export interface StageItem {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in_progress" | "completed";
  updatedAt?: string;
}

export interface ServiceTemplate {
  key: string;
  title: string;
  category: string;
  stages: StageItem[];
}

export const PRESET_SERVICE_TEMPLATES: ServiceTemplate[] = [
  {
    key: "gst_registration",
    title: "GST Registration",
    category: "Tax & Compliance",
    stages: [
      {
        id: "stage-1",
        title: "KYC & Document Verification",
        description: "Review PAN, Aadhaar, Proof of Business Place, and Bank Details.",
        status: "completed",
      },
      {
        id: "stage-2",
        title: "REG-01 Application Preparation",
        description: "Drafting Part A & Part B of GST Application on GST Portal.",
        status: "in_progress",
      },
      {
        id: "stage-3",
        title: "ARN Generation & Verification",
        description: "Application Reference Number generated. Awaiting officer review.",
        status: "pending",
      },
      {
        id: "stage-4",
        title: "GSTIN Certificate Issuance",
        description: "GST Certificate REG-06 issued and delivered to client portal.",
        status: "pending",
      },
    ],
  },
  {
    key: "company_incorporation",
    title: "Private Limited Incorporation",
    category: "Business Setup",
    stages: [
      {
        id: "stage-1",
        title: "DSC & RUN Name Reservation",
        description: "Obtain Digital Signatures & reserve company name via RUN/SPICe+.",
        status: "completed",
      },
      {
        id: "stage-2",
        title: "SPICe+ Part B Filing & MOA/AOA",
        description: "Submitting INC-32, e-MOA (INC-33), and e-AOA (INC-34) to MCA.",
        status: "in_progress",
      },
      {
        id: "stage-3",
        title: "PAN, TAN & Bank Account Allotment",
        description: "Processing corporate PAN/TAN and integrated bank account setup.",
        status: "pending",
      },
      {
        id: "stage-4",
        title: "Certificate of Incorporation Issued",
        description: "COI issued by MCA along with CIN number.",
        status: "pending",
      },
    ],
  },
  {
    key: "trademark_registration",
    title: "Trademark Registration",
    category: "Intellectual Property",
    stages: [
      {
        id: "stage-1",
        title: "Trademark Search & Class Selection",
        description: "Comprehensive IP search across classes and similarity analysis.",
        status: "completed",
      },
      {
        id: "stage-2",
        title: "TM-A Application Filing",
        description: "Filing application with Trademark Registry & obtaining TM Receipt.",
        status: "in_progress",
      },
      {
        id: "stage-3",
        title: "Examination Report & Hearing Response",
        description: "Responding to registry objections under Section 9 / Section 11.",
        status: "pending",
      },
      {
        id: "stage-4",
        title: "Journal Publication & Registration Certificate",
        description: "Published in TM Journal and ® Registration Certificate issued.",
        status: "pending",
      },
    ],
  },
  {
    key: "general_litigation",
    title: "Civil / Corporate Litigation",
    category: "Litigation & Dispute",
    stages: [
      {
        id: "stage-1",
        title: "Case Audit & Legal Notice Draft",
        description: "Evaluating documents, evidence, and serving formal Demand Notice.",
        status: "completed",
      },
      {
        id: "stage-2",
        title: "Petition Filing & Court Admission",
        description: "Filing petition/plaint in court and obtaining urgent hearing date.",
        status: "in_progress",
      },
      {
        id: "stage-3",
        title: "Rejoinder, Pleadings & Evidence",
        description: "Filing affidavits, cross-examination, and oral arguments.",
        status: "pending",
      },
      {
        id: "stage-4",
        title: "Final Order & Decree Execution",
        description: "Final court order/judgment pronounced and decree enforcement.",
        status: "pending",
      },
    ],
  },
];
