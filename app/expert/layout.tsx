"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ExpertDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute requiredRole="EXPERT" redirectPath="/" roleMismatchPath="/">
      <div className="h-screen overflow-scroll bg-[#fafafa]">
        <main className="overflow-y-auto">
          <div className="overflow-hidden">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

