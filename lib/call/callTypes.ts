/**
 * Shared types for the WebRTC calling feature.
 * Used by VideoCall.tsx, ChatEngine.tsx, useCallNotifications.ts, and the /api/calls/* routes.
 */

// ── Call mode ────────────────────────────────────────────────────────────────

export type CallMode = "voice" | "video";

// ── Call state machine ────────────────────────────────────────────────────────
// idle → calling → ringing → connected → ended
// idle → ringing (inbound) → connected → ended
// Any state → ended (hang-up, rejection, timeout)

export type CallState =
  | "idle"
  | "calling"   // outbound: waiting for receiver-ready
  | "ringing"   // outbound: receiver is ready, offer sent, waiting for answer
  | "incoming"  // inbound: incoming-call received, waiting for user to accept/reject
  | "connected" // call is live
  | "ended";    // call finished (hang-up, rejected, timeout, error)

// ── Call DB record ────────────────────────────────────────────────────────────

export type CallStatus =
  | "initiated"
  | "ringing"
  | "accepted"
  | "connected"
  | "rejected"
  | "ended"
  | "missed"
  | "failed";

export interface CallRecord {
  id: string;
  case_id: string;
  caller_id: string;
  callee_id: string | null;
  mode: CallMode;
  status: CallStatus;
  started_at: string;
  answered_at: string | null;
  ended_at: string | null;
  duration: number | null;                  // seconds
  livekit_room_name: string | null;
  recording_enabled: boolean;
  created_at: string;
}

export interface CallEvent {
  id: string;
  call_id: string;
  event_type: CallEventType;
  actor_id: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export type CallEventType =
  | "CALL_CREATED"
  | "CALL_RINGING"
  | "CALL_ACCEPTED"
  | "CALL_CONNECTED"
  | "CALL_REJECTED"
  | "CALL_ENDED"
  | "CALL_MISSED"
  | "CALL_FAILED";

export interface CallParticipant {
  id: string;
  call_id: string;
  user_id: string;
  role: "caller" | "callee";
  joined_at: string | null;
  left_at: string | null;
  created_at: string;
}

// ── Supabase broadcast payloads ───────────────────────────────────────────────

export interface IncomingCallPayload {
  callId: string;
  callerId: string;
  mode: CallMode;
  callerName?: string;
}

export interface CallPingPayload {
  callId: string;
  mode: CallMode;
}

export interface ReceiverReadyPayload {
  callId: string;
}

export interface CallOfferPayload {
  callId: string;
  offer: RTCSessionDescriptionInit;
}

export interface CallAnswerPayload {
  callId: string;
  answer: RTCSessionDescriptionInit;
}

export interface IceCandidatePayload {
  callId: string;
  role: "caller" | "callee";
  candidate: RTCIceCandidateInit;
}

export interface CallEndedPayload {
  callId: string;
  reason?: "hang-up" | "rejected" | "timeout" | "error";
}

// ── API request/response shapes ───────────────────────────────────────────────

// ── Reason enums ─────────────────────────────────────────────────────────────

export type CallEndReason =
  | "caller_hangup"
  | "callee_hangup"
  | "hang-up"
  | "rejected"
  | "timeout"
  | "error";

// ── API request/response shapes ───────────────────────────────────────────────

export interface InitiateCallRequest {
  caseId: string;
  mode: CallMode;
  /** Required by the API route to create the callee side of the call record. */
  calleeId: string;
}

export interface InitiateCallResponse {
  callId: string;
  callRecord: CallRecord;
}

export interface AcceptCallRequest {
  callId: string;
}

export interface AcceptCallResponse {
  success: boolean;
}

export interface RejectCallRequest {
  callId: string;
}

export interface RejectCallResponse {
  success: boolean;
}

export interface EndCallRequest {
  callId: string;
  reason?: CallEndReason;
}

export interface EndCallResponse {
  success: boolean;
  duration?: number;
}

export interface CallErrorResponse {
  error: string;
  details?: unknown;
}
