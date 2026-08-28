import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal & Compliance Glossary | Lawizer",
  description:
    "Understand complex legal and compliance terms. Simple definitions for DIN, DSC, MOA, AOA, ROC, GST, and more from Lawizer's experts.",
  alternates: { canonical: "https://lawizer.com/legal-glossary" },
  openGraph: {
    type: "website",
    title: "Legal Glossary | Lawizer",
    description: "Simple definitions for complex legal terms like DIN, DSC, MOA, and ROC.",
    url: "https://lawizer.com/legal-glossary",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Lawizer Legal Glossary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Glossary | Lawizer",
    description: "Understand complex legal terms easily.",
    images: ["/og-default.jpg"],
  },
};

const glossaryTerms = [
  {
    term: "AOA (Articles of Association)",
    definition: "A document that outlines the internal rules and regulations of a company, governing its management and operations.",
    related: [{ name: "Private Limited Company", url: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" }]
  },
  {
    term: "DIN (Director Identification Number)",
    definition: "A unique 8-digit identification number allotted by the Central Government to any person intending to be a Director or an existing director of a company.",
    related: [{ name: "Appointment of Director", url: "/startup-businesslegal/managebusiness/AppointmentOfDirectorPage" }]
  },
  {
    term: "DSC (Digital Signature Certificate)",
    definition: "A secure digital key that is issued by certifying authorities to validate and certify the identity of the person holding this certificate. Required for online ROC filings.",
    related: [{ name: "Annual Compliance", url: "/compliance/annual" }]
  },
  {
    term: "GSTIN (Goods and Services Tax Identification Number)",
    definition: "A unique 15-digit identification number assigned to every business registered under the GST regime in India.",
    related: [{ name: "GST Registration", url: "/startup-businesslegal/startbusiness/GSTRegistrationPage" }]
  },
  {
    term: "INC-20A (Declaration for Commencement of Business)",
    definition: "A mandatory form to be filed with ROC within 180 days of company incorporation, certifying that subscribers have paid the value of shares.",
    related: [{ name: "Annual Compliance", url: "/compliance/annual" }]
  },
  {
    term: "LLP (Limited Liability Partnership)",
    definition: "An alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership.",
    related: [{ name: "LLP Registration", url: "/startup-businesslegal/startbusiness/LLPPage" }]
  },
  {
    term: "MOA (Memorandum of Association)",
    definition: "The charter document of a company that defines its scope of operations and fundamental conditions upon which it is incorporated.",
    related: [{ name: "Private Limited Company", url: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" }]
  },
  {
    term: "OPC (One Person Company)",
    definition: "A company incorporated with only one person as a member, allowing solo entrepreneurs to operate a corporate entity with limited liability.",
    related: [{ name: "OPC Registration", url: "/startup-businesslegal/startbusiness/OnePersonCompanyPage" }]
  },
  {
    term: "ROC (Registrar of Companies)",
    definition: "The regulatory body under the Ministry of Corporate Affairs (MCA) responsible for administration of the Companies Act, 2013 and regulating companies/LLPs.",
    related: [{ name: "Annual Compliance", url: "/compliance/annual" }]
  },
];

export default function LegalGlossary() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D0F14] mb-4">
            Legal & Compliance Glossary
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understanding legal jargon doesn't have to be difficult. Here are simple explanations for the most common terms used in business registration and compliance in India.
          </p>
        </div>

        <div className="space-y-6">
          {glossaryTerms.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[rgba(202,45,66,0.25)] transition-colors">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D0F14] mb-3">{item.term}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{item.definition}</p>
              
              {item.related && item.related.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-slate-400">Related Services:</span>
                  {item.related.map((link, i) => (
                    <Link key={i} href={link.url} className="text-sm text-[#CA2D42] hover:underline font-medium">
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
