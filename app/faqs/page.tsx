'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqGroup = {
  id: string;
  category: string;
  emoji: string;
  label: string;
  items: FaqItem[];
};

const faqGroups: FaqGroup[] = [
  {
    id: 'company-registration',
    category: 'Company Registration',
    emoji: '🏢',
    label: 'Company Registration',
    items: [
      {
        id: 'cr1',
        question: 'How long does it take to register a Private Limited Company in India?',
        answer:
          'The standard process takes 10–15 working days from the date all documents are submitted correctly. This includes DSC procurement (2–3 days), RUN name approval (2–3 days), and SPICe+ processing by MCA (5–7 working days). Delays can occur due to name objections or MCA portal queues.',
      },
      {
        id: 'cr2',
        question: 'What documents are needed to incorporate a company?',
        answer:
          'For each director/promoter: PAN card, Aadhaar card (with active linked mobile number), passport-size photo, and address proof. For the registered office: latest utility bill or rent agreement, and a No Objection Certificate (NOC) from the property owner. You\'ll also need to draft your MOA and AOA specifying the main business objects.',
      },
      {
        id: 'cr3',
        question: 'What is the minimum capital required to start a Private Limited Company?',
        answer:
          'There is no minimum paid-up capital requirement for a Private Limited Company in India following the Companies (Amendment) Act, 2015. You can start with as little as ₹1 as authorised capital, though a nominal share capital of ₹1,00,000 is typically recommended for practical purposes.',
      },
      {
        id: 'cr4',
        question: 'Can a single person start a Private Limited Company?',
        answer:
          'A Private Limited Company requires a minimum of 2 directors and 2 shareholders. If you want a single-person structure, a One Person Company (OPC) is the right choice — it allows a sole founder to own 100% of the company with limited liability. Note that OPCs must convert to a Private Limited Company once paid-up capital exceeds ₹50 lakh or turnover exceeds ₹2 crore.',
      },
      {
        id: 'cr5',
        question: 'What is MSME/Udyam registration and do I need it?',
        answer:
          'Udyam registration is a free, government-issued certificate that classifies your business as a Micro, Small, or Medium Enterprise. It unlocks benefits including priority sector lending, government tender eligibility, lower interest rates, and protection under the MSMED Act. Most startups and small businesses are eligible. It can be completed online in 1 working day after company incorporation.',
      },
    ],
  },
  {
    id: 'gst',
    category: 'GST',
    emoji: '💰',
    label: 'GST',
    items: [
      {
        id: 'gst1',
        question: 'Who must register for GST?',
        answer:
          'GST registration is mandatory if your aggregate turnover exceeds ₹40 lakhs (goods) or ₹20 lakhs (services) in a financial year. Lower thresholds apply for Northeastern and special category states. Regardless of turnover, registration is mandatory if you supply goods interstate, sell through e-commerce platforms, or are liable to pay tax under reverse charge.',
      },
      {
        id: 'gst2',
        question: 'How long does GST registration take?',
        answer:
          'GST registration typically takes 7–10 working days from the date of application, provided all documents are in order. The GSTN portal may issue a notice for additional documents or clarification, which can add 2–5 days. You cannot open a current bank account requiring a GSTIN until this is received, so apply early.',
      },
      {
        id: 'gst3',
        question: 'What are the penalties for not registering for GST when required?',
        answer:
          'The penalty for failing to register for GST when required is 10% of the tax payable, subject to a minimum of ₹10,000. In cases of deliberate evasion, the penalty can be 100% of the tax amount. Additionally, interest at 18% per annum is charged on unpaid tax from the date it became due.',
      },
    ],
  },
  {
    id: 'trademark-ip',
    category: 'Trademark',
    emoji: '™️',
    label: 'Trademark & IP',
    items: [
      {
        id: 'tm1',
        question: 'How long does trademark registration take in India?',
        answer:
          'The trademark application number is issued immediately or within 24–48 hours of filing. However, full trademark registration — after examination, publication in the Trademark Journal, and a 4-month opposition window — typically takes 12–18 months if there are no objections or oppositions. You can use the ™ symbol from the date of application and ® only after registration is complete.',
      },
      {
        id: 'tm2',
        question: 'What happens if my trademark application gets an objection?',
        answer:
          'If the Trademark Examiner raises an objection, you will receive an Examination Report. You have 30 days from the date of the report to file a reply under Rule 45 of the Trade Marks Rules, 2017. If no reply is filed, the application is deemed abandoned. A well-drafted reply addressing the examiner\'s grounds can successfully overcome most objections. Lawizer handles objection replies as a standalone service.',
      },
      {
        id: 'tm3',
        question: 'Do I need to register a trademark in every class?',
        answer:
          'Trademark protection in India is class-specific. India follows the NICE Classification system with 45 classes (1–34 for goods, 35–45 for services). You must register your trademark in each class relevant to your business. Most startups need to register in 1–3 classes. Our team can advise you on the right classes during the consultation.',
      },
    ],
  },
  {
    id: 'itr-filing',
    category: 'ITR Filing',
    emoji: '📑',
    label: 'ITR Filing',
    items: [
      {
        id: 'itr1',
        question: 'What is the due date for filing ITR?',
        answer:
          'For individuals (non-audit cases): 31 July of the assessment year. For businesses requiring audit: 31 October. For businesses with international transactions (transfer pricing report): 30 November. These dates can be extended by the government — Lawizer keeps you updated via email and WhatsApp reminders.',
      },
      {
        id: 'itr2',
        question: 'Can Lawizer file ITR for my company as well as me personally?',
        answer:
          'Yes. Lawizer handles ITR filing for individuals (ITR-1 through ITR-4) as well as entities including LLPs (ITR-5) and companies (ITR-6). You can bundle both services for a discounted rate. Our team of CA-assisted professionals ensures maximum deduction optimisation and error-free submission.',
      },
    ],
  },
  {
    id: 'legal-consultation',
    category: 'Legal Consultation',
    emoji: '💬',
    label: 'Legal Consultation',
    items: [
      {
        id: 'lc1',
        question: 'Is the first legal consultation really free?',
        answer:
          'Yes. Lawizer offers a free first consultation (up to 20 minutes) with a verified attorney on the Platform. This is a genuine, no-obligation session — not a sales call. For complex matters requiring detailed research or document review, paid consultation packages are available at transparent rates.',
      },
      {
        id: 'lc2',
        question: 'Are the attorneys on Lawizer verified and qualified?',
        answer:
          'Yes. Every attorney on Lawizer undergoes a thorough verification process, including Bar Council Enrolment Certificate validation, identity verification, and professional background checks. We only list attorneys who are in active practice with no disciplinary proceedings. Client reviews and ratings are moderated for authenticity.',
      },
      {
        id: 'lc3',
        question: 'How do I track the status of my service?',
        answer:
          'Once you place an order, you receive access to your personal Lawizer dashboard where you can track progress milestones, upload documents, communicate with your assigned professional, and receive real-time status notifications via email and WhatsApp. You will never be left guessing about where your matter stands.',
      },
    ],
  },
  {
    id: 'platform-payments',
    category: 'Platform & Payments',
    emoji: '💳',
    label: 'Platform & Payments',
    items: [
      {
        id: 'pp1',
        question: "What is Lawizer's refund policy?",
        answer:
          'If you cancel within 24 hours of payment and before work has commenced, you receive a 100% refund of Lawizer\'s professional fees (excluding payment gateway charges). Once work has commenced, partial refunds are assessed based on work completed. Government fees already paid to authorities are non-refundable. Full details are in our Terms of Service.',
      },
      {
        id: 'pp2',
        question: 'Which payment methods does Lawizer accept?',
        answer:
          'Lawizer accepts all major payment methods through Razorpay and PhonePe — including UPI, credit/debit cards, net banking, and wallets. All transactions are secured with SSL encryption. Lawizer does not store your card or bank details.',
      },
      {
        id: 'pp3',
        question: 'Is my data safe with Lawizer?',
        answer:
          'Yes. Lawizer implements SSL/TLS encryption, strict access controls, and regular security audits to protect your data. We are compliant with the Digital Personal Data Protection Act, 2023. We never sell your personal data to third parties. Full details are in our Privacy Policy.',
      },
    ],
  },
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const categories = ['All', ...faqGroups.map((group) => group.category)];

  const filteredGroups =
    activeCategory === 'All' ? faqGroups : faqGroups.filter((group) => group.category === activeCategory);

  const handleItemClick = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32">
      {/* Premium Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#252a3e] to-[#1a1a2e]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#e94560]/20 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#f5a623]/15 to-transparent rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-l from-[#e94560]/10 to-transparent rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-8 md:py-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="text-2xl">❓</span>
            <span className="text-sm font-medium text-white/90">Quick Answers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-[#f5a623] via-[#e94560] to-[#ff6b8a] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Quick, clear answers to the questions founders and individuals ask us most.
          </p>
        </div>
      </div>

      {/* Category Filter Bar - Premium */}
      <div className="px-5 pt-12 pb-0 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenItem(null);
              }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white shadow-lg shadow-[#e94560]/40 scale-105'
                  : 'bg-white text-[#1a1a2e] border-2 border-[#e5e7eb] hover:border-[#e94560] hover:text-[#e94560]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content - Premium Cards */}
      <div className="max-w-3xl mx-auto px-5 py-8 pb-20">
        {filteredGroups.map((group, groupIndex) => (
          <div key={group.id}>
            {/* Category Heading */}
            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#1a1a2e] border-l-4 border-[#f5a623] pl-4 mt-10 mb-6">
              <span className="text-3xl">{group.emoji}</span>
              {group.label}
            </h2>

            {/* FAQ Items Grid */}
            <div className="space-y-3">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="group/item relative overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm hover:shadow-2xl hover:border-[#e94560]/50 transition-all duration-500"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/5 to-[#f5a623]/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Question Row */}
                  <div
                    onClick={() => handleItemClick(item.id)}
                    className={`relative flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base transition-all duration-300 ${
                      openItem === item.id
                        ? 'bg-gradient-to-r from-[#e94560]/5 to-[#f5a623]/5 text-[#e94560]'
                        : 'text-[#1a1a2e] group-hover/item:text-[#e94560]'
                    }`}
                  >
                    <span className="flex-1 text-left leading-tight">{item.question}</span>
                    <ChevronDown
                      className={`ml-4 w-5 h-5 flex-shrink-0 transition-transform duration-500 ${
                        openItem === item.id ? 'rotate-180 text-[#e94560]' : 'text-[#6b7280] group-hover/item:text-[#e94560]'
                      }`}
                    />
                  </div>

                  {/* Answer Row */}
                  {openItem === item.id && (
                    <div className="relative px-6 pb-5 pt-0 text-base text-[#6b7280] leading-relaxed border-t border-[#f3f4f6] animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Premium CTA Section */}
      <div className="relative overflow-hidden px-5 py-16 bg-gradient-to-r from-[#1a1a2e] via-[#2a2a45] to-[#1a1a2e]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#e94560]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#f5a623]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-3">Still have questions?</h2>
          <p className="text-white/75 text-lg mb-8">Our team is available 24/7 to help you with any legal matter.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919062815535"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white rounded-full px-8 py-3 font-bold shadow-lg hover:shadow-2xl hover:shadow-[#e94560]/40 transform hover:scale-105 transition-all duration-300"
            >
              📞 Call Us
            </a>
            <a
              href="mailto:admin@lawizer.com"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 rounded-full px-8 py-3 font-bold hover:bg-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
