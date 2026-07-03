"use client";

export default function UserDashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {

 return (
 <div className="h-screen overflow-scroll bg-[#fafafa]">
 {/* MAIN CONTENT */}
 <main
 className=" 
 overflow-y-auto"
 >
 <div className="overflow-hidden">{children}</div>
 </main>
 </div>
 );
}
