/**
 * Label Component (Atom)
 * 
 * Reusable label component for form inputs.
 * Supports required field indicators and error states.
 */

import React from "react";
import clsx from "clsx";

type LabelProps = {
  /** Label text */
  children: React.ReactNode;
  /** HTML for attribute to associate with input */
  htmlFor?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field has an error */
  hasError?: boolean;
  /** Additional CSS classes */
  className?: string;
};

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  required = false,
  hasError = false,
  className,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "block text-sm font-medium mb-2",
        hasError ? "text-red-600" : "text-gray-700",
        className
      )}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;




















