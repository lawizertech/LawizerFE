import ExpertDashboardClient from "@/components/expert/ExpertDashboardRenderer";
import { Suspense } from "react";

export default function ExpertDashboardPage() {
 return (
 <Suspense fallback={<div>Loading...</div>}>
 <ExpertDashboardClient />
 </Suspense>
 );
}
