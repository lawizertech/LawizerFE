"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

function getExcerpt(html?: string, maxLength = 160) {
  if (!html) return "";
  const text = html.replace(/<[^>]*>?/gm, "").trim();
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function formatDate(dateString?: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogLayout({
  postsByCategory,
}: {
  postsByCategory: Record<string, any[]>;
}) {
  const categories = Object.keys(postsByCategory);
  const [activeCategory, setActiveCategory] = useState("__all__");
  const [searchQuery, setSearchQuery] = useState("");

  // ── 1. allPosts MUST be defined before activePosts ────────────────────────
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

  // ── 2. activePosts depends on allPosts ────────────────────────────────────
  const activePosts = useMemo(
    () =>
      activeCategory === "__all__"
        ? allPosts
        : (postsByCategory[activeCategory] ?? []),
    [activeCategory, allPosts, postsByCategory],
  );

  // ── 3. Search results ─────────────────────────────────────────────────────
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allPosts.filter(
      (post) =>
        post.title?.toLowerCase().includes(q) ||
        getExcerpt(post.excerpt).toLowerCase().includes(q),
    );
  }, [searchQuery, allPosts]);

  const isSearching = searchQuery.trim().length > 0;

  const activeLabel =
    activeCategory === "__all__" ? "All Posts" : activeCategory;

  return (
    <div>
      {/* ================= HERO SEARCH BANNER ================= */}
      <div className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative w-full mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">
            Legal Insights &amp; Guides
          </h1>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Expert resources on incorporation, compliance, and business law —
            all in one place.
          </p>

          {/* Search Bar */}
          <div className="relative flex items-center max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic here..."
              className="w-full pl-5 pr-14 py-4 rounded-xl text-foreground bg-background shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
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
        </div>
      </div>

      {/* ================= PYRAMID CATEGORY SELECTOR ================= */}
      {!isSearching && (
        <div className="bg-background border-b py-8">
          <div className="max-w-3xl mx-auto px-4">
            {(() => {
              const MAX_PER_ROW = 4;
              const VISIBLE_LIMIT = 15;
              const visible = categories.slice(0, VISIBLE_LIMIT);

              // Build ascending → descending row sizes: 1, 2, 3, 4, 3, 2, 1 …
              const rowSizes: number[] = [];
              let total = 0;
              let size = 1;
              let direction: "up" | "down" = "up";

              while (total < visible.length) {
                const take = Math.min(size, visible.length - total);
                rowSizes.push(take);
                total += take;
                if (direction === "up") {
                  if (size >= MAX_PER_ROW) direction = "down";
                  else size++;
                } else {
                  size = Math.max(1, size - 1);
                }
              }

              // Slice categories into rows
              let idx = 0;
              const rows: string[][] = rowSizes.map((s) => {
                const row = visible.slice(idx, idx + s);
                idx += s;
                return row;
              });

              // Inject "All" into the center of the widest row
              const peakRowIdx = rowSizes.indexOf(Math.max(...rowSizes));

              type Item = { key: string; label: string; isAll: boolean };
              const renderable: Item[][] = rows.map((row, rowIdx) => {
                const items: Item[] = row.map((cat) => ({
                  key: cat,
                  label: cat,
                  isAll: false,
                }));
                if (rowIdx === peakRowIdx) {
                  const mid = Math.ceil(items.length / 2);
                  items.splice(mid, 0, {
                    key: "__all__",
                    label: "All",
                    isAll: true,
                  });
                }
                return items;
              });

              return (
                <div className="flex flex-col items-center gap-2.5">
                  {renderable.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex justify-center gap-2 flex-wrap"
                    >
                      {row.map((item) => {
                        const isActive = activeCategory === item.key;
                        const count = item.isAll
                          ? allPosts.length
                          : (postsByCategory[item.key]?.length ?? 0);

                        return (
                          <button
                            key={item.key}
                            onClick={() => setActiveCategory(item.key)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow-md scale-105"
                                : item.isAll
                                  ? "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
                                  : "border border-border text-foreground hover:border-primary hover:text-primary hover:scale-105"
                            }`}
                          >
                            {item.label}
                            <span
                              className={`ml-1.5 text-xs ${
                                isActive ? "opacity-80" : "opacity-50"
                              }`}
                            >
                              ({count})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ))}

                  {categories.length > VISIBLE_LIMIT && (
                    <p className="text-xs text-muted-foreground mt-1">
                      +{categories.length - VISIBLE_LIMIT} more categories
                    </p>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12">
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
                <p className="text-sm mt-1">
                  Try a different keyword or browse categories.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-sm text-primary font-medium hover:underline"
                >
                  ← Back to all posts
                </button>
              </div>
            ) : (
              <PostGrid posts={searchResults} />
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-8">{activeLabel}</h2>
            <PostGrid posts={activePosts} />
          </>
        )}
      </section>
    </div>
  );
}

// ── 3-column post grid ────────────────────────────────────────────────────────
function PostGrid({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.uri} post={post} />
      ))}
    </div>
  );
}

// ── Individual post card ──────────────────────────────────────────────────────
function PostCard({ post }: { post: any }) {
  console.log("Rendering post:", post); // Debug log to check post data
  const thumb =
    post.featuredImage?.node?.sourceUrl ||
    post.featuredImage?.sourceUrl ||
    null;
  const categoryName =
    post.categories?.nodes?.[0]?.name ?? post._category ?? "";

  return (
    <article className="group flex flex-col">
      <Link href={`/blogs/${post.slug}`} className="block">
        {/* Thumbnail */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4">
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt={post.title ?? "Blog post thumbnail"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <svg
                className="w-12 h-12 text-primary/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[1.05rem] font-bold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Meta */}
        {(post.date || categoryName) && (
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
            {post.date && <span>Published on {formatDate(post.date)}</span>}
            {post.date && categoryName && <span>/</span>}
            {categoryName && <span>In {categoryName}</span>}
          </p>
        )}

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {getExcerpt(post.excerpt)}
        </p>
      </Link>
    </article>
  );
}
