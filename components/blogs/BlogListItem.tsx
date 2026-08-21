"use client";

import Link from "next/link";
import { formatDate, getExcerpt } from "./BlogLayout";

interface BlogListItemProps {
  post: any;
}

export default function BlogListItem({ post }: BlogListItemProps) {
  const thumb = post.featuredImage?.node?.sourceUrl || post.featuredImage?.sourceUrl || null;
  const categoryName = post.categories?.nodes?.[0]?.name ?? post._category ?? "";

  return (
    <article className="group border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
      <Link href={`/blogs/${post.slug}`} className="flex flex-col md:flex-row gap-6 lg:gap-8">
        {/* Image */}
        <div className="relative w-full md:w-60 lg:w-64 shrink-0 aspect-[16/10] rounded-xl overflow-hidden bg-slate-50">
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt={post.title ?? "Blog post thumbnail"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/5 to-brand/10">
              <svg className="w-10 h-10 text-brand/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            {/* Meta */}
            {(post.date || categoryName) && (
              <p className="text-[11px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                {categoryName && <span className="text-brand">{categoryName}</span>}
                {categoryName && post.date && <span className="text-slate-300">•</span>}
                {post.date && <span className="text-muted-foreground">{formatDate(post.date)}</span>}
              </p>
            )}
            {/* Title */}
            <h3 className="text-lg font-extrabold leading-snug text-foreground mb-2 group-hover:text-brand transition-colors duration-200 line-clamp-2">
              {post.title}
            </h3>
            {/* Excerpt */}
            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 lg:line-clamp-3">
              {getExcerpt(post.excerpt, 150)}
            </p>
          </div>
          <div>
            <span className="inline-flex items-center text-xs font-bold text-brand group-hover:text-brand-dark transition-colors duration-200">
              Read Article <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
