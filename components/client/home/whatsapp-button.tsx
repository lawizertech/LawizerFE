"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={() => window.open("https://wa.me/919062815535", "_blank")}
          className="fixed bottom-4 right-4 z-50 cursor-pointer group"
        >
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_6px_rgba(37,211,102,0.5)]">
            <Image src="/whatsapp.png" alt="whatsapp" width={48} height={48} className="w-full h-full rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

