"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { serverApi } from "@/lib/apis/axios";
import {
  SERVICES_BY_CATEGORY,
  SERVICE_DOCUMENT_TEMPLATES,
} from "@/lib/services/documents";

type User = {
  uid: string;
  displayName: string;
};

export default function RequestServiceTab() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [fee, setFee] = useState("");

  const [templateDocs, setTemplateDocs] = useState<string[]>([]);
  const [customDocs, setCustomDocs] = useState<string[]>([]);
  const [newDoc, setNewDoc] = useState("");
  const [instructions, setInstructions] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [requests, setRequests] = useState<any[]>([]);

  /* =========================
     LOAD CONSULTED USERS
  ========================= */

  useEffect(() => {
    const loadUsers = async () => {
      const res = await serverApi.get("/api/expert/consulted-users");
      setUsers(res.data.users || []);
    };
    loadUsers();
  }, []);

  useEffect(() => {
    const loadRequests = async () => {
      const res = await serverApi.get("/api/expert/service-requests");
      setRequests(res.data.services || []);
    };
    loadRequests();
  }, []);

  /* =========================
     LOAD DOC TEMPLATE
  ========================= */

  useEffect(() => {
    if (service) {
      setTemplateDocs(SERVICE_DOCUMENT_TEMPLATES[service] || []);
    } else {
      setTemplateDocs([]);
    }
    setCustomDocs([]);
  }, [service]);

  /* =========================
     CUSTOM DOC HANDLERS
  ========================= */

  const addCustomDoc = () => {
    if (!newDoc.trim()) return;
    setCustomDocs((prev) => [...prev, newDoc.trim()]);
    setNewDoc("");
  };

  const removeCustomDoc = (idx: number) => {
    setCustomDocs((prev) => prev.filter((_, i) => i !== idx));
  };

  /* =========================
     FINAL DOCUMENT LIST
  ========================= */

  const finalDocuments = [
    ...templateDocs.map((d) => ({ name: d, status: "pending" })),
    ...customDocs.map((d) => ({ name: d, status: "pending" })),
  ];

  /* =========================
     SUBMIT
  ========================= */

  const submitRequest = async () => {
    if (!selectedUser || !service || !fee) return;

    try {
      setSubmitting(true);

      await serverApi.post("/api/expert/request-service", {
        userId: selectedUser,
        category,
        serviceName: service,
        fee: Number(fee),
        documentsRequired: finalDocuments,
        instructions,
      });

      alert("Service request sent to admin");

      // reset
      setCategory("");
      setService("");
      setFee("");
      setTemplateDocs([]);
      setCustomDocs([]);
      setInstructions("");
      setSelectedUser("");
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to request service");
    } finally {
      setSubmitting(false);
    }
  };

  /* =========================
     UI
  ========================= */

  return (
    <motion.div
      className="space-y-10 max-w-3xl"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Request a Service
        </h2>
        <p className="text-gray-500 mt-1">
          Convert a consultation into a legal service
        </p>
      </div>

      {/* CLIENT */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Select Client
        </label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full rounded-xl border px-4 py-3 bg-white"
        >
          <option value="">Select consulted client</option>
          {users.map((u) => (
            <option key={u.uid} value={u.uid}>
              {u.displayName}
            </option>
          ))}
        </select>
      </div>

      {/* CATEGORY */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Service Category
        </label>
        <div className="flex gap-3 flex-wrap">
          {Object.keys(SERVICES_BY_CATEGORY).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setService("");
              }}
              className={`px-4 py-2 rounded-xl border transition
                ${
                  category === cat
                    ? "bg-[#c92c41] text-white border-[#c92c41]"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SERVICE */}
      {category && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select Service
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 bg-white"
          >
            <option value="">Choose a service</option>
            {SERVICES_BY_CATEGORY[category].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* FEE */}
      {service && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Service Fee (₹)
          </label>
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            placeholder="Enter service fee"
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>
      )}

      {/* DOCUMENTS */}
      {templateDocs.length > 0 && (
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700">
            Documents Required
          </label>

          {/* TEMPLATE DOCS */}
          <div className="bg-white border rounded-xl p-4 space-y-3">
            {templateDocs.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="h-4 w-4 accent-[#c92c41]"
                />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          {/* CUSTOM DOCS */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">
              Add Additional Documents (optional)
            </p>

            <div className="flex gap-2">
              <input
                value={newDoc}
                onChange={(e) => setNewDoc(e.target.value)}
                placeholder="e.g. Passport Copy"
                className="flex-1 rounded-xl border px-4 py-2"
              />
              <button
                type="button"
                onClick={addCustomDoc}
                className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm"
              >
                Add
              </button>
            </div>

            {customDocs.length > 0 && (
              <div className="bg-gray-50 border rounded-xl p-4 space-y-2">
                {customDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm"
                  >
                    <span>{doc}</span>
                    <button
                      onClick={() => removeCustomDoc(idx)}
                      className="text-red-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* INSTRUCTIONS */}
      {service && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Additional Instructions (optional)
          </label>
          <textarea
            rows={3}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 resize-none"
          />
        </div>
      )}

      {/* SUBMIT */}
      <button
        disabled={submitting || !selectedUser || !service || !fee}
        onClick={submitRequest}
        className="px-6 py-3 mb-8 rounded-xl bg-[#c92c41] text-white font-medium disabled:opacity-50"
      >
        {submitting ? "Requesting..." : "Request Service"}
      </button>

      {/* =========================
   MY SERVICE REQUESTS
========================= */}
      <div className="space-y-4 pt-10 border-t">
        <h3 className="text-lg font-semibold">My Service Requests</h3>

        {requests.length === 0 ? (
          <p className="text-sm text-gray-500">No service requests yet</p>
        ) : (
          <div className="space-y-3">
            {requests.map((r) => (
              <div
                key={r.serviceId}
                className="border rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{r.serviceName}</p>
                  <p className="text-sm text-gray-500">
                    Client: {r.userDetails?.name}
                  </p>
                  <p className="text-xs text-gray-400">Fee: ₹{r.fee}</p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    r.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : r.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
