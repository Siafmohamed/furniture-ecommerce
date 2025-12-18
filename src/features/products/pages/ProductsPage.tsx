import React, { useState, useMemo, useCallback } from "react";
import ShopTemplate from "../../../components/templates/ShopTemplate/ShopTemplate";
import ProductToolbar from "../../../components/organisms/ProductToolbar/ProductToolbar";
import ProductGrid from "../../../components/organisms/ProductGrid/ProductGrid";
import ServiceHighlights from "../../../components/organisms/ServiceHighlights/ServiceHighlights";
import Pagination from "../../../components/molecules/Pagination/Pagination";
import { useProducts } from "../hooks/useProducts";
import useProductCatalog from "../hooks/useProductCatalog";
import Loading from "../../../components/atoms/Loading/Loading";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";

const ITEMS_PER_PAGE = 16;

const ProductsPage: React.FC = () => {
  const { products, isLoading, error, refetch } = useProducts();
  
  const [currentPage, setCurrentPage] = useState(1);

  // Always call hooks at the top level to comply with React rules
  const {
    categories,
    filteredProducts,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    viewMode,
    setViewMode,
  } = useProductCatalog(products || []);

  // Memoize paginated products to prevent unnecessary recalculations
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  // Memoize calculation values to prevent unnecessary recalculations
  const showingFrom = useMemo(() => 
    filteredProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0,
    [filteredProducts.length, currentPage]
  );
  
  const showingTo = useMemo(() => 
    Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length),
    [currentPage, filteredProducts.length]
  );

  const totalPages = useMemo(() => 
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
    [filteredProducts.length]
  );

  // Memoize handler functions to prevent unnecessary re-renders
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, handlePageChange]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [category, search, sort]);

  // Memoize toolbar props to prevent unnecessary re-renders
  const toolbarProps = useMemo(() => ({
    categories,
    activeCategory: category,
    onCategoryChange: setCategory,
    search,
    onSearchChange: setSearch,
    sort,
    onSortChange: setSort,
    viewMode,
    onViewChange: setViewMode,
    totalResults: filteredProducts.length,
    showingFrom,
    showingTo,
    onRefresh: refetch,
  }), [
    categories,
    category,
    setCategory,
    search,
    setSearch,
    sort,
    setSort,
    viewMode,
    setViewMode,
    filteredProducts.length,
    showingFrom,
    showingTo,
    refetch,
  ]);

  // Memoize pagination props to prevent unnecessary re-renders
  const paginationProps = useMemo(() => ({
    currentPage,
    totalPages,
    onPageChange: handlePageChange,
    onNext: handleNext,
  }), [currentPage, totalPages, handlePageChange, handleNext]);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loading size="lg" text="Loading products..." />
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heading level={1} size="2xl" weight="bold" className="mb-4">
            Error Loading Products
          </Heading>
          <Text className="mb-6 text-gray-600">{error}</Text>
        </div>
      </div>
    );
  }

  return (
    <ShopTemplate
      heroTitle="Shop"
      heroSubtitle="Home / Shop"
      toolbar={
        <ProductToolbar {...toolbarProps} />
      }
      products={<ProductGrid products={paginatedProducts} viewMode={viewMode} />}
      pagination={
        totalPages > 1 ? (
          <Pagination {...paginationProps} />
        ) : null
      }
      afterContent={<ServiceHighlights />}
    />
  );
};

export default ProductsPage;