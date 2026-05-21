"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 mb-8">
          {/* Logo & Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                  <img
                    src="/logoLawizer.jpg"
                    alt="Lawizer Logo"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-primary">Lawizer</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Lawizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/lawizer_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lawizer_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/lawizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services & Support */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:col-span-2">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/property"
                    className="text-gray-600 hover:text-primary"
                  >
                    Property Law
                  </Link>
                </li>
                <li>
                  <Link
                    href="/itr"
                    className="text-gray-600 hover:text-primary"
                  >
                    ITR Filing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/startup-businesslegal"
                    className="text-gray-600 hover:text-primary"
                  >
                    Startup & Business Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-gray-600 hover:text-primary"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+919062815535"
                    className="text-gray-600 hover:text-primary"
                  >
                    +91 90628 15535
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:admin@lawizer.com"
                    className="text-gray-600 hover:text-primary"
                  >
                    admin@lawizer.com
                  </a>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-600 hover:text-primary"
                  >
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company & Legal */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:col-span-2">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-primary"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/attorney-terms"
                    className="text-gray-600 hover:text-primary"
                  >
                    Attorney Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-gray-600 text-xs sm:text-sm">
          <p>&copy; 2026 Lawizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
