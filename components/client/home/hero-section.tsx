"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const services = [
    { href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage", icon: "🏢", title: "Private Limited Company" },
    { href: "/startup-businesslegal/startbusiness/LLPRegistrationPage", icon: "📝", title: "LLP Registration" },
    { href: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage", icon: "🛡️", title: "Trademark Registration" },
    { href: "/itr", icon: "🧾", title: "ITR Filing" },
    { href: "/startup-businesslegal/startbusiness/GSTRegistrationPage", icon: "📋", title: "GST Registration" },
    { href: "/digital-signature", icon: "✒️", title: "Digital Signature (DSC)" },
    { href: "/current-account", icon: "🏦", title: "Current Account Opening" },
    { href: "/compliance/annual", icon: "📑", title: "Annual Compliance" },
  ];

  return (
    <div className="hero-wrap bg-gray-50/30" id="home">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 gap-8 lg:gap-12 lg:items-center pt-8 pb-10">
        
        {/* ── LEFT: Hero Copy (~40%) ── */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="w-max bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold mb-6">
            Most Trusted in India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.15] mb-8">
            <span className="text-brand-red">India's Most Trusted</span><br/>
            All-in-One Platform for<br/>
            Registration of Business,<br/>
            Business Compliance, ITR
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-8">
             <a href="tel:+919062815535" className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               Call Us
             </a>
             <motion.a
               href="https://wa.me/919062815535"
               target="_blank"
               rel="noopener noreferrer"
               className="border-2 border-green-500 text-green-600 px-8 py-[10px] rounded-lg font-semibold flex items-center gap-2 hover:bg-green-50 transition bg-white"
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                 <path d="M12.017 2.003C6.484 2.003 2 6.487 2 12.02c0 1.897.522 3.68 1.428 5.203L2.05 22l4.906-1.35a9.958 9.958 0 0 0 5.061 1.373c5.533 0 10.017-4.484 10.017-10.017 0-2.675-1.041-5.19-2.933-7.081A9.968 9.968 0 0 0 12.017 2.003zm0 18.033a8.005 8.005 0 0 1-4.079-1.117l-.293-.174-3.011.828.803-2.936-.19-.303a7.99 7.99 0 0 1-1.245-4.316c0-4.418 3.596-8.014 8.017-8.014 2.14 0 4.152.834 5.665 2.349a7.958 7.958 0 0 1 2.35 5.667c0 4.418-3.598 8.014-8.017 8.014z" />
               </svg>
               WhatsApp Us
             </motion.a>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-sm text-gray-500 font-medium">
             <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
             </svg>
             <span className="text-base md:text-lg font-bold text-gray-900 ml-1">4.7</span>
             <div className="flex text-yellow-400 text-sm md:text-base tracking-widest">★★★★★</div>
             <span>(2,543 Reviews)</span>
          </div>
        </div>

        {/* ── RIGHT: Services Grid (~55%) ── */}
        <div className="hidden lg:block w-full lg:w-[55%] pl-4">
          <div className="grid grid-cols-4 gap-4">
            {services.map(s => (
               <Link key={s.href} href={s.href} className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-red-200 hover:shadow-[0_8px_20px_rgba(201,44,65,0.1)] transition-all duration-300 p-5 flex flex-col items-center justify-center text-center relative h-36 group">
                 <span className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                 <span className="text-[12px] font-bold text-gray-800 leading-[1.2]">{s.title}</span>
                 <span className="absolute bottom-3 right-3 text-brand-red font-bold text-lg leading-none opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
               </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FULL-WIDTH TRUST PILLARS ── */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 pb-4">
        <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 md:divide-x divide-gray-100">
           {/* Item 1 */}
           <div className="flex items-center gap-4 px-6 flex-1 justify-center md:justify-start w-full">
             <span className="text-3xl text-brand-red flex-shrink-0">🎧</span>
             <div>
               <h4 className="font-bold text-gray-900 text-[14px]">24/7 Support Service</h4>
               <p className="text-gray-500 text-[11px] mt-0.5 font-medium">We are always here to help you</p>
             </div>
           </div>
           {/* Item 2 */}
           <div className="flex items-center gap-4 px-6 flex-1 justify-center md:justify-start w-full">
             <span className="text-3xl text-brand-red flex-shrink-0">🔒</span>
             <div>
               <h4 className="font-bold text-gray-900 text-[14px]">Secure & Trustable Platform</h4>
               <p className="text-gray-500 text-[11px] mt-0.5 font-medium">Your data and privacy are protected</p>
             </div>
           </div>
           {/* Item 3 */}
           <div className="flex items-center gap-4 px-6 flex-1 justify-center md:justify-start w-full">
             <span className="text-3xl text-brand-red flex-shrink-0">🚀</span>
             <div>
               <h4 className="font-bold text-gray-900 text-[14px]">Fast Delivery (7 days)</h4>
               <p className="text-gray-500 text-[11px] mt-0.5 font-medium">Quick & reliable service guaranteed</p>
             </div>
           </div>
        </div>
      </div>

      {/* ── Mobile-only: horizontal swipeable service chips ── */}
      <div className="lg:hidden overflow-hidden w-full max-w-full pb-6">
        <motion.div 
          className="flex gap-[10px] w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-[10px]">
              {services.map(s => (
                <Link key={s.href} href={s.href} className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col items-center justify-center text-center min-w-[120px] w-[120px] h-[100px] gap-2">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-[11px] font-bold text-gray-800 leading-tight">{s.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}