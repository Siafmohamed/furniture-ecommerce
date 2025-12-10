import React from "react";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;
type IconSize = "small" | "medium" | "large";

type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
};

const SIZE_MAP: Record<IconSize, number> = {
  small: 16,
  medium: 24,
  large: 32,
};

const Icon: React.FC<IconProps> = ({ name, size = "medium", color = "currentColor", className }) => {
  const LucideIcon = LucideIcons[name] as React.ComponentType<{ size?: number; color?: string; className?: string }>;
  if (!LucideIcon) return null;

  return <LucideIcon size={SIZE_MAP[size]} color={color} className={className} />;
};

export default Icon;
