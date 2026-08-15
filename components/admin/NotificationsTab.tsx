"use client";

import { useState, useEffect } from "react";
import { Send, Bell } from "lucide-react";
import { getAccessToken } from "@/lib/auth/tokenStore";

export function NotificationsTab() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [target, setTarget] = useState<"client" | "expert" | "both">("both");
  const [caseId, setCaseId] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const fetchNotifications = async () => {
    if (!caseId) return;
    try {
      setLoading(true);
      
      const token = getAccessToken();
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      
      const [resInbox, resSent] = await Promise.all([
        fetch(`/api/cases/${caseId}/notifications/admin`, { headers }),
        fetch(`/api/cases/${caseId}/notifications/admin/sent`, { headers })
      ]);
      
      const dataInbox = await resInbox.json();
      const dataSent = await resSent.json();
      
      const inboxArr = Array.isArray(dataInbox) ? dataInbox.map((n: any) => ({ ...n, source: "inbox" })) : [];
      const sentArr = Array.isArray(dataSent) ? dataSent.map((n: any) => ({ ...n, source: "sent" })) : [];
      
      const combined = [...inboxArr, ...sentArr];
      
      // Deduplicate ONLY when the same database notification ID appears in both responses
      const uniqueMap = new Map<string, any>();
      const duplicateIds: string[] = [];
      combined.forEach((item) => {
        if (item.id) {
          if (uniqueMap.has(item.id)) {
            duplicateIds.push(item.id);
          } else {
            uniqueMap.set(item.id, item);
          }
        } else {
          const fallbackId = `${item.created_at || Date.now()}-${Math.random()}`;
          uniqueMap.set(fallbackId, item);
        }
      });
      
      if (duplicateIds.length > 0) {
        console.warn("[NotificationsTab] Duplicate notification database IDs detected in response streams:", duplicateIds);
      }
      
      const deduplicated = Array.from(uniqueMap.values());
      
      // Sort by created_at descending
      deduplicated.sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      });
      
      setNotifications(deduplicated);
    } catch (err) {
      console.error("Error fetching admin notifications:", err);
      setNotifications([]);
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message || !caseId) return;

    try {
      setSending(true);
      const token = getAccessToken();
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/cases/${caseId}/notifications/admin/send`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          target,
          payload: { title, message }
        }),
      });
      const result = await res.json();
      alert(`Sent notification to ${result.count} users!`);
      setTitle("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Failed to send notification");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Send size={20} className="text-[#c92c41]" />
          Compose Notification
        </h2>
        
        <form onSubmit={handleSend} className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Case ID</label>
            <input
              type="text"
              required
              value={caseId}
              onChange={(e) => setCaseId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white outline-none focus:border-[#c92c41]"
              placeholder="Enter Case ID..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Target Audience</label>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white outline-none focus:border-[#c92c41]"
            >
              <option value="client">All Clients</option>
              <option value="expert">All Experts</option>
              <option value="both">Both (Clients & Experts)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Notification Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white outline-none focus:border-[#c92c41]"
              placeholder="e.g. System Maintenance"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white outline-none focus:border-[#c92c41] h-32"
              placeholder="Enter notification content..."
            />
          </div>
          
          <button
            type="submit"
            disabled={sending}
            className="px-6 py-2.5 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] text-white font-bold disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Notification"}
          </button>
        </form>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Bell size={20} className="text-emerald-400" />
          Alerts & Logs
        </h2>
        
        {!caseId ? (
          <div className="text-slate-500 text-sm italic">Please enter a Case ID above to view notifications.</div>
        ) : loading ? (
          <div className="text-slate-400 text-sm">Loading...</div>
        ) : notifications.length === 0 ? (
          <div className="text-slate-500 text-sm italic">No notifications received yet.</div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notif: any) => {
              // Treat the source endpoint as the primary indication of direction, fallback to type and payload.sender_id
              const isExpertToAdmin = notif.source 
                ? notif.source === "inbox" 
                : !(notif.type === "admin_message" || notif.payload?.sender_id === "admin");
              
              return (
                <div key={notif.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-white font-bold text-sm">{notif.payload?.title || "No Title"}</h3>
                    {isExpertToAdmin ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold tracking-wider whitespace-nowrap shrink-0">
                        PROFESSIONAL → ADMIN
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold tracking-wider whitespace-nowrap shrink-0">
                        ADMIN → PROFESSIONAL
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{notif.payload?.message}</p>
                  <div className="text-slate-600 text-xs mt-3 flex justify-between">
                    <span>Type: {notif.type}</span>
                    <span>{new Date(notif.created_at).toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
