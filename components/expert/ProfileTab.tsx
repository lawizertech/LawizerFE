"use client";

import { backendApi, serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";

interface AdvocateProfile {
  name: string;
  role: string;
  location: string;
  email?: string;
  experience?: string;
  gender?: string;
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

  if (loading) return <p className="text-gray-600 mt-8">Loading profile...</p>;
  if (!profile) return <p className="text-red-600">No profile found.</p>;

  return (
    <div className="mt-4 m-1">
      <div className="text-lg font-sans font-light text-[#373737]">
        Your professional details.
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 mt-4 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400">Name</h2>
          <p className="text-gray-700">{profile.name}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-400">Profession</h2>
          <p className="text-gray-700">{profile.role}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-400">Location</h2>
          <p className="text-gray-700">{profile.location}</p>
        </div>
        {profile.email && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400">Email</h2>
            <p className="text-gray-700">{profile.email}</p>
          </div>
        )}
        {profile.experience && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400">Experience</h2>
            <p className="text-gray-700">{profile.experience}</p>
          </div>
        )}
        {profile.gender && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400">Gender</h2>
            <p className="text-gray-700">
              {profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
