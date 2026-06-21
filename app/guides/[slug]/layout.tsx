import type { ReactNode } from 'react';

export default function GuideSlugLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-[#f4f5f7]">
      {/* Navbar offset */}
      <div className="h-20" />
      <main>{children}</main>
    </section>
  );
}
