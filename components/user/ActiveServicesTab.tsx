"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FileText,
  Clock,
  AlertCircle,
  X,
  Upload,
  Send,
  ArrowRight,
  Loader2,
  Bell,
  Check,
  CheckCircle2,
  User,
  Calendar,
  Eye,
  Download,
  Phone,
  Video,
  MessageSquare,
  CreditCard,
  Info,
  Layers,
  Receipt
} from "lucide-react";
import { useServiceWorkspace } from "@/hooks/useServiceWorkspace";
import VoiceCallModal from "@/components/call/VoiceCallModal";
import { useAuth } from "@/context/authContext";

export default function ActiveServicesTab() {
  const router = useRouter();
  const { user } = useAuth();
  const {
    services,
    selectedServiceDetail,
    selectedServiceId,
    chatMessages,
    loading,
    detailLoading,
    uploadingDocName,
    typedMessage,
    setTypedMessage,
    notifications,
    dismissNotification,
    dismissAllNotifications,
    showCallModal,
    setShowCallModal,
    startCall,
    openDetail,
    closeDetail,
    handleSendMessage,
    handleUploadClick,
  } = useServiceWorkspace();

  const [activeSubTab, setActiveSubTab] = useState<"stages" | "docs" | "chat">("stages");

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name || "User"}!</h1>
      </div>

      {/* ACTIVE SERVICES WRAPPER (Red Border) */}
      <div className="border border-[#C0392B] rounded-2xl p-1 shadow-sm bg-[#fffafb]">
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900">Active Services</h2>
          <p className="text-sm text-gray-500 mt-1 mb-6">Ongoing legal services, document reviews & compliance</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: YOUR SERVICES */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Your Services</div>
              
              {loading ? (
                <div className="flex flex-col justify-center items-center py-10 gap-2">
                  <Loader2 className="animate-spin text-[#C0392B]" />
                  <span className="text-xs text-gray-500 font-medium">Loading your services...</span>
                </div>
              ) : services.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center border border-dashed border-gray-200">
                  <p className="text-sm text-gray-500 font-medium">No active services found.</p>
                  <p className="text-xs text-gray-400 mt-1">Initiate a legal service to track progress here.</p>
                </div>
              ) : (
                services.filter(s => s.status !== "Completed" && s.status !== "COMPLETED").map((s) => {
                  let pillClasses = "";
                  if (s.status === "In Progress") {
                    pillClasses = "bg-[#FEF9E7] text-[#B7770D]";
                  } else if (s.status === "Docs Pending") {
                    pillClasses = "bg-[#FEF9E7] text-[#B7770D]";
                  } else {
                    pillClasses = "bg-[#EAF0FB] text-[#1A5276]";
                  }

                  const fillBg = s.status === "Completed" ? "bg-[#1A5276]" : "bg-[#C0392B]";

                  return (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md"
                    >
                      <div className="flex justify-between items-start gap-4 mb-6">
                        <h3 className="font-semibold text-lg text-gray-900">{s.name}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${pillClasses}`}>
                          {s.status}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative mb-6">
                        <div className="w-full bg-gray-100 rounded-full h-[4px] overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${fillBg}`}
                            style={{ width: `${s.progress}%` }}
                          />
                        </div>
                        {/* Mock nodes for UI consistency with screenshot */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-[#C0392B] rounded-full ring-4 ring-white" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-3 h-3 bg-[#C0392B] rounded-full ring-4 ring-white" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-4 h-4 bg-white border-[3px] border-[#C0392B] rounded-full ring-2 ring-red-100" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-3/4 w-3 h-3 bg-gray-200 rounded-full ring-4 ring-white" />
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-gray-200 rounded-full ring-4 ring-white" />
                        
                        <div className="flex justify-between mt-3 text-[9px] font-semibold text-gray-400">
                          <span className="text-gray-800">1. Step</span>
                          <span className="text-gray-800">2. Step</span>
                          <span className="text-[#C0392B]">3. Current</span>
                          <span>4. Next</span>
                          <span>5. Completed</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                            <User size={16} className="text-gray-400" />
                          </div>
                          <span className="text-xs font-bold text-gray-800">CA / Expert</span>
                        </div>
                        <button
                          onClick={() => {
                            setActiveSubTab("stages");
                            openDetail(s.id);
                          }}
                          className="bg-[#C0392B] text-white text-xs px-4 py-2 rounded-lg font-semibold transition hover:bg-[#A03024] cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* RIGHT: NOTIFICATIONS */}
            <div className="lg:col-span-1 space-y-4">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Notifications</div>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="p-4 border-b border-[#F1F5F9] flex justify-between items-center bg-[#fafafa]/50">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <Bell size={16} className="text-[#C0392B]" />
                    <span>Your Updates</span>
                  </div>
                  {notifications.filter((n) => !n.read).length > 0 && (
                    <button
                      onClick={dismissAllNotifications}
                      className="text-[10px] text-[#C0392B] hover:text-[#A03024] font-bold transition cursor-pointer"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="divide-y divide-[#F1F5F9]">
                  <AnimatePresence initial={false}>
                    {notifications.filter((n) => !n.read).length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-8 text-center text-gray-400 text-xs italic"
                      >
                        No pending notifications.
                      </motion.div>
                    ) : (
                      notifications
                        .filter((n) => !n.read)
                        .map((notif) => (
                          <motion.div
                            key={notif.notificationId}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                            onClick={async () => {
                              await dismissNotification(notif.notificationId);
                              if (notif.serviceId) {
                                void openDetail(notif.serviceId);
                              }
                            }}
                            className="p-4 flex gap-3 items-start overflow-hidden hover:bg-gray-50/40 cursor-pointer transition duration-150 relative group"
                          >
                            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 shrink-0 mt-0.5">
                              {notif.type === "document" && <FileText size={14} className="text-blue-500" />}
                              {notif.type === "service" && <Clock size={14} className="text-green-500" />}
                              {notif.type === "message" && <MessageSquare size={14} className="text-[#C0392B]" />}
                              {notif.type === "payment" && <CreditCard size={14} className="text-amber-500" />}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-1">
                                <p className="text-xs font-bold text-gray-900 truncate">{notif.title}</p>
                              </div>
                              <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{notif.message}</p>
                            </div>
                          </motion.div>
                        ))
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT DOCUMENTS & QUICK ACTIONS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* RECENT DOCUMENTS */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Documents</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 space-y-1">
            {/* Mock recent documents matching the screenshot */}
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 font-bold text-[10px]">
                PDF
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900">Aadhaar Card</p>
                <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-0.5">
                  Verification Status <CheckCircle2 size={12} className="text-green-500" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-[10px]">
                DOC
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900">PAN Card Director</p>
                <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-0.5">
                  Verification Status <CheckCircle2 size={12} className="text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => router.push("/user/dashboard?tab=book")}
                className="flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition text-left cursor-pointer"
              >
                <Calendar className="text-[#C0392B]" size={20} />
                <span className="font-bold text-sm text-gray-900">Book Service</span>
              </button>
              
              <button 
                onClick={() => router.push("/user/dashboard?tab=consultations")}
                className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition text-left cursor-pointer"
              >
                <MessageSquare className="text-blue-600" size={20} />
                <span className="font-bold text-sm text-gray-900">My Consultations</span>
              </button>
              
              <button 
                onClick={() => router.push("/user/dashboard?tab=transactions")}
                className="flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition text-left cursor-pointer"
              >
                <Receipt className="text-[#C0392B]" size={20} />
                <span className="font-bold text-sm text-gray-900">View Transactions</span>
              </button>
              
              <button 
                className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition text-left cursor-pointer"
              >
                <Phone className="text-green-600" size={20} />
                <span className="font-bold text-sm text-gray-900">Contact Expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DETAIL SIDE PANEL OVERLAY (SERVICE WORKSPACE) */}
      <AnimatePresence>
        {selectedServiceId && (
          <div className="fixed inset-0 bg-black/40 z-50 flex justify-end" onClick={closeDetail}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-full sm:max-w-md md:max-w-lg lg:max-w-4xl bg-white h-full flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Overlay Header with Overview info */}
              <div className="p-6 border-b border-gray-100 bg-white flex flex-col gap-3 shrink-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedServiceDetail?.name || "Loading Workspace..."}</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">{selectedServiceDetail?.type || ""}</p>
                  </div>
                  <button
                    onClick={closeDetail}
                    className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-500 transition duration-150 cursor-pointer"
                    aria-label="Close workspace"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Workspace Navigation Switcher */}
              <div className="flex border-b border-gray-100 px-6 bg-white shrink-0 overflow-x-auto scrollbar-hide">
                {(["stages", "docs", "chat"] as const).map((tab) => {
                  let label = "Progress";
                  if (tab === "docs") label = "Documents";
                  if (tab === "chat") label = "Chat / Support";

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveSubTab(tab)}
                      className={`py-4 px-6 text-sm font-semibold border-b-2 transition duration-150 cursor-pointer whitespace-nowrap ${
                        activeSubTab === tab
                          ? "border-[#C0392B] text-[#C0392B]"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Panel Workspace View Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                {detailLoading || !selectedServiceDetail ? (
                  <div className="flex flex-col justify-center items-center h-64 gap-2">
                    <Loader2 size={24} className="animate-spin text-[#C0392B]" />
                    <span className="text-xs text-gray-500 font-medium">Loading workspace metrics...</span>
                  </div>
                ) : (
                  <>
                    {/* PROGRESS TAB */}
                    {activeSubTab === "stages" && (
                      <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-4">
                          <h4 className="text-sm font-bold text-gray-700">Completion Progress</h4>
                          <div className="w-full bg-gray-100 rounded-full h-[8px] overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500 bg-[#C0392B]"
                              style={{ width: `${selectedServiceDetail.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="space-y-3 bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                          {selectedServiceDetail.stages.map((stage, idx) => {
                            let iconBg = "";
                            let iconColor = "";

                            if (stage.status === "completed") {
                              iconBg = "bg-[#EAFAF1]";
                              iconColor = "text-[#1E8449]";
                            } else if (stage.status === "active") {
                              iconBg = "bg-[#FDF2F2]";
                              iconColor = "text-[#C0392B]";
                            } else {
                              iconBg = "bg-gray-50";
                              iconColor = "text-gray-400";
                            }

                            return (
                              <div
                                key={idx}
                                className={`flex items-center gap-4 py-3 border-b border-gray-50 last:border-0`}
                              >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${iconBg} ${iconColor}`}>
                                  {stage.status === "completed" ? (
                                    <Check size={14} />
                                  ) : stage.status === "active" ? (
                                    <Loader2 size={14} className="animate-spin" />
                                  ) : (
                                    <Clock size={14} />
                                  )}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{stage.name}</p>
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {stage.status === "completed" ? "Completed" : stage.status === "active" ? "In progress - Est. 3-5 days" : "Pending"}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* DOCUMENTS TAB */}
                    {activeSubTab === "docs" && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-gray-700">Submitted</h4>
                          {selectedServiceDetail.documents.submitted.length === 0 ? (
                            <p className="text-sm text-gray-400 italic bg-white p-4 rounded-xl border border-dashed border-gray-200 text-center">
                              No documents uploaded yet.
                            </p>
                          ) : (
                            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                              {selectedServiceDetail.documents.submitted.map((doc, idx) => (
                                <div
                                  key={idx}
                                  className="flex justify-between items-center p-4 border-b border-gray-50 last:border-0"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-800">{doc.name}</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                                      Verified <Check size={12} />
                                    </span>
                                    {doc.fileUrl && (
                                      <a
                                        href={doc.fileUrl}
                                        download
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-gray-500 hover:text-gray-800 font-semibold px-3 py-1 bg-gray-50 hover:bg-gray-100 rounded-md transition"
                                      >
                                        Download
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-gray-700">Pending upload</h4>
                          {selectedServiceDetail.documents.pending.length === 0 ? (
                            <div className="flex items-center gap-2 p-4 bg-[#EAFAF1] text-[#1E8449] rounded-xl text-sm font-semibold border border-[#EAFAF1]">
                              <CheckCircle2 size={18} className="text-[#1E8449]" />
                              <span>All files are uploaded & verify-ready!</span>
                            </div>
                          ) : (
                            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                              {selectedServiceDetail.documents.pending.map((doc, idx) => (
                                <div
                                  key={idx}
                                  className="flex justify-between items-center p-4 border-b border-gray-50 last:border-0"
                                >
                                  <span className="text-sm font-semibold text-gray-800">{doc.name}</span>
                                  <button
                                    onClick={() => handleUploadClick(doc.key)}
                                    disabled={uploadingDocName === doc.key}
                                    className="text-xs text-[#C0392B] hover:text-[#A03024] font-bold cursor-pointer"
                                  >
                                    {uploadingDocName === doc.key ? (
                                      "Uploading..."
                                    ) : (
                                      "Upload"
                                    )}
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CHAT TAB (Combined Chat & Calls) */}
                    {activeSubTab === "chat" && (
                      <div className="space-y-6">
                        {/* CALL ACTIONS */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">Live Communication</h4>
                            <p className="text-xs text-gray-500 mt-0.5">Start a secure voice or video call with your expert.</p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => startCall("voice")}
                              className="px-4 py-2 bg-[#C0392B] text-white hover:bg-[#A03024] rounded-lg text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-sm"
                            >
                              <Phone size={14} /> Voice Call
                            </button>
                            <button
                              onClick={() => startCall("video")}
                              className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg text-xs font-bold transition flex items-center gap-2 cursor-pointer"
                            >
                              <Video size={14} /> Video Call
                            </button>
                          </div>
                        </div>

                        {/* CHAT INTERFACE */}
                        <div className="flex flex-col h-[400px] bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                            {chatMessages.length === 0 ? (
                              <p className="text-center text-gray-400 text-sm italic mt-10">Start a conversation with your assigned expert...</p>
                            ) : (
                              chatMessages.map((msg, idx) => {
                                const userMsg = msg.sender === "user";
                                return (
                                  <div
                                    key={idx}
                                    className={`flex flex-col ${userMsg ? "items-end" : "items-start"}`}
                                  >
                                    <div
                                      className={`max-w-[70%] px-4 py-3 rounded-xl text-sm leading-relaxed shadow-[0_1px_4px_rgba(0,0,0,0.02)] ${
                                        userMsg
                                          ? "bg-[#C0392B] text-white rounded-tr-none"
                                          : "bg-gray-100 text-slate-800 rounded-tl-none"
                                      }`}
                                    >
                                      {msg.text}
                                    </div>
                                    {msg.time && (
                                      <span className="text-[10px] text-gray-400 mt-1 px-1">
                                        {msg.time}
                                      </span>
                                    )}
                                  </div>
                                );
                              })
                            )}
                          </div>

                          <form
                            onSubmit={handleSendMessage}
                            className="p-4 border-t border-gray-100 flex gap-3 items-center bg-white shrink-0"
                          >
                            <input
                              type="text"
                              value={typedMessage}
                              onChange={(e) => setTypedMessage(e.target.value)}
                              placeholder="Type a message to your CA..."
                              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C0392B] transition"
                            />
                            <button
                              type="submit"
                              className="bg-[#C0392B] text-white p-3 rounded-xl hover:bg-[#A03024] transition duration-150 cursor-pointer shrink-0"
                              aria-label="Send message"
                            >
                              <Send size={16} />
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Realtime Call Popup */}
      {showCallModal && (
        <VoiceCallModal
          bookingId={selectedServiceDetail?.id || ""}
          role="client"
          onClose={() => setShowCallModal(false)}
        />
      )}
    </div>
  );
}
