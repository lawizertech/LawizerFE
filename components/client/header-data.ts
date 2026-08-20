export interface HeaderSubItem {
  name: string;
  url: string;
}

export interface HeaderSectionGroup {
  section: string;
  items: HeaderSubItem[];
}

export interface HeaderService {
  title: string;
  tagline: string;
  color: string;
  url: string;
  items: (HeaderSubItem | HeaderSectionGroup)[];
}

export const services: HeaderService[] = [
  {
    title: "Property",
    tagline: "Property Disputes Keeping You Up at Night?",
    color: "from-blue-500/10 to-blue-500/30 text-blue-600",
    url: "/property",
    items: [
      // --- Verify/Review Routes ---
      { name: "Property Report", url: "/property/verify/property-report" },
      { name: "Property Paper Review", url: "/property/verify/property-paper-review" },
      { name: "Agreement Review", url: "/property/verify/agreement-review" },

      // --- Registration Routes ---
      { name: "Property Registration", url: "/property/registration/property-registration" },
      { name: "Gift Deed Registration", url: "/property/registration/gift-deed" },

      // --- Drafting Routes ---
      { name: "Sale Deed Drafting", url: "/property/drafting/sale-deed" },
      { name: "Agreement to Sale Drafting", url: "/property/drafting/agreement-to-sale" },
      { name: "Will Drafting", url: "/property/drafting/will-drafting" },
      { name: "Joint Development Agreement Drafting", url: "/property/drafting/joint-development-agreement" },
      { name: "Relinquishment Deed Drafting", url: "/property/drafting/relinquishment-deed" },
      { name: "Commercial Lease Agreement Drafting", url: "/property/drafting/commercial-lease" },
      { name: "Rent Agreement Drafting", url: "/property/drafting/rent-agreement" },
    ],
  },

  {
    title: "ITR Filing",
    tagline: "Hassle-Free Filing and Maximum Tax Savings",
    color: "from-teal-500/10 to-teal-500/30 text-teal-600",
    url: "/itr",
    items: [
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
            name: "Annual Compliance - LLP Complete",
            url: "/startup-businesslegal/managebusiness/annual-compliance-llp-complete",
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
      { name: "Business Partnership Agreement", url: "/documentation/business-partnership-agreement" },
      { name: "Co-Founder Agreement", url: "/documentation/co-founder-agreement" },
      { name: "Consultancy Agreement", url: "/documentation/consultancy-agreement" },
      { name: "Employment Agreement", url: "/documentation/employment-agreement" },
      { name: "Franchise Agreement", url: "/documentation/franchise-agreement" },
      { name: "IP Assignment Agreement", url: "/documentation/ip-assignment-agreement" },
      { name: "Joint Venture Agreement", url: "/documentation/joint-venture-agreement" },
      { name: "Letter of Intent", url: "/documentation/letter-of-intent" },
      { name: "Licensing Agreement", url: "/documentation/licensing-agreement" },
      { name: "Non-Disclosure Agreement (NDA)", url: "/documentation/non-disclosure-agreement" },
      { name: "Power of Attorney Drafting", url: "/documentation/power-of-attorney-drafting" },
      { name: "Power of Attorney Registration", url: "/documentation/power-of-attorney-registration" },
      { name: "Privacy Policy / Terms of Use", url: "/documentation/privacy-terms-of-use" },
      { name: "SAAS Agreement", url: "/documentation/saas-agreement" },
      { name: "Service Agreement / Term Sheet", url: "/documentation/service-agreement-term-sheet" },
      { name: "Shareholder Subscription Agreement", url: "/documentation/shareholder-subscription-agreement" },
    ],
  },
];
