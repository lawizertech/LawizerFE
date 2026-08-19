const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const complianceBundles = [
  {
    id: "opc-bundle",
    name: "OPC Bundle",
    tagline: "Incorporation + Annual Compliance",
    price: "₹999",
    originalPrice: "₹19,999",
    discount: "50% OFF",
    popular: false,
    includes: ["Incorporation", "Annual Compliance", "ROC Filing"],
  },
  {
    id: "llp-bundle",
    name: "LLP Bundle",
    tagline: "Incorporation + Annual Compliance",
    price: "₹999",
    originalPrice: "₹24,999",
    discount: "48% OFF",
    popular: true,
    includes: ["Incorporation", "Annual Compliance", "ROC Filing"],
  },
  {
    id: "pvt-ltd-bundle",
    name: "Pvt Ltd Bundle",
    tagline: "Incorporation + Annual Compliance",
    price: "₹999",
    originalPrice: "₹29,999",
    discount: "50% OFF",
    popular: false,
    includes: ["Incorporation", "Annual Compliance", "ROC Filing"],
  },
];

const sections = [
  {
    id: "start",
    title: "Start Your Business",
    icon: "Rocket",
    basePath: "/startup-businesslegal/startbusiness/",
    description: "Launch your venture with the right legal structure and registrations. Build a strong foundation for long-term success.",
    services: [
      {
        name: "Private Limited Company",
        slug: "PrivateLimitedCompanyPage",
        price: "₹999",
        originalPrice: "₹4,999",
        discount: "70% OFF",
        description: "Ideal for startups planning to scale and raise investment. Offers limited liability and investor credibility.",
      },
      {
        name: "One Person Company (OPC)",
        slug: "OnePersonCompanyPage",
        price: "₹999",
        originalPrice: "₹2,999",
        discount: "67% OFF",
        description: "Perfect for solo founders who want corporate structure benefits with simplified compliance.",
      },
      {
        name: "Limited Liability Partnership (LLP)",
        slug: "LLPPage",
        price: "₹999",
        originalPrice: "₹3,999",
        discount: "Save ₹2,500",
        description: "Blend of partnership flexibility and limited liability protection. Suited for multi-partner businesses.",
      },
      {
        name: "Startup India Registration (DPIIT Recognition)",
        slug: "StartupIndiaRegistrationPage",
        price: "₹999",
        originalPrice: "₹2,499",
        discount: "60% OFF",
        description: "Government recognition offering tax benefits, funding access, and compliance support for innovative startups.",
      },
      {
        name: "GST Registration",
        slug: "GSTRegistrationPage",
        price: "₹999",
        originalPrice: "₹1,999",
        discount: "50% OFF",
        description: "Mandatory for businesses exceeding turnover thresholds. Enables tax compliance and seamless trade.",
      },
      {
        name: "Public Limited Company (PLC)",
        slug: "PublicLimitedCompanyPage",
        price: "₹999",
        originalPrice: "₹39,999 – ₹59,999",
        discount: null,
        description: "For large-scale enterprises looking to raise capital from the public and expand operations.",
      },
      {
        name: "Section 8 Company (NGO)",
        slug: "Section8NGOCompanyPage",
        price: "₹999",
        originalPrice: "₹17,999 – ₹24,999",
        discount: null,
        description: "Non-profit structure for charitable or social initiatives. Eligible for tax exemptions and grants.",
      },
    ],
  },
  {
    id: "protect",
    title: "Protect Your Business",
    icon: "Shield",
    basePath: "/startup-businesslegal/protectbusiness/",
    description: "Safeguard your intellectual property and legal rights. Protect your brand, creations, and business identity.",
    services: [
      {
        name: "Trademark Registration",
        slug: "TrademarkRegistrationPage",
        price: "₹999",
        originalPrice: "₹3,499",
        discount: "Save ₹2,300",
        description: "Secure your brand name, logo, and identity with nationwide legal protection.",
      },
      {
        name: "Reply to Trademark Objection",
        slug: "ReplyToTrademarkObjectionPage",
        price: "₹999",
        originalPrice: "₹5,999 – ₹8,999",
        discount: null,
        description: "Respond professionally to trademark office objections and ensure smooth registration.",
      },
      {
        name: "Renew Your Trademark",
        slug: "RenewTrademarkPage",
        price: "₹999",
        originalPrice: "₹2,499",
        discount: "60% OFF",
        description: "Extend protection of your registered trademark and prevent cancellation due to expiry.",
      },
      {
        name: "Sell Your Trademark",
        slug: "SellYourTrademarkPage",
        price: "₹999",
        originalPrice: "₹2,499",
        discount: "60% OFF",
        description: "Legally transfer ownership of your registered trademark with a structured sale agreement.",
      },
      {
        name: "Copyright Registration",
        slug: "CopyrightRegistrationPage",
        price: "₹999",
        originalPrice: "₹3,999",
        discount: "63% OFF",
        description: "Protect original creative works such as software, music, or written content.",
      },
      {
        name: "Reply to Copyright Objection",
        slug: "ReplyToCopyrightObjectionPage",
        price: "₹999",
        originalPrice: "₹2,499",
        discount: "60% OFF",
        description: "Respond to copyright office objections effectively to secure your IP rights.",
      },
    ],
  },
  {
    id: "grow",
    title: "Grow Your Business",
    icon: "TrendingUp",
    basePath: "/startup-businesslegal/growbusiness/",
    description: "Enhance your business credibility and access new opportunities with essential certifications.",
    services: [
      {
        name: "MSME / Udyam Registration",
        slug: "MSMEUdhyamRegistrationPage",
        price: "₹999",
        originalPrice: "₹2,999",
        discount: "50% OFF",
        description: "Get government recognition as an MSME and unlock financial incentives and subsidies.",
      },
    ],
  },
  {
    id: "manage",
    title: "Manage Your Business",
    icon: "Settings",
    basePath: "/compliance/",
    description: "Stay compliant year-round. Annual filings, ROC returns, and director KYC — handled by a qualified CA so you never miss a deadline.",
    services: [
      {
        name: "Annual Compliance Calendar",
        slug: "annual",
        price: "₹999",
        originalPrice: "₹7,999/yr",
        discount: "Save up to 25%",
        description: "Full-year filing calendar for Pvt Ltd, OPC and LLP. Pricing plans from Essential to Complete — choose what fits your stage.",
      },
      {
        name: "ROC Return Filing — Pvt Ltd",
        slug: "annual",
        price: "₹999",
        originalPrice: "₹4,999",
        discount: "80% OFF",
        description: "AOC-4 and MGT-7A filed on time. Includes auditor appointment (ADT-1) and director KYC.",
      },
      {
        name: "ROC Return Filing — OPC",
        slug: "annual",
        price: "₹999",
        originalPrice: "₹3,999",
        discount: "75% OFF",
        description: "OPC-specific filing timeline with the 27 December deadline for AOC-4 built in.",
      },
      {
        name: "ROC Return Filing — LLP",
        slug: "annual",
        price: "₹999",
        originalPrice: "₹3,499",
        discount: "71% OFF",
        description: "Form 11 and Form 8 filed before the uncapped penalty clock starts ticking.",
      },
    ],
  },
];

async function seed() {
  const pageId = 'page_startup_businesslegal';
  const themeData = {
    complianceBundles,
    sections
  };

  const { data, error } = await supabase
    .from('services')
    .select('id')
    .eq('service_id', pageId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching:', error);
    return;
  }

  if (data) {
    const { error: updateError } = await supabase
      .from('services')
      .update({ theme: themeData, is_active: true })
      .eq('service_id', pageId);
    if (updateError) console.error('Error updating:', updateError);
    else console.log('Successfully updated startup business legal page data!');
  } else {
    const { error: insertError } = await supabase
      .from('services')
      .insert({
        id: pageId,
        service_id: pageId,
        title: 'Startup & Business Legal',
        theme: themeData,
        is_active: true
      });
    if (insertError) console.error('Error inserting:', insertError);
    else console.log('Successfully inserted startup business legal page data!');
  }
}

seed();
