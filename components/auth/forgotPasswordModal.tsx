"use client";

import { useState, FormEvent } from "react";
import { X, Mail, Loader2 } from "lucide-react";
import { auth } from "@/lib/firebaseClient";
import { sendPasswordResetEmail } from "firebase/auth";

interface ForgotPasswordModalProps {
  onClose: () => void;
  onBackToLogin?: () => void;
}

export function ForgotPasswordModal({ onClose, onBackToLogin }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);

      setSuccess(true);
    } catch (err: any) {
      setError(err?.message || "Failed to send password reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-sm text-gray-500 mt-1">Enter your registered email address</p>
        </div>

        {/* Success */}
        {success ? (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg text-sm text-center">
            Password reset email sent. Please check your inbox.
          </div>
        ) : (
          <>
            {/* Error */}
            {error && <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">{error}</div>}

            {/* Form */}
            <form onSubmit={handleReset} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email*</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded-md"
                    placeholder="your.email@example.com"
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
                Send Reset Link
              </button>
            </form>
          </>
        )}

        {/* Back to login */}
        <div className="mt-6 text-center">
          <button onClick={onBackToLogin} className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
