
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle2, ChevronDown, MessageCircle, FileText, ArrowRight, Loader2, Shield, Users, Scale, Briefcase, User, Laptop, Globe, Home, Store, Settings, Handshake, UserCheck, Lock, Cloud, Building2, PieChart, ShieldCheck, PenTool, FileSignature, Landmark, Stamp, Check } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function DocumentationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    brief: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const agreementTypes = [
    "Non-Disclosure Agreement (NDA)",
    "Founders' Agreement",
    "Shareholders' Agreement",
    "Vendor / Service Contract",
    "Employment Agreement",
    "Freelance / Consultant Contract",
    "Website Terms & Conditions / Privacy Policy",
    "Lease / Leave & License Agreement",
    "Franchise Agreement",
    "Something else / Not sure",
  ];

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Quote request received! We'll call you shortly.");
      setFormData({ name: "", email: "", phone: "", type: "", brief: "" });
    }, 1200);
  };

  const faqs = [
    {
      q: "Why don't you show a fixed price for agreements?",
      a: "Agreements vary hugely in complexity — the number of parties, specific clauses, negotiation rounds and jurisdictional requirements all affect the work involved. A quote tailored to your exact need means fair, transparent pricing instead of a generic number that may not fit your case."
    },
    {
      q: "How long does it take to get a quote?",
      a: "Usually within 24 hours of submitting the form or reaching out on Call/WhatsApp. For straightforward agreements, we can often share a quote the same day."
    },
    {
      q: "Is there any charge for getting a quote?",
      a: "No. Sharing your requirement and receiving a quote is completely free, with no obligation to proceed."
    },
    {
      q: "What if I'm not sure which agreement I need?",
      a: 'That\'s completely fine — select "Something else / Not sure" in the form, describe your situation briefly, and our expert will guide you to the right agreement type on the call.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#161829] font-inter">
      {/* 1. HERO SECTION WITH QUOTE FORM */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#FFF5F3] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
          
          {/* Hero Copy */}
          <div className="pt-2 lg:pt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FBEAE7] text-[#C0392B] text-[10px] font-bold uppercase tracking-widest mb-4">
              Documentation & Agreements
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-poppins leading-[1.15] tracking-tight mb-4 text-[#161829]">
              Every agreement is <span className="text-[#C0392B]">different</span> <br className="hidden md:block"/>— so is the quote
            </h1>
            <p className="text-[#3C4257] text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              NDAs, founders' agreements, vendor contracts, employment agreements and more, drafted by qualified legal experts. Because complexity and scope vary so much from one agreement to the next, we quote each one individually instead of a one-size-fits-all price.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Drafted by legal experts', 'No-obligation quote', 'Response within 24 hours'].map(chip => (
                <div key={chip} className="inline-flex items-center gap-2 bg-white border border-[#E9EBF1] shadow-sm px-3 py-1.5 rounded-full text-[13px] font-semibold text-[#3C4257]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  {chip}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="tel:+919062815535" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C0392B] text-white text-sm font-semibold shadow-[0_8px_20px_rgba(192,57,43,0.25)] hover:bg-[#9E2B20] hover:-translate-y-0.5 transition-all">
                <Phone className="w-4 h-4" /> Call Us
              </a>
              <a href="https://wa.me/919062815535" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-[#E9EBF1] text-[#16A34A] text-sm font-semibold shadow-sm hover:bg-[#F0FDF4] hover:border-[#BBF7D0] hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quote Form Card */}
          <div className="relative z-10">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C0392B] to-[#e0724a] rounded-t-3xl z-20"></div>
            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_20px_60px_-15px_rgba(22,24,41,0.15)] border border-[#E9EBF1] relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FBEAE7] text-[#C0392B] text-[10px] font-bold uppercase tracking-wider mb-3">
                Get a custom quote
              </span>
              <h3 className="text-xl font-bold font-poppins text-[#161829] mb-1">Tell us about your agreement</h3>
              <p className="text-[#6B7280] text-[13px] mb-4">Share a few details and one of our legal experts will call you back with a clear quote — no pricing surprises.</p>
              
              {isSuccess ? (
                <div className="bg-[#ECFDF3] border border-[#BBF7D0] rounded-2xl p-5 text-center text-[#15803D]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Check className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <h4 className="font-bold text-base mb-1">Request Received!</h4>
                  <p className="text-[13px]">A legal expert will call you back within 24 hours with your quote.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-4 text-[13px] font-semibold underline">Submit another request</button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4257] mb-1">Full name</label>
                    <input required type="text" placeholder="e.g. Rohan Agarwal" className="w-full px-3 py-2 text-[13px] rounded-lg border border-[#E9EBF1] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4257] mb-1">Email address</label>
                    <input required type="email" placeholder="you@example.com" className="w-full px-3 py-2 text-[13px] rounded-lg border border-[#E9EBF1] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4257] mb-1">Mobile number</label>
                    <input required type="tel" pattern="[0-9]{10}" placeholder="10-digit mobile" className="w-full px-3 py-2 text-[13px] rounded-lg border border-[#E9EBF1] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4257] mb-1">Type of agreement</label>
                    <select required className="w-full px-3 py-2 text-[13px] rounded-lg border border-[#E9EBF1] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all bg-white" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                      <option value="" disabled>Select agreement type</option>
                      {agreementTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4257] mb-1">Brief of the agreement</label>
                    <textarea required placeholder="In a few lines, tell us who the parties are and what the agreement needs to cover..." rows={2} className="w-full px-3 py-2 text-[13px] rounded-lg border border-[#E9EBF1] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all resize-none" value={formData.brief} onChange={(e) => setFormData({...formData, brief: e.target.value})} />
                  </div>
                  
                  <button disabled={isSubmitting} type="submit" className="w-full bg-[#161829] hover:bg-[#2A2E45] text-white py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Request a Callback <ArrowRight className="w-4 h-4" /></>}
                  </button>
                  <p className="text-center text-[11px] text-[#6B7280] flex items-center justify-center gap-1.5 pt-1.5">
                    <Shield className="w-3 h-3 text-[#16A34A]" /> Your details are 100% secure & confidential
                  </p>
                </form>
              )}
              
              <div className="mt-4 pt-4 border-t border-[#E9EBF1] flex gap-3">
                <a href="tel:+919062815535" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#F6F7FA] text-[#3C4257] hover:bg-[#E9EBF1] font-semibold text-[13px] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C0392B]" /> Call
                </a>
                <a href="https://wa.me/919062815535" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#F6F7FA] text-[#3C4257] hover:bg-[#E9EBF1] font-semibold text-[13px] transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY QUOTES BAND */}
      <section className="bg-[#161829] py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-none text-[#FFB27A]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Every agreement is different</h4>
              <p className="text-[#B9BCD0] text-sm leading-relaxed">Two NDAs can look nothing alike — the parties, the clauses, the risk. A fixed price can't reflect that fairly.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-none text-[#FFB27A]">
              <PieChart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">You only pay for what you need</h4>
              <p className="text-[#B9BCD0] text-sm leading-relaxed">A quote based on your actual requirement means you're never overpaying for complexity you don't have.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-none text-[#FFB27A]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">A real conversation first</h4>
              <p className="text-[#B9BCD0] text-sm leading-relaxed">One quick call to understand what you actually need, before you commit to anything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AGREEMENT TYPES */}
      <section className="py-24 px-4 bg-[#F6F7FA]" id="types">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FBEAE7] text-[#C0392B] text-xs font-bold uppercase tracking-widest mb-4">
              Agreement types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#161829] mb-4">What we draft</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Explore each agreement type to understand what it covers. Pricing isn't shown here — use the form above to get a quote tailored to your situation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Non-Disclosure Agreement (NDA)", desc: "Protect confidential information before sharing it with a partner, investor, employee or vendor.", slug: "non-disclosure-agreement", icon: Shield },
              { title: "Founders' Agreement", desc: "Define ownership, roles, vesting and exit terms between co-founders before disputes can arise.", slug: "co-founder-agreement", icon: Users },
              { title: "Business Partnership Agreement", desc: "Legal contract defining investment, profit-sharing, responsibilities, and exit mechanisms among partners.", slug: "business-partnership-agreement", icon: Handshake },
              { title: "Shareholders' Agreement", desc: "Govern rights, transfer restrictions and decision-making among a company's shareholders.", slug: "shareholders-agreement", icon: PieChart },
              { title: "Vendor / Service Contract", desc: "Set clear deliverables, timelines, payment terms and liability with suppliers or service providers.", slug: "vendor-contract", icon: Briefcase },
              { title: "Employment Agreement", desc: "Cover role, compensation, confidentiality and termination terms for a new hire, compliantly.", slug: "employment-agreement", icon: UserCheck },
              { title: "Freelance / Consultant Contract", desc: "Scope of work, IP ownership and payment terms for freelancers and independent consultants.", slug: "consultancy-agreement", icon: PenTool },
              { title: "Website Terms & Privacy Policy", desc: "Protect your business and inform users with legally sound website Terms and a Privacy Policy.", slug: "privacy-terms-of-use", icon: Lock },
              { title: "Software as a Service (SaaS) Agreement", desc: "Governs subscription, licensing, support, and intellectual property rights for software services.", slug: "saas-agreement", icon: Cloud },
              { title: "Lease / Leave & License Agreement", desc: "Clear, enforceable terms for renting or licensing residential or commercial property.", slug: "leave-license-agreement", icon: Building2 },
              { title: "Franchise Agreement", desc: "Structure the rights, obligations and royalty terms between a franchisor and franchisee.", slug: "franchise-agreement", icon: Store },
              { title: "Joint Venture Agreement", desc: "Defines partnership, investment, profit-sharing, and management of a Joint Venture.", slug: "joint-venture-agreement", icon: Building2 },
              { title: "Service Agreement & Term Sheet", desc: "Defines scope, fees, deliverables, and timelines for a business service, ensuring legal enforceability.", slug: "service-agreement-term-sheet", icon: FileText },
              { title: "Licensing Agreement", desc: "Governs licensing of intellectual property, technology, or products, protecting IP rights and revenue.", slug: "licensing-agreement", icon: ShieldCheck },
              { title: "IP Assignment Agreement", desc: "Transfers Intellectual Property (IP) ownership from one party to another, ensuring legal transfer of rights.", slug: "ip-assignment-agreement", icon: PenTool },
              { title: "Letter of Intent (LOI)", desc: "Declares preliminary intention to enter a business transaction or agreement, establishing mutual understanding.", slug: "letter-of-intent", icon: FileSignature }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <Link key={i} href={`/documentation/${card.slug}`} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9EBF1] hover:shadow-lg transition-all hover:-translate-y-1 hover:border-[#e0d3cf] group flex flex-col">
                  <div className="w-12 h-12 bg-[#FBEAE7] rounded-xl flex items-center justify-center mb-4 text-[#C0392B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#161829] mb-2 font-poppins">{card.title}</h3>
                  <p className="text-[#6B7280] text-sm mb-6 flex-grow">{card.desc}</p>
                  
                  <div className="inline-flex items-center gap-1.5 text-[#C0392B] font-semibold text-sm group-hover:gap-2 transition-all">
                    View details <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center mb-8">
            <h2 className="text-2xl font-bold font-poppins text-[#161829]">Power of Attorney Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 max-w-4xl mx-auto gap-6">
            {[
              { title: "Power of Attorney (POA) Drafting", desc: "Drafting a legal document to authorize a trusted person to act on your behalf in financial, property, or legal matters.", slug: "power-of-attorney-drafting", icon: Landmark },
              { title: "Registration of Power of Attorney", desc: "Guidance and support to register your Power of Attorney to make it legally enforceable and accepted by government and financial institutions.", slug: "power-of-attorney-registration", icon: Stamp }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <Link key={i} href={`/documentation/${card.slug}`} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9EBF1] hover:shadow-lg transition-all hover:-translate-y-1 hover:border-[#e0d3cf] group flex flex-col">
                  <div className="w-12 h-12 bg-[#FBEAE7] rounded-xl flex items-center justify-center mb-4 text-[#C0392B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#161829] mb-2 font-poppins">{card.title}</h3>
                  <p className="text-[#6B7280] text-sm mb-6 flex-grow">{card.desc}</p>
                  
                  <div className="inline-flex items-center gap-1.5 text-[#C0392B] font-semibold text-sm group-hover:gap-2 transition-all">
                    View details <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS STEPS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FBEAE7] text-[#C0392B] text-xs font-bold uppercase tracking-widest mb-4">
              Simple process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#161829] mb-4">How your quote works</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              From your first message to a signed agreement, here's what happens.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tell us what you need", desc: "Fill the form above or call/WhatsApp us with a quick brief of your agreement." },
              { title: "We understand the scope", desc: "A legal expert calls you back to understand the parties, terms and complexity involved." },
              { title: "You receive a clear quote", desc: "A transparent, itemised quote — no hidden charges, no obligation to proceed." },
              { title: "We draft & deliver", desc: "Once you approve, your agreement is drafted, reviewed with you, and finalised." }
            ].map((step, i) => (
              <div key={i} className="bg-white border border-[#E9EBF1] rounded-2xl p-6 relative">
                <div className="w-10 h-10 rounded-xl bg-[#161829] text-white flex items-center justify-center font-bold font-poppins mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#161829] mb-2">{step.title}</h3>
                <p className="text-[#6B7280] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-24 px-4 bg-[#F6F7FA]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FBEAE7] text-[#C0392B] text-xs font-bold uppercase tracking-widest mb-4">
              Good to know
            </span>
            <h2 className="text-3xl font-bold font-poppins text-[#161829]">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E9EBF1] rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-bold font-poppins text-[#161829]">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${openFaq === i ? "bg-[#C0392B] text-white rotate-45" : "bg-[#FBEAE7] text-[#C0392B]"}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-[#6B7280] text-sm leading-relaxed overflow-hidden"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
