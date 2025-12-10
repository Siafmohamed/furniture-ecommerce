/**
 * Button Component (Atom)
 * 
 * Reusable button component with loading state support.
 * Can display a loading spinner during async operations.
 */

import React from "react";
import clsx from "clsx";
import Loading from "../Loading/Loading";

type ButtonProps = {
  /** Button content */
  children: React.ReactNode;
  /** Visual variant */
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "link"
    | "addToCart"
    | "subscribe";
  /** Whether the button is in loading state */
  isLoading?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Full width button */
  fullWidth?: boolean;
};

const baseStyles =
  "px-6 py-3 font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2";

const styles = {
  primary: "bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:shadow-lg",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-50",
  link: "text-sm text-amber-600 hover:text-amber-700 underline bg-transparent p-0",
  addToCart: "w-full py-2 bg-amber-500 text-white rounded-lg",
  subscribe: "bg-amber-500 text-white hover:bg-amber-600",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  isLoading = false,
  disabled = false,
  type = "button",
  onClick,
  className,
  fullWidth = false,
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        baseStyles,
        styles[variant],
        isDisabled && "opacity-50 cursor-not-allowed",
        fullWidth && "w-full",
        className
      )}
    >
      {isLoading ? (
        <>
          <Loading size="sm" variant={variant === "primary" || variant === "addToCart" || variant === "subscribe" ? "white" : "primary"} />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
