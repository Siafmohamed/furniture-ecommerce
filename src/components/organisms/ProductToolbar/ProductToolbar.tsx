import React from "react";
import Icon from "../../atoms/Icon/Icon";
import FilterChip from "../../atoms/FilterChip/FilterChip";
import Select from "../../atoms/Select/Select";
import SearchInput from "../../molecules/SearchInput/SearchInput";
import clsx from "clsx";

type ViewMode = "grid" | "list";

type ProductToolbarProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  totalResults: number;
  showingFrom: number;
  showingTo: number;
};

const ProductToolbar: React.FC<ProductToolbarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
  viewMode,
  onViewChange,
  totalResults,
  showingFrom,
  showingTo,
}) => {
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-[#f7f3ef] p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-gray-700">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:border-amber-500">
            <Icon name="SlidersHorizontal" size="medium" className="text-gray-600" />
          </button>
          <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 md:flex">
            <button
              onClick={() => onViewChange("grid")}
              className={clsx(
                "flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition",
                viewMode === "grid" ? "bg-white shadow-sm text-amber-600" : "hover:text-amber-600"
              )}
              aria-label="Grid view"
            >
              <Icon name="LayoutGrid" size="medium" />
            </button>
            <button
              onClick={() => onViewChange("list")}
              className={clsx(
                "flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition",
                viewMode === "list" ? "bg-white shadow-sm text-amber-600" : "hover:text-amber-600"
              )}
              aria-label="List view"
            >
              <Icon name="Rows3" size="medium" />
            </button>
          </div>
          <span className="text-sm text-gray-600">
            Showing {showingFrom}-{showingTo} of {totalResults} results
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-end">
          <Select
            value={sort}
            onChange={onSortChange}
            options={[
              { label: "Default", value: "featured" },
              { label: "Price: Low to High", value: "price-asc" },
              { label: "Price: High to Low", value: "price-desc" },
            ]}
            className="w-44"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...categories].map((category) => (
          <FilterChip
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductToolbar;

