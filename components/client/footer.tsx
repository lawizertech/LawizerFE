"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Logo & Social */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link className="flex items-center gap-2 mb-4 cursor-pointer" href="/">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100">
                <img src="/logoLawizer.jpg" alt="Lawizer Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-2xl font-montserrat font-extrabold text-[var(--brand)] tracking-tight">Lawizer</span>
            </Link>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6 max-w-sm">
              Redefining how India accesses legal support — simple, fast, affordable, and accessible for all.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/Lawizer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-[var(--brand)] hover:border-red-100 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/lawizer_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-[var(--brand)] hover:border-red-100 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/lawizer_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-[var(--brand)] hover:border-red-100 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/lawizer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-[var(--brand)] hover:border-red-100 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-5 tracking-wide text-[15px]">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/property" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Property</Link></li>
              <li><Link href="/itr" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">ITR Filing</Link></li>
              <li><Link href="/startup-businesslegal" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Startup Legal</Link></li>
              <li><Link href="/documentation" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Documentation</Link></li>
              <li><Link href="/startup-businesslegal/startbusiness/GSTRegistrationPage" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">GST Registration</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-5 tracking-wide text-[15px]">Business</h3>
            <ul className="space-y-3">
              <li><Link href="/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Pvt Ltd Incorporation</Link></li>
              <li><Link href="/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">MSME Registration</Link></li>
              <li><Link href="/startup-businesslegal/protectbusiness/TrademarkRegistrationPage" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Trademark Registration</Link></li>
              <li><Link href="/compliance/annual" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Annual Compliance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-5 tracking-wide text-[15px]">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Contact</Link></li>
              <li><Link href="/blogs" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Guides</Link></li>
              <li><Link href="/careers" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-5 tracking-wide text-[15px]">Legal</h3>
            <ul className="space-y-3 mb-8">
              <li><Link href="/privacy-policy" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Terms of Service</Link></li>
              <li><Link href="/attorney-terms" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">Attorney Terms</Link></li>
            </ul>
            <h3 className="font-bold text-gray-900 mb-5 tracking-wide text-[15px]">Support</h3>
            <ul className="space-y-3">
              <li><a href="tel:+919062815535" className="text-[14px] text-[var(--brand)] hover:brightness-110 font-bold transition-colors">+91 90628 15535</a></li>
              <li><a href="mailto:admin@lawizer.com" className="text-[14px] text-gray-500 hover:text-[var(--brand)] font-medium transition-colors">admin@lawizer.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-[13px] font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Lawizer. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] font-medium text-gray-400">
            <span>Made in India</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center"></span>
            <span>Made for India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
