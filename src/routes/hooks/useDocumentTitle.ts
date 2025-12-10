/**
 * useDocumentTitle Hook
 * 
 * Updates the document title based on the current route.
 * Automatically sets page titles for better SEO and UX.
 */

import { useEffect } from "react";
import { useLocation, matchRoutes } from "react-router-dom";
import { router } from "../routes";

/**
 * Hook to automatically update document title based on route
 */
export const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Find matching routes
    const matches = matchRoutes(router.routes, location.pathname);
    
    if (matches && matches.length > 0) {
      // Get the last match (most specific route)
      const match = matches[matches.length - 1];
      
      // Try to get title from route meta (if using route config)
      // For now, we'll use a simple mapping
      const routeTitle = getRouteTitle(location.pathname);
      
      if (routeTitle) {
        document.title = `${routeTitle} | Furniture E-commerce`;
      } else {
        document.title = "Furniture E-commerce";
      }
    }
  }, [location]);
};

/**
 * Helper function to get route title from pathname
 * In a real app, this would come from route meta configuration
 */
const getRouteTitle = (pathname: string): string | null => {
  const titleMap: Record<string, string> = {
    "/": "Home",
    "/shop": "Shop",
    "/about": "About",
    "/contact": "Contact",
    "/auth/login": "Login",
    "/auth/register": "Register",
    "/auth/forgot-password": "Forgot Password",
    "/dashboard": "Dashboard",
    "/dashboard/orders": "My Orders",
    "/dashboard/profile": "Profile",
    "/dashboard/wishlist": "Wishlist",
    "/admin": "Admin Dashboard",
    "/admin/products": "Manage Products",
    "/admin/orders": "Manage Orders",
    "/admin/users": "Manage Users",
    "/access-denied": "Access Denied",
  };

  // Check exact match first
  if (titleMap[pathname]) {
    return titleMap[pathname];
  }

  // Check for dynamic routes
  if (pathname.startsWith("/product/")) {
    return "Product Details";
  }
  if (pathname.startsWith("/category/")) {
    return "Category";
  }

  return null;
};








