"use client";

/**
 * ProtectedRoute
 *
 * Wraps any page or layout that requires an authenticated session.
 *
 * Behaviour:
 * ──────────
 * 1. While AuthContext is still initialising (loading=true), render a full-
 *    screen spinner so the user never sees a flash of the login page.
 * 2. Once loading is false:
 *    a. If the user is authenticated, render children.
 *    b. If not, redirect to the configured redirectPath (default: "/").
 * 3. An optional `requiredRole` prop lets you restrict a route to a specific
 *    role (e.g. "EXPERT"). If the user is authenticated but has the wrong role
 *    they are redirected to `roleMismatchPath` (default: "/").
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

export default function ProtectedRoute({
  children,
  requiredRole,
  redirectPath = "/",
  roleMismatchPath = "/",
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Wait for auth initialisation

    if (!user) {
      router.replace(redirectPath);
      return;
    }

    // Case-insensitive comparison so "user" and "USER" both match.
    if (requiredRole && user.role?.toUpperCase() !== requiredRole.toUpperCase()) {
      router.replace(roleMismatchPath);
    }
  }, [loading, user, requiredRole, redirectPath, roleMismatchPath, router]);

  // Show a full-screen spinner while auth is initialising or while a redirect
  // is in progress. This prevents the protected content from flashing.
  const roleMismatch =
    requiredRole && user?.role?.toUpperCase() !== requiredRole.toUpperCase();
  if (loading || !user || roleMismatch) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#c92c41] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500 font-medium">Loading…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
