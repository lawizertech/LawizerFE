"use client";

import { useState, FormEvent } from "react";
import { X, Mail, Lock, User, Loader2, ArrowRight } from "lucide-react";
import { signupUser } from "@/lib/apis/api";

interface SignupModalProps {
  onClose: () => void;
  onSignInRedirect?: () => void;
}

export function SignupModal({ onClose, onSignInRedirect }: SignupModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // STEP 1: Submit name, email, password
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!name || !email || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await signupUser(name, email, password);

      if (res.success === false || res.message?.includes("already exists")) {
        setError(res.message || "User already exists with this email.");
        return;
      }

      setStep(2);
    } catch (err: any) {
      setError(err.message || "Failed to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* TITLE SECTION */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {step === 1 ? "Create Account" : "Verify Your Email"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {step === 1
              ? "Enter your details to get started."
              : "A verification link has been sent to your email."}
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* ------------------------------------------------- */}
        {/* STEP 1: SIGNUP FORM */}
        {/* ------------------------------------------------- */}
        {step === 1 && (
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name*
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

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
                  placeholder="Minimum 6 characters"
                  required
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
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

            {/* Signup Redirect */}
            <div className="mt-6 pt-4 border-t text-center">
              <p className="text-sm text-gray-600">
                Already have an account?
                <button
                  onClick={onSignInRedirect}
                  className="text-indigo-600 font-semibold ml-1 hover:text-indigo-500 transition"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        )}

        {/* ------------------------------------------------- */}
        {/* STEP 2: SUCCESS MESSAGE */}
        {/* ------------------------------------------------- */}
        {step === 2 && (
          <div className="text-center space-y-4">
            <p className="text-gray-700">
              We've sent a verification link to <strong>{email}</strong>. <br />
              Please check your inbox and click the link to verify your email.
            </p>
            <button
              onClick={onSignInRedirect}
              className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
