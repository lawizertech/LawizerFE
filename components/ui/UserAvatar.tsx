"use client";

import { useState } from "react";
import { useAuth } from "@/context/authContext";

interface UserAvatarProps {
  user?: {
    avatarUrl?: string;
    name?: string;
    email?: string;
  } | null;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function UserAvatar({ user: userProp, size = "sm", className = "" }: UserAvatarProps) {
  const { user: contextUser } = useAuth();
  const [error, setError] = useState(false);

  const user = userProp !== undefined ? userProp : contextUser;

  let avatarUrl = user?.avatarUrl;
  if (!avatarUrl && typeof window !== "undefined") {
    const localUrl = localStorage.getItem("avatarUrl");
    if (localUrl) avatarUrl = localUrl;
  }

  const isValid =
    avatarUrl &&
    typeof avatarUrl === "string" &&
    avatarUrl.trim().length > 0 &&
    avatarUrl !== "/user.jpg" &&
    avatarUrl !== "null" &&
    avatarUrl !== "undefined";

  const initial = (user?.name || user?.email || "U").charAt(0).toUpperCase();

  let dim = "w-8 h-8 text-xs";
  if (size === "md") dim = "h-9 w-9 text-sm";
  if (size === "lg") dim = "w-10 h-10 text-base";

  if (isValid && !error) {
    return (
      <img
        src={avatarUrl}
        alt={user?.name || "User Profile"}
        onError={() => setError(true)}
        className={`rounded-full border border-gray-200 object-cover flex-shrink-0 ${dim} ${className}`}
      />
    );
  }

  return (
    <div
      className={`rounded-full bg-[#c92c41] text-white font-bold flex items-center justify-center border border-rose-200 shadow-2xs select-none flex-shrink-0 ${dim} ${className}`}
    >
      {initial}
    </div>
  );
}
