import type { Metadata } from "next";
import NDAClient from "./NDAClient";
import { buildLegalServiceSchema } from "@/lib/seo/jsonld";

const BASE_URL = "https://lawizer.com";
const TITLE = "Non-Disclosure Agreement (NDA)";
const DESCRIPTION = "Protect confidential information before you share it with a co-founder, investor, employee, vendor or potential partner.";
const URL = `${BASE_URL}/documentation/non-disclosure-agreement`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      type: "website",
      title: `${TITLE} | Lawizer`,
      description: DESCRIPTION,
      url: URL,
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: TITLE }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${TITLE} | Lawizer`,
      description: DESCRIPTION,
      images: ["/og-default.jpg"],
    },
  };
}

export default function NDAPage() {
  const serviceSchema = buildLegalServiceSchema({
    name: TITLE,
    description: DESCRIPTION,
    url: URL,
    price: 0, // Quote based
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <NDAClient />
    </>
  );
}
