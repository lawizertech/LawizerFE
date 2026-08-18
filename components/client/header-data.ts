export const services = [
  {
    title: "Property",
    tagline: "Property Disputes Keeping You Up at Night?",
    color: "from-blue-500/10 to-blue-500/30 text-blue-600",
    url: "/property",
    items: [
      // --- Verify/Review Routes ---
      { name: "Property Report", url: "/property/verify/property-report" },
      {
        name: "Property Paper Review",
        url: "/property/verify/property-paper-review",
      },
      { name: "Agreement Review", url: "/property/verify/agreement-review" },

      // --- Registration Routes ---
      {
        name: "Property Registration",
        url: "/property/registration/property-registration",
      },
      {
        name: "Gift Deed Registration",
        url: "/property/registration/gift-deed",
      },

      // --- Drafting Routes ---
      { name: "Sale Deed Drafting", url: "/property/drafting/sale-deed" },
      {
        name: "Agreement to Sale Drafting",
        url: "/property/drafting/agreement-to-sale",
      },
      { name: "Will Drafting", url: "/property/drafting/will-drafting" },
      {
        name: "Joint Development Agreement Drafting",
        url: "/property/drafting/joint-development-agreement",
      },
      {
        name: "Relinquishment Deed Drafting",
        url: "/property/drafting/relinquishment-deed",
      },
      {
        name: "Commercial Lease Agreement Drafting",
        url: "/property/drafting/commercial-lease",
      },
      {
        name: "Rent Agreement Drafting",
        url: "/property/drafting/rent-agreement",
      },
    ],
  },

  // {
  // title: "Civil & Criminal",
  // tagline: "Fighting for Your Rights, One Case at a Time",
  // color: "from-red-500/10 to-red-500/30 text-red-600",
  // url: "/civil-commercial",
  // items: [
  // {
  // name: "Family Law Matters (Divorce, Custody, Alimony)",
  // url: "/civil-commercial",
  // },
  // { name: "Property Disputes", url: "/civil-commercial" },
  // { name: "Contract Disputes", url: "/civil-commercial" },
  // { name: "Personal Injury Cases", url: "/civil-commercial" },
  // { name: "Employment Law Claims", url: "/civil-commercial" },
  // { name: "Violent Crimes Defense", url: "/civil-commercial" },
  // { name: "Property Crimes", url: "/civil-commercial" },
  // { name: "White-Collar Crimes", url: "/civil-commercial" },
  // { name: "Financial Frauds", url: "/civil-commercial" },
  // ],
  // },

  /*{
 title: "Family Matters",
 tagline: "Protecting Families, Preserving Relationships",
 color: "from-pink-500/10 to-pink-500/30 text-pink-600",
 url: "/family",
 items: [
 { name: "Divorce and Marriage Dissolution", url: "/family" },
 { name: "Maintenance and Alimony", url: "/family" },
 { name: "Child Custody and Guardianship", url: "/family" },
 { name: "Property and Inheritance Disputes", url: "/family" },
 { name: "Domestic Violence Protection", url: "/family" },
 ],
 },*/

  /*{
 title: "Banking Matters",
 tagline: "Your Financial Disputes, Our Expertise",
 color: "from-green-500/10 to-green-500/30 text-green-600",
 url: "/banking",
 items: [
 { name: "Loan Agreement", url: "/banking" },
 {
 name: "Loan and Debt Recovery Disputes",
 url: "/banking/loan-advance-disputes",
 },
 { name: "Cheque Dishonour Cases", url: "/banking/cheque-bounce-s138" },
 {
 name: "Financial Frauds and Cybercrimes",
 url: "/banking/digital-banking-fraud",
 },
 { name: "Customer Service Disputes", url: "/banking" },
 ],
 },*/

  {
    title: "ITR Filing",
    tagline: "Hassle-Free Filing and Maximum Tax Savings",
    color: "from-teal-500/10 to-teal-500/30 text-teal-600",
    url: "/itr",
    items: [
      // {
      //   section: "Individuals",
      //   items: [
      //     { name: "ITR-1 (Salaried up to ₹50L)", url: "/itr/itr-1" },
      //     { name: "ITR-2 (Capital Gains/Foreign Assets)", url: "/itr/itr-2" },
      //     { name: "ITR-3 (Business/Professional Income)", url: "/itr/itr-3" },
      //     { name: "ITR-4 (Presumptive Scheme)", url: "/itr/itr-4" },
      //   ],
      // },
      // {
      //   section: "Entities",
      //   items: [
      //     { name: "ITR-5 (LLP, Firms, AOPs)", url: "/itr/itr-5" },
      //     { name: "ITR-6 (Companies)", url: "/itr/itr-6" },
      //   ],
      // },
      {
        section: "ITR Plans",
        items: [
          { name: "Bronze Plan", url: "/itr/itr-plans/bronze" },
          { name: "Silver Plan", url: "/itr/itr-plans/silver" },
          { name: "Gold Plan", url: "/itr/itr-plans/gold" },
          { name: "Diamond Plan", url: "/itr/itr-plans/diamond" },
        ],
      },
      { name: "Tax Saving Consultations", url: "/itr" },
      { name: "Form 16/26AS Reconciliation", url: "/itr" },
    ],
  },

  {
    title: "Startup & Business Legal",
    tagline: "From Idea to Empire - Built on Solid Legal Ground",
    color: "from-blue-500/10 via-teal-500/10 to-emerald-500/10 text-blue-700",
    url: "/startup-businesslegal",
    items: [
      {
        section: "Start",
        items: [
          {
            name: "Private Limited Company Registration",
            url: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage",
          },
          {
            name: "One Person Company Registration",
            url: "/startup-businesslegal/startbusiness/OnePersonCompanyPage",
          },
          {
            name: "Limited Liability Partnership (LLP) Registration",
            url: "/startup-businesslegal/startbusiness/LLPPage",
          },
          {
            name: "Section 8 NGO Company Registration",
            url: "/startup-businesslegal/startbusiness/Section8NGOCompanyPage",
          },
          {
            name: "Public Limited Company Registration",
            url: "/startup-businesslegal/startbusiness/PublicLimitedCompanyPage",
          },
          {
            name: "Startup India Registration",
            url: "/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage",
          },
          {
            name: "GST Registration",
            url: "/startup-businesslegal/startbusiness/GSTRegistrationPage",
          },
        ],
      },

      {
        section: "Grow",
        items: [
          {
            name: "MSME Udyam Registration",
            url: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage",
          },
        ],
      },

      {
        section: "Protect",
        items: [
          {
            name: "Trademark Registration",
            url: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage",
          },
          {
            name: "Copyright Registration",
            url: "/startup-businesslegal/protectbusiness/CopyrightRegistrationPage",
          },
          {
            name: "Renew Trademark",
            url: "/startup-businesslegal/protectbusiness/RenewTrademarkPage",
          },
          {
            name: "Reply to Trademark Objection",
            url: "/startup-businesslegal/protectbusiness/ReplyToTrademarkObjectionPage",
          },
          {
            name: "Reply to Copyright Objection",
            url: "/startup-businesslegal/protectbusiness/ReplyToCopyrightObjectionPage",
          },
          {
            name: "Sell Your Trademark",
            url: "/startup-businesslegal/protectbusiness/SellYourTrademarkPage",
          },
        ],
      },

      {
        section: "Manage",
        items: [
          {
            name: "Appointment of Director",
            url: "/startup-businesslegal/managebusiness/AppointmentOfDirectorPage",
          },
          {
            name: "Resignation of Director",
            url: "/startup-businesslegal/managebusiness/ResignationOfDirectorPage",
          },
          {
            name: "Change in Office Address",
            url: "/startup-businesslegal/managebusiness/ChangeInOfficeAddressPage",
          },
          {
            name: "Increasing Capital of Company",
            url: "/startup-businesslegal/managebusiness/IncreasingCapitalOfCompanyPage",
          },
          {
            name: "Closure of Private Limited Company",
            url: "/startup-businesslegal/managebusiness/ClosureOfPvtLtdPage",
          },
          {
            name: "Closure of OPC",
            url: "/startup-businesslegal/managebusiness/ClosureOfOPCPage",
          },
          {
            name: "Closure of LLP",
            url: "/startup-businesslegal/managebusiness/ClosureOfLLPPage",
          },
          {
            name: "ROC Return Filing for Private Limited Company",
            url: "/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage",
          },
          {
            name: "ROC Return Filing for OPC",
            url: "/startup-businesslegal/managebusiness/ROCReturnFilingForOPCPage",
          },
          {
            name: "ROC Return Filing for LLP",
            url: "/startup-businesslegal/managebusiness/ROCReturnFilingForLLPPage",
          },
          {
            name: "Annual Compliance Calendar",
            url: "/compliance/annual",
          },
        ],
      },
    ],
  },

  {
    title: "Documentation",
    tagline: "Every Word Matters in Legal Documents",
    color: "from-amber-500/10 to-amber-500/30 text-amber-600",
    url: "/documentation",
    items: [
      {
        name: "Business Partnership Agreement",
        url: "/documentation/business-partnership-agreement",
      },
      {
        name: "Co-Founder Agreement",
        url: "/documentation/co-founder-agreement",
      },
      {
        name: "Consultancy Agreement",
        url: "/documentation/consultancy-agreement",
      },
      {
        name: "Employment Agreement",
        url: "/documentation/employment-agreement",
      },
      {
        name: "Franchise Agreement",
        url: "/documentation/franchise-agreement",
      },
      {
        name: "IP Assignment Agreement",
        url: "/documentation/ip-assignment-agreement",
      },
      {
        name: "Joint Venture Agreement",
        url: "/documentation/joint-venture-agreement",
      },
      { name: "Letter of Intent", url: "/documentation/letter-of-intent" },
      {
        name: "Licensing Agreement",
        url: "/documentation/licensing-agreement",
      },
      {
        name: "Non-Disclosure Agreement (NDA)",
        url: "/documentation/non-disclosure-agreement",
      },
      {
        name: "Power of Attorney Drafting",
        url: "/documentation/power-of-attorney-drafting",
      },
      {
        name: "Power of Attorney Registration",
        url: "/documentation/power-of-attorney-registration",
      },
      {
        name: "Privacy Policy / Terms of Use",
        url: "/documentation/privacy-terms-of-use",
      },
      { name: "SAAS Agreement", url: "/documentation/saas-agreement" },
      {
        name: "Service Agreement / Term Sheet",
        url: "/documentation/service-agreement-term-sheet",
      },
      {
        name: "Shareholder Subscription Agreement",
        url: "/documentation/shareholder-subscription-agreement",
      },
    ],
  },

  //{
  // title: "Pay Your Traffic Challan",
  // tagline:
  // "Lawizer: Skip the Court Hassle. Clear Your Traffic Fines Securely, Instantly, and Affordably.",
  // color: "from-yellow-500/10 to-red-500/30 text-red-600",
  // url: "/challan",
  // items: [
  // {
  // section: "Pay Your Challan",
  // items: [
  // { name: "Instant, Secure E-Challan Payment", url: "/challan" },
  // {
  // name: "Avoid Legal Escalation & License Suspension",
  // url: "/challan",
  // },
  // { name: "Maintain a Clean Driving Record", url: "/challan" },
  // {
  // name: "Get Digital Proof Immediately After Payment",
  // url: "/challan",
  // },
  // {
  // name: "24/7 Support & Verified Payment Channels",
  // url: "/challan",
  // },
  // ],
  // },
  // {
  // section: "View Your Challan",
  // items: [
  // {
  // name: "Check Challan Details Using Vehicle/Chassis Number",
  // url: "/challan",
  // },
  // {
  // name: "View Status, Fine Amount & Violation Info",
  // url: "/challan",
  // },
  // ],
  // },
  // {
  // section: "Dispute Your Challan",
  // items: [
  // { name: "Challenge Incorrect Challans Legally", url: "/challan" },
  // { name: "Expert Lawyer Review & Legal Drafting", url: "/challan" },
  // {
  // name: "End-to-End Case Assistance Till Resolution",
  // url: "/challan",
  // },
  // ],
  // },
  // {
  // section: "Consult an Expert",
  // items: [
  // {
  // name: "Free Consultation for Any Vehicle-Related Queries",
  // url: "/challan",
  // },
  // {
  // name: "Connect Instantly With Motor Vehicle Law Experts",
  // url: "/challan",
  // },
  // ],
  // },
  // ],
  //},
];
