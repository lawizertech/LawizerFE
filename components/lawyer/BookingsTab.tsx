"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { serverApi } from "@/lib/apis/axios";
import { useRouter } from "next/navigation";

export default function BookingsTab() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadConsultations = async () => {
      setLoading(true);
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

  if (loading) return <p className="mt-8">Loading...</p>;

  if (consultations.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4 mt-8">My Bookings</h1>
        <p className="text-gray-600 mb-6">Your scheduled consultations</p>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p>No bookings found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
      <p className="text-gray-500 mb-6">Your scheduled consultations</p>

      {consultations.length === 0 ? (
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center text-gray-500">
          No bookings found.
        </div>
      ) : (
        <div className="space-y-4">
          {consultations.map((b) => {
            const user = b.userDetails;
            const consultationDay = dayjs(b.bookingDate._seconds * 1000);
            const today = dayjs().startOf("day");

            let status: "connect" | "upcoming" | "expired";
            if (consultationDay.isSame(today, "day")) status = "connect";
            else if (consultationDay.isBefore(today, "day")) status = "expired";
            else status = "upcoming";

            return (
              <div
                key={b.id}
                className="bg-white shadow-lg rounded-2xl p-5 border hover:shadow-2xl transition"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {b.expertName}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      status === "connect"
                        ? "bg-green-100 text-green-700"
                        : status === "upcoming"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status === "connect"
                      ? "Connect"
                      : status === "upcoming"
                      ? "Upcoming"
                      : "Expired"}
                  </span>
                </div>

                {/* Client */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={
                      user?.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user?.displayName || "User"
                      )}`
                    }
                    alt="Client"
                    className="w-12 h-12 rounded-full border"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Client</p>
                    <p className="font-medium text-gray-800">
                      {user?.displayName || "Unknown"}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    <span className="font-medium">Consultation Date:</span>{" "}
                    {consultationDay.format("DD MMM YYYY")}
                  </p>
                </div>

                {/* Actions */}
                {status === "connect" && (
                  <button
                    className="mt-4 w-48 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
                    onClick={() =>
                      router.push(`/lawyer/connect/${b.bookingId}`)
                    }
                  >
                    Connect Now
                  </button>
                )}

                {status === "expired" && (
                  <p className="mt-4 text-sm text-red-500 text-center">
                    This consultation has expired
                  </p>
                )}

                {status === "upcoming" && (
                  <p className="mt-4 text-sm text-yellow-600 text-center">
                    Consultation scheduled
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
