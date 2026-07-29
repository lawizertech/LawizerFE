"use client";

import { useEffect, useState, useRef, use } from "react";
import { useRouter } from "next/navigation";
import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  StreamTheme,
  SpeakerLayout,
  CallControls,
  Call,
  CallingState,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import axios from "axios";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { useAuth } from "@/context/authContext";
import { ArrowLeft, Loader2, ShieldCheck } from "lucide-react";

function MeetingActiveUI({ onClose }: { onClose: () => void }) {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-950 font-sans text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 bg-slate-900 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onClose}
            className="p-2 -ml-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
            aria-label="Leave Meeting"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                callingState === CallingState.JOINED ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
              }`}
            />
            <h1 className="text-base sm:text-lg font-bold">
              {callingState === CallingState.JOINED ? "Live Meeting Session" : "Connecting..."}
            </h1>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-rose-500/10 text-rose-400 px-3 py-1.5 rounded-full text-xs font-bold border border-rose-500/20">
          <ShieldCheck size={14} />
          End-to-End Encrypted
        </div>
      </header>

      {/* Main Video View */}
      <main className="flex-1 relative overflow-hidden bg-black flex items-center justify-center p-4">
        {callingState !== CallingState.JOINED ? (
          <div className="flex flex-col items-center justify-center text-slate-400">
            <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mb-4" />
            <p className="font-semibold text-sm">Connecting to secure session...</p>
          </div>
        ) : (
          <SpeakerLayout />
        )}
      </main>

      {/* Control Bar */}
      <footer className="py-2 sm:py-4 bg-slate-900 border-t border-white/10 flex items-center justify-center shrink-0 pb-safe">
        <CallControls onLeave={onClose} />
      </footer>
    </div>
  );
}

export default function MeetingPage({ params }: { params: Promise<{ meetingId: string }> }) {
  const router = useRouter();
  const { user } = useAuth();
  const { meetingId } = use(params);

  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const callRef = useRef<Call | null>(null);
  const clientRef = useRef<StreamVideoClient | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initMeeting() {
      if (!user) return; // Wait for user to be available

      try {
        setIsInitializing(true);
        setErrorMsg(null);

        // Fetch Stream token
        const tokenRes = await axios.get("/api/stream/token", {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });

        if (!tokenRes.data?.token || !tokenRes.data?.apiKey) {
          throw new Error("Failed to retrieve Stream token");
        }

        const { token, apiKey } = tokenRes.data;

        // Initialize Client
        const _client = new StreamVideoClient({
          apiKey,
          user: {
            id: user.uid,
            name: user.name || user.email || "User",
          },
          token,
        });

        if (!isMounted) return;
        clientRef.current = _client;
        setClient(_client);

        // Define call
        const streamCallId = `meet_${meetingId}`;
        const _call = _client.call("default", streamCallId);

        // Turn off camera by default (voice-first)
        try {
          await _call.camera.disable();
        } catch (e) {
          console.warn("Could not disable camera:", e);
        }

        await _call.join({ create: true });
        
        try {
          await _call.startRecording();
        } catch (e) {
          console.warn("Recording may already be started or unavailable:", e);
        }

        if (!isMounted) return;
        callRef.current = _call;
        setCall(_call);
      } catch (err: any) {
        console.error("Meeting Init Error:", err);
        if (isMounted) {
          setErrorMsg(err?.response?.data?.message || err.message || "Failed to join meeting");
        }
      } finally {
        if (isMounted) setIsInitializing(false);
      }
    }

    initMeeting();

    return () => {
      isMounted = false;
      if (callRef.current) {
        callRef.current.leave().catch(() => {});
        callRef.current = null;
      }
      if (clientRef.current) {
        clientRef.current.disconnectUser();
        clientRef.current = null;
      }
    };
  }, [meetingId, user]);

  const handleClose = async () => {
    if (callRef.current) {
      await callRef.current.leave().catch(() => {});
      callRef.current = null;
    }
    if (clientRef.current) {
      clientRef.current.disconnectUser();
      clientRef.current = null;
    }
    
    // Redirect back to dashboard based on role
    if (user?.role === "expert") {
      router.push("/expert/dashboard/chats");
    } else {
      router.push("/user/dashboard/chats");
    }
  };

  if (!user || isInitializing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans">
        <Loader2 className="w-12 h-12 text-[#c92c41] animate-spin mb-4" />
        <h2 className="text-xl font-bold">Joining Meeting...</h2>
        <p className="text-slate-400 mt-2 text-sm">Preparing secure video connection</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans p-6">
        <div className="bg-rose-500/10 border border-rose-500/30 p-8 rounded-2xl max-w-md text-center">
          <h2 className="text-xl font-bold text-rose-400 mb-4">Connection Failed</h2>
          <p className="text-slate-300 mb-8">{errorMsg}</p>
          <button
            onClick={handleClose}
            className="px-6 py-3 bg-[#c92c41] hover:bg-rose-700 text-white rounded-xl font-bold transition cursor-pointer w-full"
          >
            Return to Dashboard
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
          <MeetingActiveUI onClose={handleClose} />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
