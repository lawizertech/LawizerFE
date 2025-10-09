"use client"

import { useState } from "react"
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is online legal consultation?",
      answer:
        "Online legal consultation is a method to connect users and lawyers virtually. It is a convenient and easy way to get legal advice using the Lawizer platform through video calls, phone calls, or chat messaging.",
    },
    {
      question: "Are your attorneys qualified?",
      answer:
        "Yes, all attorneys on Lawizer are fully licensed, verified professionals with years of experience in their respective practice areas. We thoroughly vet each attorney before they join our platform.",
    },
    {
      question: "What happens if I don't get a response from an attorney?",
      answer:
        "If you don't receive a response within 15 minutes, our support team will immediately connect you with another available attorney. We also offer a full refund if you're not satisfied with the service.",
    },
    {
      question: "How do I start an online consultation with an attorney on Lawizer?",
      answer:
        "Simply click the 'Get Legal Help' button, select your practice area, describe your legal issue, and you'll be matched with a qualified attorney. You can then choose to connect via video call, phone, or chat.",
    },
    {
      question: "Is online attorney consultation safe and secured on Lawizer?",
      answer:
        "Absolutely. Lawizer uses bank-level encryption and complies with all attorney-client privilege laws. All communications are confidential and protected by end-to-end encryption.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Questions?
              <br />
              We're here to help
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Check out our FAQs or talk to a live customer care specialist by phone, chat, or email.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">Call us</span>
              </a>
              <a
                href="mailto:support@lawizer.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">Email us</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-lg">Live chat</span>
              </a>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && <div className="pb-4 text-gray-300 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
