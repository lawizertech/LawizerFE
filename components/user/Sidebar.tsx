"use client";

import { LayoutDashboard, Users, Plus, Calendar, ClipboardList, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  activeTab: string;
  handleLogout: () => void;
  menuOpen: boolean;
}

export default function Sidebar({ activeTab, handleLogout, menuOpen }: SidebarProps) {
  const router = useRouter();

  const go = (tab?: string) => {
    router.push(tab ? `/user/dashboard?tab=${tab}` : `/user/dashboard`);
  };

  return (
    <aside
      className={`bg-white border-r border-[#ebebeb] w-64 p-5 fixed top-0 left-0 h-full
 transition-transform duration-300 z-40
 ${menuOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2 cursor-pointer pb-6" onClick={() => router.push("/")}>
        <div className="w-10 h-10 rounded-lg shadow-sm overflow-hidden flex justify-center items-center">
          <img src="/logoLawizer.jpg" alt="Lawizer" width={28} height={28} />
        </div>
        <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
      </div>

      {/* NAV */}
      <nav className="space-y-2">
        <SidebarItem label="Dashboard" icon={LayoutDashboard} active={activeTab === "dashboard"} onClick={() => go()} />

        <SidebarItem label="Find Experts" icon={Users} active={activeTab === "experts"} onClick={() => go("experts")} />

        <SidebarItem label="Book Service" icon={Plus} active={activeTab === "book"} onClick={() => go("book")} />

        <SidebarItem
          label="My Consultations"
          icon={Calendar}
          active={activeTab === "consultations"}
          onClick={() => go("consultations")}
        />

        <SidebarItem
          label="My Services"
          icon={ClipboardList}
          active={activeTab === "services"}
          onClick={() => go("services")}
        />

        <SidebarItem
          label="Settings"
          icon={Settings}
          active={activeTab === "settings"}
          onClick={() => go("settings")}
        />

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-md
 text-red-600 hover:bg-red-50 transition mt-6"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */

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
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-md transition
 ${active ? "bg-[#d62038] text-white" : "text-[#737373] hover:bg-red-50"}`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
