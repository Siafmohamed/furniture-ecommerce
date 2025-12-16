/**
 * ShareButtons Component (Molecule)
 * 
 * Social media share buttons (Facebook, Twitter, Pinterest).
 * Includes wishlist button.
 */

import React from "react";
import Icon from "../../atoms/Icon/Icon";
import clsx from "clsx";

type ShareButtonsProps = {
  /** Product URL to share */
  productUrl: string;
  /** Product name */
  productName: string;
  /** Product image URL */
  productImage?: string;
  /** Wishlist handler */
  onWishlistClick?: () => void;
  /** Whether product is in wishlist */
  isInWishlist?: boolean;
  /** Additional CSS classes */
  className?: string;
};

const ShareButtons: React.FC<ShareButtonsProps> = ({
  productUrl,
  productName,
  productImage,
  onWishlistClick,
  isInWishlist = false,
  className,
}) => {
  const encodedUrl = encodeURIComponent(productUrl);
  const encodedName = encodeURIComponent(productName);
  const encodedImage = productImage ? encodeURIComponent(productImage) : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedName}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedName}`,
  };

  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <span className="text-sm text-gray-600">Share:</span>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition"
        aria-label="Share on Facebook"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-400 transition"
        aria-label="Share on Twitter"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>
      <a
        href={shareLinks.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-red-600 transition"
        aria-label="Share on Pinterest"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.084 0 9.426-3.163 11.174-7.637-.15-.677-.227-1.452-.227-2.174 0-2.003 1.619-3.528 3.64-3.528.979 0 1.846.457 2.348 1.188.46.7.69 1.627.69 2.64 0 3.237-1.567 5.872-4.078 7.818-.978.78-2.188 1.305-3.553 1.305-2.624 0-4.888-1.423-6.178-3.425 0 0-1.682 6.673-2.045 7.95-.78 2.97-2.74 6.72-4.092 8.996-.54.92-2.01.69-2.52-.46-.54-1.19-2.187-5.812-2.925-8.77-.31-1.258-1.872-7.52-1.872-11.385C3.349 5.69 7.183 2 12 2s8.651 3.69 8.651 8.23c0 2.234-1.215 4.11-3.096 4.11-.604 0-1.048-.501-1.018-1.108.018-.45.12-.9.3-1.3.217-.495.372-1.02.46-1.56.163-.78.09-1.32-.22-1.785-.49-.73-1.397-1.037-2.12-.77-.9.33-1.46 1.237-1.46 2.308 0 .85.29 1.58.81 2.15.09.1.1.19.07.29-.03.11-.1.35-.13.45-.04.19-.13.23-.3.14-1.4-.65-2.19-2.66-2.19-4.81 0-3.44 2.8-6.2 6.2-6.2 3.26 0 5.91 2.37 5.91 5.29 0 3.26-2.05 5.88-4.9 5.88-.96 0-1.85-.5-2.15-1.18l-.58 2.2c-.21.81-.78 1.84-1.16 2.47 1.08.33 2.22.51 3.4.51 6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      </a>
      <button
        type="button"
        onClick={onWishlistClick}
        className={clsx(
          "text-gray-600 hover:text-red-500 transition",
          isInWishlist && "text-red-500"
        )}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Icon name="Heart" size="medium" className={isInWishlist ? "fill-current" : ""} />
      </button>
    </div>
  );
};

export default ShareButtons;

