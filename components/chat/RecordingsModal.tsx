import { useState, useEffect } from "react";
import { X, Loader2, PlayCircle, Calendar } from "lucide-react";
import axios from "axios";

interface Recording {
  filename: string;
  url: string;
  start_time: string;
  end_time: string;
  session_id: string;
  recording_type: string;
}

interface MeetingRecordingGroup {
  meetingId: string;
  meetingTitle: string;
  meetingDate: string;
  recordings: Recording[];
}

export function RecordingsModal({
  caseId,
  onClose,
}: {
  caseId: string;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const [recordingGroups, setRecordingGroups] = useState<MeetingRecordingGroup[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        setLoading(true);
        const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
        // The endpoint is public as per request
        const res = await axios.get(`${backendUrl}/meetings/${caseId}/recordings`);
        if (res.data?.recordings) {
          setRecordingGroups(res.data.recordings);
        }
      } catch (err) {
        console.error("Failed to fetch recordings", err);
        setError("Failed to load recordings");
      } finally {
        setLoading(false);
      }
    };

    fetchRecordings();
  }, [caseId]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <PlayCircle className="text-emerald-500" size={20} />
            Session Recordings
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-white bg-slate-950">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500 mb-4" />
              <p>Loading recordings...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-rose-400">
              <p>{error}</p>
            </div>
          ) : recordingGroups.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <PlayCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>No recordings available for this case yet.</p>
              <p className="text-xs mt-2 text-slate-500">Recordings may take a few minutes to process after a session ends.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {recordingGroups.map((group) => (
                <div key={group.meetingId} className="bg-slate-900 border border-white/5 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-slate-800/50 border-b border-white/5 flex items-center justify-between">
                    <h3 className="font-semibold text-sm">{group.meetingTitle || 'Meeting Session'}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={14} />
                      {new Date(group.meetingDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {group.recordings.map((rec) => (
                      <div key={rec.filename} className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <PlayCircle size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Recording Segment</p>
                            <p className="text-xs text-slate-500">
                              {new Date(rec.start_time).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })} - {new Date(rec.end_time).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })}
                            </p>
                          </div>
                        </div>
                        <a
                          href={rec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition"
                        >
                          Watch
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
