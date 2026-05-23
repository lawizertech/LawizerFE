"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { PhoneCall, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmblaCarouselCards from "@/components/client/EmblaCarouselCards";
import { getUserBookings } from "@/lib/apis/api";
import { useAuth } from "@/context/authContext";
import LoadingSkeletonCards from "./LoadingSkeleton";
export interface Advocate {
  uid: string;
  expertId: string;
  name: string;
  role: string;
  img: string;
  gender: string;
  location: string | null;
  experience: string | null;
  isProfileComplete?: boolean;
  createdAt?: number;
  updatedAt?: number;
  email?: string;
  profession?: string;
}

const ALL_CAS = [
  {
    expertId: "ca_01",
    name: "CA Himanshu Dubey",
    role: "Income Tax, GST, Corporate Compliances, Insurance Claim Consulting",
    experience: "2.5 years",
    location: "Kolkata",
    rate: "₹50/min",
    img: "user.png",
    gender: "male",
  },
  {
    expertId: "ca_02",
    name: "CA Bishal Jain",
    role: "Taxation, Stock Recommendation",
    experience: "1 year",
    location: "Kolkata",
    rate: "₹50/min",
    img: "user.png",
    gender: "male",
  },
  {
    expertId: "ca_03",
    name: "CA Abhishek Kumar Singh",
    role: "Accounting, Taxation, Audit, Regulatory Compliance, GST, Income Tax, Financial Reporting, Business Advisory",
    experience: "4 years",
    location: "Kolkata",
    rate: "₹25/min",
    img: "user.png",
    gender: "male",
  },
  {
    expertId: "ca_04",
    name: "CA Vivek Bhatia",
    role: "Taxation (3 years), Accounting Advisory (3 years), Personal Finance (4 years)",
    experience: "4 years",
    location: "Kolkata",
    rate: "₹30/min",
    img: "user.png",
    gender: "male",
  },
];

const ALL_ADVOCATES: Advocate[] = [
  {
    uid: "adv_01",
    expertId: "adv_01",
    name: "Adv. Chandramouli Bagchi",
    role: "General Practice",
    experience: "25+ yrs exp",
    location: "Kolkata",
    img: "user.png",
    gender: "male",
  },
  {
    uid: "adv_02",
    expertId: "adv_02",
    name: "Adv. Himadree Ghosh",
    role: "Property, Criminal, Drafting",
    experience: "20+ yrs exp",
    location: "Kolkata",
    img: "user.png",
    gender: "female",
  },
  {
    uid: "adv_03",
    expertId: "adv_03",
    name: "Adv. Rahul Das",
    role: "Civil Lawyer",
    experience: "15+ yrs exp",
    location: "Kolkata",
    img: "user.png",
    gender: "male",
  },
  {
    uid: "adv_04",
    expertId: "adv_04",
    name: "Adv. Indranil Banerjee",
    role: "Property, Criminal, Civil",
    experience: "18+ yrs exp",
    location: "Kolkata",
    img: "user.png",
    gender: "male",
  },
];

export default function StartConsultationPage() {
  const [requestedIndex, setRequestedIndex] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookedExpertIds, setBookedExpertIds] = useState<string[]>([]);
  const { isLoggedIn, setIsSignInModalOpen } = useAuth();
  const searchParams = useSearchParams();
  const userQueryType = searchParams.get("type");

  const handleClick = async () => {
    if (!isLoggedIn) {
      setIsSignInModalOpen(true);
      return;
    }

    if (loading || success) return;

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsSignInModalOpen(true);
        return;
      }

      const response = await fetch("/api/user/request-call", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success && response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.message || "Failed to request call");
        setTimeout(() => setError(null), 4000);
      }
    } catch (err) {
      console.error("Error requesting call:", err);
      setError("Network error. Please try again.");
      setTimeout(() => setError(null), 4000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (!isLoggedIn) return;

        const res = await getUserBookings();
        const bookedIds = res.consultations?.map((b: any) => `${b.expertId}`);

        setBookedExpertIds(bookedIds || []);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      }
    };

    fetchBookings();
  }, [isLoggedIn]);

  const ROLE_KEYWORDS: Record<string, string[]> = {
    civil_commercial: [
      "civil",
      "commercial",
      "corporate",
      "property",
      "arbitration",
      "ibc",
      "litigation",
    ],
    criminal: ["criminal", "cyber", "ndps"],
  };

  const filteredAdvocates = useMemo(() => {
    if (!userQueryType) return ALL_ADVOCATES;

    const keywords = ROLE_KEYWORDS[userQueryType];

    if (!keywords) return ALL_ADVOCATES;

    return ALL_ADVOCATES.filter((adv) =>
      keywords.some((keyword) => adv.role.toLowerCase().includes(keyword)),
    );
  }, [userQueryType]);

  const shouldShowCAs = userQueryType !== "civil_commercial";

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 flex flex-col items-center py-24 px-6 space-y-6">
      {/* Error Toast */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 bg-red-50 border border-red-200 rounded-lg px-4 py-3 shadow-lg max-w-md"
        >
          <div className="flex items-start gap-3">
            <div className="bg-red-100 rounded-full p-1">
              <X className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold text-gray-900">
          Start Your Consultation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get expert legal and financial advice from verified professionals —
          instantly and confidentially.
        </p>
      </motion.div>

      {/* Call Request Card */}
      <div className="w-full max-w-4xl flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Free Consultation
          </h3>
          <p className="text-sm text-gray-500">
            Get expert advice from our verified professionals.
          </p>
        </div>
        <Button
          onClick={handleClick}
          disabled={loading}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-300 disabled:cursor-not-allowed ${
            success
              ? "bg-[#21ae17]"
              : loading
                ? "bg-blue-400"
                : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          {success ? (
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex items-center gap-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.05 }}
                className="bg-white rounded-full p-1"
              >
                <Check className="h-4 w-4 text-green-600" />
              </motion.div>
              <span className="text-white font-medium">Requested</span>
            </motion.div>
          ) : loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Requesting...
            </>
          ) : (
            <>
              <PhoneCall className="h-4 w-4" />
              Request a Call
            </>
          )}
        </Button>
      </div>

      {/* Advocates Section */}
      <div className="w-full flex flex-col items-center space-y-10 overflow-hidden justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          👩‍⚖️ Our Top Advocates
        </h2>

        <EmblaCarouselCards
          list={filteredAdvocates}
          type="adv"
          onBook={(key) => setRequestedIndex(key)}
          bookedKeys={bookedExpertIds}
        />
      </div>

      {/* CA Carousel */}
      {shouldShowCAs && (
        <div className="w-full flex flex-col items-center space-y-10 overflow-hidden mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            💼 Chartered Accountants
          </h2>
          <EmblaCarouselCards
            list={ALL_CAS}
            type="ca"
            onBook={(key) => setRequestedIndex(key)}
            bookedKeys={bookedExpertIds}
          />
        </div>
      )}
    </section>
  );
}
