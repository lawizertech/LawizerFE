"use client";

import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall, Calendar } from "lucide-react";
import { getUserBookings } from "@/lib/apis/api";

interface Booking {
  bookingId: string;
  expertName: string;
  expertType: string;
  status: string;
  rate?: string;
  createdAt: any;
}

export default function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getUserBookings();
        setBookings(res.consultations || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* -------------------- LEFT SIDEBAR -------------------- */}
      <div className="w-64 bg-white shadow rounded-tr-3xl rounded-br-3xl border-r p-6 hidden md:flex flex-col pt-24">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Menu</h2>

        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition font-medium">
            <MessageCircle size={20} />
            <span className="flex items-center gap-1">
              Chats{" "}
              <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-[2px] rounded-full">
                🚧
              </span>
            </span>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition font-medium">
            <PhoneCall size={20} />
            <span className="flex items-center gap-1">
              Calls{" "}
              <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-[2px] rounded-full">
                🚧
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <div className="flex-1 p-6 pt-24">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Bookings</h1>

        {loading ? (
          <p className="text-gray-500">Loading your bookings...</p>
        ) : bookings.length === 0 ? (
          <div className="mt-10 text-center text-gray-500 text-lg">
            No bookings have been made yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((b) => (
              <div
                key={b.bookingId}
                className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {b.expertName}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      b.expertType === "ca"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {b.expertType.toUpperCase()}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  Status: <span className="font-medium">{b.status}</span>
                </p>

                {b.rate && (
                  <p className="text-green-600 text-sm font-semibold mt-1">
                    {b.rate}
                  </p>
                )}

                <div className="flex items-center gap-2 mt-4 text-gray-500 text-xs">
                  <Calendar size={14} />
                  {new Date(b.createdAt._seconds * 1000).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
