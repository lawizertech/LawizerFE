"use client";

import { useEffect, useRef } from "react";

/**
 * Generates a classic double-ring telephone tone using the Web Audio API.
 * Pattern: 0.4s ON → 0.2s gap → 0.4s ON → 2s silence → repeat
 * Frequencies: 480Hz + 440Hz sine waves (North American ring tone standard).
 *
 * Returns a stop() function that cancels all scheduled nodes and closes the context.
 */
function createRingToneScheduler(ctx: AudioContext): () => void {
  let stopped = false;
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.18; // quiet but audible
  gainNode.connect(ctx.destination);

  const activeNodes: AudioNode[] = [];

  const scheduleRing = (startTime: number) => {
    if (stopped) return;

    const freqs = [480, 440];
    const cycleDuration = 0.4 + 0.2 + 0.4 + 2.0; // 3 seconds per full cycle

    // First burst: 0.4 s
    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + 0.4);
      activeNodes.push(osc);
    });

    // Second burst: starts after 0.4 + 0.2 = 0.6 s gap
    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(gainNode);
      osc.start(startTime + 0.6);
      osc.stop(startTime + 1.0);
      activeNodes.push(osc);
    });

    // Schedule next cycle
    const nextStart = startTime + cycleDuration;
    const delay = Math.max(0, (nextStart - ctx.currentTime) * 1000);
    setTimeout(() => scheduleRing(nextStart), delay);
  };

  scheduleRing(ctx.currentTime + 0.05);

  return () => {
    stopped = true;
    activeNodes.forEach((n) => {
      try {
        (n as OscillatorNode).stop();
      } catch {
        // already stopped
      }
    });
    gainNode.disconnect();
  };
}

// ── Hook ──────────────────────────────────────────────────────────────────────

interface UseCallNotificationsOptions {
  /** Whether an incoming call is active and the ringtone should play. */
  isRinging: boolean;
}

/**
 * Plays a ringtone while `isRinging` is true, using the Web Audio API.
 * No external audio file required.
 */
export function useCallNotifications({ isRinging }: UseCallNotificationsOptions): void {
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRingRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (isRinging) {
      // Lazy-create the AudioContext on user gesture / first ring
      if (!ctxRef.current || ctxRef.current.state === "closed") {
        ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = ctxRef.current;

      // Resume if suspended (browser autoplay policy)
      const start = async () => {
        if (ctx.state === "suspended") {
          await ctx.resume();
        }
        stopRingRef.current = createRingToneScheduler(ctx);
      };
      void start();
    } else {
      // Stop the tone
      stopRingRef.current?.();
      stopRingRef.current = null;
    }

    return () => {
      stopRingRef.current?.();
      stopRingRef.current = null;
    };
  }, [isRinging]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRingRef.current?.();
      ctxRef.current?.close();
    };
  }, []);
}
