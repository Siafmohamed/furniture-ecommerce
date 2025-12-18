/**
 * Divider Component (Atom)
 * 
 * Horizontal divider line for separating content sections.
 */

import React from "react";
import clsx from "clsx";

type DividerProps = {
  /** Additional CSS classes */
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <hr className={clsx("border-gray-200", className)} />;
};

export default Divider;













