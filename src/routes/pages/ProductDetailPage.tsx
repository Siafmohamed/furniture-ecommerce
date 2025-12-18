import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { ProductParams } from "../types";
import { useProduct } from "../../features/products/hooks/useProduct";
import { productsApi } from "../../features/products/services/productsApi";
import type { ProductTileData } from "../../components/molecules/ProductTile/ProductTile";
import Breadcrumb from "../../components/molecules/Breadcrumb/Breadcrumb";
import ProductImageGallery from "../../components/molecules/ProductImageGallery/ProductImageGallery";
import ProductInfo from "../../components/organisms/ProductInfo/ProductInfo";
import ProductTabs from "../../components/molecules/ProductTabs/ProductTabs";
import RelatedProducts from "../../components/organisms/RelatedProducts/RelatedProducts";
import Loading from "../../components/atoms/Loading/Loading";
import Text from "../../components/atoms/Text/Text";
import Heading from "../../components/atoms/Heading/Heading";

const ProductDetailPage: React.FC = () => {
  const { id: id } = useParams<ProductParams>();
  const navigate = useNavigate();
  const { product, isLoading, error } = useProduct(id);
  
  // State for related products
  const [relatedProducts, setRelatedProducts] = useState<ProductTileData[]>([]);
  const [relatedProductsLoading, setRelatedProductsLoading] = useState(true);
  const [relatedProductsError, setRelatedProductsError] = useState<string | null>(null);

  // Memoize breadcrumb items to prevent unnecessary re-renders
  const breadcrumbItems = useMemo(() => [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: product?.name || "Product Details" },
  ], [product?.name]);

  // Fetch related products
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setRelatedProductsLoading(true);
      setRelatedProductsError(null);
      
      try {
        const products = await productsApi.getRelatedProducts();
        setRelatedProducts(products);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch related products';
        setRelatedProductsError(errorMessage);
        // Fallback to mock data if API fails
        setRelatedProducts([
          {
            id: "2",
            name: "Trenton modular sofa_3",
            price: 25000,
            category: "Sofas",
            image_path: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
          },
          {
            id: "3",
            name: "Granite dining table with dining chair",
            price: 25000,
            category: "Tables",
            image_path: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
          },
          {
            id: "4",
            name: "Outdoor bar table and stool",
            price: 25000,
            category: "Outdoor",
            image_path: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=800&q=80",
          },
          {
            id: "5",
            name: "Rain console with rock mirror",
            price: 25000,
            category: "Storage",
            image_path: "https://images.unsplash.com/photo-1523419400524-e0c4bb5bef16?auto=format&fit=crop&w=800&q=80",
          },
        ]);
      } finally {
        setRelatedProductsLoading(false);
      }
    };

    fetchRelatedProducts();
  }, []);

  // Memoize handler functions to prevent unnecessary re-renders
  const handleWishlistToggle = useCallback(() => {
    // TODO: Implement wishlist toggle logic
    console.log("Toggle wishlist:", product?.id);
  }, [product?.id]);

  const handleViewMore = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  // Memoize product URL to prevent unnecessary re-calculations
  const productUrl = useMemo(() => 
    product ? `${window.location.origin}/product/${product.id}` : "",
    [product]
  );

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loading size="lg" text="Loading product details..." />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heading level={1} size="2xl" weight="bold" className="mb-4">
            Product Not Found
          </Heading>
          <Text className="mb-6 text-gray-600">{error || "The product you're looking for doesn't exist."}</Text>
          <button
            onClick={() => navigate("/shop")}
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={breadcrumbItems}
          className="mb-8"
        />

        {/* Main Product Section */}
        <div className="bg-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Product Images */}
            <div>
              <ProductImageGallery
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Right Column - Product Info */}
            <div>
              <ProductInfo
                name={product.name}
                price={product.price}
                rating={product.rating ?? 0}
                reviewCount={product.reviewCount ?? 0}
                description={product.shortDescription ?? "No description available"}
                sizes={product.sizes ?? []}
                colors={product.colors ?? []}
                sku={product.sku}
                category={product.category}
                tags={product.tags}
                onWishlistToggle={handleWishlistToggle}
                isInWishlist={false}
                productUrl={productUrl}
                productImage={product.images[0]}
              />
            </div>
          </div>
        </div>

        {/* Description, Additional Info, and Reviews Section */}
        <div className="bg-white mb-12">
          <ProductTabs
            description={product.description}
            additionalInfo={undefined}
            reviews={[]}
          />

          {/* Additional Product Images */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF4F4] rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                alt="Product detail view 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#FAF4F4] rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Product detail view 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="bg-white">
          {relatedProductsLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loading size="md" text="Loading related products..." />
            </div>
          ) : relatedProductsError ? (
            <div className="text-center py-8">
              <Text className="text-red-500 mb-2">Failed to load related products</Text>
              <Text className="text-gray-600 text-sm">{relatedProductsError}</Text>
            </div>
          ) : (
            <RelatedProducts
              products={relatedProducts}
              onViewMore={handleViewMore}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;