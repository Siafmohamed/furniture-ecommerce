import React, { type JSX } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  level?: HeadingLevel;         
  children: React.ReactNode;    
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"; 
  weight?: "normal" | "medium" | "bold";             
  color?: string;              
  className?: string;          
};

const Heading = ({
  level = 1,
  children,
  size,
  weight = "bold",
  color = "text-gray-900",
  className,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const defaultSizes: Record<HeadingLevel, string> = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  const sizeClass = size || defaultSizes[level];

  const weightClasses: Record<typeof weight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  return (
    <Tag className={`${sizeClass} ${weightClasses[weight]} ${color} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
