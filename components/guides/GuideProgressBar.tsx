"use client";

import { useEffect, useRef } from "react";

/**
 * GuideProgressBar — thin sticky progress bar at the top of the page.
 *
 * Uses the native CSS Scroll-Driven Animations API where supported
 * (`animation-timeline: scroll()`). Falls back to a requestAnimationFrame
 * polyfill in older browsers (Safari <17, Firefox <110).
 */
export default function GuideProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Feature-detect CSS scroll-driven animations
    const supportsScrollDriven = typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()");

    if (supportsScrollDriven) return; // CSS handles it — no JS needed

    // RAF-based fallback
    let rafId: number;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.setProperty("--progress", `${pct}%`);
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {/* Track */}
      <div className="fixed top-0 left-0 right-0 z-[999] h-[3px] bg-transparent pointer-events-none" aria-hidden="true">
        {/* Fill */}
        <div
          ref={barRef}
          className="guide-progress-bar h-full bg-gradient-to-r from-[#e94560] via-[#f5a623] to-[#e94560]"
          style={{ width: "0%" }}
        />
      </div>
    </>
  );
}
