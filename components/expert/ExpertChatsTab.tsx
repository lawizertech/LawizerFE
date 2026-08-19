"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  Scale,
  User,
  Upload,
  Trash2,
  Download,
  FileCheck,
  Loader2,
  FileText,
  MessageSquare,
  Bell,
  Send,
  ArrowLeft,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/context/authContext";
import { ChatEngine } from "@/components/chat/ChatEngine";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { getAccessToken } from "@/lib/auth/tokenStore";

interface CaseChatItem {
  caseId: string;
  clientId?: string;
  clientName: string;
  caseTitle: string;
  lastMessage?: string;
  updatedAt?: string;
  status?: string;
}

interface CaseDoc {
  id: string;
  caseId: string;
  name: string;
  fileUrl: string;
  fileType?: string;
  sizeBytes?: number;
  createdAt?: string;
}

export default function ExpertChatsTab() {
  const { user } = useAuth();
  const [chatRooms, setChatRooms] = useState<CaseChatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState<CaseChatItem | null>(null);

  // Active view tab inside selected chat window: "chat" | "docs" | "notifications"
  const [activeTab, setActiveTab] = useState<"chat" | "docs" | "notifications">("chat");
  const [caseDocs, setCaseDocs] = useState<CaseDoc[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notifInput, setNotifInput] = useState("");
  const [notifLoading, setNotifLoading] = useState(false);
  const [docsLoading, setDocsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "in_progress" | "completed">("all");
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const supabase = createClient();
  const effectiveProfId = user?.uid || null;

  // 1. Fetch Expert Assigned Cases
  useEffect(() => {
    if (!effectiveProfId) return;
    const loadProfChats = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/chat/expert-rooms?profId=${effectiveProfId}`);
        const data = await res.json();

        let mappedRooms: CaseChatItem[] = [];
        if (data.success && Array.isArray(data.rooms)) {
          mappedRooms = data.rooms;
          
          if (mappedRooms.length > 0) {
            const caseIds = mappedRooms.map((r) => r.caseId);
            const { data: casesStatusData, error: statusError } = await supabase
              .from("cases")
              .select("id, status")
              .in("id", caseIds);

            if (!statusError && casesStatusData) {
              const statusMap = new Map(casesStatusData.map((c) => [c.id, c.status]));
              mappedRooms = mappedRooms.map((room) => ({
                ...room,
                status: statusMap.get(room.caseId) || undefined,
              }));
            } else {
              console.error("Failed to load case statuses from client supabase:", statusError);
            }
          }
        }

        setChatRooms(mappedRooms);
        setSelectedChat((prev) => {
          if (!prev) {
            return mappedRooms[0] || null;
          }
          const freshRoom = mappedRooms.find((r) => r.caseId === prev.caseId);
          return freshRoom || prev;
        });
      } catch (err) {
        console.error("Failed to load professional chats:", err);
      } finally {
        setLoading(false);
      }
    };

    void loadProfChats();

    const casesChannel = supabase
      .channel("prof_cases_channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cases" },
        () => {
          console.log("[Realtime] Case assignment changed, reloading expert chats...");
          void loadProfChats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(casesChannel);
    };
  }, [effectiveProfId]);

  // 2. Load Documents for selected case
  const loadCaseDocs = async (caseId: string) => {
    setDocsLoading(true);
    try {
      if (activeTab === "docs") {
        try {
          const res = await fetch(`/api/documents?caseId=${caseId}`);
          const data = await res.json();
          if (data.success && Array.isArray(data.documents)) {
            setCaseDocs(data.documents);
          }
        } catch (err) {
          console.error("Fetch docs error:", err);
        }
      } else if (activeTab === "notifications") {
        try {
          const token = getAccessToken();
          const headers: Record<string, string> = {};
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
          const res = await fetch(`/api/cases/${caseId}/notifications/user`, { headers });
          const data = await res.json();
          if (Array.isArray(data)) {
            setNotifications(data);
          } else {
            setNotifications([]);
          }
        } catch (err) {
          console.error("Fetch notifications error:", err);
        }
      }
    } finally {
      setDocsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedChat?.caseId) {
      void loadCaseDocs(selectedChat.caseId);
    }
  }, [selectedChat?.caseId, activeTab]);

  // 3. Handle Expert Upload Document
  const handleExpertUpload = () => {
    if (!selectedChat) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        setUploading(true);
        const token = getAccessToken();
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        // 1. Get Cloudinary Signature
        const sigRes = await fetch("/api/documents/cloudinary-signature", {
          method: "POST",
          headers,
          body: JSON.stringify({ caseId: selectedChat.caseId }),
        });
        if (!sigRes.ok) {
          const err = await sigRes.json().catch(() => null);
          throw new Error(err?.message || "Failed to fetch upload signature");
        }
        const sigData = await sigRes.json();

        const cloudName = sigData.cloudName || "q1n6i5c4";
        const apiKey = sigData.apiKey || "969715443973461";
        const uploadUrl = sigData.uploadUrl && !sigData.uploadUrl.includes("/undefined/")
          ? sigData.uploadUrl
          : `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

        // 2. Upload file directly to Cloudinary
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", apiKey);
        formData.append("timestamp", sigData.timestamp.toString());
        formData.append("signature", sigData.signature);
        if (sigData.folder) formData.append("folder", sigData.folder);

        const cloudinaryRes = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        if (!cloudinaryRes.ok) {
          const cErr = await cloudinaryRes.json().catch(() => null);
          throw new Error(cErr?.error?.message || "Failed to upload to Cloudinary");
        }
        const uploadResult = await cloudinaryRes.json();

        // 3. Save the document record
        const saveRes = await fetch("/api/documents/upload", {
          method: "POST",
          headers,
          body: JSON.stringify({
            caseId: selectedChat.caseId,
            filename: file.name,
            fileType: file.type || "application/octet-stream",
            storagePath: uploadResult.secure_url,
            sizeBytes: file.size,
          }),
        });

        if (!saveRes.ok) {
          const err = await saveRes.json().catch(() => null);
          throw new Error(err?.message || "Failed to save document record");
        }

        await loadCaseDocs(selectedChat.caseId);

      } catch (err: any) {
        console.error("Expert upload error:", err);
        alert(err.message || "Upload failed");
      } finally {
        setUploading(false);
      }
    };
    input.click();
  };

  // 4. Handle Expert Delete Document
  const handleExpertDelete = async (docId: string) => {
    if (!selectedChat) return;
    if (!confirm("Are you sure you want to delete this document?")) return;

    try {
      const token = getAccessToken();
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/documents/${docId}`, {
        method: "DELETE",
        headers,
      });
      const data = await res.json();
      if (data.success) {
        setCaseDocs((prev) => prev.filter((d) => d.id !== docId));
      } else {
        alert(data.message || "Failed to delete document");
      }
    } catch (err: any) {
      console.error("Delete document error:", err);
      alert(err.message || "Delete failed");
    }
  };

  const handleSendNotification = async () => {
    if (!notifInput.trim() || !selectedChat) return false;
    setNotifLoading(true);
    try {
      const token = getAccessToken();
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/cases/${selectedChat.caseId}/notifications/expert/send-to-admin`, {
        method: "POST",
        headers,
        body: JSON.stringify({ payload: { message: notifInput.trim() } })
      });
      const data = await res.json();
      if (res.ok) {
        const sentMsg = notifInput.trim();
        setNotifInput("");
        setNotifications([{
          id: Math.random().toString(),
          type: "expert_message",
          payload: { message: sentMsg },
          created_at: new Date().toISOString()
        }, ...notifications]);
        return true;
      } else {
        alert(data.message || "Failed to send notification");
        return false;
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send notification");
      return false;
    } finally {
      setNotifLoading(false);
    }
  };

  if (!effectiveProfId) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-sans">
        <Scale className="text-gray-300 mb-2" size={32} />
        <p className="text-xs font-semibold">Please sign in as a professional to access client channels.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-sans">
        <Scale className="animate-pulse text-[#c92c41] mb-2" size={32} />
        <p className="text-xs font-semibold">Loading client litigation channels...</p>
      </div>
    );
  }

  // Filter and search chat rooms locally
  const filteredChatRooms = chatRooms.filter((room) => {
    const matchesSearch =
      room.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.caseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.caseId.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (statusFilter === "all") return true;
    
    const roomStatus = (room.status || "").toLowerCase();
    if (statusFilter === "in_progress") {
      return (
        roomStatus === "in_progress" ||
        roomStatus === "created" ||
        roomStatus === "active"
      );
    }
    if (statusFilter === "completed") {
      return roomStatus === "completed";
    }

    return true;
  });

  return (
    <div className="space-y-6 font-sans pb-10">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle size={22} className="text-[#c92c41]" />
            Client Litigation Channels
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time consultation and case management channels with your assigned clients.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Client Case List */}
        <div className={`lg:col-span-4 space-y-4 ${selectedChat ? "hidden lg:block" : "block"}`}>
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Assigned Clients & Cases
            </h2>
            {filteredChatRooms.length !== chatRooms.length && (
              <span className="text-[10px] font-semibold text-gray-400">
                ({filteredChatRooms.length} of {chatRooms.length})
              </span>
            )}
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client or case..."
              className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-xs text-gray-950 outline-none focus:border-[#d62038] focus:ring-1 focus:ring-[#d62038]/10 shadow-3xs"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-gray-50 rounded-xl border border-gray-200">
            <button
              onClick={() => setStatusFilter("all")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center transition cursor-pointer active:scale-95 ${
                statusFilter === "all"
                  ? "bg-white text-gray-900 shadow-2xs border border-gray-150"
                  : "text-gray-500 hover:text-gray-955"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter("in_progress")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center transition cursor-pointer active:scale-95 ${
                statusFilter === "in_progress"
                  ? "bg-white text-gray-900 shadow-2xs border border-gray-150"
                  : "text-gray-500 hover:text-gray-955"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setStatusFilter("completed")}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center transition cursor-pointer active:scale-95 ${
                statusFilter === "completed"
                  ? "bg-white text-gray-900 shadow-2xs border border-gray-150"
                  : "text-gray-500 hover:text-gray-955"
              }`}
            >
              Completed
            </button>
            <button
              disabled
              title="Placeholder UI element (Action Required definition pending)"
              className="flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center text-gray-300 cursor-not-allowed opacity-50 font-sans"
            >
              Action Req.
            </button>
          </div>

          <div className="space-y-2.5 overflow-y-auto max-h-[600px] pr-1">
            {filteredChatRooms.length === 0 ? (
              <div className="p-8 text-center bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-400 shadow-3xs">
                No matching cases found
              </div>
            ) : (
              filteredChatRooms.map((room) => {
                const isSelected = selectedChat?.caseId === room.caseId;
                return (
                  <div
                    key={room.caseId}
                    onClick={() => {
                      setSelectedChat(room);
                      setActiveTab("chat");
                    }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? "bg-rose-50/70 border-[#c92c41] shadow-xs"
                        : "bg-white border-gray-200/80 hover:border-gray-300 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? "bg-[#c92c41] text-white shadow-xs"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <User size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p className="font-bold text-xs text-gray-900 truncate">
                            {room.clientName}
                          </p>
                          <span className="text-[10px] text-gray-400 shrink-0 font-mono">
                            #{room.caseId.slice(0, 5)}
                          </span>
                        </div>
                        <p className="text-[11px] font-semibold text-[#c92c41] truncate mt-0.5">
                          {room.caseTitle}
                        </p>
                        <div className="flex items-center justify-between gap-2 mt-1">
                          <p className="text-[11px] text-gray-400 truncate flex-1">
                            {room.lastMessage}
                          </p>
                          {room.status && (
                            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-slate-50 border border-gray-200/60 text-gray-500 capitalize shrink-0">
                              {room.status === "active" ? "Active" : room.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Case Workspace */}
        <div className={`lg:col-span-8 h-[calc(100dvh-130px)] sm:h-[650px] md:h-[700px] flex flex-col ${selectedChat ? "block" : "hidden lg:block"}`}>
          {selectedChat ? (
            <div className="bg-white rounded-2xl border border-gray-250/80 shadow-sm h-full flex flex-col overflow-hidden">
              {/* Case Workspace Inner Header */}
              <div className="px-6 py-4 border-b border-gray-100 bg-[#fafafa] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedChat(null)}
                      className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition active:scale-95 cursor-pointer"
                      aria-label="Back to Case List"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-200/60 px-2 py-0.5 rounded border border-gray-200/80">
                      #{selectedChat.caseId.substring(0, 8).toUpperCase()}
                    </span>
                    {selectedChat.status && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/80 capitalize">
                        {selectedChat.status === "active" ? "Active" : selectedChat.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 truncate">
                    {selectedChat.clientName}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-medium truncate">
                    {selectedChat.caseTitle}
                  </p>
                </div>

                {/* Segmented Controller (Tab Switcher) */}
                <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200 self-start sm:self-center">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                      activeTab === "chat"
                        ? "bg-[#d62038] text-white shadow-xs"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <MessageSquare size={13} />
                    <span>Live Chat</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("docs")}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                      activeTab === "docs"
                        ? "bg-[#d62038] text-white shadow-xs"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <FileText size={13} />
                    <span>Docs ({caseDocs.length})</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                      activeTab === "notifications"
                        ? "bg-[#d62038] text-white shadow-xs"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Bell size={13} />
                    <span>Alerts</span>
                  </button>
                </div>
              </div>

              {/* Case Workspace Panel Body */}
              <div className="flex-1 overflow-hidden min-h-0 bg-white">
                {activeTab === "chat" ? (
                  <ErrorBoundary>
                    <ChatEngine
                      key={selectedChat.caseId}
                      caseId={selectedChat.caseId}
                      currentUserId={effectiveProfId}
                      peerId={selectedChat.clientId}
                      senderRole="professional"
                      professionalName={selectedChat.clientName}
                      caseTitle={selectedChat.caseTitle}
                      onClose={() => setSelectedChat(null)}
                    />
                  </ErrorBoundary>
                ) : activeTab === "docs" ? (
                  /* Case Documents View for Experts */
                  <div className="h-full flex flex-col p-6 space-y-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div>
                        <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                          <FileText size={20} className="text-[#d62038]" />
                          Case Documents & Filings
                        </h2>
                        <p className="text-xs text-gray-500">
                          Legal filings, records, and files uploaded for this case
                        </p>
                      </div>

                      <button
                        onClick={handleExpertUpload}
                        disabled={uploading}
                        className="px-4 py-2 bg-[#d62038] hover:bg-[#b0162a] disabled:bg-[#d62038]/40 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        {uploading ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <Upload size={14} />
                        )}
                        <span>{uploading ? "Uploading..." : "Upload Document"}</span>
                      </button>
                    </div>

                    {/* Document List */}
                    <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                      {docsLoading ? (
                        <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                          <Loader2 size={24} className="animate-spin text-[#d62038] mb-2" />
                          <span className="text-xs font-semibold">Loading case documents...</span>
                        </div>
                      ) : caseDocs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center p-6 bg-slate-50/50 rounded-2xl border border-dashed border-gray-200">
                          <FileText size={32} className="text-gray-300 mb-2" />
                          <p className="text-xs font-bold text-gray-700">No documents uploaded for this case</p>
                          <p className="text-[11px] text-gray-400 max-w-xs mt-1">
                            Click "Upload Document" to attach legal reports, filings, or compliance notices.
                          </p>
                        </div>
                      ) : (
                        caseDocs.map((doc) => (
                          <div
                            key={doc.id}
                            className="p-4 rounded-2xl border border-gray-200/80 hover:border-gray-300 bg-white flex items-center justify-between gap-4 transition-all duration-150 shadow-2xs"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#d62038] border border-rose-100 flex items-center justify-center font-bold text-xs shrink-0">
                                <FileText size={18} />
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-xs text-gray-900 truncate">{doc.name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <p className="text-[10px] text-gray-400 font-mono">
                                    {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString("en-IN") : "Uploaded"}
                                  </p>
                                  {doc.sizeBytes && (
                                    <>
                                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                                      <p className="text-[10px] text-gray-400 font-mono">
                                        {(doc.sizeBytes / 1024).toFixed(1)} KB
                                      </p>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {doc.fileUrl && (
                                <a
                                  href={doc.fileUrl}
                                  download
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-3 py-1.5 bg-slate-100 hover:bg-[#d62038] hover:text-white text-slate-800 text-xs font-bold rounded-xl transition duration-150 flex items-center gap-1 cursor-pointer active:scale-95"
                                >
                                  <Download size={13} />
                                  <span>Download</span>
                                </a>
                              )}
                              <button
                                onClick={() => handleExpertDelete(doc.id)}
                                className="p-2 bg-rose-50 hover:bg-rose-600 text-[#d62038] hover:text-white rounded-xl transition duration-150 border border-rose-100 hover:border-rose-600 cursor-pointer active:scale-95"
                                title="Delete document"
                                aria-label="Delete document"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ) : (
                  /* Case Notifications View for Experts */
                  <div className="h-full flex flex-col p-6 space-y-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div>
                        <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                          <Bell size={20} className="text-[#d62038]" />
                          Case Notifications
                        </h2>
                        <p className="text-xs text-gray-500">
                          Direct logging alerts and professional communications for this case
                        </p>
                      </div>

                      <button
                        onClick={() => setIsAdminModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
                      >
                        <Send size={13} />
                        <span>Send Alert to Admin</span>
                      </button>
                    </div>

                    {/* Notifications List */}
                    <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                      {docsLoading ? (
                        <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                          <Loader2 size={24} className="animate-spin text-[#d62038] mb-2" />
                          <span className="text-xs font-semibold">Loading notifications...</span>
                        </div>
                      ) : notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-48 text-center p-6 bg-slate-50/50 rounded-2xl border border-dashed border-gray-200">
                          <Bell size={32} className="text-gray-300 mb-2" />
                          <p className="text-xs font-bold text-gray-700">No notifications found for this case</p>
                        </div>
                      ) : (
                        <div className="space-y-3.5">
                          {notifications.map((notif: any) => (
                            <div
                              key={notif.id}
                              className="bg-[#fafafa] border border-gray-200/80 hover:border-gray-300 rounded-2xl p-4 transition duration-150 shadow-2xs"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <h3 className="text-gray-950 font-bold text-xs">
                                  {notif.payload?.title || "Direct Update"}
                                </h3>
                                <span className="text-[9px] font-mono font-bold text-gray-500 shrink-0 bg-gray-100 border border-gray-200/60 px-2 py-0.5 rounded">
                                  {notif.type}
                                </span>
                              </div>
                              <p className="text-gray-600 text-xs mt-2 leading-relaxed font-medium">
                                {notif.payload?.message}
                              </p>
                              <div className="text-gray-450 text-[10px] mt-3 text-right font-semibold">
                                {new Date(notif.created_at).toLocaleString("en-IN")}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200/80 h-full flex flex-col items-center justify-center p-8 text-center shadow-xs">
              <MessageCircle size={32} className="text-gray-300 mb-2" />
              <p className="text-xs font-bold text-gray-500">Select a case channel from the list to open the workspace</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal / Dialog Overlay */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 transition-all duration-200">
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xl max-w-md w-full overflow-hidden transition-all duration-200 scale-100">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h3 className="text-xs font-bold text-gray-950 flex items-center gap-1.5 uppercase tracking-wider">
                <Send size={14} className="text-blue-600" />
                Send Alert to Admin
              </h3>
              <button
                onClick={() => {
                  setIsAdminModalOpen(false);
                  setNotifInput("");
                }}
                className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-400 hover:text-gray-600 transition text-lg font-bold leading-none cursor-pointer"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="p-6 space-y-4 font-sans">
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                This message will be dispatched directly to the admin dashboard logs for Case <span className="font-bold font-mono text-[#d62038]">#{selectedChat?.caseId.substring(0, 8).toUpperCase()}</span>.
              </p>
              <textarea
                value={notifInput}
                onChange={(e) => setNotifInput(e.target.value)}
                placeholder="Type a notification message to admin..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 outline-none focus:border-[#d62038] focus:ring-1 focus:ring-[#d62038]/10 h-28 resize-none font-sans font-medium"
                disabled={notifLoading}
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setIsAdminModalOpen(false);
                    setNotifInput("");
                  }}
                  disabled={notifLoading}
                  className="px-4 py-2 border border-gray-200 text-gray-600 text-xs font-bold rounded-xl transition hover:bg-gray-50 cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    const success = await handleSendNotification();
                    if (success) {
                      setIsAdminModalOpen(false);
                    }
                  }}
                  disabled={notifLoading || !notifInput.trim()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition duration-150 shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  {notifLoading ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
                  <span>Send Alert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
