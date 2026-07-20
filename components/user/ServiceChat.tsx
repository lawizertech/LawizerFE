"use client";

import { useEffect, useState } from "react";
import { Loader2, MessageCircle } from "lucide-react";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { ChatEngine } from "@/components/chat/ChatEngine";

/* -------------------------------------------------------------------------- */
/* ServiceChat
 *
 * Floating chat widget for the Active Services workspace.
 * `serviceId` here is actually a caseId for active service workspaces,
 * OR it can be a bookingId — we try both strategies:
 *
 *   1. Use serviceId directly as a caseId (if the workspace was built on a case)
 *   2. Fall back to /api/user/case-by-booking lookup
 *
 * Delegates all real-time messaging to <ChatEngine />.
 * -------------------------------------------------------------------------- */

export default function ServiceChat({
  serviceId,
  currentUserRole,
  currentUserId,
}: {
  serviceId: string;
  currentUserRole: "LAWIZER_EXPERT" | "USER";
  currentUserId: string;
}) {
  const [open, setOpen] = useState(true);
  const [caseId, setCaseId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const senderRole = currentUserRole === "USER" ? "client" : "professional";

  // ── Resolve the caseId ────────────────────────────────────────────────────
  useEffect(() => {
    if (!serviceId) {
      setLoading(false);
      return;
    }

    // Strategy 1: try using serviceId directly as caseId (UUID check)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (uuidRegex.test(serviceId)) {
      // Could be a direct case ID — use it and let ChatEngine validate
      setCaseId(serviceId);
      setLoading(false);
      return;
    }

    // Strategy 2: treat serviceId as a bookingId and resolve the case
    const token = getAccessToken();
    fetch(
      `/api/user/case-by-booking?bookingId=${encodeURIComponent(serviceId)}`,
      { headers: token ? { Authorization: `Bearer ${token}` } : {} }
    )
      .then((r) => r.json())
      .then((data: { caseId?: string | null }) => {
        if (data.caseId) setCaseId(data.caseId);
      })
      .catch((err) => console.error("ServiceChat: case lookup error:", err))
      .finally(() => setLoading(false));
  }, [serviceId]);

  /* -------------------------------------------------------------------------- */
  /* UI */
  /* -------------------------------------------------------------------------- */

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-200 bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col ${
        open ? "w-[340px] h-[460px]" : "w-[220px] h-[48px]"
      }`}
    >
      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="px-4 py-3 border-b border-gray-100 font-semibold text-sm cursor-pointer flex justify-between items-center shrink-0 rounded-t-2xl"
      >
        <span>Service Chat</span>
        <span className="text-xs text-gray-500">{open ? "—" : "Chat"}</span>
      </div>

      {/* BODY */}
      {open && (
        <div className="flex-1 overflow-hidden rounded-b-2xl">
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Loader2 className="animate-spin text-[#c92c41] mr-2" size={20} />
              <span className="text-xs">Loading chat…</span>
            </div>
          ) : caseId && currentUserId ? (
            <ChatEngine
              key={caseId}
              caseId={caseId}
              currentUserId={currentUserId}
              senderRole={senderRole as "client" | "professional"}
              professionalName="Service Expert"
              caseTitle="Service Workspace"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <MessageCircle size={24} className="text-gray-300 mb-2" />
              <p className="text-xs font-semibold text-gray-500">No active chat channel</p>
              <p className="text-[11px] text-gray-400 mt-1">
                A professional must be assigned to this service workspace to enable chat.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
