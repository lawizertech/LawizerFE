"use client";

import { useState, useEffect } from "react";

type Vote = "up" | "down" | null;

interface GuideHelpfulProps {
  /** Guide slug — used as the localStorage key so votes persist per guide */
  slug: string;
}

export default function GuideHelpful({ slug }: GuideHelpfulProps) {
  const storageKey = `guide-helpful-${slug}`;
  const [vote, setVote] = useState<Vote>(null);
  const [submitted, setSubmitted] = useState(false);

  // Load persisted vote on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as Vote | null;
      if (saved === "up" || saved === "down") {
        setVote(saved);
        setSubmitted(true);
      }
    } catch {
      // localStorage unavailable (private browsing etc.) — ignore
    }
  }, [storageKey]);

  const handleVote = (v: "up" | "down") => {
    if (submitted) return;
    setVote(v);
    setSubmitted(true);
    try {
      localStorage.setItem(storageKey, v);
    } catch {
      // ignore
    }
  };

  return (
    <div className="guide-helpful-widget" role="region" aria-label="Guide feedback">
      {submitted ? (
        <div className="guide-helpful-thanks">
          <span className="guide-helpful-thanks-icon">{vote === "up" ? "🎉" : "🙏"}</span>
          <p className="guide-helpful-thanks-text">
            {vote === "up" ? "Glad this guide helped!" : "Thanks — we'll improve it."}
          </p>
        </div>
      ) : (
        <>
          <p className="guide-helpful-question">Was this guide helpful?</p>
          <div className="guide-helpful-actions">
            <button
              onClick={() => handleVote("up")}
              className="guide-helpful-btn guide-helpful-btn--up"
              aria-label="Yes, this guide was helpful"
            >
              <span aria-hidden="true">👍</span>
              <span>Yes</span>
            </button>
            <button
              onClick={() => handleVote("down")}
              className="guide-helpful-btn guide-helpful-btn--down"
              aria-label="No, this guide needs improvement"
            >
              <span aria-hidden="true">👎</span>
              <span>Needs work</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
