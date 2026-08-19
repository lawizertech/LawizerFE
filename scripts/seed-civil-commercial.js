const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const civilContent = {
  heading: "Civil & Commercial Litigation",
  introduction: "Civil litigation involves legal disagreements between two or more parties seeking compensation or remedy, without criminal accusations. Commercial litigation involves business entities and follows similar procedures. Disputes include breach of contract, real estate, and antitrust cases.",
  services: "Our litigation team is experienced in the CPC and foreign regulations. We handle drafting, filing, court appearances, injunctions, and appeals. Our expertise covers property, employment, and personal injury cases, ensuring practical and efficient dispute resolution before all Judicial & Quasi-Judicial Bodies.",
  query: "civil_commercial",
};

const criminalContent = {
  heading: "Criminal Law & Defense",
  introduction: "Criminal litigation involves a criminal trial with a prosecutor (representing the state) and a defense attorney. It is governed by the IPC, CrPC, and Indian Evidence Act, covering cases like murder, theft, assault, and financial crimes, alongside specialized acts like POCSO and POSH.",
  services: "We provide thorough defense strategies, effective representation at arraignments and hearings, and expert negotiation for pleas and settlements. Our lawyers are skilled in obtaining bail and anticipatory bail. We also specialize in cybercrime cases under the Information Technology Act 2000, offering nuanced legal defense.",
  query: "criminal",
};

async function seed() {
  const pageId = 'page_civil_commercial';
  const themeData = {
    civilContent,
    criminalContent
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
    else console.log('Successfully updated civil-commercial page data!');
  } else {
    const { error: insertError } = await supabase
      .from('services')
      .insert({
        id: pageId,
        service_id: pageId,
        title: 'Civil & Commercial Law',
        theme: themeData,
        is_active: true
      });
    if (insertError) console.error('Error inserting:', insertError);
    else console.log('Successfully inserted civil-commercial page data!');
  }
}

seed();
