import React from "react";
import clsx from "clsx";

type FilterChipProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  active = false,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200",
        active
          ? "border-amber-500 bg-amber-50 text-amber-700 shadow-sm"
          : "border-gray-200 bg-white text-gray-700 hover:border-amber-500 hover:text-amber-600",
        className
      )}
      type="button"
    >
      {label}
    </button>
  );
};

export default FilterChip;

