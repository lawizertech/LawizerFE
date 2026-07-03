"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import {
 Car,
 FileText,
 AlertTriangle,
 MessageCircle,
 CheckCircle,
} from "lucide-react";


export default function TrafficChallanPage() {
 notFound();
 
 const router = useRouter();

 return (
 <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
 {/* Hero Section */}
 <section className="relative flex flex-col items-center justify-center text-center h-[55vh] sm:h-[60vh] md:h-[65vh] px-4 sm:px-6 overflow-hidden bg-gradient-to-r from-[#1a1f4b] to-[#841b2d] text-white">
 <div className="absolute inset-0 bg-[url('/trafficbg.png')] bg-cover bg-center opacity-25" />
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}
 className="relative z-10 max-w-3xl"
 >
 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 3, repeat: Infinity }}
 className="flex justify-center mb-4 sm:mb-6"
 >
 <Car className="w-12 sm:w-16 h-12 sm:h-16 text-yellow-400" />
 </motion.div>
 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 tracking-tight">
 Pay Your <span className="text-yellow-400">Traffic Challan</span>
 </h1>
 <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
 Lawizer: Skip the court hassle. Clear your traffic fines securely,
 instantly, and affordably.
 </p>
 </motion.div>
 </section>

 {/* Main Content */}
 <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-20">
 {/* Pay Your Challan Section */}
 <motion.section
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
 <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
 <div className="p-2 sm:p-3 bg-yellow-500/10 rounded-full">
 <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
 </div>
 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e172b]">
 Pay Your Challan
 </h2>
 </div>

 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
 A <strong>Traffic Challan</strong> (or E-Challan in its modern
 digital form) is an official legal document issued by the Traffic
 Police under the <strong>Motor Vehicles Act, 1988</strong>, to a
 motor vehicle owner or driver who has violated a traffic rule or
 regulation. It serves as an automated penalty notification,
 detailing the specific offense and fine amount. The e-challan system
 ensures transparency, efficiency, and accountability in traffic
 enforcement.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
 <div>
 <h3 className="text-lg sm:text-xl font-semibold text-[#841b2d] mb-2 sm:mb-3">
 Why is Timely Payment Needed?
 </h3>
 <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
 <li>• Avoid Legal Escalation</li>
 <li>• Prevent License Suspension</li>
 <li>• Prevent Financial Penalty Escalation</li>
 <li>• Ensure Transactional Transparency</li>
 <li>• Maintain a Clean Driving Record</li>
 <li>• Support Road Safety</li>
 </ul>
 </div>

 <div>
 <h3 className="text-lg sm:text-xl font-semibold text-[#841b2d] mb-2 sm:mb-3">
 Why Choose Lawizer for Your Challan Payment?
 </h3>
 <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
 <li>• Instant & Convenient : 24/7 Access</li>
 <li>• Secure & Transparent : Verified Data</li>
 <li>• Comprehensive Legal Support: Zero Court Visits</li>
 <li>• Affordable Resolution: Settle Complex Cases Easily</li>
 <li>• Digital Documentation : Instant Proof</li>
 </ul>
 </div>
 </div>

 {/* Buttons */}
 <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 space-y-3 sm:space-y-4">
 <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold bg-[#841b2d] hover:bg-[#6e1626] text-white rounded-xl shadow-lg transition-all">
 Pay Your Challan
 </button>
 <button className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-md font-medium border border-[#841b2d] text-[#841b2d] rounded-xl hover:bg-[#841b2d]/10 transition-all">
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
 <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
 <div className="p-2 sm:p-3 bg-red-500/10 rounded-full">
 <AlertTriangle className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" />
 </div>
 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e172b]">
 Dispute Your Challan
 </h2>
 </div>

 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
 Sometimes, a traffic challan may be issued wrongly — maybe your
 vehicle wasn’t at the location, the photo proof is unclear, or the
 system has an error. Lawizer’s “Dispute Your Challan” feature lets
 you legally challenge incorrect or unfair challans with expert
 lawyer assistance.
 </p>

 <div className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
 {[
 "Review and verify the challan evidence",
 "Draft and submit a legal reply or appeal",
 "Guide you through the online or in-person hearing process",
 "Keep you updated until resolution",
 ].map((item, idx) => (
 <div key={idx} className="flex items-start gap-2">
 <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mt-1" />
 <span>{item}</span>
 </div>
 ))}
 </div>

 <p className="mt-4 sm:mt-6 text-gray-700 italic text-sm sm:text-base">
 Lawizer — Turning Your Traffic Trouble into Legal Relief.
 </p>
 <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 space-y-3 sm:space-y-4">
 <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold bg-[#841b2d] hover:bg-[#6e1626] text-white rounded-xl shadow-lg transition-all">
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
 <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
 <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full">
 <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
 </div>
 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e172b]">
 Consult an Expert
 </h2>
 </div>

 <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
 Having any queries other than the above mentioned problems relating
 to your vehicle? Please feel free to consult our motor vehicles
 expert about it for free.
 </p>

 <div className="flex justify-center">
 <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold bg-[#1a1f4b] hover:bg-[#13173a] text-white rounded-xl shadow-lg transition-all">
 Consult Motor Vehicle Expert
 </button>
 </div>
 </motion.section>
 </div>
 </div>
 );
}
