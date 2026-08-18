"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/authContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: (props: { activeTab: string; handleLogout: () => void; menuOpen: boolean }) => React.ReactNode;
  mobileMenuButton: (props: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) => React.ReactNode;
}

export default function DashboardLayout({
  children,
  header,
  sidebar,
  mobileMenuButton,
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();

  let activeTab = "dashboard";

  if (pathname.includes("/connect")) {
    activeTab = "bookings";
  } else if (searchParams.get("tab")) {
    activeTab = searchParams.get("tab")!;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex bg-[#fafafa] overflow-hidden min-h-screen">
      {sidebar({ activeTab, handleLogout, menuOpen })}

      {mobileMenuButton({ menuOpen, setMenuOpen })}

      {/* Backdrop for mobile sidebar */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* HEADER */}
      {header}

      {/* CONTENT */}
      <main className="flex-1 min-w-0 ml-0 lg:ml-64 pt-20 px-6 lg:px-10">{children}</main>
    </div>
  );
}
