import type { ReactNode } from "react";

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-background">
      {/* Top spacing for navbar */}
      <div className="h-20" />

      {/* Blog Container */}
      <main className="w-full mx-auto">{children}</main>

      {/* Footer CTA */}
      <footer className="mt-20 border-t bg-card">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Start your business the right way
          </h3>
          <p className="text-muted-foreground mb-4">
            From company incorporation to compliance — Lawizer has you covered.
          </p>
          <a
            href="https://lawizer.com"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Get Legal Assistance
          </a>
        </div>
      </footer>
    </section>
  );
}
