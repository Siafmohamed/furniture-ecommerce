/**
 * ProductInfo Component (Organism)
 * 
 * Displays product details including name, price, rating, options,
 * quantity selector, and add to cart button.
 * Combines multiple molecules into a cohesive product information panel.
 */

import React, { useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Rating from "../../molecules/Rating/Rating";
import SizeButton from "../../atoms/SizeButton/SizeButton";
import ColorSwatch from "../../atoms/ColorSwatch/ColorSwatch";
import QuantitySelector from "../../molecules/QuantitySelector/QuantitySelector";
import Button from "../../atoms/Button/Button";
import ShareButtons from "../../molecules/ShareButtons/ShareButtons";
import Divider from "../../atoms/Divider/Divider";

type ProductInfoProps = {
  /** Product name */
  name: string;
  /** Product price */
  price: number;
  /** Product rating (0-5) */
  rating: number;
  /** Number of reviews */
  reviewCount: number;
  /** Short description */
  description: string;
  /** Available sizes */
  sizes: string[];
  /** Available colors with hex values */
  colors: Array<{ name: string; value: string }>;
  /** Product SKU */
  sku: string;
  /** Product category */
  category: string;
  /** Product tags */
  tags: string[];
  /** Wishlist handler */
  onWishlistToggle?: () => void;
  /** Whether product is in wishlist */
  isInWishlist?: boolean;
  /** Product URL for sharing */
  productUrl?: string;
  /** Product image URL for sharing */
  productImage?: string;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  price,
  rating,
  reviewCount,
  description,
  sizes,
  colors,
  sku,
  category,
  tags,
  onWishlistToggle,
  isInWishlist = false,
  productUrl,
  productImage,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]?.value || "");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate async add to cart
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Add to cart using context
    addItem({
      id: sku, // Using SKU as ID for now
      name,
      price,
      image: productImage || '',
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
    
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <Heading level={1} size="2xl" weight="bold" className="text-gray-900">
        {name}
      </Heading>

      {/* Price */}
      <Text size="xl" weight="bold" className="text-gray-900">
        Rs. {price.toLocaleString()}
      </Text>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Rating rating={rating} reviewCount={reviewCount} />
      </div>

      {/* Description */}
      <Text className="text-gray-700 leading-relaxed">{description}</Text>

      {/* Size Selection */}
      <div>
        <Text weight="medium" className="text-gray-900 mb-3">
          Size:
        </Text>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <SizeButton
              key={size}
              size={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            />
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <Text weight="medium" className="text-gray-900 mb-3">
          Color:
        </Text>
        <div className="flex gap-3">
          {colors.map((color) => (
            <ColorSwatch
              key={color.value}
              color={color.value}
              selected={selectedColor === color.value}
              onClick={() => setSelectedColor(color.value)}
              ariaLabel={color.name}
            />
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <Text weight="medium" className="text-gray-900">
          Quantity:
        </Text>
        <QuantitySelector
          value={quantity}
          min={1}
          max={10}
          onChange={setQuantity}
        />
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="outline"
        fullWidth
        onClick={handleAddToCart}
        isLoading={isAdding}
        disabled={isAdding}
        className="py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
      >
        Add To Cart
      </Button>

      <Divider />

      {/* Product Meta */}
      <div className="space-y-2 text-sm">
        <div className="flex">
          <Text weight="medium" className="text-gray-900 w-24">
            SKU:
          </Text>
          <Text className="text-gray-600">{sku}</Text>
        </div>
        <div className="flex">
          <Text weight="medium" className="text-gray-900 w-24">
            Category:
          </Text>
          <Text className="text-gray-600">{category}</Text>
        </div>
        <div className="flex">
          <Text weight="medium" className="text-gray-900 w-24">
            Tags:
          </Text>
          <Text className="text-gray-600">{tags.join(", ")}</Text>
        </div>
      </div>

      {/* Share Buttons */}
      <ShareButtons
        productUrl={productUrl || ""}
        productName={name}
        productImage={productImage}
        onWishlistClick={onWishlistToggle}
        isInWishlist={isInWishlist}
      />
    </div>
  );
};

export default ProductInfo;





