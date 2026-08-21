"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import FeaturedInsight from "./FeaturedInsight";
import BlogListItem from "./BlogListItem";
import RecentInsights from "./RecentInsights";

export function getExcerpt(html?: string, maxLength = 160) {
  if (!html) return "";
  const text = html.replace(/<[^>]*>?/gm, "").trim();
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function formatDate(dateString?: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogLayoutProps {
  postsByCategory: Record<string, any[]>;
  initialCategory?: string | null;
}

export default function BlogLayout({ postsByCategory, initialCategory }: BlogLayoutProps) {
  const categories = Object.keys(postsByCategory);

  // Map category slug to name from the URL
  const resolvedCategory = useMemo(() => {
    if (!initialCategory) return "__all__";
    const match = categories.find(
      (cat) => cat.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "") === initialCategory
    );
    return match || "__all__";
  }, [initialCategory, categories]);

  const [activeCategory, setActiveCategory] = useState(resolvedCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync activeCategory when resolvedCategory changes (e.g. on navigation)
  useEffect(() => {
    setActiveCategory(resolvedCategory);
  }, [resolvedCategory]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Define all posts uniquely
  const allPosts = useMemo(() => {
    const seen = new Set<string>();
    return Object.values(postsByCategory)
      .flat()
      .filter((post) => {
        if (seen.has(post.uri)) return false;
        seen.add(post.uri);
        return true;
      });
  }, [postsByCategory]);

  // Filtered categories for the dropdown popover based on search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    // Map WordPress categories into category objects with counts
    const wpCategories = categories.map((cat) => ({
      name: cat,
      count: postsByCategory[cat]?.length ?? 0,
      isAll: false,
    }));

    // If query is empty, return All option + all WordPress categories
    if (!query) {
      return [
        { name: "All Posts", count: allPosts.length, isAll: true },
        ...wpCategories,
      ];
    }

    // Otherwise, filter WordPress categories that contain the query
    const filteredWp = wpCategories.filter((cat) =>
      cat.name.toLowerCase().includes(query)
    );

    // Also check if the query matches "all posts" or "all" to conditionally include the "All Posts" option
    const includeAll = "all posts".includes(query) || "all".includes(query);

    if (includeAll) {
      return [
        { name: "All Posts", count: allPosts.length, isAll: true },
        ...filteredWp,
      ];
    }

    return filteredWp;
  }, [searchQuery, categories, postsByCategory, allPosts.length]);

  // Filter posts based on active category
  const activePosts = useMemo(
    () => (activeCategory === "__all__" ? allPosts : (postsByCategory[activeCategory] ?? [])),
    [activeCategory, allPosts, postsByCategory],
  );

  // Search filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allPosts.filter(
      (post) => post.title?.toLowerCase().includes(q) || getExcerpt(post.excerpt).toLowerCase().includes(q),
    );
  }, [searchQuery, allPosts]);

  const isSearching = searchQuery.trim().length > 0;
  const activeLabel = activeCategory === "__all__" ? "All Posts" : activeCategory;

  // Sort activePosts by date descending to get the newest post overall or for the active category
  const sortedPosts = useMemo(() => {
    return [...activePosts].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
  }, [activePosts]);

  // Isolate featured post and list divisions
  const featuredPost = useMemo(() => {
    if (sortedPosts.length === 0) return null;
    return sortedPosts[0];
  }, [sortedPosts]);

  const latestPosts = useMemo(() => {
    if (!featuredPost) return sortedPosts;
    return sortedPosts.filter((post) => post.uri !== featuredPost.uri);
  }, [sortedPosts, featuredPost]);

  const recentPosts = useMemo(() => {
    if (!featuredPost) return sortedPosts.slice(0, 5);
    return sortedPosts.filter((post) => post.uri !== featuredPost.uri).slice(0, 5);
  }, [sortedPosts, featuredPost]);

  return (
    <div>
      {/* ================= HERO SEARCH BANNER ================= */}
      <section className="relative z-20">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-primary">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Actual hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 text-center md:text-left md:flex md:items-center md:justify-between md:gap-8 overflow-visible">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground tracking-tight mb-3">
              Legal Insights &amp; Guides
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg font-medium leading-relaxed">
              Expert resources on incorporation, compliance, and business law — all in one place.
            </p>
          </div>

          {/* Search Bar */}
          <div ref={containerRef} className="relative z-50 flex flex-col w-full max-w-md shrink-0">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(true)}
                placeholder="Search legal articles..."
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
                className="w-full pl-5 pr-12 py-3.5 rounded-full text-foreground bg-background border border-slate-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              />
              {isSearching ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-muted-foreground hover:text-foreground transition"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              ) : (
                <span className="absolute right-4 text-muted-foreground pointer-events-none">
                  <Search size={18} />
                </span>
              )}
            </div>

            {/* Category Dropdown */}
            {isDropdownOpen && (
              <div
                role="listbox"
                className="absolute left-0 right-0 top-full mt-2 z-[100] bg-background border border-slate-200 rounded-2xl shadow-xl p-5 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">
                  Browse by Category
                </h3>
                
                {filteredCategories.length === 0 ? (
                  <div className="text-center py-6 text-slate-400 text-xs">
                    No matching categories
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[400px] overflow-y-auto pr-1">
                    {filteredCategories.map((cat) => {
                      const isActive = cat.isAll
                        ? activeCategory === "__all__"
                        : activeCategory === cat.name;

                      return (
                        <button
                          key={cat.name}
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            if (cat.isAll) {
                              setActiveCategory("__all__");
                            } else {
                              setActiveCategory(cat.name);
                            }
                            setSearchQuery("");
                            setIsDropdownOpen(false);
                          }}
                          className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all duration-150 group ${
                            isActive
                              ? "bg-brand/10 text-brand"
                              : "text-slate-700 hover:bg-slate-50 hover:text-brand"
                          }`}
                        >
                          <span className="truncate mr-2">
                            {cat.name}
                            <span
                              className={`ml-1.5 text-[10px] ${
                                isActive ? "text-brand/70" : "text-slate-400"
                              } font-normal`}
                            >
                              ({cat.count})
                            </span>
                          </span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-brand text-[11px] font-bold shrink-0">
                            →
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative z-0 max-w-7xl mx-auto px-4 py-12">
        {isSearching ? (
          <>
            <h2 className="text-2xl font-bold mb-8">
              {searchResults.length > 0
                ? `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} for "${searchQuery}"`
                : `No results for "${searchQuery}"`}
            </h2>

            {searchResults.length === 0 ? (
              <div className="rounded-xl border bg-card p-10 text-center text-muted-foreground">
                <Search size={36} className="mx-auto mb-3 opacity-30" />
                <p className="text-lg font-medium">No posts found</p>
                <p className="text-sm mt-1">Try a different keyword or browse categories.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-sm text-primary font-medium hover:underline"
                >
                  ← Back to all posts
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {searchResults.map((post) => (
                  <BlogListItem key={post.uri} post={post} />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {activePosts.length === 0 ? (
              <div>
                <h2 className="text-2xl font-bold mb-8">{activeLabel}</h2>
                <div className="rounded-xl border bg-card p-10 text-center text-muted-foreground">
                  <p className="text-lg font-medium">No posts available yet</p>
                  <p className="text-sm mt-1">Check back soon for legal insights and guides.</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {/* 1. Featured Insight */}
                {featuredPost && <FeaturedInsight post={featuredPost} />}

                {/* 2. Latest & Recent split */}
                {activePosts.length > 1 && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                    {/* Latest Column */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                      <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                        Latest Insights
                      </h2>
                      <div className="flex flex-col gap-8">
                        {latestPosts.map((post) => (
                          <BlogListItem key={post.uri} post={post} />
                        ))}
                      </div>
                    </div>

                    {/* Recent Sidebar Column */}
                    <div className="lg:col-span-1">
                      <div className="lg:sticky lg:top-28">
                        <RecentInsights recentPosts={recentPosts} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
