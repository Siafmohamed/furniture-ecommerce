/**
 * QuantitySelector Component (Molecule)
 * 
 * Input field with increment/decrement buttons for quantity selection.
 * Combines Input atom with button controls.
 */

import React from "react";
import Button from "../../atoms/Button/Button";
import clsx from "clsx";

type QuantitySelectorProps = {
  /** Current quantity value */
  value: number;
  /** Minimum allowed quantity */
  min?: number;
  /** Maximum allowed quantity */
  max?: number;
  /** Change handler */
  onChange: (value: number) => void;
  /** Additional CSS classes */
  className?: string;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  min = 1,
  max = 999,
  onChange,
  className,
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={clsx("flex items-center border-2 border-gray-300 rounded-lg overflow-hidden", className)}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className={clsx(
          "px-4 py-2 text-gray-700 hover:bg-gray-100 transition",
          value <= min && "opacity-50 cursor-not-allowed"
        )}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-16 px-2 py-2 text-center border-0 focus:outline-none focus:ring-0"
        aria-label="Quantity"
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className={clsx(
          "px-4 py-2 text-gray-700 hover:bg-gray-100 transition",
          value >= max && "opacity-50 cursor-not-allowed"
        )}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;












