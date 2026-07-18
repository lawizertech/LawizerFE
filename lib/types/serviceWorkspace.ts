export interface StageItem {
  name: string;
  status: "completed" | "active" | "pending";
  details: string;
}

export interface DocumentItem {
  name: string;
  key: string;
  status: "Verified ✓" | "Uploaded" | "Pending";
  fileUrl?: string | null;
  uploadedAt?: string | null;
}

export interface ChatMessage {
  sender: "expert" | "user";
  text: string;
  time: string;
}

export interface ActivityFeedItem {
  id: string;
  type: "stage" | "document" | "note" | "system";
  title: string;
  description: string;
  timestamp: string;
}

export interface ServiceWorkspaceItem {
  id: string;
  name: string;
  type: string;
  status: string;
  progress: number;
  stageText: string;
  purchaseDate?: string;
  estimatedCompletion?: string;
  lastUpdated?: string;
  assignedExpert?: { name: string; email?: string } | null;
}

export interface ServiceWorkspaceDetail extends ServiceWorkspaceItem {
  stages: StageItem[];
  documents: {
    submitted: DocumentItem[];
    pending: DocumentItem[];
  };
  activities: ActivityFeedItem[];
}

export interface NotificationItem {
  notificationId: string;
  userId: string;
  serviceId?: string | null;
  type: "document" | "service" | "message" | "payment";
  title: string;
  message: string;
  read: boolean;
  createdAt: any;
  related?: {
    serviceName?: string;
    entityId?: string;
    entityType?: string;
  } | null;
}
