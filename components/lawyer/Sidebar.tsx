"use client";
import { Home, User, Calendar, LogOut } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  handleLogout: () => void;
  menuOpen: boolean;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  handleLogout,
  menuOpen,
}: SidebarProps) {
  return (
    <aside
      className={`bg-white shadow-xl w-64 p-5 fixed top-0 left-0 h-full transition-transform duration-300 z-0 pt-20
        ${menuOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      <nav className="space-y-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium
            ${
              activeTab === "dashboard"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          <Home size={18} /> Dashboard
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium
            ${
              activeTab === "profile"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          <User size={18} /> My Profile
        </button>

        <button
          onClick={() => setActiveTab("bookings")}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium
            ${
              activeTab === "bookings"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          <Calendar size={18} /> My Bookings
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium text-red-600 hover:bg-red-100"
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </aside>
  );
}
