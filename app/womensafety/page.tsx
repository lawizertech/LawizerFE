"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Shield, PhoneCall, EyeOff, AlertTriangle } from "lucide-react";
import EmblaCarouselCards from "@/components/client/EmblaCarouselCards";

export default function WomenSafetyLegalPage() {
  const router = useRouter();
  const [requestedIndex, setRequestedIndex] = useState<string | null>(null);

  const handleContactClick = () => {
    router.push("/women-safety/contactus/ContactSupportPage");
  };

  const womenAdvocates = [
    {
      name: "Adv. Priya Kapoor",
      role: "Family Lawyer",
      rate: "₹55/min",
      img: "/adv/Adv2.png",
      gender: "female",
    },
    {
      name: "Adv. Neha Sinha",
      role: "Cyber Crime Lawyer",
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
      role: "Cyber Crime Lawyer",
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
      role: "Cyber Crime Lawyer",
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
      role: "Cyber Crime Lawyer",
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
      role: "Cyber Crime Lawyer",
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
      role: "Cyber Crime Lawyer",
      rate: "₹70/min",
      img: "/adv/Adv6.png",
      gender: "female",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-100 relative w-full flex justify-center flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center h-[70vh] overflow-hidden text-white">
        {/* ✅ Replace red gradient with image */}
        <div className="absolute inset-0 bg-[url('/womenadv.png')] bg-cover bg-center brightness-75" />

        {/* Overlay for slight dark effect for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          {/* Animated heart icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <Heart className="w-16 h-16 text-[#e63946]" />
          </motion.div>

          {/* ✅ Title with logo added inline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight flex items-center justify-center gap-3">
            Women Safety & Legal{" "}
            <span style={{ color: "#f8c8c8" }}>Support</span>
          </h1>

          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            If you are <strong>Scared, Hurt or Alone</strong> — Don’t wait. Call
            us. We're here for You <strong>24/7</strong>.
          </p>
          <p className="mt-4 text-[#f8c8c8] font-medium">
            Every woman deserves safety, dignity, and justice. Let justice begin
            with <span className="font-bold">YOU</span>.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          👩‍⚖️ Top Women Advocates (Available Now)
        </h2>

        <EmblaCarouselCards
          list={womenAdvocates}
          type="adv"
          onBook={(key) => setRequestedIndex(key)}
        />
      </div>

      {/* SECTION 1 - Contact Us / Threatened Online */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <PhoneCall className="w-8 h-8 text-[#e63946]" />
          <h2 className="text-3xl font-bold text-[#3b0a0a]">
            Contact Us / Threatened Online
          </h2>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          If you’re being blackmailed, harassed, or threatened online — don’t
          suffer in silence. Our team is ready to listen, protect, and take
          action for you. Let justice begin with you.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Contact Us",
              color:
                "from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300",
            },
            {
              title: "Threatened Online?",
              color:
                "from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300",
            },
            {
              title: "Sexually Harassed?",
              color:
                "from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300",
            },
            {
              title: "Physically Abused?",
              color:
                "from-red-100 to-red-200 hover:from-red-200 hover:to-red-300",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-white/60 bg-gradient-to-br ${card.color}`}
            >
              <h3 className="font-semibold text-[#3b0a0a] text-lg mb-2 drop-shadow-sm">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Connect with verified female legal professionals who will guide
                and support you confidentially and safely.
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 2 - Blackmailed / Threatened Online */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <EyeOff className="w-8 h-8 text-[#e63946]" />
          <h2 className="text-3xl font-bold text-[#3b0a0a]">
            Blackmailed / Threatened Online
          </h2>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For every girl who’s been blackmailed with her own photos... For every
          woman who’s been told to “stay quiet” or “just block him” — we’re done
          staying silent. This platform is your weapon.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We are here to fight back with the law in our hands and justice in our
          hearts. You send the screenshots — we’ll handle the rest.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Filing cybercrime complaints & sending legal notices</li>
          <li>Free & Confidential Legal Consultation</li>
          <li>Anonymous Reporting Options</li>
          <li>Experienced Female Advocates Available on Request</li>
          <li>Quick-response SOS Legal Help for Urgent Cases</li>
          <li>Step-by-Step Legal Guidance: From FIR to Justice</li>
        </ul>
        <p className="text-gray-700 italic">
          They wanted you to feel afraid. Now it’s their turn.
        </p>
      </motion.section>

      {/* SECTION 3 - Sexually Harassed */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-[#e63946]" />
          <h2 className="text-3xl font-bold text-[#3b0a0a]">
            Sexually Harassed
          </h2>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Sexual harassment can happen anywhere — at the workplace, in public
          spaces, online, or even within familiar environments. Fear and stigma
          often keep survivors from coming forward — we’re here to change that.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          On our platform, you don’t need to face this alone. This section is
          built as a safe haven for justice, healing, and support.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Free & Confidential Legal Consultation</li>
          <li>Anonymous Reporting Options</li>
          <li>Experienced Female Advocates Available on Request</li>
          <li>Quick-Response SOS Legal Help for Urgent Cases</li>
          <li>Step-by-Step Legal Guidance: From FIR to Justice</li>
        </ul>
      </motion.section>

      {/* SECTION 4 - Verbal / Physical Abuse */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-[#e63946]" />
          <h2 className="text-3xl font-bold text-[#3b0a0a]">
            Verbal / Physical Abuse
          </h2>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          You’ve been silent long enough. It’s time for us to take over.
          Thousands of women are trapped in cycles of abuse every day. What
          keeps them silent? Fear. Shame. Isolation. We’re here to break that
          silence.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Abuse doesn’t always show up as broken bones or black eyes. Sometimes
          it’s the insults whispered behind closed doors, the threats, or the
          humiliation that leaves you questioning your worth. Abuse — verbal or
          physical — is not love. It’s not normal. And it’s not your fault.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          At <strong>Lawizer</strong>, we’re not here to lecture you. With legal
          tools, expert support, and a platform built to help you take back your
          life — affordably and confidentially.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Free & Confidential Legal Consultation</li>
          <li>Anonymous Reporting Options</li>
          <li>Experienced Female Advocates Available on Request</li>
          <li>Quick-Response SOS Legal Help for Urgent Cases</li>
          <li>Step-by-Step Legal Guidance: From FIR to Justice</li>
        </ul>
      </motion.section>

      {/* Floating Contact Button */}
      <motion.button
        onClick={handleContactClick}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 bg-[#e63946] hover:bg-[#ff4d6d] text-white p-4 rounded-full shadow-lg flex items-center justify-center group"
      >
        <PhoneCall className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute bottom-14 right-0 bg-[#ff4d6d] text-white text-sm py-1 px-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Contact Us
        </span>
      </motion.button>
    </div>
  );
}
