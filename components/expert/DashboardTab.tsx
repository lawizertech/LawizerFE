"use client";

import { serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, TrendingUp, IndianRupee, Clock, ArrowRight, User, Bell, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
        console.error("Failed to load dashboard data", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#d62038] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Map case statuses to user-friendly badge styles
  const getStatusBadge = (status: string) => {
    const cleanStatus = (status || "").toLowerCase();
    switch (cleanStatus) {
      case "active":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            In Progress
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Completed
          </span>
        );
      case "pending_payment":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Pending Payment
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            {status || "Unknown"}
          </span>
        );
    }
  };

  return (
    <motion.div
      className="py-6 space-y-8 bg-[#fafafa]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* GREETING HEADER */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Good day, {profile?.name || "Advocate"}
        </h2>
        <p className="text-sm text-gray-500">
          Welcome to your Case Command Center. Review active client matters and pending items below.
        </p>
      </div>

      {/* METRICS GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
      >
        <StatCard
          title="Assigned Cases"
          value={dashboard?.cases?.length ?? 0}
          icon={Briefcase}
          description="Total active client matters"
        />
        <StatCard
          title="Active Services"
          value={dashboard?.activeServices ?? 0}
          icon={TrendingUp}
          description="Services currently in process"
        />
        <StatCard
          title="Today's Sessions"
          value={dashboard?.todayBookings ?? 0}
          icon={Clock}
          description="Scheduled consultations"
        />
        <StatCard
          title="Total Earnings"
          value={`₹${(dashboard?.totalEarnings ?? 0).toLocaleString("en-IN")}`}
          icon={IndianRupee}
          description="All-time processed payouts"
        />
      </motion.div>

      {/* MAIN TWO-COLUMN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: ASSIGNED CASES */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Recent Assigned Cases</h3>
              <p className="text-xs text-gray-500">Active client matters requiring monitoring</p>
            </div>
            <Link
              href="/expert/dashboard?tab=chats"
              className="text-xs font-bold text-[#d62038] hover:text-[#a8233a] flex items-center gap-1 transition"
            >
              Go to My Cases <ArrowRight size={14} />
            </Link>
          </div>

          {!dashboard?.cases || dashboard.cases.length === 0 ? (
            <div className="rounded-xl border border-[#ebebeb] bg-white p-8 text-center text-sm font-medium text-gray-500 shadow-xs">
              No cases currently assigned.
            </div>
          ) : (
            <div className="space-y-3">
              {dashboard.cases.slice(0, 5).map((c: any) => (
                <div
                  key={c.caseId}
                  className="bg-white rounded-xl p-5 border border-[#ebebeb] hover:border-rose-200 hover:shadow-xs transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded">
                        #{c.caseId.substring(0, 8).toUpperCase()}
                      </span>
                      {getStatusBadge(c.status)}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mt-1">
                      {c.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Client: <span className="font-semibold text-gray-700">{c.client?.name || c.client?.email || "Assigned Client"}</span>
                    </p>
                  </div>

                  <div className="flex items-center self-end sm:self-center">
                    <Link
                      href={`/expert/dashboard?tab=chats&caseId=${c.caseId}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d62038] hover:bg-[#b0162a] text-white text-xs font-bold transition shadow-sm"
                    >
                      <span>Open Workspace</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: QUICK ACTIONS */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
              <p className="text-xs text-gray-500">Direct links to dashboard tabs</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <QuickActionButton
                label="Go to My Cases"
                description="Manage chats & documents"
                icon={Briefcase}
                href="/expert/dashboard?tab=chats"
              />
              <QuickActionButton
                label="View Notifications"
                description="Check recent system alerts"
                icon={Bell}
                href="/expert/dashboard?tab=notifications"
              />
              <QuickActionButton
                label="Advocate Profile"
                description="Review professional credentials"
                icon={User}
                href="/expert/dashboard?tab=profile"
              />
            </div>
          </div>
        </div>

      </div>

      {/* RECENT NOTIFICATIONS SECTION */}
      <div className="space-y-4 pt-4 border-t border-[#ebebeb]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Recent Notifications</h3>
            <p className="text-xs text-gray-500">General alerts and system logs</p>
          </div>
          <Link
            href="/expert/dashboard?tab=notifications"
            className="text-xs font-bold text-[#d62038] hover:text-[#a8233a] flex items-center gap-1 transition"
          >
            View All Notifications <ArrowRight size={14} />
          </Link>
        </div>

        {!dashboard?.recentNotifications || dashboard.recentNotifications.length === 0 ? (
          <div className="rounded-xl border border-[#ebebeb] bg-white p-8 text-center text-sm font-medium text-gray-500 shadow-xs">
            No recent alerts or logs.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dashboard.recentNotifications.slice(0, 3).map((n: any) => (
              <div
                key={n.id}
                className="bg-white rounded-xl p-5 border border-[#ebebeb] flex flex-col justify-between hover:border-rose-100 transition-all duration-200 shadow-xs"
              >
                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                    {n.type?.replace("_", " ") || "Alert"}
                  </span>
                  <h5 className="font-bold text-sm text-gray-900">
                    {n.payload?.title || "Notification"}
                  </h5>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {n.payload?.message}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-50 text-[10px] text-gray-400 font-medium">
                  {new Date(n.created_at).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* =========================
   SUB-COMPONENTS
   ========================= */

function StatCard({
  title,
  value,
  icon: Icon,
  description,
}: {
  title: string;
  value: any;
  icon: any;
  description: string;
}) {
  return (
    <motion.div
      className="bg-white rounded-xl p-5 border border-[#ebebeb] flex justify-between items-center shadow-xs"
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.15 }}
    >
      <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-gray-950 tabular-nums">{value}</p>
        <p className="text-[10px] text-gray-400 font-medium">{description}</p>
      </div>

      <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[#d62038]/5">
        <Icon size={24} className="text-[#d62038]" />
      </div>
    </motion.div>
  );
}

function QuickActionButton({
  label,
  description,
  icon: Icon,
  href,
}: {
  label: string;
  description: string;
  icon: any;
  href: string;
}) {
  return (
    <Link href={href} className="group block w-full">
      <div className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-[#ebebeb] group-hover:border-rose-200 group-hover:shadow-xs transition-all duration-200 text-left">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-[#d62038]/5 group-hover:bg-[#d62038]/10 transition-colors">
            <Icon size={18} className="text-[#d62038]" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900 group-hover:text-[#d62038] transition-colors">
              {label}
            </div>
            <div className="text-xs text-gray-400 font-medium">
              {description}
            </div>
          </div>
        </div>
        <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>
    </Link>
  );
}
