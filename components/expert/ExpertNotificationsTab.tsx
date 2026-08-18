"use client";

import { useState, useEffect } from "react";
import { Bell, Send, Loader2, Info, ChevronRight, Briefcase } from "lucide-react";
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
    <div className="space-y-6 font-sans pb-10">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Bell size={22} className="text-[#c92c41]" />
            System Alerts & Dispatched Logs
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Select a case channel to view history and dispatch direct updates to the administrator.
          </p>
        </div>
      </div>

      {/* Case Selector Card */}
      <div className="bg-white rounded-2xl shadow-xs border border-gray-200/80 p-6">
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-0.5">
          Litigation Channel
        </label>
        
        {casesLoading ? (
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium py-2">
            <Loader2 size={16} className="animate-spin text-[#d62038]" />
            <span>Loading assigned client cases...</span>
          </div>
        ) : cases.length === 0 ? (
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium py-2">
            <Info size={16} className="text-gray-400" />
            <span>No assigned litigation cases found.</span>
          </div>
        ) : (
          <div className="relative max-w-md w-full">
            <select
              value={caseId}
              onChange={(e) => setCaseId(e.target.value)}
              className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 outline-none focus:border-[#d62038] focus:ring-1 focus:ring-[#d62038]/10 transition duration-150 cursor-pointer font-medium"
            >
              <option value="">Select a litigation case...</option>
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
          </div>
        )}
      </div>

      {/* Main Double Column Panel (visible when case selected) */}
      {!caseId ? (
        <div className="bg-white rounded-2xl border border-gray-200/80 p-8 text-center shadow-xs flex flex-col items-center justify-center min-h-[300px]">
          <Bell size={36} className="text-gray-300 mb-3" />
          <p className="text-xs font-bold text-gray-600">No Case Selected</p>
          <p className="text-[11px] text-gray-400 max-w-xs mt-1">
            Please choose an active litigation case from the selector dropdown to review dispatch logs or send alerts.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Alerts History */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/80 shadow-xs p-6 space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Bell size={16} className="text-[#d62038]" />
                Direct Notifications
              </h2>
              <p className="text-[11px] text-gray-400">
                Direct client logs and status alerts received for this litigation case.
              </p>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <Loader2 size={24} className="animate-spin text-[#d62038] mb-2" />
                <span className="text-xs font-semibold">Loading logs...</span>
              </div>
            ) : notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                <Bell size={28} className="text-gray-300 mb-1.5" />
                <p className="text-xs font-bold text-gray-700">No notifications yet</p>
                <p className="text-[10px] text-gray-400 max-w-xs mt-0.5">
                  Any status changes or user communications will be registered here.
                </p>
              </div>
            ) : (
              <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                {notifications.map((notif: any) => (
                  <div
                    key={notif.id}
                    className="bg-[#fafafa] border border-gray-200/80 hover:border-gray-300 rounded-xl p-4 transition duration-150 shadow-3xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-gray-950 font-bold text-xs">
                        {notif.payload?.title || "Direct Update"}
                      </h3>
                      <span className="text-[9px] font-mono font-bold text-gray-500 shrink-0 bg-gray-150 border border-gray-200/60 px-2 py-0.5 rounded">
                        {notif.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs mt-2 leading-relaxed font-medium">
                      {notif.payload?.message}
                    </p>
                    <div className="text-gray-450 text-[9px] mt-3 text-right font-semibold">
                      {new Date(notif.created_at).toLocaleString("en-IN")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Dispatch Alert to Admin */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200/80 shadow-xs p-6 space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Send size={16} className="text-blue-600" />
                Send Alert to Admin
              </h2>
              <p className="text-[11px] text-gray-400">
                Dispatch an emergency flag or administrative request to the case manager dashboard logs.
              </p>
            </div>

            <form onSubmit={handleSendToAdmin} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 px-0.5">
                  Alert Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#d62038] focus:ring-1 focus:ring-[#d62038]/10 font-medium"
                  placeholder="e.g. Missing PAN Card Document"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 px-0.5">
                  Detailed Message
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 outline-none focus:border-[#d62038] focus:ring-1 focus:ring-[#d62038]/10 h-32 resize-none font-sans font-medium"
                  placeholder="Provide all context so the administrator can resolve this matter quickly..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition duration-150 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                {sending ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    <span>Dispatch Alert</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}
