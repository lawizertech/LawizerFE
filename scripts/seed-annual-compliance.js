const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase URL or Service Role Key in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const DATA = {
  pvt: {
    label: "Private Limited",
    shortLabel: "Pvt Ltd",
    h1: "Every Pvt Ltd filing, on one calendar.",
    sub: "A private limited company has the heaviest compliance load of the three structures — statutory audit from rupee one, four board meetings, an AGM, and two separate ROC returns. Here's the full year, priced.",
    stats: [
      { label: "Governed by",    value: "Companies Act, 2013"     },
      { label: "Annual ROC forms", value: "AOC-4, MGT-7A"           },
      { label: "Audit",          value: "Mandatory, any turnover" },
      { label: "Board meetings", value: "4 per year"              },
    ],
    rail: [
      { label: "ROC & MCA",    color: "roc", items: [{ form:"AOC-4",    month:6, dueDate:"30 Oct" },{ form:"MGT-7A", month:7, dueDate:"29 Nov" }] },
      { label: "Income tax",   color: "tax", items: [{ form:"ITR-6",    month:6, dueDate:"31 Oct" },{ form:"TDS Q1", month:3, dueDate:"31 Jul" },{ form:"TDS Q3", month:9, dueDate:"31 Jan" }] },
      { label: "GST",          color: "gst", items: [{ form:"GSTR-1/3B",month:0, dueDate:"", recurring:true },{ form:"GSTR-9",month:8, dueDate:"31 Dec" }] },
      { label: "Director KYC", color: "kyc", items: [{ form:"DIR-3 KYC",month:5, dueDate:"30 Sep" }] },
    ],
    penalty: {
      headline: "A late annual return is not a small fine.",
      body: "AOC-4 and MGT-7A each attract ₹100 per day with no upper ceiling, running until the day you file. Directors of a company that misses filings for two straight years are disqualified for five years and their DIN is deactivated.",
      figure: "₹100/day",
    },
    plans: [
      {
        name:"Essential", tagline:"Dormant or pre-revenue companies that only need ROC and MCA filings kept clean.",
        monthlyPrice:"₹749/mo", annualPrice:"₹8,999/yr", annualWas:"₹11,999",
        included:["AOC-4 + MGT-7A annual filing","ADT-1 auditor appointment","DIR-3 KYC for 2 directors","Board meeting minutes & statutory registers","Share certificate book (free)"],
        excluded:["Monthly bookkeeping","GST returns","Income tax return"],
        serviceID: "annual_compliance_pvt_essential",
      },
      {
        name:"Growth", tagline:"Operating companies with invoices, a bank account and a GST number to keep filed.",
        monthlyPrice:"₹1,499/mo", annualPrice:"₹17,999/yr", annualWas:"₹22,999",
        included:["Everything in Essential","Bookkeeping up to 150 txns/month","GSTR-1 and GSTR-3B, monthly","GSTR-9 annual return","ITR-6 corporate return","Dedicated CA on WhatsApp"],
        excluded:["TDS returns","Payroll & ESI/PF"],
        featured:true,
        serviceID: "annual_compliance_pvt_growth",
      },
      {
        name:"Complete", tagline:"Funded or scaling companies with payroll, TDS and investor reporting obligations.",
        monthlyPrice:"₹2,249/mo", annualPrice:"₹26,999/yr", annualWas:"₹33,999",
        included:["Everything in Growth","Quarterly TDS returns (24Q/26Q)","Payroll, PF and ESI filings","Unlimited transaction bookkeeping","MIS pack every quarter","Priority filing, same-day turnaround"],
        excluded:[],
        serviceID: "annual_compliance_pvt_complete",
      },
    ],
    filings: [
      { form:"INC-20A",     what:"Declaration that the company has commenced business. Blocks all activity until filed.", due:"180 days from incorporation",  tag:"inc", plan:"Essential" },
      { form:"AOC-4",       what:"Audited financial statements filed with the ROC.",                                     due:"30 days from AGM",              tag:"inc", plan:"Essential" },
      { form:"MGT-7A",      what:"Annual return for small companies and OPCs.",                                          due:"60 days from AGM",              tag:"inc", plan:"Essential" },
      { form:"DIR-3 KYC",   what:"Annual identity verification for every director holding a DIN.",                       due:"30 September",                  tag:"inc", plan:"Essential" },
      { form:"ITR-6",       what:"Corporate income tax return.",                                                         due:"31 October (audited)",          tag:"add", plan:"Growth"    },
      { form:"GSTR-1 / 3B", what:"Monthly outward supplies and summary return.",                                         due:"11th and 20th monthly",         tag:"add", plan:"Growth"    },
      { form:"GSTR-9",      what:"Annual GST reconciliation.",                                                           due:"31 December",                   tag:"add", plan:"Growth"    },
      { form:"24Q / 26Q",   what:"Quarterly TDS returns on salary and vendor payments.",                                 due:"31st of month after quarter",   tag:"add", plan:"Complete"  },
    ],
    compare: [
      { provider:"Lawizer — Growth",    scope:"ROC + bookkeeping + GST + ITR",              fee:"₹17,999/yr (₹1,499/mo)", bookkeeping:"yes",     gst:"yes",     dedicatedCA:"yes", isUs:true },
      { provider:"Startupwala AMC",     scope:"ROC compliance AMC",                         fee:"₹15,240/yr (₹1,270/mo)", bookkeeping:"no",      gst:"no",      dedicatedCA:"no"  },
      { provider:"Startupwala one-off", scope:"Annual ROC return only",                     fee:"₹3,999 one-time",        bookkeeping:"no",      gst:"no",      dedicatedCA:"no"  },
      { provider:"Vakilsearch",         scope:"Compliance + accounting + GST, entry rate",  fee:"from ₹3,499",            bookkeeping:"partial", gst:"partial", dedicatedCA:"no"  },
    ],
  },
  opc: {
    label: "One Person Company",
    shortLabel: "OPC",
    h1: "OPC compliance, without the Pvt Ltd overhead.",
    sub: "An OPC skips the AGM and, with a single director, skips board meetings too. The ROC filings and the statutory audit stay. Here's what actually applies to you — and what you shouldn't be paying for.",
    stats: [
      { label: "Governed by",    value: "Companies Act, 2013"   },
      { label: "Annual ROC forms", value: "AOC-4, MGT-7A"          },
      { label: "Audit",          value: "Mandatory, any turnover" },
      { label: "AGM",            value: "Not required"             },
    ],
    rail: [
      { label: "ROC & MCA",    color: "roc", items: [{ form:"AOC-4",    month:8, dueDate:"27 Dec" },{ form:"MGT-7A", month:7, dueDate:"28 Nov" }] },
      { label: "Income tax",   color: "tax", items: [{ form:"ITR-6",    month:6, dueDate:"31 Oct" },{ form:"TDS Q1", month:3, dueDate:"31 Jul" }] },
      { label: "GST",          color: "gst", items: [{ form:"GSTR-1/3B",month:0, dueDate:"", recurring:true },{ form:"GSTR-9",month:8, dueDate:"31 Dec" }] },
      { label: "Director KYC", color: "kyc", items: [{ form:"DIR-3 KYC",month:5, dueDate:"30 Sep" }] },
    ],
    penalty: {
      headline: "No AGM does not mean no deadline.",
      body: "An OPC files AOC-4 within 180 days of the financial year ending — 27 December, not 30 October. Miss it and the ₹100 per day additional fee runs uncapped, and the sole director's DIN is at risk after two consecutive defaults.",
      figure: "₹100/day",
    },
    plans: [
      {
        name:"Essential", tagline:"Solo founders with a registered OPC and little or no turnover yet.",
        monthlyPrice:"₹549/mo", annualPrice:"₹6,599/yr", annualWas:"₹8,999",
        included:["AOC-4 + MGT-7A annual filing","ADT-1 auditor appointment","DIR-3 KYC for 1 director","Statutory registers maintained","Share certificate book (free)"],
        excluded:["Monthly bookkeeping","GST returns","Income tax return"],
        serviceID: "annual_compliance_opc_essential",
      },
      {
        name:"Growth", tagline:"Consultants and single-owner businesses that are billing clients and filing GST.",
        monthlyPrice:"₹1,166/mo", annualPrice:"₹13,999/yr", annualWas:"₹17,999",
        included:["Everything in Essential","Bookkeeping up to 100 txns/month","GSTR-1 and GSTR-3B, monthly","GSTR-9 annual return","ITR-6 corporate return","Dedicated CA on WhatsApp"],
        excluded:["TDS returns","Payroll & ESI/PF"],
        featured:true,
        serviceID: "annual_compliance_opc_growth",
      },
      {
        name:"Complete", tagline:"OPCs approaching the ₹2 crore conversion threshold, with staff on the books.",
        monthlyPrice:"₹1,749/mo", annualPrice:"₹20,999/yr", annualWas:"₹26,999",
        included:["Everything in Growth","Quarterly TDS returns","Payroll, PF and ESI filings","Unlimited transaction bookkeeping","Pvt Ltd conversion advisory","Priority filing, same-day turnaround"],
        excluded:[],
        serviceID: "annual_compliance_opc_complete",
      },
    ],
    filings: [
      { form:"INC-20A",     what:"Declaration of commencement of business.",                                              due:"180 days from incorporation",          tag:"inc", plan:"Essential" },
      { form:"AOC-4",       what:"Financial statements. OPCs file within 180 days of FY end, not from an AGM.",           due:"27 December",                          tag:"inc", plan:"Essential" },
      { form:"MGT-7A",      what:"Abridged annual return for OPCs and small companies.",                                  due:"60 days from FY end deemed AGM",       tag:"inc", plan:"Essential" },
      { form:"DIR-3 KYC",   what:"Director identity verification.",                                                       due:"30 September",                         tag:"inc", plan:"Essential" },
      { form:"ITR-6",       what:"Corporate income tax return.",                                                          due:"31 October (audited)",                 tag:"add", plan:"Growth"    },
      { form:"GSTR-1 / 3B", what:"Monthly GST returns, if registered.",                                                  due:"11th and 20th monthly",                tag:"add", plan:"Growth"    },
      { form:"GSTR-9",      what:"Annual GST return.",                                                                    due:"31 December",                          tag:"add", plan:"Growth"    },
      { form:"24Q / 26Q",   what:"Quarterly TDS returns.",                                                                due:"31st of month after quarter",          tag:"add", plan:"Complete"  },
    ],
    compare: [
      { provider:"Lawizer — Growth",     scope:"ROC + bookkeeping + GST + ITR",  fee:"₹13,999/yr (₹1,166/mo)", bookkeeping:"yes", gst:"yes", dedicatedCA:"yes", isUs:true },
      { provider:"Startupwala OPC AMC",  scope:"OPC ROC compliance AMC",         fee:"₹11,976/yr (₹998/mo)",   bookkeeping:"no",  gst:"no",  dedicatedCA:"no"  },
      { provider:"Startupwala one-off",  scope:"OPC annual ROC return only",     fee:"₹3,999 one-time",         bookkeeping:"no",  gst:"no",  dedicatedCA:"no"  },
      { provider:"Vakilsearch",          scope:"Corporate compliance, entry rate",fee:"from ₹999",               bookkeeping:"no",  gst:"no",  dedicatedCA:"no"  },
    ],
  },
  llp: {
    label: "Limited Liability Partnership",
    shortLabel: "LLP",
    h1: "Two forms a year. Both of them uncapped if you're late.",
    sub: "An LLP is the lightest structure to run — no AGM, no board meetings, no audit until you cross ₹40 lakh turnover or ₹25 lakh contribution. But Form 11 and Form 8 carry penalties with no ceiling, so the dates matter more than the volume.",
    stats: [
      { label: "Governed by",    value: "LLP Act, 2008"            },
      { label: "Annual ROC forms", value: "Form 11, Form 8"        },
      { label: "Audit",          value: "Only above ₹40L turnover" },
      { label: "Board meetings", value: "Not required"             },
    ],
    rail: [
      { label: "ROC & MCA",   color: "roc", items: [{ form:"Form 11",    month:1, dueDate:"30 May" },{ form:"Form 8", month:6, dueDate:"30 Oct" }] },
      { label: "Income tax",  color: "tax", items: [{ form:"ITR-5",      month:3, dueDate:"31 Jul" },{ form:"ITR-5 audited", month:6, dueDate:"31 Oct" }] },
      { label: "GST",         color: "gst", items: [{ form:"GSTR-1/3B",  month:0, dueDate:"", recurring:true },{ form:"GSTR-9", month:8, dueDate:"31 Dec" }] },
      { label: "Partner KYC", color: "kyc", items: [{ form:"DIR-3 KYC",  month:5, dueDate:"30 Sep" }] },
    ],
    penalty: {
      headline: "The LLP penalty has no upper limit.",
      body: "Form 11 and Form 8 each carry ₹100 per day of delay with no cap — a return forgotten for a year costs ₹36,500 per form. A missed Form 11 can additionally attract a fine starting at ₹25,000 and running up to ₹5 lakh.",
      figure: "₹5 lakh",
    },
    plans: [
      {
        name:"Essential", tagline:"LLPs below the audit threshold that only need the two annual ROC forms filed.",
        monthlyPrice:"₹499/mo", annualPrice:"₹5,999/yr", annualWas:"₹7,999",
        included:["Form 11 annual return","Form 8 statement of account & solvency","DIR-3 KYC for 2 partners","LLP agreement kept on record","Filing reminders by SMS and email"],
        excluded:["Monthly bookkeeping","GST returns","Income tax return"],
        serviceID: "annual_compliance_llp_essential",
      },
      {
        name:"Growth", tagline:"Trading and services LLPs with regular invoices and a GST registration.",
        monthlyPrice:"₹1,082/mo", annualPrice:"₹12,999/yr", annualWas:"₹16,999",
        included:["Everything in Essential","Bookkeeping up to 150 txns/month","GSTR-1 and GSTR-3B, monthly","GSTR-9 annual return","ITR-5 income tax return","Dedicated CA on WhatsApp"],
        excluded:["Statutory audit","Payroll & TDS"],
        featured:true,
        serviceID: "annual_compliance_llp_growth",
      },
      {
        name:"Complete", tagline:"LLPs past ₹40 lakh turnover, where audit and TDS both kick in.",
        monthlyPrice:"₹1,583/mo", annualPrice:"₹18,999/yr", annualWas:"₹24,999",
        included:["Everything in Growth","Statutory audit coordination","Quarterly TDS returns","Payroll, PF and ESI filings","Partner capital account reconciliation","Priority filing, same-day turnaround"],
        excluded:[],
        serviceID: "annual_compliance_llp_complete",
      },
    ],
    filings: [
      { form:"LLP Agreement", what:"Executed agreement filed after incorporation. ₹100/day penalty if late.",           due:"30 days from incorporation",          tag:"inc", plan:"Essential" },
      { form:"Form 11",       what:"Annual return covering partners and contribution.",                                  due:"30 May",                              tag:"inc", plan:"Essential" },
      { form:"Form 8",        what:"Statement of account and solvency.",                                                 due:"30 October",                          tag:"inc", plan:"Essential" },
      { form:"DIR-3 KYC",     what:"KYC for every designated partner holding a DIN.",                                   due:"30 September",                        tag:"inc", plan:"Essential" },
      { form:"ITR-5",         what:"LLP income tax return.",                                                             due:"31 July, or 31 October if audited",   tag:"add", plan:"Growth"    },
      { form:"GSTR-1 / 3B",   what:"Monthly GST returns, if registered.",                                               due:"11th and 20th monthly",               tag:"add", plan:"Growth"    },
      { form:"GSTR-9",        what:"Annual GST return.",                                                                 due:"31 December",                         tag:"add", plan:"Growth"    },
      { form:"Tax audit",     what:"Applies above ₹40 lakh turnover or ₹25 lakh contribution.",                        due:"30 September",                        tag:"add", plan:"Complete"  },
    ],
    compare: [
      { provider:"Lawizer — Growth",    scope:"ROC + bookkeeping + GST + ITR",     fee:"₹12,999/yr (₹1,082/mo)", bookkeeping:"yes",     gst:"yes", dedicatedCA:"yes", isUs:true },
      { provider:"Startupwala LLP AMC", scope:"LLP ROC compliance AMC",            fee:"₹10,884/yr (₹907/mo)",   bookkeeping:"no",      gst:"no",  dedicatedCA:"no"  },
      { provider:"Vakilsearch",         scope:"LLP annual filing, Form 11 + Form 8",fee:"quote on call",          bookkeeping:"no",      gst:"no",  dedicatedCA:"no"  },
      { provider:"Typical CA firm",     scope:"LLP annual compliance",             fee:"₹10,000–20,000/yr",       bookkeeping:"varies",  gst:"no",  dedicatedCA:"yes" },
    ],
  },
};

async function seed() {
  console.log("Upserting annual compliance data...");
  const { data, error } = await supabase.from('services').upsert({
    id: 'annual_compliance',
    service_id: 'annual_compliance',
    title: 'Annual Compliance',
    category: 'compliance',
    is_active: true,
    theme: DATA
  }, { onConflict: 'service_id' });

  if (error) {
    console.error("Error upserting data:", error);
    process.exit(1);
  }
  console.log("Successfully seeded annual compliance metadata into 'theme' JSON column!");
}

seed();
