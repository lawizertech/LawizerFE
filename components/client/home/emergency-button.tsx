"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall } from "lucide-react";

export function EmergencyButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      // Show button after scrolling down 500px (past the hero section)
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919062815535";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={handleCall}
          className="fixed bottom-[64px] md:bottom-20 right-4 z-50 cursor-pointer w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-r from-red-600 to-[#ca2d42] rounded-full shadow-[0_8px_30px_rgba(202,45,66,0.3)] border border-white/20 select-none transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(202,45,66,0.5)] group"
        >
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <PhoneCall size={18} className="text-white" strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


