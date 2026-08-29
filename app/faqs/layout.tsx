import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Legal Questions",
  description:
    "Answers to the most common questions about Lawizer's legal services — business registration, trademark, GST, ITR filing, property law, compliance, and more.",
  alternates: { canonical: "https://lawizer.com/faqs" },
  openGraph: {
    type: "website",
    title: "Legal FAQs | Lawizer",
    description:
      "Get answers to common legal questions about business registration, trademark, GST, ITR, and more from Lawizer's expert team.",
    url: "https://lawizer.com/faqs",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Lawizer FAQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal FAQs | Lawizer",
    description: "Answers to your most common legal questions.",
    images: ["/og-default.jpg"],
  },
};

export default function FAQsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
