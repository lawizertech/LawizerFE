import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Legal Documentation & Agreements | Get a Custom Quote",
  description:
    "NDAs, founders' agreements, vendor contracts, employment agreements and more, drafted by qualified legal experts. Get a custom quote tailored to your exact need.",
  alternates: { canonical: "https://lawizer.com/documentation" },
  openGraph: {
    type: "website",
    title: "Legal Documentation & Agreements | Get a Custom Quote",
    description:
      "NDAs, founders' agreements, vendor contracts, employment agreements and more, drafted by qualified legal experts. Get a custom quote tailored to your exact need.",
    url: "https://lawizer.com/documentation",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Legal Documentation | Lawizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Documentation & Agreements | Lawizer",
    description: "Get a custom quote tailored to your exact need for legal documentation.",
    images: ["/og-default.jpg"],
  },
};

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
