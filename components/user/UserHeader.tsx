"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Bell,
  Search,
  FileText,
  Clock,
  MessageSquare,
  CreditCard,
  Check,
} from "lucide-react";
import { useServiceWorkspace } from "@/hooks/useServiceWorkspace";

export default function UserHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    notifications,
    dismissNotification,
    dismissAllNotifications,
  } = useServiceWorkspace();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside mousedown events
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  let title = "Dashboard";
  const tab = searchParams.get("tab");

  if (pathname.includes("/connect")) {
    title = "Consultation Room";
  } else if (pathname.includes("/chats")) {
    title = "Your Chats";
  } else if (tab === "consultations") {
    title = "My Consultations";
  } else if (tab === "services") {
    title = "My Services";
  } else if (tab === "experts") {
    title = "Find Experts";
  } else if (tab === "book") {
    title = "Book Service";
  } else if (tab === "settings") {
    title = "Settings";
  }

  const unreadList = notifications.filter((n) => !n.read);

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b border-[#ebebeb] z-30 font-sans">
      <div className="h-full flex items-center justify-between px-6">
        {/* LEFT */}
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-500" />
            <input placeholder="Search…" className="bg-transparent text-sm outline-none w-40" />
          </div>

          {/* Notifications Dropdown anchor */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative p-1.5 hover:bg-gray-100 rounded-full transition duration-150 cursor-pointer"
              aria-label="Toggle notifications menu"
            >
              <Bell size={20} className="text-gray-600" />
              {unreadList.length > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-[#c92c41] text-white font-bold text-[9px] flex items-center justify-center rounded-full ring-2 ring-white">
                  {unreadList.length}
                </span>
              )}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2.5 w-80 bg-white rounded-xl shadow-2xl border border-gray-150 z-50 overflow-hidden text-gray-800">
                {/* Popover Header */}
                <div className="p-4 border-b border-[#F1F5F9] flex justify-between items-center bg-[#fafafa]/50">
                  <span className="font-bold text-xs text-gray-900">Notifications</span>
                  {unreadList.length > 0 && (
                    <button
                      onClick={dismissAllNotifications}
                      className="text-[10px] text-[#C0392B] hover:text-[#A03024] font-bold cursor-pointer"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                {/* Popover List */}
                <div className="divide-y divide-[#F1F5F9] max-h-72 overflow-y-auto">
                  {unreadList.length === 0 ? (
                    <div className="p-8 text-center text-xs text-gray-400 italic">
                      No new notifications.
                    </div>
                  ) : (
                    unreadList.slice(0, 5).map((notif) => (
                      <div
                        key={notif.notificationId}
                        onClick={async () => {
                          setShowDropdown(false);
                          await dismissNotification(notif.notificationId);
                          if (notif.serviceId) {
                            router.push(`/user/dashboard?tab=services&serviceId=${notif.serviceId}`);
                          }
                        }}
                        className="p-3.5 flex gap-3 hover:bg-gray-50/50 cursor-pointer transition relative group"
                      >
                        <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 shrink-0 mt-0.5">
                          {notif.type === "document" && <FileText size={12} className="text-blue-500" />}
                          {notif.type === "service" && <Clock size={12} className="text-green-500" />}
                          {notif.type === "message" && <MessageSquare size={12} className="text-[#C0392B]" />}
                          {notif.type === "payment" && <CreditCard size={12} className="text-amber-500" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-1">
                            <span className="text-xs font-bold text-gray-900 truncate block">{notif.title}</span>
                          </div>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{notif.message}</p>
                          <span className="text-[8px] text-gray-400 font-semibold block mt-1.5">{notif.createdAt}</span>
                        </div>

                        {/* Mark read check */}
                        <button
                          onClick={async (e) => {
                            e.stopPropagation();
                            await dismissNotification(notif.notificationId);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-green-600 transition shrink-0 self-center"
                          title="Mark read"
                        >
                          <Check size={12} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-[#c92c41] text-white flex items-center justify-center font-medium text-sm">
            N
          </div>
        </div>
      </div>
    </header>
  );
}
