"use client";

import { useState, useEffect } from "react";
import { Send, Bell } from "lucide-react";

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
      const res = await fetch(`/api/cases/${caseId}/notifications/admin`);
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message || !caseId) return;

    try {
      setSending(true);
      const res = await fetch(`/api/cases/${caseId}/notifications/admin/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          Inbox (From Experts)
        </h2>
        
        {!caseId ? (
          <div className="text-slate-500 text-sm italic">Please enter a Case ID above to view notifications.</div>
        ) : loading ? (
          <div className="text-slate-400 text-sm">Loading...</div>
        ) : notifications.length === 0 ? (
          <div className="text-slate-500 text-sm italic">No notifications received yet.</div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notif: any) => (
              <div key={notif.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <h3 className="text-white font-bold text-sm">{notif.payload?.title || "No Title"}</h3>
                <p className="text-slate-400 text-sm mt-1">{notif.payload?.message}</p>
                <div className="text-slate-600 text-xs mt-3 flex justify-between">
                  <span>Type: {notif.type}</span>
                  <span>{new Date(notif.created_at).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
