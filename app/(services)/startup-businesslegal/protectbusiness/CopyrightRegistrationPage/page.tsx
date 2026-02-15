"use client";

import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ================================
   BENEFITS
================================ */

const benefits = [
  {
    icon: "fileText",
    text: "Official record of authorship and ownership",
  },
  {
    icon: "shield",
    text: "Provides legal evidence in infringement disputes",
  },
  {
    icon: "trendingUp",
    text: "Easier to license, sell, or transfer rights",
  },
  {
    icon: "shield",
    text: "Prevents others from copying or distributing your work without permission",
  },
  {
    icon: "building2",
    text: "Enhances commercial value of creative work",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Complete copyright application form (Form XIV)",
  "Copies of the work to be registered (2 copies for unpublished, 3 for published works)",
  "Full details of applicant (name, address, nationality, contact)",
  "Author’s details (if different from applicant)",
  "Proof of identity and address (PAN/Aadhaar/Passport/Voter ID)",
  "Statement of applicant’s interest (owner/author/assignee/publisher)",
  "Power of Attorney, if applying through agent/advocate",
  "Title, category, language, and publication details of the work",
  "Statutory fee payment (online/DD/IPO)",
];

const deliverables = [
  "Copyright Registration Certificate",
  "Diary Number for application tracking",
];

const sections = [
  {
    title: "Prerequisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You'll Receive",
    icon: "building2",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "Is registration mandatory for copyright protection?",
    a: "No, copyright protection exists automatically upon creation. However, registration is highly recommended as it provides legal evidence in infringement disputes.",
  },
  {
    q: "What works can be registered?",
    a: "The Copyright Act covers literary, musical, dramatic, and artistic works, cinematograph films, sound recordings, and computer software (including source code).",
  },
  {
    q: "How long does it take?",
    a: "The legal waiting period is 30 days for any objections. If there are no objections, the process generally takes between 2 to 9 months for final registration.",
  },
  {
    q: "Who can apply?",
    a: "The author, the owner of the copyright (if different from the author), or any other person interested in the copyright (such as a publisher or assignee) can apply.",
  },
] satisfies FAQItem[];

/* ================================
   PAGE
================================ */

export default function CopyrightRegistrationPage() {
  return (
    <ServicePageLayout
      title="Copyright Registration"
      subtitle="Legally establish ownership of your original creative works and gain enforceable proof against infringement."
      badgeText="Copyright Act • IP Protection • Legal Proof"
      icon="copyright"

      serviceID="COPYRIGHT_REGISTRATION"
      contentTitle="Overview"
      contentDescription="Copyright registration is the process of legally establishing the ownership of original creative works such as literary content, art, music, films, software, and more. While copyright exists automatically upon creation, registration provides official proof and makes enforcement easier in case of infringement. The process is done before the Copyright Office, and a certificate is issued upon approval."
      section1Title="Key Benefits"
      benefits={benefits}
      sections={sections}
      faqs={faqs}
      theme={{
        orb1: "bg-[#c92c41]/20",
        orb2: "bg-[#4c3df7]/20",
        iconBg: "from-[#c92c41] to-[#e99b2b]",
        badgeText: "text-orange-300",
      }}
      primaryColor="text-[#c92c41]"
      primaryBg="bg-gradient-to-r from-[#c92c41] to-[#e99b2b]"
      primaryHoverBg="bg-gradient-to-r from-[#b12438] to-[#d8891f]"
    />
  );
}
