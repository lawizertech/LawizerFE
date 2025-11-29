"use client";

import { useState, FormEvent } from "react";
import { X, Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { loginUser } from "@/lib/apis/api"; // 🔥 Your backend login route
import { useAuth } from "@/context/authContext";

interface SignInModalProps {
  onClose: () => void;
  onSignupRedirect?: () => void;
  onLoginSuccess?: (user: any) => void;
}

export function SignInModal({
  onClose,
  onSignupRedirect,
  onLoginSuccess,
}: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { refreshUser } = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1️⃣ Login with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const idToken = await user.getIdToken();

      // 2️⃣ Send token to your backend
      const res = await loginUser(idToken);
      if (!res.success) {
        throw new Error(res.message || "Login failed on server");
      }

      // 3️⃣ Save user data
      localStorage.setItem("uid", res.data.uid);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("userProfile", JSON.stringify(res.data));
      onLoginSuccess && onLoginSuccess(res.data);
      refreshUser();
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Log into your account.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          {/* Login Button */}
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
            Sign In
          </button>
        </form>

        {/* Signup Redirect */}
        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?
            <button
              onClick={onSignupRedirect}
              className="text-indigo-600 font-semibold ml-1 hover:text-indigo-500 transition"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
