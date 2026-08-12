"use client";

import { serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, IndianRupee, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY = "#c92c41";

export default function DashboardTab() {
  const [profile, setProfile] = useState<any>(null);
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileRes, dashboardRes, notifRes] = await Promise.all([
          serverApi.get("/api/expert/profile"),
          serverApi.get("/api/expert/dashboard"),
          serverApi.get("/api/expert/notifications").catch(() => ({ data: { notifications: [] } })),
        ]);

        if (profileRes.data.success) setProfile(profileRes.data.profile);
        if (dashboardRes.data.success) {
          setDashboard({
            ...dashboardRes.data.dashboard,
            recentNotifications: notifRes?.data?.notifications || [],
          });
        }
      } catch (err) {
        console.error("Failed to load dashboard", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <p className="mt-12 text-gray-500 text-lg">Loading dashboard…</p>;
  }

  return (
    <motion.div
      className="pt-4 space-y-14 bg-[#fafafa]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
        className="space-y-2"
      >
        {/* Greeting */}
        <p className="text-lg font-light text-[#373737]">
          Good day, <span className="font-semibold text-[#737373">{profile?.name || "Expert"}</span>
        </p>

        {/* Subtitle */}
        <p className="text-base font-light text-gray-500 max-w-xl">
          Here’s a quick overview of your legal practice and upcoming work.
        </p>
      </motion.div>

      {/* STATS */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <StatCard title="Pending Requests" value={dashboard?.pendingRequests ?? 0} icon={Clock} />
        <StatCard title="Today's Sessions" value={dashboard?.todayBookings ?? 0} icon={Calendar} />
        <StatCard title="Active Services" value={dashboard?.activeServices ?? 0} icon={TrendingUp} />
        <StatCard
          title="Total Earnings"
          value={`₹${dashboard?.totalEarnings ?? 0}`}
          icon={IndianRupee}
        />
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <motion.div
          className="lg:col-span-2 space-y-5"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Assigned Cases & Consultations</h2>
            <Link href="/expert/dashboard?tab=chats" className="text-sm font-bold hover:underline text-[#c92c41]">
              View All Chats →
            </Link>
          </div>

          {!dashboard?.cases || dashboard.cases.length === 0 ? (
            <div className="rounded-2xl p-10 text-center bg-white border border-gray-100 font-light text-gray-500 shadow-xs">
              No cases assigned yet.
            </div>
          ) : (
            <div className="space-y-4">
              {dashboard.cases.map((c: any) => (
                <div
                  key={c.caseId}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-rose-200 shadow-xs transition space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md">
                        #{c.caseId.substring(0, 8).toUpperCase()}
                      </span>
                      <h3 className="font-bold text-base text-gray-900 mt-1">{c.title}</h3>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                      {c.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-2 border-t border-gray-50 text-xs text-gray-600 gap-3">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold block uppercase">Client</span>
                      <span className="font-bold text-gray-900">{c.client?.name || c.client?.email || "Assigned Client"}</span>
                    </div>

                    <Link
                      href="/expert/dashboard?tab=chats"
                      className="px-4 py-2 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] text-white font-bold transition text-xs flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Open Chat Channel</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="space-y-10"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {/* QUICK ACTIONS */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Actions</h3>
            <div className="space-y-4">
              <ActionButton label="Update Schedule" icon={Calendar} href="/expert/dashboard?tab=profile" />
              <ActionButton label="View All Bookings" icon={Clock} href="/expert/dashboard?tab=bookings" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* RECENT NOTIFICATIONS */}
      <motion.div
        className="space-y-5 pt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Recent Notifications</h2>
          <Link href="/expert/dashboard?tab=notifications" className="text-sm font-bold hover:underline text-[#c92c41]">
            View All →
          </Link>
        </div>

        {!dashboard?.recentNotifications || dashboard.recentNotifications.length === 0 ? (
          <div className="rounded-2xl p-10 text-center bg-white border border-gray-100 font-light text-gray-500 shadow-xs">
            No recent notifications.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboard.recentNotifications.slice(0, 3).map((n: any) => (
              <div key={n.id} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-rose-200 transition-colors">
                <div>
                  <h3 className="font-semibold text-gray-900">{n.payload?.title || "Notification"}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{n.payload?.message}</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
                  <span className="font-medium capitalize px-2 py-0.5 bg-gray-100 rounded-md text-gray-600">{n.type?.replace('_', ' ')}</span>
                  <span>{new Date(n.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  sub,
  positive,
}: {
  title: string;
  value: any;
  icon: any;
  sub?: string;
  positive?: boolean;
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 border border-transparent flex justify-between items-center"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      whileHover={{
        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div>
        <p className="text-sm text-gray-500 tracking-wide">{title}</p>
        <p className="text-3xl font-semibold mt-2 tabular-nums">{value}</p>
        {sub && <p className={`text-sm ${positive ? "text-green-600" : "text-gray-500"}`}>{sub}</p>}
      </div>

      <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-[#c92c4112]">
        <Icon size={26} color={PRIMARY} />
      </div>
    </motion.div>
  );
}

function ActionButton({ label, icon: Icon, href }: { label: string; icon: any; href?: string }) {
  const content = (
    <motion.button
      className="w-full flex items-center gap-4 px-5 py-3
 rounded-2xl bg-white text-base font-medium
 border border-transparent text-left"
      whileHover={{
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        borderColor: "#c92c4130",
      }}
      whileTap={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.12)",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      <Icon size={20} color={PRIMARY} />
      <span className=" text-[#373737] font-medium">{label}</span>
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full">
        {content}
      </Link>
    );
  }

  return content;
}
