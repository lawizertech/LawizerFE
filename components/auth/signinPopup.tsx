"use client";

import { useState, FormEvent } from "react";
import { X, Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import { loginUser } from "@/lib/apis/api";
import { useAuth } from "@/context/authContext";
import { supabaseSignIn, supabaseGoogleSignIn } from "@/lib/supabaseClient";


interface SignInModalProps {
  onClose: () => void;
  onSignupRedirect?: () => void;
  onLoginSuccess?: (user: any) => void;
  onForgotPassword?: () => void;
}

export function SignInModal({ onClose, onSignupRedirect, onLoginSuccess, onForgotPassword }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1️⃣ Login with Supabase
      const signInRes = await supabaseSignIn(email, password);

      if (!signInRes.success) {
        throw new Error(signInRes.message || "Invalid email or password");
      }

      const idToken = signInRes.session!.access_token;
      const refreshToken = signInRes.session!.refresh_token;

      // 2️⃣ Send token to backend (pass refresh token for HttpOnly cookie)
      const res = await loginUser(idToken, refreshToken);
      if (!res.success) {
        if (res.errorCode === "EMAIL_NOT_VERIFIED") {
          throw new Error("Email not verified. Please check your inbox.");
        }
        throw new Error(res.message || "Login failed on server");
      }

      const userRole = (res.data.role ?? "CLIENT").toUpperCase();
      login(res.token, {
        uid: res.data.uid ?? res.data.id,
        email: res.data.email,
        name: res.data.displayName ?? res.data.name,
        role: userRole,
        avatarUrl: res.data.photoURL ?? res.data.avatarUrl,
        isProfileComplete: res.data.isProfileComplete,
        hasPassword: res.data.hasPassword,
      });
      onLoginSuccess && onLoginSuccess(res.data);
      onClose();

      if (userRole === "PROFESSIONAL" || userRole === "EXPERT" || userRole === "LAWYER") {
        window.location.href = "/expert/dashboard";
      } else {
        window.location.href = "/user/dashboard";
      }
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
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition">
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Log into your account.</p>
        </div>

        {/* Error */}
        {error && <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">{error}</div>}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
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
            {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <ArrowRight className="w-5 h-5 mr-2" />}
            Sign In
          </button>
        </form>

        {/* Google OAuth Login */}
        <div className="mt-4">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            onClick={() => supabaseGoogleSignIn()}
            className="w-full mt-2 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-medium transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Forgot password?
          </button>
        </div>

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

        <div className="mt-1 text-center text-sm text-gray-700">
          Are you a Lawyer / CA ?{" "}
          <a href="/expert/login" className="text-indigo-600 font-semibold hover:text-indigo-500">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}
