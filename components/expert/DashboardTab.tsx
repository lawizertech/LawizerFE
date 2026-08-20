"use client";

import { serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, User, Bell, ChevronRight } from "lucide-react";
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
          Good day, {profile?.name || "Professional"}
        </h2>
        <p className="text-sm text-gray-500">
          Welcome to your Case Command Center. Review active client matters and pending items below.
        </p>
      </div>

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
            <div className="rounded-xl border border-[#ebebeb] bg-white p-10 text-center shadow-xs flex flex-col items-center justify-center gap-2">
              <Briefcase size={36} className="text-gray-300" />
              <h4 className="font-bold text-gray-900 text-sm mt-2">No cases assigned yet</h4>
              <p className="text-xs text-gray-500 max-w-sm">
                Assigned cases will appear here once an admin assigns a matter to you.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {dashboard.cases.slice(0, 3).map((c: any) => (
                <div
                  key={c.caseId}
                  className="bg-white rounded-xl p-6 border border-[#ebebeb] hover:border-[#d62038]/30 hover:shadow-xs transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        #{c.caseId.substring(0, 8).toUpperCase()}
                      </span>
                      {getStatusBadge(c.status)}
                    </div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {c.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Client: <span className="font-semibold text-gray-700">{c.client?.name || c.client?.email || "Assigned Client"}</span>
                    </p>
                  </div>

                  <div className="flex items-center self-end sm:self-center">
                    <Link
                      href={`/expert/dashboard?tab=chats&caseId=${c.caseId}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#d62038] hover:text-[#a8233a] transition-colors"
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
              label="My Profile"
              description="Review professional credentials"
              icon={User}
              href="/expert/dashboard?tab=profile"
            />
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
          <div className="bg-white rounded-xl border border-[#ebebeb] divide-y divide-[#ebebeb] overflow-hidden shadow-xs">
            {dashboard.recentNotifications.slice(0, 3).map((n: any) => (
              <div
                key={n.id}
                className="p-5 hover:bg-gray-50/50 transition-all duration-200 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                  <div className="min-w-[120px] sm:min-w-[140px]">
                    <span className="text-[10px] font-mono font-bold text-[#d62038] uppercase tracking-wide">
                      [{n.type?.replace("_", " ").toUpperCase() || "ALERT"}]
                    </span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h5 className="font-bold text-sm text-gray-900">
                      {n.payload?.title || "Notification"}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {n.payload?.message}
                    </p>
                  </div>
                </div>
                <div className="text-[10px] text-gray-400 font-medium whitespace-nowrap self-end md:self-start md:pt-1">
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
