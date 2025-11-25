"use client";

import { useState, FormEvent } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  Loader2,
  ArrowRight,
  Mail,
  Lock,
} from "lucide-react";

import { z } from "zod";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";

const profileSchema = z.object({
  displayName: z.string().min(3, "Full Name must be at least 3 characters."),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone Number must be 10 digits."),
  email: z.string().email("Invalid email address."),
  city: z.string().optional(),
  state: z.string().optional(),
  photoURL: z.string().url("Invalid photo URL.").optional().or(z.literal("")),
});

interface ProfileCompletionModalProps {
  onClose: () => void;
  onSignInRedirect?: () => void;
}

export function ProfileCompletionModal({
  onClose,
  onSignInRedirect,
}: ProfileCompletionModalProps) {
  const [step, setStep] = useState(1);

  // Step 1 state
  const [signupEmail, setSignupEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2 state
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState(""); // auto filled from step 1
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // STEP 1 — Email/Password Signup
  const handleEmailPasswordSignup = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        password
      );

      const user = userCredential.user;
      const idToken = await user.getIdToken(); // JWT

      // Save in local storage
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("email", user.email || "");

      // 🔥 INIT USER in database
      await fetch(
        "http://127.0.0.1:5001/lawizerbe/us-central1/auth/init-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            uid: user.uid,
            email: user.email,
          }),
        }
      );

      // Move email to next step
      setEmail(user.email || "");
      setStep(2);
    } catch (err: any) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 — Complete Profile
  const handleProfileSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const uid = localStorage.getItem("uid");

    const formData = {
      uid,
      displayName,
      phoneNumber,
      email,
      city,
      state,
      photoURL,
    };

    const validation = profileSchema.safeParse(formData);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      setLoading(false);
      return;
    }

    try {
      const user = auth.currentUser;
      const idToken = user ? await user.getIdToken() : null;

      const res = await fetch(
        "http://127.0.0.1:5001/lawizerbe/us-central1/auth/complete-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Profile updated successfully!");
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to complete profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* TITLE */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {step === 1 ? "Create Account" : "Complete Your Profile"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {step === 1
              ? "Start by creating your account."
              : "Tell us more about you."}
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* ------------------------------------------------- */}
        {/* STEP 1: EMAIL + PASSWORD UI */}
        {/* ------------------------------------------------- */}
        {step === 1 && (
          <form onSubmit={handleEmailPasswordSignup} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="Minimum 6 characters"
                  required
                />
              </div>
            </div>

            {/* Continue */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-70 transition"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5 mr-2" />
              )}
              Continue
            </button>
          </form>
        )}

        {/* ------------------------------------------------- */}
        {/* STEP 2: PROFILE DETAILS UI (Your old UI) */}
        {/* ------------------------------------------------- */}
        {step === 2 && (
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name*
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number*
              </label>
              <div className="mt-1 relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="9876543210"
                  required
                />
              </div>
            </div>

            {/* City + State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1 relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded-md"
                    placeholder="New Delhi"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  placeholder="Delhi"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL (optional)
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-70 transition"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5 mr-2" />
              )}
              Complete Profile
            </button>
          </form>
        )}

        {step === 1 && (
          <div className="mt-6 pt-4 border-t text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={onSignInRedirect}
                className="text-indigo-600 font-semibold hover:text-indigo-500 transition"
                disabled={loading}
              >
                Sign In Now
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
