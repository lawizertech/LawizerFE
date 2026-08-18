"use client";

import { Bell } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export default function ExpertHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();

  let title = "Dashboard";
  const tab = searchParams.get("tab");

  if (pathname.includes("/connect")) {
    title = "Consultation";
  } else if (tab === "profile") {
    title = "My Profile";
  } else if (tab === "chats") {
    title = "My Cases";
  } else if (tab === "notifications") {
    title = "Notifications";
  }

  const handleNotificationClick = () => {
    router.push("/expert/dashboard?tab=notifications");
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b border-[#ebebeb] z-30">
      <div className="h-full flex items-center justify-between px-6">
        {/* LEFT */}
        <h1 className="text-xl font-semibold text-gray-900 pl-10 lg:pl-0">{title}</h1>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Notifications button linked to notifications tab */}
          <button 
            onClick={handleNotificationClick}
            className="relative p-2 rounded-full hover:bg-gray-50 transition duration-150"
            title="View Notifications"
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-[#d62038] border-2 border-white" />
          </button>

          {/* Static Professional Identity Badge */}
          <div className="flex items-center gap-2 border border-[#ebebeb] px-3 py-1.5 rounded-lg bg-gray-50/50 select-none">
            <div className="w-8 h-8 rounded-full bg-[#d62038] text-white flex items-center justify-center text-sm font-semibold shadow-sm">
              {(user?.name || "P").substring(0, 1).toUpperCase()}
            </div>
            <span className="text-sm font-semibold text-gray-800 hidden sm:inline-block">
              {user?.name || "Professional"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
