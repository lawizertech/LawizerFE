"use client";

import React from "react";

export function LandingBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      
      {/* 1. Atmospheric Gradients & Glows */}
      {/* Base soft blue tint behind hero area */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1000px] bg-blue-50/40 rounded-full blur-[120px] transform translate-x-1/4 -translate-y-1/4 opacity-80" />
      
      {/* Subtle warm/orange Lawizer accent glow */}
      <div className="absolute top-[300px] right-[-100px] w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] transform opacity-80" />

      {/* Ambient Colored Orbs for Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />
      <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[150px]" />
      <div className="absolute top-[60%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[150px]" />

      {/* 2. Large Orbital / Metal Circles */}
      <div className="hidden md:flex absolute top-[-100px] right-[-150px] w-[1200px] h-[1200px] items-center justify-center opacity-80 pointer-events-none">
        {/* Outer Ring */}
        <div className="absolute w-full h-full rounded-full border-[1px] border-slate-300/40" />
        {/* Middle Ring */}
        <div className="absolute w-[80%] h-[80%] rounded-full border-[1.5px] border-slate-300/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]" />
        {/* Inner Ring */}
        <div className="absolute w-[60%] h-[60%] rounded-full border-[2px] border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
        {/* Core Ring */}
        <div className="absolute w-[40%] h-[40%] rounded-full border-[1px] border-slate-300/40" />
      </div>

      {/* 3. Dotted Grid Decorations */}
      {/* Desktop dots right */}
      <div className="hidden lg:block absolute top-[500px] right-[8%] w-32 h-32 opacity-[0.12]"
           style={{
             backgroundImage: "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
             backgroundSize: "16px 16px",
           }} />
           
      {/* Desktop dots left */}
      <div className="hidden lg:block absolute top-[150px] left-[5%] w-24 h-24 opacity-[0.08]"
           style={{
             backgroundImage: "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
             backgroundSize: "16px 16px",
           }} />
           
      {/* Mobile-specific rich background decorations */}
      {/* Full top-area grid on mobile */}
      <div className="lg:hidden absolute top-0 left-0 w-full h-[950px] opacity-[0.08] pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
             backgroundSize: "20px 20px",
           }} />

      {/* Vibrant High-contrast Mobile Glow Orbs */}
      <div className="lg:hidden absolute top-[20px] left-[-60px] w-[180px] h-[180px] bg-brand-red/25 rounded-full blur-[50px] pointer-events-none" />
      <div className="lg:hidden absolute top-[220px] right-[-60px] w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
      <div className="lg:hidden absolute top-[480px] left-[-30px] w-[180px] h-[180px] bg-amber-500/15 rounded-full blur-[50px] pointer-events-none" />
      <div className="lg:hidden absolute top-[700px] right-[-40px] w-[180px] h-[180px] bg-indigo-500/20 rounded-full blur-[50px] pointer-events-none" />

      {/* Mobile Orbital / Tech Rings for premium accent detail */}
      <div className="lg:hidden absolute top-[-60px] right-[-100px] w-[320px] h-[320px] flex items-center justify-center opacity-50 pointer-events-none">
        {/* Outer Ring */}
        <div className="absolute w-full h-full rounded-full border-[1px] border-slate-300/30" />
        {/* Middle Ring */}
        <div className="absolute w-[80%] h-[80%] rounded-full border-[1px] border-slate-300/40" />
        {/* Inner Ring */}
        <div className="absolute w-[60%] h-[60%] rounded-full border-[1px] border-slate-200/50 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]" />
      </div>

      {/* Soft structural diagonal ambient glow stripe */}
      <div className="lg:hidden absolute top-[150px] left-[-40px] w-[160px] h-[320px] bg-gradient-to-tr from-rose-500/5 to-transparent rounded-full rotate-45 blur-[35px]" />

      {/* Mobile single small dot pattern */}
      <div className="lg:hidden absolute top-[100px] right-[-20px] w-16 h-24 opacity-[0.08]"
           style={{
             backgroundImage: "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
             backgroundSize: "12px 12px",
           }} />

    </div>
  );
}
