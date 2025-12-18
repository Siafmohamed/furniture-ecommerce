/**
 * ProductDetailPage Component (Feature)
 * 
 * Main product detail page that displays all product information.
 * Includes routing integration, loading states, and error handling.
 * Follows Atomic Design structure with clean component composition.
 */

import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import MainLayout from "../../../components/templates/MainLayout/MainLayout";
import ProductImageGallery from "../../../components/molecules/ProductImageGallery/ProductImageGallery";
import ProductInfo from "../../../components/organisms/ProductInfo/ProductInfo";
import ProductTabs from "../../../components/molecules/ProductTabs/ProductTabs";
import RelatedProducts from "../../../components/organisms/RelatedProducts/RelatedProducts";
import Loading from "../../../components/atoms/Loading/Loading";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";
import Breadcrumb from "../../../components/molecules/Breadcrumb/Breadcrumb";
import { useProduct } from "../hooks/useProduct";
import { ProductTileData } from "../../../components/molecules/ProductTile/ProductTile";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, isLoading, error } = useProduct(id);

  // Mock related products - replace with actual API call
  const relatedProducts: ProductTileData[] = [
    {
      id: "2",
      name: "Trindle modular sofa_3",
      price: 25000,
      category: "Sofas",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      name: "Gracie dining table with dining chair",
      price: 25000,
      category: "Tables",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      name: "Outdoor bar table and stool",
      price: 25000,
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      name: "Plato console with wall mirror",
      price: 25000,
      category: "Storage",
      image: "https://images.unsplash.com/photo-1523419400524-e0c4bb5bef16?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleAddToCart = (options: {
    size: string;
    color: string;
    quantity: number;
  }) => {
    // TODO: Implement actual add to cart logic
    console.log("Add to cart:", {
      productId: product?.id,
      ...options,
    });
    // Show success message or navigate to cart
  };

  const handleWishlistToggle = () => {
    // TODO: Implement wishlist toggle logic
    console.log("Toggle wishlist:", product?.id);
  };

  const handleViewMore = () => {
    navigate("/shop");
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loading size="lg" text="Loading product details..." />
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error || !product) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heading level={1} size="2xl" weight="bold" className="mb-4">
              Product Not Found
            </Heading>
            <Text className="mb-6 text-gray-600">{error || "The product you're looking for doesn't exist."}</Text>
            <Link to="/shop" className="text-amber-600 hover:text-amber-700 font-medium">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const productUrl = `${window.location.origin}/product/${product.id}`;

  return (
    <MainLayout>
      <div className="bg-[#f7f3ef] min-h-screen">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: product.name },
            ]}
            className="mb-6"
          />

          {/* Product Details Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Images */}
              <div>
                <ProductImageGallery
                  images={product.images}
                  productName={product.name}
                />
              </div>

              {/* Product Info */}
              <div>
                <ProductInfo
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  description={product.shortDescription}
                  sizes={product.sizes}
                  colors={product.colors}
                  sku={product.sku}
                  category={product.category}
                  tags={product.tags}
                  onAddToCart={handleAddToCart}
                  onWishlistToggle={handleWishlistToggle}
                  isInWishlist={false}
                  productUrl={productUrl}
                  productImage={product.images[0]}
                />
              </div>
            </div>
          </div>

          {/* Product Tabs (Description, Additional Info, Reviews) */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
            <ProductTabs
              description={product.description}
              additionalInfo={product.additionalInfo}
              reviews={product.reviews}
            />
          </div>

          {/* Related Products */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <RelatedProducts
              products={relatedProducts}
              onViewMore={handleViewMore}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;












