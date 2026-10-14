"use client";

import { FounderCard } from "./FounderCard";

export function TalkToFounderSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-[var(--bg-soft)] to-[var(--bg)] overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <FounderCard />
      </div>
    </section>
  );
}
