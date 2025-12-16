/**
 * Checkbox Component (Atom)
 * 
 * Reusable checkbox input component with consistent styling.
 * Supports controlled and uncontrolled modes.
 */

import React from "react";
import clsx from "clsx";

type CheckboxProps = {
  /** Checkbox label text */
  label?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** HTML id attribute */
  id?: string;
  /** HTML name attribute */
  name?: string;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether the checkbox has an error state */
  hasError?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  name,
  disabled = false,
  className,
  hasError = false,
}) => {
  return (
    <div className={clsx("flex items-center", className)}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          "h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 focus:ring-2",
          hasError && "border-red-500",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "ml-2 text-sm",
            hasError ? "text-red-600" : "text-gray-700",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;











