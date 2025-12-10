/**
 * AuthGuard Component
 * 
 * Protects routes that require authentication.
 * Redirects unauthenticated users to the login page.
 */

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import type{ RouteMeta } from "../types";

interface AuthGuardProps {
  children: React.ReactNode;
  meta?: RouteMeta;
}

/**
 * Authentication hook - integrates with auth store
 * Replace useAuthStore with your actual authentication implementation
 */
const useAuth = () => {
  // Import auth store (example using Zustand)
  // In a real app, you might use React Context, Redux, or another state management solution
  // import { useAuthStore } from "../utils/authStore";
  // const { isAuthenticated, user } = useAuthStore();
  
  // For now, using mock values - replace with actual store
  const isAuthenticated = false; // Mock: set to true to test authenticated routes
  const user = isAuthenticated ? { id: "1", role: "user" as const } : null;

  return { isAuthenticated, user };
};

const AuthGuard: React.FC<AuthGuardProps> = ({ children, meta }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Check if route requires authentication
  if (meta?.requiresAuth && !isAuthenticated) {
    // Redirect to login with return URL
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default AuthGuard;


