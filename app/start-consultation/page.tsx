"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const renderCards = (list: any[], type: string) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
      {list.map((expert, index) => {
        const uniqueKey = `${type}-${index}`;
        const isRequested = requestedIndex === uniqueKey;

        return (
          <motion.div
            key={uniqueKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={`rounded-2xl border shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                expert.gender === "female"
                  ? "hover:border-pink-400"
                  : "hover:border-blue-400"
              }`}
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <CardHeader className="text-center mt-2">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {expert.name}
                </CardTitle>
                <p className="text-sm text-gray-500">{expert.role}</p>
              </CardHeader>

              <CardContent className="flex flex-col items-center text-center space-y-4 pb-6">
                <p className="text-gray-700 font-medium">
                  Rate: <span className="font-semibold">{expert.rate}</span>
                </p>

                {isRequested ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                    <p className="text-green-600 font-medium text-center text-sm">
                      Your call has been requested. <br />
                      An agent will contact you soon.
                    </p>
                  </motion.div>
                ) : (
                  <Button
                    className={`w-full text-white font-semibold rounded-full transition-all ${
                      expert.gender === "female"
                        ? "bg-pink-500 hover:bg-pink-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={() => setRequestedIndex(uniqueKey)}
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Request Call
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center py-20 px-6 space-y-20">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Start Consultation
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect instantly with top legal and financial experts for personal,
          corporate, or professional advice.
        </p>
      </div>

      {/* Advocates Section */}
      <div className="w-full flex flex-col items-center space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          👩‍⚖️ Advocates
        </h2>
        {renderCards(advocates, "adv")}
      </div>

      {/* CAs Section */}
      <div className="w-full flex flex-col items-center space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          💼 Chartered Accountants
        </h2>
        {renderCards(cas, "ca")}
      </div>
    </section>
  );
}
