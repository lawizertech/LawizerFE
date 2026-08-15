"use client";

import { Home, User, Calendar, LogOut, LayoutDashboard, ClipboardList, MessageSquare, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  activeTab: string;
  handleLogout: () => void;
  menuOpen: boolean;
}

export default function Sidebar({ activeTab, handleLogout, menuOpen }: SidebarProps) {
  const router = useRouter();

  return (
    <aside
      className={`bg-white border-r border-[#ebebeb] w-64 p-5 fixed top-0 left-0 h-full
 transition-transform duration-300 z-40
 ${menuOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      <div className="flex items-center gap-2 cursor-pointer justify-start pb-5" onClick={() => router.push("/")}>
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border border-slate-100">
          <img src="/Lawizer_final.png" alt="Lawizer Logo" className="w-9 h-9 object-contain rounded-xl" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
        </div>
      </div>
      <nav className="space-y-2 pt-4">
        {/* Dashboard */}
        <SidebarItem
          label="Dashboard"
          icon={LayoutDashboard}
          active={activeTab === "dashboard"}
          onClick={() => router.push("/expert/dashboard")}
        />

        {/* Bookings */}
        <SidebarItem
          label="Bookings"
          icon={Calendar}
          active={activeTab === "bookings"}
          onClick={() => router.push("/expert/dashboard?tab=bookings")}
        />

        {/* Case Chats */}
        <SidebarItem
          label="Case Chats"
          icon={MessageSquare}
          active={activeTab === "chats"}
          onClick={() => router.push("/expert/dashboard?tab=chats")}
        />

        {/* Profile */}
        <SidebarItem
          label="My Profile"
          icon={User}
          active={activeTab === "profile"}
          onClick={() => router.push("/expert/dashboard?tab=profile")}
        />

        {/* Notifications */}
        <SidebarItem
          label="Notifications"
          icon={Bell}
          active={activeTab === "notifications"}
          onClick={() => router.push("/expert/dashboard?tab=notifications")}
        />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-2 rounded-md
 text-red-600 font-normal hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}

/* =========================
 SIDEBAR ITEM
========================= */

function SidebarItem({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: any;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-4 rounded-md
 font-light transition
 ${active ? "bg-[#d62038] text-white" : "text-[#737373] hover:bg-red-50"}`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
