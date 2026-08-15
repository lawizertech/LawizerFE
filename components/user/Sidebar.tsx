"use client";

import { Calendar, ClipboardList, Receipt, Settings, LogOut, ArrowLeft, HelpCircle, ChevronDown, MessageSquare, Bell } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/authContext";
import UserAvatar from "@/components/ui/UserAvatar";

interface SidebarProps {
  activeTab: string;
  handleLogout: () => void;
  menuOpen: boolean;
}

export default function Sidebar({ activeTab, handleLogout, menuOpen }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();

  const isChatsRoute = pathname === "/user/dashboard/chats";

  const go = (tab?: string) => {
    router.push(tab ? `/user/dashboard?tab=${tab}` : `/user/dashboard`);
  };

  const userName = user?.name || (user?.email ? user.email.split("@")[0] : "User");
  const userEmail = user?.email || "";

  return (
    <aside
      className={`bg-white border-r border-gray-200/80 w-64 p-5 fixed top-0 left-0 h-full flex flex-col justify-between transition-transform duration-300 z-40 ${
        menuOpen ? "translate-x-0" : "-translate-x-64"
      } lg:translate-x-0`}
    >
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer pb-4" onClick={() => router.push("/")}>
          <div className="w-9 h-9 rounded-full shadow-xs overflow-hidden flex justify-center items-center bg-white border border-gray-100">
            <img src="/Lawizer_final.png" alt="Lawizer" className="w-8 h-8 object-contain rounded-xl" />
          </div>
          <span className="text-2xl font-black text-[#c92c41] tracking-tight">Lawizer</span>
        </div>

        {/* BACK BUTTON TO HOMEPAGE */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors mb-5 font-medium px-1 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back
        </button>

        {/* NAV */}
        <nav className="space-y-1.5">
          <SidebarItem
            label="My Services"
            icon={ClipboardList}
            active={!isChatsRoute && (activeTab === "services" || !activeTab)}
            onClick={() => go("services")}
          />

          <SidebarItem
            label="My Consultations"
            icon={Calendar}
            active={!isChatsRoute && activeTab === "consultations"}
            onClick={() => go("consultations")}
          />

          <SidebarItem
            label="Case Chats"
            icon={MessageSquare}
            active={isChatsRoute}
            onClick={() => router.push("/user/dashboard/chats")}
          />

          <SidebarItem
            label="Transactions"
            icon={Receipt}
            active={!isChatsRoute && activeTab === "transactions"}
            onClick={() => go("transactions")}
          />

          <SidebarItem
            label="Notifications"
            icon={Bell}
            active={activeTab === "notifications"}
            onClick={() => go("notifications")}
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
            className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-600 hover:bg-rose-50/80 transition-colors mt-4"
          >
            <LogOut size={16} />
            Logout
          </button>
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        {/* NEED HELP CHOOSING BANNER */}
        <div className="bg-rose-50/60 border border-rose-100/90 rounded-2xl p-3.5 text-left space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-rose-100 text-[#c92c41] flex items-center justify-center flex-shrink-0">
              <HelpCircle size={14} />
            </div>
            <h4 className="text-xs font-bold text-gray-900">Need help choosing?</h4>
          </div>
          <p className="text-[11px] text-gray-600 leading-snug">
            Our legal experts are here to guide you.
          </p>
          <button
            onClick={() => go("consultations")}
            className="text-xs font-semibold text-[#c92c41] hover:text-[#a8233a] inline-flex items-center gap-1 pt-1 transition-colors"
          >
            Talk to Expert →
          </button>
        </div>

        {/* USER PROFILE FOOTER */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50/80 border border-gray-200/60">
          <div className="flex items-center gap-2.5 min-w-0">
            <UserAvatar user={user} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-gray-900 truncate leading-tight">{userName}</p>
              {userEmail && <p className="text-[10px] text-gray-500 truncate leading-tight">{userEmail}</p>}
            </div>
          </div>
          <ChevronDown size={14} className="text-gray-400 flex-shrink-0 ml-1" />
        </div>
      </div>
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
      className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
        active
          ? "bg-[#c92c41] text-white shadow-xs"
          : "text-gray-600 hover:bg-rose-50/50 hover:text-[#c92c41]"
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

