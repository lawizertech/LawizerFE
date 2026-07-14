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
import { services } from "./header-data";
import { MobileServiceItem } from "./MobileServiceItem";

export function Header() {
  const pathname = usePathname();
  const [showContactCard, setShowContactCard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
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
            <Link className="flex items-center gap-2 cursor-pointer" href="/">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                <img src="/logoLawizer.jpg" alt="Lawizer Logo" className="w-7 h-7" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-['Montserrat'] text-brand-red">Lawizer</span>
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
                  <Button
                    onClick={() => setIsSignInModalOpen(true)}
                    className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md"
                  >
                    Login
                  </Button>
                ) : (
                  <div className="flex items-center gap-4 cursor-pointer">
                    <Link href="/profile" className="flex items-center gap-2" title="My Profile">
                      {user.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt="Profile Avatar"
                          className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-200">
                          {user.email ? user.email[0].toUpperCase() : "U"}
                        </div>
                      )}
                    </Link>
                    <Link
                      className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors"
                      href={user.role === "EXPERT" ? "/expert/dashboard" : "/user/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </nav>
            )}

            <div className="flex items-center lg:hidden">
              <Link
                href="/free-consultation"
                className="bg-brand-red hover:brightness-110 text-white px-4 py-2 rounded-full font-medium shadow-md mr-3 text-sm flex items-center justify-center"
              >
                Help
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-10 w-10 text-brand-red hover:bg-gray-100"
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
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link
                  className="flex items-center gap-2 cursor-pointer"
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                    <img src="/logoLawizer.jpg" alt="Lawizer Logo" className="w-6 h-6" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-['Montserrat'] font-bold text-brand-red">Lawizer</span>
                  </div>
                </Link>

                <div className="flex items-center gap-3">
                  <Link
                    href="/free-consultation"
                    className="bg-brand-red hover:brightness-110 text-white px-4 py-2 rounded-full font-medium shadow-md text-sm flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Help
                  </Link>
                  <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Auth Buttons */}
                {!user ? (
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
                      {user.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt="Avatar"
                          className="w-10 h-10 rounded-full border border-gray-200 object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-red font-bold">
                          {user.email ? user.email[0].toUpperCase() : "U"}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900 truncate max-w-[150px]">
                          {user.email}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">{user.role?.toLowerCase()}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      {/* DASHBOARD LINK START */}
                      {user.role === "USER" ? (
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
                             className="text-lg font-semibold text-brand-red flex items-center gap-2"
                           >
                             My Profile
                           </Link>
                        </>
                      ) : user.role === "EXPERT" ? (
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
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    About
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Contact
                  </Link>

                  <h3 className="text-xl font-bold text-brand-red mt-6">Services</h3>

                  {/* Expandable service list (simple toggles per service) */}
                  {services.map((service, idx) => (
                    <MobileServiceItem key={idx} service={service} onClose={() => setMobileMenuOpen(false)} />
                  ))}

                  <h3 className="text-xl font-bold text-brand-red mt-6">Resources</h3>
                  <Link
                    onClick={handleLinkClick}
                    href="/blogs"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Blogs
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/news"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    News
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/guides"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Guides
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/faqs"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    FAQs
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/careers"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Careers
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-red mt-6">Legal</h3>
                  <Link
                    onClick={handleLinkClick}
                    href="/privacy-policy"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/terms"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    onClick={handleLinkClick}
                    href="/attorney-terms"
                    className="text-lg font-medium text-gray-700 hover:text-brand-red"
                  >
                    Attorney Terms & Conditions
                  </Link>
                </div>

                <div className="mt-8">
                  <Link
                    href="/free-consultation"
                    className="w-full bg-brand-red text-white py-3 rounded-lg font-semibold shadow-md flex items-center justify-center"
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

export default Header;
