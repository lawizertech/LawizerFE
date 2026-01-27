"use client";

import { useSearchParams } from "next/navigation";
import DashboardTab from "@/components/expert/DashboardTab";
import ProfileTab from "@/components/expert/ProfileTab";
import BookingsTab from "@/components/expert/BookingsTab";
import RequestServiceTab from "./RequestServiceTab";
import ActiveServicesTab from "./ActiveServices";

export default function LawyerDashboardClient() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dashboard";

  return (
    <>
      {tab === "dashboard" && <DashboardTab />}
      {tab === "profile" && <ProfileTab />}
      {tab === "request-service" && <RequestServiceTab />}
      {tab === "active-services" && <ActiveServicesTab />}
      {tab === "bookings" && <BookingsTab />}
    </>
  );
}
