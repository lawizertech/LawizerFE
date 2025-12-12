"use client";

import { fetchAdvocateProfile } from "@/lib/apis/api";
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
      const res = await fetchAdvocateProfile();
      if (res.success) {
        setProfile(res.profile);
      }
      setLoading(false);
    };
    getProfile();
  }, []);

  if (loading) return <p className="text-gray-600">Loading profile...</p>;
  if (!profile) return <p className="text-red-600">No profile found.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p className="text-gray-600 mb-6">Your professional details.</p>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-xl space-y-4">
        <div>
          <h2 className="text-sm text-gray-500 font-medium">Name</h2>
          <p className="text-gray-700">{profile.name}</p>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 font-medium">Profession</h2>
          <p className="text-gray-700">{profile.role}</p>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 font-medium">Location</h2>
          <p className="text-gray-700">{profile.location}</p>
        </div>
        {profile.email && (
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Email</h2>
            <p className="text-gray-700">{profile.email}</p>
          </div>
        )}
        {profile.experience && (
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Experience</h2>
            <p className="text-gray-700">{profile.experience}</p>
          </div>
        )}
        {profile.gender && (
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Gender</h2>
            <p className="text-gray-700">{profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
