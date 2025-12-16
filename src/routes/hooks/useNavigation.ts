/**
 * useNavigation Hook
 * 
 * Custom hook for type-safe navigation with route parameters.
 * Provides helper functions for common navigation patterns.
 */

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ProductParams, CategoryParams, SearchQueryParams } from "../types";

/**
 * Type-safe navigation hook
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  return {
    /**
     * Navigate to a route
     */
    goTo: (path: string, replace?: boolean) => {
      navigate(path, { replace });
    },

    /**
     * Navigate back
     */
    goBack: () => {
      navigate(-1);
    },

    /**
     * Navigate forward
     */
    goForward: () => {
      navigate(1);
    },

    /**
     * Navigate to product detail page
     */
    goToProduct: (id: string | number) => {
      navigate(`/product/${id}`);
    },

    /**
     * Navigate to category page
     */
    goToCategory: (slug: string, queryParams?: SearchQueryParams) => {
      const params = new URLSearchParams();
      if (queryParams?.q) params.set("q", queryParams.q);
      if (queryParams?.page) params.set("page", queryParams.page);
      if (queryParams?.sort) params.set("sort", queryParams.sort);
      
      const queryString = params.toString();
      navigate(`/category/${slug}${queryString ? `?${queryString}` : ""}`);
    },
  };
};

/**
 * Hook to get typed route parameters
 */
export const useRouteParams = <T extends Record<string, string>>() => {
  return useParams<T>();
};

/**
 * Hook to get typed search parameters
 */
export const useSearchParamsTyped = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return {
    searchParams,
    setSearchParams,
    getParam: (key: string) => searchParams.get(key),
    setParam: (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      setSearchParams(newParams);
    },
    removeParam: (key: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(key);
      setSearchParams(newParams);
    },
  };
};












