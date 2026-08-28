"use client";

import Link from "next/link";
import { formatDate } from "./BlogLayout";

interface RecentInsightsProps {
  recentPosts: any[];
}

export default function RecentInsights({ recentPosts }: RecentInsightsProps) {
  if (recentPosts.length === 0) return null;

  return (
    <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50/40">
      <h2 className="text-[11px] font-extrabold text-slate-800 uppercase tracking-widest mb-5 pb-2 border-b border-slate-100">
        Recent Insights
      </h2>
      <div className="flex flex-col gap-5">
        {recentPosts.map((post) => {
          const thumb = post.featuredImage?.node?.sourceUrl || post.featuredImage?.sourceUrl || null;
          return (
            <article key={post.uri} className="group">
              <Link href={`/blogs/${post.slug}`} className="flex gap-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                  {thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={thumb}
                      alt={post.title ?? "Blog thumbnail"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/5 to-brand/10">
                      <svg className="w-5 h-5 text-brand/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-brand transition-colors duration-200 line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  {post.date && <p className="text-[10px] text-muted-foreground">{formatDate(post.date)}</p>}
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
