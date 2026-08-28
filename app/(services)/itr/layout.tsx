import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ITR Filing Online — Income Tax Return | Lawizer",
  description:
    "File your Income Tax Return online with Lawizer's CA-assisted ITR plans. Covers ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6. Fast, accurate, and fully managed.",
  alternates: { canonical: "https://lawizer.com/itr" },
  openGraph: {
    type: "website",
    title: "ITR Filing Online — CA-Assisted | Lawizer",
    description:
      "Expert-backed ITR filing for salaried, freelancers, businesses & companies. Plans starting at ₹999.",
    url: "https://lawizer.com/itr",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "ITR Filing | Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing Online | Lawizer",
    description: "CA-assisted ITR filing plans starting at ₹999.",
    images: ["/og-default.jpg"],
  },
};

export default function ITRLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
