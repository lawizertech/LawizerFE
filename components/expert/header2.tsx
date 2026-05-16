"use client";

import { useRouter } from "next/navigation";

export default function Header2() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full bg-white border border-b z-50 h-16 flex items-center px-10 rounded-b-md">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
          <img src="/logoLawizer.jpg" alt="Lawizer Logo" className="w-7 h-7" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
        </div>
      </div>
    </header>
  );
}
