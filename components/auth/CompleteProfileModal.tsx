"use client";

import { useState, useEffect, FormEvent } from "react";
import { Loader2, X } from "lucide-react";
import { completeUserProfile } from "@/lib/apis/api";
import { auth } from "@/lib/firebaseClient";

export default function CompleteProfileModal({ onClose, onDone }: any) {
  const [profile, setProfile] = useState<any>(null);

  // Form fields
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* -------------------------------------------------------------------------- */
  /* 🚀 Load user profile from localStorage when modal opens                    */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (!stored) return;

    const user = JSON.parse(stored);
    setProfile(user);

    // Populate state fields
    setDisplayName(user.displayName || "");
    setPhoneNumber(user.phoneNumber || "");
    setCity(user.city || "");
    setState(user.state || "");
    setPhotoURL(user.photoURL || "");
  }, []);

  if (!profile) return null; // prevent UI flash

  /* -------------------------------------------------------------------------- */
  /* ✨ Submit Handler                                                          */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const idToken = await auth.currentUser?.getIdToken();

      await completeUserProfile(idToken!, {
        uid: profile.uid,
        email: profile.email,
        displayName,
        phoneNumber,
        city,
        state,
        photoURL,
      });

      onDone();
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-xl animate-[fadeIn_0.25s_ease]">

        {/* Close */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Complete Your Profile</h2>
          <p className="text-sm text-gray-500 mt-1">Add missing details to continue.</p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-red-700 bg-red-100 border border-red-200 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Full Name", value: displayName, setter: setDisplayName },
            { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber },
            { label: "City", value: city, setter: setCity },
            { label: "State", value: state, setter: setState },
            { label: "Photo URL", value: photoURL, setter: setPhotoURL },
          ].map((item, i) => (
            <div key={i}>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {item.label}
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                value={item.value}
                onChange={(e) => item.setter(e.target.value)}
              />
            </div>
          ))}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2 transition disabled:opacity-70 mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Saving...
              </>
            ) : (
              "Save Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
