"use client";

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export function UserNotificationsTab() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [caseId, setCaseId] = useState("");

  const fetchNotifications = async () => {
    if (!caseId) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/cases/${caseId}/notifications/user`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setNotifications(data);
      } else {
        setNotifications([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (caseId) {
      fetchNotifications();
    } else {
      setNotifications([]);
      setLoading(false);
    }
  }, [caseId]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto w-full pb-32">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3">
          <Bell size={28} className="text-[#c92c41]" />
          My Notifications
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-medium">
          Stay updated with messages from Lawizer admin.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8">
        <label className="block text-sm font-bold text-gray-900 mb-2">Select Case ID to view notifications</label>
        <input
          type="text"
          value={caseId}
          onChange={(e) => setCaseId(e.target.value)}
          className="w-full max-w-md bg-gray-50 border border-gray-300 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-[#c92c41]"
          placeholder="Enter Case ID..."
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 sm:p-6 lg:p-8">
          {!caseId ? (
            <div className="text-gray-500 text-sm italic">Please enter a Case ID to view notifications.</div>
          ) : loading ? (
            <div className="text-gray-500 text-sm">Loading notifications...</div>
          ) : notifications.length === 0 ? (
            <div className="text-gray-500 text-sm italic">You have no new notifications.</div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notif: any) => (
                <div key={notif.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="text-gray-900 font-bold text-base">{notif.payload?.title || "No Title"}</h3>
                  <p className="text-gray-700 text-sm mt-1">{notif.payload?.message}</p>
                  <div className="text-gray-500 text-xs mt-3 flex justify-between">
                    <span>Type: {notif.type}</span>
                    <span>{new Date(notif.created_at).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
