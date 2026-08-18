"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Briefcase } from "lucide-react";
import { HoverDropdown } from "./headerdropdown";
import { useEffect, useState } from "react";
import { SignInModal } from "../auth/signinPopup";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { usePathname, useRouter } from "next/navigation";
import { SignupModal } from "../auth/signupPopup";
import CompleteProfileModal from "../auth/CompleteProfileModal";
import { ForgotPasswordModal } from "../auth/forgotPasswordModal";
import { ProfessionalModal } from "../auth/ProfessionalModal";
import { services } from "./header-data";
import { MobileServiceItem } from "./MobileServiceItem";
import UserAvatar from "@/components/ui/UserAvatar";
import BackButton from "./BackButton";

export function Header() {
  const pathname = usePathname();
  const [showContactCard, setShowContactCard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isProfessionalModalOpen, setIsProfessionalModalOpen] = useState(false);
  const {
    user,
    refreshUser,
    isSignupModalOpen,
    setIsSignupModalOpen,
    isSignInModalOpen,
    setIsSignInModalOpen,
    isCompleteProfileModalOpen,
    setIsCompleteProfileModalOpen,
  } = useAuth();
  const router = useRouter();

  const hideNavbarSections = pathname.startsWith("/expert");

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

  const isHome = true;
  const isDashboard = pathname.startsWith("/user") || pathname.startsWith("/expert");

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          fixed z-50 transition-all duration-300
          bg-white/95 backdrop-blur-md
          shadow-[0_8px_30px_rgb(0,0,0,0.04)]
          ${isHome
            ? "top-0 left-0 w-full rounded-none border-b border-gray-100 lg:top-5 lg:left-1/2 lg:-translate-x-1/2 lg:w-[92%] lg:max-w-7xl lg:rounded-full lg:border lg:border-gray-200/60"
            : "top-0 left-0 w-full rounded-none border-b border-gray-100"
          }
        `}
      >
        <div
          className={`
            mx-auto
            ${isHome ? "max-w-7xl px-4 py-3 lg:py-4" : "w-full px-4 lg:px-6 py-4 lg:py-5"}
          `}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-between"
          >
            {/* Logo and Back Button */}
            <div className="flex items-center gap-3 sm:gap-5">
              <BackButton />
              <Link className="flex items-center gap-2.5 cursor-pointer transition-transform hover:scale-105" href="/">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50">
                  <img src="/Lawizer_final.png" alt="Lawizer Logo" className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 object-contain rounded-xl" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-montserrat font-bold text-black tracking-tight">
                    LAWIZER
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            {!hideNavbarSections && (
              <nav className="hidden lg:flex items-center gap-8">
                <HoverDropdown label="Services">
                  {services.map((service, index) => (
                    <div key={index} className="relative group/service">
                      {/* MAIN LINK */}
                      <Link
                        href={service.url}
                        className="text-sm font-semibold py-1 hover:text-brand-red flex items-center justify-between"
                      >
                        {service.title}

                        {service.items?.length > 0 && <ChevronDown className="ml-2 h-4 w-4 -rotate-90" />}
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
                                  <p className="text-xs font-bold text-gray-500 mb-1">{item.section}</p>

                                  {item.items.map((sub, j) => (
                                    <Link
                                      key={j}
                                      href={sub.url}
                                      className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-brand-red block transition"
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
                                className="text-sm py-1 px-2 rounded hover:bg-gray-100 hover:text-brand-red transition"
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
                  <Link href="/blogs" className="text-sm py-1 hover:text-brand-red">
                    Blogs
                  </Link>
                  <Link href="/news" className="text-sm py-1 hover:text-brand-red">
                    News
                  </Link>
                  <Link href="/guides" className="text-sm py-1 hover:text-brand-red">
                    Guides
                  </Link>
                  <Link href="/faqs" className="text-sm py-1 hover:text-brand-red">
                    FAQs
                  </Link>
                  <Link href="/careers" className="text-sm py-1 hover:text-brand-red">
                    Careers
                  </Link>
                </HoverDropdown>

                {/* <HoverDropdown label="Legal">
 <Link
 href="/privacy-policy"
 className="text-sm py-1 hover:text-brand-red"
 >
 Privacy Policy
 </Link>
 <Link
 href="/terms"
 className="text-sm py-1 hover:text-brand-red"
 >
 Terms of Service
 </Link>
 <Link
 href="/attorney-terms"
 className="text-sm py-1 hover:text-brand-red"
 >
 Attorney Terms & Conditions
 </Link>
 </HoverDropdown> */}

                <Link
                  onClick={handleLinkClick}
                  href="/about"
                  className="text-gray-700 hover:text-brand-red text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  onClick={handleLinkClick}
                  href="/contact"
                  className="text-gray-700 hover:text-brand-red text-sm font-medium transition-colors"
                >
                  Contact
                </Link>

                {!user ? (
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => setIsSignInModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 text-xs font-semibold shadow-xs"
                    >
                      Login
                    </Button>
                    <button
                      onClick={() => setIsProfessionalModalOpen(true)}
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-4 py-2 text-xs font-semibold shadow-xs flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <Briefcase size={13} />
                      <span>Professional Login</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 cursor-pointer">
                    <Link href="/profile" className="flex items-center gap-2" title="My Profile">
                      <HeaderUserAvatar user={user} size="sm" />
                    </Link>
                    <Link
                      className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors"
                      href={
                        user.role?.toUpperCase() === "EXPERT" ||
                        user.role?.toUpperCase() === "PROFESSIONAL" ||
                        user.role?.toUpperCase() === "LAWYER"
                          ? "/expert/dashboard"
                          : "/user/dashboard"
                      }
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </nav>
            )}

            <div className="flex items-center lg:hidden">
              {!user ? (
                <Button
                  onClick={() => setIsSignInModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-0 h-9 rounded-full font-semibold shadow-sm mr-2 text-[13px] flex items-center justify-center transition-all"
                >
                  Login
                </Button>
              ) : (
                <Link
                  href={user.role === "EXPERT" ? "/expert/dashboard" : "/user/dashboard"}
                  className="bg-brand-red hover:brightness-110 text-white px-5 py-0 h-9 rounded-full font-semibold shadow-sm mr-2 text-[13px] flex items-center justify-center transition-all"
                >
                  Dashboard
                </Link>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-11 w-11 text-brand-red hover:bg-gray-100 flex items-center justify-center rounded-xl"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            <Link
              href="/free-consultation"
              className="bg-brand-red hover:brightness-110 text-white px-6 py-2 rounded-full font-medium shadow-md hidden lg:inline-flex items-center justify-center"
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
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                <Link
                  className="flex items-center gap-2 cursor-pointer"
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-sm border border-gray-100">
                    <img src="/Lawizer_final.png" alt="Lawizer Logo" className="w-7.5 h-7.5 object-contain rounded-xl" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-montserrat font-extrabold text-[var(--brand)] tracking-tight">
                      Lawizer
                    </span>
                  </div>
                </Link>

                <div className="flex items-center gap-2">
                  <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-5 pb-24">
                {/* Auth Buttons */}
                {!user ? (
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-11 rounded-xl shadow-sm font-semibold tracking-wide"
                        onClick={() => {
                          setIsSignupModalOpen(true);
                          setMobileMenuOpen(false);
                        }}
                      >
                        Sign Up
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 rounded-xl h-11 font-extrabold text-blue-600 text-xs hover:text-white hover:bg-red-500"
                        onClick={() => {
                          setIsSignInModalOpen(true);
                          setMobileMenuOpen(false);
                        }}
                      >
                        Login
                      </Button>
                    </div>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setIsProfessionalModalOpen(true);
                      }}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11 text-[13px] font-bold text-center flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
                    >
                      <Briefcase size={16} />
                      <span>Professional Login</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <HeaderUserAvatar user={user} size="md" />
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-[15px] font-bold text-gray-900 truncate">
                          {user.email}
                        </span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{user.role}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-2 border-t border-gray-200/60">
                      {/* DASHBOARD LINK START */}
                      {user.role?.toUpperCase() === "EXPERT" ||
                      user.role?.toUpperCase() === "PROFESSIONAL" ||
                      user.role?.toUpperCase() === "LAWYER" ? (
                        <Link
                          href="/expert/dashboard"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[15px] font-semibold text-gray-700 flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          Dashboard
                        </Link>
                      ) : (
                        <>
                           <Link
                             href="/user/dashboard"
                             onClick={() => setMobileMenuOpen(false)}
                             className="text-[15px] font-semibold text-gray-700 flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                           >
                             Dashboard
                           </Link>
                           <Link
                             href="/profile"
                             onClick={() => setMobileMenuOpen(false)}
                             className="text-[15px] font-semibold text-[var(--brand)] flex items-center gap-2 p-2 hover:bg-red-50 rounded-lg transition-colors"
                           >
                             My Profile
                           </Link>
                        </>
                      )}
                      {/* DASHBOARD LINK END */}
                    </div>
                  </div>
                )}
                
                {/* Main Links */}
                <div className="mb-8">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Menu</div>
                  <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden">
                    <Link
                      onClick={handleLinkClick}
                      href="/about"
                      className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 border-b border-gray-100 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      href="/contact"
                      className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 transition-colors"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Services</div>
                  <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                    {/* Expandable service list (simple toggles per service) */}
                    {services.map((service, idx) => (
                      <div key={idx} className="px-2 py-1">
                        <MobileServiceItem service={service} onClose={() => setMobileMenuOpen(false)} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Resources</div>
                  <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden">
                    <Link onClick={handleLinkClick} href="/blogs" className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 border-b border-gray-100 transition-colors">Blogs</Link>
                    <Link onClick={handleLinkClick} href="/news" className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 border-b border-gray-100 transition-colors">News</Link>
                    <Link onClick={handleLinkClick} href="/guides" className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 border-b border-gray-100 transition-colors">Guides</Link>
                    <Link onClick={handleLinkClick} href="/faqs" className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 border-b border-gray-100 transition-colors">FAQs</Link>
                    <Link onClick={handleLinkClick} href="/careers" className="text-[15px] font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3.5 transition-colors">Careers</Link>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Legal</div>
                  <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden">
                    <Link onClick={handleLinkClick} href="/privacy-policy" className="text-[14px] font-medium text-gray-600 hover:bg-gray-100 px-4 py-3 border-b border-gray-100 transition-colors">Privacy Policy</Link>
                    <Link onClick={handleLinkClick} href="/terms" className="text-[14px] font-medium text-gray-600 hover:bg-gray-100 px-4 py-3 border-b border-gray-100 transition-colors">Terms of Service</Link>
                    <Link onClick={handleLinkClick} href="/attorney-terms" className="text-[14px] font-medium text-gray-600 hover:bg-gray-100 px-4 py-3 transition-colors">Attorney Terms & Conditions</Link>
                  </div>
                </div>

                <div className="mt-8 pt-4 pb-12">
                  <Link
                    href="/free-consultation"
                    className="w-full bg-[var(--brand)] hover:brightness-110 transition-all text-white py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 flex items-center justify-center tracking-wide"
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

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Details</h2>

              {/* Phone */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">Phone</p>
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg mt-1">
                  <span className="font-medium text-gray-800">+91 90628 15535</span>
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
                  <span className="font-medium text-gray-800">admin@lawizer.com</span>
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
          onProfessionalRedirect={() => {
            setIsSignInModalOpen(false);
            setIsProfessionalModalOpen(true);
          }}
          onForgotPassword={() => {
            setIsSignInModalOpen(false);
            setIsForgotPasswordOpen(true);
          }}
          onLoginSuccess={(data) => {
            refreshUser();
            if (!data.isProfileComplete) setIsCompleteProfileModalOpen(true);
          }}
        />
      )}

      {isProfessionalModalOpen && (
        <ProfessionalModal
          onClose={() => setIsProfessionalModalOpen(false)}
          onClientLoginRedirect={() => {
            setIsProfessionalModalOpen(false);
            setIsSignInModalOpen(true);
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
          onDone={() => {
            setIsCompleteProfileModalOpen(false);
            const userRole = user?.role?.toUpperCase();
            if (userRole === "EXPERT" || userRole === "PROFESSIONAL" || userRole === "LAWYER") {
              router.push("/expert/dashboard");
            } else {
              router.push("/user/dashboard");
            }
          }}
        />
      )}
    </>
  );
}

export default Header;

function HeaderUserAvatar({ user, size = "sm" }: { user: any; size?: "sm" | "md" }) {
  return <UserAvatar user={user} size={size} />;
}
