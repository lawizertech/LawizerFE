"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  Phone, 
  Calendar, 
  Check, 
  X, 
  User, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Briefcase,
  Lock,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ADVOCATES = [
  {
    id: "adv_01",
    name: "Adv. Chandramouli Bagchi",
    role: "General Practice, Civil & Criminal Litigation",
    experience: "25+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
  {
    id: "adv_02",
    name: "Adv. Himadree Ghosh",
    role: "Property, Criminal, Matrimonial, Writ, Drafting",
    experience: "20+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
  {
    id: "adv_03",
    name: "Adv. Rahul Das",
    role: "Civil Lawyer, Property Disputes, Documentation",
    experience: "15+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
  {
    id: "adv_04",
    name: "Adv. Indranil Banerjee",
    role: "Property, Criminal (NDPS), Drafting, Civil Litigation",
    experience: "18+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
];

const CAS = [
  {
    id: "ca_01",
    name: "CA Sayan Hajra",
    role: "GST, Income Tax, Audit & Compliance",
    experience: "12+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
  {
    id: "ca_02",
    name: "CA Preeti Jain",
    role: "Corporate Taxation, Statutory Audit, Finance",
    experience: "10+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
  {
    id: "ca_03",
    name: "CA Amit Verma",
    role: "Financial Planning, MSME, Business Advisory",
    experience: "8+ yrs exp",
    location: "Kolkata",
    image: "/user.png",
  },
];

export default function FreeConsultationPage() {
  const [showCallTypeModal, setShowCallTypeModal] = useState(false);
  const calendlyUrl = "https://calendly.com/lawizer";

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Hero Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Start Your Consultation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Connect with India's leading legal and financial experts instantly. 
            Reliable, confidential, and professional support at your fingertips.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Action Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="p-8 sm:p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Premium Consultation
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Free Consultation</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Book a direct session with our senior legal consultants. 
                  Whether it's property, business, or personal legal matters, 
                  we provide the clarity you need to move forward.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    Verified Advocates & CAs
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    100% Secure & Private
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    Instant Call Connect
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    Expert Documentation
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setShowCallTypeModal(true)}
                className="w-full sm:w-fit bg-[#c92c41] hover:bg-[#a82536] text-white px-10 py-7 text-xl rounded-2xl shadow-lg shadow-red-100 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 font-bold"
              >
                <Calendar className="w-6 h-6" />
                Book a Call Now
              </Button>
            </div>
          </motion.div>

          {/* Login Placeholder Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col justify-center text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Member Login</h3>
            <p className="text-slate-500 text-sm mb-8">
              Login or sign up to track your consultations and access legal documents.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Email Address" 
                  disabled
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 cursor-not-allowed"
                />
              </div>
              <Button className="w-full bg-slate-900 text-white py-6 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Continue with Lawizer
              </Button>
              <p className="text-xs text-slate-400">
                By continuing, you agree to Lawizer's Terms & Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Advocates Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Top Advocates</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVOCATES.map((adv, index) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.4 }}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <User className="w-12 h-12" />
                </div>
                <div className="w-20 h-20 bg-slate-100 rounded-3xl mb-6 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={adv.image} alt={adv.name} className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{adv.name}</h3>
                <p className="text-xs text-slate-500 font-semibold mb-6 uppercase tracking-wide leading-relaxed min-h-[48px]">{adv.role}</p>
                
                <div className="space-y-3 mb-8 border-t border-slate-50 pt-6">
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center">
                      <Clock className="w-3 h-3 text-slate-400" />
                    </div>
                    {adv.experience}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-slate-400" />
                    </div>
                    {adv.location}
                  </div>
                </div>

                <Button 
                  onClick={() => setShowCallTypeModal(true)}
                  className="w-full bg-white border border-slate-200 text-slate-700 hover:bg-[#c92c41] hover:text-white hover:border-[#c92c41] transition-all rounded-xl font-bold py-5"
                >
                  Book a Call
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CA Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Top Chartered Accountants</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAS.map((ca, index) => (
              <motion.div
                key={ca.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase className="w-12 h-12" />
                </div>
                <div className="w-20 h-20 bg-slate-100 rounded-3xl mb-6 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={ca.image} alt={ca.name} className="w-14 h-14" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{ca.name}</h3>
                <p className="text-sm text-slate-500 font-semibold mb-6 uppercase tracking-wide leading-relaxed min-h-[40px]">{ca.role}</p>
                
                <div className="space-y-4 mb-10 border-t border-slate-50 pt-8">
                  <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-slate-400" />
                    </div>
                    {ca.experience}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-slate-400" />
                    </div>
                    {ca.location}
                  </div>
                </div>

                <Button 
                  onClick={() => setShowCallTypeModal(true)}
                  className="w-full bg-white border border-slate-200 text-slate-700 hover:bg-[#c92c41] hover:text-white hover:border-[#c92c41] transition-all rounded-xl font-bold py-6 text-base"
                >
                  Book a Call
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Trust Footer */}
        <div className="text-center border-t border-slate-200 pt-16 pb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg shadow-sm p-1 border border-slate-100">
              <img src="/logoLawizer.jpg" alt="Lawizer" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
          </div>
          <p className="text-slate-400 text-sm mb-2">© 2026 Lawizer Legal Services. All rights reserved.</p>
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">Verified Professional Network</p>
        </div>
      </div>

      {/* Call Type Selection Modal */}
      <AnimatePresence>
        {showCallTypeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallTypeModal(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Select Call Type</h3>
                  <p className="text-slate-500 text-sm">Choose how you'd like to connect</p>
                </div>
                <button 
                  onClick={() => setShowCallTypeModal(false)}
                  className="p-3 hover:bg-slate-100 rounded-2xl transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="p-10 space-y-6">
                <a 
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-[1.5rem] border-2 border-slate-50 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-slate-900">Audio Call</div>
                    <div className="text-slate-500">Instant voice consultation</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-500" />
                </a>

                <a 
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-[1.5rem] border-2 border-slate-50 hover:border-purple-500 hover:bg-purple-50 transition-all group"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-slate-900">Video Call</div>
                    <div className="text-slate-500">Face-to-face consultation</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-purple-500" />
                </a>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center gap-3 justify-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Available Now</span>
                </div>
                <p className="text-xs text-center text-slate-400">
                  Redirecting to Calendly for secure slot booking.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
