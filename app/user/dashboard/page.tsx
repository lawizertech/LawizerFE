import UserDashboardRenderer from "@/components/user/UserDashboardRenderer";
import { Suspense } from "react";

export default function ExpertDashboardPage() {
 return (
 <Suspense fallback={<div>Loading...</div>}>
 <UserDashboardRenderer />
 </Suspense>
 );
}
