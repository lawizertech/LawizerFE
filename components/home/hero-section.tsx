"use client";

import { Button } from "@/components/ui/button";
import { Shield, Lock, PhoneCall, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import EmergencySOS from "./emergency-sos";

const consultationCategories = [
  "Family Law",
  "Business Law",
  "Real Estate",
  "Employment",
  "Intellectual Property",
  "Tax Law",
];

export function HeroSection() {
  const totalSlides = 4;

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 h-screen min-h-[600px] overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/guyy.png"
          alt="Professional consultation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
      </div>

      <div className="absolute top-24 right-8 z-10">
        <div className="relative">
          <div className="bg-accent-brand rounded-full w-26 h-26 flex items-center justify-center border-4 border-white shadow-lg transform rotate-12">
            <div className="text-center transform -rotate-12">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-1" />
              <div className="text-xs font-black text-white leading-tight">
                100%
                <br />
                SECURE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            You have been through{" "}
            <span className="text-accent-brand font-semibold">enough</span>, let
            us take it from{" "}
            <span className="text-accent-brand font-semibold">here</span>.
          </h1>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-8">
            <p className="text-white text-sm">
              Connect with verified attorneys in minutes —{" "}
              <span className="text-accent-brand font-bold">
                Free Consultation
              </span>
            </p>
          </div>

          <div className="max-w-3xl">
            {" "}
            {/* CTA and Stats */}
            <div className="flex flex-col items-start gap-6 mb-12">
              <div className="flex gap-6">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-xl"
                  onClick={() => (window.location.href = "/start-consultation")}
                >
                  Start Consultation
                </Button>
                <Button
                  className="bg-[#ff38c7] hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-xl"
                  onClick={() => (window.location.href = "/womensafety")}
                >
                  Women Help
                </Button>
              </div>

              <EmergencySOS />
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mb-12 w-[#740px]">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-white font-semibold flex items-center gap-1">
                    Trusted Platform
                    <Star className="w-4 h-4 text-accent-brand fill-accent-brand" />
                  </div>
                  <div className="text-gray-300 text-sm">4.9 ★ Rating</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-600"></div>

              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-white font-semibold">
                    Bank-Level Security
                  </div>
                  <div className="text-gray-300 text-sm">
                    End-to-end encryption
                  </div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-600"></div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-white font-semibold">24/7 Available</div>
                  <div className="text-gray-300 text-sm">
                    Video, audio & chat support
                  </div>
                </div>
              </div>
            </div>
            {/* Consultation Categories */}
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold text-sm uppercase">
                Practice Areas
              </span>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex flex-wrap gap-4">
                {consultationCategories.map((category) => (
                  <button
                    key={category}
                    className="text-gray-300 hover:text-accent-brand text-sm transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
