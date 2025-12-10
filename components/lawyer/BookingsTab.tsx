"use client";

import { useEffect, useState } from "react";
import { fetchExpertConsultations } from "@/lib/apis/api";
import dayjs from "dayjs";

export default function BookingsTab() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetchExpertConsultations();
      if (res.success) {
        setConsultations(res.consultations);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (consultations.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
        <p className="text-gray-600 mb-6">Your scheduled consultations</p>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p>No bookings found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <p className="text-gray-600 mb-6">Your scheduled consultations</p>

      <div className="space-y-4">
        {consultations.map((b) => {
          const user = b.userDetails;
          const date = dayjs(b.createdAt._seconds * 1000).format(
            "DD MMM YYYY, hh:mm A"
          );

          return (
            <div
              key={b.id}
              className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {b.expertName}
                </h3>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    b.status === "scheduled"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                </span>
              </div>

              {/* Client Section */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={
                    user.photoURL ||
                    "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(user.displayName)
                  }
                  alt="Client"
                  className="w-12 h-12 rounded-full border"
                />

                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-medium text-gray-800">
                    {user.displayName}
                  </p>
                </div>
              </div>

              {/* Footer Details */}
              <div className="text-sm text-gray-600">
                <p>
                  <span className="font-medium">Booking ID:</span> {b.bookingId}
                </p>
                <p>
                  <span className="font-medium">Booked On:</span> {date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
