"use client";

import { useState, useEffect } from "react";
import { Bell, Send } from "lucide-react";
import { getAccessToken } from "@/lib/auth/tokenStore";

export function ExpertNotificationsTab() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [cases, setCases] = useState<any[]>([]);
  const [casesLoading, setCasesLoading] = useState(true);
  const [caseId, setCaseId] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setCasesLoading(true);
        const token = getAccessToken();
        const headers: Record<string, string> = {};
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }
        const res = await fetch("/api/expert/dashboard", { headers });
        const data = await res.json();
        if (data.success && data.dashboard?.cases) {
          setCases(data.dashboard.cases);
        } else {
          setCases([]);
        }
      } catch (err) {
        console.error("Failed to fetch cases for notifications:", err);
      } finally {
        setCasesLoading(false);
      }
    };

    fetchCases();
  }, []);

  const fetchNotifications = async () => {
    if (!caseId) return;
    try {
      setLoading(true);
      const token = getAccessToken();
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/cases/${caseId}/notifications/user`, { headers });
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

  const handleSendToAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message || !caseId) return;

    try {
      setSending(true);
      const token = getAccessToken();
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/cases/${caseId}/notifications/expert/send-to-admin`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          payload: { title, message }
        }),
      });
      const result = await res.json();
      if (result.success !== false) {
        alert(`Sent notification to Admin!`);
        setTitle("");
        setMessage("");
      } else {
        alert(result.message || "Failed to send to admin");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send notification");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="p-6 space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-[#ebebeb] p-6 mb-6">
        <label className="block text-sm font-bold text-gray-900 mb-2">Select Case to view and send notifications</label>
        {casesLoading ? (
          <div className="text-gray-500 text-sm">Loading assigned cases...</div>
        ) : cases.length === 0 ? (
          <div className="text-gray-500 text-sm italic">No assigned cases found.</div>
        ) : (
          <select
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            className="w-full max-w-md bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 outline-none focus:border-[#c92c41] transition-colors"
          >
            <option value="">Select a case</option>
            {cases.map((c) => {
              const cid = c.caseId || c.id;
              const formattedId = cid ? cid.substring(0, 8).toUpperCase() : "";
              return (
                <option key={cid} value={cid}>
                  {c.caseType || c.title || "Consultation"} — #{formattedId}
                </option>
              );
            })}
          </select>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#ebebeb] p-6">
        <h2 className="text-xl font-bold text-[#c92c41] mb-4 flex items-center gap-2">
          <Bell size={20} />
          My Notifications
        </h2>
        
        {!caseId ? (
          <div className="text-gray-500 text-sm italic">Please select a case to view notifications.</div>
        ) : loading ? (
          <div className="text-gray-500 text-sm">Loading notifications...</div>
        ) : notifications.length === 0 ? (
          <div className="text-gray-500 text-sm italic">You have no new notifications.</div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notif: any) => (
              <div key={notif.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h3 className="text-gray-900 font-bold text-sm">{notif.payload?.title || "No Title"}</h3>
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

      <div className="bg-white rounded-2xl shadow-sm border border-[#ebebeb] p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
          <Send size={20} />
          Send Notification to Admin
        </h2>
        
        <form onSubmit={handleSendToAdmin} className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
              placeholder="e.g. Leave Request"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 h-32"
              placeholder="Enter details here..."
            />
          </div>
          
          <button
            type="submit"
            disabled={sending || !caseId}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold disabled:opacity-50 transition"
          >
            {sending ? "Sending..." : "Send to Admin"}
          </button>
        </form>
      </div>
    </div>
  );
}
