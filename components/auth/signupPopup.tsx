"use client";

import { useState, FormEvent } from "react";
import { X, Mail, Lock, User, Loader2, ArrowRight, Phone } from "lucide-react";
import { signupUser } from "@/lib/apis/api";
import { supabaseSignUp, supabaseGoogleSignIn } from "@/lib/supabaseClient";

interface SignupModalProps {
  onClose: () => void;
  onSignInRedirect?: () => void;
}

export function SignupModal({ onClose, onSignInRedirect }: SignupModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1️⃣ Create user in Supabase Auth — passes name & phone as metadata
      const signUpRes = await supabaseSignUp(email, password, { name, phone });

      if (!signUpRes.success) {
        setError(signUpRes.message || "Failed to create account.");
        return;
      }

      const idToken = signUpRes.session?.access_token;

      // 2️⃣ If Supabase returned a session (email confirm disabled), sync profile with backend now.
      //    If session is null (email confirm required), skip — backend will create the profile
      //    on first login after the user verifies their email.
      if (idToken && signUpRes.user) {
        const res = await signupUser(idToken, signUpRes.user.id, name, email, phone);
        if (!res.success) {
          setError(res.message || "Account created but failed to save profile. Please sign in.");
          return;
        }
      }

      // Move to the "check your email" screen
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
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
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

        {/* Error */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">{error}</div>
        )}

        {/* ------------------------------------------------- */}
        {/* STEP 1: SIGNUP FORM                               */}
        {/* ------------------------------------------------- */}
        {step === 1 && (
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name*</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
              <div className="mt-1 relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password*</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                  placeholder="Minimum 6 characters"
                  minLength={6}
                  required
                />
              </div>
            </div>

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

            {/* Google OAuth */}
            <div>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-300" />
                <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">or</span>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              <button
                type="button"
                onClick={() => supabaseGoogleSignIn()}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-medium transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Sign in link */}
            <div className="mt-6 pt-4 border-t text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={onSignInRedirect}
                  className="text-indigo-600 font-semibold hover:text-indigo-500 transition"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        )}

        {/* ------------------------------------------------- */}
        {/* STEP 2: EMAIL VERIFICATION PROMPT                 */}
        {/* ------------------------------------------------- */}
        {step === 2 && (
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center">
                <Mail className="w-8 h-8 text-indigo-600" />
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              We sent a verification link to{" "}
              <strong className="text-gray-900">{email}</strong>.
              <br />
              Click the link in your inbox to verify your account, then sign in.
            </p>

            <button
              onClick={onSignInRedirect}
              className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
            >
              Go to Sign In
            </button>

            <p className="text-xs text-gray-400">
              Didn't receive it? Check your spam folder.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
