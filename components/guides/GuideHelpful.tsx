'use client';

import { useState, useEffect } from 'react';

type Vote = 'up' | 'down' | null;

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
      if (saved === 'up' || saved === 'down') {
        setVote(saved);
        setSubmitted(true);
      }
    } catch {
      // localStorage unavailable (private browsing etc.) — ignore
    }
  }, [storageKey]);

  const handleVote = (v: 'up' | 'down') => {
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
          <span className="guide-helpful-thanks-icon">{vote === 'up' ? '🎉' : '🙏'}</span>
          <p className="guide-helpful-thanks-text">
            {vote === 'up'
              ? 'Glad this guide helped!'
              : 'Thanks — we'll improve it.'}
          </p>
        </div>
      ) : (
        <>
          <p className="guide-helpful-question">Was this guide helpful?</p>
          <div className="guide-helpful-actions">
            <button
              onClick={() => handleVote('up')}
              className="guide-helpful-btn guide-helpful-btn--up"
              aria-label="Yes, this guide was helpful"
            >
              <span aria-hidden="true">👍</span>
              <span>Yes</span>
            </button>
            <button
              onClick={() => handleVote('down')}
              className="guide-helpful-btn guide-helpful-btn--down"
              aria-label="No, this guide needs improvement"
            >
              <span aria-hidden="true">👎</span>
              <span>Needs work</span>
            </button>
          </div>
        </>
      )}

      <style>{`
        .guide-helpful-widget {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          background: #fafafa;
          margin-top: 2.5rem;
        }

        .guide-helpful-question {
          font-size: 0.9rem;
          font-weight: 700;
          color: #374151;
          margin: 0;
        }

        .guide-helpful-actions {
          display: flex;
          gap: 0.75rem;
        }

        .guide-helpful-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #374151;
          cursor: pointer;
          transition: all 0.15s;
        }
        .guide-helpful-btn:hover {
          border-color: #e94560;
          color: #e94560;
          background: #fff1f2;
          transform: translateY(-1px);
        }
        .guide-helpful-btn--up:hover { border-color: #16a34a; color: #16a34a; background: #f0fdf4; }

        .guide-helpful-thanks {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .guide-helpful-thanks-icon { font-size: 2rem; }
        .guide-helpful-thanks-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
