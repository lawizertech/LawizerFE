"use client";

import React from "react";

export function LandingBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 transform-gpu">
      
      {/* 1. Atmospheric Gradients & Glows (Optimized CSS radial gradients) */}
      {/* Desktop atmospheric background */}
      <div 
        className="hidden lg:block absolute top-0 right-0 w-[1000px] h-[800px] pointer-events-none opacity-70"
        style={{
          background: "radial-gradient(circle at 70% 20%, rgba(219, 234, 254, 0.5) 0%, rgba(254, 226, 226, 0.25) 45%, transparent 70%)",
        }}
      />
      <div 
        className="hidden lg:block absolute top-[400px] left-[-100px] w-[700px] h-[700px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(202, 45, 66, 0.08) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* 2. Large Orbital / Metal Circles (Desktop Only) */}
      <div className="hidden md:flex absolute top-[-100px] right-[-150px] w-[1200px] h-[1200px] items-center justify-center opacity-70 pointer-events-none">
        <div className="absolute w-full h-full rounded-full border border-slate-300/40" />
        <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-300/50" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-white/60" />
        <div className="absolute w-[40%] h-[40%] rounded-full border border-slate-300/40" />
      </div>

      {/* 3. Dotted Grid Decorations */}
      <div 
        className="hidden lg:block absolute top-[500px] right-[8%] w-32 h-32 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }} 
      />
      <div 
        className="hidden lg:block absolute top-[150px] left-[5%] w-24 h-24 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }} 
      />

      {/* 4. Ultra-lightweight Mobile Background (Pure CSS radial gradients with 0 GPU blur stalls) */}
      <div 
        className="lg:hidden absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(circle at 85% 15%, rgba(202, 45, 66, 0.12) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)",
        }}
      />
      <div 
        className="lg:hidden absolute top-[500px] left-0 w-full h-[600px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 15% 50%, rgba(245, 158, 11, 0.08) 0%, rgba(59, 130, 246, 0.06) 45%, transparent 70%)",
        }}
      />
      <div 
        className="lg:hidden absolute top-0 left-0 w-full h-[800px] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} 
      />

    </div>
  );
}
