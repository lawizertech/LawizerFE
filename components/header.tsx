"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { HoverDropdown } from "./headerdropdown";

export function Header() {
  const services = [
    {
      title: "Property",
      tagline: "Property disputes keeping you up at night?",
      color: "from-blue-500/10 to-blue-500/30 text-blue-600",
      url: "/property",
      items: [
        "Property report",
        "Property registration (sales deed registration)",
        "Sales deed drafting",
        "Agreement to sale drafting",
        "Property paper review",
        "Sale agreement review",
        "Power of attorney",
        "Will registration",
        "Gift deed",
        "Joint development agreement",
        "Relinquishment deed",
        "Commercial lease agreement",
        "Rent agreement",
      ],
    },
    {
      title: "Civil & Criminal",
      tagline: "Fighting for your rights, one case at a time",
      color: "from-red-500/10 to-red-500/30 text-red-600",
      url: "/civil-commercial",
      items: [
        "Family law matters (divorce, custody, alimony)",
        "Property disputes",
        "Contract disputes",
        "Personal injury cases",
        "Employment law claims",
        "Violent crimes defense",
        "Property crimes",
        "White-collar crimes",
        "Financial frauds",
      ],
    },
    {
      title: "Family Matters",
      tagline: "Protecting families, preserving relationships",
      color: "from-pink-500/10 to-pink-500/30 text-pink-600",
      url: "/family",
      items: [
        "Divorce and marriage dissolution",
        "Maintenance and alimony",
        "Child custody and guardianship",
        "Property and inheritance disputes",
        "Domestic violence protection",
      ],
    },
    {
      title: "Banking Matters",
      tagline: "Your financial disputes, our expertise",
      color: "from-green-500/10 to-green-500/30 text-green-600",
      url: "/banking",
      items: [
        "Loan agreement",
        "Loan and debt recovery disputes",
        "Cheque dishonour cases",
        "Financial frauds and cybercrimes",
        "Customer service disputes",
      ],
    },
    {
      title: "ITR Filing",
      tagline: "Hassle-free filing and maximum tax savings",
      color: "from-teal-500/10 to-teal-500/30 text-teal-600",
      url: "/itr",
      items: [
        {
          section: "Individuals",
          items: [
            "ITR-1 (Salaried up to ₹50L)",
            "ITR-2 (Capital Gains/Foreign Assets)",
            "ITR-3 (Business/Professional Income)",
            "ITR-4 (Presumptive Scheme)",
          ],
        },
        {
          section: "Entities",
          items: ["ITR-5 (LLP, Firms, AOPs)", "ITR-6 (Companies)"],
        },
        // Placeholder for the "Show More" functionality to ensure 6 items are present
        "Tax saving consultations",
        "Form 16/26AS reconciliation",
      ],
    },
    {
      title: "Startup & Business Legal",
      tagline: "From idea to empire — built on solid legal ground",
      color:
        "from-purple-500/10 via-indigo-500/20 to-teal-500/30 text-purple-700",
      url: "/startup-businesslegal",
      items: [
        {
          section: "Start",
          items: [
            "Private limited company",
            "One person company",
            "Limited liability partnership",
            "Startup India registration",
            "MSME Udyam registration",
            "GST registration",
          ],
        },
        {
          section: "Grow",
          items: [
            "ISO certification",
            "Trademark registration",
            "Copyright registration",
          ],
        },
        {
          section: "Protect",
          items: [
            "Intellectual property assignment",
            "Shareholder subscription agreement",
            "Joint venture agreements",
          ],
        },
        {
          section: "Manage",
          items: [
            "Appointment of director",
            "Resignation of director",
            "Change in office address",
            "Increasing capital of company",
            "Closure of Pvt Ltd/OPC/LLP",
            "ROC return filing",
          ],
        },
      ],
    },
    {
      title: "Documentation",
      tagline: "Every word matters in legal documents",
      color: "from-amber-500/10 to-amber-500/30 text-amber-600",
      url: "/documentation",
      items: [
        "Franchise agreement",
        "Co-founder agreement",
        "Non-disclosure agreement",
        "Employment agreement",
        "Consultancy agreement",
        "Business partnership agreement",
        "Privacy policy",
        "Terms of use",
        "Service agreement",
        "Licensing agreement",
        "Loan agreement",
        "Power of attorney",
      ],
    },
    {
      title: "Pay Your Traffic Challan",
      tagline:
        "Lawizer: Skip the court hassle. Clear your traffic fines securely, instantly, and affordably.",
      color: "from-yellow-500/10 to-red-500/30 text-red-600",
      url: "/challan",
      items: [
        {
          section: "Pay Your Challan",
          items: [
            "Instant, secure e-challan payment",
            "Avoid legal escalation & license suspension",
            "Maintain a clean driving record",
            "Get digital proof immediately after payment",
            "24/7 support & verified payment channels",
          ],
        },
        {
          section: "View Your Challan",
          items: [
            "Check challan details using vehicle/chassis number",
            "View status, fine amount & violation info",
          ],
        },
        {
          section: "Dispute Your Challan",
          items: [
            "Challenge incorrect challans legally",
            "Expert lawyer review & legal drafting",
            "End-to-end case assistance till resolution",
          ],
        },
        {
          section: "Consult an Expert",
          items: [
            "Free consultation for any vehicle-related queries",
            "Connect instantly with motor vehicle law experts",
          ],
        },
      ],
    },
  ];

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
              {services.map((service, index) => (
                <div key={index} className="relative group/service">
                  {/* MAIN LINK */}
                  <a
                    href={service.url}
                    className="text-sm font-semibold py-1 hover:text-[#c92c41] flex items-center justify-between"
                  >
                    {service.title}

                    {service.items && service.items.length > 0 && (
                      <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                    )}
                  </a>

                  {/* RIGHT-SIDE SUBMENU (only shows if service has items) */}
                  {service.items && service.items.length > 0 && (
                    <div
                      className="absolute top-0 left-full ml-0 hidden group-hover/service:flex hover:flex  
          flex-col bg-white shadow-xl rounded-lg border p-4 w-72 z-50 max-h-88 overflow-y-scroll
          scrollbar-thin 
    scrollbar-thumb-gray-400 
    scrollbar-track-transparent"
                    >
                      {service.items.map((item, i) => {
                        if (typeof item === "object" && item.section) {
                          return (
                            <div key={i} className="mb-3">
                              <p className="text-xs font-bold text-gray-500 mb-1">
                                {item.section}
                              </p>

                              {item.items.map((sub, j) => (
                                <a
                                  key={j}
                                  href="#"
                                  className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-[#c92c41] block transition"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                          );
                        }

                        return (
                          <a
                            key={i}
                            href="#"
                            className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-[#c92c41] transition"
                          >
                            {String(item)}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
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
