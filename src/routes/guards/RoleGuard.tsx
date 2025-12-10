/**
 * RoleGuard Component
 * 
 * Protects routes that require specific user roles.
 * Redirects unauthorized users to an access denied page.
 */

import React from "react";
import { Navigate } from "react-router-dom";
import type { RouteMeta, UserRole } from "../types";

interface RoleGuardProps {
  children: React.ReactNode;
  meta?: RouteMeta;
}

/**
 * User role hook - integrates with auth store
 * Replace with your actual authentication implementation
 */
const useUserRole = (): UserRole | null => {
  // Import auth store (example using Zustand)
  // import { useAuthStore } from "../utils/authStore";
  // const { user } = useAuthStore();
  // return user?.role || null;
  
  // For now, using mock value - replace with actual store
  const userRole: UserRole | null = null; // Mock: set to "admin" or "user" to test
  return userRole;
};

const RoleGuard: React.FC<RoleGuardProps> = ({ children, meta }) => {
  const userRole = useUserRole();

  // Check if route requires specific roles
  if (meta?.requiredRoles && meta.requiredRoles.length > 0) {
    // If user has no role or role doesn't match required roles
    if (!userRole || !meta.requiredRoles.includes(userRole)) {
      return <Navigate to="/access-denied" replace />;
    }
  }

  return <>{children}</>;
};

export default RoleGuard;


