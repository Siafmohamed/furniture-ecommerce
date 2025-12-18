import React from "react";
import clsx from "clsx";
import Card from "../Card/Card";
import Text from "../../atoms/Text/Text";

export type ProductTileData = {
  id: string | number;
  name: string;
  price: number;
  image_path: string;
  category: string;
  tags?: string | null;
};

type ProductTileProps = {
  product: ProductTileData;
  viewMode?: "grid" | "list";
};

const ProductTile: React.FC<ProductTileProps> = ({ product, viewMode = "grid" }) => {
  const isList = viewMode === "list";

  return (
    <Card
      className={clsx(
        "group h-full border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl",
        isList && "flex items-center gap-4 p-4"
      )}
    >
      <div
        className={clsx(
          "relative flex items-center justify-center bg-gradient-to-b from-gray-50 to-white",
          isList ? "h-28 w-28 shrink-0 rounded-lg" : "aspect-[4/3]"
        )}
      >
        {product.tags && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {product.tags}
          </span>
        )}
        <img
          src={product.image_path}
          alt={product.name}
          className={clsx(
            "object-contain transition duration-500 group-hover:scale-105",
            isList ? "h-20 w-20" : "h-32 w-32"
          )}
          loading="lazy"
        />
      </div>

      <div className={clsx("space-y-1 px-4 pb-5 pt-3", isList && "flex-1 px-0 pb-0 pt-0")}>
        <Text
          size="sm"
          weight="medium"
          color="text-amber-600"
          className="uppercase tracking-[0.08em]"
        >
          {product.category}
        </Text>
        <Text size="base" weight="medium" color="text-gray-800" className="line-clamp-2">
          {product.name}
        </Text>
        <Text size="lg" weight="bold" color="text-gray-900">
          Rs. {product.price.toLocaleString()}
        </Text>
      </div>
    </Card>
  );
};

export default ProductTile;