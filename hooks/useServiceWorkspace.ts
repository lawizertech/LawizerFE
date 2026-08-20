import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ServiceWorkspaceRepository } from "@/lib/repositories/serviceWorkspaceRepository";
import { ServiceWorkspaceService } from "@/lib/services/serviceWorkspaceService";
import { chatService } from "@/lib/services/chatService";
import {
  ServiceWorkspaceItem,
  ServiceWorkspaceDetail,
  ChatMessage,
  NotificationItem,
} from "@/types/serviceWorkspace";
import { useAuth } from "@/context/authContext";
import { useToast } from "@/hooks/use-toast";
import { getAccessToken } from "@/lib/auth/tokenStore";

export function useServiceWorkspace() {
  const [services, setServices] = useState<ServiceWorkspaceItem[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceWorkspaceDetail | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [uploadingDocName, setUploadingDocName] = useState<string | null>(null);
  const [typedMessage, setTypedMessage] = useState("");
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const { user } = useAuth();
  const { toast } = useToast();

  // Poll notifications for current user via REST API (No Firebase)
  useEffect(() => {
    if (!user?.uid) return;

    const fetchNotifs = async () => {
      try {
        const list = await ServiceWorkspaceRepository.getNotifications();
        const mapped = list.map((item: any) => {
          let dateStr = "Just now";
          const timestamp = item.created_at || item.createdAt;
          if (timestamp) {
            dateStr = new Date(timestamp).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });
          }
          return {
            notificationId: item.id || item.notificationId,
            userId: item.recipient_id || item.userId,
            serviceId: item.payload?.caseId || item.serviceId || null,
            type: item.type,
            title: item.payload?.title || item.title || "Notification",
            message: item.payload?.message || item.message || "",
            read: item.read_at ? true : !!item.read,
            createdAt: dateStr,
            related: item.related || null,
          } as NotificationItem;
        });
        setNotifications(mapped);
      } catch (err) {
        console.error("Failed to load notifications:", err);
      }
    };

    void fetchNotifs();
    const interval = setInterval(fetchNotifs, 10000);
    return () => clearInterval(interval);
  }, [user?.uid]);

  const dismissNotification = async (notificationId: string) => {
    try {
      await ServiceWorkspaceRepository.markNotificationAsRead(notificationId);
    } catch (err: any) {
      console.error("Dismiss notification error:", err);
    }
  };

  const dismissAllNotifications = async () => {
    try {
      await ServiceWorkspaceRepository.markAllNotificationsAsRead();
    } catch (err: any) {
      console.error("Dismiss all notifications error:", err);
    }
  };

  /**
   * Load summary list of active services
   */
  const loadServices = async () => {
    try {
      setLoading(true);
      const rawList = await ServiceWorkspaceRepository.getServices();
      const mapped = ServiceWorkspaceService.mapServices(rawList);
      setServices(mapped);
    } catch (error: any) {
      console.error("Failed to load services:", error);
      toast({
        variant: "destructive",
        title: "Load Failed",
        description: error.message || "Failed to load services list",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * Load details of a specific service
   */
  const loadServiceDetails = async (id: string) => {
    try {
      setDetailLoading(true);
      const rawDetail = await ServiceWorkspaceRepository.getServiceDetails(id);
      const mappedDetail = ServiceWorkspaceService.mapServiceDetails(rawDetail);
      setSelectedServiceDetail(mappedDetail);
    } catch (error: any) {
      console.error("Failed to load service details:", error);
      toast({
        variant: "destructive",
        title: "Load Failed",
        description: error.message || "Failed to load service details",
      });
    } finally {
      setDetailLoading(false);
    }
  };

  // Realtime communication sync via service adapter
  useEffect(() => {
    if (!selectedServiceId) {
      setChatMessages([]);
      return;
    }

    const subscription = chatService.subscribeToMessages(
      selectedServiceId,
      (messages) => {
        setChatMessages(messages);
      },
      (error) => {
        toast({
          variant: "destructive",
          title: "Chat Error",
          description: "Realtime messaging sync failed",
        });
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [selectedServiceId]);

  // Initial list fetch
  useEffect(() => {
    void loadServices();
  }, []);

  const searchParams = useSearchParams();
  const urlServiceId = searchParams ? (searchParams.get("serviceId") || searchParams.get("caseId")) : null;

  useEffect(() => {
    if (urlServiceId && services.length > 0) {
      void openDetail(urlServiceId);
    }
  }, [urlServiceId, services.length]);

  const openDetail = async (id: string) => {
    setSelectedServiceId(id);
    setSelectedServiceDetail(null);
    await loadServiceDetails(id);
  };

  const closeDetail = () => {
    setSelectedServiceId(null);
    setSelectedServiceDetail(null);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim() || !selectedServiceId || !user?.uid) return;

    const messageText = typedMessage.trim();
    setTypedMessage("");

    try {
      await chatService.sendMessage(selectedServiceId, user.uid, messageText);
    } catch (error: any) {
      console.error("Failed to send message:", error);
      toast({
        variant: "destructive",
        title: "Send Failed",
        description: error.message || "Failed to deliver message",
      });
    }
  };

  const handleUploadClick = (docKey: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        await handleRealUpload(docKey, file);
      }
    };
    input.click();
  };

  const handleRealUpload = async (docKey: string, file: File) => {
    if (!selectedServiceId) return;
    setUploadingDocName(docKey);
    try {
      await ServiceWorkspaceRepository.uploadDocument(selectedServiceId, docKey, file);
      toast({
        title: "Success",
        description: "Document uploaded successfully!",
      });

      // Reload both layout levels to refresh calculations
      await Promise.all([
        loadServiceDetails(selectedServiceId),
        loadServices(),
      ]);
    } finally {
      setUploadingDocName(null);
    }
  };

  const deleteDocument = async (documentId: string) => {
    if (!selectedServiceId) return;
    try {
      const token = getAccessToken();
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/documents/${documentId}`, {
        method: "DELETE",
        headers,
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        toast({
          title: "Document Deleted",
          description: "File deleted from storage and database.",
        });
        await Promise.all([loadServiceDetails(selectedServiceId), loadServices()]);
      } else {
        throw new Error(data?.message || "Delete failed");
      }
    } catch (error: any) {
      console.error("Delete document error:", error);
      toast({
        variant: "destructive",
        title: "Delete Failed",
        description: error.message || "Failed to delete document",
      });
    }
  };

  const [showCallModal, setShowCallModal] = useState(false);
  const [callType, setCallType] = useState<"voice" | "video">("voice");

  const startCall = async (type: "voice" | "video") => {
    if (!selectedServiceDetail?.id || !user?.uid) return;
    try {
      setCallType(type);
      await ServiceWorkspaceRepository.startCallSession(selectedServiceDetail.id, user.uid, type);
      setShowCallModal(true);
    } catch (error: any) {
      console.error("Failed to start call:", error);
      toast({
        variant: "destructive",
        title: "Call Failed",
        description: error.message || "Failed to start call session",
      });
    }
  };

  return {
    services,
    selectedServiceDetail,
    selectedServiceId,
    chatMessages,
    loading,
    detailLoading,
    uploadingDocName,
    typedMessage,
    setTypedMessage,
    notifications,
    dismissNotification,
    dismissAllNotifications,
    showCallModal,
    setShowCallModal,
    callType,
    startCall,
    loadServices,
    openDetail,
    closeDetail,
    handleSendMessage,
    handleUploadClick,
    handleRealUpload,
    deleteDocument,
  };
}
