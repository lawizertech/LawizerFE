import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Lawizer",
  description: "An AI-powered legal assistant for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden `}
      >
        <div className="w-full flex justify-center fixed top-4 z-50">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
