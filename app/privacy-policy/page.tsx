'use client'

// Type definitions
interface TOCItem {
  label: string
  id: string
}

interface ListItem {
  text: string
  bold?: string
}

interface Section {
  id: string
  title: string
  content?: string
  subsections?: Array<{
    title: string
    paragraphs?: string[]
    listItems?: ListItem[]
    closing?: string
  }>
  paragraphs?: string[]
  listItems?: ListItem[]
  closing?: string
}

// Table of Contents
const TOC_ITEMS: TOCItem[] = [
  { label: '1. Introduction', id: 'pp1' },
  { label: '2. Definitions', id: 'pp2' },
  { label: '3. Information We Collect', id: 'pp3' },
  { label: '4. How We Use Your Information', id: 'pp4' },
  { label: '5. Sharing of Information', id: 'pp5' },
  { label: '6. Cookies & Tracking', id: 'pp6' },
  { label: '7. Data Retention', id: 'pp7' },
  { label: '8. Your Rights', id: 'pp8' },
  { label: '9. Security', id: 'pp9' },
  { label: '10. Third-Party Links', id: 'pp10' },
  { label: "11. Children's Privacy", id: 'pp11' },
  { label: '12. Changes to This Policy', id: 'pp12' },
  { label: '13. Contact Us', id: 'pp13' },
]

// Sections content
const SECTIONS: Section[] = [
  {
    id: 'pp1',
    title: '1. Introduction',
    paragraphs: [
      'Zeptus Pvt. Ltd., operating under the brand name Lawizer (hereinafter referred to as "Lawizer", "we", "us", or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose information about you when you use our website at www.lawizer.com, our mobile applications, and any associated services (collectively, the "Platform").',
      'By accessing or using the Platform, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of the Platform immediately.',
    ],
  },
  {
    id: 'pp2',
    title: '2. Definitions',
    paragraphs: ['For the purpose of this Privacy Policy:'],
    listItems: [
      { bold: '"User", "You", "Your"', text: ' refers to any individual or entity accessing or using the Platform who is competent to enter into binding contracts under the Indian Contract Act, 1872.' },
      { bold: '"Personal Data"', text: ' means any information that can identify you directly or indirectly, such as your name, email address, phone number, or government-issued identification numbers.' },
      { bold: '"Sensitive Personal Data (SPD)"', text: ' means information as defined under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, including passwords, financial information, health data, and biometric data.' },
      { bold: '"Services"', text: ' refers to all legal, compliance, documentation, and advisory services provided through the Platform.' },
    ],
  },
  {
    id: 'pp3',
    title: '3. Information We Collect',
    subsections: [
      {
        title: '3.1 Information You Provide',
        listItems: [
          { text: 'Name, email address, mobile number, and location when you register or contact us.' },
          { text: 'Business details such as company name, PAN, GSTIN, CIN, and Aadhaar (where required for service delivery).' },
          { text: 'Documents uploaded for legal services (identity proofs, incorporation documents, financial statements, etc.).' },
          { text: 'Payment information processed through secure third-party gateways (Razorpay / PhonePe). We do not store your card details.' },
          { text: 'Communication records including emails, chat transcripts, and call logs with our team or attorneys.' },
        ],
      },
      {
        title: '3.2 Information Collected Automatically',
        listItems: [
          { text: 'IP address, browser type, device type, operating system, and pages visited.' },
          { text: 'Usage data, session duration, and clickstream information via cookies and analytics tools.' },
          { text: 'Location data (city/region level) where permitted by your device settings.' },
        ],
      },
    ],
  },
  {
    id: 'pp4',
    title: '4. How We Use Your Information',
    paragraphs: ['We use your information to:'],
    listItems: [
      { text: 'Provide, operate, and improve our legal and compliance services.' },
      { text: 'Verify your identity and process KYC for government filings (e.g., DSC, DIN, GST registration).' },
      { text: 'Communicate service updates, case status notifications, and compliance reminders.' },
      { text: 'Send you relevant legal news, guides, and promotional content (you may opt out at any time).' },
      { text: 'Process payments and issue invoices.' },
      { text: 'Comply with applicable laws, regulations, and court orders.' },
      { text: 'Detect and prevent fraud, unauthorised access, and abuse of the Platform.' },
    ],
  },
  {
    id: 'pp5',
    title: '5. Sharing of Information',
    paragraphs: ['We do not sell your personal data. We may share your information with:'],
    listItems: [
      { bold: 'Verified Attorneys and CS/CA Professionals:', text: ' To provide services you have engaged us for, subject to professional confidentiality obligations.' },
      { bold: 'Government Authorities:', text: ' As required for filings with MCA, IP India, GSTN, Income Tax Department, and similar bodies.' },
      { bold: 'Payment Processors:', text: ' Razorpay and PhonePe, subject to their respective privacy policies.' },
      { bold: 'Technology Partners:', text: ' Cloud hosting providers, CRM systems, and communication tools, all bound by data processing agreements.' },
      { bold: 'Legal Obligations:', text: ' When disclosure is required by law, court order, or government authority.' },
    ],
  },
  {
    id: 'pp6',
    title: '6. Cookies & Tracking Technologies',
    paragraphs: ['We use cookies and similar technologies to enhance your experience. Types of cookies we use:'],
    listItems: [
      { bold: 'Essential Cookies:', text: ' Required for the Platform to function (login sessions, security tokens).' },
      { bold: 'Analytics Cookies:', text: ' Google Analytics and similar tools to understand usage patterns (anonymised).' },
      { bold: 'Marketing Cookies:', text: ' To serve relevant advertisements on third-party platforms, with your consent.' },
    ],
    closing: 'You can manage cookie preferences through your browser settings. Disabling certain cookies may limit Platform functionality.',
  },
  {
    id: 'pp7',
    title: '7. Data Retention',
    paragraphs: ['We retain your personal data for as long as necessary to provide Services and comply with legal obligations. Specifically:'],
    listItems: [
      { bold: 'Account and KYC data:', text: ' Retained for the duration of the engagement and up to 5 years post-termination, as required under Indian law.' },
      { bold: 'Financial records and invoices:', text: ' Retained for 8 years in compliance with the Income Tax Act, 1961 and GST laws.' },
      { bold: 'Communication records:', text: ' Retained for 3 years.' },
    ],
    closing: 'Upon your verified request for deletion, we will anonymise or delete data that we are not legally required to retain.',
  },
  {
    id: 'pp8',
    title: '8. Your Rights',
    paragraphs: ['Under applicable Indian data protection laws and the Digital Personal Data Protection Act, 2023 (DPDPA), you have the right to:'],
    listItems: [
      { bold: 'Access:', text: ' Request a copy of the personal data we hold about you.' },
      { bold: 'Correction:', text: ' Request correction of inaccurate or incomplete data.' },
      { bold: 'Erasure:', text: ' Request deletion of your data (subject to legal retention requirements).' },
      { bold: 'Grievance Redressal:', text: ' Raise a grievance with our Data Protection Officer.' },
      { bold: 'Withdraw Consent:', text: ' Withdraw marketing consent at any time by emailing admin@lawizer.com.' },
    ],
    closing: 'To exercise any of these rights, write to us at admin@lawizer.com with the subject line "Data Rights Request". We will respond within 30 days.',
  },
  {
    id: 'pp9',
    title: '9. Security',
    paragraphs: [
      'We implement industry-standard security measures including SSL/TLS encryption, access controls, and regular security audits to protect your data. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong password and keep your login credentials confidential.',
    ],
  },
  {
    id: 'pp10',
    title: '10. Third-Party Links',
    paragraphs: [
      'The Platform may contain links to third-party websites (e.g., MCA portal, GSTN, IP India). We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies before providing any personal data.',
    ],
  },
  {
    id: 'pp11',
    title: "11. Children's Privacy",
    paragraphs: [
      'Our Services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately and we will take steps to delete it.',
    ],
  },
  {
    id: 'pp12',
    title: '12. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in law or our practices. We will notify you of material changes by posting the updated policy on the Platform and, where appropriate, by email. Your continued use of the Platform after the effective date constitutes acceptance of the updated policy.',
    ],
  },
  {
    id: 'pp13',
    title: '13. Contact Us',
    paragraphs: ['For questions, complaints, or Data Rights Requests, contact our Data Protection Officer:'],
    listItems: [
      { bold: 'Email:', text: ' admin@lawizer.com' },
      { bold: 'Phone:', text: ' +91 90628 15535' },
      { bold: 'Address:', text: ' Zeptus Pvt. Ltd., Kolkata, West Bengal, India' },
    ],
    closing: 'This policy is governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts at Kolkata, West Bengal.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div style={{ scrollBehavior: 'smooth' }} className="bg-white">
      <style>{`
        :root {
          --navy-bg: #1a1a2e;
          --accent: #e94560;
          --gold: #f5a623;
          --light-bg: #f8f9ff;
          --text: #2d2d3a;
          --muted: #6b7280;
          --border: #e5e7eb;
        }

        .pp-h2 {
          border-left: 4px solid var(--accent);
          color: var(--navy-bg);
          font-weight: bold;
          padding-left: 12px;
          margin-top: 32px;
          margin-bottom: 12px;
        }

        .pp-h3 {
          color: var(--navy-bg);
          font-weight: 600;
          margin-top: 24px;
          margin-bottom: 8px;
        }

        .pp-link {
          color: var(--accent);
          text-decoration: none;
        }

        .pp-link:hover {
          text-decoration: underline;
        }

        .pp-strong {
          color: var(--navy-bg);
          font-weight: 600;
        }
      `}</style>

      {/* Header */}
      <section className="px-5 pt-28 md:pt-32 pb-16 md:pb-20 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--navy-bg)' }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Last updated: 1 May 2025 · Effective from: 1 May 2025 · Operated by Zeptus Pvt. Ltd. ("Lawizer")
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-5 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Table of Contents */}
          <div className="p-6 md:p-8 rounded-xl mb-16" style={{ backgroundColor: 'var(--light-bg)', border: `1px solid var(--border)` }}>
            <p className="text-xs font-bold uppercase mb-6" style={{ color: 'var(--muted)', letterSpacing: '0.05em' }}>
              Table of Contents
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6">
              {TOC_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm pp-link hover:font-medium transition"
                  style={{ color: 'var(--accent)' }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-28">
              <h2 className="pp-h2 text-2xl">{section.title}</h2>

              {/* Main paragraphs */}
              {section.paragraphs && section.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sm md:text-base mb-3" style={{ color: 'var(--text)' }}>
                  {para}
                </p>
              ))}

              {/* Subsections */}
              {section.subsections && section.subsections.map((subsection, idx) => (
                <div key={idx} className="mt-6">
                  <h3 className="pp-h3 text-lg">{subsection.title}</h3>
                  {subsection.paragraphs && subsection.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-sm md:text-base mb-3" style={{ color: 'var(--text)' }}>
                      {para}
                    </p>
                  ))}
                  {subsection.listItems && (
                    <ul className="pl-5 list-disc mb-4">
                      {subsection.listItems.map((item, lIdx) => (
                        <li key={lIdx} className="text-sm md:text-base mb-1.5" style={{ color: 'var(--text)' }}>
                          {item.bold && <span className="pp-strong">{item.bold}</span>}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {subsection.closing && (
                    <p className="text-sm md:text-base mt-3" style={{ color: 'var(--text)' }}>
                      {subsection.closing}
                    </p>
                  )}
                </div>
              ))}

              {/* List items */}
              {section.listItems && !section.subsections && (
                <ul className="pl-5 list-disc mb-4">
                  {section.listItems.map((item, idx) => (
                    <li key={idx} className="text-sm md:text-base mb-1.5" style={{ color: 'var(--text)' }}>
                      {item.bold && <span className="pp-strong">{item.bold}</span>}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {/* Closing paragraph */}
              {section.closing && (
                <p className="text-sm md:text-base mt-3" style={{ color: 'var(--text)' }}>
                  {section.closing}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
