"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Sidebar from "./Sidebar";
import MobileMenuButton from "./MobileMenuButton";
import UserHeader from "./UserHeader";

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      header={<UserHeader />}
      sidebar={({ activeTab, handleLogout, menuOpen }) => (
        <Sidebar activeTab={activeTab} handleLogout={handleLogout} menuOpen={menuOpen} />
      )}
      mobileMenuButton={({ menuOpen, setMenuOpen }) => (
        <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
    >
      {children}
    </DashboardLayout>
  );
}
