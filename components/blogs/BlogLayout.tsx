"use client";

import { useState } from "react";
import Link from "next/link";

function getExcerpt(html?: string, maxLength = 220) {
  if (!html) return "";
  const text = html.replace(/<[^>]*>?/gm, "").trim();
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default function BlogLayout({
  postsByCategory,
}: {
  postsByCategory: Record<string, any[]>;
}) {
  const categories = Object.keys(postsByCategory);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="space-y-4 sticky top-24 h-fit">
        <h2 className="text-lg font-semibold">Categories</h2>

        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {cat}
                <span className="ml-2 text-xs opacity-70">
                  ({postsByCategory[cat].length})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">{activeCategory}</h1>

        <div className="grid gap-6">
          {postsByCategory[activeCategory].map((post) => (
            <article
              key={post.uri}
              className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/40"
            >
              <Link href={`/blogs/${post.slug}`} className="block space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {getExcerpt(post.excerpt)}
                </p>

                <span className="text-sm font-medium text-primary">
                  Read full guide →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
