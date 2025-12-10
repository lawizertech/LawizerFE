import StartConsultationPage from "@/components/client/StartConsultationClient";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StartConsultationPage />
    </Suspense>
  );
}
