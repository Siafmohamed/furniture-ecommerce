import React from "react";
import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";
import Icon from "../../../components/atoms/Icon/Icon";

type ShowcaseItemProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

const ShowcaseItem = ({ title, subtitle, imageUrl }: ShowcaseItemProps) => (
  <div className="p-4 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
    <div className="bg-[#FDF6F6] rounded-xl overflow-hidden shadow-lg mb-4 md:mb-0 w-full md:w-2/3">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover transition duration-500 hover:scale-[1.03]"
      />
    </div>
    <div className="md:w-1/3">
      <Heading level={3} size="xl" className="mb-1">
        {title}
      </Heading>
      {subtitle && (
        <Text size="sm" color="text-gray-500" className="mb-3">
          {subtitle}
        </Text>
      )}
      <a
        href="#"
        className="inline-flex items-center text-sm text-gray-700 hover:text-amber-600 transition"
      >
        <Text size="sm" color="text-gray-700" className="flex items-center">
          View More
          <Icon name="ArrowRight" size="small" className="ml-1" />
        </Text>
      </a>
    </div>
  </div>
);

export default ShowcaseItem;