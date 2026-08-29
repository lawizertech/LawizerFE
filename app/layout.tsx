import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import "./lawizer-custom.css";
import RootLayoutClient from "@/components/client/RootLayoutClient";
import { buildOrganizationSchema } from "@/lib/seo/jsonld";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const DEFAULT_TITLE = "Lawizer — Legal Services Simplified";
const DEFAULT_DESCRIPTION =
  "Lawizer connects you to verified lawyers across India for business registration, trademark, GST, ITR filing, property, and personal legal services. Fast, affordable, expert-backed.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lawizer.com"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Lawizer",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Lawizer",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "https://lawizer.com",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Lawizer — Legal Services Simplified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lawizer",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://lawizer.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="overflow-x-clip w-full max-w-full font-sans antialiased">
        {/* Site-wide Organization + LegalService JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}

