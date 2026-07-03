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
 paragraphs?: string[]
 listItems?: ListItem[]
 closing?: string
}

// Table of Contents
const TOC_ITEMS: TOCItem[] = [
 { label: '1. Introduction', id: 'a1' },
 { label: '2. Eligibility & Verification', id: 'a2' },
 { label: '3. Platform Role & Relationship', id: 'a3' },
 { label: '4. Attorney Obligations', id: 'a4' },
 { label: '5. Prohibited Conduct', id: 'a5' },
 { label: '6. Fees & Revenue Sharing', id: 'a6' },
 { label: '7. Confidentiality', id: 'a7' },
 { label: '8. Intellectual Property', id: 'a8' },
 { label: '9. Ratings & Reviews', id: 'a9' },
 { label: '10. Insurance & Liability', id: 'a10' },
 { label: '11. Suspension & Removal', id: 'a11' },
 { label: '12. Governing Law', id: 'a12' },
 { label: '13. Contact', id: 'a13' },
]

// Sections content
const SECTIONS: Section[] = [
 {
 id: 'a1',
 title: '1. Introduction',
 paragraphs: [
 'These Attorney Terms and Conditions ("Attorney Terms") govern the relationship between Zeptus Pvt. Ltd. (operating as Lawizer) and legal professionals, including Advocates, Company Secretaries, and Chartered Accountants ("Attorney", "Professional", "You") who register on the Lawizer Platform to offer services to clients.',
 'By completing registration on the Platform, you agree to be bound by these Attorney Terms in addition to Lawizer\'s general Terms of Service and Privacy Policy.',
 ],
 },
 {
 id: 'a2',
 title: '2. Eligibility & Verification',
 paragraphs: ['To be listed on the Lawizer Platform, you must:'],
 listItems: [
 { text: 'Hold a valid Bar Council Enrolment Certificate (for Advocates) or a Certificate of Practice from ICSI (for CS) or ICAI (for CA).' },
 { text: 'Be in good standing with your respective regulatory body with no active disbarment, suspension, or disciplinary proceedings.' },
 { text: 'Provide a valid PAN, Aadhaar, and proof of professional qualification for KYC verification.' },
 { text: 'Maintain a valid digital presence (email and phone number) for client communication.' },
 ],
 closing: 'Lawizer reserves the right to conduct periodic re-verification and may suspend your profile pending re-verification.',
 },
 {
 id: 'a3',
 title: '3. Platform Role & Relationship',
 paragraphs: [
 'Lawizer operates as a technology platform and facilitator. The relationship between Lawizer and the Attorney is that of an independent contractor — not employer-employee, partnership, or joint venture. You are solely responsible for the quality, accuracy, and legality of advice and services you provide to clients. Lawizer does not supervise, direct, or control your professional judgement.',
 'All attorney-client relationships are formed directly between you and the client. Lawizer is not a party to such relationships.',
 ],
 },
 {
 id: 'a4',
 title: '4. Attorney Obligations',
 paragraphs: ['As a listed professional on Lawizer, you agree to:'],
 listItems: [
 { text: 'Respond to client consultation requests within the timeframes specified in your profile (default: 4 hours for scheduled consultations).' },
 { text: 'Maintain the highest standards of professional conduct as required by your regulatory body (Bar Council of India, ICSI, ICAI).' },
 { text: 'Provide accurate, honest, and up-to-date legal or compliance advice within your area of expertise.' },
 { text: 'Clearly disclose any conflict of interest before accepting a client matter.' },
 { text: 'Complete any service milestone agreed with the client within the committed timeline. Notify Lawizer and the client promptly if delays are expected.' },
 { text: 'Maintain client confidentiality at all times, including after the engagement has concluded.' },
 { text: 'Not solicit clients off-platform or direct them to bypass Lawizer\'s payment systems.' },
 ],
 },
 {
 id: 'a5',
 title: '5. Prohibited Conduct',
 paragraphs: ['You must not:'],
 listItems: [
 { text: 'Provide advice outside your area of expertise or professional qualifications without clearly disclosing this to the client.' },
 { text: 'Accept matters that present a conflict of interest without full disclosure and informed client consent.' },
 { text: 'Make false representations about your qualifications, experience, or track record.' },
 { text: 'Misuse client documents, personal data, or confidential business information for any purpose other than delivering the engaged service.' },
 { text: 'Engage in fee-splitting arrangements with third parties not disclosed to Lawizer.' },
 { text: 'Encourage clients to engage you directly outside the Platform during an active engagement.' },
 ],
 },
 {
 id: 'a6',
 title: '6. Fees & Revenue Sharing',
 paragraphs: [
 'Service fees for each engagement category are mutually agreed between Lawizer and the Attorney prior to listing. Lawizer charges a platform facilitation fee (percentage to be specified in your individual onboarding agreement) on each completed engagement. Payments are disbursed to your registered bank account within 5–7 working days of the client marking the service complete or Lawizer confirming delivery. Lawizer reserves the right to withhold payment pending resolution of a client dispute.',
 ],
 },
 {
 id: 'a7',
 title: '7. Confidentiality',
 paragraphs: [
 'You agree to maintain strict confidentiality of all client information accessed through the Platform, consistent with your professional obligations under the Advocates Act, 1961 and applicable professional codes. This obligation survives the termination of your engagement with Lawizer indefinitely. You may not use any client information for any purpose other than delivering the service for which it was provided.',
 ],
 },
 {
 id: 'a8',
 title: '8. Intellectual Property',
 paragraphs: [
 'Document templates, process guides, and materials created by you exclusively for Lawizer remain the intellectual property of Lawizer unless otherwise agreed in writing. Client-specific work product belongs to the client. Your general professional knowledge and pre-existing materials remain your property.',
 ],
 },
 {
 id: 'a9',
 title: '9. Ratings & Reviews',
 paragraphs: [
 'Clients may rate and review your services on the Platform. Lawizer publishes these ratings to help users make informed decisions. You must not solicit fake reviews, offer incentives for positive reviews, or intimidate clients to remove or modify reviews. Lawizer reserves the right to remove reviews that violate its content policies.',
 ],
 },
 {
 id: 'a10',
 title: '10. Insurance & Liability',
 paragraphs: [
 'Lawizer strongly recommends that all listed attorneys maintain professional indemnity insurance appropriate for their practice. Lawizer is not liable for any professional negligence, errors, or omissions in services provided by listed attorneys. Claims for professional negligence must be directed to the Attorney concerned.',
 ],
 },
 {
 id: 'a11',
 title: '11. Suspension & Removal',
 paragraphs: ['Lawizer may suspend or permanently remove your profile from the Platform, with or without prior notice, in cases of:'],
 listItems: [
 { text: 'Breach of these Attorney Terms or Lawizer\'s general Terms of Service.' },
 { text: 'Suspension or disbarment by your regulatory body.' },
 { text: 'Sustained pattern of poor client ratings or unresolved complaints.' },
 { text: 'Fraudulent, unethical, or illegal conduct.' },
 ],
 closing: 'Upon removal, you will complete all pending engagements or agree to a client-approved handover.',
 },
 {
 id: 'a12',
 title: '12. Governing Law',
 paragraphs: [
 'These Attorney Terms are governed by the laws of India. Any disputes between you and Lawizer shall be resolved by binding arbitration in Kolkata, West Bengal, in accordance with the Arbitration and Conciliation Act, 1996.',
 ],
 },
 {
 id: 'a13',
 title: '13. Contact',
 paragraphs: ['For queries regarding onboarding, payments, or these terms:'],
 listItems: [
 { bold: 'Email:', text: ' admin@lawizer.com' },
 { bold: 'Phone:', text: ' +91 90628 15535' },
 ],
 },
]

export default function AttorneyTermsPage() {
 return (
 <div className="bg-white scroll-smooth">
 {/* Header */}
 <section className="px-5 pt-28 md:pt-32 pb-16 md:pb-20 border-b border-gray-200">
 <div className="max-w-3xl mx-auto">
 <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1F3C]">
 Attorney Terms & Conditions
 </h1>
 <p className="text-sm text-gray-500">
 Last updated: 1 May 2025 · Applicable to all legal professionals onboarded on the Lawizer Platform
 </p>
 </div>
 </section>

 {/* Main Content */}
 <div className="px-5 py-8 md:py-12">
 <div className="max-w-3xl mx-auto">
 {/* Table of Contents */}
 <div className="p-6 md:p-8 rounded-xl mb-16 bg-gray-50 border border-gray-200">
 <p className="text-xs font-bold uppercase mb-6 text-gray-500 tracking-wider">
 Table of Contents
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6">
 {TOC_ITEMS.map((item) => (
 <a
 key={item.id}
 href={`#${item.id}`}
 className="block text-sm at-link hover:font-medium transition text-brand-red">
 {item.label}
 </a>
 ))}
 </div>
 </div>

 {/* Sections */}
 {SECTIONS.map((section) => (
 <section key={section.id} id={section.id} className="mb-16 scroll-mt-28">
 <h2 className="at-h2 text-2xl">{section.title}</h2>

 {/* Paragraphs */}
 {section.paragraphs && section.paragraphs.map((para, idx) => (
 <p key={idx} className="text-sm md:text-base mb-3 text-gray-700">
 {para}
 </p>
 ))}

 {/* List items */}
 {section.listItems && (
 <ul className="pl-5 list-disc mb-4">
 {section.listItems.map((item, idx) => (
 <li key={idx} className="text-sm md:text-base mb-1.5 text-gray-700">
 {item.bold && <span className="at-strong">{item.bold}</span>}
 {item.text}
 </li>
 ))}
 </ul>
 )}

 {/* Closing paragraph */}
 {section.closing && (
 <p className="text-sm md:text-base mt-3 text-gray-700">
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
