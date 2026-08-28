import Link from "next/link";
import Image from "next/image";

interface Post {
  title: string;
  slug: string;
  date: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  } | null;
}

interface BlogRecentPostsProps {
  recentPosts: Post[];
}

export default function BlogRecentPosts({ recentPosts }: BlogRecentPostsProps) {
  if (!recentPosts || recentPosts.length === 0) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest border-l-2 border-brand pl-3 mb-5 select-none">
        Recent Posts
      </h3>
      <div className="flex flex-col gap-4">
        {recentPosts.map((post, idx) => {
          const thumb = post.featuredImage?.node?.sourceUrl || null;
          const alt = post.featuredImage?.node?.altText || post.title;

          return (
            <div
              key={post.slug}
              className={`flex gap-3 items-start ${
                idx > 0 ? "border-t border-slate-100 pt-4" : ""
              }`}
            >
              <Link href={`/blogs/${post.slug}`} className="flex gap-3 items-start group w-full">
                {/* Thumbnail */}
                <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={alt}
                      fill
                      sizes="48px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <h4 className="text-[13px] font-bold text-slate-800 leading-snug group-hover:text-brand transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  {post.date && (
                    <p className="text-[10px] text-slate-400 mt-1">
                      {formatDate(post.date)}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
