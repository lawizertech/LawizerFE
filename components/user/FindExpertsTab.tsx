"use client";

import { useState, useEffect } from "react";
import { Search, Star, Award, Languages, Briefcase, UserCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FindExpertsTab() {
  const [experts, setExperts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch("/api/experts");
        if (res.ok) {
          const data = await res.json();
          setExperts(data.experts || []);
        }
      } catch (err) {
        console.error("Failed to load experts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperts();
  }, []);

  const filtered = experts.filter((e) => {
    const nameStr = (e.name || "").toLowerCase();
    const profStr = (e.profession || "").toLowerCase();
    const queryStr = search.toLowerCase();
    return nameStr.includes(queryStr) || profStr.includes(queryStr);
  });

  return (
    <div className="space-y-6 font-sans pb-10">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Find Legal Experts</h2>
          <p className="text-xs text-gray-500 mt-1">Browse and book highly qualified legal advisors instantly</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-full md:w-72 shadow-inner">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            placeholder="Search by name or field..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm outline-none w-full text-gray-700"
          />
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col justify-center items-center py-20 gap-3">
          <div className="h-8 w-8 rounded-full border-4 border-gray-200 border-t-[#c92c41] animate-spin" />
          <span className="text-xs text-gray-500 font-semibold">Searching experts...</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center text-gray-500 shadow-sm">
          <p className="font-medium text-sm">No legal experts match your query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((expert) => (
            <div
              key={expert.uid}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-0.5 transition duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex gap-4 items-start">
                  {/* Photo / Avatar Placeholder */}
                  <div className="h-14 w-14 rounded-xl bg-[#c92c41]/5 text-[#c92c41] font-bold text-lg flex items-center justify-center border border-[#c92c41]/10 uppercase shrink-0">
                    {expert.name ? expert.name.substring(0, 2) : "EX"}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 truncate block">{expert.name}</span>
                      {expert.isVerified && (
                        <span className="bg-green-50 text-green-700 p-0.5 rounded-full" title="Verified Expert">
                          <UserCheck size={12} className="stroke-[2.5]" />
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mt-0.5">
                      {expert.profession || "Advocate"}
                    </span>
                  </div>
                </div>

                {/* Info List */}
                <div className="mt-5 space-y-2.5 border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span>Rating: <strong>{expert.rating || "4.8"}</strong> / 5.0</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Award size={14} className="text-blue-500" />
                    <span>Experience: <strong>{expert.experienceYears || "8"} years</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Languages size={14} className="text-emerald-500" />
                    <span>Languages: <strong>English, Hindi</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Briefcase size={14} className="text-purple-500" />
                    <span>Rate: <strong>₹{expert.ratePerMinute || "15"}/min</strong></span>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={() => router.push("/user/dashboard?tab=consultations")}
                className="mt-6 w-full text-center py-2.5 bg-[#c92c41] text-white hover:bg-[#a92233] text-xs font-bold rounded-xl transition duration-150 cursor-pointer shadow-[0_2px_8px_rgba(201,44,65,0.2)]"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
