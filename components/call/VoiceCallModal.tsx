"use client";

import { useEffect, useRef, useState } from "react";
import { createPeerConnection } from "@/lib/webrtc";

// TODO: replace all signaling (offer/answer/candidates/status) with Supabase Realtime

export default function VoiceCallModal({
  bookingId,
  role,
  onClose,
}: {
  bookingId: string;
  role: "lawyer" | "client";
  onClose: () => void;
}) {
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [callStatus, setCallStatus] = useState("Initializing...");

  useEffect(() => {
    const start = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        localStreamRef.current = localStream;

        const pc = createPeerConnection(
          (remoteStream) => {
            if (audioRef.current && audioRef.current.srcObject !== remoteStream) {
              audioRef.current.srcObject = remoteStream;
              audioRef.current.play().catch((err) => {
                if (err.name !== "AbortError") console.error("Play error:", err);
              });
            }
          },
          (_candidate) => {
            // TODO: send ICE candidate via Supabase Realtime
            // e.g. broadcast({ event: "ice_candidate", payload: candidate.toJSON() })
          }
        );

        pcRef.current = pc;
        localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

        // TODO: subscribe to Supabase Realtime channel `call:<bookingId>` and:
        //   - lawyer: listen for "call_active" → create offer, setLocalDescription, broadcast offer
        //   - lawyer: listen for "answer" → setRemoteDescription
        //   - client: listen for "offer" → setRemoteDescription, create answer, setLocalDescription, broadcast answer
        //   - both: listen for "ice_candidate" → addIceCandidate with retry
        setCallStatus("Waiting for signaling...");
      } catch {
        setCallStatus("Mic Access Denied");
      }
    };

    start();

    return () => {
      pcRef.current?.close();
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [bookingId, role]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]">
      <audio ref={audioRef} autoPlay playsInline />

      <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-xl">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-1">Voice Call</h2>
        <p className="text-blue-600 font-semibold mb-6">{callStatus}</p>

        <div className="space-y-3">
          <button
            onClick={() => audioRef.current?.play()}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
          >
            I can&apos;t hear anything
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100"
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
}
