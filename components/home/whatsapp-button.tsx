'use client';
import Image from "next/image";

export function WhatsAppButton() {
  return (
    <div onClick={() => {
      window.open("https://wa.me/9062815535", "_blank");
    }}>
      <Image
        src={"/whatsapp.png"}
        alt="whatsapp"
        width={48}
        height={48}
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
      />
    </div>
  );
}
