import PlanPage from "../PlanPageTemplate";
import type { PlanConfig } from "../PlanPageTemplate";

const PLAN: PlanConfig = {
 id: "silver",
 name: "Silver",
 subtitle: "Tax Filing with Interactive Video Call",
 price: 4499,
 originalPrice: 12498,
 accentColor: "#c0392b",
 glowRGB: "192,57,43",
 emoji: "🥈",
 tier: "Most Popular",
 tagline: "Expert-led video call filing for complex income profiles.",
 about:
 "Our Silver plan is designed for individuals with multiple income sources including capital gains, freelance income, or salary beyond ₹50L. Work directly with a senior CA over a video call to ensure every rupee is accurately reported.",
 servicesIncluded: [
 "Interactive video call with a senior CA for the entire filing session",
 "Tax filing for salary and capital gains of any range",
 "Computation and reporting of stocks, MF, FnO, crypto, and property gains",
 "Graphical tax computation report for easy understanding",
 "Freelance and online gaming income reporting",
 "Dedicated relationship manager for follow-ups",
 "Query handling and tax notice assistance post-filing",
 ],
 whoShouldBuy: [
 "Individuals with salary income of any range",
 "Investors with capital gains from stocks, mutual funds, or property",
 "Crypto traders and FnO investors",
 "Freelancers and online gaming income earners",
 "Employees wanting a guided, interactive filing experience",
 "Taxpayers wanting a graphical breakdown of their tax computation",
 ],
 howItsDone: [
 { step: 1, title: "Purchase & Schedule", desc: "Buy the plan and schedule your video call with a senior CA at a time that suits you." },
 { step: 2, title: "Live Video Session", desc: "Join the video call. Your CA reviews documents with you live and prepares the return in real time." },
 { step: 3, title: "Review & File", desc: "You review the computation sheet, approve it, and the return is filed with acknowledgement sent immediately." },
 ],
 documentsRequired: [
 "Form 16 (from employer)",
 "Capital gains statement (broker / CAMS / KFintech)",
 "Form 26AS / AIS",
 "Crypto P&L report (if applicable)",
 "Bank statements",
 "PAN & Aadhaar",
 ],
 estimateDays: 2,
 faqs: [
 { q: "How long is the video call?", a: "Typically 45–90 minutes depending on your income complexity. Additional calls can be scheduled if needed." },
 { q: "What platforms are used for the video call?", a: "We use Google Meet or Zoom. A link is shared on your registered email after scheduling." },
 { q: "Can I file crypto and FnO income under this plan?", a: "Yes. This plan fully covers capital gains from crypto, FnO, intraday trading, and more." },
 { q: "What if I miss my scheduled call?", a: "You can reschedule up to 2 times at no extra charge." },
 ],
};

export default function SilverPage() {
 return <PlanPage plan={PLAN} />;
}
