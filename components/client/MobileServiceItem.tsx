import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function MobileServiceItem({ service, onClose }: { service: any; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-3">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between text-left py-3"
        aria-expanded={open}
      >
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{service.title}</span>
          {service.tagline && <span className="text-sm text-gray-500">{service.tagline}</span>}
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pl-3 pr-2 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {service.items?.map((item: any, idx: number) => {
                if ("section" in item) {
                  return (
                    <div key={idx} className="mb-3 mt-2">
                      <p className="text-sm font-semibold text-gray-600 mb-2">{item.section}</p>
                      <div className="flex flex-col gap-2 pl-2">
                        {item.items?.map((it: any, iIdx: number) => (
                          <Link key={iIdx} href={it.url} onClick={onClose} className="text-base text-gray-700">
                            {it.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link key={idx} href={item.url} onClick={onClose} className="text-base text-gray-700 py-1">
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
