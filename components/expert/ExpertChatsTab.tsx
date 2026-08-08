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
        }

        setChatRooms(mappedRooms);
        if (mappedRooms.length > 0) {
          setSelectedChat((prev) => prev || mappedRooms[0]);
        }
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
      const res = await fetch(`/api/documents/${docId}`, { method: "DELETE" });
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
    if (!notifInput.trim() || !selectedChat) return;
    setNotifLoading(true);
    try {
      const res = await fetch(`/api/cases/${selectedChat.caseId}/notifications/expert/send-to-admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: { message: notifInput.trim() } })
      });
      const data = await res.json();
      if (res.ok) {
        setNotifInput("");
        setNotifications([{
          id: Math.random().toString(),
          type: "expert_message",
          payload: { message: notifInput.trim() },
          created_at: new Date().toISOString()
        }, ...notifications]);
      } else {
        alert(data.message || "Failed to send notification");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send notification");
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

        {selectedChat && (
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === "chat"
                  ? "bg-[#c92c41] text-white shadow-xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              💬 Live Chat
            </button>
            <button
              onClick={() => setActiveTab("docs")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === "docs"
                  ? "bg-[#c92c41] text-white shadow-xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📁 Documents ({caseDocs.length})
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === "notifications"
                  ? "bg-[#c92c41] text-white shadow-xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🔔 Notifications
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Client Case List */}
        <div className={`lg:col-span-4 space-y-3 ${selectedChat ? "hidden lg:block" : "block"}`}>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
            Assigned Clients & Cases
          </h2>

          <div className="space-y-2.5">
            {chatRooms.map((room) => {
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
                      <p className="text-[11px] text-gray-400 truncate mt-1">
                        {room.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Embedded Real-time ChatEngine OR Case Documents */}
        <div className={`lg:col-span-8 h-[calc(100dvh-130px)] sm:h-[650px] md:h-[700px] ${selectedChat ? "block" : "hidden lg:block"}`}>
          {selectedChat ? (
            activeTab === "chat" ? (
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
            ) : (
              /* Case Documents Management View for Experts */
              <div className="bg-white rounded-2xl border border-gray-200/80 h-full flex flex-col p-6 space-y-6 overflow-y-auto shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                      <FileCheck size={20} className="text-[#c92c41]" />
                      Case Documents & Filings
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Client: <span className="font-bold text-gray-800">{selectedChat.clientName}</span> — Case #{selectedChat.caseId.slice(0, 8)}
                    </p>
                  </div>

                  <button
                    onClick={handleExpertUpload}
                    disabled={uploading}
                    className="px-4 py-2 bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-rose-300 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
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
                <div className="flex-1 space-y-3 overflow-y-auto">
                  {docsLoading ? (
                    <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                      <Loader2 size={24} className="animate-spin text-[#c92c41] mb-2" />
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
                        className="p-4 rounded-2xl border border-gray-200/80 hover:border-gray-300 bg-white flex items-center justify-between gap-4 transition shadow-2xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#c92c41] border border-rose-100 flex items-center justify-center font-bold text-xs shrink-0">
                            <FileText size={18} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-xs text-gray-900 truncate">{doc.name}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5 font-mono">
                              {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString("en-IN") : "Uploaded"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {doc.fileUrl && (
                            <a
                              href={doc.fileUrl}
                              download
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1"
                            >
                              <Download size={13} />
                              <span>Download</span>
                            </a>
                          )}
                          <button
                            onClick={() => handleExpertDelete(doc.id)}
                            className="p-2 bg-rose-50 hover:bg-rose-100 text-[#c92c41] rounded-xl transition border border-rose-100 cursor-pointer"
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
            )
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200/80 h-full flex flex-col items-center justify-center p-8 text-center">
              <MessageCircle size={32} className="text-gray-300 mb-2" />
              <p className="text-xs font-bold text-gray-500">Select a client channel to start consultation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
