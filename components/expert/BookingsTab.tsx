"use client";

import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { serverApi } from "@/lib/apis/axios";
import { Calendar, Clock, User } from "lucide-react";

type Tab = "pending" | "confirmed" | "completed";

export default function BookingsTab() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("pending");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConsultations = async () => {
      try {
        const res = await serverApi.get("/api/expert/consultations");
        if (res.data?.consultations) {
          console.log(res.data.consultations);
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

  /* =========================
     NORMALIZE DATA (ALWAYS)
  ========================= */

  const normalized = useMemo(
    () =>
      consultations.map((c) => ({
        ...c,
        status: c.status ?? "confirmed",
        duration: c.duration ?? 60,
      })),
    [consultations],
  );

  /* =========================
     TAB COUNTS (ALWAYS)
  ========================= */
  const counts = useMemo(
    () => ({
      pending: normalized.filter((c) => c.status === "pending").length,
      confirmed: normalized.filter((c) => c.status === "confirmed").length,
      completed: normalized.filter((c) => c.status === "completed").length,
    }),
    [normalized],
  );

  /* =========================
     FILTERED LIST (ALWAYS)
  ========================= */

  const filtered = useMemo(
    () => normalized.filter((c) => c.status === activeTab),
    [normalized, activeTab],
  );

  /* =========================
     LOADING STATE (AFTER HOOKS)
  ========================= */

  if (loading) {
    return <p className="mt-8 text-gray-500">Loading…</p>;
  }

  return (
    <div className="space-y-8 pt-4">
      {/* HEADER */}
      <h3 className="text-lg font-sans font-light text-[#373737]">
        Manage your client consultations
      </h3>

      {/* TABS */}
      <div className="inline-flex bg-gray-100 rounded-xl p-1">
        {(["pending", "confirmed", "completed"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} ({counts[tab]})
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center text-gray-500 shadow-sm  m-1">
            No consultations found
          </div>
        )}

        {filtered.map((b) => {
          const date = dayjs(
            b.bookingDate?._seconds
              ? b.bookingDate._seconds * 1000
              : b.bookingDate,
          );

          return (
            <div
              key={b.bookingId}
              className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-start m-1"
            >
              {/* LEFT */}
              <div className="space-y-4">
                <h3 className="text-lg text-gray-900 font-sans font-medium ">
                  {b.serviceName || "Consultation"}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <User size={16} />
                  <span className="font-sans font-light text-gray-500">
                    {b.userDetails?.displayName || "Client"}
                  </span>
                </div>

                <div className="flex items-center gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2 font-sans font-light text-gray-500">
                    <Calendar size={16} />
                    {date.format("DD MMM YYYY")}
                  </div>

                  <div className="flex items-center gap-2 font-sans font-light text-gray-500">
                    <Clock size={16} />
                    {date.format("hh:mm A")} ({b.duration} min)
                  </div>
                </div>

                {b.note && <p className="text-gray-500 italic">“{b.note}”</p>}
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-4">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium
                    ${
                      b.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : b.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                </span>

                <p className="text-xl font-semibold text-gray-900">
                  ₹{b.rate?.toLocaleString() || 0}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
