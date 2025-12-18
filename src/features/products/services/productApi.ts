import axios from 'axios';
import type { Product } from '../types/productTypes';

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'https://furniture-api.fly.dev/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// API service functions
export const productApi = {
  /**
   * Fetch product details by SKU
   * @param sku - Product SKU identifier
   * @returns Promise resolving to Product data
   */
  getProductBySku: async (id: string): Promise<Product> => {
    try {
      const response = await apiClient.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      // Handle different error types
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error('Product not found');
        } else if (error.response?.status === 500) {
          throw new Error('Server error occurred');
        } else if (error.code === 'ECONNABORTED') {
          throw new Error('Request timeout');
        } else {
          throw new Error(error.response?.data?.message || 'Failed to fetch product');
        }
      }
      throw new Error('An unexpected error occurred');
    }
  },
};

export default apiClient;