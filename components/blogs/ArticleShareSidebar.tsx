"use client";

import { useState } from "react";
import { Mail, Link2, Check } from "lucide-react";

interface ArticleShareSidebarProps {
  readingTime: number;
  title: string;
}

export default function ArticleShareSidebar({ readingTime, title }: ArticleShareSidebarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getShareUrl = (platform: "facebook" | "twitter" | "whatsapp" | "email") => {
    if (typeof window === "undefined") return "";
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);

    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${text}%20${url}`;
      case "email":
        return `mailto:?subject=${text}&body=${url}`;
    }
  };

  const shareButtons = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      onClick: () => window.open(getShareUrl("facebook"), "_blank", "width=600,height=400"),
    },
    {
      name: "X",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      onClick: () => window.open(getShareUrl("twitter"), "_blank", "width=600,height=400"),
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.589 0 10.137-4.502 10.14-10.034.002-2.68-1.038-5.198-2.932-7.098-1.895-1.9-4.417-2.945-7.097-2.946-5.592 0-10.14 4.503-10.143 10.038-.002 1.957.513 3.869 1.492 5.568l-.974 3.56 3.65-.958zm10.982-7.518c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      ),
      onClick: () => window.open(getShareUrl("whatsapp"), "_blank", "width=600,height=400"),
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      onClick: () => {
        window.location.href = getShareUrl("email");
      },
    },
  ];

  return (
    <div className="flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-4 lg:gap-6 w-full py-4 lg:py-6">
      {/* Reading Time - Hidden on mobile share row */}
      <div className="hidden lg:flex flex-col items-center text-center select-none">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-400 mb-1"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest leading-none">
          {readingTime} Min
        </span>
        <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">Read</span>
      </div>

      <div className="hidden lg:block w-8 h-px bg-slate-200" />

      {/* Share Buttons */}
      <div className="flex flex-row lg:flex-col gap-3">
        {shareButtons.map((btn) => (
          <button
            key={btn.name}
            onClick={btn.onClick}
            title={`Share on ${btn.name}`}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-brand hover:border-brand hover:bg-brand-light/30 flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            {btn.icon}
          </button>
        ))}

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          title="Copy Link"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 shadow-sm ${
            copied
              ? "bg-brand/10 border-brand text-brand"
              : "bg-white border-slate-200 text-slate-600 hover:text-brand hover:border-brand hover:bg-brand-light/30"
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
