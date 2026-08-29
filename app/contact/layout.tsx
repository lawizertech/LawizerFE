import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Lawizer",
  description:
    "Get in touch with Lawizer's legal experts. Reach us by phone, email, or WhatsApp for business registration, compliance, tax filing, documentation, and all legal needs.",
  alternates: { canonical: "https://lawizer.com/contact" },
  openGraph: {
    type: "website",
    title: "Contact Lawizer — Talk to a Legal Expert",
    description:
      "Reach Lawizer's verified legal team for business registration, trademark, GST, ITR, property, and personal legal services. We're here to help.",
    url: "https://lawizer.com/contact",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Contact Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lawizer",
    description: "Talk to a verified legal expert today.",
    images: ["/og-default.jpg"],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
