"use client";
import BookingsTab from "@/components/lawyer/BookingsTab";
import DashboardTab from "@/components/lawyer/DashboardTab";
import MobileMenuButton from "@/components/lawyer/MobileMenuButton";
import ProfileTab from "@/components/lawyer/ProfileTab";
import Sidebar from "@/components/lawyer/Sidebar";
import { useState } from "react";

export default function LawyerDashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/lawyer/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
        menuOpen={menuOpen}
      />
      <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="flex-1 ml-0 lg:ml-64 p-8 pt-24">
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "bookings" && <BookingsTab />}
      </main>
    </div>
  );
}
