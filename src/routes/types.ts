

/**
 * User roles for role-based access control
 */
export type UserRole = "admin" | "user" | "guest";

/**
 * Route metadata for guards and navigation
 */
export interface RouteMeta {
  /** Whether authentication is required to access this route */
  requiresAuth?: boolean;
  /** Required user roles to access this route */
  requiredRoles?: UserRole[];
  /** Route title for document title and breadcrumbs */
  title?: string;
  /** Whether this route should be included in navigation menus */
  showInNav?: boolean;
  /** Icon name for navigation (if using icon system) */
  icon?: string;
}

/**
 * Route configuration interface
 */
export interface RouteConfig {
  /** Unique route path */
  path: string;
  /** Route metadata for guards and navigation */
  meta?: RouteMeta;
  /** Child routes for nested routing */
  children?: RouteConfig[];
}

/**
 * Route parameters for dynamic routes
 * Extend this interface for specific route params
 */
export interface RouteParams {
  [key: string]: string | undefined;
}

/**
 * Product route parameters
 */
export interface ProductParams extends RouteParams {
  id: string;
}

/**
 * Category route parameters
 */
export interface CategoryParams extends RouteParams {
  slug: string;
}

/**
 * Search route query parameters
 */
export interface SearchQueryParams {
  q?: string;
  category?: string;
  page?: string;
  sort?: string;
}





















