'use client'

import Link from 'next/link'

// Type definitions
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

// Data Constants
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

const jobs: Job[] = [
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

export default function CareersPage() {
  return (
    <div style={{ scrollBehavior: 'smooth' }} className="bg-white">
      <style>{`
        :root {
          --accent-red: #ca2d42;
          --light-bg: #f5f7fc;
          --text-dark: #1a1a2e;
          --text-muted: #6b7280;
          --border-color: #e5e7eb;
        }

        .career-accent-divider {
          background: linear-gradient(90deg, var(--accent-red) 0%, var(--accent-red) 100%);
        }

        .perk-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
          background: white;
        }

        .perk-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(202, 45, 66, 0.12);
          border-color: var(--accent-red);
        }

        .testimonial-card {
          border-left: 3px solid var(--accent-red);
          transition: all 0.3s ease;
          background: white;
        }

        .testimonial-card:hover {
          box-shadow: 0 8px 24px rgba(202, 45, 66, 0.1);
          transform: translateY(-2px);
        }

        .skill-remote {
          background-color: #ecfdf5;
          color: #065f46;
          border: 1px solid #d1fae5;
        }

        .skill-onsite {
          background-color: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }

        .skill-default {
          background-color: #fef3c7;
          color: #92400e;
          border: 1px solid #fcd34d;
        }

        .job-card {
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          background: white;
        }

        .job-card:hover {
          box-shadow: 0 16px 32px rgba(202, 45, 66, 0.1);
          border-color: var(--accent-red);
        }

        .hiring-step-card {
          transition: all 0.3s ease;
          background: white;
          border: 1px solid var(--border-color);
        }

        .hiring-step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(202, 45, 66, 0.12);
          border-color: var(--accent-red);
        }

        .cta-button {
          background-color: var(--accent-red);
          color: white;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .cta-button:hover {
          background-color: #b1263c;
          box-shadow: 0 12px 24px rgba(202, 45, 66, 0.35);
          transform: translateY(-2px);
        }

        .badge-hiring {
          background-color: var(--accent-red);
          color: white;
          box-shadow: 0 4px 12px rgba(202, 45, 66, 0.2);
        }

        .divider-accent {
          background: linear-gradient(90deg, var(--accent-red) 0%, var(--accent-red) 100%);
        }
      `}</style>

      {/* Hero Section - Fit to Screen */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-20 text-center relative overflow-hidden" style={{
        background: '#06101e',
        minHeight: '100vh'
      }}>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(6,16,30,0.78)" }} />

        {/* Complex gradient layers */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(175deg, rgba(6,16,30,0.55) 0%, rgba(6,16,30,0.1) 40%, rgba(202,45,66,0.15) 70%, rgba(6,16,30,0.85) 100%)",
        }} />

        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-64" style={{
          background: "linear-gradient(to bottom, rgba(6,16,30,0.9) 0%, transparent 100%)",
        }} />

        {/* Red radial glow */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2" style={{
          background: "radial-gradient(ellipse 65% 50% at 52% 48%, rgba(202,45,66,0.2) 0%, rgba(202,45,66,0.05) 40%, transparent 70%)",
          width: '100%',
          height: '100%',
        }} />

        {/* Side fade */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(6,16,30,0.55) 0%, transparent 100%)",
        }} />

        {/* Subtle grain/noise layer */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "100% 3px",
        }} />

        {/* Content */}
        <div className="max-w-3xl mx-auto z-10 relative">
          {/* Badge with gradient */}
          <div className="inline-block mb-8 px-6 py-2.5 rounded-full text-sm font-semibold text-white" style={{
            background: `linear-gradient(135deg, #ca2d42 0%, #e94560 100%)`,
            boxShadow: '0 8px 25px rgba(202, 45, 66, 0.4)'
          }}>
            We&apos;re Hiring 🚀
          </div>

          {/* H1 - White text for dark background */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white" style={{ 
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Build the Future of Legal Access in India
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-200">
            At Lawizer, we&apos;re on a mission to make legal help simple, affordable, and accessible for every founder, family, and individual across India. Join us.
          </p>

          {/* CTA Button with premium gradient */}
          <a
            href="#open-roles"
            className="inline-block px-10 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, #ca2d42 0%, #e94560 100%)`,
              boxShadow: '0 12px 30px rgba(202, 45, 66, 0.45)'
            }}>
            <span className="relative z-10">
              View Open Roles
            </span>
          </a>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: 'var(--accent-red)' }}>
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-medium" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work at Lawizer */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Why Work at Lawizer?
            </h2>
            <div className="w-20 h-1 mb-8 divider-accent rounded-full" />
            <p className="text-lg max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              We&apos;re not just another legal-services startup. We&apos;re a team of builders, lawyers, and problem-solvers who believe that legal protection shouldn&apos;t be a privilege. Whether you&apos;re a fresher or a seasoned professional, Lawizer gives you the room to grow, lead, and make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="perk-card p-8 rounded-2xl">
                <div className="flex items-start gap-5">
                  <span className="text-6xl flex-shrink-0">{perk.emoji}</span>
                  <div className="text-left">
                    <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--text-dark)' }}>
                      {perk.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {perk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intern Testimonials */}
      <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
            Hear From Our Interns
          </h2>
          <div className="w-20 h-1 mb-8 divider-accent rounded-full" />
          <p className="text-lg mb-16 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Every year we bring on talented students from law schools and business programs. Here&apos;s what they say about working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="testimonial-card p-8 rounded-2xl">
                <q className="italic block mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </q>
                <div className="font-bold text-sm" style={{ color: 'var(--text-dark)' }}>
                  {testimonial.name}
                </div>
                <div className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                  {testimonial.role}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {testimonial.school} • {testimonial.batch}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 sm:py-28 px-4 bg-white" id="open-roles">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
            Open Roles
          </h2>
          <div className="w-20 h-1 mb-12 divider-accent rounded-full" />

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="job-card flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 p-8 rounded-2xl">
                {/* Left Content */}
                <div className="flex-1 min-w-0">
                  {/* Department Pill */}
                  <div
                    className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-5"
                    style={{ backgroundColor: '#e0d9ff', color: 'var(--text-dark)' }}>
                    {job.department}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                    {job.title}
                  </h3>

                  {/* Location & Type */}
                  <p className="text-sm mb-5 font-medium" style={{ color: 'var(--text-muted)' }}>
                    📍 {job.location}  •  {job.type}
                  </p>

                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {job.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full skill-${skill.tag}`}>
                        {skill.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Button */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a
                    href="mailto:careers@lawizer.com"
                    className="block text-center px-8 py-3 rounded-lg font-semibold cta-button whitespace-nowrap">
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
            Our Hiring Process
          </h2>
          <div className="w-20 h-1 mb-16 divider-accent rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {hiringSteps.map((step, idx) => (
              <div
                key={idx}
                className="hiring-step-card p-8 rounded-2xl">
                <div className="text-5xl mb-5">{step.emoji}</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-dark)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Open Application CTA */}
          <div className="text-center">
            <p className="mb-8 text-lg font-medium" style={{ color: 'var(--text-dark)' }}>
              Don&apos;t see a role that fits? We&apos;re always looking for talented people.
            </p>
            <a
              href="mailto:careers@lawizer.com"
              className="inline-block px-10 py-4 rounded-lg font-semibold cta-button text-lg">
              Send an Open Application
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
