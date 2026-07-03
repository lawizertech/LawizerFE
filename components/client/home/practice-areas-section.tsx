"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function PracticeAreasSection() {
  const serviceCategories = [
    {
      category: "Property Services",
      services: [
        "Property Report",
        "Property Registration (Sales Deed)",
        "Sales Deed Drafting",
        "Agreement to Sale Drafting",
        "Property Paper Review",
        "Sale Agreement Review",
      ],
    },
    {
      category: "Startup Documents",
      services: [
        "Franchise Agreement",
        "Co-Founder Agreement",
        "Non Disclosure Agreement",
        "Employment Agreement",
        "Consultancy Agreement",
        "Business Partnership Agreement",
      ],
    },
    {
      category: "Legal Agreements",
      services: [
        "Shareholder Subscription Agreement",
        "Privacy Policy",
        "Terms of Use",
        "SaaS Agreement",
        "Service Agreement",
        "Term Sheet Drafting",
      ],
    },
    {
      category: "Business Agreements",
      services: [
        "Joint Venture",
        "Licensing Agreement",
        "IP Assignment Agreement",
        "Letter of Intent",
        "Freelancer Agreement",
        "Loan Agreement",
      ],
    },
    {
      category: "Property Documents",
      services: [
        "Power of Attorney",
        "POA Registration",
        "Will Drafting",
        "Will Registration",
        "Gift Deed",
        "Joint Development Agreement",
      ],
    },
    {
      category: "Additional Property",
      services: [
        "Relinquishment Deed",
        "Commercial Lease Agreement",
        "Rent Agreement",
      ],
    },
    {
      category: "Start Your Business",
      services: [
        "Private Limited Company",
        "One Person Company",
        "Limited Liability Partnership",
        "Startup India Registration",
        "GST Registration",
        "Public Limited Company",
      ],
    },
    {
      category: "NGO Registration",
      services: ["Section 8 NGO Company"],
    },
    {
      category: "Protect Your Business",
      services: [
        "Trademark Registration",
        "Reply to Trademark Objection",
        "Renew Your Trademark",
        "Sell Your Trademark",
        "Copyright Registration",
        "Reply to Copyright Objection",
      ],
    },
    {
      category: "Manage Your Business",
      services: [
        "ROC Return Filing for Pvt Ltd",
        "ROC Return Filing for OPC",
        "ROC Return Filing for LLP",
        "Appointment of Director",
        "Resignation of Director",
        "Change in Office Address",
      ],
    },
    {
      category: "Company Operations",
      services: [
        "Increasing Capital of Company",
        "Closure of Pvt Ltd",
        "Closure of OPC",
        "Closure of LLP",
      ],
    },
    {
      category: "Grow Your Business",
      services: ["ISO Certification", "MSME / Udyam Registration"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Legal Services
            </span>
          </h2>
        </div>

        <div className="pt-5 flex items-start gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent h-98 ">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[270px] max-w-sm flex-shrink-0"
              className="overflow-visible" // ensures inner shadow/glow isn't clipped
            >
              <Card className="rounded-2xl shadow-md hover:shadow-2xl border border-blue-100 transition-all bg-white">
                <CardHeader className="bg-primary p-4 rounded-t-2xl">
                  <CardTitle className="text-lg font-semibold text-white">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <div className="p-5">
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <motion.li
                        key={serviceIndex}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                      >
                        <Star className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
