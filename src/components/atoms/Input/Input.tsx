/**
 * Input Component (Atom)
 * 
 * Reusable input component with consistent styling.
 * Supports error states and various input types.
 */

import React from "react";
import clsx from "clsx";

type InputType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "datetime-local";

type InputProps = {
  /** Input type */
  type?: InputType;
  /** Placeholder text */
  placeholder?: string;
  /** Input value (controlled) */
  value?: string | number;
  /** Default value (uncontrolled) */
  defaultValue?: string | number;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** HTML id attribute */
  id?: string;
  /** HTML name attribute */
  name?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Whether the input has an error */
  hasError?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Auto-complete attribute */
  autoComplete?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  id,
  name,
  disabled = false,
  required = false,
  hasError = false,
  className,
  autoComplete,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      className={clsx(
        "w-full px-4 py-3 rounded-lg border transition",
        "focus:outline-none focus:ring-2 focus:ring-amber-500",
        hasError
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:border-amber-500",
        disabled && "opacity-50 cursor-not-allowed bg-gray-50",
        className
      )}
    />
  );
};

export default Input;
