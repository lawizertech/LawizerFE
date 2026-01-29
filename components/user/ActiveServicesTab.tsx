"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { serverApi } from "@/lib/apis/axios";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type DocumentItem = {
  name: string;
  status: "pending" | "uploaded" | "approved" | "rejected";
  fileUrl?: string;
};

type ActiveService = {
  serviceId: string;
  serviceName: string;
  category: string;
  fee: number;
  status: "active";
  expertName: string;
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
      setSelectedService(res.data.service);
    } finally {
      setDetailsLoading(false);
    }
  };

  /* ===================== UPLOAD DOC ===================== */

  const uploadDocument = async (docName: string, file: File) => {
    try {
      setUploadingDoc(docName);

      // 🔹 upload to storage (placeholder)
      const fakeUrl = URL.createObjectURL(file);

      await serverApi.post(
        `/api/user/services/${selectedService?.serviceId}/upload`,
        {
          documentName: docName,
          fileUrl: fakeUrl,
        },
      );

      // reload details
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
          <h2 className="text-2xl font-semibold">
            {selectedService.serviceName}
          </h2>
          <p className="text-sm text-gray-500">
            {selectedService.category} · Expert: {selectedService.expertName}
          </p>
        </div>

        {/* DOCUMENTS */}
        <div className="bg-white border rounded-xl p-5 space-y-4">
          <h3 className="font-medium text-lg">Documents</h3>

          {detailsLoading ? (
            <p className="text-sm text-gray-500">Loading documents…</p>
          ) : (
            selectedService.documentsRequired.map((doc) => (
              <div
                key={doc.name}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} />
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500 capitalize">
                      {doc.status}
                    </p>
                  </div>
                </div>

                {(doc.status === "pending" || doc.status === "rejected") && (
                  <label className="cursor-pointer flex items-center gap-2 text-sm text-[#c92c41]">
                    <Upload size={16} />
                    {uploadingDoc === doc.name ? "Uploading..." : "Upload"}
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          uploadDocument(doc.name, e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                )}

                {doc.status === "approved" && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Approved
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        {/* INSTRUCTIONS */}
        {selectedService.instructions && (
          <div className="bg-white border rounded-xl p-5">
            <h3 className="font-medium mb-1">Instructions</h3>
            <p className="text-sm text-gray-700">
              {selectedService.instructions}
            </p>
          </div>
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
            <h3 className="font-semibold">{s.serviceName}</h3>
            <p className="text-xs text-gray-500">{s.category}</p>
            <p className="text-sm mt-1">
              Expert: <span className="font-medium">{s.expertName}</span>
            </p>
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
