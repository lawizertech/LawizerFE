"use client";

import { useState, FormEvent } from "react";
import { Loader2, X } from "lucide-react";
import { completeUserProfile } from "@/lib/apis/api";
import { auth } from "@/lib/firebaseClient";

export default function CompleteProfileModal({ user, onClose, onDone }: any) {
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [city, setCity] = useState(user.city || "");
  const [state, setState] = useState(user.state || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const idToken = await auth.currentUser?.getIdToken();

      await completeUserProfile(idToken!, {
        uid: user.uid,
        displayName,
        phoneNumber,
        city,
        state,
        photoURL,
        email: user.email,
      });

      onDone(); // refresh parent UI
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Full Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Save Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
