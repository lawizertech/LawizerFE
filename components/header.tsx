"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { HoverDropdown } from "./headerdropdown";

export function Header() {
  return (
    <motion.header
      initial={{
        width: "80px",
        height: "80px",
        borderRadius: "9999px",
        y: 0,
        opacity: 0,
      }}
      animate={{
        width: "90%",
        height: "auto",
        borderRadius: "2rem",
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg overflow"
    >
      <div className="container mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.location.replace("/")}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
              <img
                src="/logoLawizer.png"
                alt="Lawizer Logo"
                className="w-6 h-6"
              />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <HoverDropdown label="Services">
              <a href="/property" className="text-sm py-1 hover:text-[#c92c41]">
                Property
              </a>
              <a
                href="/civil-commercial"
                className="text-sm py-1 hover:text-[#c92c41]"
              >
                Civil & Criminal
              </a>
              <a href="/family" className="text-sm py-1 hover:text-[#c92c41]">
                Family Matters
              </a>
              <a href="/banking" className="text-sm py-1 hover:text-[#c92c41]">
                Banking Matters
              </a>
              <a href="/itr" className="text-sm py-1 hover:text-[#c92c41]">
                ITR-Filling
              </a>
              <a
                href="/startup-businesslegal"
                className="text-sm py-1 hover:text-[#c92c41]"
              >
                Startup & Business Legal
              </a>
              <a
                href="/documentation"
                className="text-sm py-1 hover:text-[#c92c41]"
              >
                Documentation
              </a>
              <a href="/challan" className="text-sm py-1 hover:text-[#c92c41]">
                Pay your Traffic Challan
              </a>
            </HoverDropdown>

            <HoverDropdown label="Documents">
              <a href="#" className="text-sm py-1 hover:text-[#c92c41]">
                Agreements
              </a>
              <a href="#" className="text-sm py-1 hover:text-[#c92c41]">
                Contracts
              </a>
              <a href="#" className="text-sm py-1 hover:text-[#c92c41]">
                Business Docs
              </a>
            </HoverDropdown>

            <HoverDropdown label="Resources">
              <a href="#" className="text-sm py-1 hover:text-[#c92c41]">
                Blogs
              </a>
              <a href="#" className="text-sm py-1 hover:text-[#c92c41]">
                Guides
              </a>
              <a href="#" className="text-sm py-1 hover:text-[#c92c41]">
                FAQs
              </a>
            </HoverDropdown>

            {["About", "Contact", "Login"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-[#c92c41] text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button className="bg-[#c92c41] hover:bg-[#a91e33] text-white px-6 py-2 rounded-full font-medium shadow-md">
            Get Legal Help
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
