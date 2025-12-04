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
    router.push("/");
    setTimeout(() => {
      setUser(null);
      logout();
      window.location.reload();
    }, 200);
  };

  const fetchProfile = async () => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }

    const uid = localStorage.getItem("uid") || "";
    const res = await getUserProfile(uid);
    if (
      !res.success &&
      (res.errorCode === "INVALID_TOKEN" || res.errorCode === "INVALID_FORMAT")
    ) {
      handleLogout();
      return;
    }
    setUser(res);
    setLoading(false);

    // Auto-open modal if profile is incomplete
    if (res && !res.isProfileComplete) {
      setShowModal(true);
    }
  };

  useEffect(() => {
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
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.displayName || "No Name"}
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              title="Edit Profile"
            >
              <Edit className="w-4 h-4 text-gray-600" />
            </button>
          </div>

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

      {/* Complete Profile Modal */}
      {showModal && (
        <CompleteProfileModal
          onClose={() => setShowModal(false)}
          onDone={fetchProfile}
        />
      )}
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
