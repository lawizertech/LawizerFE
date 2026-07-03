"use client";

import { serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
import { Calendar, Clock, Users, IndianRupee, CheckCircle, FileText } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* TYPES */
/* -------------------------------------------------------------------------- */

type UserProfile = {
 uid: string;
 name: string;
 email: string;
};

type UpcomingBooking = {
 id: string;
 serviceName: string;
 expertName: string;
 date: string;
 time: string;
 duration: number;
 fee: number;
 status: "pending" | "confirmed" | "cancelled";
};

type TopExpert = {
 uid: string;
 name: string;
 avatar?: string;
 specialization?: string;
 rating?: number;
 experience?: number;
};

type UserDashboard = {
 upcomingCount: number;
 completedCount: number;
 expertsConsulted: number;
 totalSpent: number;
 upcomingBookings: UpcomingBooking[];
 topExperts: TopExpert[];

 /* services */
 totalServices: number;
 activeServices: number;
 completedServices: number;
 pendingServiceDocuments: number;
};

/* -------------------------------------------------------------------------- */
/* SAFE DEFAULTS */
/* -------------------------------------------------------------------------- */

const EMPTY_DASHBOARD: UserDashboard = {
 upcomingCount: 0,
 completedCount: 0,
 expertsConsulted: 0,
 totalSpent: 0,
 upcomingBookings: [],
 topExperts: [],
 totalServices: 0,
 activeServices: 0,
 completedServices: 0,
 pendingServiceDocuments: 0,
};

const PRIMARY = "#c92c41";

/* -------------------------------------------------------------------------- */
/* HELPERS */
/* -------------------------------------------------------------------------- */

const formatDateTime = (value: any) => {
 if (!value?._seconds) {
 return { date: "-", time: "-" };
 }

 const d = new Date(value._seconds * 1000);

 return {
 date: d.toLocaleDateString("en-IN", {
 day: "2-digit",
 month: "short",
 year: "numeric",
 }),
 time: d.toLocaleTimeString("en-IN", {
 hour: "2-digit",
 minute: "2-digit",
 }),
 };
};

/* -------------------------------------------------------------------------- */
/* COMPONENT */
/* -------------------------------------------------------------------------- */

export default function UserDashboardTab() {
 const [profile, setProfile] = useState<UserProfile | null>(null);
 const [dashboard, setDashboard] = useState<UserDashboard>(EMPTY_DASHBOARD);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 const load = async () => {
 try {
 const [profileRes, dashRes] = await Promise.all([
 serverApi.get("/api/user/profile"),
 serverApi.get("/api/user/dashboard"),
 ]);

 /* PROFILE */
 if (profileRes.data?.profile) {
 setProfile(profileRes.data.profile);
 }

 /* DASHBOARD */
 if (dashRes.data?.dashboard) {
 const raw = dashRes.data.dashboard;

 setDashboard({
 upcomingCount: raw.upcomingCount ?? 0,
 completedCount: raw.completedCount ?? 0,
 expertsConsulted: raw.expertsConsulted ?? 0,
 totalSpent: raw.totalSpent ?? 0,

 upcomingBookings: (raw.upcomingBookings || []).map((b: any) => {
 const { date, time } = formatDateTime(b.bookingDate);

 return {
 id: b.bookingId,
 serviceName: b.serviceName || "Consultation",
 expertName: b.expertName,
 date,
 time,
 duration: b.callType === "video" ? 60 : 30,
 fee: b.rate ?? 0,
 status: b.status,
 };
 }),
 topExperts: raw.topExperts || [],

 totalServices: raw.totalServices ?? 0,
 activeServices: raw.activeServices ?? 0,
 completedServices: raw.completedServices ?? 0,
 pendingServiceDocuments: raw.pendingServiceDocuments ?? 0,
 });
 }
 } finally {
 setLoading(false);
 }
 };

 load();
 }, []);

 if (loading) {
 return <p className="mt-10 text-gray-500">Loading dashboard…</p>;
 }

 /* -------------------------------------------------------------------------- */
 /* UI */
 /* -------------------------------------------------------------------------- */

 return (
 <div className="space-y-10">
 {/* HEADER */}
 <div>
 <h1 className="text-2xl font-semibold">Dashboard</h1>
 <p className="text-gray-500 mt-1">
 Welcome back,{" "}
 <span className="font-medium">{profile?.name ?? "User"}</span>
 </p>
 <p className="text-sm text-gray-400">
 Here’s your legal consultation overview
 </p>
 </div>

 {/* STATS */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <Stat
 label="Upcoming Sessions"
 value={dashboard.upcomingCount}
 icon={Calendar}
 />
 <Stat
 label="Completed Consultations"
 value={dashboard.completedCount}
 icon={Clock}
 />
 <Stat
 label="Experts Consulted"
 value={dashboard.expertsConsulted}
 icon={Users}
 />
 <Stat
 label="Total Spent"
 value={`₹${dashboard.totalSpent}`}
 icon={IndianRupee}
 />
 </div>

 {/* SERVICE STATS */}
 <div>
 <h2 className="text-lg font-semibold mb-4">Your Services</h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <Stat
 label="Total Services"
 value={dashboard.totalServices}
 icon={FileText}
 />
 <Stat
 label="Active Services"
 value={dashboard.activeServices}
 icon={Clock}
 />
 <Stat
 label="Pending Documents"
 value={dashboard.pendingServiceDocuments}
 icon={Calendar}
 />
 <Stat
 label="Completed Services"
 value={dashboard.completedServices}
 icon={CheckCircle}
 />
 </div>
 </div>

 {/* MAIN GRID */}
 <div className="grid lg:grid-cols-3 gap-8">
 {/* UPCOMING BOOKINGS */}
 <div className="lg:col-span-2 space-y-4">
 <div className="flex justify-between items-center">
 <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
 <button className="text-sm text-[#c92c41]">View All</button>
 </div>

 {dashboard.upcomingBookings.length === 0 ? (
 <EmptyCard text="No upcoming bookings" />
 ) : (
 dashboard.upcomingBookings.map((b) => (
 <BookingCard key={b.id} booking={b} />
 ))
 )}
 </div>

 {/* TOP EXPERTS */}
 <div className="space-y-4">
 <div className="flex justify-between items-center">
 <h2 className="text-lg font-semibold">Top Experts</h2>
 <button className="text-sm text-[#c92c41]">View All</button>
 </div>

 {dashboard.topExperts.length === 0 ? (
 <EmptyCard text="No experts yet" />
 ) : (
 dashboard.topExperts.map((e) => (
 <ExpertCard key={e.uid} expert={e} />
 ))
 )}
 </div>
 </div>
 </div>
 );
}

/* -------------------------------------------------------------------------- */
/* UI PIECES */
/* -------------------------------------------------------------------------- */

function Stat({
 label,
 value,
 icon: Icon,
}: {
 label: string;
 value: number | string;
 icon: React.ElementType;
}) {
 return (
 <div className="bg-white rounded-xl p-5 flex justify-between items-center">
 <div>
 <p className="text-sm text-gray-500">{label}</p>
 <p className="text-3xl font-semibold mt-1">{value}</p>
 </div>
 <div className="h-12 w-12 rounded-xl bg-[#c92c4112] flex items-center justify-center">
 <Icon size={22} color={PRIMARY} />
 </div>
 </div>
 );
}

function BookingCard({ booking }: { booking: UpcomingBooking }) {
 return (
 <div className="bg-white rounded-xl p-5 space-y-2">
 <div className="flex justify-between">
 <h3 className="font-medium">{booking.serviceName}</h3>
 <span
 className={`text-xs px-2 py-1 rounded-full ${
 booking.status === "confirmed"
 ? "bg-green-100 text-green-700"
 : booking.status === "pending"
 ? "bg-yellow-100 text-yellow-700"
 : "bg-red-100 text-red-700"
 }`}
 >
 {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
 </span>
 </div>

 <p className="text-sm text-gray-500">{booking.expertName}</p>
 <p className="text-xs text-gray-400">
 {booking.date} · {booking.time} ({booking.duration} min)
 </p>

 <div className="flex justify-between items-center pt-2">
 <span className="font-medium">₹{booking.fee}</span>
 {booking.status === "pending" && (
 <button className="text-sm text-red-500">Cancel</button>
 )}
 </div>
 </div>
 );
}

function ExpertCard({ expert }: { expert: TopExpert }) {
 return (
 <div className="bg-white rounded-xl p-4 flex gap-4">
 <div className="h-12 w-12 rounded-full bg-gray-200" />
 <div className="flex-1">
 <p className="font-medium">{expert.name}</p>
 <p className="text-xs text-gray-400">
 ⭐ {expert.rating ?? 0} · {expert.experience ?? 0} yrs
 </p>
 <button className="mt-2 text-sm bg-[#c92c41] text-white px-3 py-1 rounded-lg">
 Book Consultation
 </button>
 </div>
 </div>
 );
}

function EmptyCard({ text }: { text: string }) {
 return (
 <div className="bg-white rounded-xl p-10 text-center text-gray-500">
 {text}
 </div>
 );
}
