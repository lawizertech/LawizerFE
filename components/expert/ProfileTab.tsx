"use client";

import { backendApi, serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
import { User, Mail, Phone, ShieldCheck, Briefcase, Scale, Loader2 } from "lucide-react";

interface AdvocateProfile {
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export default function ProfileTab() {
  const [profile, setProfile] = useState<AdvocateProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const res = await serverApi.get("/api/expert/profile");
        const data = await res.data;

        if (data.success) {
          setProfile(data.profile);
        }
      } catch (err) {
        console.error("Failed to load profile", err);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-sans">
        <Loader2 className="animate-spin text-[#d62038] mb-2" size={32} />
        <p className="text-xs font-semibold">Retrieving professional profile details...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-sans bg-white border border-gray-200/80 rounded-2xl p-8 text-center shadow-xs">
        <Scale className="text-gray-300 mb-2" size={32} />
        <p className="text-xs font-bold text-gray-700">No Profile Found</p>
        <p className="text-[11px] text-gray-400 max-w-xs mt-1">
          Unable to retrieve advocate credentials from the server. Please try signing in again.
        </p>
      </div>
    );
  }

  // Get initials for avatar placeholder
  const getInitials = (name: string) => {
    if (!name) return "JD";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6 font-sans pb-10">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <User size={22} className="text-[#c92c41]" />
            Advocate Profile
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Your registered professional identity and credential records.
          </p>
        </div>
      </div>

      {/* Profile Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Avatar Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200/80 shadow-xs p-6 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center font-bold text-2xl shadow-2xs mb-4">
            {getInitials(profile.name)}
          </div>
          
          <h2 className="text-base font-bold text-gray-950 truncate max-w-full">
            {profile.name}
          </h2>
          <p className="text-[11px] font-bold text-[#d62038] bg-rose-50 border border-rose-100/60 px-3 py-1 rounded-full mt-2 inline-block capitalize">
            {profile.role || "Advocate"}
          </p>

          <div className="w-full border-t border-gray-100 my-6" />

          {/* Verification Badge */}
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100/80 px-3.5 py-2 rounded-xl text-emerald-800 text-xs font-bold w-full justify-center">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <span>Verified Lawizer Partner</span>
          </div>

          <p className="text-[10px] text-gray-400 mt-3 max-w-[200px] leading-relaxed font-semibold">
            All details verified against Bar Council records. Edit requests require admin approval.
          </p>
        </div>

        {/* Right Column: Profile Fields */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/80 shadow-xs p-6 space-y-6">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-1">
              Advocate Account Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Field 1: Full Name */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center shrink-0">
                  <User size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="text-xs font-bold text-gray-800 mt-1 truncate">
                    {profile.name}
                  </p>
                </div>
              </div>

              {/* Field 2: Role */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center shrink-0">
                  <Briefcase size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Profession
                  </p>
                  <p className="text-xs font-bold text-gray-800 mt-1 truncate capitalize">
                    {profile.role || "Advocate"}
                  </p>
                </div>
              </div>

              {/* Field 3: Email */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center shrink-0">
                  <Mail size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-xs font-bold text-gray-800 mt-1 truncate">
                    {profile.email || "Not Provided"}
                  </p>
                </div>
              </div>

              {/* Field 4: Phone */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center shrink-0">
                  <Phone size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Phone Number
                  </p>
                  <p className="text-xs font-bold text-gray-800 mt-1 truncate">
                    {profile.phone || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-1">
              Professional Credentials
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Credential 1: Bar Council Reg */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center shrink-0">
                  <Scale size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Bar Council Registration
                  </p>
                  <p className="text-xs font-bold text-gray-800 mt-1 truncate">
                    State Bar Council (Active)
                  </p>
                </div>
              </div>

              {/* Credential 2: System Authority */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-[#d62038] flex items-center justify-center shrink-0">
                  <ShieldCheck size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    System Authority
                  </p>
                  <p className="text-xs font-bold text-gray-800 mt-1 truncate">
                    Professional Legal Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
