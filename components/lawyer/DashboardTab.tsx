"use client";

import { fetchAdvocateDashboard, fetchAdvocateProfile } from "@/lib/apis/api";
import { useEffect, useState } from "react";

export default function DashboardTab() {
  const [profile, setProfile] = useState<any>(null);
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const profileRes = await fetchAdvocateProfile();
      const dashboardRes = await fetchAdvocateDashboard();

      if (profileRes.success) setProfile(profileRes.profile);
      if (dashboardRes.success) setDashboard(dashboardRes.dashboard);

      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading dashboard...</p>;
  }

  return (
    <div className="pt-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Welcome, {profile?.name || "Lawyer"}
      </h1>
      <p className="text-gray-500 mb-8">
        Manage your consultations, clients, and profile from one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-3 hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zM4 10v6a2 2 0 002 2h8a2 2 0 002-2v-6H4z" />
            </svg>
            <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
          </div>
          <p className="text-gray-500 text-sm">
            You have{" "}
            <span className="font-medium">
              {dashboard?.upcomingBookings || 0}
            </span>{" "}
            consultations this week.
          </p>
        </div>

        {/* Profile Status */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-3 hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            <h2 className="text-lg font-semibold">Profile Status</h2>
          </div>
          <p
            className={`text-sm ${
              profile?.isProfileComplete ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {profile?.isProfileComplete ? "Complete ✅" : "Incomplete ⚠️"}
          </p>
        </div>

        {/* Total Earnings */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-3 hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm1 11H9v-2h2zm0-4H9V5h2z" />
            </svg>
            <h2 className="text-lg font-semibold">Total Earnings</h2>
          </div>
          <p className="text-gray-500 text-sm">
            ₹
            <span className="font-medium">{dashboard?.totalEarnings || 0}</span>{" "}
            this month.
          </p>
        </div>
      </div>
    </div>
  );
}
