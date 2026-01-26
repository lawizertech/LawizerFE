"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function ExpertDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-[#fafafa]">
      {/* MAIN CONTENT */}
      <main
        className="          
          overflow-y-auto"
      >
        <div className="overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
