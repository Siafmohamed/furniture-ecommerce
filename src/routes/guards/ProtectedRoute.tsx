/**
 * ProtectedRoute Component
 * 
 * Combines AuthGuard and RoleGuard to provide complete route protection.
 * This is the main guard component to use for protected routes.
 */

import React from "react";
import AuthGuard from "./AuthGuard";
import RoleGuard from "./RoleGuard";
import type{ RouteMeta } from "../types";

interface ProtectedRouteProps {
  children: React.ReactNode;
  meta?: RouteMeta;
}

/**
 * ProtectedRoute wraps children with both authentication and role guards.
 * Guards are applied in order: Auth first, then Role.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, meta }) => {
  return (
    <AuthGuard meta={meta}>
      <RoleGuard meta={meta}>
        {children}
      </RoleGuard>
    </AuthGuard>
  );
};

export default ProtectedRoute;












