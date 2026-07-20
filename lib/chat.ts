export type MessageStatus = 'sending' | 'error' | 'sent';

export type SenderRole = 'client' | 'professional' | 'admin' | 'system';
export type MessageType = 'text' | 'system' | 'attachment' | 'call_event';

export interface ChatMessage {
  id: string;
  case_id: string;
  sender_id: string | null;
  text: string | null;
  attachment_ref?: string | null;
  created_at: string | null;
  read_at?: string | null;
  flagged_by?: string[] | null;
  sender_role?: SenderRole | null;
  message_type?: MessageType | null;
  deleted_at?: string | null;
  status?: MessageStatus;
}

type CreatedAtRecord = { id: string; created_at: string | null };

export function compareByCreatedAtAndId<T extends CreatedAtRecord>(a: T, b: T) {
  const aTime = a.created_at ? new Date(a.created_at).getTime() : Number.MAX_SAFE_INTEGER;
  const bTime = b.created_at ? new Date(b.created_at).getTime() : Number.MAX_SAFE_INTEGER;

  if (aTime !== bTime) {
    return aTime - bTime;
  }

  return a.id.localeCompare(b.id);
}

export function compareChatMessages(a: ChatMessage, b: ChatMessage) {
  return compareByCreatedAtAndId(a, b);
}

export function sortChatMessages(messages: ChatMessage[]) {
  return [...messages].sort(compareChatMessages);
}

export function sortByCreatedAtAndId<T extends CreatedAtRecord>(items: T[]) {
  return [...items].sort(compareByCreatedAtAndId);
}

export function upsertChatMessages(
  existing: ChatMessage[],
  incoming: ChatMessage | ChatMessage[]
) {
  const next = new Map(existing.map((message) => [message.id, message]));
  const items = Array.isArray(incoming) ? incoming : [incoming];

  for (const item of items) {
    const current = next.get(item.id);
    next.set(item.id, current ? { ...current, ...item } : item);
  }

  return sortChatMessages(Array.from(next.values()));
}
