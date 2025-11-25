"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { HoverDropdown } from "./headerdropdown";
import { useEffect, useState } from "react";
import { ProfileCompletionModal } from "./auth/signupPopup";

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const uid = localStorage.getItem("uid");
      const email = localStorage.getItem("email");
      console.log(uid, email);
      if (uid && email) {
        console.log("Added uid and email");
        setLoggedUser({ uid, email });
      }
    }
  }, []);

  const services = [
    {
      title: "Property",
      tagline: "Property disputes keeping you up at night?",
      color: "from-blue-500/10 to-blue-500/30 text-blue-600",
      url: "/property",
      items: [
        // --- Verify/Review Routes ---
        {
          name: "Property report",
          url: "/property/verify/property-report",
        },
        {
          name: "Property paper review",
          url: "/property/verify/property-paper-review",
        },
        {
          name: "Agreement review",
          url: "/property/verify/agreement-review",
        },

        // --- Registration Routes ---
        {
          name: "Property registration",
          url: "/property/registration/property-registration",
        },
        {
          name: "Gift deed registration",
          url: "/property/registration/gift-deed",
        },
        {
          name: "Power of attorney registration",
          url: "/property/registration/power-of-attorney-reg",
        },

        // --- Drafting Routes ---
        {
          name: "Sale deed drafting",
          url: "/property/drafting/sale-deed",
        },
        {
          name: "Agreement to sale drafting",
          url: "/property/drafting/agreement-to-sale",
        },
        {
          name: "Will drafting",
          url: "/property/drafting/will-drafting",
        },
        {
          name: "Power of attorney drafting",
          url: "/property/drafting/power-of-attorney-drafting",
        },
        {
          name: "Joint development agreement drafting",
          url: "/property/drafting/joint-development-agreement",
        },
        {
          name: "Relinquishment deed drafting",
          url: "/property/drafting/relinquishment-deed",
        },
        {
          name: "Commercial lease agreement drafting",
          url: "/property/drafting/commercial-lease",
        },
        {
          name: "Rent agreement drafting",
          url: "/property/drafting/rent-agreement",
        },
      ],
    },
    {
      title: "Civil & Criminal",
      tagline: "Fighting for your rights, one case at a time",
      color: "from-red-500/10 to-red-500/30 text-red-600",
      url: "/civil-commercial",
      items: [
        {
          name: "Family law matters (divorce, custody, alimony)",
          url: "/civil/family-law-matters",
        },
        { name: "Property disputes", url: "/civil-commercial" },
        { name: "Contract disputes", url: "/civil-commercial" },
        {
          name: "Personal injury cases",
          url: "/civil-commercial",
        },
        {
          name: "Employment law claims",
          url: "/civil-commercial",
        },
        {
          name: "Violent crimes defense",
          url: "/civil-commercial",
        },
        { name: "Property crimes", url: "/civil-commercial" },
        {
          name: "White-collar crimes",
          url: "/civil-commercial",
        },
        {
          name: "Financial frauds",
          url: "/civil-commercial",
        },
      ],
    },

    {
      title: "Family Matters",
      tagline: "Protecting families, preserving relationships",
      color: "from-pink-500/10 to-pink-500/30 text-pink-600",
      url: "/family",
      items: [
        {
          name: "Divorce and marriage dissolution",
          url: "/family",
        },
        {
          name: "Maintenance and alimony",
          url: "/family",
        },
        {
          name: "Child custody and guardianship",
          url: "/family",
        },
        {
          name: "Property and inheritance disputes",
          url: "/family",
        },
        {
          name: "Domestic violence protection",
          url: "/family",
        },
      ],
    },
    {
      title: "Banking Matters",
      tagline: "Your financial disputes, our expertise",
      color: "from-green-500/10 to-green-500/30 text-green-600",
      url: "/banking",
      items: [
        { name: "Loan agreement", url: "/banking" },
        {
          name: "Loan and debt recovery disputes",
          url: "/banking/loan-advance-disputes",
        },
        {
          name: "Cheque dishonour cases",
          url: "/banking/cheque-bounce-s138",
        },
        {
          name: "Financial frauds and cybercrimes",
          url: "/banking/financial-frauds-cybercrimes",
        },
        {
          name: "Customer service disputes",
          url: "/banking",
        },
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
            { name: "ITR-1 (Salaried up to ₹50L)", url: "/itr/itr-1" },
            {
              name: "ITR-2 (Capital Gains/Foreign Assets)",
              url: "/itr/itr-2",
            },
            {
              name: "ITR-3 (Business/Professional Income)",
              url: "/itr/itr-3",
            },
            { name: "ITR-4 (Presumptive Scheme)", url: "/itr/itr-4" },
          ],
        },
        {
          section: "Entities",
          items: [
            { name: "ITR-5 (LLP, Firms, AOPs)", url: "/itr/itr-5" },
            { name: "ITR-6 (Companies)", url: "/itr/itr-6" },
          ],
        },
        {
          name: "Tax saving consultations",
          url: "/itr",
        },
        {
          name: "Form 16/26AS reconciliation",
          url: "/itr",
        },
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
            {
              name: "Private Limited Company Registration",
              url: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage",
            },
            {
              name: "One Person Company Registration",
              url: "/startup-businesslegal/startbusiness/OnePersonCompanyPage",
            },
            {
              name: "Limited Liability Partnership (LLP) Registration",
              url: "/startup-businesslegal/startbusiness/LLPPage",
            },
            {
              name: "Section 8 NGO Company Registration",
              url: "/startup-businesslegal/startbusiness/Section8NGOCompanyPage",
            },
            {
              name: "Public Limited Company Registration",
              url: "/startup-businesslegal/startbusiness/PublicLimitedCompanyPage",
            },
            {
              name: "Startup India Registration",
              url: "/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage",
            },
            {
              name: "GST Registration",
              url: "/startup-businesslegal/startbusiness/GSTRegistrationPage",
            },
          ],
        },
        {
          section: "Grow",
          items: [
            {
              name: "MSME Udyam Registration",
              url: "/startup-businesslegal/growbusiness/MSMEUdhayamRegistrationPage",
            },
            {
              name: "ISO Certification",
              url: "/startup-businesslegal/growbusiness/ISOCertificationPage",
            },
          ],
        },
        {
          section: "Protect",
          items: [
            {
              name: "Trademark Registration",
              url: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage",
            },
            {
              name: "Copyright Registration",
              url: "/startup-businesslegal/protectbusiness/CopyrightRegistrationPage",
            },
            {
              name: "Renew Trademark",
              url: "/startup-businesslegal/protectbusiness/RenewTrademarkPage",
            },
            {
              name: "Reply to Trademark Objection",
              url: "/startup-businesslegal/protectbusiness/ReplyToTrademarkObjectionPage",
            },
            {
              name: "Reply to Copyright Objection",
              url: "/startup-businesslegal/protectbusiness/ReplyToCopyrightObjectionPage",
            },
            {
              name: "Sell Your Trademark",
              url: "/startup-businesslegal/protectbusiness/SellYourTrademarkPage",
            },
          ],
        },
        {
          section: "Manage",
          items: [
            {
              name: "Appointment of Director",
              url: "/startup-businesslegal/managebusiness/AppointmentOfDirectorPage",
            },
            {
              name: "Resignation of Director",
              url: "/startup-businesslegal/managebusiness/ResignationOfDirectorPage",
            },
            {
              name: "Change in Office Address",
              url: "/startup-businesslegal/managebusiness/ChangeInOfficeAddressPage",
            },
            {
              name: "Increasing Capital of Company",
              url: "/startup-businesslegal/managebusiness/IncreasingCapitalOfCompanyPage",
            },
            {
              name: "Closure of Private Limited Company",
              url: "/startup-businesslegal/managebusiness/ClosureOfPvtLtdPage",
            },
            {
              name: "Closure of OPC",
              url: "/startup-businesslegal/managebusiness/ClosureOfOPCPage",
            },
            {
              name: "Closure of LLP",
              url: "/startup-businesslegal/managebusiness/ClosureOfLLPPage",
            },
            {
              name: "ROC Return Filing for Private Limited Company",
              url: "/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage",
            },
            {
              name: "ROC Return Filing for OPC",
              url: "/startup-businesslegal/managebusiness/ROCReturnFilingForOPCPage",
            },
            {
              name: "ROC Return Filing for LLP",
              url: "/startup-businesslegal/managebusiness/ROCReturnFilingForLLPPage",
            },
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
        {
          name: "Business Partnership Agreement",
          url: "/documentation/business-partnership-agreement",
        },
        {
          name: "Co-founder Agreement",
          url: "/documentation/co-founder-agreement",
        },
        {
          name: "Consultancy Agreement",
          url: "/documentation/consultancy-agreement",
        },
        {
          name: "Employment Agreement",
          url: "/documentation/employment-agreement",
        },
        {
          name: "Franchise Agreement",
          url: "/documentation/franchise-agreement",
        },
        {
          name: "IP Assignment Agreement",
          url: "/documentation/ip-assignment-agreement",
        },
        {
          name: "Joint Venture Agreement",
          url: "/documentation/joint-venture-agreement",
        },
        {
          name: "Letter of Intent",
          url: "/documentation/letter-of-intent",
        },
        {
          name: "Licensing Agreement",
          url: "/documentation/licensing-agreement",
        },
        {
          name: "Non-Disclosure Agreement (NDA)",
          url: "/documentation/non-disclosure-agreement",
        },
        {
          name: "Privacy Policy / Terms of Use",
          url: "/documentation/privacy-terms-of-use",
        },
        {
          name: "SAAS Agreement",
          url: "/documentation/saas-agreement",
        },
        {
          name: "Service Agreement / Term Sheet",
          url: "/documentation/service-agreement-term-sheet",
        },
        {
          name: "Shareholder Subscription Agreement",
          url: "/documentation/shareholder-subscription-agreement",
        },
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
            {
              name: "Instant, secure e-challan payment",
              url: "/challan",
            },
            {
              name: "Avoid legal escalation & license suspension",
              url: "/challan",
            },
            {
              name: "Maintain a clean driving record",
              url: "/challan",
            },
            {
              name: "Get digital proof immediately after payment",
              url: "/challan",
            },
            {
              name: "24/7 support & verified payment channels",
              url: "/challan",
            },
          ],
        },
        {
          section: "View Your Challan",
          items: [
            {
              name: "Check challan details using vehicle/chassis number",
              url: "/challan",
            },
            {
              name: "View status, fine amount & violation info",
              url: "/challan",
            },
          ],
        },
        {
          section: "Dispute Your Challan",
          items: [
            {
              name: "Challenge incorrect challans legally",
              url: "/challan",
            },
            {
              name: "Expert lawyer review & legal drafting",
              url: "/challan",
            },
            {
              name: "End-to-end case assistance till resolution",
              url: "/challan",
            },
          ],
        },
        {
          section: "Consult an Expert",
          items: [
            {
              name: "Free consultation for any vehicle-related queries",
              url: "/challan",
            },
            {
              name: "Connect instantly with motor vehicle law experts",
              url: "/challan",
            },
          ],
        },
      ],
    },
  ];

  const refereshUserData = () => {
    console.log("User Data Updated");

    if (typeof window !== "undefined") {
      const uid = localStorage.getItem("uid");
      const email = localStorage.getItem("email");
      console.log(uid, email);
      if (uid && email) {
        console.log("Refreshed uid and email");
        setLoggedUser({ uid, email });
      }
    }
  };

  return (
    <>
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
                <span className="text-2xl font-bold text-[#c92c41]">
                  Lawizer
                </span>
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

                      {service.items?.length > 0 && (
                        <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                      )}
                    </a>

                    {/* RIGHT SUBMENU */}
                    {service.items?.length > 0 && (
                      <div
                        className="absolute top-0 left-full ml-0 hidden group-hover/service:flex hover:flex  
           flex-col bg-white shadow-xl rounded-lg border p-4 w-72 z-50 max-h-88 overflow-y-scroll
           scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                      >
                        {service.items.map((item, i) => {
                          // 📌 CASE 1: Section group (ITR, Startup, Challan)
                          if ("section" in item && item.items) {
                            return (
                              <div key={i} className="mb-3">
                                <p className="text-xs font-bold text-gray-500 mb-1">
                                  {item.section}
                                </p>

                                {item.items.map((sub, j) => (
                                  <a
                                    key={j}
                                    href={sub.url}
                                    className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-[#c92c41] block transition"
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            );
                          }

                          // 📌 CASE 2: Normal flat item
                          return (
                            <a
                              key={i}
                              href={item.url}
                              className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-[#c92c41] transition"
                            >
                              {item.name}
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

              {["About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-[#c92c41] text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}

              {!loggedUser ? (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md"
                >
                  Login
                </Button>
              ) : (
                <div className="flex items-center gap-3 cursor-pointer">
                  <a
                    className="text-sm font-medium text-[#ff1d46]"
                    href="/profile"
                  >
                    Profile
                  </a>
                </div>
              )}
            </nav>

            <Button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-[#c92c41] hover:bg-[#a91e33] text-white px-6 py-2 rounded-full font-medium shadow-md"
            >
              Get Legal Help
            </Button>
          </motion.div>
        </div>
      </motion.header>
      {isAuthModalOpen && (
        <ProfileCompletionModal
          onClose={() => setIsAuthModalOpen(false)}
          onLoginOrSignupComplete={() => refereshUserData()}
        />
      )}
    </>
  );
}
