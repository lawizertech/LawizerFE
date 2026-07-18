"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  return (
    <motion.button
      onClick={() => router.back()}
      aria-label="Go back"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
      whileHover="hovered"
      className="fixed top-[88px] left-5 z-[60] flex items-center gap-1.5 text-gray-400 hover:text-[#c92c41] transition-colors duration-200 group"
    >
      <motion.span
        variants={{ hovered: { x: -4 } }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={2} />
      </motion.span>
      <span className="text-sm font-medium tracking-wide">Back</span>
    </motion.button>
  );
}
