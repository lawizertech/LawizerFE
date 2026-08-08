"use client";

import { useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question:
        "Which business structure should I choose if I intend to raise VC funding or offer stock options to early employees?",
      answer: (
        <>
          If you are a high-growth tech startup looking to secure venture capital or attract top-tier talent through
          ESOPs, you should incorporate as a{" "}
          <Link
            href="/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            Private Limited Company
          </Link>
          . Venture capitalists almost universally require this structure because capital is split into clear corporate
          shares, making equity distribution seamless. If you prefer a flexible framework with lower ongoing compliances
          and have no immediate plans for institutional funding, you can opt for an{" "}
          <Link
            href="/startup-businesslegal/startbusiness/LLPPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            LLP Registration
          </Link>
          .
        </>
      ),
    },
    {
      question:
        "What are the mandatory prerequisites I need to gather before launching my company incorporation process online?",
      answer: (
        <>
          To initiate your registration, you need a minimum of 2 directors and shareholders (who can be the same
          individuals), with at least one director residing in India. You will need to provide standard KYC documents
          (PAN card, Aadhaar, and a recent bank statement or utility bill). You don&apos;t need to rent a commercial
          space right away — you can use a residential address for your registered office. Lawizer completely manages
          your application end-to-end, securing your DIN, DSC, and MCA name approval through our streamlined{" "}
          <Link
            href="/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            Private Limited Company Registration
          </Link>{" "}
          workflow.
        </>
      ),
    },
    {
      question:
        "Does Lawizer assist with opening our corporate bank account or securing our tax identity after incorporation is complete?",
      answer: (
        <>
          Yes, incorporation is only the first step. Every standard business setup package processed through Lawizer
          automatically includes the generation of your company&apos;s PAN and TAN. Furthermore, our team provides
          dedicated bank account opening support to ensure your corporate entity can transition into daily commercial
          transactions without logistical delays.
        </>
      ),
    },
    {
      question: "How does a Trademark application differ from the name approval I get during my company incorporation?",
      answer: (
        <>
          Ministry of Corporate Affairs name approval simply prevents another business from setting up a corporate shell
          with an identical legal name. It does <strong>not</strong> give you exclusive commercial rights to market
          products under that brand name. To fully prevent competitors from copying your logos, slogans, or
          consumer-facing identity, you must separately file for a{" "}
          <Link
            href="/startup-businesslegal/protectbusiness/TrademarkRegistrationPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            Trademark Registration
          </Link>{" "}
          to legally insulate your brand across the Indian market.
        </>
      ),
    },
    {
      question:
        "What essential legal contracts does my startup need to execute on day one to protect our internal operations?",
      answer: (
        <>
          Before you scale, you must secure your internal ecosystem. First, a comprehensive Co-Founder Agreement is
          vital to establish equity vesting and prevent early-departure gridlock. Second, you must execute clear NDAs
          and Employment Agreements to ensure all intellectual property (IP) created by your team remains sole corporate
          property. Explore our robust drafting and contract management options through our{" "}
          <Link href="/startup-businesslegal" className="text-blue-300 underline hover:text-blue-200">
            Legal Services Portal
          </Link>
          .
        </>
      ),
    },
    {
      question: "Are GST setup and MSME registration required the moment my company is officially incorporated?",
      answer: (
        <>
          No, these registrations are entirely milestone-driven. For a standard service-based startup,{" "}
          <Link
            href="/startup-businesslegal/startbusiness/GSTRegistrationPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            GST Registration
          </Link>{" "}
          becomes legally mandatory only when your domestic turnover crosses ₹20 Lakhs in a financial year. However,
          many founders choose to register early to claim Input Tax Credit (ITC) on operational setups. Similarly,
          securing an{" "}
          <Link
            href="/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            MSME / Udyam Registration
          </Link>{" "}
          within your first 24 hours is highly recommended, as it unlocks collateral-free government loans and protects
          you against delayed payments from corporate clients.
        </>
      ),
    },
    {
      question:
        "How can our newly formed corporate entity unlock tax holidays and angel tax exemptions under the Startup India scheme?",
      answer: (
        <>
          Simply registering a company does not grant automatic tax breaks. To claim a 3-year consecutive income tax
          holiday and enjoy complete insulation from Angel Tax, your company must apply for official recognition via the{" "}
          <Link
            href="/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage"
            className="text-blue-300 underline hover:text-blue-200"
          >
            Startup India Registration
          </Link>{" "}
          track. Lawizer helps you compile your pitch deck, outline your innovative business model, and secure your
          DPIIT recognition certificate seamlessly.
        </>
      ),
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
    <section className="py-12 md:py-16 bg-[#0A0F1A] text-white overflow-hidden px-5 md:px-12 relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--brand)] opacity-20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left column ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] inline-block" />
              Help & Support
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-5 leading-[1.1] font-[family-name:var(--)] tracking-tight">
              Questions?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-red-400">We're here to help</span>
            </h2>

            <p className="text-gray-400 text-[15px] sm:text-[17px] mb-10 leading-relaxed font-medium max-w-sm">
              Check out our FAQs or talk to a live customer care specialist by phone, chat, or email.
            </p>

            <div className="hidden lg:flex flex-col gap-5">
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
                    onMouseLeave={() => {
                      setHoveredContact(null);
                      setActiveContact(null);
                    }}
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
                            transitionDelay:
                              hoveredContact === i ? `${ci * 35}ms` : `${(c.label.length - 1 - ci) * 20}ms`,
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
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${openIndex === index ? "bg-white/5 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]" : "bg-transparent border-white/5 hover:border-white/10"}`}
              >
                <button 
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 group" 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-bold text-[15px] sm:text-base leading-snug transition-colors ${openIndex === index ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? "bg-[var(--brand)] text-white rotate-180 shadow-md" : "bg-white/5 text-gray-400 group-hover:bg-white/10"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-5 sm:px-6 pb-6 text-gray-400 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                    <div className="pt-4 border-t border-white/5">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8 pt-8 border-t border-white/10 lg:hidden">
              <p className="text-[13px] text-gray-400 font-medium mb-4 uppercase tracking-wider">Still have questions? Reach out directly</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {contacts.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={i}
                      href={c.href}
                      onClick={c.onClick}
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 flex-1"
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 shrink-0" 
                        style={{ color: c.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white tracking-wide text-[13px]">{c.label}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
