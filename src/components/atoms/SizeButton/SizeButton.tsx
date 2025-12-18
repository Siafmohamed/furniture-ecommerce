/**
 * SizeButton Component (Atom)
 * 
 * Button for selecting product size (L, XL, XS, etc.).
 * Displays selected state clearly.
 */

import React from "react";
import clsx from "clsx";

type SizeButtonProps = {
  /** Size label (e.g., "L", "XL", "XS") */
  size: string;
  /** Whether this size is selected */
  selected?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
};

const SizeButton: React.FC<SizeButtonProps> = ({
  size,
  selected = false,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-6 py-2 border-2 font-medium transition-all",
        selected
          ? "bg-gray-900 text-white border-gray-900"
          : "bg-white text-gray-900 border-gray-300 hover:border-gray-900",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      aria-pressed={selected}
    >
      {size}
    </button>
  );
};

export default SizeButton;












