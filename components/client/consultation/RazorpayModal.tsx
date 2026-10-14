"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X, CheckCircle, CreditCard, Smartphone, Building, Loader2, ArrowRight } from "lucide-react";

interface RazorpayModalProps {
  isOpen: boolean;
  orderId: string;
  amount: number;
  userName: string;
  userPhone: string;
  userEmail?: string;
  onSuccess: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  onDismiss: () => void;
}

export function RazorpayModal({
  isOpen,
  orderId,
  amount,
  userName,
  userPhone,
  userEmail,
  onSuccess,
  onDismiss,
}: RazorpayModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [processing, setProcessing] = useState(false);

  if (!isOpen) return null;

  const displayAmount = (amount / 100).toFixed(2);

  const handleSimulatePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      const paymentId = `pay_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      onSuccess({
        razorpay_payment_id: paymentId,
        razorpay_order_id: orderId,
        razorpay_signature: "simulated_razorpay_signature",
      });
      setProcessing(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => !processing && onDismiss()}
          className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Razorpay Frame Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative bg-white rounded-2xl overflow-hidden max-w-[460px] w-full shadow-2xl border border-slate-200"
        >
          {/* Razorpay Header Bar */}
          <div className="bg-[#0c2340] text-white p-5 relative">
            <button
              onClick={() => !processing && onDismiss()}
              disabled={processing}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                <img src="/Lawizer_final.png" alt="Lawizer" className="w-8 h-8 object-contain rounded-lg" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight leading-snug">Lawizer Technologies</h3>
                <p className="text-xs text-white/70">Founder Consultation Booking</p>
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
              <span className="text-xs text-white/75 font-medium">Amount to Pay</span>
              <span className="text-2xl font-extrabold text-white tracking-tight">₹{displayAmount}</span>
            </div>
          </div>

          {/* Test Mode Notification Banner */}
          <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2 flex items-center justify-between text-xs text-amber-900">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Razorpay Test Environment
            </span>
            <span className="text-[11px] font-mono text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
              {orderId.substring(0, 16)}…
            </span>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {/* Customer Details Pill */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 mb-5 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Billed To</span>
                <span className="font-semibold text-slate-800">{userName || "Client"}</span>
                {userEmail && <span className="block text-[11px] text-slate-500 truncate max-w-[170px]">{userEmail}</span>}
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Contact</span>
                <span className="font-mono text-slate-700">{userPhone}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Payment Method</p>
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <button
                type="button"
                onClick={() => setSelectedMethod("upi")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  selectedMethod === "upi"
                    ? "border-[#3395ff] bg-[#3395ff]/5 text-[#0c2340] shadow-xs"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <Smartphone size={20} className={selectedMethod === "upi" ? "text-[#3395ff] mb-1" : "text-slate-400 mb-1"} />
                UPI / QR
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("card")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  selectedMethod === "card"
                    ? "border-[#3395ff] bg-[#3395ff]/5 text-[#0c2340] shadow-xs"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <CreditCard size={20} className={selectedMethod === "card" ? "text-[#3395ff] mb-1" : "text-slate-400 mb-1"} />
                Card
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("netbanking")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  selectedMethod === "netbanking"
                    ? "border-[#3395ff] bg-[#3395ff]/5 text-[#0c2340] shadow-xs"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <Building size={20} className={selectedMethod === "netbanking" ? "text-[#3395ff] mb-1" : "text-slate-400 mb-1"} />
                Netbanking
              </button>
            </div>

            {/* Method Details Box */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 mb-6 text-xs text-slate-600">
              {selectedMethod === "upi" && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-[#3395ff]">
                    UPI
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Google Pay / PhonePe / Paytm / BHIM</p>
                    <p className="text-[11px] text-slate-400">Instant UPI verification in Test Simulation</p>
                  </div>
                </div>
              )}

              {selectedMethod === "card" && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700">
                    💳
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Visa • Mastercard • RuPay</p>
                    <p className="text-[11px] text-slate-400">Simulated 3D Secure OTP verification</p>
                  </div>
                </div>
              )}

              {selectedMethod === "netbanking" && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700">
                    🏦
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">HDFC • ICICI • SBI • Axis</p>
                    <p className="text-[11px] text-slate-400">Instant corporate & retail simulated authorization</p>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={handleSimulatePayment}
              disabled={processing}
              className="w-full bg-[#159a4b] hover:bg-[#12833f] text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {processing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Authorizing Payment…
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Simulate Successful Payment (₹{displayAmount})
                </>
              )}
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={onDismiss}
              disabled={processing}
              className="w-full mt-2.5 py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold transition-colors cursor-pointer text-center"
            >
              Cancel Payment & Return
            </button>
          </div>

          {/* Razorpay Footer Security Badge */}
          <div className="bg-slate-100/80 px-6 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-600" />
              256-bit SSL Secured
            </span>
            <span>Secured by <strong>Razorpay</strong></span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
