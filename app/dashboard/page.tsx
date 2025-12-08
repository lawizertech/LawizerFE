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
      <div className="w-64 bg-white border-r shadow-sm p-6 hidden md:block pt-20">
        <h2 className="text-xl font-semibold mb-6">Menu</h2>

        <div className="space-y-4">
          <button className="flex items-center gap-3 text-gray-700 hover:text-black transition">
            <MessageCircle size={20} />
            <span className="font-medium flex items-center gap-1">
              Chats{" "}
              <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-[2px] rounded-full">
                🚧
              </span>
            </span>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-black transition">
            <PhoneCall size={20} />
            <span className="font-medium flex items-center gap-1">
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
        <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>

        {loading ? (
          <p className="text-gray-500">Loading your bookings...</p>
        ) : bookings.length === 0 ? (
          <div className="mt-10 text-center text-gray-500 text-lg">
            No bookings have been made yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookings.map((b) => {
                console.log(b);
                
              return (
                <div
                  key={b.bookingId}
                  className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">
                      {b.expertName}
                    </h3>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        b.expertType === "ca"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-purple-100 text-purple-600"
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

                  <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
                    <Calendar size={14} />
                    {new Date(b.createdAt._seconds * 1000).toLocaleDateString()}
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
