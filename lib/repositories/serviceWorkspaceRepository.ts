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
   * Upload a document for a service process.
   * Uses fetch with the in-memory access token for multipart/form-data support.
   */
  static async uploadDocument(serviceId: string, docKey: string, file: File): Promise<void> {
    const token = getAccessToken();
    if (!token) throw new Error("Authentication token not found. Please sign in again.");

    const formData = new FormData();
    formData.append("documentKey", docKey);
    formData.append("file", file);

    const res = await fetch(`/api/user/services/${serviceId}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => null);
      throw new Error(errData?.message || "Failed to upload document");
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
