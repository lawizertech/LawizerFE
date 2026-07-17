"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import type { GuidePost } from "@/lib/guides";
import { stripHtml } from "@/lib/guides";

// ─── Category emoji map ───────────────────────────────────────────────────────

const CATEGORY_EMOJI: Record<string, string> = {
  "Company Registration": "🏢",
  GST: "💰",
  "Trademark & IP": "™️",
  "Funding & Cap Table": "📈",
  "Employment & HR": "👥",
  "MSME/Udyam": "🏭",
  General: "📚",
};

function categoryEmoji(name: string): string {
  return CATEGORY_EMOJI[name] ?? "📄";
}

// ─── Guide card ───────────────────────────────────────────────────────────────

function GuideCard({ guide }: { guide: GuidePost }) {
  const category = guide.categories?.nodes?.find((c) => c.slug !== "guides")?.name ?? "";
  const excerpt = stripHtml(guide.excerpt, 160);

  // Estimate read time from excerpt length as proxy (full content not loaded on index)
  const readTimeEstimate = guide.content
    ? `${Math.max(1, Math.round(guide.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200))} min read`
    : "5 min read";

  const updatedDate = guide.date
    ? new Date(guide.date).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group relative block h-full rounded-2xl overflow-hidden bg-white border border-[#e5e7eb] shadow-sm hover:shadow-2xl hover:border-[#e94560]/50 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/5 to-[#f5a623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-6 h-full flex flex-col">
        {/* Tag */}
        {category && (
          <div className="inline-flex w-fit mb-3">
            <span className="text-[#e94560] uppercase text-xs font-bold tracking-widest px-3 py-1.5 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-[#1a1a2e] font-bold text-base leading-snug mb-3 line-clamp-3 group-hover:text-[#e94560] transition-colors duration-300">
          {guide.title}
        </h3>

        {/* Excerpt */}
        {excerpt && <p className="text-[#6b7280] text-sm mb-4 line-clamp-3 flex-grow">{excerpt}</p>}

        {/* Meta row */}
        <div className="flex justify-between items-center text-xs text-[#9ca3af] pt-4 border-t border-[#f3f4f6] group-hover:border-[#e94560]/20 transition-colors duration-300 mt-auto">
          <span className="font-medium">{readTimeEstimate}</span>
          <span className="flex items-center gap-1 group-hover:text-[#e94560] transition-colors duration-300">
            {updatedDate && <span>{updatedDate}</span>}
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Empty / loading states ───────────────────────────────────────────────────

function EmptyState({ query }: { query: string }) {
  return (
    <section className="px-5 pt-12 pb-24 bg-gradient-to-b from-white to-[#f8f9ff]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">No guides found</h2>
        <p className="text-[#6b7280] text-lg">
          No guides match &ldquo;{query}&rdquo;. Try a different search term or browse categories above.
        </p>
      </div>
    </section>
  );
}

function NoGuidesState() {
  return (
    <section className="px-5 pt-16 pb-24 text-center">
      <div className="text-5xl mb-4">📭</div>
      <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Guides coming soon</h2>
      <p className="text-[#6b7280] max-w-md mx-auto">
        Our legal team is writing the first batch of guides. Add posts to the &ldquo;Guides&rdquo; category in WordPress
        to see them appear here.
      </p>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface Props {
  byCategory: Record<string, GuidePost[]>;
  totalGuides: number;
}

export default function GuidesIndexClient({ byCategory, totalGuides }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = Object.keys(byCategory);
  const allGuides = useMemo(() => Object.values(byCategory).flat(), [byCategory]);

  // Search results (all categories)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allGuides.filter((g) => g.title.toLowerCase().includes(q) || stripHtml(g.excerpt).toLowerCase().includes(q));
  }, [searchQuery, allGuides]);

  const isSearching = searchQuery.trim().length > 0;

  // Category-filtered view (not searching)
  const visibleCategories = useMemo(() => {
    if (activeCategory === "All") return Object.entries(byCategory);
    return Object.entries(byCategory).filter(([name]) => name === activeCategory);
  }, [activeCategory, byCategory]);

  const hasGuides = totalGuides > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#252a3e] to-[#1a1a2e] pt-28 md:pt-32">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#e94560]/20 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#f5a623]/15 to-transparent rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-8 md:py-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="text-2xl" aria-hidden="true">
              📚
            </span>
            <span className="text-sm font-medium text-white/90">Free Legal Knowledge Base</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Free Legal &amp; Compliance Guides{" "}
            <span className="bg-gradient-to-r from-[#f5a623] via-[#e94560] to-[#ff6b8a] bg-clip-text text-transparent">
              for Indian Founders
            </span>
          </h1>

          <p className="text-lg text-white/75 mb-12 max-w-3xl mx-auto leading-relaxed">
            Plain-language guides to India&apos;s most important legal and compliance topics — written by our legal
            team. From company formation to trademark registration.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e94560]/40 via-[#f5a623]/40 to-[#e94560]/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative flex items-center gap-2 px-2 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-xl hover:border-white/50 transition-all duration-300">
                <div className="flex-1 flex items-center px-5">
                  <Search className="w-5 h-5 text-white/60 mr-3 shrink-0" aria-hidden="true" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search guides — GST, trademark, company formation…"
                    className="bg-transparent w-full text-white placeholder-white/50 text-base outline-none font-medium"
                    aria-label="Search guides"
                  />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-white/60 hover:text-white px-3 text-sm"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
                <span className="ml-1 mr-1 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white font-bold text-sm shadow-lg pointer-events-none whitespace-nowrap">
                  Search
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{hasGuides ? totalGuides : "12+"}</div>
              <div className="text-white/70 text-sm">Expert Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{hasGuides ? categories.length : "6"}</div>
              <div className="text-white/70 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100K+</div>
              <div className="text-white/70 text-sm">Readers Monthly</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category filter tabs ──────────────────────────────────── */}
      {!isSearching && hasGuides && categories.length > 1 && (
        <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur border-b border-[#e5e7eb] shadow-sm">
          <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap gap-2">
            {/* All tab */}
            <button
              onClick={() => setActiveCategory("All")}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === "All"
                  ? "bg-[#e94560] text-white border-2 border-[#e94560]"
                  : "bg-white text-[#1a1a2e] border-2 border-[#e5e7eb] hover:border-[#e94560] hover:text-[#e94560]"
              }`}
            >
              All
              <span className={`text-xs font-normal ${activeCategory === "All" ? "text-white/80" : "text-[#9ca3af]"}`}>
                ({totalGuides})
              </span>
            </button>

            {/* Category tabs */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#e94560] text-white border-2 border-[#e94560]"
                    : "bg-white text-[#1a1a2e] border-2 border-[#e5e7eb] hover:border-[#e94560] hover:text-[#e94560]"
                }`}
              >
                <span aria-hidden="true">{categoryEmoji(cat)}</span>
                {cat}
                <span className={`text-xs font-normal ${activeCategory === cat ? "text-white/80" : "text-[#9ca3af]"}`}>
                  ({byCategory[cat]?.length ?? 0})
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Content ───────────────────────────────────────────────── */}
      {!hasGuides ? (
        <NoGuidesState />
      ) : isSearching ? (
        /* Search results */
        <section className="px-5 pt-10 pb-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#6b7280] mb-6 text-sm font-medium">
              {searchResults.length > 0
                ? `${searchResults.length} guide${searchResults.length !== 1 ? "s" : ""} found for "${searchQuery}"`
                : `No guides match "${searchQuery}"`}
            </p>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            ) : (
              <EmptyState query={searchQuery} />
            )}
          </div>
        </section>
      ) : (
        /* Category sections */
        <>
          {visibleCategories.map(([catName, guides], index) => (
            <section
              key={catName}
              id={`category-${catName.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-5 ${index === 0 ? "pt-12 md:pt-16 pb-10" : "py-10"} ${
                index % 2 === 1 ? "bg-[#f8f9ff]" : "bg-white"
              }`}
            >
              <div className="max-w-7xl mx-auto">
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl" aria-hidden="true">
                    {categoryEmoji(catName)}
                  </span>
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">{catName}</h2>
                  <span className="text-sm text-[#9ca3af] font-medium bg-[#f3f4f6] px-2.5 py-0.5 rounded-full">
                    {guides.length} {guides.length === 1 ? "guide" : "guides"}
                  </span>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {guides.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 py-16 bg-gradient-to-r from-[#1a1a2e] via-[#2a2a45] to-[#1a1a2e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#e94560]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#f5a623]/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Didn&apos;t find the guide you need?</h2>
          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            Our legal team creates new guides every week. Drop us your question and we&apos;ll cover it in detail.
          </p>
          <a
            href="mailto:admin@lawizer.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white rounded-full px-8 py-3 font-bold shadow-lg hover:shadow-2xl hover:shadow-[#e94560]/40 transform hover:scale-105 transition-all duration-300"
          >
            Request a Guide
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
