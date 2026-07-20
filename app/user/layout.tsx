"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute requiredRole="CLIENT" redirectPath="/" roleMismatchPath="/">
      <div className="h-screen overflow-scroll bg-[#fafafa]">
        <main className="overflow-y-auto">
          <div className="overflow-hidden">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
