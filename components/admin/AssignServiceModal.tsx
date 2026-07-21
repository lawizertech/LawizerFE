"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2, Code, Layers, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { serverApi } from "@/lib/apis/axios";
import { PRESET_SERVICE_TEMPLATES, type StageItem } from "@/lib/services/serviceStageTemplates";

interface AssignServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AssignServiceModal({ isOpen, onClose, onSuccess }: AssignServiceModalProps) {
  const [clients, setClients] = useState<any[]>([]);
  const [experts, setExperts] = useState<any[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  // Form state
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedExpertId, setSelectedExpertId] = useState("");
  const [selectedPresetKey, setSelectedPresetKey] = useState("gst_registration");
  const [customServiceName, setCustomServiceName] = useState("GST Registration");
  const [stages, setStages] = useState<StageItem[]>(PRESET_SERVICE_TEMPLATES[0].stages);

  // Tab mode: "visual" | "json"
  const [tabMode, setTabMode] = useState<"visual" | "json">("visual");
  const [rawJson, setRawJson] = useState(JSON.stringify(PRESET_SERVICE_TEMPLATES[0].stages, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch users & experts when opened
  useEffect(() => {
    if (!isOpen) return;

    const loadData = async () => {
      try {
        setLoadingUsers(true);
        const [usersRes, expertsRes] = await Promise.all([
          serverApi.get("/api/admin/users"),
          serverApi.get("/api/admin/experts"),
        ]);

        if (usersRes.data?.data) setClients(usersRes.data.data);
        if (expertsRes.data?.data) setExperts(expertsRes.data.data);
      } catch (err) {
        console.error("Failed to load users/experts for assignment:", err);
      } finally {
        setLoadingUsers(false);
      }
    };

    loadData();
  }, [isOpen]);

  // Handle Preset Select
  const handlePresetChange = (key: string) => {
    setSelectedPresetKey(key);
    if (key === "custom") {
      setCustomServiceName("Custom Legal Service");
      const defaultCustom: StageItem[] = [
        { id: "stage-1", title: "Stage 1: Requirements", description: "Initial setup", status: "completed" },
        { id: "stage-2", title: "Stage 2: Filing", description: "In progress", status: "in_progress" },
      ];
      setStages(defaultCustom);
      setRawJson(JSON.stringify(defaultCustom, null, 2));
      return;
    }

    const found = PRESET_SERVICE_TEMPLATES.find((t) => t.key === key);
    if (found) {
      setCustomServiceName(found.title);
      setStages(found.stages);
      setRawJson(JSON.stringify(found.stages, null, 2));
    }
  };

  // Sync JSON editor -> Stages
  const handleJsonChange = (val: string) => {
    setRawJson(val);
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) {
        setStages(parsed);
        setJsonError(null);
      } else {
        setJsonError("JSON blob must be an array of stage items");
      }
    } catch (err: any) {
      setJsonError("Invalid JSON syntax: " + err.message);
    }
  };

  // Sync Visual -> JSON
  const updateStagesVisual = (newStages: StageItem[]) => {
    setStages(newStages);
    setRawJson(JSON.stringify(newStages, null, 2));
  };

  // Visual stage edit helpers
  const handleAddStage = () => {
    const newStage: StageItem = {
      id: `stage-${stages.length + 1}`,
      title: `Stage ${stages.length + 1}: Step Title`,
      description: "Step description details",
      status: "pending",
    };
    updateStagesVisual([...stages, newStage]);
  };

  const handleRemoveStage = (index: number) => {
    const updated = stages.filter((_, i) => i !== index);
    updateStagesVisual(updated);
  };

  const handleStageFieldChange = (index: number, field: keyof StageItem, val: string) => {
    const updated = [...stages];
    updated[index] = { ...updated[index], [field]: val, updatedAt: new Date().toISOString() };
    updateStagesVisual(updated);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClientId) {
      alert("Please select a client to assign the service to.");
      return;
    }
    if (jsonError) {
      alert("Please fix the JSON errors before submitting.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await serverApi.post("/api/admin/assign-service", {
        clientId: selectedClientId,
        professionalId: selectedExpertId || undefined,
        caseType: customServiceName,
        title: customServiceName,
        stages: stages,
      });

      if (res.data?.success) {
        onSuccess();
        onClose();
      } else {
        alert(res.data?.message || "Failed to assign service");
      }
    } catch (err: any) {
      console.error("Assign service error:", err);
      alert(err?.response?.data?.message || err.message || "Failed to assign service");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 font-sans animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-2xl max-h-[90dvh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <Sparkles size={18} className="text-amber-400" />
              Assign Service & Process Stages
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Assign an offline or ongoing service to a client with custom stage tracking.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {loadingUsers ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <Loader2 size={28} className="animate-spin text-[#c92c41] mb-2" />
              <span className="text-xs font-semibold">Loading clients & professionals...</span>
            </div>
          ) : (
            <>
              {/* Client & Expert Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Select Client *
                  </label>
                  <select
                    value={selectedClientId}
                    onChange={(e) => setSelectedClientId(e.target.value)}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-[#c92c41]/20 focus:border-[#c92c41]"
                  >
                    <option value="">-- Choose Client --</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name || c.email} ({c.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Assigned Lawyer / Expert (Optional)
                  </label>
                  <select
                    value={selectedExpertId}
                    onChange={(e) => setSelectedExpertId(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-[#c92c41]/20 focus:border-[#c92c41]"
                  >
                    <option value="">-- Unassigned for now --</option>
                    {experts.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name || e.email} ({e.role || "Expert"})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service Preset & Custom Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Service Template
                  </label>
                  <select
                    value={selectedPresetKey}
                    onChange={(e) => handlePresetChange(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-[#c92c41]/20 focus:border-[#c92c41]"
                  >
                    {PRESET_SERVICE_TEMPLATES.map((t) => (
                      <option key={t.key} value={t.key}>
                        {t.title} ({t.category})
                      </option>
                    ))}
                    <option value="custom">-- Custom Service & Stages --</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Service Title
                  </label>
                  <input
                    type="text"
                    value={customServiceName}
                    onChange={(e) => setCustomServiceName(e.target.value)}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-[#c92c41]/20 focus:border-[#c92c41]"
                  />
                </div>
              </div>

              {/* Stage Editor Tabs */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-slate-50">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-gray-200">
                  <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                    <Layers size={15} className="text-[#c92c41]" />
                    Process Stages Config ({stages.length} Steps)
                  </span>

                  <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-gray-200">
                    <button
                      type="button"
                      onClick={() => setTabMode("visual")}
                      className={`px-3 py-1 text-[11px] font-bold rounded-md transition ${
                        tabMode === "visual"
                          ? "bg-[#c92c41] text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Visual Editor
                    </button>
                    <button
                      type="button"
                      onClick={() => setTabMode("json")}
                      className={`px-3 py-1 text-[11px] font-bold rounded-md transition flex items-center gap-1 ${
                        tabMode === "json"
                          ? "bg-[#c92c41] text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Code size={12} />
                      Raw JSON Blob
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  {tabMode === "visual" ? (
                    <div className="space-y-3">
                      {stages.map((stg, idx) => (
                        <div
                          key={stg.id || idx}
                          className="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2 relative shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-gray-400 font-mono shrink-0">
                              #{idx + 1}
                            </span>
                            <input
                              type="text"
                              value={stg.title}
                              onChange={(e) => handleStageFieldChange(idx, "title", e.target.value)}
                              placeholder="Stage Title"
                              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-800 outline-none focus:bg-white focus:border-[#c92c41]"
                            />
                            <select
                              value={stg.status}
                              onChange={(e) => handleStageFieldChange(idx, "status", e.target.value as any)}
                              className={`text-[11px] font-bold px-2 py-1 rounded-lg border outline-none ${
                                stg.status === "completed"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : stg.status === "in_progress"
                                  ? "bg-rose-50 text-[#c92c41] border-rose-200"
                                  : "bg-gray-50 text-gray-600 border-gray-200"
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="in_progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>

                            <button
                              type="button"
                              onClick={() => handleRemoveStage(idx)}
                              className="p-1 text-gray-400 hover:text-rose-600 transition cursor-pointer"
                              title="Delete stage"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>

                          <input
                            type="text"
                            value={stg.description || ""}
                            onChange={(e) => handleStageFieldChange(idx, "description", e.target.value)}
                            placeholder="Stage description & instructions..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-600 outline-none focus:bg-white focus:border-[#c92c41]"
                          />
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={handleAddStage}
                        className="w-full py-2 border border-dashed border-gray-300 hover:border-[#c92c41] hover:text-[#c92c41] text-gray-500 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                      >
                        <Plus size={14} />
                        Add Next Process Stage
                      </button>
                    </div>
                  ) : (
                    <div>
                      <textarea
                        value={rawJson}
                        onChange={(e) => handleJsonChange(e.target.value)}
                        rows={10}
                        className="w-full font-mono text-xs bg-slate-900 text-emerald-400 p-3 rounded-xl border border-slate-800 outline-none focus:ring-1 focus:ring-emerald-500 leading-relaxed"
                      />
                      {jsonError && (
                        <p className="text-xs text-rose-500 font-semibold mt-1">{jsonError}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Footer Submit */}
          <div className="pt-2 flex items-center justify-end gap-3 shrink-0 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || !!jsonError}
              className="px-5 py-2 bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-rose-300 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              {submitting ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle2 size={14} />}
              <span>{submitting ? "Assigning..." : "Assign Service to Client"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
