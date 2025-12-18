import { create } from 'zustand';
import type { ProductTileData } from '../../../components/molecules/ProductTile/ProductTile';
import { productsApi } from '../services/productsApi';

interface ProductsState {
  products: ProductTileData[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  resetProducts: () => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const products = await productsApi.getAllProducts();
      set({ products, isLoading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products';
      set({ error: errorMessage, isLoading: false });
    }
  },
  
  resetProducts: () => set({ products: [], isLoading: false, error: null }),
}));