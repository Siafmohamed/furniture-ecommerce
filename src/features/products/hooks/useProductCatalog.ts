import { useMemo, useState } from "react";
import { type ProductTileData } from "../../../components/molecules/ProductTile/ProductTile";

export type ViewMode = "grid" | "list";

const useProductCatalog = (products: ProductTileData[]) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, search, sort, products]);

  return {
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
  };
};

export default useProductCatalog;

