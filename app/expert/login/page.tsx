"use client";

import { useState, FormEvent, useEffect } from "react";
import { Mail, Lock, Loader2, ArrowRight, User, Phone, Briefcase, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { expertLogin, signupUser } from "@/lib/apis/api";
import { supabaseSignIn, supabaseSignUp, supabaseGoogleSignIn } from "@/lib/supabaseClient";
import { useAuth } from "@/context/authContext";

export default function LawyerLoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("Corporate Legal & Tax Consultation");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const router = useRouter();
  const { login, user, loading: authLoading } = useAuth();

  // If already logged in as an expert / professional, redirect immediately.
  useEffect(() => {
    const role = user?.role?.toUpperCase();
    if (!authLoading && (role === "EXPERT" || role === "PROFESSIONAL" || role === "LAWYER")) {
      router.push("/expert/dashboard");
    }
  }, [authLoading, user, router]);

  // 1️⃣ Handle Login Flow
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const signInRes = await supabaseSignIn(email, password);
      if (!signInRes.success || !signInRes.session) {
        throw new Error(signInRes.message ?? "Invalid email or password");
      }

      const idToken = signInRes.session.access_token;
      const refreshToken = signInRes.session.refresh_token;

      const res = await expertLogin(idToken, refreshToken);
      if (!res.success) {
        throw new Error(res.message ?? "Login failed");
      }

      const expData = res.expert || res.data || {};
      const expRole = (expData.role || "EXPERT").toUpperCase();

      login(res.token, {
        uid: expData.uid || expData.id || signInRes.user?.id,
        email: expData.email || email,
        name: expData.displayName ?? expData.name ?? "Lawyer / CA",
        role: expRole,
        avatarUrl: expData.photoURL ?? expData.avatarUrl,
        isProfileComplete: expData.isProfileComplete ?? true,
      });

      router.push("/expert/dashboard");
    } catch (err: any) {
      setError(err.message ?? "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ Handle Professional Signup Flow
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      // 1. Sign up user in Supabase Auth with metadata
      const signUpRes = await supabaseSignUp(email, password, {
        name,
        phone,
        role: "professional",
        specialization,
      });

      if (!signUpRes.success) {
        throw new Error(signUpRes.message ?? "Professional registration failed.");
      }

      // 2. Auto-login if session returned immediately
      if (signUpRes.session) {
        const idToken = signUpRes.session.access_token;
        const refreshToken = signUpRes.session.refresh_token;

        // Register profile in backend
        if (signUpRes.user?.id) {
          await signupUser(idToken, signUpRes.user.id, name, email, phone).catch(() => null);
        }

        const res = await expertLogin(idToken, refreshToken);
        if (res.success) {
          login(res.token, {
            uid: signUpRes.user?.id || "",
            email,
            name,
            role: "PROFESSIONAL",
            isProfileComplete: true,
          });
          router.push("/expert/dashboard");
          return;
        }
      }

      setSuccessMsg("Professional account created successfully! You can now log in.");
      setIsSignUp(false);
    } catch (err: any) {
      setError(err.message ?? "Failed to create professional account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-cover bg-center bg-no-repeat font-sans">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 h-16 flex items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-xs">
            <img src="/logoLawizer.jpg" alt="Lawizer Logo" className="w-7 h-7" />
          </div>
          <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-[#c92c41] border border-rose-100 ml-2">
            Expert Portal
          </span>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 pt-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/50">
          
          {/* Mode Switcher Tabs */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6 border border-slate-200">
            <button
              onClick={() => {
                setIsSignUp(false);
                setError(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                !isSignUp ? "bg-white text-gray-900 shadow-xs" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsSignUp(true);
                setError(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                isSignUp ? "bg-[#c92c41] text-white shadow-xs" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Apply as Professional
            </button>
          </div>

          {/* Title Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-gray-900">
              {isSignUp ? "Professional Registration" : "Lawyer & CA Portal"}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {isSignUp
                ? "Join Lawizer network to represent clients & manage litigation"
                : "Sign in to access your assigned client channels"}
            </p>
          </div>

          {/* Error & Success Notifications */}
          {error && (
            <div className="mb-4 text-xs font-semibold text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-100">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="mb-4 text-xs font-semibold text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100 flex items-center gap-2">
              <CheckCircle size={16} />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
            
            {/* Sign Up Fields */}
            {isSignUp && (
              <>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-[#c92c41] focus:border-transparent outline-none"
                      placeholder="e.g. CA Rajesh Varma / Adv. Ananya Roy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      required
                      className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-[#c92c41] focus:border-transparent outline-none"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Primary Specialization</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <select
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-[#c92c41] focus:border-transparent outline-none bg-white"
                    >
                      <option value="Corporate Legal & Tax Consultation">Corporate Legal & Tax Consultation</option>
                      <option value="Civil & Commercial Litigation">Civil & Commercial Litigation</option>
                      <option value="Property & Real Estate Law">Property & Real Estate Law</option>
                      <option value="Banking, Tax & Financial Dispute">Banking, Tax & Financial Dispute</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Email Field */}
            <div>
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Professional Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-[#c92c41] focus:border-transparent outline-none"
                  placeholder="lawyer@lawizer.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  required
                  className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-[#c92c41] focus:border-transparent outline-none"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 flex items-center justify-center bg-[#c92c41] text-white text-xs font-bold rounded-xl hover:bg-[#b32538] transition disabled:opacity-70 cursor-pointer shadow-md active:scale-95"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>{isSignUp ? "Register Professional Account" : "Sign In to Expert Dashboard"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </>
              )}
            </button>
          </form>

          {/* Google OAuth Login for Experts */}
          <div className="mt-4">
            <div className="relative flex py-1.5 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-3 text-gray-400 text-[10px] uppercase font-bold">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button
              type="button"
              onClick={() => supabaseGoogleSignIn(true)}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold shadow-xs transition cursor-pointer active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
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
              <span>Continue with Google (Expert Auto-Approve)</span>
            </button>
          </div>

          {/* Bottom Link */}
          <div className="text-center mt-6 text-xs text-gray-500 border-t border-gray-100 pt-4">
            <p>
              Client looking for legal help?{" "}
              <a href="/" className="text-[#c92c41] font-bold hover:underline">
                Return to Client Portal
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
