"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serverApi } from "@/lib/apis/axios";

import Sidebar from "@/components/lawyer/Sidebar";
import MobileMenuButton from "@/components/lawyer/MobileMenuButton";
import ChatModal from "@/components/chat/ChatModal";

export default function ConnectPage() {
  const { bookingId } = useParams();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("bookings"); // highlight bookings
  const [booking, setBooking] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/lawyer/login";
  };

  useEffect(() => {
    const loadBooking = async () => {
      const res = await serverApi.get(`/api/expert/consultations/${bookingId}`);
      setBooking(res.data.booking);
    };
    loadBooking();
  }, [bookingId]);

  if (!booking) {
    return <p className="p-6">Loading...</p>;
  }

  const client = booking.userDetails;
  const callType = booking.callType; // chat | audio | video

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-10">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
        menuOpen={menuOpen}
      />

      {/* Mobile menu button */}
      <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main content */}
      <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-10 pt-24">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Consultation with {client?.displayName}
          </h1>
        </div>

        {/* Options */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
          <h2 className="font-semibold text-gray-800">Connect Options</h2>

          {/* Chat */}
          <button
            className={`w-full py-3 rounded-lg font-medium transition ${"bg-blue-600 text-white hover:bg-blue-700"}`}
            onClick={() => setShowChat(true)}
          >
            Chat
          </button>

          {/* Audio */}
          <button
            disabled
            className="w-full py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
          >
            Audio Call (Coming Soon)
          </button>

          {/* Video */}
          <button
            disabled
            className="w-full py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
          >
            Video Call (Coming Soon)
          </button>
        </div>
      </main>

      {/* Chat Modal */}
      {showChat && (
        <ChatModal
          bookingId={booking.bookingId}
          role="expert"
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}
