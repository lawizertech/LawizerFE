/**
 * Supabase Realtime broadcast event name constants for the calling feature.
 *
 * Channel conventions:
 *   chat_{caseId}   — used by ChatEngine for messaging, presence, typing, AND incoming-call notification
 *   room_{caseId}   — used by VideoCall for WebRTC signaling (offer/answer/ice/ping)
 *
 * Using constants avoids typos and makes refactoring safe.
 */

// ── Events broadcast on `chat_{caseId}` channel ──────────────────────────────

/** Sent by caller to notify callee of an incoming call. */
export const CALL_INCOMING = "incoming-call" as const;

// ── Events broadcast on `room_{caseId}` channel ──────────────────────────────

/** Caller pings every 2 s while waiting for receiver-ready (race condition fix). */
export const CALL_PING = "call-ping" as const;

/** Callee responds to a call-ping or on initial VideoCall mount. */
export const CALL_RECEIVER_READY = "receiver-ready" as const;

/** Caller sends SDP offer after receiving receiver-ready. */
export const CALL_OFFER = "call-offer" as const;

/** Callee sends SDP answer after processing the offer. */
export const CALL_ANSWER = "call-answer" as const;

/** Either side sends ICE candidates during connection setup. */
export const CALL_ICE_CANDIDATE = "ice-candidate" as const;

/** Caller or callee signals that the call has ended. */
export const CALL_ENDED = "call-ended" as const;

// ── Channel name helpers ──────────────────────────────────────────────────────

export const chatChannel = (caseId: string) => `chat_${caseId}`;
export const roomChannel = (caseId: string) => `room_${caseId}`;
