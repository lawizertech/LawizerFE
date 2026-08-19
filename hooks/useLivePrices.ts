"use client";

import { useState, useEffect } from "react";

export type LivePriceMap = Record<string, { price: string | number; originalPrice?: string | number }>;

export function useLivePrices() {
  const [prices, setPrices] = useState<LivePriceMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        
        if (data.success && Array.isArray(data.services)) {
          const map: LivePriceMap = {};
          data.services.forEach((s: any) => {
            const key = s.slug || s.serviceID?.toLowerCase();
            if (key) {
              map[key] = {
                price: typeof s.price === "number" ? `₹${s.price.toLocaleString("en-IN")}` : s.price,
                originalPrice: typeof s.originalPrice === "number" ? `₹${s.originalPrice.toLocaleString("en-IN")}` : s.originalPrice,
              };
            }
          });
          setPrices(map);
        }
      } catch (err) {
        console.error("Failed to fetch live prices:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrices();
  }, []);

  return { prices, loading };
}
