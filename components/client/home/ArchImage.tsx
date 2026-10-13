"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ArchImageProps {
  src: string;
  alt: string;
}

export function ArchImage({ src, alt }: ArchImageProps) {
  return (
    <div className="relative w-48 h-56 sm:w-56 sm:h-64 flex-shrink-0 z-10 mx-auto md:mx-0">
      {/* Outer subtle glow/shadow behind the oval */}
      <div 
        className="absolute inset-0 bg-[var(--brand)] blur-2xl opacity-15 rounded-[50%]"
      />
      
      {/* The main animated wrapper */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative w-full h-full p-1.5"
      >
        {/* Double border effect */}
        <div 
          className="absolute inset-0 border-[1.5px] border-[rgba(202,45,66,0.4)] rounded-[50%]"
        />
        
        {/* Image container masking */}
        <div 
          className="relative w-full h-full overflow-hidden bg-gray-100 border border-[rgba(202,45,66,0.15)] shadow-lg rounded-[50%]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 192px, 224px"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
