"use client";

import { useEffect, useState } from "react";
import { Loader2, LogOut, Edit } from "lucide-react";
import { getUserProfile } from "@/lib/apis/api";
import { useRouter } from "next/navigation";
import CompleteProfileModal from "@/components/auth/CompleteProfileModal";
import { useAuth } from "@/context/authContext";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { logout, isLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  const fetchProfile = async () => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }

    const uid = localStorage.getItem("uid") || "";
    const res = await getUserProfile(uid);

    if (!res || (res.success === false && (res.errorCode === "INVALID_TOKEN" || res.errorCode === "INVALID_FORMAT"))) {
      handleLogout();
      return;
    }

    if (res.success === false) {
      setUser(null);
      setLoading(false);
      return;
    }

    setUser(res);
    setLoading(false);

    if (res && !res.isProfileComplete) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50">
        <Loader2 className="w-10 h-10 animate-spin text-white" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50">
        <p className="text-center text-xl text-white">User not found or not logged in.</p>
      </div>
    );
  }

  const userAvatar = user.photoURL || (typeof window !== "undefined" ? localStorage.getItem("avatar_url") : null) || "/user.jpg";
  const userPhone = user.phoneNumber || user.phone || "Not Provided";
  const userName = user.displayName || user.name || "No Name";

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">My Profile</h1>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition shadow-md"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 flex flex-col sm:flex-row items-center sm:items-start gap-10">
          <div className="relative">
            <img
              src={userAvatar}
              alt="avatar"
              className="w-36 h-36 rounded-full border-4 border-gray-100 shadow-lg object-cover"
            />
          </div>

          <div className="flex-1 space-y-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <h2 className="text-2xl font-semibold text-gray-800">{userName}</h2>
              <button
                onClick={() => setShowModal(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                title="Edit Profile"
              >
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <p className="text-gray-500">{user.email}</p>

            <span
              className={`inline-block mt-3 px-4 py-1 text-sm rounded-full font-medium ${
                user.isProfileComplete ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {user.isProfileComplete ? "Profile Complete" : "Profile Incomplete"}
            </span>
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Personal Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DetailItem label="Phone Number" value={userPhone} />
            <DetailItem label="City" value={user.city} />
            <DetailItem label="State" value={user.state} />
          </div>
        </div>

        {/* Complete Profile Modal */}
        {showModal && <CompleteProfileModal onClose={() => setShowModal(false)} onDone={fetchProfile} />}
      </div>
    </div>
  );
}

/* Reusable Detail Component */
function DetailItem({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="font-medium text-gray-900 mt-1">{value || "Not Provided"}</span>
    </div>
  );
}
