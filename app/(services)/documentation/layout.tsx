import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Legal Documentation Services — Drafting & Review | Lawizer",
  description:
    "Professional legal document drafting and review by verified lawyers. NDA, shareholder agreements, co-founder agreements, employment contracts, rent agreements, and more.",
  alternates: { canonical: "https://lawizer.com/documentation" },
  openGraph: {
    type: "website",
    title: "Legal Documentation Services | Lawizer",
    description:
      "Expert legal drafting for all your business and personal document needs — NDA, agreements, deeds, and more.",
    url: "https://lawizer.com/documentation",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Legal Documentation | Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Documentation | Lawizer",
    description: "Expert legal document drafting and review.",
    images: ["/og-default.jpg"],
  },
};

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
