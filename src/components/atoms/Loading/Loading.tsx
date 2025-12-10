/**
 * Loading Component (Atom)
 * 
 * Shared loading spinner component that can be used in buttons,
 * async actions, or as a standalone loading indicator.
 * Provides consistent loading UI across the application.
 */

import React from "react";
import clsx from "clsx";

type LoadingProps = {
  /** Size of the loading spinner */
  size?: "sm" | "md" | "lg";
  /** Color variant */
  variant?: "primary" | "white" | "amber";
  /** Additional CSS classes */
  className?: string;
  /** Text to display below spinner (optional) */
  text?: string;
};

const Loading: React.FC<LoadingProps> = ({
  size = "md",
  variant = "primary",
  className,
  text,
}) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
  };

  const variantClasses = {
    primary: "border-gray-300 border-t-gray-900",
    white: "border-white/30 border-t-white",
    amber: "border-amber-200 border-t-amber-600",
  };

  return (
    <div className={clsx("flex flex-col items-center justify-center", className)}>
      <div
        className={clsx(
          "animate-spin rounded-full",
          sizeClasses[size],
          variantClasses[variant]
        )}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <span className={clsx("mt-2 text-sm", variant === "white" ? "text-white" : "text-gray-600")}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Loading;








