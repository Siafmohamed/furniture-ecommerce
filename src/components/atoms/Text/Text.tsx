// src/components/atoms/Text/Text.tsx
import React from "react";

type TextProps = {
  children: React.ReactNode;   
  size?: "sm" | "base" | "lg" | "xl" | "2xl"; 
  weight?: "normal" | "medium" | "bold";     
  color?: string;           
  className?: string;       
};

const Text = ({
  children,
  size = "base",
  weight = "normal",
  color = "text-gray-800",
  className,
}: TextProps) => {
  const sizeClasses: Record<typeof size, string> = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  const weightClasses: Record<typeof weight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  return (
    <p className={`${sizeClasses[size]} ${weightClasses[weight]} ${color} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
