"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 h-16 flex items-center px-10 rounded-b-md">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.location.replace("/")}
      >
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
          <img src="/logoLawizer.png" alt="Lawizer Logo" className="w-6 h-6" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
        </div>
      </div>
    </header>
  );
}
