"use client";

import { serverApi } from "@/lib/apis/axios";
import { useEffect, useState } from "react";
import { CreditCard, Calendar, RefreshCw, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";

type Transaction = {
  id: string;
  serviceTitle: string;
  razorpayOrderId: string | null;
  razorpayPaymentId: string | null;
  amount: number | string;
  status: string;
  createdAt: string | null;
  verifiedAt: string | null;
};

export default function TransactionsTab() {
  const [history, setHistory] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await serverApi.get("/api/payments/history");
      if (res.data?.success) {
        setHistory(res.data.history || []);
      } else {
        setError("Failed to load transaction history.");
      }
    } catch (err: any) {
      console.error("Error fetching transactions:", err);
      setError(err?.response?.data?.message || "Failed to load transactions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case "verified":
      case "paid":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 size={12} />
            Completed
          </span>
        );
      case "created":
      case "pending":
      case "pending_payment":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <RefreshCw className="animate-spin" size={12} />
            Pending Payment
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <AlertCircle size={12} />
            Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200">
            <HelpCircle size={12} />
            {status || "Unknown"}
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <CreditCard className="text-[#c92c41]" size={28} />
            Transaction History
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View and track all payments made for your legal services.
          </p>
        </div>
        <button
          onClick={fetchHistory}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:text-black bg-white hover:bg-gray-50 shadow-sm transition"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-4 flex items-center gap-3">
          <AlertCircle size={20} className="shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* TABLE / CONTENT */}
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-500">
              <RefreshCw className="animate-spin text-[#c92c41]" size={24} />
              <span>Fetching your transaction records...</span>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-4/5 animate-pulse"></div>
            </div>
          </div>
        ) : history.length === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="w-16 h-16 bg-red-50 text-[#c92c41] rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard size={32} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">No transactions found</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
              Once you start a service process and proceed to checkout, your payment receipts will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/75 border-b text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Service Description</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Razorpay Order ID</th>
                  <th className="px-6 py-4">Payment ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm text-gray-700">
                {history.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {tx.serviceTitle}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      ₹{Number(tx.amount || 0).toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">
                      {tx.razorpayOrderId || "-"}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">
                      {tx.razorpayPaymentId || "-"}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-gray-400" />
                        {formatDate(tx.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(tx.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
