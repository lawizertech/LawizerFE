import PlanPage from "../PlanPageTemplate";
import type { PlanConfig } from "../PlanPageTemplate";

const PLAN: PlanConfig = {
  id:            "diamond",
  name:          "Diamond",
  subtitle:      "Tax Filing + Advisory Assistance All Year-round",
  price:         34999,
  originalPrice: 99998,
  accentColor:   "#3d6ab0",
  glowRGB:       "61,106,176",
  emoji:         "💎",
  tier:          "Elite",
  tagline:       "Year-round advisory and unlimited CA access for HNIs.",
  about:
    "The Diamond plan is our most comprehensive offering — built for high net worth individuals, promoters, and complex business structures. Enjoy unlimited video calls, monthly advisory sessions, representation before tax authorities, and a dedicated CA partner for the entire year.",
  servicesIncluded: [
    "Unlimited video call sessions with a dedicated senior CA partner",
    "Year-round monthly tax advisory and planning calls",
    "Filing for all income sources including complex business structures",
    "Representation before the Income Tax Department if required",
    "Advance tax planning and quarterly review sessions",
    "FEMA and international tax advisory",
    "Dedicated client portal with real-time status tracking",
    "Priority same-day response SLA",
  ],
  whoShouldBuy: [
    "High net worth individuals with ₹1 Cr+ income",
    "Promoters, directors, and business owners with complex structures",
    "Individuals with international income, FEMA transactions, or global assets",
    "Those with audit-mandatory cases or pending tax disputes",
    "Anyone wanting a full-year CA partner rather than one-time filing",
    "Families seeking consolidated tax advisory across multiple members",
  ],
  howItsDone: [
    { step: 1, title: "Dedicated Onboarding", desc: "You're assigned a senior CA partner. A detailed kickoff call maps out your full tax profile." },
    { step: 2, title: "Filing & Strategy",     desc: "Your CA handles the filing, computations, and all required schedules. A tax strategy document is shared." },
    { step: 3, title: "Year-round Advisory",   desc: "Monthly 1:1 advisory calls continue all year — advance tax, investments, compliance reminders and more." },
  ],
  documentsRequired: [
    "All income documents (salary, business, capital gains, foreign)",
    "Board resolutions / company documents if applicable",
    "FEMA transaction details",
    "Form 26AS / AIS",
    "PAN, Aadhaar, Passport (for NRI / foreign)",
    "Previous years' ITRs for reference",
  ],
  estimateDays: 1,
  faqs: [
    { q: "What does 'year-round advisory' mean?",              a: "Monthly 1:1 calls with your CA, quarterly advance tax reminders, and on-demand support for any tax query throughout the year." },
    { q: "Is representation before the IT Department included?", a: "Yes. If you receive a scrutiny notice or tax demand, your CA represents you before the department at no extra cost." },
    { q: "Can this plan cover my family members too?",          a: "By default it covers one PAN. For family coverage please contact our team — bundled pricing is available." },
    { q: "Is there a client portal?",                           a: "Yes. Diamond members get exclusive access to a real-time dashboard to track filing status, documents, and advisory reports." },
  ],
};

export default function DiamondPage() {
  return <PlanPage plan={PLAN} />;
}