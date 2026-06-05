import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./lawizer-custom.css";
import RootLayoutClient from "@/components/client/RootLayoutClient";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lawizer",
  description:
    "Real-life legal issues need real lawyers. Whether it’s personal, property, or business — our advocates are here to guide you every step of the way. You’ve been through enough; let us take it from here. Lawizer connects you to the best lawyers to make your legal journey easier.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} overflow-x-hidden `}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
