"use client";

import { useSearchParams } from "next/navigation";
import UserDashboard from "./DashboardTab";
import MyConsultationsTab from "./MyConsultationsTab";
import ActiveServicesTab from "./ActiveServicesTab";
import TransactionsTab from "./TransactionsTab";

export default function UserDashboardRenderer() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dashboard";

  return (
    <>
      {tab === "dashboard" && <UserDashboard />}
      {tab === "consultations" && <MyConsultationsTab />}
      {tab === "services" && <ActiveServicesTab />}
      {tab === "transactions" && <TransactionsTab />}
    </>
  );
}
