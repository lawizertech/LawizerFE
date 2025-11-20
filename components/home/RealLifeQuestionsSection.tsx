"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  Building2,
  AlertTriangle,
  Users,
  FileWarning,
  MessageCircle,
  Banknote,
} from "lucide-react";
import LegalQuestionsCarousel from "../LegalQuestionsCarousel";

const legalQuestions = [
  {
    icon: Building2,
    question: "Want to start your own business but unsure about registration?",
    color: "from-blue-500 to-indigo-500",
    image: "/needHelp/businessregistration.png",
  },
  {
    icon: Banknote,
    question: "Check bounced and you don’t know how to take legal action?",
    color: "from-emerald-500 to-teal-500",
    image: "/needHelp/bounced.png",
  },
  {
    icon: MessageCircle,
    question: "Being blackmailed or harassed online?",
    color: "from-pink-500 to-rose-500",
    image: "/needHelp/blackmail.png",
  },
  {
    icon: Users,
    question: "Facing a child custody or family dispute?",
    color: "from-purple-500 to-fuchsia-500",
    image: "/needHelp/childcustody.png",
  },
  {
    icon: FileWarning,
    question: "Need to file GST but confused where to start?",
    color: "from-amber-500 to-orange-500",
    image: "/needHelp/gstfilling.png",
  },
  {
    icon: AlertTriangle,
    question: "Received a legal notice or court summon?",
    color: "from-red-500 to-orange-600",
    image: "/needHelp/legalnotice.png",
  },
  {
    icon: HelpCircle,
    question: "Want to consult a lawyer for your personal or business issue?",
    color: "from-cyan-500 to-blue-600",
    image: "/needHelp/consultlawyer.png",
  },
];

const doubledQuestions = [...legalQuestions, ...legalQuestions];

export function RealLifeQuestionsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background blur animation */}
      <motion.div
        className="absolute -z-10 top-0 left-0 w-full h-full pointer-events-none"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.12), transparent 40%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading section */}
        <div className="text-left mb-14 max-w-3xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Legal Help?
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed">
            Real-life legal issues need real lawyers. Whether it’s{" "}
            <span className="font-semibold text-gray-800">personal</span>,{" "}
            <span className="font-semibold text-gray-800">property</span>, or{" "}
            <span className="font-semibold text-gray-800">business</span> — our
            advocates are here to guide you every step of the way.
          </p>
        </div>

        <LegalQuestionsCarousel list={legalQuestions} />

        {/* Button */}
        <div className="mt-12 text-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.location.replace("/start-consultation")}
          >
            Talk to a Lawyer Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
