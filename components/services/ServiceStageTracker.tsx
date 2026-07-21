"use client";

import { CheckCircle2, Clock, CircleDot, ChevronRight, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";
import type { StageItem } from "@/lib/services/serviceStageTemplates";

interface ServiceStageTrackerProps {
  stages?: StageItem[];
  currentStageId?: string;
  serviceTitle?: string;
}

export function ServiceStageTracker({
  stages = [],
  currentStageId,
  serviceTitle = "Ongoing Legal Process",
}: ServiceStageTrackerProps) {
  if (!stages || stages.length === 0) {
    return (
      <div className="bg-slate-50 border border-dashed border-gray-200 rounded-2xl p-6 text-center text-xs text-gray-500 font-sans">
        No active process stages defined for this service yet.
      </div>
    );
  }

  // Calculate completion stats
  const completedCount = stages.filter((s) => s.status === "completed").length;
  const progressPercent = Math.round((completedCount / stages.length) * 100);

  // Find active stage
  const activeIndex = currentStageId
    ? stages.findIndex((s) => s.id === currentStageId)
    : stages.findIndex((s) => s.status === "in_progress");

  const currentStage = stages[activeIndex >= 0 ? activeIndex : 0];

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6 font-sans">
      {/* Header Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-rose-50 text-[#c92c41] text-[10px] font-bold px-2.5 py-1 rounded-full border border-rose-100 inline-flex items-center gap-1">
              <ShieldCheck size={12} />
              Active Workflow
            </span>
            <span className="text-xs font-semibold text-gray-400 font-mono">
              Stage {Math.max(activeIndex + 1, 1)} of {stages.length}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1.5 leading-snug">
            {serviceTitle}
          </h3>
          {currentStage && (
            <p className="text-xs text-gray-500 mt-0.5">
              Current Focus: <span className="font-semibold text-gray-800">{currentStage.title}</span>
            </p>
          )}
        </div>

        {/* Progress Circle & Bar */}
        <div className="flex items-center gap-3 self-start sm:self-auto bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200/80">
          <div className="text-right">
            <span className="text-xs font-bold text-gray-900 block leading-tight">{progressPercent}%</span>
            <span className="text-[10px] font-medium text-gray-400">Completed</span>
          </div>
          <div className="w-16 sm:w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-[#c92c41] h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Vertical Stepper Timeline */}
      <div className="space-y-4 relative pl-2 sm:pl-4">
        {/* Connecting Vertical Line */}
        <div className="absolute left-[17px] sm:left-[25px] top-3 bottom-3 w-0.5 bg-gray-200 -z-0" />

        {stages.map((stage, idx) => {
          const isCompleted = stage.status === "completed";
          const isInProgress = stage.status === "in_progress" || (currentStageId && stage.id === currentStageId);
          const isPending = stage.status === "pending" && !isInProgress;

          return (
            <motion.div
              key={stage.id || idx}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className={`flex items-start gap-4 p-3.5 sm:p-4 rounded-xl transition-all relative z-10 ${
                isInProgress
                  ? "bg-rose-50/60 border border-[#c92c41]/30 shadow-xs"
                  : isCompleted
                  ? "bg-white border border-gray-100"
                  : "bg-gray-50/50 border border-transparent"
              }`}
            >
              {/* Icon Marker */}
              <div className="shrink-0 mt-0.5">
                {isCompleted ? (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <CheckCircle2 size={16} />
                  </div>
                ) : isInProgress ? (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c92c41] text-white flex items-center justify-center shadow-md animate-pulse">
                    <CircleDot size={16} />
                  </div>
                ) : (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                    <Clock size={14} />
                  </div>
                )}
              </div>

              {/* Stage Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={`text-xs sm:text-sm font-bold truncate ${
                      isInProgress
                        ? "text-[#c92c41]"
                        : isCompleted
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    Step {idx + 1}: {stage.title}
                  </h4>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider ${
                      isCompleted
                        ? "bg-emerald-100 text-emerald-700"
                        : isInProgress
                        ? "bg-rose-100 text-[#c92c41]"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isCompleted ? "Completed" : isInProgress ? "In Progress" : "Pending"}
                  </span>
                </div>

                {stage.description && (
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      isInProgress ? "text-gray-700 font-medium" : "text-gray-500"
                    }`}
                  >
                    {stage.description}
                  </p>
                )}

                {stage.updatedAt && (
                  <span className="text-[10px] text-gray-400 mt-1.5 block font-mono">
                    Last updated: {new Date(stage.updatedAt).toLocaleDateString("en-IN")}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
