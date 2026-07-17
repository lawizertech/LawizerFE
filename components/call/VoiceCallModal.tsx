"use client";

import { useEffect, useRef, useState } from "react";
import { serverApi } from "@/lib/apis/axios";
import { supabaseRealtime } from "@/lib/supabaseRealtime";
import { createPeerConnection } from "@/lib/webrtc";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Volume2,
  VolumeX,
  Loader2,
  AlertTriangle,
} from "lucide-react";

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
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  const [callStatus, setCallStatus] = useState("Initializing...");
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [peerName, setPeerName] = useState("Professional Support");

  // Timer duration logic
  useEffect(() => {
    if (callStatus === "Connected") {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setSeconds(0);
    }
  }, [callStatus]);

  const formatDuration = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let unsub: (() => void) | null = null;
    let active = true;

    const start = async () => {
      try {
        let isVideo = false;
        try {
          const res = await serverApi.get(`/api/user/consultations/${bookingId}`);
          if (res.data?.success && res.data?.booking && active) {
            const booking = res.data.booking;
            isVideo = booking.callType === "video";
            setIsVideoCall(isVideo);
            setPeerName(role === "lawyer" ? (booking.userName || "Client") : (booking.expertName || "Advocate Expert"));
          }
        } catch (e) {
          console.error("Consultation metadata fetch error:", e);
        }

        const localStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: isVideo,
        });
        if (!active) {
          localStream.getTracks().forEach((t) => t.stop());
          return;
        }
        localStreamRef.current = localStream;

        if (localVideoRef.current && isVideo) {
          localVideoRef.current.srcObject = localStream;
        }

        const pc = createPeerConnection(
          (remoteStream) => {
            if (isVideo && remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
            } else if (audioRef.current) {
              if (audioRef.current.srcObject !== remoteStream) {
                audioRef.current.srcObject = remoteStream;
                audioRef.current.play().catch((err) => {
                  if (err.name !== "AbortError") console.error("Play error:", err);
                });
              }
            }
          },
          (candidate) => {
            void supabaseRealtime.broadcast(`call:${bookingId}`, "ice_candidate", {
              role,
              candidate: candidate.toJSON(),
            });
          }
        );

        pcRef.current = pc;
        localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

        // Subscribe to Supabase Realtime channel for WebRTC signaling
        const subscription = await supabaseRealtime.subscribe(`call:${bookingId}`, async (event, payload) => {
          if (!active) return;
          if (event === "ringing") {
            if (role === "lawyer" && pc.signalingState === "stable") {
              const offer = await pc.createOffer();
              await pc.setLocalDescription(offer);
              void supabaseRealtime.broadcast(`call:${bookingId}`, "offer", { offer });
              setCallStatus("Calling...");
            }
          } else if (event === "offer") {
            if (role === "client" && pc.signalingState === "stable") {
              await pc.setRemoteDescription(new RTCSessionDescription(payload.offer));
              const answer = await pc.createAnswer();
              await pc.setLocalDescription(answer);
              void supabaseRealtime.broadcast(`call:${bookingId}`, "answer", { answer });
              setCallStatus("Connected");
            }
          } else if (event === "answer") {
            if (role === "lawyer" && pc.signalingState === "have-local-offer") {
              await pc.setRemoteDescription(new RTCSessionDescription(payload.answer));
              setCallStatus("Connected");
            }
          } else if (event === "ice_candidate") {
            if (payload.role !== role) {
              const retryAdd = async () => {
                if (pc.remoteDescription && pc.remoteDescription.type) {
                  try {
                    await pc.addIceCandidate(new RTCIceCandidate(payload.candidate));
                  } catch (e) { }
                } else {
                  setTimeout(retryAdd, 500);
                }
              };
              retryAdd();
            }
          } else if (event === "ended") {
            onClose();
          }
        });

        unsub = subscription.unsubscribe;

        if (role === "lawyer") {
          setCallStatus("Ringing...");
          void supabaseRealtime.broadcast(`call:${bookingId}`, "ringing", { role });
        } else {
          setCallStatus("Connecting...");
        }

      } catch (err) {
        console.error("Call setup error:", err);
        setCallStatus("Mic Access Denied");
      }
    };

    void start();
    return () => {
      active = false;
      unsub?.();
      pcRef.current?.close();
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [bookingId, role]);

  const handleEndCall = async () => {
    try {
      await supabaseRealtime.broadcast(`call:${bookingId}`, "ended", { role });
    } catch (e) {
      console.error("End call broadcast failed:", e);
    }
    onClose();
  };

  const toggleMute = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleCamera = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsCamOff(!isCamOff);
    }
  };

  const toggleSpeaker = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isSpeakerOn;
      setIsSpeakerOn(!isSpeakerOn);
    }
  };

  // Connection Indicator Styling
  let statusBadgeColor = "bg-yellow-500";
  if (callStatus === "Connected") statusBadgeColor = "bg-green-500";
  if (callStatus === "Access Denied") statusBadgeColor = "bg-red-500";

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-between z-[100] text-white select-none transition-all duration-300 font-sans">
      <audio ref={audioRef} autoPlay playsInline />

      {/* HEADER BAR */}
      <div className="p-5 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent z-10">
        <div className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full ${statusBadgeColor} animate-pulse`} />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            {callStatus}
          </span>
        </div>
        {callStatus === "Connected" && (
          <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-white backdrop-blur-md">
            {formatDuration()}
          </div>
        )}
      </div>

      {/* VIDEO STREAMS OR VOICE AVATAR PANEL */}
      <div className="flex-1 flex items-center justify-center relative px-4">
        {isVideoCall ? (
          <div className="w-full h-full absolute inset-0 bg-slate-900 overflow-hidden flex items-center justify-center">
            {/* Remote Video Stream */}
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Local Video Thumbnail Overlay */}
            <div className="absolute top-20 right-4 w-28 h-36 sm:w-36 sm:h-48 bg-slate-950 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 z-10 transition duration-300">
              {isCamOff ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-[10px] font-semibold text-slate-400">
                  <VideoOff size={16} className="mb-1" /> Camera Off
                </div>
              ) : (
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Partner Overlay Badge */}
            <div className="absolute bottom-24 left-6 bg-black/50 px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-white/15 z-10">
              <p className="text-xs font-bold">{peerName}</p>
            </div>
          </div>
        ) : (
          /* Voice Call Avatar Layout */
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-600/10 border border-red-600/20 animate-ping duration-1000" />
              <div className="absolute inset-2 rounded-full bg-red-600/20 animate-pulse" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#c92c41] to-red-500 border border-white/20 shadow-2xl flex items-center justify-center text-3xl font-extrabold tracking-wider text-white z-10">
                {peerName.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">{peerName}</h2>
              <p className="text-xs text-slate-400 font-semibold mt-1">Consulting Professional</p>
            </div>
          </div>
        )}
      </div>

      {/* CONTROL ACTIONS PANEL */}
      <div className="p-8 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 to-transparent gap-4 z-10">
        <div className="flex items-center gap-6">
          {/* Mute toggle button */}
          <button
            onClick={toggleMute}
            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${isMuted
                ? "bg-red-600 border-red-600 text-white"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              }`}
            title={isMuted ? "Unmute Mic" : "Mute Mic"}
          >
            {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          </button>

          {/* Camera toggle button (Video calls only) */}
          {isVideoCall && (
            <button
              onClick={toggleCamera}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${isCamOff
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              title={isCamOff ? "Turn Video On" : "Turn Video Off"}
            >
              {isCamOff ? <VideoOff size={20} /> : <Video size={20} />}
            </button>
          )}

          {/* Speaker toggle button (Voice calls only) */}
          {!isVideoCall && (
            <button
              onClick={toggleSpeaker}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${!isSpeakerOn
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              title={isSpeakerOn ? "Mute Speaker" : "Unmute Speaker"}
            >
              {isSpeakerOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          )}

          {/* End Call Button */}
          <button
            onClick={handleEndCall}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-red-600 text-white border border-red-500 shadow-lg shadow-red-950/50 hover:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer"
            title="End Call"
          >
            <PhoneOff size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
