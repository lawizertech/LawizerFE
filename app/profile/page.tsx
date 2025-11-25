"use client";

import { useEffect, useState } from "react";
import { Loader2, LogOut, User } from "lucide-react";
import { getUserProfile } from "@/lib/apis/api";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");

    setTimeout(() => {
      setUser(null);
      window.location.reload();
      localStorage.removeItem("uid");
      localStorage.removeItem("email");
    }, 300);
  };

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    if (!uid) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      const data = await getUserProfile(uid);
      setUser(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-24 text-2xl font-medium text-gray-600">
        User not found or not logged in.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition shadow-sm"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <div className="relative">
          <img
            src={user.photoURL || "/user.jpg"}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-100 shadow-sm object-cover"
          />
        </div>

        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.displayName || "No Name"}
          </h2>

          <p className="text-gray-500 text-sm">{user.email}</p>

          <span
            className={`inline-block mt-3 px-4 py-1 text-sm rounded-full ${
              user.isProfileComplete
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {user.isProfileComplete ? "Profile Complete" : "Profile Incomplete"}
          </span>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-white shadow-md rounded-2xl p-8 mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <DetailItem label="Phone Number" value={user.phoneNumber} />
          <DetailItem label="City" value={user.city} />
          <DetailItem label="State" value={user.state} />
          <DetailItem label="UID" value={user.uid} />
        </div>
      </div>
    </div>
  );
}

/* Reusable Detail Component */
function DetailItem({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium text-gray-900 mt-1">
        {value || "Not Provided"}
      </span>
    </div>
  );
}
