import PlanPage from "../PlanPageTemplate";
import type { PlanConfig } from "../PlanPageTemplate";

const PLAN: PlanConfig = {
  id:            "bronze",
  name:          "Bronze",
  subtitle:      "Tax Filing + Computation Explanation",
  price:         2499,
  originalPrice: 6873,
  accentColor:   "#c17f3a",
  glowRGB:       "193,127,58",
  emoji:         "🥉",
  tier:          "Essential",
  tagline:       "Simple, accurate ITR filing for salaried individuals.",
  about:
    "Get comprehensive service for salaried individuals to file their income tax returns accurately and on time. Our experts analyse your Form 16 and related documents to provide hassle-free, end-to-end filing support tailored to your needs.",
  servicesIncluded: [
    "Complete end-to-end ITR filing for single income source individuals",
    "Filing for salaried individuals with salary up to ₹50 Lakh",
    "Support in maximising eligible deductions under Section 80C, 80D, etc.",
    "Review and validation of tax computation by dedicated tax experts",
    "Query handling and assistance for tax notices on filed returns",
    "Priority support from a dedicated Lawizer representative",
    "30-minute audio call & Q&A session with a tax expert",
  ],
  whoShouldBuy: [
    "Salaried individuals with annual income up to ₹50 Lakh",
    "Individuals with only salary and minimal other income",
    "Employees wanting to claim deductions under 80C, 80D",
    "First-time tax filers needing expert-assisted ITR filing",
    "Salaried taxpayers who have Form 16 from their employer",
    "Those wanting quick and accurate filing with minimal documents",
  ],
  howItsDone: [
    { step: 1, title: "Purchase & Upload",       desc: "Buy the plan and securely upload your Form 16 and Form 26AS to our vault within 24 hours." },
    { step: 2, title: "Expert Review",            desc: "Our CA reviews your documents, computes your tax liability, and prepares your return." },
    { step: 3, title: "Filing & Acknowledgement", desc: "Your ITR is filed on the Income Tax portal and you receive an official acknowledgement." },
  ],
  documentsRequired: [
    "Form 16 (from employer)",
    "Form 26AS / Annual Information Statement (AIS)",
    "PAN Card",
    "Aadhaar Card",
    "Bank account details for refund",
  ],
  estimateDays: 3,
  faqs: [
    { q: "What is the last date to file ITR?",  a: "The due date for salaried individuals is typically 31st July of the assessment year. Late filing can attract penalties." },
    { q: "Can I file ITR without Form 16?",      a: "Yes, though Form 16 simplifies the process. Salary slips and bank statements can serve as alternatives." },
    { q: "What happens after I buy the plan?",   a: "Our team reaches out within a few hours. You'll be guided to upload documents securely. Filing is completed within the estimated days." },
    { q: "Is my data safe?",                     a: "Absolutely. We use bank-level encryption to protect all your documents and personal information." },
  ],
};

export default function BronzePage() {
  return <PlanPage plan={PLAN} />;
}
