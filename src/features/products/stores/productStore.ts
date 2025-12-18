import { create } from 'zustand';
import type { Product } from '../types/productTypes';
import { productsApi } from '../services/productsApi';

interface ProductState {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
  fetchProduct: (id: string) => Promise<void>;
  resetProduct: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  product: null,
  isLoading: false,
  error: null,
  
  fetchProduct: async (id: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Fetch all products and find the one with matching ID
      const products = await productsApi.getAllProducts();
      
      // Find product by ID
      const foundProduct = products.find(p => p.id === id);
      
      if (foundProduct) {
        // Transform ProductTileData to Product type
        const product: Product = {
          id: foundProduct.id.toString(),
          name: foundProduct.name,
          price: foundProduct.price,
          images: [foundProduct.image_path],
          description: `Beautiful ${foundProduct.name} in the ${foundProduct.category} category.`,
          shortDescription: `Stylish ${foundProduct.name}`,  
          rating: 4.5,
          reviewCount: 12,
          sizes: ['M', 'L'],
          colors: [{ name: 'Natural', value: '#8B4513' }],
          sku: `SKU-${foundProduct.id.toString().substring(0, 8)}`,
          category: foundProduct.category,
          tags: foundProduct.tags ? [foundProduct.tags] : [],
          inStock: true
        };
        
        set({ product, isLoading: false });
      } else {
        throw new Error('Product not found');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch product';
      set({ error: errorMessage, isLoading: false });
    }
  },
  
  resetProduct: () => set({ product: null, isLoading: false, error: null }),
}));