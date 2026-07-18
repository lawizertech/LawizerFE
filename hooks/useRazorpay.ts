import { useEffect, useState, useCallback } from "react";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  handler: (response: any) => void;
  modal?: { ondismiss?: () => void };
}

interface UseRazorpayReturn {
  /** True once the Razorpay checkout.js script has loaded. */
  isLoaded: boolean;
  /**
   * Convenience wrapper: opens the Razorpay checkout modal.
   * Throws if the SDK is not yet loaded.
   */
  initializePayment: (options: RazorpayOptions) => void;
}

export function useRazorpay(): UseRazorpayReturn {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Already loaded (e.g. after a fast-refresh or second mount)
    if ((window as any).Razorpay) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => console.error("[useRazorpay] Failed to load Razorpay SDK");
    document.body.appendChild(script);
  }, []);

  const initializePayment = useCallback(
    (options: RazorpayOptions) => {
      if (!isLoaded || !(window as any).Razorpay) {
        throw new Error("Razorpay SDK is not yet loaded. Wait for isLoaded to be true.");
      }
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    },
    [isLoaded],
  );

  return { isLoaded, initializePayment };
}
