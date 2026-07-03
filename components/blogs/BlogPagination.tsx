"use client";

import Link from "next/link";

interface BlogPaginationProps {
 currentPage: number;
 totalPages: number;
 totalPosts: number;
 postsPerPage: number;
}

function getPageNumbers(current: number, total: number): (number | "…")[] {
 if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

 const pages: (number | "…")[] = [1];

 if (current <= 4) {
 // near start: 1 2 3 4 5 … N
 for (let i = 2; i <= Math.min(5, total - 1); i++) pages.push(i);
 pages.push("…");
 } else if (current >= total - 3) {
 // near end: 1 … N-4 N-3 N-2 N-1 N
 pages.push("…");
 for (let i = Math.max(total - 4, 2); i <= total - 1; i++) pages.push(i);
 } else {
 // middle: 1 … cur-1 cur cur+1 … N
 pages.push("…");
 pages.push(current - 1);
 pages.push(current);
 pages.push(current + 1);
 pages.push("…");
 }

 pages.push(total);
 return pages;
}

export default function BlogPagination({
 currentPage,
 totalPages,
 totalPosts,
 postsPerPage,
}: BlogPaginationProps) {
 if (totalPages <= 1) return null;

 const start = (currentPage - 1) * postsPerPage + 1;
 const end = Math.min(currentPage * postsPerPage, totalPosts);
 const pageNumbers = getPageNumbers(currentPage, totalPages);

 const btnBase =
 "inline-flex items-center justify-center min-w-[36px] h-9 px-2 rounded-lg border text-sm font-medium transition-all duration-150 select-none";
 const activeBtn =
 "bg-primary text-primary-foreground border-primary shadow-sm scale-105";
 const inactiveBtn =
 "border-border text-foreground hover:border-primary hover:text-primary bg-background";
 const disabledBtn =
 "border-border text-muted-foreground bg-background cursor-not-allowed opacity-40";

 return (
 <div className="mt-10 flex flex-col items-center gap-4">
 {/* Post count info */}
 <p className="text-sm text-muted-foreground">
 Showing <span className="font-medium text-foreground">{start}–{end}</span> of{" "}
 <span className="font-medium text-foreground">{totalPosts}</span> posts
 </p>

 {/* Page buttons */}
 <nav aria-label="Blog pagination" className="flex items-center gap-1.5 flex-wrap justify-center">
 {/* Previous */}
 {currentPage <= 1 ? (
 <span className={`${btnBase} ${disabledBtn}`} aria-disabled="true">
 ← Prev
 </span>
 ) : (
 <Link
 href={`/blogs?page=${currentPage - 1}`}
 className={`${btnBase} ${inactiveBtn}`}
 aria-label="Go to previous page"
 >
 ← Prev
 </Link>
 )}

 {/* Page numbers */}
 {pageNumbers.map((p, i) =>
 p === "…" ? (
 <span
 key={`ellipsis-${i}`}
 className="inline-flex items-center justify-center w-9 h-9 text-muted-foreground text-sm"
 aria-hidden="true"
 >
 …
 </span>
 ) : (
 <Link
 key={p}
 href={`/blogs?page=${p}`}
 aria-label={`Go to page ${p}`}
 aria-current={p === currentPage ? "page" : undefined}
 className={`${btnBase} ${p === currentPage ? activeBtn : inactiveBtn}`}
 >
 {p}
 </Link>
 ),
 )}

 {/* Next */}
 {currentPage >= totalPages ? (
 <span className={`${btnBase} ${disabledBtn}`} aria-disabled="true">
 Next →
 </span>
 ) : (
 <Link
 href={`/blogs?page=${currentPage + 1}`}
 className={`${btnBase} ${inactiveBtn}`}
 aria-label="Go to next page"
 >
 Next →
 </Link>
 )}
 </nav>
 </div>
 );
}
