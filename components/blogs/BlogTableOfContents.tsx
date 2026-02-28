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
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    // Track which headings are currently intersecting
    const visibleIds = new Set<string>();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleIds.add(entry.target.id);
        } else {
          visibleIds.delete(entry.target.id);
        }
      });

      if (visibleIds.size === 0) return;

      // Pick the topmost visible heading (smallest boundingClientRect.top >= 0)
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

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile: collapsible section above content */}
      <div className="lg:hidden mb-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-700"
          aria-expanded={isOpen}
        >
          <span>In this article</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <ul className="px-5 pb-4 space-y-2 border-t border-slate-100 pt-3">
            {headings.map(({ id, text }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block text-sm py-1 transition-colors ${
                    activeId === id
                      ? "text-[#2c3e8e] font-semibold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            In this article
          </p>
          <ul className="space-y-1">
            {headings.map(({ id, text }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`flex items-start gap-2 text-sm py-1.5 pl-3 border-l-2 transition-all ${
                    activeId === id
                      ? "border-[#2c3e8e] text-[#2c3e8e] font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
