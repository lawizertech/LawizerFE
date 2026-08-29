import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Business Registration & Startup Legal Services | Lawizer",
  description:
    "Register your Private Limited Company, LLP, OPC, or startup with Lawizer. Expert legal services for GST, trademark, MSME, annual compliance, and more — online, fast, and affordable.",
  alternates: { canonical: "https://lawizer.com/startup-businesslegal" },
  openGraph: {
    type: "website",
    title: "Business Registration & Startup Legal Services | Lawizer",
    description:
      "End-to-end business registration and legal compliance for Indian startups and SMEs. Pvt Ltd, LLP, GST, Trademark, and more.",
    url: "https://lawizer.com/startup-businesslegal",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Startup & Business Legal | Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Registration | Lawizer",
    description: "Register your company online with expert help.",
    images: ["/og-default.jpg"],
  },
};

export default function StartupBusinesslegalLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
