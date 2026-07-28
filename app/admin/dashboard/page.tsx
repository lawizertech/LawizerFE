"use client";

import { useEffect, useState } from "react";
import {
  ShieldAlert,
  Users,
  Briefcase,
  UserCheck,
  CreditCard,
  RefreshCw,
  Plus,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Code2,
  Search,
  ArrowRight,
  Sparkles,
  Scale,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { AssignServiceModal } from "@/components/admin/AssignServiceModal";
import { NotificationsTab } from "@/components/admin/NotificationsTab";
import { Bell } from "lucide-react";

interface CaseItem {
  id: string;
  client_id: string;
  professional_id?: string | null;
  case_type: string;
  status: string;
  metadata?: any;
  created_at: string;
  client?: { id: string; name?: string; email?: string; phone?: string };
  professional?: { id: string; name?: string; email?: string; role?: string };
}

interface UserItem {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  created_at?: string;
}

interface TransactionItem {
  id: string;
  case_id: string;
  amount?: number | string;
  status?: string;
  razorpay_order_id?: string;
  created_at?: string;
  case?: any;
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"cases" | "clients" | "experts" | "transactions" | "api" | "notifications">("cases");

  // Data states
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [clients, setClients] = useState<UserItem[]>([]);
  const [experts, setExperts] = useState<UserItem[]>([]);
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Assignment Modal / Form states
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isStageServiceModalOpen, setIsStageServiceModalOpen] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState("");
  const [selectedProfId, setSelectedProfId] = useState("");
  const [selectedClientId, setSelectedClientId] = useState("");
  const [caseTitleInput, setCaseTitleInput] = useState("");
  const [assigning, setAssigning] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // API Playground state
  const [apiEndpoint, setApiEndpoint] = useState("/api/admin/cases");
  const [apiMethod, setApiMethod] = useState<"GET" | "POST">("GET");
  const [apiRequestBody, setApiRequestBody] = useState("{}");
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [apiTesting, setApiTesting] = useState(false);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  const loadAllData = async () => {
    try {
      setLoading(true);
      setErrorMsg(null);

      const [casesRes, clientsRes, expertsRes, txRes] = await Promise.allSettled([
        fetch("/api/admin/cases").then((r) => r.json()),
        fetch("/api/admin/users").then((r) => r.json()),
        fetch("/api/admin/experts").then((r) => r.json()),
        fetch("/api/admin/transactions").then((r) => r.json()),
      ]);

      if (casesRes.status === "fulfilled" && casesRes.value.success) {
        setCases(casesRes.value.data || []);
      }
      if (clientsRes.status === "fulfilled" && clientsRes.value.success) {
        setClients(clientsRes.value.data || []);
      }
      if (expertsRes.status === "fulfilled" && expertsRes.value.success) {
        setExperts(expertsRes.value.data || []);
      }
      if (txRes.status === "fulfilled" && txRes.value.success) {
        setTransactions(txRes.value.data || []);
      }
    } catch (err: any) {
      console.error("Admin load error:", err);
      setErrorMsg("Failed to load admin data from backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadAllData();
  }, []);

  const handleAssignCaseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProfId) {
      alert("Please select or enter a Professional ID");
      return;
    }

    try {
      setAssigning(true);
      const res = await fetch("/api/admin/assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: selectedCaseId || undefined,
          professionalId: selectedProfId,
          clientId: selectedClientId || undefined,
          title: caseTitleInput || "Corporate Legal Consultation",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || "Failed to assign case");
      }

      setSuccessToast(
        data.message || `Case assigned successfully to professional!`
      );
      setIsAssignModalOpen(false);
      setSelectedCaseId("");
      setSelectedProfId("");
      setSelectedClientId("");
      setCaseTitleInput("");

      // Refresh list
      await loadAllData();

      setTimeout(() => setSuccessToast(null), 4000);
    } catch (err: any) {
      alert(err.message || "Failed to assign case");
    } finally {
      setAssigning(false);
    }
  };

  const handleTestApi = async () => {
    try {
      setApiTesting(true);
      setApiResponse("Sending request...");
      const options: RequestInit = {
        method: apiMethod,
        headers: { "Content-Type": "application/json" },
      };
      if (apiMethod === "POST" && apiRequestBody) {
        options.body = apiRequestBody;
      }

      const startTime = performance.now();
      const res = await fetch(apiEndpoint, options);
      const endTime = performance.now();
      const data = await res.json();

      setApiResponse(
        JSON.stringify(
          {
            status: res.status,
            statusText: res.statusText,
            responseTime: `${Math.round(endTime - startTime)}ms`,
            responseBody: data,
          },
          null,
          2
        )
      );
    } catch (err: any) {
      setApiResponse(JSON.stringify({ error: err.message }, null, 2));
    } finally {
      setApiTesting(false);
    }
  };

  const openAssignModalForCase = (caseItem: CaseItem) => {
    setSelectedCaseId(caseItem.id);
    setSelectedClientId(caseItem.client_id);
    setSelectedProfId(caseItem.professional_id || (experts[0]?.id ?? ""));
    setCaseTitleInput(caseItem.metadata?.title || caseItem.case_type || "");
    setIsAssignModalOpen(true);
  };

  const filteredCases = cases.filter(
    (c) =>
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.metadata?.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.client?.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.professional?.name || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
                <Sparkles size={12} /> Public Dev Mode — No Auth Required
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 flex items-center gap-3">
              <ShieldAlert className="text-[#c92c41]" size={32} />
              Lawizer Admin Control Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Public test suite to inspect users, assign cases to professionals, and test all backend endpoints live.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={loadAllData}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition cursor-pointer"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>

            <button
              onClick={() => setIsStageServiceModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/20 transition cursor-pointer"
            >
              <Sparkles size={15} />
              Assign Service & Stages (JSON)
            </button>

            <button
              onClick={() => {
                setSelectedCaseId("");
                setSelectedProfId(experts[0]?.id || "");
                setSelectedClientId(clients[0]?.id || "");
                setCaseTitleInput("Corporate Tax Compliance Case");
                setIsAssignModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-900/20 transition cursor-pointer"
            >
              <Plus size={16} />
              Assign / Create Case
            </button>

            <Link
              href="/user/dashboard/chats"
              target="_blank"
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-rose-300 flex items-center gap-1.5 border border-slate-700 transition"
            >
              <MessageSquare size={14} />
              Client Chat UI <ExternalLink size={12} />
            </Link>

            <Link
              href="/expert/dashboard?tab=chats"
              target="_blank"
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 border border-slate-700 transition"
            >
              <Scale size={14} />
              Expert Chat UI <ExternalLink size={12} />
            </Link>
          </div>
        </header>

        {/* Success Toast */}
        {successToast && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-3 animate-bounce">
            <CheckCircle2 size={18} className="shrink-0" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Cases</p>
              <p className="text-2xl font-black text-white mt-1">{loading ? "..." : cases.length}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-[#c92c41] flex items-center justify-center font-bold">
              <Briefcase size={24} />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Registered Clients</p>
              <p className="text-2xl font-black text-white mt-1">{loading ? "..." : clients.length}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Professionals</p>
              <p className="text-2xl font-black text-white mt-1">{loading ? "..." : experts.length}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
              <UserCheck size={24} />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Transactions</p>
              <p className="text-2xl font-black text-white mt-1">{loading ? "..." : transactions.length}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <CreditCard size={24} />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          {[
            { id: "cases", label: `Cases (${cases.length})`, icon: Briefcase },
            { id: "clients", label: `Clients (${clients.length})`, icon: Users },
            { id: "experts", label: `Experts (${experts.length})`, icon: UserCheck },
            { id: "transactions", label: `Transactions (${transactions.length})`, icon: CreditCard },
            { id: "notifications", label: "Notifications", icon: Bell },
            { id: "api", label: "API Playground", icon: Code2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                  isActive
                    ? "bg-[#c92c41] text-white shadow-md shadow-rose-900/20"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: CASES */}
        {activeTab === "cases" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3.5 top-3 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search case title, client name, case ID..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-[#c92c41]"
                />
              </div>

              <span className="text-xs text-slate-400">
                Showing {filteredCases.length} of {cases.length} total cases
              </span>
            </div>

            {loading ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 text-xs font-semibold">
                Loading cases...
              </div>
            ) : filteredCases.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 text-xs font-semibold">
                No cases found. Use the "Assign / Create Case" button to create one!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCases.map((c) => (
                  <div
                    key={c.id}
                    className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl space-y-3 relative group transition shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-md">
                          #{c.id.substring(0, 8).toUpperCase()}
                        </span>
                        <h3 className="font-bold text-sm text-white mt-1.5 leading-snug">
                          {c.metadata?.title || c.case_type}
                        </h3>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {c.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-800/80">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                          Client
                        </span>
                        <p className="font-semibold text-slate-200 truncate mt-0.5">
                          {c.client?.name || c.client?.email || c.client_id.substring(0, 8)}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                          Assigned Professional
                        </span>
                        <p
                          className={`font-semibold truncate mt-0.5 ${
                            c.professional ? "text-emerald-400" : "text-amber-400"
                          }`}
                        >
                          {c.professional?.name || c.professional?.email || (c.professional_id ? c.professional_id.substring(0, 8) : "Unassigned")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                      <span>Created: {c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN") : "N/A"}</span>

                      <button
                        onClick={() => openAssignModalForCase(c)}
                        className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-[#c92c41] font-bold flex items-center gap-1 border border-rose-500/20 transition cursor-pointer"
                      >
                        Reassign / Edit <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CLIENTS */}
        {activeTab === "clients" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                <tr>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">User ID (UUID)</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {clients.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-bold text-white">{user.name || "N/A"}</td>
                    <td className="p-4 text-slate-400">{user.email || "N/A"}</td>
                    <td className="p-4 text-slate-400">{user.phone || "N/A"}</td>
                    <td className="p-4 font-mono text-[11px] text-rose-300">{user.id}</td>
                    <td className="p-4">
                      <button
                        onClick={() => {
                          setSelectedClientId(user.id);
                          setSelectedProfId(experts[0]?.id || "");
                          setIsAssignModalOpen(true);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition cursor-pointer"
                      >
                        Assign Case
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: EXPERTS */}
        {activeTab === "experts" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                <tr>
                  <th className="p-4">Professional Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Professional ID (UUID)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {experts.map((exp) => (
                  <tr key={exp.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-bold text-emerald-400">{exp.name || "N/A"}</td>
                    <td className="p-4 text-slate-400">{exp.email || "N/A"}</td>
                    <td className="p-4 font-bold uppercase text-[10px] text-rose-400">{exp.role || "professional"}</td>
                    <td className="p-4 font-mono text-[11px] text-emerald-300">{exp.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: TRANSACTIONS */}
        {activeTab === "transactions" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                <tr>
                  <th className="p-4">Transaction ID</th>
                  <th className="p-4">Razorpay Order ID</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Case ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">
                      No payment records found.
                    </td>
                  </tr>
                ) : (
                  transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-mono text-[11px] text-amber-300">{tx.id.substring(0, 8)}</td>
                      <td className="p-4 font-mono text-slate-400">{tx.razorpay_order_id || "N/A"}</td>
                      <td className="p-4 font-bold text-white">₹{tx.amount || 0}</td>
                      <td className="p-4 font-bold text-emerald-400 uppercase text-[10px]">{tx.status || "completed"}</td>
                      <td className="p-4 font-mono text-slate-400">{tx.case_id}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 5: API PLAYGROUND */}
        {activeTab === "api" && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="text-[#c92c41]" size={20} />
                Live Admin API Endpoint Tester
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Test requests to NestJS backend (`/api/admin/...`) directly from your browser.
              </p>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Quick Presets:</span>
              {[
                { label: "GET /api/admin/cases", method: "GET", path: "/api/admin/cases" },
                { label: "GET /api/admin/users", method: "GET", path: "/api/admin/users" },
                { label: "GET /api/admin/experts", method: "GET", path: "/api/admin/experts" },
                {
                  label: "POST /api/admin/assign",
                  method: "POST",
                  path: "/api/admin/assign",
                  body: JSON.stringify(
                    {
                      caseId: "33333333-3333-4333-8333-333333333333",
                      clientId: clients[0]?.id || "373a1176-112f-4a78-aa99-d8bfc00a1d96",
                      professionalId: experts[0]?.id || "b247e686-0631-4a1c-9adf-9559af1d919d",
                      title: "Corporate Compliance Filing 2026",
                    },
                    null,
                    2
                  ),
                },
              ].map((preset, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setApiMethod(preset.method as any);
                    setApiEndpoint(preset.path);
                    if (preset.body) setApiRequestBody(preset.body);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-rose-300 border border-slate-700 transition cursor-pointer"
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={apiMethod}
                onChange={(e) => setApiMethod(e.target.value as any)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-bold text-emerald-400 outline-none"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
              </select>

              <input
                type="text"
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono outline-none"
              />

              <button
                onClick={handleTestApi}
                disabled={apiTesting}
                className="px-6 py-2.5 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] text-white text-xs font-bold transition cursor-pointer shrink-0"
              >
                {apiTesting ? "Testing..." : "Send Request"}
              </button>
            </div>

            {apiMethod === "POST" && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400">Request Body (JSON):</label>
                <textarea
                  value={apiRequestBody}
                  onChange={(e) => setApiRequestBody(e.target.value)}
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-emerald-300 outline-none"
                />
              </div>
            )}

            {apiResponse && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400">API Response:</label>
                <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-emerald-400 overflow-x-auto max-h-96">
                  {apiResponse}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ASSIGNMENT MODAL */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="text-[#c92c41]" size={20} />
                Assign Case to Professional
              </h3>
              <button
                onClick={() => setIsAssignModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAssignCaseSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Select / Enter Professional:</label>
                <select
                  value={selectedProfId}
                  onChange={(e) => setSelectedProfId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white outline-none focus:border-[#c92c41]"
                >
                  <option value="">-- Choose a Professional --</option>
                  {experts.map((exp) => (
                    <option key={exp.id} value={exp.id}>
                      {exp.name || exp.email} ({exp.role}) - #{exp.id.slice(0, 6)}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Or enter custom Professional UUID..."
                  value={selectedProfId}
                  onChange={(e) => setSelectedProfId(e.target.value)}
                  className="w-full mt-2 bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Select / Enter Client:</label>
                <select
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white outline-none"
                >
                  <option value="">-- Choose a Client --</option>
                  {clients.map((cli) => (
                    <option key={cli.id} value={cli.id}>
                      {cli.name || cli.email} - #{cli.id.slice(0, 6)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Case Title:</label>
                <input
                  type="text"
                  value={caseTitleInput}
                  onChange={(e) => setCaseTitleInput(e.target.value)}
                  placeholder="e.g. Corporate Tax Compliance 2026"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Case ID (optional if creating new):</label>
                <input
                  type="text"
                  value={selectedCaseId}
                  onChange={(e) => setSelectedCaseId(e.target.value)}
                  placeholder="Leave empty to generate new Case UUID"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 font-mono outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAssignModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={assigning}
                  className="px-5 py-2.5 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] text-white font-bold cursor-pointer"
                >
                  {assigning ? "Assigning..." : "Assign Case Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DYNAMIC SERVICE STAGES ASSIGNMENT MODAL */}
      <AssignServiceModal
        isOpen={isStageServiceModalOpen}
        onClose={() => setIsStageServiceModalOpen(false)}
        onSuccess={() => {
          setSuccessToast("Service & Process Stages assigned successfully!");
          loadAllData();
          setTimeout(() => setSuccessToast(null), 4000);
        }}
      />

      {/* NOTIFICATIONS TAB */}
      {activeTab === "notifications" && (
        <div className="mt-6">
          <NotificationsTab />
        </div>
      )}
    </div>
  );
}
