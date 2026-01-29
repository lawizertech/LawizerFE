// "use client";

// import { useEffect, useState } from "react";
// import { Calendar } from "lucide-react";
// import { getUserBookings } from "@/lib/apis/api";
// import { useRouter } from "next/navigation";

// interface Booking {
//   bookingId: string;
//   expertName: string;
//   expertType: string;
//   status: string;
//   rate?: string;
//   bookingDate: any;
//   createdAt: any;
// }

// const defaultStatusUI = {
//   border: "border-gray-200",
//   bg: "bg-gray-50",
//   text: "text-gray-600",
//   badge: "bg-gray-100 text-gray-700",
//   clickable: false,
// };

// const statusUI: Record<string, any> = {
//   scheduled: {
//     bg: "bg-white",
//     border: "border-blue-400",
//     badge: "bg-blue-100 text-blue-700",
//     clickable: true,
//   },
//   confirmed: {
//     bg: "bg-white",
//     border: "border-blue-400",
//     badge: "bg-blue-100 text-blue-700",
//     clickable: true,
//   },
//   accepted: {
//     bg: "bg-green-50",
//     border: "border-green-400",
//     badge: "bg-green-100 text-green-700",
//     clickable: false,
//   },
//   completed: {
//     bg: "bg-gray-50",
//     border: "border-gray-300",
//     badge: "bg-gray-200 text-gray-700",
//     clickable: false,
//   },
//   cancelled: {
//     bg: "bg-white",
//     border: "border-red-400",
//     badge: "bg-red-100 text-red-700",
//     clickable: false,
//   },
// };

// export default function DashboardPage() {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await getUserBookings();
//         setBookings(res.consultations || []);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleBookingClick = (b: Booking) => {
//     const ui = statusUI[b.status] ?? defaultStatusUI;
//     if (!ui.clickable) return;
//     router.push(`/user/dashboard/connect/${b.bookingId}`);
//   };

//   if (loading) return <p>Loading your bookings...</p>;

//   if (bookings.length === 0)
//     return (
//       <div className="mt-10 text-center text-gray-500 text-lg">
//         No bookings have been made yet.
//       </div>
//     );

//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-6 text-gray-900">
//         Your Appointments
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookings.map((b) => {
//           const ui = statusUI[b.status] ?? defaultStatusUI;

//           return (
//             <div
//               key={b.bookingId}
//               onClick={() => handleBookingClick(b)}
//               className={`
//         rounded-2xl p-6 border-2 transition
//         ${ui.bg} ${ui.border}
//         ${
//           ui.clickable
//             ? "cursor-pointer hover:shadow-2xl"
//             : "opacity-90 cursor-not-allowed"
//         }
//       `}
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {b.expertName}
//                 </h3>

//                 <span
//                   className={`text-xs px-3 py-1 rounded-full font-medium ${ui.badge}`}
//                 >
//                   {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
//                 </span>
//               </div>

//               <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
//                 <Calendar size={14} />
//                 {new Date(b.bookingDate._seconds * 1000).toLocaleDateString(
//                   "en-IN",
//                 )}
//               </div>

//               {ui.clickable && (
//                 <div className="mt-3 text-xs font-medium text-indigo-600">
//                   Click to connect →
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import UserDashboardRenderer from "@/components/user/UserDashboardRenderer";
import { Suspense } from "react";

export default function ExpertDashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserDashboardRenderer />
    </Suspense>
  );
}
