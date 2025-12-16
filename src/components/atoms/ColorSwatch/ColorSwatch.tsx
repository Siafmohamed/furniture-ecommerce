/**
 * ColorSwatch Component (Atom)
 * 
 * Displays a color option as a circular swatch.
 * Used for product color selection.
 */

import React from "react";
import clsx from "clsx";

type ColorSwatchProps = {
  /** Color value (hex, rgb, or color name) */
  color: string;
  /** Whether this color is selected */
  selected?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label */
  ariaLabel?: string;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  selected = false,
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "w-10 h-10 rounded-full border-2 transition-all",
        selected
          ? "border-gray-900 ring-2 ring-offset-2 ring-gray-900"
          : "border-gray-300 hover:border-gray-400",
        className
      )}
      style={{ backgroundColor: color }}
      aria-label={ariaLabel || `Select color ${color}`}
      aria-pressed={selected}
    />
  );
};

export default ColorSwatch;




