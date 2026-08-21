import { RawServiceItem, RawServiceDetail } from "@/lib/repositories/serviceWorkspaceRepository";
import {
  ServiceWorkspaceItem,
  ServiceWorkspaceDetail,
  StageItem,
  DocumentItem,
  ActivityFeedItem,
} from "@/types/serviceWorkspace";

const SERVICE_STAGES: Record<string, string[]> = {
  PRIVATE_LIMITED_COMPANY: [
    "DSC Application",
    "MCA Name Approval",
    "MOA & AOA Drafting",
    "Incorporation Filing",
    "Certificate of Incorporation"
  ],
  GST_REGISTRATION: [
    "Document Submission",
    "Application Filing",
    "Clarification/Query Resolution",
    "GSTIN Certificate Issuance"
  ],
  TRADEMARK_REGISTRATION: [
    "Trademark Search",
    "Application Filing",
    "Trademark Examination",
    "Trademark Registration"
  ],
  ITR_1_FILLING: [
    "Information Gathering",
    "Computation of Income",
    "Form 16/26AS Verification",
    "ITR-1 Filing & E-Verification"
  ],
  "ITR-2_FILING": [
    "Information Gathering",
    "Capital Gains / Other Income Audit",
    "Tax Computation",
    "ITR-2 Filing & E-Verification"
  ],
  "ITR-3_FILING": [
    "Business/Professional Income Audit",
    "Balance Sheet & P&L Review",
    "Tax Computation",
    "ITR-3 Filing & E-Verification"
  ],
  VERIFIED_PROPERTY_REPORT: [
    "Document Submission",
    "Legal Search & Verification",
    "Report Drafting",
    "Final Property Report Delivery"
  ]
};

const DEFAULT_STAGES = [
  "Document Submission",
  "Application Review",
  "Processing",
  "Completion"
];

export class ServiceWorkspaceService {
  /**
   * Helper to format raw date timestamps
   */
  private static formatDate(timestamp: any): string {
    if (!timestamp) return "N/A";
    
    // Check if firestore timestamp shape {_seconds, _nanoseconds}
    if (timestamp && typeof timestamp === "object" && "_seconds" in timestamp) {
      return new Date(timestamp._seconds * 1000).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    }

    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return "N/A";
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    } catch {
      return "N/A";
    }
  }

  /**
   * Maps a list of raw services to domain workspace items
   */
  static mapServices(rawList: RawServiceItem[]): ServiceWorkspaceItem[] {
    return rawList.map((s) => {
      const total = s.documentStats?.totalRequired || 0;
      const uploaded = s.documentStats?.uploaded || 0;
      
      const progress = s.status === "COMPLETED"
        ? 100
        : (total > 0 ? Math.round((uploaded / total) * 50) : 50) + (s.status === "ACTIVE" ? 25 : 0);

      const statusLabel = s.status === "COMPLETED"
        ? "Completed"
        : (s.documentStats && s.documentStats.pending > 0 ? "Docs Pending" : "In Progress");

      return {
        id: s.serviceId,
        name: s.title,
        type: s.serviceCode.replace(/_/g, " "),
        status: statusLabel,
        progress,
        stageText: s.status === "COMPLETED" ? "All stages complete" : `Documents submitted: ${uploaded}/${total}`,
        lastUpdated: this.formatDate(s.updatedAt || s.createdAt),
        assignedExpert: s.assignedExpert?.name
          ? { name: s.assignedExpert.name, email: s.assignedExpert.email }
          : s.assignedExpertId
          ? { name: "Assigned Professional" }
          : null,
      };
    });
  }

  /**
   * Maps a raw detailed service details payload to domain workspace details
   */
  static mapServiceDetails(s: RawServiceDetail): ServiceWorkspaceDetail {
    const docs = s.documentsRequired || [];
    const uploaded = docs.filter((d: any) => d.status === "UPLOADED" || d.status === "APPROVED").length;
    const total = docs.length;

    const progress = s.status === "COMPLETED"
      ? 100
      : (total > 0 ? Math.round((uploaded / total) * 50) : 50) + (s.status === "ACTIVE" ? 25 : 0);

    const statusLabel = s.status === "COMPLETED"
      ? "Completed"
      : (docs.some((d: any) => d.status === "PENDING" || d.status === "REJECTED") ? "Docs Pending" : "In Progress");

    // Dynamic stage mapping
    let stages: StageItem[];
    const backendStages = (s as any).stages || (s as any).metadata?.stages;

    if (Array.isArray(backendStages) && backendStages.length > 0) {
      stages = backendStages.map((st: any) => ({
        name: st.title || st.name || st.id,
        status: st.status === "completed" ? "completed" : st.status === "in_progress" || st.status === "active" ? "active" : "pending",
        details: st.description || (st.status === "completed" ? "Completed" : st.status === "in_progress" ? "In progress" : "Pending"),
      }));
    } else {
      const stagesList = SERVICE_STAGES[s.serviceCode] || DEFAULT_STAGES;
      const N = stagesList.length;
      const activeIdx = s.status === "COMPLETED" ? N : Math.min(N - 1, Math.floor((progress / 100) * N));

      stages = stagesList.map((name, idx) => {
        let status: "completed" | "active" | "pending" = "pending";
        let details = "Pending";
        if (s.status === "COMPLETED" || idx < activeIdx) {
          status = "completed";
          details = "Completed";
        } else if (idx === activeIdx) {
          status = "active";
          details = s.status === "ACTIVE" ? "In progress" : "Review in progress";
        }
        return { name, status, details };
      });
    }

    // Map documents
    const rawSubmitted = [
      ...docs.filter((d: any) => d.status === "UPLOADED" || d.status === "APPROVED"),
      ...(s.expertUploadedFiles || []).map((d: any) => ({
        label: d.title || d.name,
        key: d.key || d.documentId,
        status: "APPROVED",
        fileUrl: d.fileUrl,
        uploadedAt: d.createdAt,
      })),
    ];

    const submitted: DocumentItem[] = rawSubmitted.map((d: any) => ({
      name: d.label || d.name || d.title || "Case Document",
      key: d.key || d.documentId,
      status: "Verified ✓" as any,
      fileUrl: d.fileUrl || null,
      uploadedAt: this.formatDate(d.uploadedAt || d.createdAt),
    }));

    const pending: DocumentItem[] = docs
      .filter((d: any) => d.status === "PENDING" || d.status === "REJECTED")
      .map((d: any) => ({
        name: d.label,
        key: d.key,
        status: "Pending" as any,
        fileUrl: null,
      }));

    // Dynamic activity timeline builder based on database document audit dates
    const activities: ActivityFeedItem[] = [];

    // Purchase Date
    activities.push({
      id: "act-purchase",
      type: "system",
      title: "Service Initiated",
      description: `Purchase process started for ${s.title}`,
      timestamp: this.formatDate(s.createdAt),
    });

    // Document upload timestamps
    docs.forEach((d: any, idx: number) => {
      if (d.uploadedAt) {
        activities.push({
          id: `act-upload-${d.key}-${idx}`,
          type: "document",
          title: "Document Uploaded",
          description: `Client uploaded the document: ${d.label}`,
          timestamp: this.formatDate(d.uploadedAt),
        });
      }
      if (d.status === "APPROVED" && d.reviewedAt) {
        activities.push({
          id: `act-verify-${d.key}-${idx}`,
          type: "document",
          title: "Document Verified",
          description: `Verification successful for document: ${d.label}`,
          timestamp: this.formatDate(d.reviewedAt),
        });
      }
    });

    // Sort activities by date desc (system at bottom, latest uploads first)
    activities.sort((a, b) => {
      if (a.id === "act-purchase") return 1;
      if (b.id === "act-purchase") return -1;
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });

    // Determine estimated completion (e.g. +14 days from creation date as standard fallback template)
    let estimatedCompletion = "N/A";
    if (s.createdAt) {
      const createdDate = s.createdAt && typeof s.createdAt === "object" && "_seconds" in s.createdAt
        ? new Date(s.createdAt._seconds * 1000)
        : new Date(s.createdAt);
      if (!isNaN(createdDate.getTime())) {
        createdDate.setDate(createdDate.getDate() + 14);
        estimatedCompletion = createdDate.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        });
      }
    }

    const meta = typeof s.metadata === "object" && s.metadata !== null ? s.metadata : {};
    const customStages = Array.isArray(meta.stages) && meta.stages.length > 0 ? meta.stages : null;

    return {
      id: s.serviceId,
      name: meta.title || s.title,
      type: s.serviceCode.replace(/_/g, " "),
      status: statusLabel,
      progress,
      stageText: s.status === "COMPLETED" ? "All stages complete" : `Documents submitted: ${uploaded}/${total}`,
      purchaseDate: this.formatDate(s.createdAt),
      estimatedCompletion,
      lastUpdated: this.formatDate(s.updatedAt || s.createdAt),
      assignedExpert: s.assignedExpert?.name
        ? { name: s.assignedExpert.name, email: s.assignedExpert.email }
        : s.assignedExpertId
        ? { name: "Assigned Professional" }
        : null,
      stages,
      customStages: customStages || undefined,
      currentStageId: meta.currentStageId || undefined,
      documents: { submitted, pending },
      activities,
    };
  }
}
