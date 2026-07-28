"use client";

import { useSearchParams } from "next/navigation";
import DashboardTab from "@/components/expert/DashboardTab";
import ProfileTab from "@/components/expert/ProfileTab";
import BookingsTab from "@/components/expert/BookingsTab";
import ExpertChatsTab from "@/components/expert/ExpertChatsTab";
import { ExpertNotificationsTab } from "@/components/expert/ExpertNotificationsTab";

export default function ExpertDashboard() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dashboard";

  return (
    <>
      {tab === "dashboard" && <DashboardTab />}
      {tab === "profile" && <ProfileTab />}
      {tab === "bookings" && <BookingsTab />}
      {tab === "chats" && <ExpertChatsTab />}
      {tab === "notifications" && <ExpertNotificationsTab />}
    </>
  );
}
