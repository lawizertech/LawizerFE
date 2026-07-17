"use client";

import { useEffect, useState, FormEvent } from "react";
import { Lock, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabaseUpdatePassword } from "@/lib/supabaseClient";

type PageState = "loading" | "form" | "success" | "invalid";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [pageState, setPageState] = useState<PageState>("loading");
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Read the access_token from the URL hash on mount.
  // Supabase appends: #access_token=...&type=recovery&...
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");
    const type = params.get("type");

    if (!token || type !== "recovery") {
      setPageState("invalid");
      return;
    }

    setAccessToken(token);
    // Remove the token from the URL bar so it isn't visible / bookmarked
    window.history.replaceState(null, "", window.location.pathname);
    setPageState("form");
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await supabaseUpdatePassword(accessToken!, password);
      if (!res.success) {
        setError(res.message || "Failed to update password. The link may have expired.");
        return;
      }
      setPageState("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Invalid / expired link ──────────────────────────────────────────────────
  if (pageState === "invalid") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-4">
          <XCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h1 className="text-2xl font-bold text-gray-900">Invalid or Expired Link</h1>
          <p className="text-sm text-gray-500">
            This password reset link is invalid or has already been used.
            <br />
            Please request a new one.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ── Success ─────────────────────────────────────────────────────────────────
  if (pageState === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
          <h1 className="text-2xl font-bold text-gray-900">Password Updated</h1>
          <p className="text-sm text-gray-500">
            Your password has been changed successfully. You can now sign in with your new password.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  // ── Loading skeleton ─────────────────────────────────────────────────────────
  if (pageState === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  // ── Set new password form ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Set New Password</h1>
          <p className="text-sm text-gray-500 mt-1">Enter and confirm your new password below.</p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-800 bg-red-100 rounded-lg">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password*</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Minimum 6 characters"
                minLength={6}
                required
              />
            </div>
          </div>

          {/* Confirm password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password*</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Re-enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-70 transition"
          >
            {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
