'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, Briefcase } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  number: string
  label: string
}

interface Perk {
  emoji: string
  title: string
  description: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
  school: string
  batch: string
}

interface JobSkill {
  text: string
  tag: 'remote' | 'onsite' | 'default'
}

interface Job {
  department: string
  title: string
  location: string
  type: string
  description: string
  skills: JobSkill[]
}

interface HiringStep {
  emoji: string
  title: string
  description: string
}

interface PublicJobCard {
  id: number
  title: string
  company: string
  location: string
  type: string
  description: string
  tag: string
  href: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats: Stat[] = [
  { number: '25+', label: 'Team Members' },
  { number: '8', label: 'Practice Verticals' },
  { number: '3,000+', label: 'Clients Served' },
  { number: '12', label: 'Cities Covered' },
  { number: '4.9★', label: 'Platform Rating' },
]

const perks: Perk[] = [
  {
    emoji: '🏠',
    title: 'Flexible / Remote-First',
    description: 'We trust you to deliver — from wherever you work best.',
  },
  {
    emoji: '📚',
    title: 'Learning Budget',
    description: '₹10,000/year per team member for courses, books, and certifications.',
  },
  {
    emoji: '⚡',
    title: 'Fast Growth',
    description: 'Flat hierarchy. Your ideas reach the founding team in days, not quarters.',
  },
  {
    emoji: '🩺',
    title: 'Health Cover',
    description: 'Group medical insurance for full-time employees and their families.',
  },
  {
    emoji: '🎯',
    title: 'Performance Bonuses',
    description: 'Quarterly bonuses tied to your impact, not just seniority.',
  },
  {
    emoji: '🤝',
    title: 'Mentorship Programme',
    description: 'Direct mentorship from experienced lawyers and compliance professionals.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      "I joined Lawizer as a legal research intern and within a month I was writing real client-facing guides and sitting in on strategy calls. The exposure was incredible — no busy work, just real responsibility.",
    name: 'Aditi Sharma',
    role: 'Legal Research Intern',
    school: 'NLSIU Bangalore',
    batch: 'Batch 2025',
  },
  {
    quote:
      "As a business development intern, I was given ownership of our outreach to D2C founders. By the third week, I had closed my first lead. The team celebrated it like a big win — because for them, it was.",
    name: 'Rahul Menon',
    role: 'BD Intern',
    school: 'IIM Rohtak',
    batch: 'Batch 2025',
  },
  {
    quote:
      "What I loved most was how approachable the leadership team is. Shreyas personally reviewed my work and gave detailed feedback. It's the kind of mentorship you don't find in most big firms.",
    name: 'Priya Nair',
    role: 'Operations Intern',
    school: 'Symbiosis Law School',
    batch: 'Batch 2024',
  },
  {
    quote:
      "I was handling GST and trademark research, and the team trusted me with client documentation. I left the internship feeling like a compliance professional, not just a student.",
    name: 'Karan Agarwal',
    role: 'Compliance Intern',
    school: 'NMIMS Mumbai',
    batch: 'Batch 2024',
  },
]

const internalJobs: Job[] = [
  {
    department: 'Legal Operations',
    title: 'Compliance Executive – Business Registrations',
    location: 'Kolkata / Remote',
    type: 'Full-time',
    description:
      'Handle end-to-end company incorporation, GST, trademark, and MSME filings for clients pan-India. Experience with MCA portal and SPICe+ is a plus.',
    skills: [
      { text: 'MCA', tag: 'default' },
      { text: 'GST', tag: 'default' },
      { text: 'Remote OK', tag: 'remote' },
    ],
  },
  {
    department: 'Legal',
    title: 'Associate Attorney – Startup & Business Law',
    location: 'Kolkata / Remote',
    type: 'Full-time',
    description:
      'Advise early-stage founders on corporate structuring, employment contracts, and IP strategy. LLB required; 1–3 years experience preferred.',
    skills: [
      { text: 'LLB', tag: 'default' },
      { text: 'IP', tag: 'default' },
      { text: 'Remote OK', tag: 'remote' },
    ],
  },
  {
    department: 'Growth',
    title: 'Business Development Manager – B2B',
    location: 'Kolkata / Pan-India',
    type: 'Full-time',
    description: 'Own outreach to startup founders, SME owners, and CA/CS firms. Experience in SaaS or professional-services B2B sales preferred.',
    skills: [
      { text: 'B2B Sales', tag: 'default' },
      { text: 'Onsite + Travel', tag: 'onsite' },
    ],
  },
  {
    department: 'Content',
    title: 'Legal Content Writer (SEO)',
    location: 'Remote',
    type: 'Full-time / Freelance',
    description: 'Write high-quality, SEO-optimised legal guides, FAQs, and news articles. Background in law or journalism is a strong advantage.',
    skills: [
      { text: 'SEO', tag: 'default' },
      { text: 'Legal Writing', tag: 'default' },
      { text: 'Remote', tag: 'remote' },
    ],
  },
  {
    department: 'Internship',
    title: 'Legal Research Intern (6 Months)',
    location: 'Remote',
    type: 'Internship · Stipend: ₹8,000–₹12,000/month',
    description: 'Research case law, regulatory updates, and compliance topics. Open to penultimate and final-year LLB students.',
    skills: [
      { text: 'Internship', tag: 'default' },
      { text: 'Remote', tag: 'remote' },
    ],
  },
]

const hiringSteps: HiringStep[] = [
  {
    emoji: '📋',
    title: 'Apply Online',
    description: 'Send your CV and a short cover note to careers@lawizer.com or use the Apply button.',
  },
  {
    emoji: '☎️',
    title: 'Intro Call',
    description: 'A 20-minute call with our team to understand your experience and answer your questions about Lawizer.',
  },
  {
    emoji: '✍️',
    title: 'Short Task',
    description: 'A brief role-specific task (1–2 hours max) to see how you think and work.',
  },
  {
    emoji: '🤝',
    title: 'Final Interview',
    description: 'Meet the founder and team lead. We keep it conversational — we want to understand you, not trip you up.',
  },
]

// 6 placeholder public job cards (realistic Indian legal/startup roles)
const publicJobs: PublicJobCard[] = [
  {
    id: 1,
    title: 'Legal Associate – Startup & Venture',
    company: 'Razorpay',
    location: 'Bengaluru, Karnataka',
    type: 'Full-time',
    tag: 'Fintech',
    description:
      'Draft and review commercial agreements, advise on regulatory requirements for payments, and support M&A due diligence for one of India\'s leading fintech companies.',
    href: 'https://razorpay.com/jobs/',
  },
  {
    id: 2,
    title: 'Compliance Manager – GST & Direct Tax',
    company: 'Meesho',
    location: 'Bengaluru, Karnataka',
    type: 'Full-time',
    tag: 'E-Commerce',
    description:
      'Manage GST registrations, returns, and assessments across 20+ states. Work closely with the finance team on TDS, TCS, and income tax compliance for a high-growth D2C platform.',
    href: 'https://meesho.com/careers',
  },
  {
    id: 3,
    title: 'IP & Trademark Counsel',
    company: 'Tata Digital',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    tag: 'Conglomerate',
    description:
      'Manage the trademark portfolio across 15+ Tata Digital brands, handle objections and oppositions, and coordinate with external counsel for cross-border IP filings.',
    href: 'https://www.tatadigital.com/careers',
  },
  {
    id: 4,
    title: 'Legal Internship – Corporate Law',
    company: 'Zepto',
    location: 'Mumbai, Maharashtra',
    type: 'Internship · ₹15,000–₹20,000/month',
    tag: 'Quick Commerce',
    description:
      'Support the in-house legal team on contract management, vendor agreements, and startup regulatory compliance. Open to final-year LLB and LLM students.',
    href: 'https://www.zepto.team/careers',
  },
  {
    id: 5,
    title: 'Head of Legal & Compliance',
    company: 'Groww',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    tag: 'WealthTech',
    description:
      'Lead the legal function for a Series-E WealthTech startup. Own SEBI, RBI, and IRDAI compliance, manage a team of three lawyers, and advise on product and fundraising strategy.',
    href: 'https://groww.in/open-positions',
  },
  {
    id: 6,
    title: 'Startup Compliance Analyst',
    company: 'NSRCEL (IIM Bangalore)',
    location: 'Bengaluru, Karnataka',
    type: 'Contract · 6 months',
    tag: 'Incubator',
    description:
      'Support portfolio startups with company registration, DPIIT recognition, and GST compliance. Ideal for a CS/LLB graduate with 1–2 years of MCA filing experience.',
    href: 'https://nsrcel.org/about/work-with-us/',
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }),
}

// ─── Tag colour lookup ────────────────────────────────────────────────────────

const TAG_COLOURS: Record<string, string> = {
  Fintech:     'bg-blue-50 text-blue-700 border-blue-200',
  'E-Commerce':'bg-orange-50 text-orange-700 border-orange-200',
  Conglomerate:'bg-purple-50 text-purple-700 border-purple-200',
  'Quick Commerce': 'bg-green-50 text-green-700 border-green-200',
  WealthTech:  'bg-indigo-50 text-indigo-700 border-indigo-200',
  Incubator:   'bg-teal-50 text-teal-700 border-teal-200',
}

function tagClass(tag: string) {
  return TAG_COLOURS[tag] ?? 'bg-gray-50 text-gray-600 border-gray-200'
}

// ─── Public job card ──────────────────────────────────────────────────────────

function PublicJobCard({ job }: { job: PublicJobCard }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#e94560]/40 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Top accent bar */}
      <div className="h-[5px] w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#e94560] shrink-0" />

      <div className="flex flex-col flex-1 p-5">
        {/* Tag + type */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tagClass(job.tag)}`}>
            {job.tag}
          </span>
          <span className="text-[10px] text-[#9ca3af] font-medium">{job.type}</span>
        </div>

        {/* Title */}
        <h3 className="text-[#1a1a2e] font-bold text-base leading-snug mb-1 group-hover:text-[#e94560] transition-colors duration-300">
          {job.title}
        </h3>

        {/* Company + location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#374151]">
            <Briefcase className="w-3 h-3 text-[#e94560]" aria-hidden="true" />
            {job.company}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#6b7280]">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {job.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#6b7280] text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
          {job.description}
        </p>

        {/* CTA */}
        <a
          href={job.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white text-xs font-bold py-2.5 hover:shadow-lg hover:shadow-[#e94560]/30 hover:scale-[1.02] transition-all duration-300"
          aria-label={`Apply Now for ${job.title} at ${job.company} — opens in new tab`}
        >
          Apply Now
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/3 to-[#302b63]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <div className="scroll-smooth bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16 text-center relative overflow-hidden bg-[#06101e]"
      >
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-[#06101e]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(6,16,30,0.55)_0%,rgba(6,16,30,0.1)_40%,rgba(202,45,66,0.15)_70%,rgba(6,16,30,0.85)_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#06101e]/90 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_65%_50%_at_52%_48%,rgba(202,45,66,0.2)_0%,rgba(202,45,66,0.05)_40%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)', backgroundSize: '100% 3px' }} />

        <div className="max-w-3xl mx-auto z-10 relative">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-block mb-8 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-br from-brand-red to-[#e94560] shadow-[0_8px_25px_rgba(202,45,66,0.4)]"
          >
            We&apos;re Hiring 🚀
          </motion.div>

          <motion.h1 custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          >
            Work with Lawizer
          </motion.h1>

          <motion.p custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-200"
          >
            Join a team building India&apos;s most trusted legal platform for founders — and make legal help simple, affordable, and accessible for everyone.
          </motion.p>

          <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#internship"
              className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-brand-red to-[#e94560] shadow-[0_12px_30px_rgba(202,45,66,0.45)]"
            >
              Apply for Internship
            </a>
            <a
              href="#open-roles"
              className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white border border-white/25 bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300"
            >
              View Open Roles
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-3 text-brand-red">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNSHIP SECTION ───────────────────────────────────────────── */}
      <section id="internship" className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e94560] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e94560]" />
              </span>
              <span className="text-[#e94560] text-xs font-bold uppercase tracking-widest">Now accepting applications</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Internship at Lawizer
            </h2>
            <div className="w-20 h-1 mb-6 divider-accent rounded-full" />
            <p className="text-lg max-w-2xl leading-relaxed mb-10 text-gray-500">
              We&apos;re India&apos;s fastest growing LegalTech platform — looking for driven, curious, and enthusiastic individuals across legal, tech, and business roles. Fully remote, 1-month programme with real responsibility from day one.
            </p>
          </motion.div>

          {/* Roles + Benefits grid */}
          <motion.div
            variants={fadeUp} custom={0.1} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            {/* Open Roles */}
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] p-6">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2 text-gray-900">
                <span className="text-xl">🔹</span> Open Roles
              </h3>
              <ul className="space-y-2.5">
                {['Social Media Marketing','Research','Sales','Legal','Web Development','AI / ML','Content Writing'].map((role) => (
                  <li key={role} className="flex items-center gap-2.5 text-sm font-medium text-gray-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e94560] shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits + Quick facts */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] p-6 flex-1">
                <h3 className="font-bold text-base mb-4 flex items-center gap-2 text-gray-900">
                  <span className="text-xl">🔸</span> What You Gain
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Hands-on Experience',
                    'Mentorship from industry professionals',
                    'Skill Development',
                    'Networking opportunities',
                    'Potential for Future Employment',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-sm font-medium text-gray-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#e5e7eb] bg-[#fafafa] px-4 py-3 flex items-center gap-3">
                  <span className="text-xl shrink-0">🕒</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Duration</p>
                    <p className="text-sm font-bold text-gray-900">1 Month</p>
                  </div>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] bg-[#fafafa] px-4 py-3 flex items-center gap-3">
                  <span className="text-xl shrink-0">🌐</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Mode</p>
                    <p className="text-sm font-bold text-gray-900">Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Form embed card */}
          <motion.div
            variants={fadeUp} custom={0.1} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg bg-white"
          >
            {/* Card header */}
            <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">📋</span>
                <div>
                  <p className="text-white font-semibold text-sm">Lawizer Internship Application</p>
                  <p className="text-white/60 text-xs">Fill in the form — we review all applications within 5 business days.</p>
                </div>
              </div>
              <a
                href="https://forms.gle/4TJiH1ZEmNH3skQb8"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold text-white/70 hover:text-white underline underline-offset-2 transition-colors hidden sm:block"
              >
                Open in new tab ↗
              </a>
            </div>

            {/* iframe */}
            <div className="bg-[#fafafa]">
              <iframe
                src="https://forms.gle/4TJiH1ZEmNH3skQb8"
                width="100%"
                height="900"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Lawizer Internship Application Form"
                className="block w-full"
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>

            {/* Fallback link */}
            <div className="bg-[#fafafa] border-t border-[#e5e7eb] px-6 py-3 text-center">
              <p className="text-xs text-gray-500">
                Form not loading?{' '}
                <a
                  href="https://forms.gle/4TJiH1ZEmNH3skQb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e94560] font-semibold hover:underline"
                >
                  Apply directly here →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#e5e7eb]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#9ca3af] whitespace-nowrap">
            Legal &amp; Startup Jobs
          </span>
          <div className="flex-1 h-px bg-[#e5e7eb]" />
        </div>
      </div>

      {/* ── PUBLIC JOB LISTINGS ──────────────────────────────────────────── */}
      <section id="startup-jobs" className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Legal &amp; Startup Jobs
            </h2>
            <p className="text-base text-gray-500">
              Curated openings at India&apos;s leading startups and legal departments.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
          >
            {publicJobs.map((job) => (
              <PublicJobCard key={job.id} job={job} />
            ))}
          </motion.div>

          {/* Footer note */}
          <div className="flex items-center gap-2 text-xs text-[#9ca3af]">
            <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>
              Jobs updated every 48 hours. Listings sourced from public job boards.
            </span>
          </div>
        </div>
      </section>

      {/* ── WHY WORK AT LAWIZER ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Why Work at Lawizer?
            </h2>
            <div className="w-20 h-1 mb-8 divider-accent rounded-full" />
            <p className="text-lg max-w-3xl leading-relaxed text-gray-500">
              We&apos;re not just another legal-services startup. We&apos;re a team of builders, lawyers, and problem-solvers who believe that legal protection shouldn&apos;t be a privilege.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="transition-all duration-300 border border-gray-200 bg-white hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(202,45,66,0.12)] hover:border-brand-red p-8 rounded-2xl">
                <div className="flex items-start gap-5">
                  <span className="text-6xl flex-shrink-0">{perk.emoji}</span>
                  <div className="text-left">
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{perk.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{perk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERN TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Hear From Our Interns
          </h2>
          <div className="w-20 h-1 mb-8 divider-accent rounded-full" />
          <p className="text-lg mb-16 max-w-3xl leading-relaxed text-gray-500">
            Every year we bring on talented students from law schools and business programs. Here&apos;s what they say about working with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="border-l-[3px] border-brand-red transition-all duration-300 bg-white hover:shadow-[0_8px_24px_rgba(202,45,66,0.1)] hover:-translate-y-0.5 p-8 rounded-2xl">
                <q className="italic block mb-6 text-sm leading-relaxed text-gray-900">
                  &ldquo;{testimonial.quote}&rdquo;
                </q>
                <div className="font-bold text-sm text-gray-900">{testimonial.name}</div>
                <div className="text-xs mt-2 text-gray-500">{testimonial.role}</div>
                <div className="text-xs text-gray-500">{testimonial.school} • {testimonial.batch}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES (internal) ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 bg-white" id="open-roles">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Open Roles at Lawizer
          </h2>
          <div className="w-20 h-1 mb-12 divider-accent rounded-full" />
          <div className="space-y-6">
            {internalJobs.map((job, idx) => (
              <div key={idx} className="border border-gray-200 transition-all duration-300 bg-white hover:shadow-[0_16px_32px_rgba(202,45,66,0.1)] hover:border-brand-red flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 p-8 rounded-2xl">
                <div className="flex-1 min-w-0">
                  <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-5 bg-[#e0d9ff] text-gray-900">
                    {job.department}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{job.title}</h3>
                  <p className="text-sm mb-5 font-medium text-gray-500">
                    📍 {job.location}  •  {job.type}
                  </p>
                  <p className="text-sm mb-6 leading-relaxed text-gray-500">{job.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {job.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} className={`px-3 py-1.5 text-xs font-semibold rounded-full skill-${skill.tag}`}>
                        {skill.text}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a href="mailto:careers@lawizer.com" className="block text-center px-8 py-3 rounded-lg font-semibold cta-button whitespace-nowrap">
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Our Hiring Process
          </h2>
          <div className="w-20 h-1 mb-16 divider-accent rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {hiringSteps.map((step, idx) => (
              <div key={idx} className="transition-all duration-300 bg-white border border-gray-200 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(202,45,66,0.12)] hover:border-brand-red p-8 rounded-2xl">
                <div className="text-5xl mb-5">{step.emoji}</div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="mb-8 text-lg font-medium text-gray-900">
              Don&apos;t see a role that fits? We&apos;re always looking for talented people.
            </p>
            <a href="mailto:careers@lawizer.com" className="inline-block px-10 py-4 rounded-lg font-semibold cta-button text-lg">
              Send an Open Application
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
