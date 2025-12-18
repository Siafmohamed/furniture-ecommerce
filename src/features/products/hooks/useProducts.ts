/**
 * useProducts Hook
 * 
 * Custom hook for fetching and managing products data using Zustand store.
 * Handles loading states and error handling.
 */

import { useEffect, useCallback } from "react";
import type { ProductTileData } from "../../../components/molecules/ProductTile/ProductTile";
import { useProductsStore } from "../stores/productsStore";

type UseProductsResult = {
  products: ProductTileData[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
};

export const useProducts = (): UseProductsResult => {
  const { products, isLoading, error, fetchProducts } = useProductsStore();

  // Memoize the fetch function to prevent unnecessary re-renders
  const refetch = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading, error, refetch };
};