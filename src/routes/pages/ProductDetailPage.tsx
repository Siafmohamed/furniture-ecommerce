/**
 * ProductDetailPage Component
 * 
 * Example of a dynamic route with parameters.
 * Uses useParams hook to get route parameters.
 */

import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductParams } from "../types";
import MainLayout from "../../components/templates/MainLayout/MainLayout";
import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/Button/Button";

const ProductDetailPage: React.FC = () => {
  // Extract route parameters with TypeScript typing
  const { id } = useParams<ProductParams>();

  // In a real app, fetch product data using the id
  // const { data: product, isLoading } = useProduct(id);

  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/shop" className="text-amber-600 hover:text-amber-700 mb-4 inline-block">
          ← Back to Shop
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Text size="2xl" weight="bold" className="mb-4">
            Product Detail Page
          </Text>
          <Text size="lg" className="mb-4">
            Product ID: <strong>{id}</strong>
          </Text>
          <Text className="mb-6 text-gray-600">
            This is an example of a dynamic route. The product ID is extracted from the URL
            using the <code className="bg-gray-100 px-2 py-1 rounded">useParams</code> hook.
          </Text>
          
          <div className="flex gap-4">
            <Button variant="primary">Add to Cart</Button>
            <Button variant="outline">Add to Wishlist</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;









