/**
 * RelatedProducts Component (Organism)
 * 
 * Displays a grid of related products with product cards.
 * Used on product detail pages to show similar items.
 */

import React from "react";
import Heading from "../../atoms/Heading/Heading";
import ClickableProductTile from "../../molecules/ProductTile/ClickableProductTile";
import type { ProductTileData } from "../../molecules/ProductTile/ProductTile";
import Button from "../../atoms/Button/Button";

type RelatedProductsProps = {
  /** Array of related products */
  products: ProductTileData[];
  /** Title for the section */
  title?: string;
  /** View more handler */
  onViewMore?: () => void;
  /** Additional CSS classes */
  className?: string;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title = "Related Products",
  onViewMore,
  className,
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <Heading level={2} size="2xl" weight="bold" className="text-center mb-8">
        {title}
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ClickableProductTile key={product.id} product={product} />
        ))}
      </div>

      {onViewMore && (
        <div className="text-center">
          <Button variant="outline" onClick={onViewMore}>
            View More
          </Button>
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;










