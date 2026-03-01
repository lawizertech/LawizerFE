"use client";

import { useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

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
    {
      question: "What services does Lawizer offer?",
      answer:
        "Lawizer is a comprehensive online legal services platform in India designed to make the law accessible to everyone. Whether you are an individual seeking free legal consultation or a company looking for B2B legal solutions, we connect you with expert professionals. From contract drafting to resolving disputes, Lawizer is your one-stop destination for expert legal advice and representation.",
    },
    {
      question: 'How does the "Emergency SOS" button work?',
      answer:
        "Our Emergency SOS legal help feature is designed for urgent situations where you need immediate assistance. By pressing the SOS button, you are instantly connected to emergency legal support and nearby authorities. This ensures that you have access to instant lawyer help and protection right when you need it most, providing peace of mind 24/7.",
    },
    {
      question: "Is the legal consultation really free?",
      answer:
        "Yes! We believe that justice should be accessible to all. Lawizer offers free legal consultation online to help you understand your rights without any financial burden. You can speak with a qualified advocate in India to get initial guidance on your case. If you require further representation or specialized documentation, we offer affordable packages tailored to your needs.",
    },
    {
      question: "Can I file my Income Tax Return (ITR) through Lawizer?",
      answer:
        "Yes, filing your taxes is hassle-free with us. Lawizer connects you with experienced Chartered Accountants for online ITR filing in India. Whether you are a salaried employee, a freelancer, or a business owner, our tax experts ensure accurate calculations to help you maximize your tax refund and ensure compliance. Avoid penalties and experience seamless CA-assisted tax filing from the comfort of your home.",
    },
    {
      question: "Can Lawizer help my business with legal compliance?",
      answer:
        "Absolutely. Lawizer provides robust corporate legal services for startups and established businesses alike. From business incorporation and startup legal compliance to employee contracts and intellectual property rights, our team handles the complexities of the law so you can focus on growing your business. We are the trusted partner for business legal solutions in India.",
    },
  ];

  const contacts = [
    { icon: Phone, label: "Call us", href: "tel:+919062815535", onClick: undefined as any, color: "#4ade80" },
    {
      icon: Mail,
      label: "Email us",
      href: "mailto:admin@lawizer.com",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=admin@lawizer.com", "_blank");
      },
      color: "#60a5fa",
    },
    { icon: MessageCircle, label: "Live chat", href: "#", onClick: undefined as any, color: "#c084fc" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white overflow-hidden">
      <style>{`
        /* ── Contact icon float + glow ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1.12); }
          50%       { transform: translateY(-7px) scale(1.12); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.18); }
          70%  { box-shadow: 0 0 0 12px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0  rgba(255,255,255,0); }
        }
        @keyframes icon-wiggle {
          0%,100% { transform: rotate(0deg) scale(1); }
          25%     { transform: rotate(-12deg) scale(1.2); }
          75%     { transform: rotate(10deg)  scale(1.15); }
        }
        @keyframes shimmer-label {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .contact-item { cursor: pointer; }

        .contact-icon-wrap {
          position: relative;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .contact-item:hover .contact-icon-wrap {
          animation: float 2s ease-in-out infinite;
        }
        .contact-item:active .contact-icon-wrap {
          animation: none !important;
          transform: scale(0.9) !important;
        }

        .contact-glow-bg {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0;
          transform: scale(1.5);
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .contact-item:hover .contact-glow-bg { opacity: 0.65; }

        .contact-icon-inner {
          position: relative;
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-item:hover .contact-icon-inner {
          animation: pulse-ring 1.3s ease-out infinite;
        }
        .contact-item:hover .contact-icon-inner svg {
          animation: icon-wiggle 0.45s ease forwards;
        }

        .contact-label {
          display: flex;
          align-items: center;
          gap: 0;
          overflow: hidden;
        }
        .contact-letter {
          display: inline-block;
          font-size: 1rem;
          font-weight: 500;
          white-space: pre;
          opacity: 0;
          transform: translateX(-18px);
          color: #fff;
          transition: opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
                      color 0.25s ease;
        }
        .contact-item:hover .contact-letter {
          opacity: 1;
          transform: translateX(0);
          color: var(--gc);
        }

        /* ── FAQ accordion ── */
        @keyframes faq-in {
          from { opacity: 0; max-height: 0;   transform: translateY(-6px); }
          to   { opacity: 1; max-height: 600px; transform: translateY(0);  }
        }
        .faq-answer {
          overflow: hidden;
          animation: faq-in 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .faq-row {
          border-radius: 8px;
          padding: 0 14px;
          margin: 0 -14px;
          border-bottom: 1px solid rgb(55 65 81);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .faq-row:hover                { background: rgba(255,255,255,0.03); border-color: rgba(147,197,253,0.35); }
        .faq-row.faq-active           { background: rgba(96,165,250,0.07); border-color: rgba(147,197,253,0.5); }

        .faq-btn {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between;
          text-align: left; padding: 1rem 0;
          transition: color 0.2s ease;
        }
        .faq-btn:hover   { color: #93c5fd; }
        .faq-btn:active  { transform: scale(0.995); }

        .faq-chevron {
          flex-shrink: 0;
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease;
        }
        .faq-chevron.open { transform: rotate(180deg); color: #93c5fd; }

        /* ── Title entrance ── */
        @keyframes word-rise {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .title-word {
          display: inline-block;
          opacity: 0;
          animation: word-rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .title-word:nth-child(1) { animation-delay: 0.05s; }
        .title-word:nth-child(2) { animation-delay: 0.15s; }
        .title-word:nth-child(3) { animation-delay: 0.25s; }
        .title-word:nth-child(4) { animation-delay: 0.35s; }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left column ── */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="title-word">Questions?</span>
              <br />
              <span className="title-word">We're</span>{" "}
              <span className="title-word">here</span>{" "}
              <span className="title-word">to&nbsp;help</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              Check out our FAQs or talk to a live customer care specialist by phone, chat, or email.
            </p>

            <div className="flex flex-col gap-5">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                const isActive = activeContact === i;
                return (
                  <a
                    key={i}
                    href={c.href}
                    onClick={c.onClick}
                    className="contact-item flex items-center gap-4"
                    style={{ "--gc": c.color } as React.CSSProperties}
                    onMouseEnter={() => setHoveredContact(i)}
                    onMouseLeave={() => { setHoveredContact(null); setActiveContact(null); }}
                    onMouseDown={() => setActiveContact(i)}
                    onMouseUp={() => setActiveContact(null)}
                  >
                    <div className="contact-icon-wrap">
                      <div className="contact-glow-bg" style={{ background: c.color }} />
                      <div
                        className="contact-icon-inner"
                        style={
                          isActive
                            ? {
                                background: `${c.color}28`,
                                borderColor: c.color,
                                boxShadow: `0 0 20px 5px ${c.color}55`,
                              }
                            : {}
                        }
                      >
                        <Icon
                          className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                          style={{ color: isActive ? c.color : "white" }}
                        />
                      </div>
                    </div>
                    <span className="contact-label" style={{ "--gc": c.color } as React.CSSProperties}>
                      {c.label.split("").map((char, ci) => (
                        <span
                          key={ci}
                          className="contact-letter"
                          style={{
                            transitionDelay: hoveredContact === i
                              ? `${ci * 35}ms`
                              : `${(c.label.length - 1 - ci) * 20}ms`,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Right column – FAQs ── */}
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-row ${openIndex === index ? "faq-active" : ""}`}
              >
                <button
                  className="faq-btn"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-base sm:text-lg pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`faq-chevron w-5 h-5 sm:w-6 sm:h-6 ${openIndex === index ? "open" : ""}`}
                  />
                </button>

                {openIndex === index && (
                  <div className="faq-answer pb-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}