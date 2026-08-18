"use client";

import DashboardLayout from "@/components/DashboardLayout";
import MobileMenuButton from "@/components/expert/MobileMenuButton";
import Sidebar from "@/components/expert/Sidebar";
import ExpertHeader from "@/components/expert/ExpertHeader";

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      header={<ExpertHeader />}
      sidebar={({ activeTab, handleLogout, menuOpen, setMenuOpen }) => (
        <Sidebar activeTab={activeTab} handleLogout={handleLogout} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      mobileMenuButton={({ menuOpen, setMenuOpen }) => (
        <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
    >
      {children}
    </DashboardLayout>
  );
}
