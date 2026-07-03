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
 paragraphs?: string[]
 listItems?: ListItem[]
 closing?: string
}

// Table of Contents
const TOC_ITEMS: TOCItem[] = [
 { label: '1. Acceptance of Terms', id: 't1' },
 { label: '2. Definitions', id: 't2' },
 { label: '3. Services Offered', id: 't3' },
 { label: '4. User Obligations', id: 't4' },
 { label: '5. Fees & Payments', id: 't5' },
 { label: '6. Refund Policy', id: 't6' },
 { label: '7. Intellectual Property', id: 't7' },
 { label: '8. Disclaimer of Warranties', id: 't8' },
 { label: '9. Limitation of Liability', id: 't9' },
 { label: '10. Prohibited Conduct', id: 't10' },
 { label: '11. Termination', id: 't11' },
 { label: '12. Force Majeure', id: 't12' },
 { label: '13. Governing Law & Dispute Resolution', id: 't13' },
 { label: '14. Contact', id: 't14' },
]

// Sections content
const SECTIONS: Section[] = [
 {
 id: 't1',
 title: '1. Acceptance of Terms',
 paragraphs: [
 'By accessing or using the Lawizer platform at www.lawizer.com (the "Platform"), operated by Zeptus Pvt. Ltd., you ("User") agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and any additional terms applicable to specific services. If you do not agree to these Terms, you must discontinue use of the Platform immediately.',
 'These Terms constitute a legally binding agreement between you and Zeptus Pvt. Ltd. under the Information Technology Act, 2000, the Indian Contract Act, 1872, and other applicable laws of India.',
 ],
 },
 {
 id: 't2',
 title: '2. Definitions',
 listItems: [
 { bold: '"Platform"', text: ' means the website www.lawizer.com, its subdomains, mobile applications, and any digital interface operated by Lawizer.' },
 { bold: '"Services"', text: ' means all legal, compliance, documentation, ITR filing, and advisory services offered through the Platform.' },
 { bold: '"User"', text: ' means any individual, startup, SME, or entity accessing the Platform who is competent to enter into contracts under the Indian Contract Act, 1872.' },
 { bold: '"Attorney"', text: ' means an independent, verified legal professional listed on the Platform to provide legal consultation.' },
 { bold: '"Content"', text: ' means all text, guides, articles, videos, templates, and materials available on the Platform.' },
 ],
 },
 {
 id: 't3',
 title: '3. Services Offered',
 paragraphs: ['Lawizer provides the following categories of services through its Platform:'],
 listItems: [
 { text: 'Business registrations: Private Limited Company, OPC, LLP, Startup India, MSME/Udyam.' },
 { text: 'Tax services: ITR filing for individuals and entities, GST registration and return filing.' },
 { text: 'Intellectual Property: Trademark registration, copyright registration, trademark renewal and objection handling.' },
 { text: 'Legal documentation: Agreements, contracts, notices, and deed drafting.' },
 { text: 'Legal consultation: Online consultation with verified attorneys via video, audio, and chat.' },
 { text: 'Emergency Legal SOS: Immediate access to a legal professional in urgent situations.' },
 ],
 closing: 'Lawizer acts as a facilitator connecting users with qualified professionals. Lawizer itself does not provide legal advice unless explicitly stated. The Platform is not a law firm.',
 },
 {
 id: 't4',
 title: '4. User Obligations',
 paragraphs: ['By using the Platform, you agree to:'],
 listItems: [
 { text: 'Provide accurate, complete, and up-to-date information for all service requests.' },
 { text: 'Ensure that all documents submitted are authentic and legally obtained.' },
 { text: 'Not impersonate any person or entity or misrepresent your identity or affiliation.' },
 { text: 'Comply with all applicable laws, including those governing your business, tax, and intellectual property.' },
 { text: 'Not use the Platform for any unlawful, fraudulent, or harmful purpose.' },
 { text: 'Keep your account credentials confidential and notify us immediately of any unauthorised access.' },
 ],
 closing: 'You acknowledge that delays or errors arising from incorrect information provided by you will be your sole responsibility and Lawizer shall not be liable for any resultant penalties, rejections, or losses.',
 },
 {
 id: 't5',
 title: '5. Fees & Payments',
 paragraphs: [
 'Service fees are as displayed on the Platform at the time of order and are subject to change without prior notice. All fees are quoted in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. Payments are processed through Razorpay and PhonePe. Lawizer does not store your payment card details. Government fees (e.g., MCA filing fees, IP India fees, GST registration fees) are charged separately at actuals and are non-refundable once paid to the respective authorities.',
 ],
 },
 {
 id: 't6',
 title: '6. Refund Policy',
 paragraphs: ['Our refund policy is as follows:'],
 listItems: [
 { bold: 'Before Work Commences:', text: ' 100% refund of Lawizer\'s professional fees (excluding payment gateway charges), provided the request is made within 24 hours of payment.' },
 { bold: 'After Work Has Commenced:', text: ' A partial refund may be granted at Lawizer\'s discretion based on work completed. Government fees already paid are non-refundable.' },
 { bold: 'Consultation Fees:', text: ' Non-refundable once a consultation session has been initiated.' },
 { bold: 'Service Failures:', text: ' Where Lawizer is unable to deliver a service due to reasons within our control, a full refund will be issued within 7–10 working days.' },
 ],
 closing: 'Refund requests must be submitted to admin@lawizer.com with your order details. Approved refunds will be credited to your original payment method within 48–72 working hours of approval.',
 },
 {
 id: 't7',
 title: '7. Intellectual Property',
 paragraphs: [
 'All content on the Platform — including text, guides, logos, graphics, design, and software — is the exclusive property of Zeptus Pvt. Ltd. and is protected under Indian copyright and intellectual property laws. You may not copy, reproduce, republish, distribute, or create derivative works without our express written consent. You may use Platform content for personal, non-commercial reference only.',
 ],
 },
 {
 id: 't8',
 title: '8. Disclaimer of Warranties',
 paragraphs: [
 'The Platform and Services are provided on an "as-is" and "as-available" basis. Lawizer makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of the information on the Platform for any particular purpose. Information on the Platform does not constitute legal advice and should not be relied upon as such without professional consultation.',
 ],
 },
 {
 id: 't9',
 title: '9. Limitation of Liability',
 paragraphs: [
 'To the fullest extent permitted by applicable law, Lawizer\'s total liability for any claim arising out of or related to these Terms or Services shall not exceed the amount you paid to Lawizer for the specific service giving rise to the claim in the 3 months preceding the claim. Lawizer shall not be liable for any indirect, incidental, special, or consequential damages including loss of profits, revenue, data, or goodwill.',
 ],
 },
 {
 id: 't10',
 title: '10. Prohibited Conduct',
 paragraphs: ['You must not:'],
 listItems: [
 { text: 'Use the Platform to commit fraud or file false documents with government authorities.' },
 { text: 'Attempt to reverse-engineer, hack, or disrupt the Platform\'s infrastructure.' },
 { text: 'Use automated bots, scrapers, or crawlers to extract data without written permission.' },
 { text: 'Upload malicious code, viruses, or harmful content.' },
 { text: 'Harass, threaten, or abuse any attorney or Lawizer team member.' },
 ],
 },
 {
 id: 't11',
 title: '11. Termination',
 paragraphs: [
 'Lawizer reserves the right to suspend or terminate your access to the Platform, without notice, if you violate these Terms or engage in conduct that is harmful to other users, attorneys, or the Platform. Upon termination, your right to use the Platform ceases immediately, and any pending services may be discontinued subject to applicable refund provisions.',
 ],
 },
 {
 id: 't12',
 title: '12. Force Majeure',
 paragraphs: [
 'Lawizer shall not be liable for delays or failures in service delivery caused by circumstances beyond our reasonable control, including but not limited to government portal downtime (MCA, GSTN, IP India), bank holidays, natural disasters, power failures, internet outages, acts of war, pandemics, or regulatory changes.',
 ],
 },
 {
 id: 't13',
 title: '13. Governing Law & Dispute Resolution',
 paragraphs: [
 'These Terms are governed by the laws of the Republic of India. Any disputes arising out of or relating to these Terms or the use of the Platform shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator mutually appointed by both parties. The seat of arbitration shall be Kolkata, West Bengal. The language of arbitration shall be English.',
 'The Courts of Kolkata, West Bengal shall have exclusive jurisdiction for matters not subject to arbitration.',
 ],
 },
 {
 id: 't14',
 title: '14. Contact',
 listItems: [
 { bold: 'Email:', text: ' admin@lawizer.com' },
 { bold: 'Phone:', text: ' +91 90628 15535' },
 { bold: 'Address:', text: ' Zeptus Pvt. Ltd., Kolkata, West Bengal, India' },
 ],
 },
]

export default function TermsPage() {
 return (
 <div className="bg-white scroll-smooth">
 {/* Header */}
 <section className="px-5 pt-28 md:pt-32 pb-16 md:pb-20 border-b border-gray-200">
 <div className="max-w-3xl mx-auto">
 <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1F3C]">
 Terms of Service
 </h1>
 <p className="text-sm text-gray-500">
 Last updated: 1 May 2025 · Effective from: 1 May 2025 · Operated by Zeptus Pvt. Ltd. ("Lawizer")
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
 className="block text-sm text-brand-red no-underline hover:underline hover:font-medium transition text-brand-red">
 {item.label}
 </a>
 ))}
 </div>
 </div>

 {/* Sections */}
 {SECTIONS.map((section) => (
 <section key={section.id} id={section.id} className="mb-16 scroll-mt-28">
 <h2 className="border-l-4 border-brand-red text-[#1a1a2e] font-bold pl-3 mt-8 mb-3 text-2xl">{section.title}</h2>

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
 {item.bold && <span className="text-[#1a1a2e] font-semibold">{item.bold}</span>}
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
