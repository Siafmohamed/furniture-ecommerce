import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: "lazy" | "eager";
};

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`object-cover ${className}`}
    />
  );
};

export default Image;
