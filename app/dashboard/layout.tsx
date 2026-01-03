"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const isChats = pathname.startsWith("/dashboard/chats");
  const isCalls = pathname.startsWith("/dashboard/calls");

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow rounded-tr-3xl rounded-br-3xl border-r p-6 hidden md:flex flex-col pt-24">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Menu</h2>

        <div className="flex flex-col gap-4">
          {/* Chats */}
          <button
            onClick={() => router.push("/dashboard/chats")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition
              ${
                isChats
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <MessageCircle size={20} />
            Chats
          </button>

          {/* Calls */}
          <button
            onClick={() => router.push("/dashboard/calls")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition
              ${
                isCalls
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <PhoneCall size={20} />
            Calls
            <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-[2px] rounded-full">
              🚧
            </span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 pt-24">{children}</main>
    </div>
  );
}
