"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import MobileMenuButton from "@/components/lawyer/MobileMenuButton";
import Sidebar from "@/components/lawyer/Sidebar";

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);

  let activeTab = "dashboard";

  if (pathname.includes("/connect")) {
    activeTab = "bookings";
  } else if (searchParams.get("tab")) {
    activeTab = searchParams.get("tab")!;
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/lawyer/login";
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar
        activeTab={activeTab}
        handleLogout={handleLogout}
        menuOpen={menuOpen}
      />

      <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-10 pt-24">{children}</main>
    </div>
  );
}
