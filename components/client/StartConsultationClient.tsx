"use client";

import React, { useState, useMemo, useEffect, use } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmblaCarouselCards from "@/components/client/EmblaCarouselCards";
import { getUserBookings } from "@/lib/apis/api";
import { useAuth } from "@/context/authContext";
import LoadingSkeletonCards from "./LoadingSkeleton";
import { serverApi } from "@/lib/apis/axios";

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

export default function StartConsultationPage() {
  const [requestedIndex, setRequestedIndex] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [bookedExpertIds, setBookedExpertIds] = useState<string[]>([]);
  const { isLoggedIn } = useAuth();
  const [ALL_ADVOCATES, setALL_ADVOCATES] = useState<Advocate[]>([]);
  const [loadingAdvocates, setLoadingAdvocates] = useState(true);
  const searchParams = useSearchParams();
  const userQueryType = searchParams.get("type");

  const handleClick = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1200);
  };

  useEffect(() => {
    const fetchAllAdvocates = async () => {
      try {
        const res = await serverApi.get("/api/advocates");

        const data = await res.data;

        if (!data.success) {
          console.error("Failed to fetch advocates:", data.message);
          setALL_ADVOCATES([]);
          return;
        }

        setALL_ADVOCATES(data.advocates || []);
      } catch (err) {
        console.error("Failed to fetch advocates", err);
        setALL_ADVOCATES([]);
      } finally {
        setLoadingAdvocates(false);
      }
    };

    fetchAllAdvocates();
  }, []);

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

  const filteredAdvocates = useMemo(() => {
    if (userQueryType === "civil_commercial") {
      return ALL_ADVOCATES.filter((adv) =>
        ["Civil Lawyer", "Corporate Lawyer", "Property Lawyer"].includes(
          adv.role
        )
      );
    }

    if (userQueryType === "criminal") {
      return ALL_ADVOCATES.filter((adv) =>
        ["Criminal Lawyer", "Cyber Crime Lawyer"].includes(adv.role)
      );
    }

    return ALL_ADVOCATES;
  }, [userQueryType, ALL_ADVOCATES]);

  const shouldShowCAs = userQueryType !== "civil_commercial";

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 flex flex-col items-center py-24 px-6 space-y-6">
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
          disabled={success}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-300 ${
            success ? "bg-[#21ae17]" : "bg-blue-600 hover:bg-blue-700"
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
          ) : (
            <>
              <PhoneCall className="h-4 w-4" />
              Request a Call
            </>
          )}
        </Button>
      </div>

      <div className="w-full flex flex-col items-center space-y-10 overflow-hidden justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          👩‍⚖️ Our Top Advocates
        </h2>

        {loadingAdvocates ? (
          <LoadingSkeletonCards />
        ) : (
          <EmblaCarouselCards
            list={filteredAdvocates}
            type="adv"
            onBook={(key) => setRequestedIndex(key)}
            bookedKeys={bookedExpertIds}
          />
        )}
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
