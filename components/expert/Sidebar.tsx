"use client";

import { User, LogOut, LayoutDashboard, MessageSquare, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

interface SidebarProps {
  activeTab: string;
  handleLogout: () => void;
  menuOpen: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export default function Sidebar({ activeTab, handleLogout, menuOpen, setMenuOpen }: SidebarProps) {
  const router = useRouter();
  const { user } = useAuth();

  const handleItemClick = (tabUrl: string) => {
    if (setMenuOpen) {
      setMenuOpen(false);
    }
    router.push(tabUrl);
  };

  return (
    <aside
      className={`bg-white border-r border-[#ebebeb] w-64 p-5 fixed top-0 left-0 h-full
 flex flex-col transition-transform duration-300 z-40
 ${menuOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      {/* BRAND LOGO */}
      <div className="flex items-center gap-2 cursor-pointer justify-start pb-5 border-b border-[#ebebeb]" onClick={() => router.push("/")}>
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm border border-[#ebebeb]">
          <img src="/logoLawizer.jpg" alt="Lawizer Logo" className="w-7 h-7 object-contain" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
        </div>
      </div>

      {/* NAVIGATION SECTIONS */}
      <div className="flex-1 overflow-y-auto py-6 space-y-6">
        {/* WORKSPACE GROUP */}
        <div>
          <div className="px-4 text-xs font-semibold text-[#a3a3a3] uppercase tracking-wider mb-3">
            Workspace
          </div>
          <nav className="space-y-1">
            <SidebarItem
              label="Dashboard"
              icon={LayoutDashboard}
              active={activeTab === "dashboard"}
              onClick={() => handleItemClick("/expert/dashboard")}
            />
            <SidebarItem
              label="My Cases"
              icon={MessageSquare}
              active={activeTab === "chats"}
              onClick={() => handleItemClick("/expert/dashboard?tab=chats")}
            />
            <SidebarItem
              label="Notifications"
              icon={Bell}
              active={activeTab === "notifications"}
              onClick={() => handleItemClick("/expert/dashboard?tab=notifications")}
            />
          </nav>
        </div>

        {/* ACCOUNT GROUP */}
        <div>
          <div className="px-4 text-xs font-semibold text-[#a3a3a3] uppercase tracking-wider mb-3">
            Account
          </div>
          <nav className="space-y-1">
            <SidebarItem
              label="My Profile"
              icon={User}
              active={activeTab === "profile"}
              onClick={() => handleItemClick("/expert/dashboard?tab=profile")}
            />
          </nav>
        </div>
      </div>

      {/* IDENTITY & LOGOUT AT BOTTOM */}
      <div className="pt-4 border-t border-[#ebebeb] space-y-3">
        {user && (
          <div className="px-4">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {user.name || "Professional"}
            </div>
            <div className="text-xs text-gray-500 truncate">{user.email}</div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-md
 text-sm font-semibold text-[#c92c41] hover:bg-red-50 transition duration-150"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

/* =========================
   SIDEBAR ITEM COMPONENT
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
      className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-md
 text-sm font-semibold transition duration-150
 ${active ? "bg-[#d62038] text-white shadow-sm" : "text-[#737373] hover:bg-red-50/50 hover:text-gray-900"}`}
    >
      <Icon size={18} className={active ? "text-white" : "text-gray-400 group-hover:text-gray-500"} />
      {label}
    </button>
  );
}
