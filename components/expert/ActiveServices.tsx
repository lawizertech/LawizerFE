"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, ArrowLeft } from "lucide-react";
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
  userDetails?: {
    name: string;
    email: string;
  };
  documentStats?: {
    totalRequired: number;
    uploaded: number;
    approved: number;
    pending: number;
  };
};

type ServiceDetails = ActiveService & {
  documentsRequired: DocumentItem[];
  instructions?: string | null;
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

  /* ------------------------------ LOAD LIST -------------------------------- */

  useEffect(() => {
    const load = async () => {
      try {
        const res = await serverApi.get("/api/expert/active-services");
        setServices(res.data.services || []);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  /* --------------------------- LOAD DETAILS -------------------------------- */

  const openService = async (serviceId: string) => {
    try {
      setDetailsLoading(true);
      const res = await serverApi.get(`/api/expert/services/${serviceId}`);
      setSelectedService(res.data.service);
    } finally {
      setDetailsLoading(false);
    }
  };

  /* ------------------------------ STATES ---------------------------------- */

  if (loading) {
    return <p className="text-sm text-gray-500">Loading services…</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-5xl"
    >
      {/* =========================
          PAGE HEADER
      ========================= */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Active Services
        </h1>
        <p className="text-sm text-gray-500">
          Ongoing services and document progress
        </p>
      </div>

      {/* =========================
          DETAIL VIEW
      ========================= */}
      {selectedService ? (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
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
            <h2 className="text-xl font-semibold">
              {selectedService.serviceName}
            </h2>
            <p className="text-sm text-gray-500">{selectedService.category}</p>
          </div>

          {/* CLIENT INFO */}
          <div className="bg-white border rounded-xl p-4">
            <h3 className="font-medium mb-2">Client</h3>
            <p className="font-medium">{selectedService.userDetails?.name}</p>
            <p className="text-sm text-gray-500">
              {selectedService.userDetails?.email}
            </p>
          </div>

          {/* DOCUMENTS */}
          <div className="bg-white border rounded-xl p-4 space-y-3">
            <h3 className="font-medium">Documents</h3>

            {detailsLoading ? (
              <p className="text-sm text-gray-500">Loading documents…</p>
            ) : (
              selectedService.documentsRequired.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{doc.name}</span>

                  <span
                    className={`capitalize text-xs px-2 py-1 rounded-full
                      ${
                        doc.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : doc.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : doc.status === "uploaded"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* INSTRUCTIONS */}
          {selectedService.instructions && (
            <div className="bg-white border rounded-xl p-4">
              <h3 className="font-medium mb-1">Instructions</h3>
              <p className="text-sm text-gray-700">
                {selectedService.instructions}
              </p>
            </div>
          )}
        </motion.div>
      ) : /* =========================
            LIST VIEW
        ========================= */
      services.length === 0 ? (
        <p className="text-sm text-gray-500">No active services yet.</p>
      ) : (
        <div className="space-y-4">
          {services.map((s) => (
            <div
              key={s.serviceId}
              className="border rounded-xl p-4 bg-white flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{s.serviceName}</h3>
                <p className="text-xs text-gray-500">{s.category}</p>

                <p className="text-sm mt-1">
                  Client:{" "}
                  <span className="font-medium">
                    {s.userDetails?.name || "N/A"}
                  </span>
                </p>

                {s.documentStats && (
                  <p className="text-xs text-gray-500 mt-1">
                    Documents: {s.documentStats.uploaded}/
                    {s.documentStats.totalRequired} uploaded
                  </p>
                )}
              </div>

              <button
                onClick={() => openService(s.serviceId)}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border hover:bg-gray-50"
              >
                <Eye size={16} />
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
