"use client";

import { useEffect, useRef, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

interface BlogTableOfContentsProps {
  headings: Heading[];
}

export default function BlogTableOfContents({
  headings,
}: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const visibleIds = new Set<string>();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleIds.add(entry.target.id);
        else visibleIds.delete(entry.target.id);
      });

      if (visibleIds.size === 0) return;

      let topId = "";
      let topValue = Infinity;
      visibleIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top < topValue) {
            topValue = top;
            topId = id;
          }
        }
      });

      if (topId) setActiveId(topId);
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
      visibleIds.clear();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* ── Mobile: collapsible ───────────────────────────── */}
      <div className="lg:hidden mb-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-400"
          aria-expanded={isOpen}
        >
          <span>In this article</span>
          <svg
            className={`w-4 h-4 transition-transform text-slate-400 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="px-4 pb-4 pt-2 space-y-0.5 border-t border-slate-100">
            {headings.map(({ id, text }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block text-sm py-1.5 pl-3 border-l-2 transition-all ${
                    activeId === id
                      ? "border-red-500 text-red-600 font-semibold bg-red-50"
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── Desktop: sticky sidebar — matches image 2 exactly ── */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* "IN THIS ARTICLE" header — small caps, grey */}
          <div className="px-5 py-3 border-b border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              In this article
            </p>
          </div>

          {/* TOC links */}
          <ul className="py-3 px-2">
            {headings.map(({ id, text }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    className={`flex items-center gap-0 text-[13px] py-2 px-3 rounded-md transition-all ${
                      isActive
                        ? "text-red-600 font-semibold bg-red-50"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {/* Red left border indicator for active item */}
                    <span
                      className={`shrink-0 w-[3px] h-4 rounded-full mr-3 transition-all ${
                        isActive ? "bg-red-500" : "bg-transparent"
                      }`}
                    />
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
