"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CallbackModalProps {
 isOpen: boolean;
 onClose: () => void;
 serviceName: string;
}

export default function CallbackModal({
 isOpen,
 onClose,
 serviceName,
}: CallbackModalProps) {
 const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
 const [loading, setLoading] = useState(false);
 const [message, setMessage] = useState("");
 const [messageType, setMessageType] = useState<"success" | "error" | "">("");

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target;
 setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();

 if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
 setMessage("Please fill in all fields");
 setMessageType("error");
 return;
 }

 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(formData.email)) {
 setMessage("Please enter a valid email address");
 setMessageType("error");
 return;
 }

 const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
 if (!phoneRegex.test(formData.phone)) {
 setMessage("Please enter a valid phone number");
 setMessageType("error");
 return;
 }

 setLoading(true);
 setMessage("");

 try {
 const response = await fetch("/api/callback", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 name: formData.name,
 email: formData.email,
 phone: formData.phone,
 service: serviceName,
 }),
 });

 const data = await response.json();

 if (response.ok) {
 setMessage("Callback request submitted successfully!");
 setMessageType("success");
 setFormData({ name: "", email: "", phone: "" });
 setTimeout(() => {
 onClose();
 setMessage("");
 }, 2000);
 } else {
 setMessage(data.message || "Failed to submit callback request");
 setMessageType("error");
 }
 } catch (error) {
 setMessage("Failed to submit callback request");
 setMessageType("error");
 console.error("Callback error:", error);
 } finally {
 setLoading(false);
 }
 };

 return (
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
 onClick={onClose}
 >
 <motion.div
 initial={{ scale: 0.9, opacity: 0, y: -20 }}
 animate={{ scale: 1, opacity: 1, y: 0 }}
 exit={{ scale: 0.9, opacity: 0 }}
 transition={{ duration: 0.3 }}
 className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-[500px] relative"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Close Button */}
 <button
 onClick={onClose}
 className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
 >
 <X size={24} />
 </button>

 {/* Header */}
 <div className="mb-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-2">
 Request a Callback
 </h2>
 <p className="text-gray-600">
 Service: <span className="font-semibold text-[#c92c41]">{serviceName}</span>
 </p>
 </div>

 {/* Form */}
 <form onSubmit={handleSubmit} className="space-y-4">
 {/* Name Input */}
 <div>
 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
 Full Name
 </label>
 <input
 type="text"
 id="name"
 name="name"
 value={formData.name}
 onChange={handleChange}
 placeholder="Enter your name"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c92c41] transition-colors"
 disabled={loading}
 />
 </div>

 {/* Email Input */}
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
 Email Address
 </label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 placeholder="Enter your email"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c92c41] transition-colors"
 disabled={loading}
 />
 </div>

 {/* Phone Input */}
 <div>
 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
 Phone Number
 </label>
 <input
 type="tel"
 id="phone"
 name="phone"
 value={formData.phone}
 onChange={handleChange}
 placeholder="Enter your phone number"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c92c41] transition-colors"
 disabled={loading}
 />
 </div>

 {/* Message */}
 {message && (
 <motion.div
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 className={`p-4 rounded-lg text-sm font-medium ${
 messageType === "success"
 ? "bg-green-100 text-green-800 border border-green-200"
 : "bg-red-100 text-red-800 border border-red-200"
 }`}
 >
 {message}
 </motion.div>
 )}

 {/* Submit Button */}
 <Button
 type="submit"
 disabled={loading}
 className="w-full bg-[#c92c41] hover:bg-[#a8233a] text-white font-semibold py-3 rounded-lg transition-colors"
 >
 {loading ? "Submitting..." : "Request Callback"}
 </Button>

 <p className="text-xs text-gray-500 text-center">
 We'll contact you shortly at the provided number.
 </p>
 </form>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
