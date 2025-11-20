"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Car,
  FileText,
  AlertTriangle,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function TrafficChallanPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center h-[65vh] overflow-hidden bg-gradient-to-r from-[#1a1f4b] to-[#841b2d] text-white">
        <div className="absolute inset-0 bg-[url('/trafficbg.png')] bg-cover bg-center opacity-25" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <Car className="w-16 h-16 text-yellow-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Pay Your <span className="text-yellow-400">Traffic Challan</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Lawizer: Skip the court hassle. Clear your traffic fines securely,
            instantly, and affordably.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* Pay Your Challan Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/10 rounded-full">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#0e172b]">
              Pay Your Challan
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>Traffic Challan</strong> (or E-Challan in its modern
            digital form) is an official legal document issued by the Traffic
            Police under the
            <strong> Motor Vehicles Act, 1988</strong>, to a motor vehicle owner
            or driver who has violated a traffic rule or regulation. It serves
            as an automated penalty notification, detailing the specific offense
            and fine amount. The e-challan system ensures transparency,
            efficiency, and accountability in traffic enforcement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#841b2d] mb-3">
                Why is Timely Payment Needed?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Avoid Legal Escalation</li>
                <li>• Prevent License Suspension</li>
                <li>• Prevent Financial Penalty Escalation</li>
                <li>• Ensure Transactional Transparency</li>
                <li>• Maintain a Clean Driving Record</li>
                <li>• Support Road Safety</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#841b2d] mb-3">
                Why Choose Lawizer for Your Challan Payment?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Instant & Convenient : 24/7 Access</li>
                <li>• Secure & Transparent : Verified Data</li>
                <li>• Comprehensive Legal Support: Zero Court Visits</li>
                <li>• Affordable Resolution: Settle Complex Cases Easily</li>
                <li>• Digital Documentation : Instant Proof</li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center mt-12 space-y-4">
            <button
              onClick={() => alert("Pay Challan Flow Coming Soon")}
              className="px-8 py-4 text-lg font-semibold bg-[#841b2d] hover:bg-[#6e1626] text-white rounded-xl shadow-lg transition-all"
            >
              Pay Your Challan
            </button>
            <button
              onClick={() => alert("View Challan Functionality Coming Soon")}
              className="px-6 py-3 text-md font-medium border border-[#841b2d] text-[#841b2d] rounded-xl hover:bg-[#841b2d]/10 transition-all"
            >
              View Your Challan
            </button>
          </div>
        </motion.section>

        {/* Dispute Your Challan Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500/10 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#0e172b]">
              Dispute Your Challan
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sometimes, a traffic challan may be issued wrongly — maybe your
            vehicle wasn’t at the location, the photo proof is unclear, or the
            system has an error. Lawizer’s “Dispute Your Challan” feature lets
            you legally challenge incorrect or unfair challans with expert
            lawyer assistance.
          </p>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>Review and verify the challan evidence</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>Draft and submit a legal reply or appeal</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>
                Guide you through the online or in-person hearing process
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>Keep you updated until resolution</span>
            </div>
          </div>

          <p className="mt-6 text-gray-700 italic">
            Lawizer — Turning Your Traffic Trouble into Legal Relief.
          </p>
          <div className="flex flex-col items-center justify-center mt-12 space-y-4">
            <button
              onClick={() => alert("Dispute a Challan Coming Soon")}
              className="px-8 py-4 text-lg font-semibold bg-[#841b2d] hover:bg-[#6e1626] text-white rounded-xl shadow-lg transition-all"
            >
              Dispute Your Challan
            </button>
          </div>
        </motion.section>

        {/* Consult an Expert Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#0e172b]">
              Consult an Expert
            </h2>
          </div>

          <p className="text-gray-700 mb-6">
            Having any queries other than the above mentioned problems relating
            to your vehicle? Please feel free to consult our motor vehicles
            expert about it for free.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => alert("Consultation feature coming soon")}
              className="px-8 py-4 text-lg font-semibold bg-[#1a1f4b] hover:bg-[#13173a] text-white rounded-xl shadow-lg transition-all"
            >
              Consult Motor Vehicle Expert
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
