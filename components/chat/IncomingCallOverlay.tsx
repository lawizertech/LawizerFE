import React from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneCall, PhoneOff } from 'lucide-react';

interface IncomingCallOverlayProps {
  mode: 'video' | 'voice';
  title: string;
  onAccept: () => void;
  onReject: () => void;
}

export function IncomingCallOverlay({ mode, title, onAccept, onReject }: IncomingCallOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.85, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 w-80 font-sans"
      >
        {/* Pulsing icon */}
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-emerald-500/10 flex items-center justify-center animate-pulse">
            <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <PhoneCall className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Call info */}
        <div className="text-center flex flex-col gap-1">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Incoming {mode} call</p>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500">is calling you...</p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-6">
          <button
            onClick={onReject}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="h-14 w-14 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-200 shadow-sm">
              <PhoneOff className="h-6 w-6" />
            </div>
            <span className="text-xs text-gray-500 font-semibold">Decline</span>
          </button>

          <button
            onClick={onAccept}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="h-14 w-14 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shadow-sm">
              <Phone className="h-6 w-6" />
            </div>
            <span className="text-xs text-gray-500 font-semibold">Accept</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
