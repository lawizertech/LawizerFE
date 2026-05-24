'use client';

import { useState } from 'react';

type NewsItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  href: string;
  emoji: string;
  gradient: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Company Law",
    title: "MCA Processed 8 Million+ Form Submissions in FY 2024–25 — What Founders Need to Know",
    description: "The Ministry of Corporate Affairs reported over 8.02 million form submissions last fiscal year as digital filing adoption surges. MCA has tightened cross-verification between GST and Income Tax records, meaning mismatches can now trigger automatic penalties.",
    date: "May 2025",
    href: "https://www.mca.gov.in",
    emoji: "📋",
    gradient: "linear-gradient(135deg,#1a1a2e,#e94560)"
  },
  {
    id: 2,
    category: "Trademark & IP",
    title: "Delhi High Court: Using a Registered Trademark as a Google Keyword Does Not Amount to Infringement",
    description: "In the MakeMyTrip vs. Booking.com dispute, the Division Bench reversed an earlier ruling and held that using a competitor's trademark as a Google Ads keyword does not constitute trademark infringement — a major development for digital marketing strategy.",
    date: "2025",
    href: "https://iclg.com/practice-areas/trade-marks-laws-and-regulations/india",
    emoji: "⚖️",
    gradient: "linear-gradient(135deg,#0f3460,#533483)"
  },
  {
    id: 3,
    category: "Startups",
    title: "India Crosses 1.57 Lakh DPIIT-Recognised Startups — Now the Third Largest Startup Ecosystem Globally",
    description: "India's startup ecosystem has grown to over 1.57 lakh DPIIT-recognised startups. Compliance obligations are becoming increasingly automated, with MCA and GST portals applying strict liability with minimal human discretion for errors.",
    date: "March 2026",
    href: "https://www.legalserviceindia.com/Legal-Articles/navigating-startup-law-in-india-funding-compliance-and-intellectual-property/",
    emoji: "🚀",
    gradient: "linear-gradient(135deg,#134e5e,#71b280)"
  },
  {
    id: 4,
    category: "Company Law",
    title: "MCA Relaxes Compliance for Small Companies and Startups in 2025 — Key Changes Explained",
    description: "MCA's 2025 amendments introduce relaxed compliance thresholds for small companies and startups. At the same time, penalty structures for repeated non-compliance have been tightened, with a preference for fast monetary penalties.",
    date: "2025",
    href: "https://www.mca.gov.in",
    emoji: "📊",
    gradient: "linear-gradient(135deg,#2c3e50,#3498db)"
  },
  {
    id: 5,
    category: "GST",
    title: "GST Penalties for Non-Registration: What Startups Risk in 2025",
    description: "Startups crossing the ₹40 lakh (goods) or ₹20 lakh (services) threshold face a penalty of 10% of tax payable or ₹10,000, whichever is higher, for non-registration. Wilful evasion can attract a 100% penalty.",
    date: "2025",
    href: "https://e-startupindia.com/learn/gst-registration-for-startups-in-india-process-benefits-and-penalties-2025-guide/",
    emoji: "💰",
    gradient: "linear-gradient(135deg,#f7971e,#ffd200)"
  },
  {
    id: 6,
    category: "Trademark & IP",
    title: "AI and Blockchain Set to Transform Indian Trademark Registration and IP Management",
    description: "AI-driven search tools are expected to improve trademark examination accuracy, while blockchain-based records could enable tamper-proof ownership tracking. India is also aligning with the Madrid Convention for smoother cross-border registration.",
    date: "2025",
    href: "https://tmwala.com/blog-new-trademark-law-impact-indian-startups-in-2025/",
    emoji: "🔮",
    gradient: "linear-gradient(135deg,#6a3093,#a044ff)"
  },
  {
    id: 7,
    category: "Startups",
    title: "India's LegalTech Sector Sees 781% Year-on-Year Funding Surge — What It Means for Founders",
    description: "India's LegalTech sector — now comprising 960 companies and 86 funded startups — recorded a 781% YoY funding surge in 2025. The sector is valued at ₹8,500+ crore and projected to reach ₹20,700+ crore by 2030 at a CAGR of 16.2%.",
    date: "March 2026",
    href: "https://www.inventiva.co.in/trends/top-10-legaltech-startups-in-2026/",
    emoji: "🏛️",
    gradient: "linear-gradient(135deg,#1a1a2e,#4a90d9)"
  },
  {
    id: 8,
    category: "Company Law",
    title: "DPDP Act 2023: How India's New Data Protection Law Affects Your Startup",
    description: "The Digital Personal Data Protection Act, 2023 introduces data fiduciary obligations, data principal rights including the right to erasure, and significant penalties for non-compliance — fundamentally changing how Indian businesses handle customer data.",
    date: "2025",
    href: "https://law.asia/india/",
    emoji: "🔒",
    gradient: "linear-gradient(135deg,#005c97,#363795)"
  },
  {
    id: 9,
    category: "Income Tax",
    title: "Budget 2026 in Step with India's Long-Term Growth Priorities — Tax Experts Weigh In",
    description: "Tax experts note Budget 2026 aligns with India's long-term structural growth goals, with targeted relief for MSMEs and startup-friendly provisions. Founders should review revised ITR filing deadlines and updated presumptive taxation thresholds.",
    date: "2026",
    href: "https://law.asia/india/",
    emoji: "📝",
    gradient: "linear-gradient(135deg,#093028,#237a57)"
  }
];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [email, setEmail] = useState<string>('');

  const categories: string[] = ['All', 'Company Law', 'GST', 'Trademark & IP', 'Income Tax', 'Startups'];

  const filteredNews: NewsItem[] = activeFilter === 'All'
    ? newsItems
    : newsItems.filter(n => n.category === activeFilter);

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-5 text-center"
      >
        <h1 className="text-5xl font-bold text-white">Legal News & Updates</h1>
        <p className="text-white/80 max-w-lg mx-auto mt-3 text-lg">
          Stay informed with the latest developments in Indian startup law, taxation, trademark, and compliance — curated by the Lawizer team.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="px-5 pt-6 pb-0 flex flex-wrap gap-2 justify-center max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFilter === category
                ? 'bg-[#e94560] text-white border-2 border-[#e94560]'
                : 'bg-white text-[#1a1a2e] border-2 border-[#e5e7eb] hover:border-[#e94560] hover:text-[#e94560]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <section className="px-5 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} item={news} />
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#6b7280] text-lg">No news available in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Email Subscribe Strip */}
      <div className="px-5 pb-16 text-center">
        <p className="text-[#6b7280] mb-4 text-sm">Want legal updates delivered to your inbox?</p>
        <div className="flex max-w-md mx-auto gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
            placeholder="Enter your email"
            className="flex-1 border border-[#e5e7eb] rounded-l-lg px-4 py-3 text-sm outline-none focus:border-[#e94560] transition-colors"
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#e94560] text-white rounded-r-lg px-5 py-3 font-bold text-sm hover:bg-[#d63550] transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Banner with emoji */}
      <div
        style={{ background: item.gradient }}
        className="h-40 flex items-center justify-center text-5xl"
      >
        {item.emoji}
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Category Tag */}
        <p className="text-[#e94560] uppercase text-xs font-bold tracking-wide mb-1">
          {item.category}
        </p>

        {/* Title */}
        <h3 className="text-[#1a1a2e] font-bold text-sm leading-snug mb-2 line-clamp-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[#6b7280] text-xs sm:text-sm mb-3 line-clamp-3">
          {item.description}
        </p>

        {/* Meta Row */}
        <div className="border-t border-[#e5e7eb] pt-2 mt-2 flex justify-between items-center text-xs text-[#6b7280]">
          <span>{item.date}</span>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e94560] font-semibold hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
}
