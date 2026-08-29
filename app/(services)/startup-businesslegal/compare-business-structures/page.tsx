import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare Pvt Ltd vs LLP vs OPC | Lawizer",
  description:
    "Not sure which business structure to choose? Compare Private Limited Company, Limited Liability Partnership (LLP), and One Person Company (OPC) to make the right choice.",
  alternates: { canonical: "https://lawizer.com/startup-businesslegal/compare-business-structures" },
  openGraph: {
    type: "website",
    title: "Compare Pvt Ltd vs LLP vs OPC | Lawizer",
    description: "Detailed comparison of Pvt Ltd, LLP, and OPC to help you choose the right legal entity for your business.",
    url: "https://lawizer.com/startup-businesslegal/compare-business-structures",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Compare Business Structures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Pvt Ltd vs LLP vs OPC",
    description: "Which business structure is right for you?",
    images: ["/og-default.jpg"],
  },
};

const comparisonData = [
  { feature: "Minimum Members", pvt: "2 Directors, 2 Shareholders", llp: "2 Partners", opc: "1 Director/Shareholder + 1 Nominee" },
  { feature: "Maximum Members", pvt: "200 Shareholders", llp: "Unlimited", opc: "1" },
  { feature: "Liability", pvt: "Limited to share capital", llp: "Limited to agreed contribution", opc: "Limited to share capital" },
  { feature: "Separate Legal Entity", pvt: true, llp: true, opc: true },
  { feature: "Foreign Direct Investment (FDI)", pvt: "Allowed (Automatic Route in most sectors)", llp: "Allowed (with restrictions)", opc: "Not Allowed" },
  { feature: "Compliance Burden", pvt: "High (Annual audit, ROC filings, Board meetings)", llp: "Low (Audit only if turnover > 40L or contribution > 25L)", opc: "Medium (No board meetings required, but annual filing needed)" },
  { feature: "Investor Preference (VC/Angel)", pvt: "Highly Preferred", llp: "Not Preferred", opc: "Not Preferred" },
  { feature: "Statutory Audit", pvt: "Mandatory", llp: "Only if turnover > 40L or contribution > 25L", opc: "Mandatory" },
  { feature: "Taxation (Base Rate)", pvt: "25% (for turnover < 400 Cr) or 15% (new manufacturing)", llp: "30%", opc: "25% (for turnover < 400 Cr)" },
];

export default function CompareBusinessStructures() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D0F14] mb-4">
            Which Business Structure is Right for You?
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choosing the right legal entity is crucial for funding, compliance, and personal liability. Compare Private Limited Company (Pvt Ltd), Limited Liability Partnership (LLP), and One Person Company (OPC).
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#0D0F14] text-white">
                  <th className="p-5 font-semibold w-1/4">Feature</th>
                  <th className="p-5 font-semibold w-1/4 text-center border-l border-white/10">Private Limited (Pvt Ltd)</th>
                  <th className="p-5 font-semibold w-1/4 text-center border-l border-white/10">Limited Liability Partnership (LLP)</th>
                  <th className="p-5 font-semibold w-1/4 text-center border-l border-white/10">One Person Company (OPC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-medium text-slate-800">{row.feature}</td>
                    
                    <td className="p-5 text-center text-slate-600 border-l border-slate-100">
                      {typeof row.pvt === 'boolean' ? (row.pvt ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />) : row.pvt}
                    </td>
                    
                    <td className="p-5 text-center text-slate-600 border-l border-slate-100">
                      {typeof row.llp === 'boolean' ? (row.llp ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />) : row.llp}
                    </td>
                    
                    <td className="p-5 text-center text-slate-600 border-l border-slate-100">
                      {typeof row.opc === 'boolean' ? (row.opc ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />) : row.opc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pros & Cons / When to choose */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Pvt Ltd */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#0D0F14] mb-2">Private Limited</h3>
            <p className="text-slate-500 text-sm mb-6">Best for startups seeking external funding.</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> Pros</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                  <li>Easily attract VC/Angel funding</li>
                  <li>Can issue ESOPs to employees</li>
                  <li>High credibility and trust</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="w-4 h-4"/> Cons</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                  <li>High compliance cost</li>
                  <li>Mandatory audits regardless of revenue</li>
                </ul>
              </div>
            </div>
            
            <Link href="/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" className="block text-center w-full py-3 bg-[#0D0F14] text-white rounded-xl font-medium hover:bg-slate-800 transition">
              Register Pvt Ltd
            </Link>
          </div>

          {/* LLP */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#0D0F14] mb-2">LLP</h3>
            <p className="text-slate-500 text-sm mb-6">Best for professional services and family businesses.</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> Pros</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                  <li>Low compliance requirements</li>
                  <li>No mandatory audit (under threshold)</li>
                  <li>Flexible management via LLP agreement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="w-4 h-4"/> Cons</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                  <li>Cannot raise equity funding easily</li>
                  <li>Higher base tax rate (30%)</li>
                </ul>
              </div>
            </div>
            
            <Link href="/startup-businesslegal/startbusiness/LLPPage" className="block text-center w-full py-3 bg-[#0D0F14] text-white rounded-xl font-medium hover:bg-slate-800 transition">
              Register LLP
            </Link>
          </div>

          {/* OPC */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#0D0F14] mb-2">OPC</h3>
            <p className="text-slate-500 text-sm mb-6">Best for solo founders wanting corporate status.</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> Pros</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                  <li>Complete control for a single founder</li>
                  <li>Limited liability protection</li>
                  <li>Corporate credibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="w-4 h-4"/> Cons</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                  <li>Cannot raise equity funding (need to convert to Pvt Ltd)</li>
                  <li>Strict compliance similar to Pvt Ltd</li>
                </ul>
              </div>
            </div>
            
            <Link href="/startup-businesslegal/startbusiness/OnePersonCompanyPage" className="block text-center w-full py-3 bg-[#0D0F14] text-white rounded-xl font-medium hover:bg-slate-800 transition">
              Register OPC
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
