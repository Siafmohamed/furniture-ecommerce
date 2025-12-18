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
    <div className={clsx("flex flex-col gap-4", className)}>
      {/* Main Image */}
      <div className="w-full">
        <div className="aspect-square bg-[#FAF4F4] rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Thumbnail Images (Below main image) */}
      <div className="flex flex-row gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={clsx(
              "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
              selectedIndex === index
                ? "border-gray-900"
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
    </div>
  );
};

export default ProductImageGallery;





