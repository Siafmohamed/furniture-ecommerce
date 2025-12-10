import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

type Highlight = {
  icon: string;
  title: string;
  description: string;
};

const items: Highlight[] = [
  { icon: "Truck", title: "Free Delivery", description: "Orders above Rs. 50,000" },
  { icon: "RotateCcw", title: "90 Days Return", description: "If goods have problems" },
  { icon: "ShieldCheck", title: "Secure Payment", description: "100% secure payment" },
];

const ServiceHighlights: React.FC = () => {
  return (
    <div className="grid gap-6 rounded-2xl bg-white/70 p-8 shadow-sm backdrop-blur md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Icon name={item.icon as never} size="medium" />
          </div>
          <div>
            <Text size="base" weight="bold" color="text-gray-900">
              {item.title}
            </Text>
            <Text size="sm" color="text-gray-600">
              {item.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceHighlights;

