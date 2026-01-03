"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { getUserBookings } from "@/lib/apis/api";
import { useRouter } from "next/navigation";

interface Booking {
  bookingId: string;
  expertName: string;
  expertType: string;
  status: string;
  rate?: string;
  bookingDate: any;
  createdAt: any;
}

export default function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getUserBookings();
        setBookings(res.consultations || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleBookingClick = (b: Booking) => {
    if (b.status !== "scheduled") return;
    router.push(`/dashboard/connect/${b.bookingId}`);
  };

  if (loading) return <p>Loading your bookings...</p>;

  if (bookings.length === 0)
    return (
      <div className="mt-10 text-center text-gray-500 text-lg">
        No bookings have been made yet.
      </div>
    );

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Bookings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div
            key={b.bookingId}
            onClick={() => handleBookingClick(b)}
            className={`bg-white shadow-lg rounded-2xl p-6 border transition ${
              b.status === "scheduled"
                ? "hover:shadow-2xl cursor-pointer"
                : "opacity-70 cursor-not-allowed"
            }`}
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {b.expertName}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Status: <span className="font-medium capitalize">{b.status}</span>
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Calendar size={14} />
              {new Date(b.bookingDate._seconds * 1000).toLocaleDateString(
                "en-IN"
              )}
            </div>

            {b.status === "scheduled" && (
              <div className="mt-3 text-xs text-indigo-500 font-medium">
                Click to connect →
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
