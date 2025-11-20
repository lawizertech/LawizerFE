"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Heart, // Main Icon for Family Law
  Users, // Icon for Disputes/Custody
  FileText, // Icon for Agreements/Registration
  Gavel, // Icon for Legal/Court
  ArrowRight,
  Shield,
  Phone,
  Mail,
} from "lucide-react";
import EmblaCarouselCards from "@/components/EmblaCarouselCards";

export default function FamilyLegalPage() {
  const router = useRouter();
  const [requestedIndex, setRequestedIndex] = useState<string | null>(null);

  const FamilyIcon = Heart;

  const primaryColor = "#c92c41";
  const primaryAccent = "#ff6384";
  const secondaryColor = "#0e172b";

  // Combine all services with their descriptions for a sequential display
  const allServices = [
    {
      title: "Marriage Registration & Solemnization",
      description:
        "We guide couples, including couples from different religions or nationalities, through the legal procedure of marriage registration & solemnization under the Special Marriage Act in India. Our scope encompasses preparing and submitting necessary documents, scheduling appointments, and liaising with the relevant authorities, ensuring a seamless registration process. Additionally, we offer support with court and ceremonial solemnization aligning with legal standards.",
      icon: Gavel,
    },
    {
      title: "Prenuptial Agreements",
      description:
        "Our lawyers assist with drafting prenuptial agreements, providing legally valid and customized solutions which are fair to both parties and safeguard their financial interests and are likely to be upheld by the court in case of divorce or dissolution of the marriage.",
      icon: FileText,
    },
    {
      title: "Marriage Annulment",
      description:
        "We provide counsel on the legal procedure of marriage annulment in India and assist couples with gathering evidence, filing petitions, and representation before the judicial bodies, ensuring a clear path to resolve their marital status.",
      icon: Gavel,
    },
    {
      title: "Divorce - Mutual & Contested",
      description:
        "Breakdown of a marriage is a difficult period. Our lawyers provide compassionate but effective legal counsel tailored to your respective circumstances. We assist clients through each stage of divorce, mutual or contested, from documentation, to mediation to court representation, streamlining the process and addressing all critical aspects of alimony, child custody and assets division.",
      icon: Users,
    },
    {
      title: "International Divorce & Enforcement of Foreign Divorce Decree",
      description:
        "Our firm specializes in cross-border divorce matters, providing comprehensive support for the execution of foreign divorce decree in India and vice versa. Typically, the process involves verifying the decree for compliance with Indian law, filing an application with the court, representing the client during proceedings and obtaining the order. We leverage our extensive international network and work closely with our foreign counterparts on divorce cases that involve multiple jurisdictions.",
      icon: Gavel,
    },
    {
      title: "Child Custody",
      description:
        "We evaluate each case individually and then provide strategic advice on custody options, including legal custody, physical custody and visitation rights. Our lawyers prepare and file necessary documentation and represent clients in mediation sessions for amicable resolutions. If needed, we advocate actively in court, presenting evidence and arguments, to secure the most favorable custody arrangements. In the entire process, our focus remains on the welfare of the child and securing his/her future.",
      icon: Shield,
    },
    {
      title: "Judicial Separation",
      description:
        "Unlike divorce, which dissolves the marriage permanently, judicial separation serves as a temporary measure that allows the couples to address issues related to alimony, asset division and child custody without fully terminating the marriage. Our service includes preparing and filing of necessary documents, negotiations with other parties, and representation before the court.",
      icon: Gavel,
    },
    {
      title: "Domestic Violence",
      description:
        "Considering the vulnerability of such matters, we provide confidential consultation to assess the specific circumstances and needs of the client, advising on various available legal options including protection order and remedies under the Domestic Violence Act. We further assist with filing the necessary documents and representation before the court to ensure that their rights are upheld. Additionally, we advise on associated matters such as child custody, financial support and access to safe housing.",
      icon: Shield,
    },
    {
      title: "Adoption - Domestic & International",
      description:
        "We have a dedicated team of lawyers who specialize in domestic and international adoption laws, providing customized legal support to prospective adoptive parents. In the case of domestic adoption, we assist with obtaining necessary clearances and preparing documents, ensuring compliance with the Juvenile Justice Act. For international or cross-border adoption matters, we work closely with our foreign partners and adoption agencies to meet all relevant legal protocols.",
      icon: Users,
    },
    {
      title: "Surrogacy",
      description:
        "Our firm provides legal guidance to clients for navigating the surrogacy process in India ensuring compliance with the Surrogacy (Regulation) Bill. We assist with drafting and reviewing the surrogacy agreement, protecting the rights of both intended parents and the surrogate. Our team also handles necessary documentation and represent clients before the court, if needed, to get legal recognition of the parentage.",
      icon: Heart,
    },
  ];

  const familyAdvocates = [
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Family Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Family Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Family Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Family Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Family Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Family Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[65vh] overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${primaryColor}E6, ${primaryAccent}E6)`,
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/familylegal.png')] bg-cover bg-center opacity-25" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <FamilyIcon className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Family Law & Matrimonial Services
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Compassionate, effective legal counsel for life's most personal and
            critical matters.
          </p>
          <p className="mt-3" style={{ color: primaryAccent }}>
            Guidance through divorce, adoption, custody, and protective
            agreements.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          👩‍⚖️ Top Women Advocates (Available Now)
        </h2>

        <EmblaCarouselCards
          list={familyAdvocates}
          type="adv"
          onBook={(key) => setRequestedIndex(key)}
        />
      </div>

      {/* Services Section - Stacked Layout */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0e172b]">
          Our Areas of Family Law Support
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {allServices.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${primaryAccent}22` }}
                  >
                    <ServiceIcon
                      className="w-6 h-6"
                      style={{ color: primaryAccent }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0e172b] leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Button (Optional, only if needed later) */}
                {/* <button
            className="mt-4 flex items-center text-sm font-medium"
            style={{ color: primaryAccent }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </button> */}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- Horizontal Line --- */}
      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: secondaryColor }}
          >
            Contact our Family Law Team
          </h2>
          <p className="text-gray-700 mb-8">
            Write to us with your enquiries, questions or request a meeting with
            a lawyer to discuss your potential case. One of our experts would
            review the form and revert back shortly.
          </p>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name and Email */}
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-400 focus:ring-1 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-400 focus:ring-1 focus:ring-red-400"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone and Gender */}
              <input
                type="tel"
                placeholder="Phone (e.g. +91 98765 43210)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-400 focus:ring-1 focus:ring-red-400"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:border-red-400 focus:ring-1 focus:ring-red-400">
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Area */}
            <textarea
              placeholder="Enter your message/enquiry"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-400 focus:ring-1 focus:ring-red-400 resize-none"
            ></textarea>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
              style={{ background: primaryAccent }}
            >
              Submit Enquiry
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}
