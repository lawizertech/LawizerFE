import type { Metadata } from "next";
import Link from "next/link";
import { buildFAQSchema, buildLocalBusinessSchema } from "@/lib/seo/jsonld";

const BASE_URL = "https://lawizer.com";
const PAGE_URL = `${BASE_URL}/startup-businesslegal/kolkata-west-bengal-business-registration`;

export const metadata: Metadata = {
  title: "Business Registration in Kolkata & West Bengal | Lawizer",
  description:
    "Register your Private Limited Company, LLP, OPC, or GST in Kolkata and West Bengal online. Expert CA and legal support for startups and SMEs — fast, affordable, and fully managed.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    title: "Business Registration in Kolkata & West Bengal | Lawizer",
    description:
      "Start your business in Kolkata with verified CA and legal experts. Private Limited, LLP, GST, Trademark & Compliance — all online.",
    url: PAGE_URL,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Business Registration Kolkata | Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Registration in Kolkata | Lawizer",
    description: "Start your Kolkata business online — CA-assisted.",
    images: ["/og-default.jpg"],
  },
};

const faqs = [
  {
    question: "How long does Private Limited Company registration take in Kolkata?",
    answer:
      "With Lawizer, Private Limited Company registration in Kolkata typically takes 10–15 working days, subject to MCA processing times. Our team handles all paperwork, DIN/DSC generation, and name approval.",
  },
  {
    question: "Can I register a company in West Bengal without visiting a government office?",
    answer:
      "Yes. The entire company incorporation process — from name approval to certificate of incorporation — is done online via the MCA21 portal. You do not need to visit any government office.",
  },
  {
    question: "What are the documents required for company registration in Kolkata?",
    answer:
      "You will need: PAN card, Aadhaar card, and passport-size photo of all directors; proof of registered office address in West Bengal (electricity bill/NOC); and DSC (Digital Signature Certificate) for all directors.",
  },
  {
    question: "Is GST registration mandatory for businesses in West Bengal?",
    answer:
      "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (goods) or ₹20 lakhs (services). It is also required if you sell interstate or via e-commerce platforms regardless of turnover.",
  },
  {
    question: "What is the minimum capital required to start a Private Limited Company in Kolkata?",
    answer:
      "There is no minimum paid-up capital requirement for a Private Limited Company in India. You can start with as little as ₹1 in share capital, although a nominal amount like ₹1,00,000 is commonly used.",
  },
  {
    question: "Do I need a physical office in Kolkata to register a company?",
    answer:
      "You need a registered address in West Bengal, but it can be a residential address. Lawizer can guide you on using a virtual office or your home address as the registered office.",
  },
  {
    question: "How does Lawizer's annual compliance service help Kolkata-based companies?",
    answer:
      "Lawizer manages all annual ROC filings (AOC-4, MGT-7, ADT-1), board resolutions, auditor appointments, and financial statement preparation for your Pvt Ltd, LLP, or OPC — ensuring zero penalties.",
  },
];

const services = [
  {
    title: "Private Limited Company",
    desc: "Most popular structure for startups seeking investment. Separate legal entity, limited liability.",
    href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage",
    tag: "Most Popular",
  },
  {
    title: "LLP Registration",
    desc: "Ideal for professional firms and service businesses. Low compliance burden vs. Pvt Ltd.",
    href: "/startup-businesslegal/startbusiness/LLPPage",
    tag: "Flexible",
  },
  {
    title: "GST Registration",
    desc: "Mandatory for most businesses. Get your GSTIN in 3–5 working days.",
    href: "/startup-businesslegal/startbusiness/GSTRegistrationPage",
    tag: "Required",
  },
  {
    title: "Annual Compliance",
    desc: "Stay compliant with ROC filings, MCA forms, and financial statements — fully CA-managed.",
    href: "/compliance/annual",
    tag: "Ongoing",
  },
];

const stats = [
  { label: "Companies Registered", value: "2,500+" },
  { label: "CA & Legal Experts", value: "50+" },
  { label: "Average Rating", value: "4.7 ★" },
  { label: "Cities Served", value: "All India" },
];

export default function KolkataLandingPage() {
  const faqSchema = buildFAQSchema(faqs);
  const localSchema = buildLocalBusinessSchema({
    city: "Kolkata",
    state: "West Bengal",
    url: PAGE_URL,
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="bg-[#0D0F14] text-white py-20 pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#CA2D42] mb-4 bg-[rgba(202,45,66,0.12)] border border-[rgba(202,45,66,0.2)] px-4 py-1.5 rounded-full">
              Kolkata &amp; West Bengal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-2 mb-6">
              Business Registration in{" "}
              <span className="text-[#CA2D42]">Kolkata</span> &amp; West Bengal
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Register your Private Limited Company, LLP, or OPC online — with
              expert CA and legal support tailored for West Bengal entrepreneurs.
              Fast, affordable, fully managed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#CA2D42] hover:bg-[#a8243a] text-white font-bold px-8 py-4 rounded-2xl text-base transition-all no-underline"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/startup-businesslegal"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl text-base transition-all no-underline"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ────────────────────────────────────────────────── */}
        <section className="bg-[#CA2D42] py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-red-100 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Kolkata businesses choose Lawizer ───────────────────── */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D0F14] mb-3 text-center">
              Why Kolkata Businesses Choose Lawizer
            </h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
              From Park Street startups to Durgapur manufacturers — we've helped
              2,500+ businesses across West Bengal get registered and stay compliant.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% Online",
                  desc: "No need to visit any government office. We handle all paperwork and filings digitally.",
                },
                {
                  title: "CA & Lawyer Backed",
                  desc: "Every registration is handled by a qualified CA or advocate — not just a form-filling agent.",
                },
                {
                  title: "Fixed Transparent Fees",
                  desc: "No hidden charges. You see the full cost before you pay, including government fees.",
                },
                {
                  title: "West Bengal Expertise",
                  desc: "We understand local compliance needs, state-specific permits, and West Bengal Commercial Tax rules.",
                },
                {
                  title: "Post-Registration Support",
                  desc: "From bank account opening to GST registration and annual compliance — we stay with you.",
                },
                {
                  title: "Fast Turnaround",
                  desc: "Most registrations completed within 10–15 working days from document submission.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="w-8 h-1 bg-[#CA2D42] rounded-full mb-4" />
                  <h3 className="text-lg font-bold text-[#0D0F14] mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D0F14] mb-3 text-center">
              Popular Services for West Bengal Businesses
            </h2>
            <p className="text-slate-500 text-center max-w-xl mx-auto mb-12">
              All services are available online, pan-India, with West Bengal-specific
              guidance.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block bg-slate-50 hover:bg-[rgba(202,45,66,0.04)] border border-slate-200 hover:border-[rgba(202,45,66,0.25)] rounded-2xl p-6 transition-all no-underline"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#0D0F14] group-hover:text-[#CA2D42] transition-colors">
                      {s.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-[rgba(202,45,66,0.08)] text-[#CA2D42] border border-[rgba(202,45,66,0.15)] px-2.5 py-1 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-[#CA2D42] group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business Structure Comparison ────────────────────────────── */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0D0F14] mb-3 text-center">
              Which Structure is Right for Your Kolkata Business?
            </h2>
            <p className="text-slate-500 text-center max-w-xl mx-auto mb-10">
              A quick comparison to help you choose the right legal entity.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0D0F14] text-white">
                    <th className="px-5 py-4 text-left font-semibold">Feature</th>
                    <th className="px-5 py-4 text-center font-semibold">Pvt Ltd</th>
                    <th className="px-5 py-4 text-center font-semibold">LLP</th>
                    <th className="px-5 py-4 text-center font-semibold">OPC</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {[
                    ["Suitable for", "Startups, investors", "Professional firms", "Solo founders"],
                    ["Minimum members", "2 directors", "2 partners", "1 director"],
                    ["Liability", "Limited", "Limited", "Limited"],
                    ["FDI allowed", "✓ Yes", "Restricted", "✗ No"],
                    ["Compliance burden", "Medium", "Low", "Low"],
                    ["Investor-friendly", "✓ Yes", "Partial", "✗ No"],
                    ["Govt fee (approx.)", "₹6,000–12,000", "₹4,000–8,000", "₹4,000–8,000"],
                  ].map(([feat, pvt, llp, opc]) => (
                    <tr key={feat} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 font-medium text-slate-700">{feat}</td>
                      <td className="px-5 py-3.5 text-center text-slate-600">{pvt}</td>
                      <td className="px-5 py-3.5 text-center text-slate-600">{llp}</td>
                      <td className="px-5 py-3.5 text-center text-slate-600">{opc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0D0F14] mb-3 text-center">
              FAQs — Business Registration in Kolkata
            </h2>
            <p className="text-slate-500 text-center mb-10">
              Everything you need to know about starting a business in West Bengal.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-slate-200 rounded-2xl p-5 open:border-[rgba(202,45,66,0.25)] transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-[#0D0F14] text-[15px] list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-[#CA2D42] text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-[#CA2D42]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to register your Kolkata business?
            </h2>
            <p className="text-red-100 mb-8 text-base">
              Get a free consultation with a CA or legal expert — no commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#CA2D42] font-bold px-8 py-4 rounded-2xl text-base hover:bg-red-50 transition-all no-underline"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/startup-businesslegal"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/10 transition-all no-underline"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
