"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/client/header";
import { Footer } from "@/components/client/footer";
import Header2 from "../expert/header2";
import CallbackModal from "./CallbackModal";
import { useCallback } from "@/context/callbackContext";
import BackButton from "@/components/client/BackButton";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isOpen, serviceName, closeCallback } = useCallback();

  const hideLayout = pathname.startsWith("/expert") || pathname.startsWith("/user");

  return (
    <>
      {!hideLayout && (
        <div className="w-full flex justify-center fixed top-4 z-50">
          <Header />
        </div>
      )}

      <BackButton />

      {children}

      {!hideLayout && <Footer />}

      {!hideLayout && <CallbackModal isOpen={isOpen} onClose={closeCallback} serviceName={serviceName} />}
    </>
  );
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>;
}
