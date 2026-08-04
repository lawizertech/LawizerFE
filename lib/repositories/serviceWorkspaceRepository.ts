import { serverApi } from "@/lib/apis/axios";
import { getAccessToken } from "@/lib/auth/tokenStore";

export interface RawServiceItem {
  serviceId: string;
  title: string;
  status: string;
  createdAt: any;
  updatedAt?: any;
  serviceCode: string;
  assignedExpertId?: string | null;
  assignedExpert?: { id: string; name?: string; email?: string } | null;
  documentStats?: {
    totalRequired: number;
    uploaded: number;
    approved: number;
    pending: number;
  };
}

export interface RawServiceDetail extends RawServiceItem {
  documentsRequired: any[];
  expertUploadedFiles: any[];
  instructions?: string | null;
  metadata?: any;
}

export class ServiceWorkspaceRepository {
  /**
   * Fetch all services for the logged-in client
   */
  static async getServices(): Promise<RawServiceItem[]> {
    const res = await serverApi.get("/api/user/services");
    if (res.data?.success && Array.isArray(res.data.services)) {
      return res.data.services;
    }
    throw new Error(res.data?.message || "Failed to fetch services");
  }

  /**
   * Fetch details for a specific service
   */
  static async getServiceDetails(serviceId: string): Promise<RawServiceDetail> {
    const res = await serverApi.get(`/api/user/services/${serviceId}`);
    if (res.data?.success && res.data?.service) {
      return res.data.service;
    }
    throw new Error(res.data?.message || "Failed to fetch service details");
  }

  /**
   * Upload a document directly to Cloudinary and save the record to the backend.
   * This bypasses Next.js serverless function limits for large files.
   */
  static async uploadDocument(serviceId: string, docKey: string, file: File): Promise<void> {
    const token = getAccessToken();
    if (!token) throw new Error("Authentication token not found. Please sign in again.");

    // 1. Get Cloudinary Signature
    const sigRes = await fetch("/api/documents/cloudinary-signature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ caseId: serviceId }),
    });
    
    if (!sigRes.ok) {
      const err = await sigRes.json().catch(() => null);
      throw new Error(err?.message || "Failed to fetch upload signature");
    }
    const sigData = await sigRes.json();

    const cloudName = sigData.cloudName || "q1n6i5c4";
    const apiKey = sigData.apiKey || "969715443973461";
    const uploadUrl = sigData.uploadUrl && !sigData.uploadUrl.includes("/undefined/")
      ? sigData.uploadUrl
      : `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

    // 2. Upload file directly to Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", sigData.timestamp.toString());
    formData.append("signature", sigData.signature);
    if (sigData.folder) {
      formData.append("folder", sigData.folder);
    }

    const cloudinaryRes = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });

    if (!cloudinaryRes.ok) {
      const cErr = await cloudinaryRes.json().catch(() => null);
      throw new Error(cErr?.error?.message || "Failed to upload to Cloudinary");
    }
    const uploadResult = await cloudinaryRes.json();

    // 3. Save the document record in our database
    const saveRes = await fetch("/api/documents/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        caseId: serviceId,
        filename: docKey, // The key or actual filename. We'll use docKey for type mapping, maybe file.name too?
        fileType: file.type || "application/octet-stream",
        storagePath: uploadResult.secure_url,
        sizeBytes: file.size,
      }),
    });

    if (!saveRes.ok) {
      const err = await saveRes.json().catch(() => null);
      throw new Error(err?.message || "Failed to save document record");
    }
  }

  /**
   * Initialize a WebRTC signaling session for voice/video calls via Supabase Realtime
   */
  static async startCallSession(serviceId: string, userId: string, type: "voice" | "video"): Promise<void> {
    const { supabaseRealtime } = await import("@/lib/supabaseRealtime");
    await supabaseRealtime.broadcast(`call:${serviceId}`, "ringing", {
      status: "ringing",
      type,
      caller: "client",
      userId,
      createdAt: Date.now(),
    });
  }

  /**
   * Fetch recent user notifications
   */
  static async getNotifications(): Promise<any[]> {
    const token = getAccessToken();
    if (!token) throw new Error("Authentication token not found. Please sign in again.");

    const res = await fetch("/api/user/notifications", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.warn("Notifications API returned non-OK status:", res.status);
      return [];
    }

    const data = await res.json().catch(() => ({}));
    return data.notifications || [];
  }

  /**
   * Mark a target notification as read
   */
  static async markNotificationAsRead(notificationId: string): Promise<void> {
    const token = getAccessToken();
    if (!token) throw new Error("Authentication token not found. Please sign in again.");

    const res = await fetch(`/api/user/notifications/${notificationId}/read`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to dismiss notification");
    }
  }

  /**
   * Mark all active notifications as read
   */
  static async markAllNotificationsAsRead(): Promise<void> {
    const token = getAccessToken();
    if (!token) throw new Error("Authentication token not found. Please sign in again.");

    const res = await fetch("/api/user/notifications/read-all", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to mark all as read");
    }
  }
}
