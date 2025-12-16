/**
 * Product Types
 * 
 * TypeScript type definitions for product data structures.
 */

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type ProductColor = {
  name: string;
  value: string; // Hex color code
};

export type ProductReview = {
  id: string;
  author: string;
  rating: number; // 0-5
  comment: string;
  date: string;
};

export type Product = {
  id: string | number;
  name: string;
  price: number;
  images: string[];
  description: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  sizes: ProductSize[];
  colors: ProductColor[];
  sku: string;
  category: string;
  tags: string[];
  additionalInfo?: Record<string, string>;
  reviews?: ProductReview[];
  inStock: boolean;
};

export type CartItem = {
  productId: string | number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};




