/**
 * useProduct Hook
 * 
 * Custom hook for fetching and managing product data.
 * Handles loading states and error handling.
 */

import { useState, useEffect } from "react";
import { Product } from "../types/productTypes";

type UseProductResult = {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
};

/**
 * Mock product data - replace with actual API call
 */
const mockProducts: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Asgaard sofa",
    price: 250000,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    ],
    description: `Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    shortDescription: "Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
    rating: 5,
    reviewCount: 10,
    sizes: ["L", "XL", "XS"],
    colors: [
      { name: "Purple", value: "#9333ea" },
      { name: "Black", value: "#000000" },
      { name: "Gold", value: "#d4af37" },
    ],
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    additionalInfo: {
      "Dimensions": "200cm x 90cm x 85cm",
      "Weight": "45kg",
      "Material": "Wood, Fabric",
      "Care Instructions": "Wipe clean with damp cloth",
    },
    reviews: [
      {
        id: "1",
        author: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15",
      },
      {
        id: "2",
        author: "Jane Smith",
        rating: 4,
        comment: "Great sofa, but delivery took longer than expected.",
        date: "2024-01-10",
      },
    ],
    inStock: true,
  },
};

export const useProduct = (productId: string | undefined): UseProductResult => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      setError("Product ID is required");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setIsLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      const foundProduct = mockProducts[productId];
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError("Product not found");
      }
      setIsLoading(false);
    }, 500); // Simulate network delay

    return () => clearTimeout(timer);
  }, [productId]);

  return { product, isLoading, error };
};




