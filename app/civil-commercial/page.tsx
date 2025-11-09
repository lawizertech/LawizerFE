"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Gavel,
  ArrowRight,
  Briefcase,
  Lock,
  MessageCircle,
} from "lucide-react";

export default function CivilCriminalLegalPage() {
  const primaryColor = "#6d28d9";
  const primaryAccent = "#a78bfa";
  const secondaryColor = "#0e172b";

  const contactFormRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const civilContent = {
    heading: "Civil & Commercial Litigation Lawyers",
    introduction:
      "A civil litigation occurs between two or more parties who are embroiled in a legal disagreement that involves seeking money or any other action as a compensation or remedy, but does not involve any criminal accusations. A commercial litigation arises when one or more parties in a dispute is a business entity. Commercial litigation often proceeds the same way as a civil litigation and may be governed by some special laws such as a property law or aviation laws. Such litigation includes disputes such as: antitrust cases, aviation disputes, breach of contract, real estate disputes etc.",
    services:
      "The Civil & Commercial Litigation team at Lawizer has extensive experience in handling a wide variety of commercial & civil. Our team consists of experienced litigators in these aspects. Our litigators have a strong understanding of foreign regulations and laws under different legal systems. We are committed to handling disputes with complete efficiency and offer solutions that are practical and commercial. In recent years, Lawizer has helped clients to achieve success in some of the most complex disputes and investigations. Our lawyers will tackle your dispute with enhanced understanding of the CPC, which governs civil litigation. We help in drafting, filing, appearing in court, filing injunctions, seeking reliefs, filing appeals, representation at arraignments and hearings etc.. Our team of dispute lawyers is experienced in the full breadth of civil and commercial litigation and regularly represents the clients before all Judicial & Quasi-Judicial Bodies. Our lawyers are well versed with personal injury cases, medical malpractice, custodial battles, employment disputes, property disputes, corporate and business law etc.",
  };

  const criminalContent = {
    heading: "Criminal Lawyers",
    introduction:
      "Criminal litigation is the process of trying a criminal defendant in a court of law in what is termed as a 'criminal trial'. There are two litigators in such a case: a prosecutor, who represents the state's case against the defendant and the defense attorney, who represents the client. Criminal litigation in India deals with criminal laws primarily governed by three Acts: The Indian Penal Code 1860 (IPC), The Code of Criminal Procedure 1973 (CrPC) and The Indian Evidence Act 1872. Apart from these, a number of special laws have also been passed for specialized cases such as Prevention of Corruption Act, Protection of Children from Sexual Offences Act (POCSO) and POSH laws against sexual harassment at the work place. Criminal cases often include cases related to murder, theft, rape, assault, financial crimes etc.",
    services:
      "Our team of lawyers at Lawizer are thorough with their criminal litigation practice. We can conduct research and analyse a case to determine its probable outcome and provide effective strategies for your defense in court of law. Our team is dedicated in finding effective and quick solutions to your cases and represent the clients at arraignments, hearings and other appearances before the court. Our litigators will represent the client with evidence, should a case get to trial and prepare and draft consolidated legal documents to give the best possible outcome and provide the best possible defense. Our lawyers are trained at negotiating pleas, sentences, settlements and prepare key witnesses. Our lawyers ensure representation of the client at every stage of a criminal trial. While awaiting a criminal trial, the client has a right to bail. Our expert lawyers in criminal litigation can help fight for bail, anticipatory bails for clients and are well versed with the laws governing the same. With the advent of technology, cybercrime is now an added threat. The Information Technology Act 2000 is the legislation that defines cyber offences and punishment for cybercrimes. Our lawyers are primed at assisting in cases of cybercrime and providing a nuanced understanding of Information Technology laws and their related crimes.",
  };

  // --- Common Components ---

  type ServiceSectionProps = {
    content: {
      heading: string;
      introduction: string;
      services: string;
    };
    icon: React.ReactNode;
  };

  const ServiceSection = ({ content, icon }: ServiceSectionProps) => (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: `${primaryAccent}20` }}
        >
          {icon}
        </div>
        <h2 className="text-3xl font-bold" style={{ color: secondaryColor }}>
          {content.heading}
        </h2>
      </div>

      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>{content.introduction}</p>
        <p className="mt-4 pt-4 border-t border-gray-100">{content.services}</p>
      </div>
    </motion.section>
  );

  const ContactFormSection = () => (
    <section ref={contactFormRef} className="bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: secondaryColor }}
        >
          Contact Our Litigation Team
        </h2>
        <p className="text-gray-700 mb-8">
          Write to us with your enquiries, questions or request a meeting with a
          lawyer to discuss your potential case. One of our experts would review
          the form and revert back shortly.
        </p>

        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400">
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Practice Area Dropdown */}
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            aria-label="Practice Area"
          >
            <option value="" disabled>
              Select Practice Area (Civil/Criminal)
            </option>
            <option value="civil">Civil & Commercial Litigation</option>
            <option value="criminal">Criminal Law</option>
          </select>

          <textarea
            placeholder="Enter your message/enquiry"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400 resize-none"
          ></textarea>

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
  );

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[65vh] overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${primaryColor}E6, #6b46c1)`,
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/legalhero.png')] bg-cover bg-center opacity-25" />
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
            <Gavel className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Civil, Commercial, & Criminal Law
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Comprehensive legal representation for litigation across Civil,
            Commercial, and Criminal jurisdictions.
          </p>
          <p className="mt-3" style={{ color: primaryAccent }}>
            Expert advocacy and strategic counsel for every dispute.
          </p>
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Civil & Commercial Section */}
        <ServiceSection
          content={civilContent}
          icon={
            <Briefcase className="w-6 h-6" style={{ color: primaryAccent }} />
          }
        />

        <div className="w-full h-1 bg-gray-300 my-10 rounded-full" />

        {/* Criminal Section */}
        <ServiceSection
          content={criminalContent}
          icon={<Lock className="w-6 h-6" style={{ color: primaryAccent }} />}
        />
      </div>

      {/* Contact Form */}
      <ContactFormSection />

      {/* Floating Consult Button */}
      <motion.button
        onClick={scrollToForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
        style={{ background: primaryAccent }}
      >
        <MessageCircle className="w-5 h-5" />
        Consult an Expert
      </motion.button>
    </div>
  );
}
