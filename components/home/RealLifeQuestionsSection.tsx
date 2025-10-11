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

const legalQuestions = [
  {
    icon: Building2,
    question: "Want to start your own business but unsure about registration?",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Banknote,
    question: "Check bounced and you don’t know how to take legal action?",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageCircle,
    question: "Being blackmailed or harassed online?",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    question: "Facing a child custody or family dispute?",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: FileWarning,
    question: "Need to file GST but confused where to start?",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: AlertTriangle,
    question: "Received a legal notice or court summon?",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: HelpCircle,
    question: "Want to consult a lawyer for your personal or business issue?",
    color: "from-cyan-500 to-blue-600",
  },
];

export function RealLifeQuestionsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* background blur animation */}
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
        {/* heading section - now left aligned */}
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

        {/* horizontal scroll cards */}
        <div className="relative rounded-2xl ">
          <motion.div
            className="flex gap-6 overflow-x-auto px-4 py-4 md:px-2 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent"
            whileHover={{ x: 0 }}
          >
            {legalQuestions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="min-w-[260px] md:min-w-[300px] snap-start bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-2xl transition-all"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    {item.question}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>

          {/* subtle gradient fade edges */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* button now aligned left */}
        <div className="mt-12 text-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Talk to a Lawyer Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
