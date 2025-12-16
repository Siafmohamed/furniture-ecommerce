/**
 * Routes Configuration
 * 
 * Central route definitions with code splitting using React.lazy.
 * All routes are lazy-loaded for optimal performance and bundle size.
 */

import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./guards";
import { PublicLayout, AuthLayout, DashboardLayout, AdminLayout } from "./layouts";
import type { RouteConfig } from "./types";

// Loading component for Suspense fallback
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-500 border-r-transparent"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

/**
 * Public Routes - No authentication required
 */
// Lazy load public pages for code splitting
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const ProductsPage = lazy(() => import("../features/products/pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("../routes/pages/ProductDetailPage"));
const ProductDetailErrorPage = lazy(() => import("../routes/pages/ProductDetailErrorPage"));
const CategoryPage = lazy(() => import("../routes/pages/CategoryPage"));
const AboutPage = lazy(() => import("../routes/pages/AboutPage"));
const ContactPage = lazy(() => import("../routes/pages/ContactPage"));
const NotFoundPage = lazy(() => import("../routes/pages/NotFoundPage"));

/**
 * Auth Routes - Authentication pages
 */
const LoginPage = lazy(() => import("../routes/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../routes/pages/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../routes/pages/auth/ForgotPasswordPage"));
const CombinedAuthPage = lazy(() => import("../routes/pages/auth/CombinedAuthPage"));

/**
 * Dashboard Routes - Requires authentication
 */
const DashboardPage = lazy(() => import("../routes/pages/dashboard/DashboardPage"));
const OrdersPage = lazy(() => import("../routes/pages/dashboard/OrdersPage"));
const ProfilePage = lazy(() => import("../routes/pages/dashboard/ProfilePage"));
const WishlistPage = lazy(() => import("../routes/pages/dashboard/WishlistPage"));

/**
 * Admin Routes - Requires admin role
 */
const AdminDashboardPage = lazy(() => import("../routes/pages/admin/AdminDashboardPage"));
const AdminProductsPage = lazy(() => import("../routes/pages/admin/AdminProductsPage"));
const AdminOrdersPage = lazy(() => import("../routes/pages/admin/AdminOrdersPage"));
const AdminUsersPage = lazy(() => import("../routes/pages/admin/AdminUsersPage"));

/**
 * Utility Pages
 */
const AccessDeniedPage = lazy(() => import("../routes/pages/AccessDeniedPage"));

/**
 * Route configuration with nested routes and guards
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
        meta: { title: "Home" },
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductsPage />
          </Suspense>
        ),
        meta: { title: "Shop", showInNav: true },
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetailPage />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetailErrorPage />
          </Suspense>
        ),
        meta: { title: "Product Details" },
      },
      {
        path: "category/:slug",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CategoryPage />
          </Suspense>
        ),
        meta: { title: "Category" },
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
        meta: { title: "About", showInNav: true },
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
        meta: { title: "Contact", showInNav: true },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LoginPage />
          </Suspense>
        ),
        meta: { title: "Login" },
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RegisterPage />
          </Suspense>
        ),
        meta: { title: "Register" },
      },
      {
        path: "combined",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CombinedAuthPage />
          </Suspense>
        ),
        meta: { title: "Sign In / Register" },
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ForgotPasswordPage />
          </Suspense>
        ),
        meta: { title: "Forgot Password" },
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute meta={{ requiresAuth: true }}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DashboardPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, title: "Dashboard" },
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <OrdersPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, title: "My Orders" },
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProfilePage />
          </Suspense>
        ),
        meta: { requiresAuth: true, title: "Profile" },
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <WishlistPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, title: "Wishlist" },
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute meta={{ requiresAuth: true, requiredRoles: ["admin"] }}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminDashboardPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, requiredRoles: ["admin"], title: "Admin Dashboard" },
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminProductsPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, requiredRoles: ["admin"], title: "Manage Products" },
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminOrdersPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, requiredRoles: ["admin"], title: "Manage Orders" },
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminUsersPage />
          </Suspense>
        ),
        meta: { requiresAuth: true, requiredRoles: ["admin"], title: "Manage Users" },
      },
    ],
  },
  {
    path: "/access-denied",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <AccessDeniedPage />
      </Suspense>
    ),
    meta: { title: "Access Denied" },
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
    meta: { title: "Page Not Found" },
  },
]);


export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};





