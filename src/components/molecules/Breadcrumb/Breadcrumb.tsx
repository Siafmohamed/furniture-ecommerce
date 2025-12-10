import React from "react";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <Text size="sm" color="text-gray-400" className="mx-1">
                /
              </Text>
            )}
            {item.href && index < items.length - 1 ? (
              <Link href={item.href}>
                <Text size="sm" color="text-gray-600" className="hover:text-amber-600">
                  {item.label}
                </Text>
              </Link>
            ) : (
              <Text size="sm" color="text-gray-900" weight="medium">
                {item.label}
              </Text>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;









