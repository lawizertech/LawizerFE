"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { serverApi } from "@/lib/apis/axios";
import ServiceChat from "./ServiceChat";
import { useAuth } from "@/context/authContext";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type DocumentItem = {
  key: string;
  label: string;
  required: boolean;
  status: "PENDING" | "UPLOADED" | "APPROVED" | "REJECTED";
  fileUrl?: string | null;
};

type ExpertFile = {
  id: string;
  title: string;
  fileUrl: string;
  uploadedAt: any;
};

type ActiveService = {
  serviceId: string;
  serviceCode: string;
  title: string;
  status: "ACTIVE" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  documentStats: {
    totalRequired: number;
    uploaded: number;
    approved: number;
    pending: number;
  };
};

type ServiceDetails = ActiveService & {
  instructions?: string | null;
  documentsRequired: DocumentItem[];
  expertUploadedFiles?: ExpertFile[];
};

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */

export default function ActiveServicesTab() {
  const [services, setServices] = useState<ActiveService[]>([]);
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [uploadingDoc, setUploadingDoc] = useState<string | null>(null);
  const { user } = useAuth();

  /* ===================== LOAD SERVICES ===================== */

  useEffect(() => {
    const load = async () => {
      try {
        const res = await serverApi.get("/api/user/services");
        setServices(res.data.services || []);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  /* ===================== LOAD DETAILS ===================== */

  const openService = async (serviceId: string) => {
    try {
      setDetailsLoading(true);
      const res = await serverApi.get(`/api/user/services/${serviceId}`);
      setSelectedService({
        ...res.data.service,
        expertUploadedFiles: res.data.service.expertUploadedFiles || [],
      });
    } finally {
      setDetailsLoading(false);
    }
  };

  /* ===================== UPLOAD DOC ===================== */

  const uploadDocument = async (docKey: string, file: File) => {
    try {
      setUploadingDoc(docKey);

      const formData = new FormData();
      formData.append("documentKey", docKey);
      formData.append("file", file);

      await serverApi.post(
        `/api/user/services/${selectedService?.serviceId}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      await openService(selectedService!.serviceId);
    } finally {
      setUploadingDoc(null);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                  STATES                                    */
  /* -------------------------------------------------------------------------- */

  if (loading) {
    return <p className="text-sm text-gray-500">Loading active services…</p>;
  }

  /* -------------------------------------------------------------------------- */
  /*                             DETAILS VIEW                                   */
  /* -------------------------------------------------------------------------- */

  if (selectedService) {
    const expertFiles = selectedService.expertUploadedFiles ?? [];

    return (
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6 max-w-4xl"
      >
        {/* BACK */}
        <button
          onClick={() => setSelectedService(null)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to Active Services
        </button>

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-semibold">{selectedService.title}</h2>
          <p className="text-sm text-gray-500">{selectedService.serviceCode}</p>
        </div>

        {/* DOCUMENTS */}
        <div className="bg-white border rounded-xl p-5 space-y-4">
          <h3 className="font-medium text-lg">Documents</h3>

          {detailsLoading ? (
            <p className="text-sm text-gray-500">Loading documents…</p>
          ) : (
            selectedService.documentsRequired.map((doc) => (
              <div
                key={doc.key}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} />
                  <div>
                    <p className="text-sm font-medium">{doc.label}</p>
                    <p className="text-xs text-gray-500">{doc.status}</p>
                  </div>
                </div>

                {(doc.status === "PENDING" || doc.status === "REJECTED") && (
                  <label className="cursor-pointer flex items-center gap-2 text-sm text-[#c92c41]">
                    <Upload size={16} />
                    {uploadingDoc === doc.key ? "Uploading..." : "Upload"}
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          uploadDocument(doc.key, e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                )}

                {doc.status === "APPROVED" && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Approved
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        {/* ================= EXPERT SHARED DOCUMENTS ================= */}
        {expertFiles.length > 0 && (
          <div className="bg-white border rounded-xl p-5 space-y-4">
            <h3 className="font-medium text-lg">Documents from Expert</h3>

            {expertFiles.map((file) => (
              <div
                key={file.id}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <div>
                  <p className="font-medium text-sm">{file.title}</p>
                  <p className="text-xs text-gray-500">Uploaded by expert</p>
                </div>

                <a
                  href={file.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c92c41] underline"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        )}

        {/* INSTRUCTIONS */}
        {selectedService.instructions && (
          <div className="bg-white border rounded-xl p-5">
            <h3 className="font-medium mb-1">Instructions</h3>
            <p className="text-sm text-gray-700">
              {selectedService.instructions}
            </p>
          </div>
        )}

        {/* ================= CHAT WITH EXPERT ================= */}
        {user?.uid ? (
          <ServiceChat
            serviceId={selectedService.serviceId}
            currentUserRole="USER"
            currentUserId={user?.uid}
          />
        ) : (
          <p className="text-sm text-gray-500">Loading chat…</p>
        )}
      </motion.div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                              LIST VIEW                                     */
  /* -------------------------------------------------------------------------- */

  if (services.length === 0) {
    return <p className="text-sm text-gray-500">No active services yet.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-semibold">Active Services</h2>
        <p className="text-sm text-gray-500">
          Ongoing legal services & document submissions
        </p>
      </div>

      {/* LIST */}
      {services.map((s) => (
        <div
          key={s.serviceId}
          className="border rounded-xl p-5 bg-white flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-xs text-gray-500">{s.serviceCode}</p>
            <p className="text-sm mt-1"></p>
            <p className="text-xs text-gray-500 mt-1">
              Documents: {s.documentStats.uploaded}/
              {s.documentStats.totalRequired} uploaded
            </p>
          </div>

          <button
            onClick={() => openService(s.serviceId)}
            className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-50"
          >
            View Details
          </button>
        </div>
      ))}
    </motion.div>
  );
}
