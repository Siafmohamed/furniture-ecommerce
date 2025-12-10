import React from "react";
import clsx from "clsx";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self"; 
  rel?: string; 
};

const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  target = "_self",
  rel,
}) => {
  const isExternal = target === "_blank";
  const relValue = isExternal ? rel || "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={relValue}
      className={clsx(
        "text-gray-700 hover:text-amber-500 transition duration-150",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
