/**
 * CategoryPage Component
 * 
 * Example of a dynamic route with slug parameter.
 * Demonstrates how to handle category-based filtering.
 */

import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CategoryParams, SearchQueryParams } from "../types";
import MainLayout from "../../components/templates/MainLayout/MainLayout";
import Text from "../../components/atoms/Text/Text";

const CategoryPage: React.FC = () => {
  // Extract route parameters
  const { slug } = useParams<CategoryParams>();
  
  // Extract query parameters (e.g., ?page=1&sort=price)
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const sort = searchParams.get("sort") || "default";

  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Text size="2xl" weight="bold" className="mb-4">
          Category: {slug}
        </Text>
        <Text className="mb-4 text-gray-600">
          This page demonstrates dynamic routing with URL parameters and query strings.
        </Text>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Text weight="bold" className="mb-2">Route Parameters:</Text>
          <Text className="mb-4">Category Slug: <strong>{slug}</strong></Text>
          
          <Text weight="bold" className="mb-2">Query Parameters:</Text>
          <Text className="mb-2">Page: <strong>{page}</strong></Text>
          <Text>Sort: <strong>{sort}</strong></Text>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;









