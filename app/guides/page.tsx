'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

type GuideItem = {
  id: number;
  tag: string;
  title: string;
  description: string;
  readTime: string;
  updated: string;
  href: string;
};

type GuideCategory = {
  id: string;
  emoji: string;
  label: string;
  alt: boolean;
  guides: GuideItem[];
};

const guideCategories: GuideCategory[] = [
  {
    id: 'company-formation',
    emoji: '🏢',
    label: 'Company Formation & Structure',
    alt: false,
    guides: [
      {
        id: 1,
        tag: 'Incorporation',
        title: 'How to Register a Private Limited Company in India: Step-by-Step Guide (2025)',
        description: 'From DSC and DIN to SPICe+ filing and COI — everything you need to know to incorporate your startup legally.',
        readTime: '12 min read',
        updated: 'Updated May 2025',
        href: '#'
      },
      {
        id: 2,
        tag: 'Incorporation',
        title: 'LLP vs. Private Limited Company: Which Structure Is Right for Your Business?',
        description: 'A practical comparison of tax treatment, compliance burden, investor-readiness, and liability protection for Indian founders.',
        readTime: '8 min read',
        updated: 'Updated April 2025',
        href: '#'
      },
      {
        id: 3,
        tag: 'Incorporation',
        title: 'One Person Company (OPC): Who Should Register One and How',
        description: 'The complete guide to OPC eligibility, registration process, mandatory conversions, and annual compliance requirements.',
        readTime: '7 min read',
        updated: 'Updated March 2025',
        href: '#'
      },
      {
        id: 4,
        tag: 'Compliance',
        title: 'Annual ROC Compliance for Private Limited Companies: What You Can\'t Miss',
        description: 'MGT-7, AOC-4, DIR-3 KYC, and more — a practical calendar of every filing your company must make each year.',
        readTime: '9 min read',
        updated: 'Updated January 2025',
        href: '#'
      }
    ]
  },
  {
    id: 'gst-registration',
    emoji: '💰',
    label: 'GST Registration & Compliance',
    alt: true,
    guides: [
      {
        id: 5,
        tag: 'GST',
        title: 'GST Registration for Startups: Who Must Register, Documents Needed, and How to Apply',
        description: 'A plain-language walkthrough of GST thresholds, mandatory vs. voluntary registration, and the step-by-step application process on the GSTN portal.',
        readTime: '10 min read',
        updated: 'Updated May 2025',
        href: '#'
      },
      {
        id: 6,
        tag: 'GST',
        title: 'GST Return Filing: GSTR-1, GSTR-3B, and GSTR-9 Explained Simply',
        description: 'Which returns you must file, when they are due, the penalties for late filing, and how to claim Input Tax Credit (ITC) correctly.',
        readTime: '11 min read',
        updated: 'Updated April 2025',
        href: '#'
      },
      {
        id: 7,
        tag: 'GST',
        title: 'GST for E-Commerce Sellers: Everything You Need to Know in 2025',
        description: 'TCS under GST, mandatory registration regardless of turnover, and how platforms like Amazon, Flipkart, and Meesho deduct tax at source.',
        readTime: '8 min read',
        updated: 'Updated February 2025',
        href: '#'
      }
    ]
  },
  {
    id: 'trademark-ip',
    emoji: '™️',
    label: 'Trademark & Intellectual Property',
    alt: false,
    guides: [
      {
        id: 8,
        tag: 'Trademark',
        title: 'How to Register a Trademark in India: Complete Guide for Startups (2025)',
        description: 'From choosing the right trademark class and conducting a pre-filing search to filing Form TM-A, handling objections, and receiving your registration certificate.',
        readTime: '14 min read',
        updated: 'Updated May 2025',
        href: '#'
      },
      {
        id: 9,
        tag: 'Trademark',
        title: 'Responding to a Trademark Objection: What to Do When You Receive an Examination Report',
        description: 'Step-by-step guide to understanding the grounds of objection, drafting a compelling reply under Rule 45, and filing it within the 30-day window.',
        readTime: '9 min read',
        updated: 'Updated March 2025',
        href: '#'
      },
      {
        id: 10,
        tag: 'IP',
        title: 'Copyright vs. Trademark vs. Patent: Which Protection Does Your Startup Need?',
        description: 'A clear breakdown of each type of IP protection — what it covers, how long it lasts, cost, and which is most relevant for founders in India.',
        readTime: '8 min read',
        updated: 'Updated January 2025',
        href: '#'
      }
    ]
  },
  {
    id: 'income-tax',
    emoji: '📑',
    label: 'Income Tax & ITR Filing',
    alt: true,
    guides: [
      {
        id: 11,
        tag: 'ITR',
        title: 'Which ITR Form Should Your Business File? ITR-1 to ITR-6 Explained',
        description: 'A decision-tree guide to selecting the correct ITR form based on your income type, business structure, and turnover — avoiding costly form errors.',
        readTime: '7 min read',
        updated: 'Updated May 2025',
        href: '#'
      },
      {
        id: 12,
        tag: 'Tax Planning',
        title: 'Tax-Saving Strategies for Startup Founders: Section 80C, 80D, and Beyond',
        description: 'Practical, legal ways to reduce your personal and business tax burden — investments, deductions, and exemptions most founders overlook.',
        readTime: '10 min read',
        updated: 'Updated April 2025',
        href: '#'
      },
      {
        id: 13,
        tag: 'ITR',
        title: 'ITR Filing for Freelancers and Consultants in India: A Complete Guide',
        description: 'How to declare professional income, claim business expenses, handle TDS, and avoid notices under Section 143(1) and 148A.',
        readTime: '11 min read',
        updated: 'Updated March 2025',
        href: '#'
      }
    ]
  }
];

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return guideCategories
      .map(category => ({
        ...category,
        guides: searchQuery === ''
          ? category.guides
          : category.guides.filter(
              guide =>
                guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                guide.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
      }))
      .filter(category => category.guides.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section - Full Width with Navbar Offset */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#252a3e] to-[#1a1a2e] pt-28 md:pt-32">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#e94560]/20 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#f5a623]/15 to-transparent rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-l from-[#e94560]/10 to-transparent rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-8 md:py-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="text-2xl">📚</span>
            <span className="text-sm font-medium text-white/90">Legal Knowledge Base</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Expert Legal Guides <br />
            <span className="bg-gradient-to-r from-[#f5a623] via-[#e94560] to-[#ff6b8a] bg-clip-text text-transparent">
              for Founders & Businesses
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-white/75 mb-12 max-w-3xl mx-auto leading-relaxed">
            Plain-language guides to India's most important legal and compliance topics — written by our team of legal professionals. From company formation to trademark registration.
          </p>

          {/* Search Bar - Premium Glassmorphic Design */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e94560]/40 via-[#f5a623]/40 to-[#e94560]/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Search Container */}
              <div className="relative flex items-center gap-2 px-2 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-xl hover:border-white/50 transition-all duration-300">
                <div className="flex-1 flex items-center px-5">
                  <Search className="w-5 h-5 text-white/60 mr-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search guides — GST, trademark, company formation..."
                    className="bg-transparent w-full text-white placeholder-white/50 text-base outline-none font-medium"
                  />
                </div>

                {/* Search Button */}
                <button className="ml-2 mr-1 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white font-bold text-sm shadow-lg hover:shadow-2xl hover:shadow-[#e94560]/40 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">13</div>
              <div className="text-white/70 text-sm">Expert Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-white/70 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100K+</div>
              <div className="text-white/70 text-sm">Readers Monthly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Categories */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <section
            key={category.id}
            className={`px-5 ${index === 0 ? 'pt-12 md:pt-16 pb-10' : 'py-10'} ${
              category.alt ? 'bg-[#f8f9ff]' : 'bg-white'
            }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Category Heading */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.emoji}</span>
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  {category.label}
                </h2>
              </div>

              {/* Guide Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.guides.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="px-5 pt-12 md:pt-16 pb-24 bg-gradient-to-b from-white to-[#f8f9ff]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">
              No guides found
            </h2>
            <p className="text-[#6b7280] text-lg mb-8">
              No guides match "{searchQuery}". Try a different search term or browse our categories above.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-2 bg-[#e94560] text-white rounded-full px-6 py-3 font-bold hover:bg-[#d63550] transition-colors duration-300"
            >
              Clear Search
            </button>
          </div>
        </section>
      )}

      {/* Can't Find It CTA */}
      <section className="relative overflow-hidden px-5 py-16 bg-gradient-to-r from-[#1a1a2e] via-[#2a2a45] to-[#1a1a2e]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#e94560]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#f5a623]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Didn't find the guide you need?
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            Our legal team creates new guides every week. Drop us your question and we'll cover it in detail.
          </p>
          <a
            href="mailto:admin@lawizer.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white rounded-full px-8 py-3 font-bold shadow-lg hover:shadow-2xl hover:shadow-[#e94560]/40 transform hover:scale-105 transition-all duration-300"
          >
            Request a Guide
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function GuideCard({ guide }: { guide: GuideItem }) {
  return (
    <a
      href={guide.href}
      className="group relative block h-full rounded-2xl overflow-hidden bg-white border border-[#e5e7eb] shadow-sm hover:shadow-2xl hover:border-[#e94560]/50 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/5 to-[#f5a623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Tag with Background */}
        <div className="inline-flex w-fit mb-3">
          <span className="text-[#e94560] uppercase text-xs font-bold tracking-widest px-3 py-1.5 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
            {guide.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#1a1a2e] font-bold text-base leading-snug mb-3 line-clamp-3 group-hover:text-[#e94560] transition-colors duration-300">
          {guide.title}
        </h3>

        {/* Description */}
        <p className="text-[#6b7280] text-sm mb-4 line-clamp-3 flex-grow">
          {guide.description}
        </p>

        {/* Meta Row */}
        <div className="flex justify-between items-center text-xs text-[#9ca3af] pt-4 border-t border-[#f3f4f6] group-hover:border-[#e94560]/20 transition-colors duration-300">
          <span className="font-medium">{guide.readTime}</span>
          <span className="flex items-center gap-1 group-hover:text-[#e94560] transition-colors duration-300">
            {guide.updated}
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
          </span>
        </div>
      </div>
    </a>
  );
}
