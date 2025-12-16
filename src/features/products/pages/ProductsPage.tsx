import React, { useState, useMemo } from "react";
import ShopTemplate from "../../../components/templates/ShopTemplate/ShopTemplate";
import ProductToolbar from "../../../components/organisms/ProductToolbar/ProductToolbar";
import ProductGrid from "../../../components/organisms/ProductGrid/ProductGrid";
import ServiceHighlights from "../../../components/organisms/ServiceHighlights/ServiceHighlights";
import Pagination from "../../../components/molecules/Pagination/Pagination";
import useProductCatalog from "../hooks/useProductCatalog";
import { type ProductTileData } from "../../../components/molecules/ProductTile/ProductTile";

const products: ProductTileData[] = [
  {
    id: 1,
    name: "Light Clay Sofa",
    price: 35000,
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Nordic Lounge Chair",
    price: 22000,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Glass Top Coffee Table",
    price: 18000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80&sat=-30",
  },
  {
    id: 4,
    name: "Minimal Oak Bench",
    price: 21000,
    category: "Seating",
    image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Beach House Bed Frame",
    price: 25000,
    category: "Beds",
    image: "https://images.unsplash.com/photo-1616594039964-5e4b5a1f7a35?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Terracotta Accent Chair",
    price: 19900,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Rustic Study Table",
    price: 15500,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80&sat=-80",
  },
  {
    id: 8,
    name: "Warm Walnut Bed",
    price: 25000,
    category: "Beds",
    image: "https://images.unsplash.com/photo-1616594039964-5e4b5a1f7a35?auto=format&fit=crop&w=800&q=80&sat=-40",
  },
  {
    id: 9,
    name: "Sleek Media Console",
    price: 19000,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1582719478171-b6ea1ba6c38e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Walnut Storage Cabinet",
    price: 23000,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1523419400524-e0c4bb5bef16?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Outdoor Bistro Set",
    price: 15000,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Blush Lounge Sofa",
    price: 34000,
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80&sat=20",
  },
  {
    id: 13,
    name: "Fabric Ottoman Stool",
    price: 12000,
    category: "Seating",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80&sat=-50",
  },
  {
    id: 14,
    name: "Upholstered Bench",
    price: 16000,
    category: "Seating",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80&sat=30",
  },
  {
    id: 15,
    name: "Neutral Modular Sofa",
    price: 38000,
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=800&q=80&sat=-20",
  },
  {
    id: 16,
    name: "Compact Study Desk",
    price: 14000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80&sat=-10",
  },
  {
    id: 17,
    name: "Trenton nook bar with stool",
    price: 25000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Granby dining table with chairs",
    price: 235000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Outdoor bar table and stools",
    price: 45000,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Marmon armoire with mirror",
    price: 125000,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1523419400524-e0c4bb5bef16?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 21,
    name: "Modern rectangular coffee table",
    price: 32000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 22,
    name: "Wooden square coffee table",
    price: 28000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 23,
    name: "Round coffee table with metal base",
    price: 24000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 24,
    name: "Light wooden dresser",
    price: 95000,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1523419400524-e0c4bb5bef16?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 25,
    name: "Simple wooden console table",
    price: 35000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 26,
    name: "Ornate wooden cabinet",
    price: 145000,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1523419400524-e0c4bb5bef16?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 27,
    name: "Two wooden lounge chairs set",
    price: 55000,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 28,
    name: "Metal-framed chairs set",
    price: 42000,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 29,
    name: "Square wooden dining table",
    price: 185000,
    category: "Tables",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 30,
    name: "Two armchairs with side table",
    price: 68000,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 31,
    name: "Long light-colored sofa",
    price: 195000,
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 32,
    name: "Dark sofa set with coffee table",
    price: 285000,
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 16;

const ProductsPage: React.FC = () => {
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
  } = useProductCatalog(products);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const showingFrom = filteredProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0;
  const showingTo = Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [category, search, sort]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <ShopTemplate
      heroTitle="Shop"
      heroSubtitle="Home / Shop"
      toolbar={
        <ProductToolbar
          categories={categories}
          activeCategory={category}
          onCategoryChange={setCategory}
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
          viewMode={viewMode}
          onViewChange={setViewMode}
          totalResults={filteredProducts.length}
          showingFrom={showingFrom}
          showingTo={showingTo}
        />
      }
      products={<ProductGrid products={paginatedProducts} viewMode={viewMode} />}
      pagination={
        totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onNext={handleNext}
          />
        ) : null
      }
      afterContent={<ServiceHighlights />}
    />
  );
};

export default ProductsPage;











