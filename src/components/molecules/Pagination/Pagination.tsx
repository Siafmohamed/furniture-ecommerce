import React from "react";
import clsx from "clsx";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNext?: () => void;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  className,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={clsx("flex items-center justify-center gap-2", className)}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "h-10 w-10 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm transition hover:border-amber-500 hover:text-amber-600",
            currentPage === page && "bg-amber-50 border-amber-500 text-amber-600"
          )}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={onNext}
          className="h-10 w-16 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm transition hover:border-amber-500 hover:text-amber-600"
          aria-label="Next page"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;

