"use client";

import { useState, FormEvent } from "react";
import { Loader2, X } from "lucide-react";
import { completeUserProfile } from "@/lib/apis/api";
import { useAuth } from "@/context/authContext";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { supabaseUpdatePassword } from "@/lib/supabaseClient";

interface CompleteProfileModalProps {
  onClose: () => void;
  onDone: () => void;
}

export default function CompleteProfileModal({ onClose, onDone }: CompleteProfileModalProps) {
  const { user, refreshUser } = useAuth();

  // Form fields — pre-populated from context user object
  const [displayName, setDisplayName] = useState(user?.name ?? "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [photoURL, setPhotoURL] = useState(user?.avatarUrl ?? "");

  // Social-only accounts need to set a password on first login
  const isSocialOnly = user?.hasPassword === false;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Guard: don't render until we have a user
  if (!user) return null;

  /* -------------------------------------------------------------------------- */
  /* ✨ Submit Handler                                                           */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // The access token lives in memory — never in localStorage.
      const authToken = getAccessToken();

      if (!authToken) {
        setError("You are not logged in. Please sign in again.");
        return;
      }

      // Social-only accounts must set a password before completing their profile.
      if (isSocialOnly) {
        if (!password) {
          setError("Password is required.");
          return;
        }
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
        if (password.length < 6) {
          setError("Password must be at least 6 characters long.");
          return;
        }

        const pwRes = await supabaseUpdatePassword(authToken, password);
        if (!pwRes.success) {
          setError(pwRes.message ?? "Failed to set account password.");
          return;
        }
      }

      const res = await completeUserProfile(authToken, {
        uid: user.uid,
        email: user.email,
        displayName,
        phoneNumber,
        city,
        state,
        photoURL,
        hasPassword: isSocialOnly,
      });

      if (res?.success) {
        await refreshUser(); // Re-fetch the updated profile from the backend
        onDone();
        onClose();
      } else {
        setError(res?.message ?? "Failed to update profile");
      }
    } catch (err: any) {
      setError(err.message ?? "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-xl animate-[fadeIn_0.25s_ease]">
        {/* Close */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Complete Your Profile</h2>
          <p className="text-sm text-gray-500 mt-1">Add missing details to continue.</p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-red-700 bg-red-100 border border-red-200 p-3 rounded-lg text-sm">{error}</div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Full Name", value: displayName, setter: setDisplayName },
            { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber },
            { label: "City", value: city, setter: setCity },
            { label: "State", value: state, setter: setState },
          ].map((item, i) => (
            <div key={i}>
              <label className="block mb-1 text-sm font-medium text-gray-700">{item.label}</label>
              <input
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                value={item.value}
                onChange={(e) => item.setter(e.target.value)}
              />
            </div>
          ))}

          {isSocialOnly && (
            <>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Set Account Password*</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a new password"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password*</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </>
          )}

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
