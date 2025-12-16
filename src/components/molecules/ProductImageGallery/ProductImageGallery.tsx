/**
 * ProductImageGallery Component (Molecule)
 * 
 * Displays main product image with thumbnail navigation.
 * Allows users to view different product angles.
 */

import React, { useState } from "react";
import Image from "../../atoms/Image/Image";
import clsx from "clsx";

type ProductImageGalleryProps = {
  /** Array of image URLs */
  images: string[];
  /** Product name for alt text */
  productName: string;
  /** Additional CSS classes */
  className?: string;
};

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const mainImage = images[selectedIndex] || images[0];

  return (
    <div className={clsx("flex flex-col md:flex-row gap-4", className)}>
      {/* Thumbnail Images (Left side on desktop, top on mobile) */}
      <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={clsx(
              "w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all",
              selectedIndex === index
                ? "border-gray-900 ring-2 ring-offset-2 ring-gray-900"
                : "border-gray-200 hover:border-gray-400"
            )}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 order-1 md:order-2">
        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;




