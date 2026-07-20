"use client";

import { useEffect, useState } from "react";
import { Loader2, LogOut, Edit } from "lucide-react";
import { getUserProfile } from "@/lib/apis/api";
import { useRouter } from "next/navigation";
import CompleteProfileModal from "@/components/auth/CompleteProfileModal";
import { useAuth } from "@/context/authContext";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { logout, isLoggedIn, user: contextUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  const fetchProfile = async () => {
    if (!isLoggedIn || !contextUser) {
      setLoading(false);
      return;
    }

    // uid comes from context — never from localStorage
    const res = await getUserProfile(contextUser.uid);

    if (
      !res ||
      (res.success === false && (res.errorCode === "INVALID_TOKEN" || res.errorCode === "INVALID_FORMAT"))
    ) {
      handleLogout();
      return;
    }

    if (res.success === false) {
      setProfile(null);
      setLoading(false);
      return;
    }

    setProfile(res);
    setLoading(false);

    if (res && !res.isProfileComplete) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50">
        <p className="text-center text-xl text-gray-700">User not found or not logged in.</p>
      </div>
    );
  }

  // Avatar falls back to context avatarUrl, and validates valid image URL string
  const userAvatar = (profile.photoURL || contextUser?.avatarUrl || "").trim();
  const isValidAvatar =
    userAvatar &&
    userAvatar !== "/user.jpg" &&
    userAvatar !== "null" &&
    userAvatar !== "undefined";

  const userPhone = profile.phoneNumber || profile.phone || "Not Provided";
  const userName = profile.displayName || profile.name || "No Name";
  const initialLetter = (userName !== "No Name" ? userName : profile.email || "U").charAt(0).toUpperCase();

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
            {isValidAvatar && !imgError ? (
              <img
                src={userAvatar}
                alt="Profile Avatar"
                onError={() => setImgError(true)}
                className="w-36 h-36 rounded-full border-4 border-gray-100 shadow-lg object-cover"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#c92c41] to-rose-600 text-white flex items-center justify-center font-black text-5xl border-4 border-gray-100 shadow-lg select-none">
                {initialLetter}
              </div>
            )}
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

            <p className="text-gray-500">{profile.email}</p>

            <span
              className={`inline-block mt-3 px-4 py-1 text-sm rounded-full font-medium ${
                profile.isProfileComplete ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {profile.isProfileComplete ? "Profile Complete" : "Profile Incomplete"}
            </span>
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Personal Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DetailItem label="Phone Number" value={userPhone} />
            <DetailItem label="City" value={profile.city} />
            <DetailItem label="State" value={profile.state} />
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
