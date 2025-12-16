import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import ProductTile, { type ProductTileData } from "./ProductTile";

type ClickableProductTileProps = {
  product: ProductTileData;
  viewMode?: "grid" | "list";
};

const ClickableProductTile: React.FC<ClickableProductTileProps> = ({ product, viewMode = "grid" }) => {
  const navigate = useNavigate();
  const isList = viewMode === "list";

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className={clsx(
        "cursor-pointer",
        isList && "flex items-center gap-4"
      )}
      onClick={handleClick}
    >
      <ProductTile product={product} viewMode={viewMode} />
    </div>
  );
};

export default ClickableProductTile;