"use client";

import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { serverApi } from "@/lib/apis/axios";
import { Calendar, Clock, User, ArrowLeft, MessageCircle, Phone, Video, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/context/authContext";
import { getAccessToken } from "@/lib/auth/tokenStore";
import ConsultationChat from "../user/ConsulationChat";

type Tab = "pending" | "confirmed" | "completed";

export default function BookingsTab() {
  const { user: authUser } = useAuth();
  const [consultations, setConsultations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("pending");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [joiningCall, setJoiningCall] = useState(false);

  useEffect(() => {
    const loadConsultations = async () => {
      try {
        const res = await serverApi.get("/api/expert/consultations");
        if (res.data?.consultations) {
          setConsultations(res.data.consultations);
        }
      } catch (err) {
        console.error("Failed to fetch consultations", err);
      } finally {
        setLoading(false);
      }
    };

    loadConsultations();
  }, []);

  const handleJoinCall = async () => {
    if (!selected?.caseId) return;
    try {
      setJoiningCall(true);
      const supabase = createClient();
      
      const { data, error } = await supabase
        .from("chat_messages")
        .select("text, created_at")
        .eq("case_id", selected.caseId)
        .eq("message_type", "meeting_link")
        .is("deleted_at", null)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Failed to query existing meeting link:", error);
      }

      let meetingId = "";
      if (data?.text) {
        const createdTime = new Date(data.created_at);
        const now = new Date();
        const diffInHours = (now.getTime() - createdTime.getTime()) / (1000 * 60 * 60);
        if (diffInHours < 2) {
          meetingId = data.text;
        }
      }

      if (!meetingId) {
        const token = getAccessToken();
        const res = await fetch("/api/meetings/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            caseId: selected.caseId,
            title: "Consultation Call",
            type: "video",
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => null);
          throw new Error(errData?.error || "Failed to create meeting");
        }

        const resData = await res.json();
        meetingId = resData.meetingId;
      }

      if (meetingId) {
        window.open(`/meet/${meetingId}`, "_blank");
      } else {
        alert("Failed to join meeting: No meeting ID resolved");
      }
    } catch (err: any) {
      console.error("Error joining call:", err);
      alert(err.message || "Failed to join call");
    } finally {
      setJoiningCall(false);
    }
  };

  /* ========================= NORMALIZE ========================= */
  const normalized = useMemo(
    () =>
      consultations.map((c) => ({
        ...c,
        status: c.status ?? "confirmed",
        duration: c.duration ?? 60,
      })),
    [consultations],
  );

  /* ========================= COUNTS ========================= */
  const counts = useMemo(
    () => ({
      pending: normalized.filter((c) => c.status === "pending").length,
      confirmed: normalized.filter((c) => c.status === "confirmed").length,
      completed: normalized.filter((c) => c.status === "completed").length,
    }),
    [normalized],
  );

  /* ========================= FILTER ========================= */
  const filtered = useMemo(() => normalized.filter((c) => c.status === activeTab), [normalized, activeTab]);

  if (loading) return <p className="mt-8 text-gray-500">Loading…</p>;

  /* ========================= DETAILS VIEW ========================= */
  if (selected) {
    const date = dayjs(selected.bookingDate?._seconds ? selected.bookingDate._seconds * 1000 : selected.bookingDate);

    return (
      <div className="space-y-6">
        {/* BACK */}
        <button
          onClick={() => {
            setSelected(null);
            setShowChat(false);
          }}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <ArrowLeft size={16} />
          Back to bookings
        </button>

        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
          {/* CLIENT */}
          <div>
            <h2 className="text-xl font-medium text-gray-900">{selected.userDetails?.displayName || "Client"}</h2>
            <p className="text-sm text-gray-500">Consultation · {selected.callType}</p>
          </div>

          {/* INFO */}
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {date.format("DD MMM YYYY")}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {date.format("hh:mm A")} ({selected.duration} min)
            </div>
          </div>

          {selected.note && <p className="italic text-gray-500">“{selected.note}”</p>}

          {/* STATUS + PRICE */}
          <div className="flex justify-between items-center">
            <span className="text-sm capitalize text-gray-600">
              Status: <b>{selected.status}</b>
            </span>
            <span className="text-xl font-semibold">₹{selected.rate?.toLocaleString() || 0}</span>
          </div>

          {/* ACTIONS */}
          {selected.status === "confirmed" && (
            <div className="flex gap-3">
              <button
                onClick={handleJoinCall}
                disabled={joiningCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {joiningCall ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Video size={16} />
                )}
                Join Video Call
              </button>

              <button onClick={() => setShowChat(true)} className="border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition">
                <MessageCircle size={16} />
                Chat with Client
              </button>
            </div>
          )}
        </div>

        {/* CHAT */}
        {showChat && (
          <ConsultationChat booking={selected} currentUserId={authUser?.uid || ""} currentUserRole="EXPERT" />
        )}
      </div>
    );
  }

  /* ========================= LIST VIEW ========================= */
  return (
    <div className="space-y-8 pt-4">
      <h3 className="text-lg font-light text-[#373737]">Manage your client consultations</h3>

      {/* TABS */}
      <div className="inline-flex bg-gray-100 rounded-xl p-1">
        {(["pending", "confirmed", "completed"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} ({counts[tab]})
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center text-gray-500 shadow-sm">No consultations found</div>
        )}

        {filtered.map((b) => {
          const date = dayjs(b.bookingDate?._seconds ? b.bookingDate._seconds * 1000 : b.bookingDate);

          return (
            <div
              key={b.bookingId}
              onClick={() => setSelected(b)}
              className="bg-white rounded-2xl p-5 mb-2 shadow-sm flex justify-between items-start cursor-pointer hover:shadow"
            >
              {/* LEFT */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium">{b.serviceName || "Consultation"}</h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User size={16} />
                  {b.userDetails?.displayName || "Client"}
                </div>

                <div className="flex gap-6 text-sm text-gray-500">
                  <span>{date.format("DD MMM YYYY")}</span>
                  <span>{date.format("hh:mm A")}</span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-3">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium capitalize
 ${
   b.status === "confirmed"
     ? "bg-green-100 text-green-700"
     : b.status === "pending"
       ? "bg-yellow-100 text-yellow-700"
       : "bg-gray-100 text-gray-600"
 }`}
                >
                  {b.status}
                </span>

                <span className="text-lg font-semibold">₹{b.rate?.toLocaleString() || 0}</span>

                {/* PROCEED */}
                {b.status === "confirmed" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent double trigger
                      setSelected(b);
                    }}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Proceed →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
