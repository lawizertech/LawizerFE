"use client";
import Image from "next/image";

export function EmergencyButton() {
  return (
    <div
      onClick={() => {
        window.open("https://wa.me/9062815535", "_blank");
      }}
    >
      <Image
        src={"/emergency-call.png"}
        alt="emergency"
        width={48}
        height={48}
        className="fixed bottom-24 right-8 z-50 cursor-pointer"
      />
    </div>
  );
}
