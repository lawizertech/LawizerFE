import PlanPage from "../PlanPageTemplate";
import type { PlanConfig } from "../PlanPageTemplate";

const PLAN: PlanConfig = {
  id:            "gold",
  name:          "Gold",
  subtitle:      "Tax Filing + Tax Planning for the Next Year",
  price:         6499,
  originalPrice: 17498,
  accentColor:   "#b8860b",
  glowRGB:       "184,134,11",
  emoji:         "🥇",
  tier:          "Advanced",
  tagline:       "Complete filing plus a personalised tax-saving roadmap.",
  about:
    "The Gold plan is for professionals and business owners who want not just accurate filing but a forward-looking tax plan. Get a dedicated senior CA, comprehensive income reporting, and a strategic planning session for the next financial year.",
  servicesIncluded: [
    "Live video call filing for all income sources including NRI and business",
    "Tax planning session for the next financial year",
    "Reporting of ESOPs, RSUs, foreign assets and income",
    "Business income and professional income computation",
    "Advance tax calculation and advisory",
    "Tax notice handling and representation support",
    "Dedicated senior CA with priority turnaround",
  ],
  whoShouldBuy: [
    "Business owners and self-employed professionals",
    "NRIs with Indian income and foreign assets",
    "Employees with ESOPs, RSUs, or foreign income",
    "High net worth individuals with diverse income streams",
    "Those wanting a proactive tax-saving plan for next year",
    "Taxpayers who have missed filings and need to get compliant",
  ],
  howItsDone: [
    { step: 1, title: "Onboarding Call",    desc: "A brief intake call to understand your income profile and map out the filing session." },
    { step: 2, title: "Live Filing Session", desc: "Video call with a senior CA to file all income sources accurately, including NRI and business income." },
    { step: 3, title: "Tax Planning Report", desc: "Receive a written tax planning report with strategies to reduce your tax outgo next year." },
  ],
  documentsRequired: [
    "Form 16 / Salary slips",
    "Business P&L and balance sheet (if applicable)",
    "ESOP / RSU vesting documents",
    "Foreign income & asset details",
    "Form 26AS / AIS",
    "PAN, Aadhaar, Bank statements",
  ],
  estimateDays: 2,
  faqs: [
    { q: "What does the tax planning report include?",     a: "It covers 80C investment suggestions, HRA optimisation, NPS contributions, advance tax schedules, and personalised deduction strategies." },
    { q: "Is NRI filing covered?",                         a: "Yes. This plan covers NRI filing including DTAA benefits, foreign asset disclosure in Schedule FA, and global income reporting." },
    { q: "Can I file for multiple years under this plan?", a: "This plan covers one assessment year. For multiple years, please contact our team for a custom quote." },
    { q: "How is this different from Silver?",             a: "Gold adds a dedicated tax planning session, ESOP/NRI coverage, and business income support that Silver does not include." },
  ],
};

export default function GoldPage() {
  return <PlanPage plan={PLAN} />;
}