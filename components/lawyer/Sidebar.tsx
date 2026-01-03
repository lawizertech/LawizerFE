"use client";

import { Home, User, Calendar, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  activeTab: string;
  handleLogout: () => void;
  menuOpen: boolean;
}

export default function Sidebar({
  activeTab,
  handleLogout,
  menuOpen,
}: SidebarProps) {
  const router = useRouter();

  return (
    <aside
      className={`bg-white shadow-xl w-64 p-5 fixed top-0 left-0 h-full transition-transform duration-300 z-40 pt-20
        ${menuOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      <nav className="space-y-4">
        {/* Dashboard */}
        <button
          onClick={() => router.push("/lawyer/dashboard")}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium
            ${
              activeTab === "dashboard"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          <Home size={18} />
          Dashboard
        </button>

        {/* Profile */}
        <button
          onClick={() => router.push("/lawyer/dashboard?tab=profile")}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium
            ${
              activeTab === "profile"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          <User size={18} />
          My Profile
        </button>

        {/* Bookings */}
        <button
          onClick={() => router.push("/lawyer/dashboard?tab=bookings")}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium
            ${
              activeTab === "bookings"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          <Calendar size={18} />
          My Bookings
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-md font-medium text-red-600 hover:bg-red-100"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
