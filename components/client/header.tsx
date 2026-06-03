"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { HoverDropdown } from "./headerdropdown";
import { useEffect, useState } from "react";
import { SignInModal } from "../auth/signinPopup";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { usePathname, useRouter } from "next/navigation";
import { SignupModal } from "../auth/signupPopup";
import CompleteProfileModal from "../auth/CompleteProfileModal";
import { ForgotPasswordModal } from "../auth/forgotPasswordModal";

export function Header() {
  const pathname = usePathname();
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const [showContactCard, setShowContactCard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const {
    isSignupModalOpen,
    setIsSignupModalOpen,
    isSignInModalOpen,
    setIsSignInModalOpen,
    isCompleteProfileModalOpen,
    setIsCompleteProfileModalOpen,
  } = useAuth();
  const router = useRouter();

  const services = [
    {
      title: "Property",
      tagline: "Property Disputes Keeping You Up at Night?",
      color: "from-blue-500/10 to-blue-500/30 text-blue-600",
      url: "/property",
      items: [
        // --- Verify/Review Routes ---
        { name: "Property Report", url: "/property/verify/property-report" },
        {
          name: "Property Paper Review",
          url: "/property/verify/property-paper-review",
        },
        { name: "Agreement Review", url: "/property/verify/agreement-review" },

        // --- Registration Routes ---
        {
          name: "Property Registration",
          url: "/property/registration/property-registration",
        },
        {
          name: "Gift Deed Registration",
          url: "/property/registration/gift-deed",
        },

        // --- Drafting Routes ---
        { name: "Sale Deed Drafting", url: "/property/drafting/sale-deed" },
        {
          name: "Agreement to Sale Drafting",
          url: "/property/drafting/agreement-to-sale",
        },
        { name: "Will Drafting", url: "/property/drafting/will-drafting" },
        {
          name: "Joint Development Agreement Drafting",
          url: "/property/drafting/joint-development-agreement",
        },
        {
          name: "Relinquishment Deed Drafting",
          url: "/property/drafting/relinquishment-deed",
        },
        {
          name: "Commercial Lease Agreement Drafting",
          url: "/property/drafting/commercial-lease",
        },
        {
          name: "Rent Agreement Drafting",
          url: "/property/drafting/rent-agreement",
        },
      ],
    },

    // {
    //   title: "Civil & Criminal",
    //   tagline: "Fighting for Your Rights, One Case at a Time",
    //   color: "from-red-500/10 to-red-500/30 text-red-600",
    //   url: "/civil-commercial",
    //   items: [
    //     {
    //       name: "Family Law Matters (Divorce, Custody, Alimony)",
    //       url: "/civil-commercial",
    //     },
    //     { name: "Property Disputes", url: "/civil-commercial" },
    //     { name: "Contract Disputes", url: "/civil-commercial" },
    //     { name: "Personal Injury Cases", url: "/civil-commercial" },
    //     { name: "Employment Law Claims", url: "/civil-commercial" },
    //     { name: "Violent Crimes Defense", url: "/civil-commercial" },
    //     { name: "Property Crimes", url: "/civil-commercial" },
    //     { name: "White-Collar Crimes", url: "/civil-commercial" },
    //     { name: "Financial Frauds", url: "/civil-commercial" },
    //   ],
    // },

    /*{
      title: "Family Matters",
      tagline: "Protecting Families, Preserving Relationships",
      color: "from-pink-500/10 to-pink-500/30 text-pink-600",
      url: "/family",
      items: [
        { name: "Divorce and Marriage Dissolution", url: "/family" },
        { name: "Maintenance and Alimony", url: "/family" },
        { name: "Child Custody and Guardianship", url: "/family" },
        { name: "Property and Inheritance Disputes", url: "/family" },
        { name: "Domestic Violence Protection", url: "/family" },
      ],
    },*/

    /*{
      title: "Banking Matters",
      tagline: "Your Financial Disputes, Our Expertise",
      color: "from-green-500/10 to-green-500/30 text-green-600",
      url: "/banking",
      items: [
        { name: "Loan Agreement", url: "/banking" },
        {
          name: "Loan and Debt Recovery Disputes",
          url: "/banking/loan-advance-disputes",
        },
        { name: "Cheque Dishonour Cases", url: "/banking/cheque-bounce-s138" },
        {
          name: "Financial Frauds and Cybercrimes",
          url: "/banking/digital-banking-fraud",
        },
        { name: "Customer Service Disputes", url: "/banking" },
      ],
    },*/

    {
      title: "ITR Filing",
      tagline: "Hassle-Free Filing and Maximum Tax Savings",
      color: "from-teal-500/10 to-teal-500/30 text-teal-600",
      url: "/itr",
      items: [
        {
          section: "Individuals",
          items: [
            { name: "ITR-1 (Salaried up to ₹50L)", url: "/itr/itr-1" },
            { name: "ITR-2 (Capital Gains/Foreign Assets)", url: "/itr/itr-2" },
            { name: "ITR-3 (Business/Professional Income)", url: "/itr/itr-3" },
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
        { name: "Tax Saving Consultations", url: "/itr" },
        { name: "Form 16/26AS Reconciliation", url: "/itr" },
      ],
    },

    {
      title: "Startup & Business Legal",
      tagline: "From Idea to Empire — Built on Solid Legal Ground",
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
              url: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage",
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
      tagline: "Every Word Matters in Legal Documents",
      color: "from-amber-500/10 to-amber-500/30 text-amber-600",
      url: "/documentation",
      items: [
        {
          name: "Business Partnership Agreement",
          url: "/documentation/business-partnership-agreement",
        },
        {
          name: "Co-Founder Agreement",
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
        { name: "Letter of Intent", url: "/documentation/letter-of-intent" },
        {
          name: "Licensing Agreement",
          url: "/documentation/licensing-agreement",
        },
        {
          name: "Non-Disclosure Agreement (NDA)",
          url: "/documentation/non-disclosure-agreement",
        },
        {
          name: "Power of Attorney Drafting",
          url: "/documentation/power-of-attorney-drafting",
        },
        {
          name: "Power of Attorney Registration",
          url: "/documentation/power-of-attorney-registration",
        },
        {
          name: "Privacy Policy / Terms of Use",
          url: "/documentation/privacy-terms-of-use",
        },
        { name: "SAAS Agreement", url: "/documentation/saas-agreement" },
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

    //{
    //  title: "Pay Your Traffic Challan",
    //  tagline:
    //    "Lawizer: Skip the Court Hassle. Clear Your Traffic Fines Securely, Instantly, and Affordably.",
    //  color: "from-yellow-500/10 to-red-500/30 text-red-600",
    //  url: "/challan",
    //  items: [
    //    {
    //      section: "Pay Your Challan",
    //      items: [
    //        { name: "Instant, Secure E-Challan Payment", url: "/challan" },
    //        {
    //          name: "Avoid Legal Escalation & License Suspension",
    //          url: "/challan",
    //        },
    //        { name: "Maintain a Clean Driving Record", url: "/challan" },
    //        {
    //          name: "Get Digital Proof Immediately After Payment",
    //          url: "/challan",
    //        },
    //        {
    //          name: "24/7 Support & Verified Payment Channels",
    //          url: "/challan",
    //        },
    //      ],
    //    },
    //    {
    //      section: "View Your Challan",
    //      items: [
    //        {
    //          name: "Check Challan Details Using Vehicle/Chassis Number",
    //          url: "/challan",
    //        },
    //        {
    //          name: "View Status, Fine Amount & Violation Info",
    //          url: "/challan",
    //        },
    //      ],
    //    },
    //    {
    //      section: "Dispute Your Challan",
    //      items: [
    //        { name: "Challenge Incorrect Challans Legally", url: "/challan" },
    //        { name: "Expert Lawyer Review & Legal Drafting", url: "/challan" },
    //        {
    //          name: "End-to-End Case Assistance Till Resolution",
    //          url: "/challan",
    //        },
    //      ],
    //    },
    //    {
    //      section: "Consult an Expert",
    //      items: [
    //        {
    //          name: "Free Consultation for Any Vehicle-Related Queries",
    //          url: "/challan",
    //        },
    //        {
    //          name: "Connect Instantly With Motor Vehicle Law Experts",
    //          url: "/challan",
    //        },
    //      ],
    //    },
    //  ],
    //},
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const uid = localStorage.getItem("uid");
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (uid && email && token && role) {
        setLoggedUser({ uid, email, token, role });
      }
    }
  }, []);

  const hideNavbarSections = pathname.startsWith("/expert");

  const refereshUserData = () => {
    if (typeof window !== "undefined") {
      const uid = localStorage.getItem("uid");
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (uid && email && token && role) {
        setLoggedUser({ uid, email, token, role });
      }
    }
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // lock scroll when mobile menu open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";
  const isDashboard =
    pathname.startsWith("/user") || pathname.startsWith("/expert");

  return (
    <>
      <motion.header
        initial={{
          width: isHome ? "80px" : "100%",
          opacity: 0,
          y: isHome ? 0 : -20,
          borderRadius: isHome ? "9999px" : "0px",
        }}
        animate={{
          width: isHome ? "90%" : "100%",
          opacity: 1,
          y: 0,
          borderRadius: isHome ? "2rem" : "0px",
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
    fixed z-50 bg-white/80 backdrop-blur-md shadow-md
    ${isHome ? "top-4 left-1/2 -translate-x-1/2" : "top-0 left-0"}
    ${isHome ? "border border-gray-200/50" : "border-none"}
    w-full
  `}
      >
        <div
          className={`
    mx-auto
    ${isHome ? "max-w-7xl px-4 py-4" : "w-full px-6 py-5"}
  `}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center justify-between"
          >
            {/* Logo */}
            <Link
              className="flex items-center gap-2 cursor-pointer"
              href="/"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                <img
                  src="/logoLawizer.jpg"
                  alt="Lawizer Logo"
                  className="w-7 h-7"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#c92c41]">
                  Lawizer
                </span>
              </div>
            </Link>

            {/* Navigation */}
            {!hideNavbarSections && (
              <nav className="hidden lg:flex items-center gap-8">
                <HoverDropdown label="Services">
                  {services.map((service, index) => (
                    <div key={index} className="relative group/service">
                      {/* MAIN LINK */}
                      <Link
                        href={service.url}
                        className="text-sm font-semibold py-1 hover:text-[#c92c41] flex items-center justify-between"
                      >
                        {service.title}

                        {service.items?.length > 0 && (
                          <ChevronDown className="ml-2 h-4 w-4 -rotate-90" />
                        )}
                      </Link>

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
                                    <Link
                                      key={j}
                                      href={sub.url}
                                      className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-[#c92c41] block transition"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              );
                            }

                            // 📌 CASE 2: Normal flat item
                            return (
                              <Link
                                key={i}
                                href={item.url}
                                className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-[#c92c41] transition"
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </HoverDropdown>

                <HoverDropdown label="Resources">
                  <Link
                    href="/blogs"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/news"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    News
                  </Link>
                  <Link
                    href="/guides"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    Guides
                  </Link>
                  <Link href="/faqs" className="text-sm py-1 hover:text-[#c92c41]">
                    FAQs
                  </Link>
                  <Link
                    href="/careers"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    Careers
                  </Link>
                </HoverDropdown>

                <HoverDropdown label="Legal">
                  <Link
                    href="/privacy-policy"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/attorney-terms"
                    className="text-sm py-1 hover:text-[#c92c41]"
                  >
                    Attorney Terms & Conditions
                  </Link>
                </HoverDropdown>

                <Link
                  onClick={handleLinkClick}
                  href="/about"
                  className="text-gray-700 hover:text-[#c92c41] text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  onClick={handleLinkClick}
                  href="/contact"
                  className="text-gray-700 hover:text-[#c92c41] text-sm font-medium transition-colors"
                >
                  Contact
                </Link>

                {!loggedUser ? (
                  <Button
                    onClick={() => setIsSignInModalOpen(true)}
                    className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md"
                  >
                    Login
                  </Button>
                ) : loggedUser.role === "USER" ? (
                  <div className="flex items-center gap-8 cursor-pointer">
                    <Link
                      className="text-sm font-medium text-[#ff1d46]"
                      href="/profile"
                    >
                      Profile
                    </Link>
                    <Link
                      className="text-sm font-medium text-gray-700"
                      href="/user/dashboard"
                    >
                      Dashboard
                    </Link>
                  </div>
                ) : loggedUser.role === "EXPERT" ? (
                  <Link
                    className="text-sm font-medium text-gray-700"
                    href="/expert/dashboard"
                  >
                    Dashboard
                  </Link>
                ) : null}
              </nav>
            )}

            <div className="flex items-center lg:hidden">
              <Link
                href="/free-consultation"
                className="bg-[#c92c41] hover:bg-[#a91e33] text-white px-4 py-2 rounded-full font-medium shadow-md mr-3 text-sm flex items-center justify-center"
              >
                Help
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-10 w-10 text-[#c92c41] hover:bg-gray-100"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            <Link
              href="/free-consultation"
              className="bg-[#c92c41] hover:bg-[#a91e33] text-white px-6 py-2 rounded-full font-medium shadow-md hidden lg:inline-flex items-center justify-center"
            >
              Get Legal Help
            </Link>
          </motion.div>
        </div>
      </motion.header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay behind drawer (semi-transparent) */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer — full width, slides in from left */}
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed inset-0 z-50 bg-white overflow-y-auto"
              aria-modal="true"
              role="dialog"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link
                  className="flex items-center gap-2 cursor-pointer"
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                    <img
                      src="/logoLawizer.jpg"
                      alt="Lawizer Logo"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#c92c41]">
                      Lawizer
                    </span>
                  </div>
                </Link>

                <div className="flex items-center gap-3">
                  <Link
                    href="/free-consultation"
                    className="bg-[#c92c41] hover:bg-[#a91e33] text-white px-4 py-2 rounded-full font-medium shadow-md text-sm flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Help
                  </Link>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Auth Buttons */}
                {!loggedUser ? (
                  <div className="flex gap-3 mb-6">
                    <Button
                      className="flex-1 bg-blue-600 text-white"
                      onClick={() => {
                        setIsSignupModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Sign Up
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded border-blue-600 text-blue-600"
                      onClick={() => {
                        setIsSignInModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Login
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 mb-6 pb-6 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#c92c41] font-bold">
                        {loggedUser.email[0].toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900 truncate max-w-[150px]">
                          {loggedUser.email}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">
                          {loggedUser.role.toLowerCase()}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      {/* DASHBOARD LINK START */}
                      {loggedUser.role === "USER" ? (
                        <>
                          <Link
                            href="/user/dashboard"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-semibold text-gray-700 flex items-center gap-2"
                          >
                            Dashboard
                          </Link>
                          <Link
                            href="/profile"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-semibold text-[#ff1d46] flex items-center gap-2"
                          >
                            My Profile
                          </Link>
                        </>
                      ) : loggedUser.role === "EXPERT" ? (
                        <Link
                          href="/expert/dashboard"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-semibold text-gray-700 flex items-center gap-2"
                        >
                          Dashboard
                        </Link>
                      ) : null}
                      {/* DASHBOARD LINK END */}
                    </div>
                  </div>
                )}
                {/* Main Links */}
                <div className="flex flex-col gap-4">
                  <Link
                    onClick={handleLinkClick}
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    About
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Contact
                  </Link>

                  <h3 className="text-xl font-bold text-[#c92c41] mt-6">
                    Services
                  </h3>

                  {/* Expandable service list (simple toggles per service) */}
                  {services.map((service, idx) => (
                    <MobileServiceItem
                      key={idx}
                      service={service}
                      onClose={() => setMobileMenuOpen(false)}
                    />
                  ))}

                  <h3 className="text-xl font-bold text-[#c92c41] mt-6">
                    Resources
                  </h3>
                  <Link
                    onClick={handleLinkClick}
                    href="/blogs"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Blogs
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/news"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    News
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/guides"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Guides
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/faqs"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    FAQs
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/careers"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Careers
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#c92c41] mt-6">
                    Legal
                  </h3>
                  <Link
                    onClick={handleLinkClick}
                    href="/privacy-policy"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/terms"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/attorney-terms"
                    className="text-lg font-medium text-gray-700 hover:text-[#c92c41]"
                  >
                    Attorney Terms & Conditions
                  </Link>
                </div>

                <div className="mt-8">
                  <Link
                    href="/free-consultation"
                    className="w-full bg-[#c92c41] text-white py-3 rounded-lg font-semibold shadow-md flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Legal Help
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContactCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-[320px] relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowContactCard(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Details
              </h2>

              {/* Phone */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">Phone</p>
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg mt-1">
                  <span className="font-medium text-gray-800">
                    +91 90628 15535
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("+919062815535");
                    }}
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg mt-1">
                  <span className="font-medium text-gray-800">
                    admin@lawizer.com
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("admin@lawizer.com");
                    }}
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      {isSignupModalOpen && (
        <SignupModal
          onClose={() => setIsSignupModalOpen(false)}
          onSignInRedirect={() => {
            setIsSignupModalOpen(false);
            setIsSignInModalOpen(true);
          }}
        />
      )}
      {isSignInModalOpen && (
        <SignInModal
          onClose={() => setIsSignInModalOpen(false)}
          onSignupRedirect={() => {
            setIsSignInModalOpen(false);
            setIsSignupModalOpen(true);
          }}
          onForgotPassword={() => {
            setIsSignInModalOpen(false);
            setIsForgotPasswordOpen(true);
          }}
          onLoginSuccess={(data) => {
            refereshUserData();
            if (!data.isProfileComplete) setIsCompleteProfileModalOpen(true);
          }}
        />
      )}

      {isForgotPasswordOpen && (
        <ForgotPasswordModal
          onClose={() => setIsForgotPasswordOpen(false)}
          onBackToLogin={() => {
            setIsForgotPasswordOpen(false);
            setIsSignInModalOpen(true);
          }}
        />
      )}
      {isCompleteProfileModalOpen && (
        <CompleteProfileModal
          onClose={() => setIsCompleteProfileModalOpen(false)}
          onDone={() => setIsCompleteProfileModalOpen(false)}
        />
      )}
    </>
  );
}

function MobileServiceItem({
  service,
  onClose,
}: {
  service: any;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-3">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between text-left py-3"
        aria-expanded={open}
      >
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{service.title}</span>
          {service.tagline && (
            <span className="text-sm text-gray-500">{service.tagline}</span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pl-3 pr-2 overflow-hidden"
          >
            {"section" in (service.items?.[0] || {}) ? (
              service.items.map((sec: any, sIdx: number) => (
                <div key={sIdx} className="mb-3">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    {sec.section}
                  </p>
                  <div className="flex flex-col gap-2">
                    {sec.items.map((it: any, iIdx: number) => (
                      <Link
                        key={iIdx}
                        href={it.url}
                        onClick={onClose}
                        className="text-base text-gray-700"
                      >
                        {it.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-2">
                {service.items?.map((it: any, iIdx: number) => (
                  <Link
                    key={iIdx}
                    href={it.url}
                    onClick={onClose}
                    className="text-base text-gray-700"
                  >
                    {it.name}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
