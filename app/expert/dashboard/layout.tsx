import DashboardLayoutClient from "@/components/expert/ExpertDashboardLayout";
import { Suspense } from "react";

export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <Suspense fallback={<div className="p-6">Loading dashboard...</div>}>
 <DashboardLayoutClient>{children}</DashboardLayoutClient>
 </Suspense>
 );
}
