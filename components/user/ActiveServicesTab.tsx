"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import { useServiceWorkspace } from "@/hooks/useServiceWorkspace";
import VoiceCallModal from "@/components/call/VoiceCallModal";

export default function ActiveServicesTab() {
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
    callType,
    startCall,
    openDetail,
    closeDetail,
    handleSendMessage,
    handleUploadClick,
  } = useServiceWorkspace();

  const [activeSubTab, setActiveSubTab] = useState<"stages" | "docs" | "chat" | "activity" | "calls">("stages");

  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Active Services</h2>
        <p className="text-sm text-gray-500 mt-1">Ongoing legal services, document reviews & compliance</p>
      </div>

      {/* DUAL COLUMN RESPONSIVE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* LEFT COLUMN: SERVICE LIST */}
        <div className="lg:col-span-2 space-y-5">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Services</div>
          {loading ? (
            <div className="flex flex-col justify-center items-center py-20 gap-2">
              <Loader2 className="animate-spin text-[#C0392B]" />
              <span className="text-xs text-gray-500 font-medium">Loading your services...</span>
            </div>
          ) : services.length === 0 ? (
            <div className="bg-white rounded-[12px] p-10 text-center border border-dashed border-gray-200">
              <p className="text-sm text-gray-500 font-medium">No active services found.</p>
              <p className="text-xs text-gray-400 mt-1">Initiate a legal service to track progress here.</p>
            </div>
          ) : (
            services.map((s) => {
              let pillClasses = "";
              if (s.status === "In Progress") {
                pillClasses = "bg-[#EAFAF1] text-[#1E8449]";
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
                  className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-none p-5 flex flex-col justify-between transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900">{s.name}</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{s.type}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${pillClasses}`}>
                      {s.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="w-full bg-gray-100 rounded-full h-[6px] overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${fillBg}`}
                        style={{ width: `${s.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-1">
                    <span className="text-xs text-gray-500 font-medium">{s.stageText}</span>
                    <button
                      onClick={() => {
                        setActiveSubTab("overview");
                        openDetail(s.id);
                      }}
                      className="text-xs text-[#C0392B] hover:text-[#A03024] font-semibold transition duration-150 flex items-center gap-1 cursor-pointer"
                    >
                      View details <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* RIGHT COLUMN: NOTIFICATIONS PANEL */}
        <div className="lg:col-span-1 space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Notifications</div>
          <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-none overflow-hidden">
            {/* Notifications Header */}
            <div className="p-4 border-b border-[#F1F5F9] flex justify-between items-center bg-[#fafafa]/50">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <Bell size={16} className="text-[#C0392B]" />
                <span>Updates</span>
              </div>
              {notifications.filter((n) => !n.read).length > 0 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={dismissAllNotifications}
                    className="text-[10px] text-[#C0392B] hover:text-[#A03024] font-bold transition cursor-pointer"
                  >
                    Clear all
                  </button>
                  <span className="bg-[#C0392B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                    {notifications.filter((n) => !n.read).length}
                  </span>
                </div>
              )}
            </div>

            {/* Notifications List */}
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
                        {/* Icon */}
                        <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 shrink-0 mt-0.5">
                          {notif.type === "document" && <FileText size={14} className="text-blue-500" />}
                          {notif.type === "service" && <Clock size={14} className="text-green-500" />}
                          {notif.type === "message" && <MessageSquare size={14} className="text-[#C0392B]" />}
                          {notif.type === "payment" && <CreditCard size={14} className="text-amber-500" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-1">
                            <p className="text-xs font-bold text-gray-900 truncate">{notif.title}</p>
                            <span className="text-[9px] text-gray-400 font-medium shrink-0">{notif.createdAt}</span>
                          </div>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{notif.message}</p>
                          {notif.related?.serviceName && (
                            <span className="text-[9px] text-[#C0392B] font-bold mt-1.5 block">
                              {notif.related.serviceName}
                            </span>
                          )}
                        </div>

                        {/* Mark read button */}
                        <button
                          onClick={async (e) => {
                            e.stopPropagation();
                            await dismissNotification(notif.notificationId);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-green-600 transition shrink-0 self-center"
                          title="Mark as read"
                        >
                          <Check size={14} />
                        </button>
                      </motion.div>
                    ))
                )}
              </AnimatePresence>
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
              className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white h-full flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Overlay Header with Overview info */}
              <div className="p-5 border-b border-gray-100 bg-[#fafafa] flex flex-col gap-3 shrink-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selectedServiceDetail?.name || "Loading Workspace..."}</h3>
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
                
                {selectedServiceDetail && (
                  <div className="grid grid-cols-2 gap-3 mt-1 text-slate-700 bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-xs">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Status</span>
                      <span className="font-semibold text-gray-800">{selectedServiceDetail.status}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Completion Progress</span>
                      <span className="font-semibold text-[#C0392B]">{selectedServiceDetail.progress}%</span>
                    </div>
                    <div className="col-span-2 border-t border-gray-50 pt-1.5">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Assigned Expert</span>
                      <span className="font-semibold text-gray-800">{selectedServiceDetail.assignedExpert?.name || "Assigning expert shortly..."}</span>
                    </div>
                    <div className="border-t border-gray-50 pt-1.5">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Purchase Date</span>
                      <span className="font-semibold text-slate-500">{selectedServiceDetail.purchaseDate}</span>
                    </div>
                    <div className="border-t border-gray-50 pt-1.5">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Estimated Delivery</span>
                      <span className="font-semibold text-slate-500">{selectedServiceDetail.estimatedCompletion}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Workspace Navigation Switcher */}
              <div className="flex border-b border-gray-100 px-5 bg-white shrink-0 overflow-x-auto scrollbar-hide">
                {(["stages", "docs", "chat", "activity", "calls"] as const).map((tab) => {
                  let label = "Progress";
                  if (tab === "docs") label = "Documents";
                  if (tab === "chat") label = "Chat";
                  if (tab === "activity") label = "Activity";
                  if (tab === "calls") label = "Calls";

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveSubTab(tab)}
                      className={`py-3 px-4 text-xs font-semibold border-b-2 transition duration-150 cursor-pointer whitespace-nowrap ${
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
              <div className="flex-1 overflow-y-auto p-5 bg-gray-50/50">
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
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-3">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Completion Percentage</h4>
                          <div className="w-full bg-gray-100 rounded-full h-[8px] overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500 bg-[#C0392B]"
                              style={{ width: `${selectedServiceDetail.progress}%` }}
                            />
                          </div>
                          <p className="text-[11px] text-gray-500 font-medium">{selectedServiceDetail.stageText}</p>
                        </div>

                        <div className="space-y-3.5">
                          {selectedServiceDetail.stages.map((stage, idx) => {
                            let iconBg = "";
                            let iconColor = "";
                            let borderStyle = "";

                            if (stage.status === "completed") {
                              iconBg = "bg-[#EAFAF1]";
                              iconColor = "text-[#1E8449]";
                              borderStyle = "border-l-4 border-l-[#1E8449] bg-white";
                            } else if (stage.status === "active") {
                              iconBg = "bg-[#FDF2F2]";
                              iconColor = "text-[#C0392B]";
                              borderStyle = "border-l-4 border-l-[#C0392B] bg-white";
                            } else {
                              iconBg = "bg-gray-50";
                              iconColor = "text-gray-400";
                              borderStyle = "border border-gray-100 bg-[#fafafa]/50";
                            }

                            return (
                              <div
                                key={idx}
                                className={`flex items-center gap-4 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition ${borderStyle}`}
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
                                  <p className="text-xs font-semibold text-gray-900">{stage.name}</p>
                                  <p className="text-[11px] text-gray-500 mt-0.5">{stage.details}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* DOCUMENTS TAB */}
                    {activeSubTab === "docs" && (
                      <div className="space-y-5">
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted Documents</h4>
                          {selectedServiceDetail.documents.submitted.length === 0 ? (
                            <p className="text-xs text-gray-400 italic bg-white p-4 rounded-xl border border-dashed text-center">
                              No documents uploaded yet.
                            </p>
                          ) : (
                            selectedServiceDetail.documents.submitted.map((doc, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] border border-gray-100"
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center gap-3">
                                    <FileText size={18} className="text-[#1E8449] shrink-0" />
                                    <div>
                                      <span className="text-xs font-semibold text-gray-800 block">{doc.name}</span>
                                      {doc.uploadedAt && (
                                        <span className="text-[9px] text-gray-400 block mt-0.5">Uploaded on {doc.uploadedAt}</span>
                                      )}
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-bold text-[#1E8449] bg-green-50 px-2 py-0.5 rounded-full shrink-0">
                                    {doc.status}
                                  </span>
                                </div>
                                <div className="flex justify-end gap-2 border-t border-gray-50 pt-2.5">
                                  {doc.fileUrl && (
                                    <>
                                      <button
                                        onClick={() => window.open(doc.fileUrl!, "_blank")}
                                        className="text-xs text-gray-500 hover:text-gray-800 font-semibold px-2.5 py-1 bg-gray-50 hover:bg-gray-100 rounded-md transition flex items-center gap-1 cursor-pointer"
                                      >
                                        <Eye size={12} /> Preview
                                      </button>
                                      <a
                                        href={doc.fileUrl}
                                        download
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-gray-500 hover:text-gray-800 font-semibold px-2.5 py-1 bg-gray-50 hover:bg-gray-100 rounded-md transition flex items-center gap-1"
                                      >
                                        <Download size={12} /> Download
                                      </a>
                                    </>
                                  )}
                                  <button
                                    onClick={() => handleUploadClick(doc.key)}
                                    disabled={uploadingDocName === doc.key}
                                    className="text-xs text-[#C0392B] hover:text-[#A03024] font-semibold px-2.5 py-1 bg-red-50 hover:bg-red-100/50 rounded-md transition flex items-center gap-1 cursor-pointer disabled:opacity-50"
                                  >
                                    {uploadingDocName === doc.key ? (
                                      <Loader2 size={12} className="animate-spin" />
                                    ) : (
                                      <Upload size={12} />
                                    )}
                                    Replace
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pending Action</h4>
                          {selectedServiceDetail.documents.pending.length === 0 ? (
                            <div className="flex items-center gap-2 p-3.5 bg-[#EAFAF1] text-[#1E8449] rounded-xl text-xs font-semibold border border-[#EAFAF1]">
                              <CheckCircle2 size={16} className="text-[#1E8449]" />
                              <span>All files are uploaded & verify-ready!</span>
                            </div>
                          ) : (
                            selectedServiceDetail.documents.pending.map((doc, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center bg-white p-3.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] border border-gray-100"
                              >
                                <div className="flex items-center gap-3">
                                  <FileText size={16} className="text-[#B7770D] shrink-0" />
                                  <span className="text-xs font-semibold text-gray-800">{doc.name}</span>
                                </div>
                                <button
                                  onClick={() => handleUploadClick(doc.key)}
                                  disabled={uploadingDocName === doc.key}
                                  className="text-xs text-[#C0392B] hover:text-[#A03024] font-bold flex items-center gap-1 disabled:opacity-50 cursor-pointer"
                                >
                                  {uploadingDocName === doc.key ? (
                                    <Loader2 size={12} className="animate-spin" />
                                  ) : (
                                    <Upload size={12} />
                                  )}
                                  Upload
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                    {/* CHAT TAB */}
                    {activeSubTab === "chat" && (
                      <div className="space-y-4">
                        <div className="flex flex-col h-[360px] bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
                            {chatMessages.length === 0 ? (
                              <p className="text-center text-gray-400 text-xs italic mt-10">Start a conversation with your assigned expert...</p>
                            ) : (
                              chatMessages.map((msg, idx) => {
                                const userMsg = msg.sender === "user";
                                return (
                                  <div
                                    key={idx}
                                    className={`flex flex-col ${userMsg ? "items-end" : "items-start"}`}
                                  >
                                    <div
                                      className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-[0_1px_4px_rgba(0,0,0,0.02)] ${
                                        userMsg
                                          ? "bg-[#C0392B] text-white rounded-tr-none shadow-[0_2px_8px_rgba(192,57,43,0.15)]"
                                          : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                                      }`}
                                    >
                                      {msg.text}
                                    </div>
                                    {msg.time && (
                                      <span className="text-[9px] text-gray-400 mt-1 px-1">
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
                            className="p-3 border-t border-gray-100 flex gap-2 items-center bg-white shrink-0"
                          >
                            <input
                              type="text"
                              value={typedMessage}
                              onChange={(e) => setTypedMessage(e.target.value)}
                              placeholder="Type a message..."
                              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#C0392B] transition"
                            />
                            <button
                              type="submit"
                              className="bg-[#C0392B] text-white p-2 rounded-xl hover:bg-[#A03024] transition duration-150 cursor-pointer shrink-0"
                              aria-label="Send message"
                            >
                              <Send size={14} />
                            </button>
                          </form>
                        </div>
                      </div>
                    )}

                    {/* ACTIVITY TAB */}
                    {activeSubTab === "activity" && (
                      <div className="space-y-4">
                        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-700 font-medium flex items-start gap-2">
                          <Info size={14} className="shrink-0 mt-0.5" />
                          <span>
                            This log compiles live document histories and milestones. 
                            <strong> [TODO: Integrate future unified backend service activity log endpoint]</strong>
                          </span>
                        </div>

                        <div className="relative border-l border-gray-200 ml-3 pl-4 space-y-5">
                          {selectedServiceDetail.activities.map((act) => {
                            let iconBg = "bg-gray-100 text-gray-500";
                            if (act.type === "document") iconBg = "bg-green-100 text-green-600";
                            if (act.type === "stage") iconBg = "bg-red-100 text-red-600";

                            return (
                              <div key={act.id} className="relative">
                                <div className={`absolute -left-[25px] top-0.5 w-4 h-4 rounded-full border-2 border-white ${iconBg} flex items-center justify-center`}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                </div>

                                <div className="space-y-0.5">
                                  <p className="text-xs font-semibold text-gray-900">{act.title}</p>
                                  <p className="text-[11px] text-gray-500 leading-relaxed">{act.description}</p>
                                  <p className="text-[9px] text-gray-400 font-medium">{act.timestamp}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* CALLS TAB */}
                    {activeSubTab === "calls" && (
                      <div className="space-y-5">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-center space-y-4">
                          <div className="w-12 h-12 rounded-full bg-red-50 text-[#C0392B] flex items-center justify-center mx-auto shadow-inner">
                            <Phone size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">Live Communication Workspace</h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                              Start a WebRTC voice or video session to speak directly with your assigned expert.
                            </p>
                          </div>
                          
                          <div className="flex flex-col gap-2.5 pt-2">
                            <button
                              onClick={() => startCall("voice")}
                              className="w-full py-2.5 bg-[#C0392B] text-white hover:bg-[#A03024] rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-red-950/15"
                            >
                              <Phone size={14} /> Start Voice Call
                            </button>
                            <button
                              onClick={() => startCall("video")}
                              className="w-full py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                            >
                              <Video size={14} /> Start Video Call
                            </button>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-3">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Connection Status</h4>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Signaling Channel:</span>
                            <span className="font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Active</span>
                          </div>
                          <div className="flex justify-between items-center text-xs border-t border-gray-50 pt-2">
                            <span className="text-gray-500">Ice Servers:</span>
                            <span className="text-slate-600 font-medium">Google STUN Ready</span>
                          </div>
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
