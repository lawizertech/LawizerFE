"use client";

import Link from "next/link";
import { formatDate, getExcerpt } from "./BlogLayout";

interface FeaturedInsightProps {
  post: any;
}

export default function FeaturedInsight({ post }: FeaturedInsightProps) {
  if (!post) return null;
  
  const thumb = post.featuredImage?.node?.sourceUrl || post.featuredImage?.sourceUrl || null;
  const categoryName = post.categories?.nodes?.[0]?.name ?? post._category ?? "";

  return (
    <div className="mb-12 pb-12 border-b border-slate-100">
      <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
        Featured Legal Insight
      </h2>
      <article className="group">
        <Link href={`/blogs/${post.slug}`} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image (Left) */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative w-full aspect-[16/10] lg:aspect-[1.5/1] bg-slate-50 rounded-2xl overflow-hidden">
              {thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumb}
                  alt={post.title ?? "Featured post thumbnail"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/5 to-brand/10">
                  <svg className="w-16 h-16 text-brand/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          </div>

          {/* Info (Right) */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div>
              {/* Meta */}
              {(post.date || categoryName) && (
                <p className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                  {categoryName && <span className="text-brand">{categoryName}</span>}
                  {categoryName && post.date && <span className="text-slate-300">•</span>}
                  {post.date && <span className="text-muted-foreground">{formatDate(post.date)}</span>}
                </p>
              )}
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-foreground mb-4 group-hover:text-brand transition-colors duration-200">
                {post.title}
              </h3>
              {/* Excerpt */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                {getExcerpt(post.excerpt, 240)}
              </p>
            </div>
            {/* Link */}
            <div>
              <span className="inline-flex items-center text-xs font-bold text-brand group-hover:text-brand-dark transition-colors duration-200">
                Read Article <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
}
