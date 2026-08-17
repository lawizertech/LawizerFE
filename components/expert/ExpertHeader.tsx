"use client";

import { Bell, Search } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/authContext";
import UserAvatar from "@/components/ui/UserAvatar";

export default function ExpertHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user } = useAuth();

  let title = "Dashboard";
  const tab = searchParams.get("tab");

  if (pathname.includes("/connect")) title = "Consultation";
  else if (tab === "bookings") title = "Bookings";
  else if (tab === "profile") title = "My Profile";

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b border-[#ebebeb] z-30">
      <div className="h-full flex items-center justify-between px-6">
        {/* LEFT */}
        <h1 className="text-xl font-semibold text-gray-900 pl-10 lg:pl-0">{title}</h1>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-500" />
            <input placeholder="Search…" className="bg-transparent text-sm outline-none w-40" />
          </div>

          {/* Notifications */}
          <button className="relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#c92c41]" />
          </button>

          {/* Avatar */}
          <UserAvatar user={user} size="md" />
        </div>
      </div>
    </header>
  );
}
