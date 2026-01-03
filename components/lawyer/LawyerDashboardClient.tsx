"use client";

import { useSearchParams } from "next/navigation";
import DashboardTab from "@/components/lawyer/DashboardTab";
import ProfileTab from "@/components/lawyer/ProfileTab";
import BookingsTab from "@/components/lawyer/BookingsTab";

export default function LawyerDashboardClient() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dashboard";

  return (
    <>
      {tab === "dashboard" && <DashboardTab />}
      {tab === "profile" && <ProfileTab />}
      {tab === "bookings" && <BookingsTab />}
    </>
  );
}
