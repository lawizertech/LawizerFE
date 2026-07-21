"use client";

import { useEffect, useState, useCallback } from "react";
import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  StreamTheme,
  SpeakerLayout,
  CallControls,
  Call,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { PhoneOff, Mic, MicOff, Video as VideoIcon, VideoOff, Loader2 } from "lucide-react";
import axios from "axios";
import { getAccessToken } from "@/lib/auth/tokenStore";

interface StreamCallOverlayProps {
  caseId: string;
  currentUserId: string;
  currentUserName?: string;
  peerName?: string;
  mode: "voice" | "video";
  onClose: () => void;
}

function CallActiveUI({ peerName, mode, onClose }: { peerName: string; mode: "voice" | "video"; onClose: () => void }) {
  const { useCallCallingState, useMicrophoneState, useCameraState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const { isMute: isMicMuted } = useMicrophoneState();
  const { isMute: isCamMuted } = useCameraState();

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/95 flex flex-col justify-between p-4 sm:p-6 font-sans text-white animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-white/5 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            {callingState === "JOINED" ? "Live Call" : "Connecting..."}
          </span>
        </div>
        <div className="text-xs font-semibold text-slate-300">
          Case Channel • {peerName}
        </div>
      </div>

      {/* Main Video / Voice View */}
      <div className="flex-1 flex items-center justify-center relative my-4 overflow-hidden rounded-3xl bg-slate-900 border border-white/10">
        {mode === "video" ? (
          <div className="w-full h-full relative">
            <SpeakerLayout />
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#c92c41] to-rose-600 border-2 border-white/20 flex items-center justify-center text-3xl font-black shadow-2xl mx-auto animate-pulse">
              {peerName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold">{peerName}</h3>
              <p className="text-xs text-slate-400 font-medium mt-1">Encrypted Voice Consultation</p>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-center gap-4 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
        <CallControls onLeave={onClose} />
      </div>
    </div>
  );
}

export function StreamCallOverlay({
  caseId,
  currentUserId,
  currentUserName = "User",
  peerName = "Assigned Professional",
  mode,
  onClose,
}: StreamCallOverlayProps) {
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Initialize Stream Video Client and join call
  useEffect(() => {
    let isMounted = true;

    async function initStream() {
      try {
        setIsInitializing(true);
        setErrorMsg(null);

        // Fetch user token from NestJS backend
        const tokenRes = await axios.get("/api/stream/token", {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });

        if (!tokenRes.data?.token || !tokenRes.data?.apiKey) {
          throw new Error("Failed to retrieve Stream token from backend server");
        }

        const { token, apiKey } = tokenRes.data;

        // Create Stream Video Client
        const _client = new StreamVideoClient({
          apiKey,
          user: {
            id: currentUserId,
            name: currentUserName,
          },
          token,
        });

        if (!isMounted) return;
        setClient(_client);

        // Create or join call channel
        const callId = `case_call_${caseId}`;
        const _call = _client.call("default", callId);

        await _call.getOrCreate({
          data: {
            custom: {
              caseId,
              mode,
            },
          },
        });

        await _call.join({ create: true });

        if (mode === "voice") {
          await _call.camera.disable();
        }

        if (!isMounted) return;
        setCall(_call);
      } catch (err: any) {
        console.error("Stream Call Error:", err);
        if (isMounted) {
          setErrorMsg(err?.response?.data?.message || err.message || "Could not connect to video call server");
        }
      } finally {
        if (isMounted) setIsInitializing(false);
      }
    }

    initStream();

    return () => {
      isMounted = false;
      if (call) {
        call.leave().catch(() => {});
      }
    };
  }, [caseId, currentUserId, currentUserName, mode]);

  const handleClose = useCallback(async () => {
    if (call) {
      await call.leave().catch(() => {});
    }
    onClose();
  }, [call, onClose]);

  if (isInitializing) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white font-sans">
        <div className="w-12 h-12 border-4 border-[#c92c41] border-t-transparent rounded-full animate-spin mb-4" />
        <h3 className="text-base font-bold">Connecting to Stream Call Server...</h3>
        <p className="text-xs text-slate-400 mt-1">Securing end-to-end encrypted connection with {peerName}</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-950/95 flex flex-col items-center justify-center p-6 text-white font-sans">
        <div className="bg-rose-500/10 border border-rose-500/30 p-6 rounded-2xl max-w-sm text-center">
          <h3 className="text-sm font-bold text-rose-400 mb-2">Call Failed</h3>
          <p className="text-xs text-slate-300 mb-4">{errorMsg}</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 transition cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  if (!client || !call) return null;

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <CallActiveUI peerName={peerName} mode={mode} onClose={handleClose} />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
