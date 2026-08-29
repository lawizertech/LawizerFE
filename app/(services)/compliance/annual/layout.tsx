import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Annual Compliance — Pvt Ltd, LLP & OPC | Lawizer",
  description:
    "Stay compliant with Lawizer's annual compliance plans for Private Limited Companies, LLPs, and OPCs. ROC filings, MCA forms, board resolutions, financial statements — handled by CAs.",
  alternates: { canonical: "https://lawizer.com/compliance/annual" },
  openGraph: {
    type: "website",
    title: "Annual Compliance Services | Lawizer",
    description:
      "Hassle-free annual compliance for Pvt Ltd, LLP, and OPC. CA-managed ROC filings, MCA forms, and financial statements.",
    url: "https://lawizer.com/compliance/annual",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Annual Compliance | Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual Compliance | Lawizer",
    description: "Stay compliant — ROC filings, MCA forms, CA-managed.",
    images: ["/og-default.jpg"],
  },
};

export default function AnnualComplianceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
