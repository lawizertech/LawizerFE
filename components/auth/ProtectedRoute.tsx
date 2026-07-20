"use client";

/**
 * ProtectedRoute
 *
 * Wraps any page or layout that requires an authenticated session.
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  /** Role that the user must have to access this route. Omit for any role. */
  requiredRole?: string;
  /** Where to redirect an unauthenticated visitor. Defaults to "/". */
  redirectPath?: string;
  /** Where to redirect an authenticated user with the wrong role. */
  roleMismatchPath?: string;
}

function checkRoleMatch(userRole?: string, requiredRole?: string): boolean {
  if (!requiredRole) return true;
  if (!userRole) return false;

  const u = userRole.toUpperCase();
  const r = requiredRole.toUpperCase();

  if (u === r) return true;

  // Normalize professional/expert/lawyer synonyms
  if (
    (r === "EXPERT" || r === "PROFESSIONAL" || r === "LAWYER") &&
    (u === "EXPERT" || u === "PROFESSIONAL" || u === "LAWYER")
  ) {
    return true;
  }

  return false;
}

export default function ProtectedRoute({
  children,
  requiredRole,
  redirectPath = "/",
  roleMismatchPath = "/",
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const isRoleMatch = checkRoleMatch(user?.role, requiredRole);
  const roleMismatch = !isRoleMatch;

  useEffect(() => {
    if (loading) return; // Wait for auth initialisation

    if (!user) {
      router.replace(redirectPath);
      return;
    }

    if (roleMismatch) {
      router.replace(roleMismatchPath);
    }
  }, [loading, user, roleMismatch, redirectPath, roleMismatchPath, router]);

  if (loading || !user || roleMismatch) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50 font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#c92c41] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500 font-medium">Loading…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
