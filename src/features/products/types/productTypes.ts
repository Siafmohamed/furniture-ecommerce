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
  id: string;                    // API uses UUID string
  name: string;                  
  price: number;
  discount_price?: number;        // optional field from API
  images: string[];               // convert image_path from API into array
  description: string;
  shortDescription?: string;      // optional
  rating?: number;                // not in API yet, optional
  reviewCount?: number;           // optional
  sizes?: ProductSize[];          // optional, if your API supports it
  colors?: ProductColor[];        // optional
  sku: string;                    
  category: string;
  tags: string[];                 // convert API null to empty array if needed
  inStock: boolean;               // derive from stock > 0
};


export type ProductApiResponse = {
  success: boolean;
  count: number;
  data: {
    id: string;
    name: string;
    price: number;
    image_path: string;
    category: string;
    tags?: string | null;
  }[];
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












