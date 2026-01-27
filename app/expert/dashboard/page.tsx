import LawyerDashboardClient from "@/components/expert/LawyerDashboardClient";
import { Suspense } from "react";

export default function LawyerDashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LawyerDashboardClient />
    </Suspense>
  );
}
