"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                  <img
                    src="/logoLawizer.png"
                    alt="Lawizer Logo"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-primary">Lawizer</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/people/Lawizer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/lawizer_"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lawizer_"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Family Law",
                "Business Law",
                "Real Estate",
                "Find Attorneys",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@lawizer.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  admin@lawizer.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Contact Us", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Attorney Terms"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Lawizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
