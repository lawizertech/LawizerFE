"use client";

import { useState, FormEvent, useEffect } from "react";
import { Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { advLoginUser } from "@/lib/apis/api";
import { useRouter } from "next/navigation";

export default function LawyerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    const role = localStorage.getItem("role");

    if (token && uid && role === "ADVOCATE_CA") {
      router.push("/lawyer/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        setLoading(false);
        setError("Email not verified. Please check your inbox.");
        return;
      }

      const idToken = await user.getIdToken();

      const res = await advLoginUser(idToken);

      if (!res.success) {
        throw new Error(res.message || "Login failed");
      }

      localStorage.setItem("uid", res.data.uid);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", "ADVOCATE_CA");
      localStorage.setItem("userProfile", JSON.stringify(res.data));

      window.location.href = "/lawyer/dashboard";
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage: "url('/LCA.png')",
      }}
    >
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Lawyer / CA - Login
          </h1>
          <p className="text-gray-500 mt-1">Access your legal dashboard</p>
        </div>

        {/* Error box */}
        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="example@law.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 flex items-center justify-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5 mr-2" />
            )}
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Not a lawyer?
            <a
              href="/"
              className="text-indigo-600 font-semibold ml-1 hover:text-indigo-500"
            >
              Go back home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
