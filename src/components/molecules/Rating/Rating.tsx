/**
 * Rating Component (Molecule)
 * 
 * Displays product rating with stars and review count.
 * Combines star icons with text.
 */

import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import clsx from "clsx";

type RatingProps = {
  /** Rating value (0-5) */
  rating: number;
  /** Number of reviews */
  reviewCount?: number;
  /** Size of the stars */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
};

const Rating: React.FC<RatingProps> = ({
  rating,
  reviewCount,
  size = "md",
  className,
}) => {
  const starSize = size === "sm" ? "small" : size === "lg" ? "large" : "medium";

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="Star"
            size={starSize}
            className={clsx(
              index < Math.floor(rating)
                ? "text-amber-400 fill-amber-400"
                : index < rating
                ? "text-amber-400 fill-amber-400 opacity-50"
                : "text-gray-300"
            )}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <Text size="sm" className="text-gray-600">
          {reviewCount} customer review{reviewCount !== 1 ? "s" : ""}
        </Text>
      )}
    </div>
  );
};

export default Rating;




