"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Sidebar from "./Sidebar";
import MobileMenuButton from "./MobileMenuButton";
import UserHeader from "./UserHeader";

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
    window.location.href = "/expert/login";
  };

  return (
    <div className="flex bg-[#fafafa] overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        handleLogout={handleLogout}
        menuOpen={menuOpen}
      />

      <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* HEADER */}
      <UserHeader />

      {/* CONTENT */}
      <main className="flex-1 ml-0 lg:ml-64 pt-20 px-6 lg:px-10">
        {children}
      </main>
    </div>
  );
}
