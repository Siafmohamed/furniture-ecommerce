import axios from 'axios';
import type { ProductApiResponse } from '../types/productTypes';
import type { ProductTileData } from '../../../components/molecules/ProductTile/ProductTile';

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'https://furniture-api.fly.dev/v1',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const productsApi = {
  /**
   * Fetch all products
   * @returns Promise resolving to array of ProductTileData
   */
  getAllProducts: async (): Promise<ProductTileData[]> => {
    try {
      const response = await apiClient.get<ProductApiResponse>('/products');
      return response.data.data
    }catch (error) {
      // Handle different error types
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error('Products not found');
        } else if (error.response?.status === 500) {
          throw new Error('Server error occurred');
        } else if (error.code === 'ECONNABORTED') {
          throw new Error('Request timeout');
        } else {
          throw new Error(error.response?.data?.message || 'Failed to fetch products');
        }
      }
      throw new Error('An unexpected error occurred');
    }
  },

  /**
   * Fetch related products (first 4 products)
   * @returns Promise resolving to array of ProductTileData
   */
  getRelatedProducts: async (): Promise<ProductTileData[]> => {
    try {
      const response = await apiClient.get<ProductApiResponse>('/products');
      // Return first 4 products as related products
      const products = response.data.data.slice(0, 4);
      return products.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image_path: p.image_path,
        category: p.category,
        tags: p.tags || undefined,
      }));
    } catch (error) {
      // Handle different error types
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error('Related products not found');
        } else if (error.response?.status === 500) {
          throw new Error('Server error occurred');
        } else if (error.code === 'ECONNABORTED') {
          throw new Error('Request timeout');
        } else {
          throw new Error(error.response?.data?.message || 'Failed to fetch related products');
        }
      }
      throw new Error('An unexpected error occurred');
    }
  },
};

export default apiClient;