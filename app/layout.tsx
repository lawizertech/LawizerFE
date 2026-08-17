import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "./lawizer-custom.css";
import RootLayoutClient from "@/components/client/RootLayoutClient";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--",
});


export const metadata: Metadata = {
  title: "Lawizer",
  description:
    "Real-life legal issues need real lawyers. Whether it's personal, property, or business, our advocates are here to guide you every step of the way. You've been through enough; let us take it from here. Lawizer connects you to the best lawyers to make your legal journey easier.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
  return (
    <html lang="en">
      <body className={`${outfit.variable} overflow-x-hidden w-full max-w-full`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
