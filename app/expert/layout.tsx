"use client";

import { usePathname } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ExpertDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/expert/login") {
    return <>{children}</>;
  }

  return (
    <ProtectedRoute requiredRole="EXPERT" redirectPath="/expert/login" roleMismatchPath="/">
      <div className="h-screen overflow-scroll bg-[#fafafa]">
        <main className="overflow-y-auto">
          <div className="overflow-hidden">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
