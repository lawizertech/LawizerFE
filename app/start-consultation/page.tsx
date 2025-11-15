"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartConsultationPage() {
  const [requestedIndex, setRequestedIndex] = useState<string | null>(null);

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
  ];

  // Reusable Carousel
  const ScrollCarousel = ({ list, type }: { list: any[]; type: string }) => (
    <motion.div
      className="flex gap-4"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        ease: "linear",
        duration: 60, // slower scroll
        repeat: Infinity,
      }}
    >
      {[...list, ...list].map((expert, i) => {
        const uniqueKey = `${type}-${i}`;
        const isRequested = requestedIndex === uniqueKey;

        return (
          <div
            key={uniqueKey}
            className={`min-w-[180px] rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all p-3 hover:-translate-y-1 ${
              expert.gender === "female"
                ? "hover:border-pink-400"
                : "hover:border-blue-400"
            }`}
          >
            <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2">
              <Image
                src={expert.img}
                alt={expert.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="text-center space-y-1">
              <p className="font-semibold text-gray-800 text-xs">
                {expert.name}
              </p>
              <p className="text-[11px] text-gray-500">{expert.role}</p>
              <p className="text-sm font-medium text-gray-700">{expert.rate}</p>
            </div>

            <div className="mt-2 flex justify-center">
              {isRequested ? (
                <div className="flex flex-col items-center text-green-600 text-xs font-medium">
                  <CheckCircle className="w-4 h-4 text-green-500 mb-1" />
                  Booked!
                </div>
              ) : (
                <Button
                  size="sm"
                  className={`rounded-full text-white text-xs px-3 py-1.5 font-medium ${
                    expert.gender === "female"
                      ? "bg-pink-500 hover:bg-pink-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  onClick={() => setRequestedIndex(uniqueKey)}
                >
                  <PhoneCall className="mr-1 h-3 w-3" />
                  Book a Call
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </motion.div>
  );

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
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
        >
          <PhoneCall className="h-4 w-4" />
          Request a Call
        </Button>
      </div>

      {/* 👩‍⚖️ Advocates */}
      <div className="w-full flex flex-col items-center space-y-10 overflow-hidden">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-3">
          👩‍⚖️ Our Top Advocates
        </h2>
        <ScrollCarousel list={advocates} type="adv" />
      </div>

      {/* 💼 Chartered Accountants */}
      <div className="w-full flex flex-col items-center space-y-10 overflow-hidden mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-3">
          💼 Chartered Accountants
        </h2>
        <ScrollCarousel list={cas} type="ca" />
      </div>
    </section>
  );
}
