"use client";

import { serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
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
        const [profileRes, dashboardRes] = await Promise.all([
          serverApi.get("/api/expert/profile"),
          serverApi.get("/api/expert/dashboard"),
        ]);

        if (profileRes.data.success) setProfile(profileRes.data.profile);
        if (dashboardRes.data.success) setDashboard(dashboardRes.data.dashboard);
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
          sub="+15% this month"
          positive
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
            <h2 className="text-xl font-semibold">Pending Requests</h2>
            <button className="text-sm font-medium" style={{ color: PRIMARY }}>
              View All
            </button>
          </div>

          <div
            className="rounded-2xl p-10 text-center bg-white text-lg
 border border-transparent hover:border-[#c92c4130]
 transition-colors duration-200 font-light text-[#373737]"
          >
            No pending requests
          </div>
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
              <ActionButton label="Update Schedule" icon={Calendar} />
              <ActionButton label="View All Bookings" icon={Clock} />
            </div>
          </div>
        </motion.div>
      </div>
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

function ActionButton({ label, icon: Icon }: { label: string; icon: any }) {
  return (
    <motion.button
      className="w-full flex items-center gap-4 px-5 py-3
 rounded-2xl bg-white text-base font-medium
 border border-transparent"
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
}
