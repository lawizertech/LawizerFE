const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const sections = [
  {
    id: "agreements-drafting",
    title: "Essential Startup & Business Agreements",
    icon: "FileText",
    description: "Draft legally sound contracts, policies, and agreements (NDAs, Employment, Partnership, SaaS) to secure your operations, team, and intellectual property.",
    services: [
      {
        name: "Co-founder Agreement",
        slug: "co-founder-agreement",
        price: "₹999",
        originalPrice: "₹3,999",
        description: "Defines roles, equity, responsibilities, decision-making, and exit mechanisms among founders, preventing conflicts.",
      },
      {
        name: "Business Partnership Agreement",
        slug: "business-partnership-agreement",
        price: "₹999",
        originalPrice: "₹4,499",
        description: "Legal contract defining investment, profit-sharing, responsibilities, and exit mechanisms among partners.",
      },
      {
        name: "Employment Agreement",
        slug: "employment-agreement",
        price: "₹999",
        originalPrice: "₹3,499",
        description: "Outlines terms, salary, benefits, and termination policies, ensuring compliance with labor laws.",
      },
      {
        name: "Consultancy Agreement",
        slug: "consultancy-agreement",
        price: "₹999",
        originalPrice: "₹3,199",
        description: "Defines the scope, deliverables, fees, and confidentiality between a consultant and company.",
      },
      {
        name: "Non-Disclosure Agreement (NDA)",
        slug: "non-disclosure-agreement",
        price: "₹999",
        originalPrice: "₹1,999",
        description: "Protects sensitive business information and trade secrets, allowing safe collaboration or funding discussions.",
      },
      {
        name: "Privacy Policy & Terms of Use",
        slug: "privacy-terms-of-use",
        price: "₹999",
        originalPrice: "₹2,999",
        description: "Defines user data handling and website/app rules, ensuring compliance under IT Act and GDPR.",
      },
      {
        name: "Software as a Service (SaaS) Agreement",
        slug: "saas-agreement",
        price: "₹999",
        originalPrice: "₹5,999",
        description: "Governs subscription, licensing, support, and intellectual property rights for software services.",
      },
      {
        name: "Franchise Agreement",
        slug: "franchise-agreement",
        price: "₹999",
        originalPrice: "₹6,999",
        description: "Outlines rights, obligations, royalties, and operational standards between a franchisor and franchisee.",
      },
      {
        name: "Joint Venture Agreement",
        slug: "joint-venture-agreement",
        price: "₹999",
        originalPrice: "₹7,999",
        description: "Defines partnership, investment, profit-sharing, and management of a Joint Venture.",
      },
      {
        name: "Shareholder Subscription Agreement",
        slug: "shareholder-subscription-agreement",
        price: "₹999",
        originalPrice: "₹8,999",
        description: "Governs the issuance of shares to investors and defines their rights and obligations in the company.",
      },
      {
        name: "Service Agreement & Term Sheet",
        slug: "service-agreement-term-sheet",
        price: "₹999",
        originalPrice: "₹4,499",
        description: "Defines scope, fees, deliverables, and timelines for a business service, ensuring legal enforceability.",
      },
      {
        name: "Licensing Agreement",
        slug: "licensing-agreement",
        price: "₹999",
        originalPrice: "₹5,499",
        description: "Governs licensing of intellectual property, technology, or products, protecting IP rights and revenue.",
      },
      {
        name: "IP Assignment Agreement",
        slug: "ip-assignment-agreement",
        price: "₹999",
        originalPrice: "₹4,999",
        description: "Transfers Intellectual Property (IP) ownership from one party to another, ensuring legal transfer of rights.",
      },
      {
        name: "Letter of Intent (LOI)",
        slug: "letter-of-intent",
        price: "₹999",
        originalPrice: "₹2,999",
        description: "Declares preliminary intention to enter a business transaction or agreement, establishing mutual understanding.",
      },
    ],
  },
  {
    id: "power-of-attorney",
    title: "Power of Attorney Services",
    icon: "ScrollText",
    description: "Legally authorise a trusted person to act on your behalf in financial, property, or legal matters — drafted and registered with full compliance.",
    services: [
      {
        name: "Power of Attorney (POA) Drafting",
        slug: "power-of-attorney-drafting",
        price: "₹999",
        originalPrice: "₹2,499",
        description: "Drafting a legal document to authorize a trusted person to act on your behalf in financial, property, or legal matters.",
      },
      {
        name: "Registration of Power of Attorney",
        slug: "power-of-attorney-registration",
        price: "₹999",
        originalPrice: "₹4,999",
        description: "Guidance and support to register your Power of Attorney to make it legally enforceable and accepted by government and financial institutions.",
      },
    ],
  },
];

async function seed() {
  const pageId = 'page_documentation';
  const themeData = {
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
    else console.log('Successfully updated documentation page data!');
  } else {
    const { error: insertError } = await supabase
      .from('services')
      .insert({
        id: pageId,
        service_id: pageId,
        title: 'Documentation',
        theme: themeData,
        is_active: true
      });
    if (insertError) console.error('Error inserting:', insertError);
    else console.log('Successfully inserted documentation page data!');
  }
}

seed();
