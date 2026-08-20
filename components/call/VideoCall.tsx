"use client";

/**
 * VideoCall — WebRTC P2P voice/video call component.
 *
 * Bug fixes applied (from calling_architecture_review.md):
 *  Fix 1 — callState removed from channel useEffect deps → no channel teardown on state change
 *  Fix 2 — setCallStateSafe/setCallModeSafe sync ref before calling setState → no stale closures
 *  Fix 3 — isMountedRef guards getUserMedia promise → no media stream leak after unmount
 *  Fix 4 — call-ping loop every 2 s while ringing → breaks receiver-ready race condition
 *  Fix 5 — (in ChatEngine) setActiveCallSafe — handled in ChatEngine.tsx
 *  Fix 6 — (in useCallNotifications) Web Audio ringtone — handled in hooks/useCallNotifications.ts
 *
 * Signaling channel: `room_{caseId}` (Supabase broadcast)
 * Notification channel: `chat_{caseId}` (used by ChatEngine, not here)
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { createPeerConnection } from "@/lib/call/webrtc";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Volume2,
  VolumeX,
  Loader2,
} from "lucide-react";
import type {
  CallMode,
  CallState,
  CallPingPayload,
  CallOfferPayload,
  CallAnswerPayload,
  IceCandidatePayload,
  CallEndedPayload,
} from "@/lib/call/callTypes";
import {
  CALL_PING,
  CALL_RECEIVER_READY,
  CALL_OFFER,
  CALL_ANSWER,
  CALL_ICE_CANDIDATE,
  CALL_ENDED,
  roomChannel,
} from "@/lib/call/callEvents";

// ── Props ─────────────────────────────────────────────────────────────────────

interface VideoCallProps {
  caseId: string;
  callId: string;
  currentUserId: string;
  /** "caller" initiates the call; "callee" receives it. */
  role: "caller" | "callee";
  initialMode: CallMode;
  peerName?: string;
  onClose: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function VideoCall({
  caseId,
  callId,
  currentUserId,
  role,
  initialMode,
  peerName = "Your Legal Professional",
  onClose,
}: VideoCallProps) {
  const supabase = createClient();

  // ── State ────────────────────────────────────────────────────────────────
  const [callState, setCallState] = useState<CallState>(role === "caller" ? "calling" : "incoming");
  const [callMode, setCallMode] = useState<CallMode>(initialMode);
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [statusLabel, setStatusLabel] = useState(role === "caller" ? "Calling…" : "Incoming call…");

  // ── Refs ─────────────────────────────────────────────────────────────────
  // Fix 1+2: keep refs in sync synchronously before setState
  const stateRef = useRef<CallState>(callState);
  const modeRef = useRef<CallMode>(callMode);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const localStream = useRef<MediaStream | null>(null);
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
  const ringTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  // Fix 3: mounted guard
  const isMountedRef = useRef(true);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // ── Safe setters (Fix 2) ─────────────────────────────────────────────────
  const setCallStateSafe = useCallback((next: CallState) => {
    stateRef.current = next; // sync
    setCallState(next);
  }, []);

  const setCallModeSafe = useCallback((next: CallMode) => {
    modeRef.current = next; // sync
    setCallMode(next);
  }, []);

  // ── Duration timer ────────────────────────────────────────────────────────
  useEffect(() => {
    if (callState === "connected") {
      const id = setInterval(() => setSeconds((s) => s + 1), 1000);
      return () => clearInterval(id);
    } else {
      setSeconds(0);
    }
  }, [callState]);

  const formatDuration = () => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // ── Helpers ────────────────────────────────────────────────────────────────

  /** Stop all tracks and close the peer connection cleanly. */
  const cleanup = useCallback(() => {
    if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
    if (ringTimeoutRef.current) clearTimeout(ringTimeoutRef.current);
    pingIntervalRef.current = null;
    ringTimeoutRef.current = null;

    localStream.current?.getTracks().forEach((t) => t.stop());
    localStream.current = null;

    peerConnection.current?.close();
    peerConnection.current = null;

    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
      channelRef.current = null;
    }
  }, [supabase]);

  /** Broadcast the call-ended event and close everything. */
  const hangUp = useCallback(
    async (reason: CallEndedPayload["reason"] = "hang-up") => {
      try {
        await channelRef.current?.send({
          type: "broadcast",
          event: CALL_ENDED,
          payload: { callId, reason } satisfies CallEndedPayload,
        });
        // Update DB — best-effort
        await fetch("/api/calls/end", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ callId, reason }),
        }).catch(() => {});
      } catch {
        // ignore
      }
      setCallStateSafe("ended");
      cleanup();
      onClose();
    },
    [callId, cleanup, onClose, setCallStateSafe]
  );

  // Fix 3: safe getUserMedia
  const startLocalStream = useCallback(async (mode: CallMode): Promise<MediaStream | null> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: mode === "video",
      });

      if (!isMountedRef.current) {
        stream.getTracks().forEach((t) => t.stop()); // Fix 3: don't leak
        return null;
      }

      localStream.current = stream;

      if (mode === "video" && localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      return stream;
    } catch (err) {
      console.error("getUserMedia error:", err);
      setStatusLabel("Mic/camera access denied");
      return null;
    }
  }, []);

  // ── Main effect: subscribe channel + WebRTC setup ─────────────────────────
  // Fix 1: NO callState in deps — channel is created once per caseId
  useEffect(() => {
    let active = true;

    const channel = supabase.channel(roomChannel(caseId));
    channelRef.current = channel;

    // ── Broadcast handlers ────────────────────────────────────────────────

    // Fix 4: callee replies to ping so caller can send offer even if we mounted late
    channel.on("broadcast", { event: CALL_PING }, ({ payload }: { payload: CallPingPayload }) => {
      if (!active || role !== "callee") return;
      if (stateRef.current === "incoming" || stateRef.current === "calling") {
        void channel.send({
          type: "broadcast",
          event: CALL_RECEIVER_READY,
          payload: { callId: payload.callId },
        });
      }
    });

    // Caller gets this → sends WebRTC offer
    channel.on("broadcast", { event: CALL_RECEIVER_READY }, async ({ payload }: { payload: { callId: string } }) => {
      if (!active || role !== "caller" || payload.callId !== callId) return;
      if (stateRef.current !== "calling" && stateRef.current !== "ringing") return;
      if (peerConnection.current) return; // already have a PC

      setCallStateSafe("ringing");
      setStatusLabel("Ringing…");

      const stream = await startLocalStream(modeRef.current);
      if (!stream || !isMountedRef.current) return;

      const pc = createPeerConnection(
        (remoteStream) => attachRemoteStream(remoteStream),
        (candidate) => {
          void channel.send({
            type: "broadcast",
            event: CALL_ICE_CANDIDATE,
            payload: { callId, role: "caller", candidate: candidate.toJSON() } satisfies IceCandidatePayload,
          });
        }
      );
      peerConnection.current = pc;
      stream.getTracks().forEach((t) => pc.addTrack(t, stream));

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      await channel.send({
        type: "broadcast",
        event: CALL_OFFER,
        payload: { callId, offer } satisfies CallOfferPayload,
      });
    });

    // Callee gets offer → creates answer
    channel.on("broadcast", { event: CALL_OFFER }, async ({ payload }: { payload: CallOfferPayload }) => {
      if (!active || role !== "callee" || payload.callId !== callId) return;
      if (peerConnection.current) return;

      setCallStateSafe("calling");
      setStatusLabel("Connecting…");

      const stream = await startLocalStream(modeRef.current);
      if (!stream || !isMountedRef.current) return;

      const pc = createPeerConnection(
        (remoteStream) => attachRemoteStream(remoteStream),
        (candidate) => {
          void channel.send({
            type: "broadcast",
            event: CALL_ICE_CANDIDATE,
            payload: { callId, role: "callee", candidate: candidate.toJSON() } satisfies IceCandidatePayload,
          });
        }
      );
      peerConnection.current = pc;
      stream.getTracks().forEach((t) => pc.addTrack(t, stream));

      await pc.setRemoteDescription(new RTCSessionDescription(payload.offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      await channel.send({
        type: "broadcast",
        event: CALL_ANSWER,
        payload: { callId, answer } satisfies CallAnswerPayload,
      });

      // Accept in DB
      await fetch("/api/calls/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callId }),
      }).catch(() => {});
    });

    // Caller gets answer → call is live
    channel.on("broadcast", { event: CALL_ANSWER }, async ({ payload }: { payload: CallAnswerPayload }) => {
      if (!active || role !== "caller" || payload.callId !== callId) return;
      const pc = peerConnection.current;
      if (!pc || pc.signalingState !== "have-local-offer") return;

      await pc.setRemoteDescription(new RTCSessionDescription(payload.answer));
      setCallStateSafe("connected");
      setStatusLabel("Connected");
    });

    // ICE candidates from the peer
    channel.on("broadcast", { event: CALL_ICE_CANDIDATE }, ({ payload }: { payload: IceCandidatePayload }) => {
      if (!active || payload.callId !== callId) return;
      if (payload.role === role) return; // ignore our own candidates

      const tryAdd = () => {
        const pc = peerConnection.current;
        if (!pc) return;
        if (pc.remoteDescription?.type) {
          pc.addIceCandidate(new RTCIceCandidate(payload.candidate)).catch(() => {});
        } else {
          setTimeout(tryAdd, 300);
        }
      };
      tryAdd();
    });

    // Remote side ended the call
    channel.on("broadcast", { event: CALL_ENDED }, ({ payload }: { payload: CallEndedPayload }) => {
      if (!active || payload.callId !== callId) return;
      setCallStateSafe("ended");
      cleanup();
      onClose();
    });

    // ── Subscribe and kick off the flow ───────────────────────────────────
    channel.subscribe(async (status) => {
      if (status !== "SUBSCRIBED" || !active) return;

      if (role === "caller") {
        // Fix 4: emit receiver-ready request immediately after subscribe,
        // then keep pinging every 2 s until we get a response or time out.
        await channel.send({
          type: "broadcast",
          event: CALL_PING,
          payload: { callId, mode: modeRef.current } satisfies CallPingPayload,
        });

        // Fix 4: periodic ping loop
        pingIntervalRef.current = setInterval(() => {
          if (stateRef.current !== "calling" || peerConnection.current) {
            clearInterval(pingIntervalRef.current!);
            return;
          }
          void channel.send({
            type: "broadcast",
            event: CALL_PING,
            payload: { callId, mode: modeRef.current } satisfies CallPingPayload,
          });
        }, 2000);

        // Ring timeout
        ringTimeoutRef.current = setTimeout(() => {
          if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
          if (stateRef.current !== "connected") {
            void hangUp("timeout");
          }
        }, 45_000);

      } else {
        // Callee: announce we're ready immediately
        await channel.send({
          type: "broadcast",
          event: CALL_RECEIVER_READY,
          payload: { callId },
        });
      }
    });

    return () => {
      active = false;
      cleanup();
    };
    // Fix 1: caseId and callId only — NOT callState or callMode
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseId, callId, role]);

  // ── Attach remote stream to correct element ────────────────────────────────
  const attachRemoteStream = (remoteStream: MediaStream) => {
    if (modeRef.current === "video" && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream;
    } else if (audioRef.current) {
      if (audioRef.current.srcObject !== remoteStream) {
        audioRef.current.srcObject = remoteStream;
        audioRef.current.play().catch((e) => {
          if (e.name !== "AbortError") console.error("Audio play error:", e);
        });
      }
    }
    setCallStateSafe("connected");
    setStatusLabel("Connected");
  };

  // ── Controls ───────────────────────────────────────────────────────────────
  const toggleMute = () => {
    localStream.current?.getAudioTracks().forEach((t) => (t.enabled = !t.enabled));
    setIsMuted((v) => !v);
  };

  const toggleCamera = () => {
    localStream.current?.getVideoTracks().forEach((t) => (t.enabled = !t.enabled));
    setIsCamOff((v) => !v);
  };

  const toggleSpeaker = () => {
    if (audioRef.current) audioRef.current.muted = isSpeakerOn;
    setIsSpeakerOn((v) => !v);
  };

  // ── Status badge colour ────────────────────────────────────────────────────
  const badgeColor =
    callState === "connected"
      ? "bg-emerald-500"
      : callState === "ended"
      ? "bg-red-500"
      : "bg-yellow-500";

  const isVideo = callMode === "video";

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-between z-[100] text-white select-none font-sans">
      <audio ref={audioRef} autoPlay playsInline />

      {/* Header */}
      <div className="p-5 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent">
        <div className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full ${badgeColor} animate-pulse`} />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            {statusLabel}
          </span>
        </div>
        {callState === "connected" && (
          <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-widest backdrop-blur-md">
            {formatDuration()}
          </div>
        )}
      </div>

      {/* Video / Voice panel */}
      <div className="flex-1 flex items-center justify-center relative px-4">
        {isVideo ? (
          <div className="w-full h-full absolute inset-0 bg-slate-900 overflow-hidden flex items-center justify-center">
            {/* Remote */}
            <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />

            {/* Local PiP */}
            <div className="absolute top-20 right-4 w-28 h-36 sm:w-36 sm:h-48 bg-slate-950 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 z-10">
              {isCamOff ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-[10px] font-semibold text-slate-400 gap-1">
                  <VideoOff size={16} />
                  Camera Off
                </div>
              ) : (
                <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
              )}
            </div>

            {/* Peer name badge */}
            <div className="absolute bottom-24 left-6 bg-black/50 px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-white/15">
              <p className="text-xs font-bold">{peerName}</p>
            </div>
          </div>
        ) : (
          /* Voice avatar */
          <div className="text-center space-y-6">
            {callState === "calling" || callState === "ringing" ? (
              <Loader2 className="animate-spin text-[#c92c41] mx-auto" size={40} />
            ) : null}
            <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-rose-600/10 border border-rose-600/20 animate-ping" />
              <div className="absolute inset-2 rounded-full bg-rose-600/20 animate-pulse" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#c92c41] to-red-500 border border-white/20 shadow-2xl flex items-center justify-center text-3xl font-extrabold z-10">
                {peerName.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide">{peerName}</h2>
              <p className="text-xs text-slate-400 font-semibold mt-1">Legal Professional</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="p-8 flex flex-col items-center gap-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-6">
          <button
            onClick={toggleMute}
            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
              isMuted ? "bg-red-600 border-red-600" : "bg-white/10 border-white/20 hover:bg-white/20"
            }`}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          </button>

          {isVideo && (
            <button
              onClick={toggleCamera}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                isCamOff ? "bg-red-600 border-red-600" : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
              title={isCamOff ? "Camera On" : "Camera Off"}
            >
              {isCamOff ? <VideoOff size={20} /> : <Video size={20} />}
            </button>
          )}

          {!isVideo && (
            <button
              onClick={toggleSpeaker}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                !isSpeakerOn ? "bg-red-600 border-red-600" : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
              title={isSpeakerOn ? "Mute Speaker" : "Unmute Speaker"}
            >
              {isSpeakerOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          )}

          <button
            onClick={() => hangUp("hang-up")}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-red-600 border border-red-500 shadow-lg shadow-red-950/50 hover:bg-red-700 active:scale-95 transition-all cursor-pointer"
            title="End Call"
          >
            <PhoneOff size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
