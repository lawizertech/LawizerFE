"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Shield, Lock, PhoneCall, Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useState } from "react"

const consultationCategories = [
  "Family Law",
  "Business Law",
  "Real Estate",
  "Employment",
  "Intellectual Property",
  "Tax Law",
]

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 4

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[600px] overflow-hidden pt-20">
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
          <div className="bg-accent-brand rounded-full w-32 h-32 flex items-center justify-center border-4 border-white shadow-lg transform rotate-12">
            <div className="text-center transform -rotate-12">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-1" />
              <div className="text-sm font-black text-white leading-tight">
                100%
                <br />
                SECURE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expert Legal <span className="text-accent-brand">Solutions</span>
            <br />
            When You Need Them
          </h1>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-8">
            <p className="text-white text-sm">
              Connect with verified attorneys in minutes, starting at just $49/consultation
            </p>
          </div>

          {/* CTA and Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-xl">
              Start Consultation
            </Button>

            <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="flex -space-x-2">
                <Avatar className="w-8 h-8 border-2 border-slate-800">
                  <AvatarImage src="/professional-lawyer.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-slate-800">
                  <AvatarImage src="/female-attorney.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-slate-800">
                  <AvatarImage src="/male-lawyer.png" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">250+ Attorneys Online</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm rounded-lg px-4 py-3">
              <Phone className="w-6 h-6 text-primary" />
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">42 Active Calls</span>
                <div className="w-2 h-2 bg-accent-brand rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 mb-12">
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
                <div className="text-white font-semibold">Bank-Level Security</div>
                <div className="text-gray-300 text-sm">End-to-end encryption</div>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-600"></div>

            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6 text-primary" />
              <div>
                <div className="text-white font-semibold">24/7 Available</div>
                <div className="text-gray-300 text-sm">Video, audio & chat support</div>
              </div>
            </div>
          </div>

          {/* Consultation Categories */}
          <div className="flex items-center gap-4">
            <span className="text-white font-semibold text-sm uppercase">Practice Areas</span>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex flex-wrap gap-4">
              {consultationCategories.map((category) => (
                <button key={category} className="text-gray-300 hover:text-accent-brand text-sm transition-colors">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? "bg-primary" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % totalSlides)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
