"use client";

import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmblaCarouselCards from "@/components/EmblaCarouselCards";

export default function StartConsultationPage() {
  const [requestedIndex, setRequestedIndex] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const advocates = [
    {
      name: "Adv. Rohan Sharma",
      role: "Criminal Lawyer",
      rate: "₹60/min",
      img: "/adv/Adv1.png",
      gender: "male",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Arjun Verma",
      role: "Civil Lawyer",
      rate: "₹50/min",
      img: "/adv/Adv3.png",
      gender: "male",
    },
    {
      name: "Adv. Manish Patel",
      role: "Property Lawyer",
      rate: "₹45/min",
      img: "/adv/Adv4.png",
      gender: "male",
    },
    {
      name: "Adv. Karan Mehta",
      role: "Corporate Lawyer",
      rate: "₹65/min",
      img: "/adv/Adv5.png",
      gender: "male",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Cyber Crime Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
    {
      name: "Adv. Rohan Sharma",
      role: "Criminal Lawyer",
      rate: "₹60/min",
      img: "/adv/Adv1.png",
      gender: "male",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Arjun Verma",
      role: "Civil Lawyer",
      rate: "₹50/min",
      img: "/adv/Adv3.png",
      gender: "male",
    },
    {
      name: "Adv. Manish Patel",
      role: "Property Lawyer",
      rate: "₹45/min",
      img: "/adv/Adv4.png",
      gender: "male",
    },
    {
      name: "Adv. Karan Mehta",
      role: "Corporate Lawyer",
      rate: "₹65/min",
      img: "/adv/Adv5.png",
      gender: "male",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Cyber Crime Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
  ];

  const cas = [
    {
      name: "CA Ritesh Gupta",
      role: "Tax Consultant",
      rate: "₹40/min",
      img: "/adv/CA1.png",
      gender: "male",
    },
    {
      name: "CA Shiv Kumar",
      role: "Chartered Accountant",
      rate: "₹42/min",
      img: "/adv/CA2.png",
      gender: "male",
    },
    {
      name: "CA Aditya Jain",
      role: "Corporate Tax Advisor",
      rate: "₹45/min",
      img: "/adv/CA3.png",
      gender: "male",
    },
    {
      name: "CA Rahul Nair",
      role: "Financial Planner",
      rate: "₹48/min",
      img: "/adv/CA4.png",
      gender: "male",
    },
    {
      name: "CA Vivek Sharma",
      role: "Auditor",
      rate: "₹50/min",
      img: "/adv/CA5.png",
      gender: "male",
    },
    {
      name: "CA Neha Khanna",
      role: "Wealth Consultant",
      rate: "₹52/min",
      img: "/adv/CA6.png",
      gender: "female",
    },
    {
      name: "CA Ritesh Gupta",
      role: "Tax Consultant",
      rate: "₹40/min",
      img: "/adv/CA1.png",
      gender: "male",
    },
    {
      name: "CA Shiv Kumar",
      role: "Chartered Accountant",
      rate: "₹42/min",
      img: "/adv/CA2.png",
      gender: "male",
    },
    {
      name: "CA Aditya Jain",
      role: "Corporate Tax Advisor",
      rate: "₹45/min",
      img: "/adv/CA3.png",
      gender: "male",
    },
    {
      name: "CA Rahul Nair",
      role: "Financial Planner",
      rate: "₹48/min",
      img: "/adv/CA4.png",
      gender: "male",
    },
    {
      name: "CA Vivek Sharma",
      role: "Auditor",
      rate: "₹50/min",
      img: "/adv/CA5.png",
      gender: "male",
    },
    {
      name: "CA Neha Khanna",
      role: "Wealth Consultant",
      rate: "₹52/min",
      img: "/adv/CA6.png",
      gender: "female",
    },
  ];

  const handleClick = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1200);
  };

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
          size="sm"
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

      {/* Advocates Carousel */}
      <div className="w-full flex flex-col items-center space-y-10 overflow-hidden">
        <h2 className="text-3xl font-semibold text-gray-800">
          👩‍⚖️ Our Top Advocates
        </h2>

        <EmblaCarouselCards
          list={advocates}
          type="adv"
          onBook={(key) => setRequestedIndex(key)}
        />
      </div>

      {/* CA Carousel */}
      <div className="w-full flex flex-col items-center space-y-10 overflow-hidden mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          💼 Chartered Accountants
        </h2>
        <EmblaCarouselCards
          list={cas}
          type="ca"
          onBook={(key) => setRequestedIndex(key)}
        />
      </div>
    </section>
  );
}
