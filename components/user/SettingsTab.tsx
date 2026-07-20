"use client";

import { useState, useEffect } from "react";
import { User, Phone, MapPin, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getAccessToken } from "@/lib/auth/tokenStore";

export default function SettingsTab() {
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    photoURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken();
        if (!token) return;

        const res = await fetch("/api/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const body = await res.json();
          if (body.profile) {
            setProfile({
              displayName: body.profile.displayName || "",
              email: body.profile.email || "",
              phoneNumber: body.profile.phoneNumber || "",
              city: body.profile.city || "",
              state: body.profile.state || "",
              photoURL: body.profile.photoURL || "",
            });
          }
        }
      } catch (err) {
        console.error("Failed to load user profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!profile.phoneNumber.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Phone number is a required field.",
      });
      return;
    }

    try {
      setSaving(true);
      const token = getAccessToken();
      if (!token) throw new Error("Auth token not found");

      const res = await fetch("/api/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (res.ok) {
        toast({
          title: "Profile Saved",
          description: "Your user settings were updated successfully.",
        });
      } else {
        const errBody = await res.json().catch(() => null);
        throw new Error(errBody?.message || "Failed to update settings");
      }
    } catch (err: any) {
      console.error("Profile save error:", err);
      toast({
        variant: "destructive",
        title: "Failed to save settings",
        description: err.message || "Failed to save settings.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-20 gap-3">
        <div className="h-8 w-8 rounded-full border-4 border-gray-200 border-t-[#c92c41] animate-spin" />
        <span className="text-xs text-gray-500 font-semibold">Loading profile...</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden font-sans pb-10">
      <div className="p-6 border-b border-gray-100 bg-[#fafafa]/50">
        <h2 className="text-lg font-bold text-gray-900">Account Settings</h2>
        <p className="text-xs text-gray-500 mt-1">Configure and manage your legal profile parameters</p>
      </div>

      <form onSubmit={handleSave} className="p-6 space-y-6">
        {/* Email - Readonly */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 shadow-inner">
            <Mail size={16} className="text-gray-400 shrink-0" />
            <input
              type="email"
              value={profile.email}
              readOnly
              className="bg-transparent text-sm text-gray-400 outline-none w-full cursor-not-allowed"
            />
          </div>
          <span className="text-[10px] text-gray-400 font-medium block">Your account email cannot be changed.</span>
        </div>

        {/* Display Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
          <div className="flex items-center gap-2 bg-white border border-gray-200 focus-within:border-gray-400 rounded-xl px-3.5 py-2.5 transition">
            <User size={16} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={profile.displayName}
              onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
              className="bg-transparent text-sm text-gray-700 outline-none w-full"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number *</label>
          <div className="flex items-center gap-2 bg-white border border-gray-200 focus-within:border-gray-400 rounded-xl px-3.5 py-2.5 transition">
            <Phone size={16} className="text-gray-400 shrink-0" />
            <input
              type="tel"
              placeholder="e.g. +91 9999999999"
              value={profile.phoneNumber}
              onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
              required
              className="bg-transparent text-sm text-gray-700 outline-none w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* City */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">City</label>
            <div className="flex items-center gap-2 bg-white border border-gray-200 focus-within:border-gray-400 rounded-xl px-3.5 py-2.5 transition">
              <MapPin size={16} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="e.g. Kolkata"
                value={profile.city}
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                className="bg-transparent text-sm text-gray-700 outline-none w-full"
              />
            </div>
          </div>

          {/* State */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">State</label>
            <div className="flex items-center gap-2 bg-white border border-gray-200 focus-within:border-gray-400 rounded-xl px-3.5 py-2.5 transition">
              <MapPin size={16} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="e.g. West Bengal"
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="bg-transparent text-sm text-gray-700 outline-none w-full"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-50 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 bg-[#c92c41] hover:bg-[#a92233] disabled:bg-red-400 text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-[0_2px_8px_rgba(201,44,65,0.2)]"
          >
            {saving ? "Saving changes..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
