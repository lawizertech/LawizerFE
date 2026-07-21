// ============================================================
// Call Service — Client-side API layer
// All call-related API calls go through this service.
// ============================================================

import type {
  InitiateCallRequest,
  InitiateCallResponse,
  AcceptCallRequest,
  AcceptCallResponse,
  RejectCallRequest,
  RejectCallResponse,
  EndCallRequest,
  EndCallResponse,
  CallErrorResponse,
  CallMode,
  CallEndReason,
} from './callTypes';

class CallServiceError extends Error {
  constructor(
    message: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'CallServiceError';
  }
}

async function apiRequest<T>(
  url: string,
  body: Record<string, unknown>
): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new CallServiceError(
      (data as CallErrorResponse).error || 'Unknown error',
      res.status
    );
  }

  return data as T;
}

/**
 * Initiate a new call for a case.
 * Creates a server-side call record and sends an incoming-call notification.
 */
export async function initiateCall(
  caseId: string,
  mode: CallMode,
  calleeId: string
): Promise<InitiateCallResponse> {
  return apiRequest<InitiateCallResponse>('/api/calls/initiate', {
    caseId,
    mode,
    calleeId,
  } satisfies InitiateCallRequest);
}

/**
 * Accept an incoming call.
 * Updates the call status to 'accepted' on the server.
 */
export async function acceptCall(
  callId: string
): Promise<AcceptCallResponse> {
  return apiRequest<AcceptCallResponse>('/api/calls/accept', {
    callId,
  } satisfies AcceptCallRequest);
}

/**
 * Reject an incoming call.
 * Updates the call status to 'rejected' on the server.
 */
export async function rejectCall(
  callId: string
): Promise<RejectCallResponse> {
  return apiRequest<RejectCallResponse>('/api/calls/reject', {
    callId,
  } satisfies RejectCallRequest);
}

/**
 * End an active call.
 * Updates the call status to 'ended' and records the duration.
 */
export async function endCall(
  callId: string,
  reason: CallEndReason = 'caller_hangup'
): Promise<EndCallResponse> {
  return apiRequest<EndCallResponse>('/api/calls/end', {
    callId,
    reason,
  } satisfies EndCallRequest);
}

export const callService = {
  initiateCall,
  acceptCall,
  rejectCall,
  endCall,
};
