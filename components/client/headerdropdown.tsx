"use client";

import { motion } from "framer-motion"; // Keep motion for the entrance animation

export function HoverDropdown({ label, children }: any) {
 return (
 <div className="relative group">
 {/* 1. Button: This is the primary trigger */}
 <button className="flex items-center gap-1 text-gray-700 hover:text-[#c92c41] text-sm font-medium transition-colors">
 {label}
 <svg
 className="w-4 h-4 group-hover:rotate-180 transition-transform"
 fill="none"
 stroke="currentColor"
 strokeWidth={2}
 viewBox="0 0 24 24"
 >
 <path d="M19 9l-7 7-7-7" />
 </svg>
 </button>

 {/* 2. Dropdown: This element is hidden by default and shown by 'group-hover:flex' */}
 <motion.div
 initial={{ opacity: 0, y: -6 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.15 }}
 className="absolute left-0 mt-0 hidden group-hover:flex flex-col bg-white shadow-xl rounded-xl border border-gray-200 p-4 w-48 z-[2000]"
 >
 {children}
 </motion.div>
 </div>
 );
}
