"use client";

import { useSearchParams } from "next/navigation";
import MyConsultationsTab from "./MyConsultationsTab";
import ActiveServicesTab from "./ActiveServicesTab";
import BookServiceTab from "./BookServiceTab";
import TransactionsTab from "./TransactionsTab";
import SettingsTab from "./SettingsTab";
import { UserNotificationsTab } from "./UserNotificationsTab";

export default function UserDashboardRenderer() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "services";

  return (
    <>
      {tab === "consultations" && <MyConsultationsTab />}
      {tab === "services" && <ActiveServicesTab />}
      {tab === "book" && <BookServiceTab />}
      {tab === "transactions" && <TransactionsTab />}
      {tab === "settings" && <SettingsTab />}
      {tab === "notifications" && <UserNotificationsTab />}
    </>
  );
}
