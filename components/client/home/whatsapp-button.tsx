'use client';
import Image from "next/image";

export function WhatsAppButton() {
  return (
    <div
      onClick={() => window.open("https://wa.me/9062815535", "_blank")}
      className="fixed bottom-4 right-4 z-50 cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_6px_rgba(37,211,102,0.5)]">
        <Image src="/whatsapp.png" alt="whatsapp" width={48} height={48} className="rounded-full" />
      </div>
    </div>
  );
}