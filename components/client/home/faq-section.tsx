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
      question: "Which business structure should I choose if I intend to raise VC funding or offer stock options to early employees?",
      answer: (
        <>
          If you are a high-growth tech startup looking to secure venture capital or attract top-tier talent through ESOPs, you should incorporate as a{" "}
          <Link href="/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" className="text-blue-300 underline hover:text-blue-200">Private Limited Company</Link>.
          {" "}Venture capitalists almost universally require this structure because capital is split into clear corporate shares, making equity distribution seamless. If you prefer a flexible framework with lower ongoing compliances and have no immediate plans for institutional funding, you can opt for an{" "}
          <Link href="/startup-businesslegal/startbusiness/LLPPage" className="text-blue-300 underline hover:text-blue-200">LLP Registration</Link>.
        </>
      ),
    },
    {
      question: "What are the mandatory prerequisites I need to gather before launching my company incorporation process online?",
      answer: (
        <>
          To initiate your registration, you need a minimum of 2 directors and shareholders (who can be the same individuals), with at least one director residing in India. You will need to provide standard KYC documents (PAN card, Aadhaar, and a recent bank statement or utility bill). You don&apos;t need to rent a commercial space right away — you can use a residential address for your registered office. Lawizer completely manages your application end-to-end, securing your DIN, DSC, and MCA name approval through our streamlined{" "}
          <Link href="/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" className="text-blue-300 underline hover:text-blue-200">Private Limited Company Registration</Link>{" "}workflow.
        </>
      ),
    },
    {
      question: "Does Lawizer assist with opening our corporate bank account or securing our tax identity after incorporation is complete?",
      answer: (
        <>
          Yes, incorporation is only the first step. Every standard business setup package processed through Lawizer automatically includes the generation of your company&apos;s PAN and TAN. Furthermore, our team provides dedicated bank account opening support to ensure your corporate entity can transition into daily commercial transactions without logistical delays.
        </>
      ),
    },
    {
      question: "How does a Trademark application differ from the name approval I get during my company incorporation?",
      answer: (
        <>
          Ministry of Corporate Affairs name approval simply prevents another business from setting up a corporate shell with an identical legal name. It does <strong>not</strong> give you exclusive commercial rights to market products under that brand name. To fully prevent competitors from copying your logos, slogans, or consumer-facing identity, you must separately file for a{" "}
          <Link href="/startup-businesslegal/protectbusiness/TrademarkRegistrationPage" className="text-blue-300 underline hover:text-blue-200">Trademark Registration</Link>{" "}to legally insulate your brand across the Indian market.
        </>
      ),
    },
    {
      question: "What essential legal contracts does my startup need to execute on day one to protect our internal operations?",
      answer: (
        <>
          Before you scale, you must secure your internal ecosystem. First, a comprehensive Co-Founder Agreement is vital to establish equity vesting and prevent early-departure gridlock. Second, you must execute clear NDAs and Employment Agreements to ensure all intellectual property (IP) created by your team remains sole corporate property. Explore our robust drafting and contract management options through our{" "}
          <Link href="/startup-businesslegal" className="text-blue-300 underline hover:text-blue-200">Legal Services Portal</Link>.
        </>
      ),
    },
    {
      question: "Are GST setup and MSME registration required the moment my company is officially incorporated?",
      answer: (
        <>
          No, these registrations are entirely milestone-driven. For a standard service-based startup,{" "}
          <Link href="/startup-businesslegal/startbusiness/GSTRegistrationPage" className="text-blue-300 underline hover:text-blue-200">GST Registration</Link>{" "}becomes legally mandatory only when your domestic turnover crosses ₹20 Lakhs in a financial year. However, many founders choose to register early to claim Input Tax Credit (ITC) on operational setups. Similarly, securing an{" "}
          <Link href="/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage" className="text-blue-300 underline hover:text-blue-200">MSME / Udyam Registration</Link>{" "}within your first 24 hours is highly recommended, as it unlocks collateral-free government loans and protects you against delayed payments from corporate clients.
        </>
      ),
    },
    {
      question: "How can our newly formed corporate entity unlock tax holidays and angel tax exemptions under the Startup India scheme?",
      answer: (
        <>
          Simply registering a company does not grant automatic tax breaks. To claim a 3-year consecutive income tax holiday and enjoy complete insulation from Angel Tax, your company must apply for official recognition via the{" "}
          <Link href="/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage" className="text-blue-300 underline hover:text-blue-200">Startup India Registration</Link>{" "}track. Lawizer helps you compile your pitch deck, outline your innovative business model, and secure your DPIIT recognition certificate seamlessly.
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
    <section className="py-12 md:py-20 bg-slate-900 text-white overflow-hidden px-4 md:px-12">

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left column ── */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" className="font-[family-name:var(--font-head)] font-extrabold">
              <span className="title-word text-brand-red">Questions?</span>
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
          <div className="space-y-1 px-2">
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
                    <div>{faq.answer}</div>
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
