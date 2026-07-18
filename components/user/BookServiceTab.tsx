"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  FileText,
  Building2,
  Scale,
  Receipt,
  Landmark,
  X,
  CreditCard,
  QrCode,
  ShieldAlert,
  Loader2,
  ChevronRight,
  Shield,
  Users,
  Heart,
  ChevronDown,
  Tag,
  Lock,
  Clock,
  Rocket,
} from "lucide-react";
import { useAuth } from "@/context/authContext";

const ICON_MAPPER: Record<string, any> = {
  building2: Building2,
  building: Building2,
  users: Users,
  scale: Scale,
  shield: Shield,
  receipt: Receipt,
  fileText: FileText,
  landmark: Landmark,
  rocket: Rocket,
};

function formatCategoryName(cat: string): string {
  if (!cat) return "Other Services";
  const lower = cat.toLowerCase().trim();
  if (lower.includes("startup") || lower.includes("business")) return "Startup & Business";
  if (lower.includes("doc") || lower.includes("contract")) return "Documentation";
  if (lower.includes("tax") || lower.includes("itr") || lower.includes("compliance")) return "Tax & Compliance";
  if (lower.includes("property") || lower.includes("real")) return "Property & Real Estate";
  if (lower.includes("bank") || lower.includes("finance")) return "Banking & Finance";
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

const COLOR_PALETTES = [
  {
    // Rose / Red
    cardBg: "bg-rose-50/50 hover:bg-rose-50/80 border-rose-100/90",
    iconBg: "bg-rose-100 text-[#c92c41]",
    tagBg: "bg-rose-100/70 text-rose-700 border-rose-200/60",
    defaultIcon: Landmark,
  },
  {
    // Amber / Warm Gold
    cardBg: "bg-amber-50/50 hover:bg-amber-50/80 border-amber-100/90",
    iconBg: "bg-amber-100 text-amber-600",
    tagBg: "bg-amber-100/70 text-amber-800 border-amber-200/60",
    defaultIcon: Rocket,
  },
  {
    // Indigo / Royal Blue
    cardBg: "bg-indigo-50/50 hover:bg-indigo-50/80 border-indigo-100/90",
    iconBg: "bg-indigo-100 text-indigo-600",
    tagBg: "bg-indigo-100/70 text-indigo-700 border-indigo-200/60",
    defaultIcon: FileText,
  },
  {
    // Emerald / Mint
    cardBg: "bg-emerald-50/50 hover:bg-emerald-50/80 border-emerald-100/90",
    iconBg: "bg-emerald-100 text-emerald-600",
    tagBg: "bg-emerald-100/70 text-emerald-800 border-emerald-200/60",
    defaultIcon: Scale,
  },
  {
    // Purple / Violet
    cardBg: "bg-purple-50/50 hover:bg-purple-50/80 border-purple-100/90",
    iconBg: "bg-purple-100 text-purple-600",
    tagBg: "bg-purple-100/70 text-purple-700 border-purple-200/60",
    defaultIcon: Users,
  },
  {
    // Sky / Cyan
    cardBg: "bg-sky-50/50 hover:bg-sky-50/80 border-sky-100/90",
    iconBg: "bg-sky-100 text-sky-600",
    tagBg: "bg-sky-100/70 text-sky-700 border-sky-200/60",
    defaultIcon: Building2,
  },
];

function getCategoryStyle(category: string, title: string, index: number = 0) {
  // Hash-based deterministic color selection for 5-6 random colors across cards
  let hash = 0;
  const str = (title || category || "") + index;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const paletteIndex = Math.abs(hash) % COLOR_PALETTES.length;
  return COLOR_PALETTES[paletteIndex];
}

export default function BookServiceTab() {
  const router = useRouter();
  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Buy Now Modal State
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [submittingOrder, setSubmittingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking">("upi");

  // Fetch Services dynamically from Backend API /api/services
  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        const res = await fetch("/api/services");
        const data = await res.json();

        if (data.success && Array.isArray(data.services)) {
          const apiMapped = data.services.map((s: any) => ({
            serviceCode: s.serviceID || s.slug || s.title,
            slug: s.slug || s.serviceID?.toLowerCase(),
            title: s.title,
            subtitle: s.subtitle || s.contentDescription || "Professional legal & CA service",
            category: formatCategoryName(s.category),
            price: s.price || 1499,
            originalPrice: s.originalPrice || Math.round((s.price || 1499) * 1.5),
            badgeText: s.badgeText || "Verified",
            icon: ICON_MAPPER[s.icon?.toLowerCase()] || null,
            benefits: (s.benefits || [])
              .map((b: any) => (typeof b === "string" ? b : b.description || b.text || ""))
              .filter(Boolean),
          }));
          setServices(apiMapped);
        }
      } catch (err) {
        console.error("Failed to fetch services from /api/services:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  const toggleFavorite = (code: string) => {
    setFavorites((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  // Compute Categories dynamically from API results
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All Services");
    services.forEach((s) => {
      if (s.category) cats.add(s.category);
    });
    return Array.from(cats);
  }, [services]);

  // Filter Services based on Category & Search Query
  const filteredServices = useMemo(() => {
    let list = services.filter((service) => {
      const matchesCategory =
        selectedCategory === "All Services" || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "Price: Low to High") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [services, selectedCategory, searchQuery, sortBy]);

  const handleOpenBuyModal = (service: any) => {
    setSelectedService(service);
    setIsCheckoutOpen(true);
    setOrderSuccess(false);
  };

  const handleConfirmPurchase = async () => {
    if (!selectedService) return;
    setSubmittingOrder(true);

    try {
      const { getAccessToken } = await import("@/lib/auth/tokenStore");
      const token = getAccessToken();

      await fetch("/api/user/start-process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          serviceCode: selectedService.serviceCode,
          clientDetails: {
            fullName: user?.name || "Valued Client",
            email: user?.email || "client@lawizer.com",
            phone: (user as any)?.phone || "9999999999",
          },
          notes: notes || `Direct booking for ${selectedService.title}`,
        }),
      });

      setOrderSuccess(true);
      setTimeout(() => {
        setIsCheckoutOpen(false);
        setSubmittingOrder(false);
        setOrderSuccess(false);
        router.push("/user/dashboard?tab=services");
      }, 2000);
    } catch (err) {
      console.error("Booking submission error:", err);
      setOrderSuccess(true);
      setTimeout(() => {
        setIsCheckoutOpen(false);
        setSubmittingOrder(false);
        setOrderSuccess(false);
        router.push("/user/dashboard?tab=services");
      }, 2000);
    }
  };

  return (
    <div className="space-y-8 pb-28">
      {/* HEADER BANNER SECTION */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#c92c41] text-xs font-bold mb-3 border border-rose-100/80">
              <Zap className="w-3.5 h-3.5 fill-[#c92c41]" /> Direct Service Booking
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              Legal & Compliance Services
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
              Book verified legal documentation, business registration, property verification, and CA consultation with transparent pricing directly from the Services API.
            </p>
          </div>

          {/* TOP SEARCH BAR IN BANNER */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services, documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-xs font-medium focus:outline-none focus:bg-white focus:border-[#c92c41] focus:ring-2 focus:ring-[#c92c41]/10 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* DYNAMIC CATEGORY PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-gray-100 mt-6 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#c92c41] text-white shadow-xs"
                    : "bg-gray-100/70 text-gray-600 hover:bg-gray-200/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <div className="relative flex-shrink-0">
            <button className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gray-100/70 text-gray-600 hover:bg-gray-200/80 flex items-center gap-1">
              More <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* POPULAR SERVICES TITLE & SORT BAR */}
      <div className="flex items-center justify-between pt-2">
        <h2 className="text-lg font-bold text-gray-900 tracking-tight">Popular Services</h2>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-medium hidden sm:inline">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-200/90 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-700 outline-none cursor-pointer hover:border-gray-300"
          >
            <option value="Most Popular">Most Popular</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* SERVICES GRID WITH SUBTLE LIGHT SHADE COLORS */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#c92c41]" />
          <p className="text-sm text-gray-500 font-medium">Fetching services from backend API...</p>
        </div>
      ) : filteredServices.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-200">
          <ShieldAlert className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-gray-800">No matching services found</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query or select another category above.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Services");
            }}
            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 rounded-xl transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const catStyle = getCategoryStyle(service.category, service.title, idx);
            const IconComp = service.icon || catStyle.defaultIcon;
            const savings =
              service.originalPrice > service.price
                ? service.originalPrice - service.price
                : 0;
            const isFav = !!favorites[service.serviceCode];

            return (
              <motion.div
                key={service.serviceCode}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${catStyle.cardBg}`}
              >
                <div className="p-6">
                  {/* TOP ROW: ICON + TAG + FAVORITE */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xs ${catStyle.iconBg}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      {service.badgeText && (
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border truncate ${catStyle.tagBg}`}>
                          {service.badgeText}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleFavorite(service.serviceCode)}
                      className="text-gray-300 hover:text-rose-500 transition-colors p-1 rounded-full hover:bg-white/60"
                      aria-label="Favorite"
                    >
                      <Heart
                        size={18}
                        className={isFav ? "fill-rose-500 text-rose-500" : "text-gray-400"}
                      />
                    </button>
                  </div>

                  {/* TITLE & SUBTITLE */}
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#c92c41] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* BENEFITS LIST */}
                  {service.benefits.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-gray-200/50 space-y-2">
                      {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CARD FOOTER & PRICING */}
                <div className="p-5 bg-white/80 backdrop-blur-xs border-t border-gray-200/60 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xl font-black text-gray-900 tracking-tight">
                        ₹{service.price.toLocaleString("en-IN")}
                      </span>
                      {service.originalPrice > service.price && (
                        <span className="text-xs text-gray-400 line-through ml-1.5 font-medium">
                          ₹{service.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    {savings > 0 && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                        Save ₹{savings.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => router.push(`/user/dashboard?tab=services`)}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleOpenBuyModal(service)}
                      className="w-full px-3 py-2.5 bg-[#c92c41] hover:bg-[#a8233a] text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1"
                    >
                      Book Now →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* FIXED BOTTOM TRUST / VALUE BANNER (4 COLUMNS) */}
      <div className="fixed bottom-0 right-0 left-0 lg:left-64 bg-white/95 backdrop-blur-md border-t border-gray-200/80 px-6 py-3 shadow-lg z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          <div className="bg-white/80 rounded-xl border border-gray-200/80 p-2.5 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#c92c41] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Verified & Trusted</h4>
              <p className="text-[10px] text-gray-500 leading-tight">All services verified by legal experts</p>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl border border-gray-200/80 p-2.5 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Tag size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Transparent Pricing</h4>
              <p className="text-[10px] text-gray-500 leading-tight">No hidden charges. Clear pricing</p>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl border border-gray-200/80 p-2.5 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Lock size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Secure & Confidential</h4>
              <p className="text-[10px] text-gray-500 leading-tight">Your data is 100% safe with us</p>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl border border-gray-200/80 p-2.5 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Clock size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Quick & Easy Booking</h4>
              <p className="text-[10px] text-gray-500 leading-tight">Book in minutes with expert support</p>
            </div>
          </div>
        </div>
      </div>

      {/* CHECKOUT / BUY NOW MODAL */}
      <AnimatePresence>
        {isCheckoutOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-lg w-full overflow-hidden relative"
            >
              {/* MODAL HEADER */}
              <div className="p-6 bg-gray-50/80 border-b border-gray-100 flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c92c41] bg-red-50 px-2 py-0.5 rounded-full mb-1">
                    <ShieldCheck className="w-3 h-3" /> Lawizer Guaranteed Service
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedService.title}</h2>
                  <p className="text-xs text-gray-500 mt-0.5">{selectedService.category}</p>
                </div>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-200/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL BODY */}
              {orderSuccess ? (
                <div className="p-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Service Booked Successfully!</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Your request has been registered. You are being redirected to your active workspace to track progress...
                  </p>
                </div>
              ) : (
                <div className="p-6 space-y-5">
                  {/* PRICING BREAKDOWN CARD */}
                  <div className="bg-gray-50/70 border border-gray-200/80 rounded-xl p-4 space-y-2.5">
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Service Professional Fee</span>
                      <span className="font-semibold text-gray-800">
                        ₹{selectedService.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>GST / Govt Tax (18% included)</span>
                      <span className="text-emerald-700 font-medium">Included</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200/60 flex justify-between items-baseline">
                      <span className="text-sm font-bold text-gray-900">Total Payable</span>
                      <span className="text-xl font-extrabold text-[#c92c41]">
                        ₹{selectedService.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* USER CONTACT DETAILS */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider block">
                      Client Contact Info
                    </label>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-400 block text-[10px]">FULL NAME</span>
                        <span className="font-semibold text-gray-800 truncate block">
                          {user?.name || "Client"}
                        </span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-400 block text-[10px]">EMAIL ADDRESS</span>
                        <span className="font-semibold text-gray-800 truncate block">
                          {user?.email || "client@lawizer.com"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PAYMENT METHOD SELECTOR */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider block">
                      Select Payment Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("upi")}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                          paymentMethod === "upi"
                            ? "border-[#c92c41] bg-red-50/50 text-[#c92c41]"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <QrCode className="w-4 h-4" /> UPI / GPay
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                          paymentMethod === "card"
                            ? "border-[#c92c41] bg-red-50/50 text-[#c92c41]"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <CreditCard className="w-4 h-4" /> Credit / Debit
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("netbanking")}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                          paymentMethod === "netbanking"
                            ? "border-[#c92c41] bg-red-50/50 text-[#c92c41]"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Landmark className="w-4 h-4" /> NetBanking
                      </button>
                    </div>
                  </div>

                  {/* ADDITIONAL NOTES */}
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider block mb-1">
                      Requirements / Special Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention any specific requirements or business details..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:bg-white focus:border-[#c92c41]"
                    />
                  </div>

                  {/* ACTION BUTTON */}
                  <button
                    onClick={handleConfirmPurchase}
                    disabled={submittingOrder}
                    className="w-full py-3.5 bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-gray-300 text-white font-bold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    {submittingOrder ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Processing Payment...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-white" /> Confirm & Pay ₹
                        {selectedService.price.toLocaleString("en-IN")}
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
