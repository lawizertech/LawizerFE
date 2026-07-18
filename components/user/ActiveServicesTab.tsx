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
  Receipt,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  Paperclip,
  FileCheck,
} from "lucide-react";
import { useServiceWorkspace } from "@/hooks/useServiceWorkspace";
import VoiceCallModal from "@/components/call/VoiceCallModal";
import { useAuth } from "@/context/authContext";

/* -------------------------------------------------------------------------- */
/* ✨ Service Progress Stepper Component                                      */
/* -------------------------------------------------------------------------- */
function ServiceProgressStepper({ progress, status }: { progress: number; status: string }) {
  const isCompleted = status === "Completed" || status === "COMPLETED";
  const steps = [
    { label: "Application", threshold: 20 },
    { label: "Doc Review", threshold: 40 },
    { label: "Verification", threshold: 60 },
    { label: "Filing", threshold: 80 },
    { label: "Completed", threshold: 100 },
  ];

  // Calculate current active step index (0 to 4)
  const currentStepIndex = isCompleted
    ? 4
    : Math.min(4, Math.max(0, Math.floor((progress / 100) * 5)));

  return (
    <div className="w-full space-y-3 py-2">
      <div className="relative flex items-center justify-between px-2 sm:px-6">
        {/* Background Track Line */}
        <div className="absolute left-6 right-6 top-3.5 h-[3px] bg-gray-100 rounded-full z-0" />

        {/* Active Fill Track Line */}
        <div
          className="absolute left-6 top-3.5 h-[3px] bg-gradient-to-r from-[#c92c41] to-rose-500 rounded-full z-0 transition-all duration-500"
          style={{
            width: isCompleted
              ? "calc(100% - 3rem)"
              : `calc(${Math.min(100, Math.max(0, (progress / 100) * 100))}% - 3rem)`,
          }}
        />

        {steps.map((step, idx) => {
          const isDone = isCompleted || progress >= step.threshold || idx < currentStepIndex;
          const isCurrent = !isCompleted && idx === currentStepIndex;

          return (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isDone
                    ? "bg-[#c92c41] text-white shadow-sm ring-4 ring-rose-50"
                    : isCurrent
                    ? "bg-white text-[#c92c41] border-2 border-[#c92c41] ring-4 ring-rose-100 scale-110 shadow-sm"
                    : "bg-white text-gray-400 border border-gray-200"
                }`}
              >
                {isDone ? (
                  <Check size={14} className="stroke-[3]" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              <span
                className={`text-[10px] sm:text-xs font-semibold mt-2 text-center whitespace-nowrap transition-colors ${
                  isCurrent
                    ? "text-[#c92c41] font-bold"
                    : isDone
                    ? "text-gray-800 font-medium"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* ✨ Main ActiveServicesTab & Dedicated Workspace Component                  */
/* -------------------------------------------------------------------------- */
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
  const [carouselIndex, setCarouselIndex] = useState(0);

  const userName = user?.name ? user.name.trim() : "User";
  const unreadNotifications = notifications.filter((n) => !n.read);
  const activeServices = services.filter((s) => s.status !== "Completed" && s.status !== "COMPLETED");

  const handlePrevCard = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : activeServices.length - 1));
  };

  const handleNextCard = () => {
    setCarouselIndex((prev) => (prev < activeServices.length - 1 ? prev + 1 : 0));
  };

  /* -------------------------------------------------------------------------- */
  /* 🌟 FULL DEDICATED WORKSPACE PAGE VIEW (When a service is selected)          */
  /* -------------------------------------------------------------------------- */
  if (selectedServiceId) {
    return (
      <div className="space-y-6 font-sans pb-16">
        {/* TOP BAR / BACK NAVIGATION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:px-6 sm:py-4 rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <button
              onClick={closeDetail}
              className="flex items-center gap-2 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition cursor-pointer shadow-xs active:scale-95"
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>

            <div className="h-5 w-[1px] bg-gray-200 hidden sm:block" />

            <div>
              <h1 className="text-lg sm:text-xl font-black text-gray-900 leading-tight">
                {selectedServiceDetail?.name || "Service Workspace"}
              </h1>
              <p className="text-xs text-gray-400 font-medium">
                Service ID: <span className="font-mono text-gray-600">#{selectedServiceId.slice(0, 8)}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-rose-50 text-[#c92c41] border border-rose-100">
              {selectedServiceDetail?.status || "In Progress"}
            </span>
            <button
              onClick={() => startCall("voice")}
              className="px-3.5 py-2 bg-[#c92c41] hover:bg-[#a8233a] text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Phone size={14} />
              <span>Voice Call</span>
            </button>
            <button
              onClick={() => startCall("video")}
              className="px-3.5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Video size={14} />
              <span>Video Call</span>
            </button>
          </div>
        </div>

        {detailLoading || !selectedServiceDetail ? (
          <div className="bg-white rounded-2xl p-20 border border-gray-100 shadow-xs flex flex-col justify-center items-center gap-3">
            <Loader2 className="animate-spin text-[#c92c41]" size={32} />
            <span className="text-xs font-bold text-gray-500">Loading dedicated workspace data...</span>
          </div>
        ) : (
          /* DEDICATED WORKSPACE PAGE LAYOUT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* SECTION 1: SERVICE SUMMARY & PROGRESS DETAILS (3 Cols on Desktop) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Service Summary Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Info size={14} className="text-[#c92c41]" />
                  Service Summary
                </h3>

                <div className="space-y-3 pt-1">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold block uppercase">Category</span>
                    <span className="text-xs font-bold text-gray-900">{selectedServiceDetail.type || "Legal Filing"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold block uppercase">Assigned CA / Expert</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 text-[#c92c41] flex items-center justify-center font-bold text-xs">
                        <ShieldCheck size={14} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-900 block leading-tight">CA Expert Team</span>
                        <span className="text-[9px] text-emerald-600 font-semibold block leading-tight">Assigned & Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Completion Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers size={14} className="text-[#c92c41]" />
                    Overall Progress
                  </h3>
                  <span className="text-sm font-black text-[#c92c41]">{selectedServiceDetail.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-[#c92c41] to-rose-500"
                    style={{ width: `${selectedServiceDetail.progress}%` }}
                  />
                </div>
              </div>

              {/* Stage Timeline Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={14} className="text-[#c92c41]" />
                  Stage Progress
                </h3>

                <div className="space-y-3 relative">
                  {selectedServiceDetail.stages.map((stage, idx) => {
                    let iconBg = "bg-emerald-50 text-emerald-600 border-emerald-100";
                    if (stage.status === "active") {
                      iconBg = "bg-rose-50 text-[#c92c41] border-rose-200 ring-2 ring-rose-50";
                    } else if (stage.status !== "completed") {
                      iconBg = "bg-gray-50 text-gray-300 border-gray-100";
                    }

                    return (
                      <div key={idx} className="flex items-start gap-3 relative z-10">
                        <div className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${iconBg}`}>
                          {stage.status === "completed" ? (
                            <Check size={14} className="stroke-[3]" />
                          ) : stage.status === "active" ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <span className="text-[10px]">{idx + 1}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-900 leading-tight">{stage.name}</p>
                          <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                            {stage.status === "completed"
                              ? "Completed"
                              : stage.status === "active"
                              ? "In Progress • Est 2-3 Days"
                              : "Pending Stage"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 2: DEDICATED LAWIZER CHATTING INTERFACE (5 Cols on Desktop) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-[680px] relative">
                
                {/* Lawizer Brand Header */}
                <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-800 text-white p-4 flex justify-between items-center shadow-md shrink-0 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[#c92c41]/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center gap-3 min-w-0 relative z-10">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c92c41] to-rose-700 text-white flex items-center justify-center font-bold text-sm shadow-md border border-white/10">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-gray-900" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-bold truncate leading-tight">Assigned Legal Expert</h3>
                        <span className="text-[9px] font-extrabold text-[#c92c41] bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                          Verified
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-300 font-medium truncate leading-tight mt-0.5">
                        Lawizer Expert • Active & Online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 text-white/90 relative z-10">
                    <button
                      onClick={() => startCall("voice")}
                      className="p-2 hover:bg-white/10 rounded-xl transition cursor-pointer border border-white/10"
                      title="Voice call"
                    >
                      <Phone size={16} />
                    </button>
                    <button
                      onClick={() => startCall("video")}
                      className="p-2 bg-[#c92c41] hover:bg-[#a8233a] rounded-xl transition cursor-pointer shadow-xs"
                      title="Video call"
                    >
                      <Video size={16} />
                    </button>
                  </div>
                </div>

                {/* Lawizer Message Stream Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50/80 via-slate-50/50 to-white relative">
                  <div className="text-center my-1">
                    <span className="bg-rose-50/80 text-[#c92c41] text-[10px] font-bold px-3 py-1 rounded-full border border-rose-100/80 shadow-2xs inline-flex items-center gap-1.5">
                      <ShieldCheck size={12} />
                      Lawizer Secure & Confidential Channel
                    </span>
                  </div>

                  {chatMessages.length === 0 ? (
                    <div className="p-8 text-center bg-white rounded-2xl max-w-xs mx-auto border border-gray-100 shadow-xs space-y-3 mt-12">
                      <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 text-[#c92c41] flex items-center justify-center mx-auto shadow-2xs">
                        <MessageSquare size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Start Lawizer Workspace Chat</p>
                        <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                          Direct real-time consultation with your assigned CA / legal team for filings, documents & stage updates.
                        </p>
                      </div>
                    </div>
                  ) : (
                    chatMessages.map((msg, idx) => {
                      const isUser = msg.sender === "user";
                      return (
                        <div
                          key={idx}
                          className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                        >
                          <div
                            className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed relative ${
                              isUser
                                ? "bg-[#c92c41] text-white rounded-tr-none shadow-md shadow-rose-900/10"
                                : "bg-white text-gray-900 rounded-tl-none border border-gray-100 shadow-2xs"
                            }`}
                          >
                            {!isUser && (
                              <span className="text-[9px] font-bold text-[#c92c41] block mb-1 uppercase tracking-wider">
                                CA Expert
                              </span>
                            )}
                            <p className="whitespace-pre-wrap font-sans">{msg.text}</p>
                            <div
                              className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                                isUser ? "text-rose-100 font-medium" : "text-gray-400"
                              }`}
                            >
                              <span>{msg.time || "Just now"}</span>
                              {isUser && <CheckCircle2 size={10} className="text-white shrink-0" />}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Lawizer Input Bar */}
                <form
                  onSubmit={handleSendMessage}
                  className="bg-white p-3 border-t border-gray-100 flex items-center gap-2.5 shrink-0 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedServiceDetail?.documents?.pending?.[0]) {
                        handleUploadClick(selectedServiceDetail.documents.pending[0].key);
                      }
                    }}
                    className="p-2.5 text-[#c92c41] bg-rose-50 hover:bg-rose-100 rounded-xl transition cursor-pointer shrink-0 border border-rose-100"
                    title="Attach Document"
                  >
                    <Paperclip size={16} />
                  </button>

                  <input
                    type="text"
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                    placeholder="Type a message to your CA..."
                    className="flex-1 bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-2.5 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-[#c92c41]/20 focus:border-[#c92c41] focus:bg-white transition"
                  />

                  <button
                    type="submit"
                    disabled={!typedMessage.trim()}
                    className="w-10 h-10 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-gray-200 disabled:text-gray-400 text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-md hover:shadow-rose-900/20 active:scale-95"
                    aria-label="Send Message"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>

            {/* SECTION 3: ONE PLACE TO UPLOAD & MANAGE DOCUMENTS (4 Cols on Desktop) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* PENDING UPLOADS (DROPZONE & UPLOAD HUB) */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Upload size={14} className="text-[#c92c41]" />
                    Upload Pending Documents
                  </h3>
                  {selectedServiceDetail.documents.pending.length > 0 && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      {selectedServiceDetail.documents.pending.length} Required
                    </span>
                  )}
                </div>

                {selectedServiceDetail.documents.pending.length === 0 ? (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold border border-emerald-100">
                    <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
                    <div>
                      <span>All documents uploaded!</span>
                      <p className="text-[10px] font-normal text-emerald-600 mt-0.5">Your files are undergoing verification.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedServiceDetail.documents.pending.map((doc, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-dashed border-rose-200 bg-rose-50/30 flex justify-between items-center gap-3 hover:bg-rose-50/60 transition"
                      >
                        <div>
                          <span className="text-xs font-bold text-gray-900 block">{doc.name}</span>
                          <span className="text-[10px] text-gray-400 block mt-0.5">Format: PDF, JPG, PNG (Max 10MB)</span>
                        </div>
                        <button
                          onClick={() => handleUploadClick(doc.key)}
                          disabled={uploadingDocName === doc.key}
                          className="px-3.5 py-2 bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-red-300 text-white text-xs font-bold rounded-xl transition cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5"
                        >
                          {uploadingDocName === doc.key ? (
                            <>
                              <Loader2 size={12} className="animate-spin" />
                              <span>Uploading...</span>
                            </>
                          ) : (
                            <>
                              <Upload size={12} />
                              <span>Upload</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* VERIFIED / SUBMITTED DOCUMENTS VAULT */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck size={14} className="text-[#c92c41]" />
                  Submitted Document Vault
                </h3>

                {selectedServiceDetail.documents.submitted.length === 0 ? (
                  <p className="text-xs text-gray-400 italic bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                    No verified documents uploaded yet.
                  </p>
                ) : (
                  <div className="space-y-2.5">
                    {selectedServiceDetail.documents.submitted.map((doc, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-gray-100 hover:border-gray-200 bg-white flex justify-between items-center gap-3 transition shadow-2xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold text-xs shrink-0">
                            <CheckCircle2 size={16} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-gray-900 truncate block">{doc.name}</span>
                            <span className="text-[10px] text-emerald-600 font-semibold block">Verified Document</span>
                          </div>
                        </div>

                        {doc.fileUrl && (
                          <a
                            href={doc.fileUrl}
                            download
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-lg transition shrink-0 flex items-center gap-1"
                          >
                            <Download size={12} />
                            <span>Download</span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* Realtime Call Modal */}
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

  /* -------------------------------------------------------------------------- */
  /* 🌟 MAIN DASHBOARD VIEW (Active Services Carousel & Widgets)               */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="space-y-8 font-sans pb-12">
      {/* HERO / WELCOME HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Background decorative orb */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#c92c41]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/3 top-0 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-md border border-white/10 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active Workspace
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome back, {userName}!
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
            Monitor ongoing legal services, document reviews, compliance filings, and consult directly with your assigned experts.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 shrink-0">
          <button
            onClick={() => router.push("/user/dashboard?tab=book")}
            className="px-5 py-3 bg-[#c92c41] hover:bg-[#a8233a] text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-rose-900/30 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Book New Service</span>
          </button>
        </div>
      </div>

      {/* DASHBOARD CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: ACTIVE SERVICES (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Layers size={20} className="text-[#c92c41]" />
                Active Services
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Ongoing legal operations, status tracking & document workflows
              </p>
            </div>
            <div className="flex items-center gap-3">
              {activeServices.length > 0 && (
                <span className="text-xs font-bold text-[#c92c41] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                  {activeServices.length} Active
                </span>
              )}
              {activeServices.length > 1 && (
                <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-xl border border-gray-200/60">
                  <button
                    onClick={handlePrevCard}
                    className="p-1 rounded-lg hover:bg-white hover:shadow-xs text-gray-600 hover:text-[#c92c41] transition cursor-pointer"
                    title="Previous service"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-[11px] font-bold text-gray-600 px-1 font-mono">
                    {carouselIndex + 1}/{activeServices.length}
                  </span>
                  <button
                    onClick={handleNextCard}
                    className="p-1 rounded-lg hover:bg-white hover:shadow-xs text-gray-600 hover:text-[#c92c41] transition cursor-pointer"
                    title="Next service"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-xs flex flex-col justify-center items-center gap-3">
              <Loader2 className="animate-spin text-[#c92c41]" size={28} />
              <span className="text-xs text-gray-500 font-semibold">Loading your active services...</span>
            </div>
          ) : activeServices.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#c92c41] flex items-center justify-center mx-auto">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">No active services found</p>
                <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                  You don't have any ongoing legal processes. Book a new service to track progress here in real-time.
                </p>
              </div>
              <button
                onClick={() => router.push("/user/dashboard?tab=book")}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#c92c41] text-white text-xs font-bold rounded-xl hover:bg-[#a8233a] transition cursor-pointer"
              >
                Explore Services →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeServices.map((s, idx) => {
                    if (idx !== carouselIndex) return null;

                    let pillClasses = "bg-amber-50 text-amber-700 border-amber-200/60";
                    if (s.status === "In Progress") {
                      pillClasses = "bg-rose-50 text-[#c92c41] border-rose-200/60";
                    } else if (s.status === "Docs Pending") {
                      pillClasses = "bg-amber-50 text-amber-700 border-amber-200/60";
                    } else {
                      pillClasses = "bg-blue-50 text-blue-700 border-blue-200/60";
                    }

                    return (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-rose-100 transition-all"
                      >
                        {/* Top Header */}
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 leading-snug">{s.name}</h3>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">
                              ID: <span className="font-mono text-gray-600">#{s.id.slice(0, 8)}</span>
                            </p>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full font-bold border ${pillClasses} shrink-0`}>
                            {s.status}
                          </span>
                        </div>

                        {/* Stepper Progress */}
                        <div className="pt-2">
                          <ServiceProgressStepper progress={s.progress || 20} status={s.status} />
                        </div>

                        {/* Footer Actions & Expert Tag */}
                        <div className="flex flex-wrap justify-between items-center pt-3 border-t border-gray-100 gap-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-[#c92c41] flex-shrink-0 font-bold text-xs">
                              <ShieldCheck size={16} />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-gray-900 block leading-tight">CA / Legal Expert</span>
                              <span className="text-[10px] text-emerald-600 font-semibold block leading-tight">Assigned & Active</span>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              openDetail(s.id);
                            }}
                            className="bg-[#c92c41] hover:bg-[#a8233a] text-white text-xs px-4 py-2.5 rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                          >
                            <span>View Workspace</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Bottom Dot Indicators */}
              {activeServices.length > 1 && (
                <div className="flex justify-center items-center gap-2 pt-2">
                  {activeServices.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === carouselIndex
                          ? "w-7 bg-[#c92c41]"
                          : "w-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to service card ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT: NOTIFICATIONS / YOUR UPDATES (1 Col) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Bell size={20} className="text-[#c92c41]" />
              Notifications
            </h2>
            {unreadNotifications.length > 0 && (
              <button
                onClick={dismissAllNotifications}
                className="text-xs font-bold text-[#c92c41] hover:underline cursor-pointer"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]/80">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <span>Recent Activity Updates</span>
              </div>
              {unreadNotifications.length > 0 && (
                <span className="bg-[#c92c41] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {unreadNotifications.length}
                </span>
              )}
            </div>

            <div className="divide-y divide-gray-100 max-h-[420px] overflow-y-auto">
              <AnimatePresence initial={false}>
                {unreadNotifications.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 text-center flex flex-col items-center justify-center gap-3 text-gray-400"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 border border-gray-100">
                      <Bell size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-700">You're all caught up!</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">No pending notifications at this time.</p>
                    </div>
                  </motion.div>
                ) : (
                  unreadNotifications.map((notif) => (
                    <motion.div
                      key={notif.notificationId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      onClick={async () => {
                        await dismissNotification(notif.notificationId);
                        if (notif.serviceId) {
                          void openDetail(notif.serviceId);
                        }
                      }}
                      className="p-4 flex gap-3 items-start hover:bg-rose-50/40 cursor-pointer transition relative group"
                    >
                      <div className="p-2 rounded-xl bg-rose-50 border border-rose-100 text-[#c92c41] shrink-0 mt-0.5">
                        {notif.type === "document" && <FileText size={14} className="text-blue-500" />}
                        {notif.type === "service" && <Clock size={14} className="text-green-500" />}
                        {notif.type === "message" && <MessageSquare size={14} className="text-[#c92c41]" />}
                        {notif.type === "payment" && <CreditCard size={14} className="text-amber-500" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-900 truncate leading-snug">{notif.title}</p>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{notif.message}</p>
                        <span className="text-[9px] text-gray-400 font-semibold block mt-1">
                          {notif.createdAt || "Just now"}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT DOCUMENTS & QUICK ACTIONS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* RECENT DOCUMENTS */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <FileText size={18} className="text-[#c92c41]" />
              Recent Documents
            </h3>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-2 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50/80 rounded-xl transition cursor-pointer border border-transparent hover:border-gray-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#c92c41] font-extrabold text-[11px] shrink-0">
                  PDF
                </div>
                <div>
                  <p className="font-bold text-xs text-gray-900">Aadhaar Card / Identity Proof</p>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-0.5">
                    <CheckCircle2 size={12} /> Verified & Secured
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-lg">Uploaded</span>
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-gray-50/80 rounded-xl transition cursor-pointer border border-transparent hover:border-gray-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-extrabold text-[11px] shrink-0">
                  DOC
                </div>
                <div>
                  <p className="font-bold text-xs text-gray-900">PAN Card Director / Entity</p>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-0.5">
                    <CheckCircle2 size={12} /> Verified & Secured
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-lg">Uploaded</span>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Sparkles size={18} className="text-[#c92c41]" />
            Quick Shortcuts
          </h3>

          <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => router.push("/user/dashboard?tab=book")}
                className="flex items-center gap-3 p-3.5 bg-rose-50/60 hover:bg-rose-100/60 border border-rose-100/80 rounded-xl transition text-left cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-lg text-[#c92c41] shadow-2xs group-hover:scale-105 transition">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="font-bold text-xs text-gray-900 block">Book Service</span>
                  <span className="text-[10px] text-gray-500 font-medium block">Explore offerings</span>
                </div>
              </button>

              <button
                onClick={() => router.push("/user/dashboard?tab=consultations")}
                className="flex items-center gap-3 p-3.5 bg-blue-50/60 hover:bg-blue-100/60 border border-blue-100/80 rounded-xl transition text-left cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-lg text-blue-600 shadow-2xs group-hover:scale-105 transition">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="font-bold text-xs text-gray-900 block">Consultations</span>
                  <span className="text-[10px] text-gray-500 font-medium block">View sessions</span>
                </div>
              </button>

              <button
                onClick={() => router.push("/user/dashboard?tab=transactions")}
                className="flex items-center gap-3 p-3.5 bg-amber-50/60 hover:bg-amber-100/60 border border-amber-100/80 rounded-xl transition text-left cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-lg text-amber-600 shadow-2xs group-hover:scale-105 transition">
                  <Receipt size={18} />
                </div>
                <div>
                  <span className="font-bold text-xs text-gray-900 block">Transactions</span>
                  <span className="text-[10px] text-gray-500 font-medium block">Billing & receipts</span>
                </div>
              </button>

              <button
                onClick={() => {
                  if (services.length > 0) {
                    openDetail(services[0].id);
                  } else {
                    router.push("/user/dashboard?tab=consultations");
                  }
                }}
                className="flex items-center gap-3 p-3.5 bg-emerald-50/60 hover:bg-emerald-100/60 border border-emerald-100/80 rounded-xl transition text-left cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-lg text-emerald-600 shadow-2xs group-hover:scale-105 transition">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="font-bold text-xs text-gray-900 block">Contact Expert</span>
                  <span className="text-[10px] text-gray-500 font-medium block">Direct assistance</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Realtime Call Modal */}
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
