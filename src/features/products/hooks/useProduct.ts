/**
 * useProduct Hook
 * 
 * Custom hook for fetching and managing product data using Zustand store.
 * Handles loading states and error handling.
 */

import { useEffect } from "react";
import type { Product } from "../types/productTypes";
import { useProductStore } from "../stores/productStore";

type UseProductResult = {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
};

export const useProduct = (productId: string | undefined): UseProductResult => {
  const { product, isLoading, error, fetchProduct } = useProductStore();

  useEffect(() => {
    if (!productId) return;
    
    fetchProduct(productId);
  }, [productId, fetchProduct]);

  return { product, isLoading, error };
};