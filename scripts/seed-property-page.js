const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const dropdownItems = [
  { label: "Property Paper Review", sectionId: "verify-consult" },
  { label: "Property Registration (Sale Deed)", sectionId: "registration-support" },
  { label: "Gift Deed Drafting & Registration", sectionId: "registration-support" },
  { label: "Rent Agreement", sectionId: "agreements-deeds" },
  { label: "Commercial Lease Agreement", sectionId: "agreements-deeds" },
  { label: "Joint Development Agreement (JDA)", sectionId: "agreements-deeds" },
  { label: "Property Report", sectionId: "verify-consult" },
  { label: "Agreement to Sale / Sale Agreement Review", sectionId: "verify-consult" },
];

const sections = [
  {
    id: "verify-consult",
    title: "Verification & Consultation",
    icon: "Home",
    basePath: "/property/verify/",
    description: "Ensure a safe investment and gain complete legal clarity before any property transaction. Know your property before you buy it.",
    services: [
      {
        name: "Property Report",
        slug: "property-report",
        price: "₹999",
        originalPrice: "₹2,999",
        description: "Detailed report verifying ownership, title clarity, encumbrances, government approvals, and pending disputes.",
      },
      {
        name: "Property Paper Review",
        slug: "property-paper-review",
        price: "₹999",
        originalPrice: "₹1,999",
        description: "Expert legal review of documents like title deeds and mutation papers, followed by an oral consultation on the property's legal status.",
      },
      {
        name: "Agreement to Sale / Sale Agreement Review",
        slug: "agreement-review",
        price: "₹999",
        originalPrice: "₹2,499",
        description: "Legal review of your Sale Agreement or Agreement to Sale to ensure it's legally sound, enforceable, and protects your interests.",
      },
    ],
  },
  {
    id: "agreements-deeds",
    title: "Agreements & Deeds Drafting",
    icon: "FileText",
    basePath: "/property/drafting/",
    description: "Drafting legally compliant and customized documents to secure your rights, responsibilities, and entire investment.",
    services: [
      {
        name: "Sale Deed Drafting",
        slug: "sale-deed",
        price: "₹999",
        originalPrice: "₹5,999",
        description: "Drafting the final legal document that officially transfers property ownership, defining rights, terms, and responsibilities.",
      },
      {
        name: "Agreement to Sale Drafting",
        slug: "agreement-to-sale",
        price: "₹999",
        originalPrice: "₹4,499",
        description: "Drafting the first legal step that defines mutual terms between buyer and seller, safeguarding both parties before the final sale.",
      },
      {
        name: "Rent Agreement",
        slug: "rent-agreement",
        price: "₹999",
        originalPrice: "₹1,499",
        description: "Professionally drafted and legally compliant agreement defining terms between landlord and tenant.",
      },
      {
        name: "Commercial Lease Agreement",
        slug: "commercial-lease",
        price: "₹999",
        originalPrice: "₹5,499",
        description: "Drafting a legal contract for commercial properties (offices, shops, warehouses), covering rent, duration, and specific business clauses.",
      },
      {
        name: "Joint Development Agreement (JDA)",
        slug: "joint-development-agreement",
        price: "₹999",
        originalPrice: "₹8,999",
        description: "A legal contract between a landowner and a developer, outlining terms for property development, profit-sharing, and timelines.",
      },
      {
        name: "Will Drafting & Registration",
        slug: "will-drafting",
        price: "₹999",
        originalPrice: "₹2,999",
        description: "Drafting a clear, legally valid Will to ensure your assets are distributed according to your wishes and prevent family disputes.",
      },
      {
        name: "Relinquishment Deed",
        slug: "relinquishment-deed",
        price: "₹999",
        originalPrice: "₹4,499",
        description: "Drafting a deed for a co-owner to voluntarily give up their share to another co-owner or family member.",
      },
    ],
  },
  {
    id: "registration-support",
    title: "Property Registration",
    icon: "Gavel",
    basePath: "/property/registration/",
    description: "Hassle-free legal support for the complex process of registering your property and legal documents with government authorities.",
    services: [
      {
        name: "Property Registration (Sale Deed)",
        slug: "property-registration",
        price: "₹999",
        originalPrice: "₹8,999",
        description: "Expert legal support to prepare and verify the Sale Deed and guide you through the entire registration process at the sub-registrar office.",
      },
      {
        name: "Gift Deed Drafting & Registration",
        slug: "gift-deed",
        price: "₹999",
        originalPrice: "₹6,499",
        description: "Transfer ownership of property voluntarily without consideration, ensuring the deed is legally valid and registered.",
      },
    ],
  },
];

async function seed() {
  const pageId = 'page_property';
  const themeData = {
    dropdownItems,
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
    else console.log('Successfully updated property page data!');
  } else {
    const { error: insertError } = await supabase
      .from('services')
      .insert({
        id: pageId,
        service_id: pageId,
        title: 'Property',
        theme: themeData,
        is_active: true
      });
    if (insertError) console.error('Error inserting:', insertError);
    else console.log('Successfully inserted property page data!');
  }
}

seed();
