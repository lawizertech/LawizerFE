"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/client/header";
import { Footer } from "@/components/client/footer";
import Header2 from "../expert/header2";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname.startsWith("/lawyer");

  return (
    <>
      {!hideLayout && (
        <div className="w-full flex justify-center fixed top-4 z-50">
          <Header />
        </div>
      )}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
