import React from "react";
import ProductTile, { type ProductTileData } from "../../molecules/ProductTile/ProductTile";
import { type ViewMode } from "../../../features/products/hooks/useProductCatalog";

type ProductGridProps = {
  products: ProductTileData[];
  viewMode?: ViewMode;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode = "grid" }) => {
  const isList = viewMode === "list";

  return (
    <div
      className={
        isList
          ? "flex flex-col gap-4"
          : "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      }
    >
      {products.map((product) => (
        <ProductTile key={product.id} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default ProductGrid;

